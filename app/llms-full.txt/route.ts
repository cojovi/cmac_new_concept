import { allDocs } from '@/content/docs'
import { pageDocToMarkdown } from '@/lib/markdown'

export const dynamic = 'force-static'

export function GET() {
  const body = allDocs().map(pageDocToMarkdown).join('\n---\n\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}

