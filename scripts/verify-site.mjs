const base = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '')

const failures = []
const results = []

function check(condition, label, detail = '') {
  if (condition) results.push(label)
  else failures.push(`${label}${detail ? ` — ${detail}` : ''}`)
}

async function request(path, init) {
  return fetch(`${base}${path}`, { redirect: 'manual', ...init })
}

async function readJson(response, label) {
  const text = await response.text()
  try {
    return JSON.parse(text)
  } catch {
    failures.push(`${label} did not return JSON — status ${response.status}, body ${text.slice(0, 120)}`)
    return null
  }
}

const sitemapResponse = await request('/sitemap.xml')
check(sitemapResponse.status === 200, 'sitemap returns 200', String(sitemapResponse.status))
const sitemap = await sitemapResponse.text()
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname)
check(urls.length === 65, 'sitemap exposes exactly 65 public content routes', String(urls.length))

const canonicals = new Map()
const internalLinks = new Set()
for (const path of urls) {
  const response = await request(path)
  const html = await response.text()
  const h1Count = (html.match(/<h1\b/gi) || []).length
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1]
    ?? html.match(/<link[^>]+href="([^"]+)"[^>]+rel="canonical"/i)?.[1]
  check(response.status === 200, `${path} returns 200`, String(response.status))
  check(h1Count === 1, `${path} has exactly one h1`, String(h1Count))
  check(Boolean(canonical), `${path} has canonical metadata`)
  if (canonical) {
    const prior = canonicals.get(canonical)
    check(!prior, `${path} canonical is unique`, prior ? `also used by ${prior}` : '')
    canonicals.set(canonical, path)
  }
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1]
    if (href.startsWith('/') && !href.startsWith('/_next/') && !href.startsWith('//')) {
      internalLinks.add(href.split('#')[0] || '/')
    }
  }
  for (const script of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(script[1].replaceAll('&quot;', '"'))
      check(Boolean(data['@context']), `${path} JSON-LD has a context`)
      check(!JSON.stringify(data).includes('AggregateRating'), `${path} omits AggregateRating schema`)
      check(!JSON.stringify(data).includes('openingHours'), `${path} omits unsourced hours schema`)
    } catch (error) {
      failures.push(`${path} has invalid JSON-LD — ${error.message}`)
    }
  }
  if (path === '/' || ['/about', '/contact', '/reviews', '/faqs'].includes(path)) {
    const rawText = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    check(rawText.length > 700, `${path} has substantive raw HTML`, String(rawText.length))
  }
}

for (const path of internalLinks) {
  if (path.startsWith('/api/') || path === '/thank-you') continue
  const response = await request(path)
  check(response.status < 400, `internal link ${path} resolves`, String(response.status))
}

const unknown = await request('/this-page-does-not-exist-cmac')
check(unknown.status === 404, 'unknown paths return a genuine 404', String(unknown.status))

const markdown = await request('/services/roofing', { headers: { Accept: 'text/markdown' } })
check(markdown.status === 200, 'Accept markdown negotiation returns 200', String(markdown.status))
check((markdown.headers.get('content-type') || '').includes('text/markdown'), 'Accept negotiation returns markdown content type')
check((markdown.headers.get('vary') || '').toLowerCase().includes('accept'), 'markdown response varies on Accept')
check((markdown.headers.get('x-robots-tag') || '').includes('noindex'), 'markdown representation is noindex')
check((markdown.headers.get('link') || '').includes('rel="canonical"'), 'markdown representation links its canonical')

const htmlPreferred = await request('/services/roofing', {
  headers: { Accept: 'text/markdown;q=0.4, text/html;q=0.9' },
})
check((htmlPreferred.headers.get('content-type') || '').includes('text/html'), 'Accept q-values can prefer HTML')

const markdownRejected = await request('/services/roofing', {
  headers: { Accept: 'text/markdown;q=0, text/html;q=0.5' },
})
check((markdownRejected.headers.get('content-type') || '').includes('text/html'), 'Accept q=0 rejects Markdown')

const notAcceptable = await request('/services/roofing', { headers: { Accept: 'application/json' } })
check(notAcceptable.status === 406, 'unsupported content representations return 406', String(notAcceptable.status))

const suffix = await request('/services/roofing.md')
check(suffix.status === 200, '.md suffix returns 200', String(suffix.status))
check((suffix.headers.get('content-type') || '').includes('text/markdown'), '.md suffix returns markdown')

const agent = await request('/services/roofing?mode=agent')
check(agent.status === 200, 'agent mode returns 200', String(agent.status))
check((agent.headers.get('x-robots-tag') || '').includes('noindex'), 'agent mode is noindex')

for (const path of ['/llms.txt', '/llms-full.txt', '/services/llms.txt', '/locations/llms.txt', '/developers/llms.txt']) {
  const response = await request(path)
  check(response.status === 200, `${path} returns 200`, String(response.status))
  const text = await response.text()
  check(text.length > 500, `${path} contains substantive content`, String(text.length))
}

const openapi = await request('/openapi.json')
const openapiBody = await readJson(openapi, 'OpenAPI description')
check(openapi.status === 200, 'OpenAPI description returns 200', String(openapi.status))
check(openapiBody?.openapi === '3.1.1', 'OpenAPI description declares version 3.1.1')
check(openapiBody?.security?.length === 0, 'OpenAPI honestly declares public unauthenticated access')
const operationIds = Object.values(openapiBody?.paths ?? {}).flatMap((path) =>
  Object.values(path).map((operation) => operation?.operationId).filter(Boolean),
)
check(operationIds.length === new Set(operationIds).size, 'OpenAPI operation IDs are unique')

