import { allDocs } from '@/content/docs'

export function GET(request: Request) {
  const origin = new URL(request.url).origin
  const lastModified = allDocs()
    .map((doc) => doc.updated)
    .sort()
    .at(-1)
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:sf="http://schema.org/schemas/schemafeed/0.1">
  <url>
    <loc>${origin}/feeds/site.jsonl</loc>
    <lastmod>${lastModified}</lastmod>
    <sf:contentType>structuredData/schema.org</sf:contentType>
  </url>
</urlset>
`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
