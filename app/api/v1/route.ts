import { problem } from '@/lib/problem'

export function GET(request: Request) {
  const url = new URL(request.url)
  const accept = request.headers.get('accept') ?? '*/*'
  if (!accept.includes('*/*') && !accept.includes('application/json') && !accept.includes('application/*')) {
    return problem({
      title: 'Not acceptable',
      status: 406,
      detail: 'The versioned API index is available as application/json.',
      instance: url.pathname,
      code: 'UNSUPPORTED_REPRESENTATION',
      resolution: `Retry ${url.origin}${url.pathname} with Accept: application/json.`,
    })
  }
  const origin = url.origin
  return Response.json(
    {
      name: 'CMAC Roofing public retrieval API v1',
      apiVersion: 'v1',
      authentication: { required: false, type: 'none' },
      readOnly: true,
      operations: [
        { method: 'GET', path: '/api/v1/pages', href: `${origin}/api/v1/pages`, description: 'List published pages.' },
        { method: 'GET', path: '/api/v1/page', href: `${origin}/api/v1/page?path=/services/roofing`, description: 'Retrieve one page.' },
        { method: 'GET', path: '/api/v1/search', href: `${origin}/api/v1/search?q=roof+repair`, description: 'Search published pages.' },
      ],
      links: { openapi: `${origin}/openapi.json`, documentation: `${origin}/developers` },
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300, s-maxage=3600',
        Link: `<${origin}/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json", <${origin}/developers>; rel="service-doc"`,
      },
    },
  )
}

export { OPTIONS } from '../route'
