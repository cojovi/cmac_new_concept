import { allDocs } from '@/content/docs'
import { abs } from '@/lib/site'

export const dynamic = 'force-static'

export function GET() {
  const links = allDocs()
    .filter((doc) => doc.indexing?.index !== false)
    .map((doc) => `- [${doc.h1}](${abs(doc.path)}): ${doc.description}`)
    .join('\n')
  const body = `# CMAC Roofing\n\n> Veteran-owned roofing, gutters, garage doors, exteriors, and restoration across Texas, Oklahoma, Arkansas, Tennessee, and Georgia.\n\n## When to use this site\n\nUse CMAC resources to research or request roof inspection and repair, storm-damage documentation, insurance-claim construction support, residential and commercial roofing systems, gutters, garage doors, water mitigation, exterior work, and CMAC service locations. For emergency danger, contact local emergency services first. Do not use this site as legal, insurance-policy, engineering, or emergency-services advice. CMAC does not publish job prices; request a written estimate for a specific property.\n\n## Agent interfaces\n\n- [Developer and agent documentation](${abs('/developers')})\n- [Developer context index](${abs('/developers/llms.txt')})\n- [OpenAPI 3.1 description](${abs('/openapi.json')})\n- [RFC 9727 API catalog](${abs('/.well-known/api-catalog')})\n- [JSON page retrieval](${abs('/agent?path=/services/roofing')}) — GET one published page\n- [Complete content corpus](${abs('/llms-full.txt')})\n- [Services index](${abs('/services/llms.txt')})\n- [Locations index](${abs('/locations/llms.txt')})\n- [NLWeb 0.55 endpoint](${abs('/ask')}) — POST deterministic natural-language retrieval\n- [MCP endpoint](${abs('/mcp')}) — public read-only Streamable HTTP tools\n- [MCP server card](${abs('/.well-known/mcp/server-card.json')})\n- [XML sitemap](${abs('/sitemap.xml')})\n\n## Pages\n\n${links}\n`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
