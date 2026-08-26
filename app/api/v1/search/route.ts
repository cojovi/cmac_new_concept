import { pagination, parseCursor, parseLimit } from '@/lib/public-api'
import { problem } from '@/lib/problem'
import { searchDocsPage } from '@/lib/search'

export function GET(request: Request) {
  const url = new URL(request.url)
  const query = (url.searchParams.get('q') ?? url.searchParams.get('query') ?? '').trim()
  const limit = parseLimit(url.searchParams.get('limit'))
  const offset = parseCursor(url.searchParams.get('cursor'))

  if (!query || query.length > 500) {
    return problem({
      title: 'Invalid search query',
      status: 400,
      detail: 'q must contain between 1 and 500 characters.',
      instance: request.url,
      code: 'INVALID_QUERY',
      resolution: `Send a query such as ${url.origin}/api/v1/search?q=roof+repair.`,
    })
  }
  if (limit === null || offset === null) {
    return problem({
      title: 'Invalid pagination parameters',
      status: 400,
      detail: 'limit must be an integer from 1 through 50 and cursor must be a cursor returned by this endpoint.',
      instance: request.url,
      code: 'INVALID_PAGINATION',
      resolution: `Restart with ${url.origin}/api/v1/search?q=${encodeURIComponent(query)}&limit=20.`,
    })
  }

  const { results, total } = searchDocsPage(query, offset, limit)
  if (offset > total) {
    return problem({
      title: 'Cursor is outside the result set',
      status: 400,
      detail: 'The supplied cursor points beyond the current result set.',
      instance: request.url,
      code: 'CURSOR_OUT_OF_RANGE',
      resolution: `Restart with ${url.origin}/api/v1/search?q=${encodeURIComponent(query)}&limit=${limit}.`,
    })
  }

  return Response.json(
    {
      apiVersion: 'v1',
      query,
      items: results.map((result) => ({ ...result, url: `${url.origin}${result.path === '/' ? '' : result.path}` })),
      pagination: pagination(offset, limit, total),
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
