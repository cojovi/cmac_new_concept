import { problem } from '@/lib/problem'

function notFound(request: Request) {
  const url = new URL(request.url)
  return problem({
    title: 'API route not found',
    status: 404,
    detail: 'No public CMAC JSON API operation exists at this path.',
    instance: url.href,
    code: 'API_ROUTE_NOT_FOUND',
    resolution: `Use ${url.origin}/openapi.json or ${url.origin}/developers to discover supported operations.`,
    headers: { Link: `<${url.origin}/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"` },
  })
}

export const GET = notFound
export const POST = notFound
export const PUT = notFound
export const PATCH = notFound
export const DELETE = notFound

export function OPTIONS(request: Request) {
  const response = notFound(request)
  response.headers.set('Allow', '')
  return response
}
