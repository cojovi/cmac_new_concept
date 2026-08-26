import { docByPath } from '@/content/docs'
import { pageDocToMarkdown } from '@/lib/markdown'
import { abs } from '@/lib/site'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const requestHeaders = await headers()
  const path = requestHeaders.get('x-cmac-agent-path') || new URL(request.url).searchParams.get('path') || '/'
  const doc = docByPath(path)

  if (!doc) {
    return Response.json(
      {
        error: 'PAGE_NOT_FOUND',
        message: 'No published CMAC page exists at that path.',
        discovery: { llms: abs('/llms.txt'), sitemap: abs('/sitemap.xml') },
      },
      { status: 404, headers: { 'X-Robots-Tag': 'noindex, follow' } },
    )
  }

  return Response.json(
    {
      '@context': 'https://schema.org',
      '@type': doc.entities.service || doc.entities.category ? 'Service' : doc.entities.market ? 'LocalBusiness' : 'WebPage',
      name: doc.h1,
      description: doc.description,
      url: abs(doc.path),
      dateModified: doc.updated,
      breadcrumbs: doc.breadcrumbs.map((crumb) => ({ name: crumb.name, url: abs(crumb.path) })),
      markdown: pageDocToMarkdown(doc),
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
