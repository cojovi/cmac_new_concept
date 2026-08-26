import { problem } from '@/lib/problem'

function apiIndex(origin: string) {
  return {
    name: 'CMAC Roofing public retrieval API',
    description: 'Public, read-only access to CMAC Roofing published pages and deterministic site search.',
    apiVersion: 'v1',
    authentication: { required: false, type: 'none' },
    readOnly: true,
    links: {
      currentVersion: `${origin}/api/v1`,
      openapi: `${origin}/openapi.json`,
      documentation: `${origin}/developers`,
    },
  }
}

export function GET(request: Request) {
  const url = new URL(request.url)
  const accept = request.headers.get('accept') ?? '*/*'
  if (!accept.includes('*/*') && !accept.includes('application/json') && !accept.includes('application/*')) {
    return problem({
      title: 'Not acceptable',
      status: 406,
      detail: 'The API discovery document is available as application/json.',
      instance: url.pathname,
      code: 'UNSUPPORTED_REPRESENTATION',
      resolution: `Retry ${url.origin}${url.pathname} with Accept: application/json.`,
    })
  }
  const origin = url.origin
  return Response.json(apiIndex(origin), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
      Link: `<${origin}/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json", <${origin}/developers>; rel="service-doc"`,
    },
  })
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS' },
  })
}
