export function GET(request: Request) {
  const origin = new URL(request.url).origin
  const body = `User-agent: *
Allow: /
Disallow: /_md
Disallow: /api/lead

Sitemap: ${origin}/sitemap.xml
schemamap: ${origin}/schemamap.xml
Host: ${origin}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
