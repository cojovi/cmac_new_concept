import { allDocs } from '@/content/docs'
import { pageSummary } from '@/lib/public-api'

export function GET(request: Request) {
  const origin = new URL(request.url).origin
  const body = allDocs()
    .filter((doc) => doc.indexing?.index !== false)
    .map((doc) =>
      JSON.stringify({
        ...pageSummary(doc, origin),
        '@id': `${origin}${doc.path === '/' ? '' : doc.path}#webpage`,
        isPartOf: { '@type': 'WebSite', '@id': `${origin}/#website`, name: 'CMAC Roofing' },
        provider: { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'CMAC Roofing' },
      }),
    )
    .join('\n')

  return new Response(`${body}\n`, {
    headers: {
      'Content-Type': 'application/x-jsonlines; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
