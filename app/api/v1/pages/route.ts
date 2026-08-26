import { pageCatalog, pageSummary, pagination, parseCursor, parseLimit } from '@/lib/public-api'
import { problem } from '@/lib/problem'

export function GET(request: Request) {
  const url = new URL(request.url)
  const limit = parseLimit(url.searchParams.get('limit'))
  const offset = parseCursor(url.searchParams.get('cursor'))

  if (limit === null || offset === null) {
    return problem({
      title: 'Invalid pagination parameters',
      status: 400,
      detail: 'limit must be an integer from 1 through 50 and cursor must be a cursor returned by this endpoint.',
      instance: request.url,
      code: 'INVALID_PAGINATION',
      resolution: `Start with ${url.origin}/api/v1/pages?limit=20 and reuse pagination.nextCursor verbatim.`,
    })
  }

  const docs = pageCatalog()
  if (offset > docs.length) {
    return problem({
      title: 'Cursor is outside the page catalog',
      status: 400,
      detail: 'The supplied cursor points beyond the current page catalog.',
      instance: request.url,
      code: 'CURSOR_OUT_OF_RANGE',
      resolution: `Restart at ${url.origin}/api/v1/pages?limit=${limit}.`,
    })
  }

  const items = docs.slice(offset, offset + limit).map((doc) => pageSummary(doc, url.origin))
  return Response.json(
    {
      apiVersion: 'v1',
      items,
      pagination: pagination(offset, limit, docs.length),
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=3600',
      },
    },
  )
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS' },
  })
}
