import { allDocs, docByPath } from '@/content/docs'
import { pageDocToMarkdown } from '@/lib/markdown'
import { abs } from '@/lib/site'

export const dynamic = 'force-static'
export const dynamicParams = true

export function generateStaticParams() {
  return allDocs().map((doc) => ({ slug: doc.path === '/' ? [] : doc.path.slice(1).split('/') }))
}

function headers(path: string) {
  return {
    'Content-Type': 'text/markdown; charset=utf-8',
    'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    'Content-Location': `${abs(path)}.md`,
    Link: `<${abs(path)}>; rel="canonical"`,
    Vary: 'Accept, Accept-Encoding',
    'X-Robots-Tag': 'noindex, follow',
  }
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const path = `/${slug.join('/')}`
  const doc = docByPath(path)

  if (!doc) {
    return new Response(
      '# Page not found\n\nUse [llms.txt](/llms.txt), [the XML sitemap](/sitemap.xml), or [the HTML sitemap](/sitemap-page) to find an available page.\n',
      { status: 404, headers: headers(path) },
    )
  }

  return new Response(pageDocToMarkdown(doc), { headers: headers(doc.path) })
}
