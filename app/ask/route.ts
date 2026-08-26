import { searchDocs } from '@/lib/search'
import { problem } from '@/lib/problem'

const VERSION = '0.55'
const RESPONSE_FORMAT = 'conversational_search'

interface AskBody {
  query?: string | { text?: unknown; site?: unknown; itemType?: unknown }
  prefer?: { streaming?: unknown; response_format?: unknown; mode?: unknown }
  meta?: { version?: unknown }
}

const publicHeaders = { 'Access-Control-Allow-Origin': '*' }

function failure(code: string, message: string, status = 200) {
  return Response.json(
    { _meta: { response_type: 'failure', version: VERSION }, error: { code, message } },
    { status, headers: { ...publicHeaders, 'Cache-Control': 'no-store' } },
  )
}

function queryText(query: AskBody['query']) {
  if (typeof query === 'string') return query.trim()
  return typeof query?.text === 'string' ? query.text.trim() : ''
}

function answer(text: string, origin: string) {
  if (!text || text.length > 500) {
    return failure('INVALID_QUERY', 'query or query.text must contain between 1 and 500 characters.', 400)
  }

  const results = searchDocs(text, 8).map((result) => ({
    '@context': result['@context'],
    '@type': result['@type'],
    name: result.name,
    description: result.description,
    url: `${origin}${result.path === '/' ? '' : result.path}`,
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
    {
      headers: {
        ...publicHeaders,
        'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=3600',
      },
    },
  )
}

export async function POST(request: Request) {
  let body: AskBody
  try {
    body = (await request.json()) as AskBody
  } catch {
    return failure('INVALID_QUERY', 'Request body must be valid JSON.', 400)
  }

  const text = queryText(body.query)

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

  return answer(text, new URL(request.url).origin)
}

export function GET(request: Request) {
  const url = new URL(request.url)
  const query = (url.searchParams.get('query') ?? url.searchParams.get('q') ?? '').trim()
  if (query) return answer(query, url.origin)

  return Response.json(
    {
      name: 'CMAC Roofing NLWeb endpoint',
      version: VERSION,
      methods: ['GET', 'POST'],
      mode: 'list',
      request: { query: 'roof repair in Dallas', prefer: { mode: 'list' }, meta: { version: VERSION } },
    },
    { headers: { ...publicHeaders, Allow: 'GET, POST' } },
  )
}

function methodNotAllowed(request: Request) {
  const url = new URL(request.url)
  return problem({
    title: 'Method not allowed',
    status: 405,
    detail: 'The NLWeb endpoint supports GET for capabilities and POST for deterministic search.',
    instance: request.url,
    code: 'METHOD_NOT_ALLOWED',
    resolution: `Read ${url.origin}/developers and send a GET or POST request.`,
    headers: { Allow: 'GET, POST, OPTIONS' },
  })
}

export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      ...publicHeaders,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      Allow: 'GET, POST, OPTIONS',
    },
  })
}
