import { allDocs } from '@/content/docs'
import { abs } from '@/lib/site'

export const dynamic = 'force-static'

export function GET() {
  const docs = allDocs().filter((doc) => doc.path === '/locations' || doc.path.startsWith('/locations/'))
  const body = `# CMAC locations\n\nCMAC serves five states. Street addresses are listed only for offices with a verified published address; Arkansas and Georgia use the regional team.\n\n${docs.map((doc) => `- [${doc.h1}](${abs(doc.path)}): ${doc.description}`).join('\n')}\n`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}

