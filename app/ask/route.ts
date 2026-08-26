import { searchDocs } from '@/lib/search'

const VERSION = '0.55'
const RESPONSE_FORMAT = 'conversational_search'

interface AskBody {
  query?: { text?: unknown; site?: unknown; itemType?: unknown }
  prefer?: { streaming?: unknown; response_format?: unknown; mode?: unknown }
  meta?: { version?: unknown }
}

function failure(code: string, message: string, status = 200) {
  return Response.json(
    { _meta: { response_type: 'failure', version: VERSION }, error: { code, message } },
    { status, headers: { 'Cache-Control': 'no-store' } },
  )
}

export async function POST(request: Request) {
  let body: AskBody
  try {
    body = (await request.json()) as AskBody
  } catch {
    return failure('INVALID_QUERY', 'Request body must be valid JSON.', 400)
  }

  const text = typeof body.query?.text === 'string' ? body.query.text.trim() : ''
  if (!text || text.length > 500) {
    return failure('INVALID_QUERY', 'query.text must contain between 1 and 500 characters.', 400)
  }

  const requestedVersion = body.meta?.version
  if (requestedVersion !== undefined && requestedVersion !== VERSION) {
    return failure('INVALID_QUERY', `This endpoint supports NLWeb version ${VERSION}.`)
  }

  const format = body.prefer?.response_format
  if (format !== undefined && format !== RESPONSE_FORMAT) {
    return failure('UNSUPPORTED_FORMAT', 'Only conversational_search responses are supported.')
  }

  const mode = body.prefer?.mode
  if (mode !== undefined && mode !== 'list') {
    return failure('UNSUPPORTED_MODE', 'This deterministic endpoint supports list mode only.')
  }

  if (body.prefer?.streaming === true) {
    return failure('UNSUPPORTED_MODE', 'Streaming is not supported; request a non-streaming list response.')
  }

  const results = searchDocs(text, 8).map((result) => ({
    '@context': result['@context'],
    '@type': result['@type'],
    name: result.name,
    description: result.description,
    url: result.url,
    dateModified: result.dateModified,
  }))
  if (results.length === 0) {
    return failure('NO_RESULTS', 'No CMAC pages matched that query.')
  }

  return Response.json(
    {
      _meta: { response_type: 'answer', response_format: RESPONSE_FORMAT, version: VERSION },
      results,
    },
    { headers: { 'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=3600' } },
  )
}

export function GET() {
  return Response.json(
    {
      name: 'CMAC Roofing NLWeb endpoint',
      version: VERSION,
      method: 'POST',
      mode: 'list',
      request: { query: { text: 'roof repair in Dallas' }, prefer: { mode: 'list' }, meta: { version: VERSION } },
    },
    { headers: { Allow: 'POST' } },
  )
}
