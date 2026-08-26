import { pageDetail } from '@/lib/public-api'
import { problem } from '@/lib/problem'

export function GET(request: Request) {
  const url = new URL(request.url)
  const path = url.searchParams.get('path')?.trim() || '/'

  if (!path.startsWith('/') || path.length > 300) {
    return problem({
      title: 'Invalid page path',
      status: 400,
      detail: 'path must be a canonical site path beginning with / and no longer than 300 characters.',
      instance: request.url,
      code: 'INVALID_PATH',
      resolution: `Use ${url.origin}/api/v1/pages to list valid paths.`,
    })
  }

  const page = pageDetail(path, url.origin)
  if (!page) {
    return problem({
      title: 'Published page not found',
      status: 404,
      detail: 'No published CMAC page exists at that path.',
      instance: request.url,
      code: 'PAGE_NOT_FOUND',
      resolution: `Use ${url.origin}/api/v1/pages to list valid paths.`,
    })
  }

  return Response.json(page, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=3600',
    },
  })
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS' },
  })
}