const apiCatalog = await request('/.well-known/api-catalog')
const apiCatalogBody = await readJson(apiCatalog, 'RFC 9727 API catalog')
check(apiCatalog.status === 200, 'RFC 9727 API catalog returns 200', String(apiCatalog.status))
check((apiCatalog.headers.get('content-type') || '').includes('application/linkset+json'), 'API catalog uses the Linkset JSON media type')
check(Array.isArray(apiCatalogBody?.linkset) && apiCatalogBody.linkset.length > 0, 'API catalog contains API links')

const apiNotFound = await request('/api/definitely-not-real')
const apiNotFoundBody = await readJson(apiNotFound, 'unknown API route')
check(apiNotFound.status === 404, 'unknown API paths return 404', String(apiNotFound.status))
check((apiNotFound.headers.get('content-type') || '').includes('application/problem+json'), 'unknown API paths use RFC 9457 problem JSON')
check(Boolean(apiNotFoundBody?.code && apiNotFoundBody?.resolution), 'API problems include code and resolution')

const search = await request('/search?q=roof+repair')
check(search.status === 200, 'site search returns 200', String(search.status))
check((await search.text()).toLowerCase().includes('roof repair'), 'site search renders content-index results')

const askSuccess = await request('/ask', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: { text: 'roof repair Dallas' }, prefer: { mode: 'list' }, meta: { version: '0.55' } }),
})
const askSuccessBody = await readJson(askSuccess, 'NLWeb success request')
check(askSuccess.status === 200 && askSuccessBody?._meta?.response_type === 'answer', 'NLWeb returns a typed answer')
check(Array.isArray(askSuccessBody.results) && askSuccessBody.results.length > 0, 'NLWeb returns deterministic results')

const askFailure = await request('/ask', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: { text: '' } }),
})
const askFailureBody = await readJson(askFailure, 'NLWeb failure request')
check(askFailure.status === 400 && askFailureBody?._meta?.response_type === 'failure', 'NLWeb validates invalid input')

const mcpHeaders = { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' }
const mcpList = await request('/mcp', {
  method: 'POST',
  headers: mcpHeaders,
  body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list', params: {} }),
})
const mcpListBody = await readJson(mcpList, 'MCP tools/list')
const toolNames = mcpListBody?.result?.tools?.map((tool) => tool.name) ?? []
check(mcpList.status === 200, 'MCP tools/list returns 200', String(mcpList.status))
check(['search_site', 'get_page', 'list_services', 'list_locations', 'get_contact'].every((name) => toolNames.includes(name)), 'MCP exposes all five read-only tools', toolNames.join(', '))

const mcpCall = await request('/mcp', {
  method: 'POST',
  headers: mcpHeaders,
  body: JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'get_contact', arguments: {} } }),
})
const mcpCallBody = await readJson(mcpCall, 'MCP tools/call')
check(mcpCall.status === 200 && !mcpCallBody.error, 'MCP tool call succeeds')

const mcpDiscover = await request('/.well-known/mcp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/event-stream',
    'MCP-Protocol-Version': '2026-07-28',
    'Mcp-Method': 'server/discover',
  },
  body: JSON.stringify({
    jsonrpc: '2.0',
    id: 3,
    method: 'server/discover',
    params: {
      _meta: {
        'io.modelcontextprotocol/protocolVersion': '2026-07-28',
        'io.modelcontextprotocol/clientInfo': { name: 'cmac-verifier', version: '1.0.0' },
        'io.modelcontextprotocol/clientCapabilities': {},
      },
    },
  }),
})
const mcpDiscoverBody = await readJson(mcpDiscover, 'MCP server/discover')
check(mcpDiscover.status === 200 && mcpDiscoverBody?.result?.resultType === 'complete', 'MCP modern discovery succeeds')
check(mcpDiscoverBody?.result?.supportedVersions?.includes('2025-11-25'), 'MCP discovery advertises legacy compatibility')

const mcpCard = await request('/.well-known/mcp/server-card.json')
const mcpCardBody = await readJson(mcpCard, 'MCP server card')
check(mcpCard.status === 200, 'MCP server card returns 200', String(mcpCard.status))
check(mcpCardBody?.remotes?.[0]?.url === `${base}/mcp`, 'MCP server card advertises the serving deployment origin')

const invalidLead = await request('/api/lead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'x-requested-with': 'fetch' },
  body: JSON.stringify({}),
})
check(invalidLead.status === 400, 'lead endpoint rejects invalid input', String(invalidLead.status))

const honeypotLead = await request('/api/lead', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'x-requested-with': 'fetch' },
  body: JSON.stringify({ formKind: 'quote', name: 'Test User', phone: '8175550100', email: 'test@example.com', service: 'Roof repair', address: '123 Main Street', consent: 'yes', company: 'spam.example' }),
})
check(honeypotLead.status === 400, 'lead endpoint rejects honeypot submissions', String(honeypotLead.status))

console.log(`Verified ${results.length} checks across ${urls.length} public routes.`)
if (failures.length) {
  console.error(`\n${failures.length} verification failure(s):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
}
