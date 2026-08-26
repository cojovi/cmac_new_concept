import { docByPath } from '@/content/docs'
import { pageDocToMarkdown } from '@/lib/markdown'
import { problem } from '@/lib/problem'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const requestHeaders = await headers()
  const url = new URL(request.url)
  const origin = url.origin
  const path = requestHeaders.get('x-cmac-agent-path') || url.searchParams.get('path') || '/'
  const doc = docByPath(path)

  if (!doc) {
    return problem({
      title: 'Published page not found',
      status: 404,
      detail: 'No published CMAC page exists at that path.',
      instance: request.url,
      code: 'PAGE_NOT_FOUND',
      resolution: `Use ${origin}/llms.txt or ${origin}/sitemap.xml to find a published path.`,
      headers: { 'X-Robots-Tag': 'noindex, follow' },
    })
  }

  return Response.json(
    {
      '@context': 'https://schema.org',
      '@type': doc.entities.service || doc.entities.category ? 'Service' : doc.entities.market ? 'LocalBusiness' : 'WebPage',
      name: doc.h1,
      description: doc.description,
      url: `${origin}${doc.path === '/' ? '' : doc.path}`,
      dateModified: doc.updated,
      agentInterface: {
        readOnly: true,
        authentication: 'none',
        apiVersion: 'v1',
        endpoints: {
          pageCatalog: `${origin}/api/v1/pages`,
          page: `${origin}/api/v1/page?path=${encodeURIComponent(doc.path)}`,
          search: `${origin}/api/v1/search?q=roof+repair`,
          nlweb: `${origin}/ask`,
          mcp: `${origin}/.well-known/mcp`,
          openapi: `${origin}/openapi.json`,
          instructions: `${origin}/llms.txt`,
        },
      },
      breadcrumbs: doc.breadcrumbs.map((crumb) => ({
        name: crumb.name,
        url: `${origin}${crumb.path === '/' ? '' : crumb.path}`,
      })),
      markdown: pageDocToMarkdown(doc, origin),
    },
    {
      headers: {
        'Cache-Control': 'private, no-store',
        'X-Robots-Tag': 'noindex, follow',
        Vary: 'Accept, Accept-Encoding',
      },
    },
  )
}
