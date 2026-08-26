import { callMcpTool, MCP_PROTOCOL_VERSION, MCP_SERVER_INFO, MCP_TOOLS } from '@/lib/mcp'

type JsonRpcId = string | number | null
type JsonRpcRequest = { jsonrpc?: unknown; id?: JsonRpcId; method?: unknown; params?: unknown }

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, MCP-Protocol-Version, MCP-Session-Id, Last-Event-ID',
  'Access-Control-Expose-Headers': 'MCP-Protocol-Version',
}

function jsonRpc(id: JsonRpcId, result: unknown, status = 200) {
  return Response.json(
    { jsonrpc: '2.0', id, result },
    { status, headers: { ...corsHeaders, 'Cache-Control': 'no-store', 'MCP-Protocol-Version': MCP_PROTOCOL_VERSION } },
  )
}

function jsonRpcError(id: JsonRpcId, code: number, message: string, status = 200) {
  return Response.json(
    { jsonrpc: '2.0', id, error: { code, message } },
    { status, headers: { ...corsHeaders, 'Cache-Control': 'no-store', 'MCP-Protocol-Version': MCP_PROTOCOL_VERSION } },
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

  switch (message.method) {
    case 'initialize': {
      const requested = typeof params.protocolVersion === 'string' ? params.protocolVersion : MCP_PROTOCOL_VERSION
      const supported = ['2025-11-25', '2025-06-18', '2025-03-26']
      const protocolVersion = supported.includes(requested) ? requested : MCP_PROTOCOL_VERSION
      return jsonRpc(id, {
        protocolVersion,
        capabilities: { tools: { listChanged: false } },
        serverInfo: MCP_SERVER_INFO,
        instructions: 'Use these read-only tools for CMAC Roofing services, locations, contact details, and published site content.',
      })
    }
    case 'ping':
      return jsonRpc(id, {})
    case 'tools/list':
      return jsonRpc(id, { tools: MCP_TOOLS })
    case 'tools/call': {
      const name = typeof params.name === 'string' ? params.name : ''
      const args = params.arguments && typeof params.arguments === 'object' && !Array.isArray(params.arguments)
        ? (params.arguments as Record<string, unknown>)
        : {}
      if (!MCP_TOOLS.some((tool) => tool.name === name)) return jsonRpcError(id, -32602, `Unknown tool: ${name || '(missing)'}`)
      return jsonRpc(id, callMcpTool(name, args))
    }
    default:
      return jsonRpcError(id, -32601, `Method not found: ${message.method}`)
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

