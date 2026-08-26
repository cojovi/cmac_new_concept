import {
  callMcpTool,
  MCP_MODERN_PROTOCOL_VERSION,
  MCP_PROTOCOL_VERSION,
  MCP_SERVER_INFO,
  MCP_SUPPORTED_PROTOCOL_VERSIONS,
  MCP_TOOLS,
} from '@/lib/mcp'

type JsonRpcId = string | number | null
type JsonRpcRequest = { jsonrpc?: unknown; id?: JsonRpcId; method?: unknown; params?: unknown }

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, MCP-Protocol-Version, MCP-Session-Id, Mcp-Method, Mcp-Name, Last-Event-ID',
  'Access-Control-Expose-Headers': 'MCP-Protocol-Version',
}

function jsonRpc(id: JsonRpcId, result: Record<string, unknown>, status = 200, protocolVersion = MCP_PROTOCOL_VERSION, modern = false) {
  return Response.json(
    { jsonrpc: '2.0', id, result: modern ? { resultType: 'complete', ...result } : result },
    { status, headers: { ...corsHeaders, 'Cache-Control': 'no-store', 'MCP-Protocol-Version': protocolVersion } },
  )
}

function jsonRpcError(id: JsonRpcId, code: number, message: string, status = 200, protocolVersion = MCP_PROTOCOL_VERSION) {
  return Response.json(
    { jsonrpc: '2.0', id, error: { code, message } },
    { status, headers: { ...corsHeaders, 'Cache-Control': 'no-store', 'MCP-Protocol-Version': protocolVersion } },
  )
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') ?? ''
  if (!contentType.toLocaleLowerCase('en-US').includes('application/json')) {
    return jsonRpcError(null, -32600, 'Content-Type must be application/json.', 415)
  }

  const accept = request.headers.get('accept') ?? '*/*'
  if (!accept.includes('*/*') && !accept.includes('application/json') && !accept.includes('text/event-stream')) {
    return jsonRpcError(null, -32600, 'Accept must include application/json or text/event-stream.', 406)
  }

  let message: JsonRpcRequest
  try {
    const parsed = (await request.json()) as unknown
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return jsonRpcError(null, -32600, 'Invalid JSON-RPC request.')
    message = parsed as JsonRpcRequest
  } catch {
    return jsonRpcError(null, -32700, 'Parse error.', 400)
  }

  if (message.jsonrpc !== '2.0' || typeof message.method !== 'string') {
    return jsonRpcError(message.id ?? null, -32600, 'Invalid JSON-RPC request.')
  }

  if (message.method.startsWith('notifications/')) {
    return new Response(null, { status: 202, headers: { ...corsHeaders, 'MCP-Protocol-Version': MCP_PROTOCOL_VERSION } })
  }

  const id = message.id ?? null
  const params = message.params && typeof message.params === 'object' && !Array.isArray(message.params)
    ? (message.params as Record<string, unknown>)
    : {}
  const meta = params._meta && typeof params._meta === 'object' && !Array.isArray(params._meta)
    ? (params._meta as Record<string, unknown>)
    : {}
  const declaredVersion = request.headers.get('mcp-protocol-version')
    ?? (typeof meta['io.modelcontextprotocol/protocolVersion'] === 'string'
      ? meta['io.modelcontextprotocol/protocolVersion']
      : undefined)
  const modern = message.method === 'server/discover' || declaredVersion === MCP_MODERN_PROTOCOL_VERSION
  const responseVersion = modern ? MCP_MODERN_PROTOCOL_VERSION : (declaredVersion ?? MCP_PROTOCOL_VERSION)

  if (declaredVersion && !MCP_SUPPORTED_PROTOCOL_VERSIONS.includes(declaredVersion as typeof MCP_SUPPORTED_PROTOCOL_VERSIONS[number])) {
    return jsonRpcError(id, -32600, `Unsupported MCP protocol version: ${declaredVersion}`, 400)
  }

  if (modern && message.method !== 'server/discover') {
    const methodHeader = request.headers.get('mcp-method')
    if (methodHeader !== message.method) {
      return jsonRpcError(id, -32600, 'Mcp-Method must match the JSON-RPC method.', 400, responseVersion)
    }
    if (message.method === 'tools/call') {
      const nameHeader = request.headers.get('mcp-name')
      const bodyName = typeof params.name === 'string' ? params.name : ''
      if (nameHeader !== bodyName) return jsonRpcError(id, -32600, 'Mcp-Name must match params.name.', 400, responseVersion)
    }
  }

  switch (message.method) {
    case 'server/discover':
      return jsonRpc(id, {
        supportedVersions: [...MCP_SUPPORTED_PROTOCOL_VERSIONS],
        capabilities: { tools: {} },
        serverInfo: MCP_SERVER_INFO,
        instructions: 'Use these public, read-only tools for CMAC services, locations, contact details, and published content.',
        ttlMs: 300_000,
        cacheScope: 'public',
      }, 200, MCP_MODERN_PROTOCOL_VERSION, true)
    case 'initialize': {
      const requested = typeof params.protocolVersion === 'string' ? params.protocolVersion : MCP_PROTOCOL_VERSION
      const supported = MCP_SUPPORTED_PROTOCOL_VERSIONS.filter((version) => version !== MCP_MODERN_PROTOCOL_VERSION)
      const protocolVersion = supported.some((version) => version === requested) ? requested : MCP_PROTOCOL_VERSION
      return jsonRpc(id, {
        protocolVersion,
        capabilities: { tools: { listChanged: false } },
        serverInfo: MCP_SERVER_INFO,
        instructions: 'Use these read-only tools for CMAC Roofing services, locations, contact details, and published site content.',
      }, 200, protocolVersion)
    }
    case 'ping':
      return jsonRpc(id, {}, 200, responseVersion, modern)
    case 'tools/list':
      return jsonRpc(
        id,
        modern ? { tools: MCP_TOOLS, ttlMs: 300_000, cacheScope: 'public' } : { tools: MCP_TOOLS },
        200,
        responseVersion,
        modern,
      )
    case 'tools/call': {
      const name = typeof params.name === 'string' ? params.name : ''
      const args = params.arguments && typeof params.arguments === 'object' && !Array.isArray(params.arguments)
        ? (params.arguments as Record<string, unknown>)
        : {}
      if (!MCP_TOOLS.some((tool) => tool.name === name)) return jsonRpcError(id, -32602, `Unknown tool: ${name || '(missing)'}`, 200, responseVersion)
      return jsonRpc(id, callMcpTool(name, args), 200, responseVersion, modern)
    }
    default:
      return jsonRpcError(id, -32601, `Method not found: ${message.method}`, 200, responseVersion)
  }
}

export function GET() {
  return Response.json(
    {
      error: 'SSE_NOT_SUPPORTED',
      message: 'This stateless MCP server does not open server-initiated SSE streams. Send JSON-RPC requests with POST.',
    },
    { status: 405, headers: { ...corsHeaders, Allow: 'POST, OPTIONS' } },
  )
}

export function DELETE() {
  return new Response(null, { status: 405, headers: { ...corsHeaders, Allow: 'POST, OPTIONS' } })
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders })
}
