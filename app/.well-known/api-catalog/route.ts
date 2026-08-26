export function GET(request: Request) {
  const origin = new URL(request.url).origin
  return Response.json(
    {
      linkset: [
        {
          anchor: origin,
          item: [
            { href: `${origin}/openapi.json`, type: 'application/vnd.oai.openapi+json' },
            { href: `${origin}/.well-known/mcp/server-card.json`, type: 'application/json' },
            { href: `${origin}/.well-known/agent-skills/index.json`, type: 'application/json' },
          ],
          'service-desc': [{ href: `${origin}/openapi.json`, type: 'application/vnd.oai.openapi+json' }],
          'service-doc': [{ href: `${origin}/developers`, type: 'text/html' }],
          'service-meta': [{ href: `${origin}/llms.txt`, type: 'text/plain' }],
        },
      ],
    },
    {
      headers: {
        'Content-Type': 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
      },
    },
  )
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS' },
  })
}
