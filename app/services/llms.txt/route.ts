import { allDocs } from '@/content/docs'
import { abs } from '@/lib/site'

export const dynamic = 'force-static'

export function GET() {
  const docs = allDocs().filter((doc) => doc.path === '/services' || doc.path.startsWith('/services/'))
  const body = `# CMAC services\n\nUse these pages to match a property need to a CMAC service. Availability can vary by market; confirm the project address with CMAC.\n\n${docs.map((doc) => `- [${doc.h1}](${abs(doc.path)}): ${doc.description}`).join('\n')}\n`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}

