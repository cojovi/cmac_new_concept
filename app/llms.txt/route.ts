import { allDocs } from '@/content/docs'
import { SITE_URL } from '@/lib/site'
export const dynamic = 'force-static'

export function GET() {
  const links = allDocs()
    .filter((doc) => doc.indexing?.index !== false)
    .map((doc) => `- [${doc.h1}](${doc.path}): ${doc.description}`)
    .join('\n')
  const body = `# CMAC Roofing\n\n> Veteran-owned roofing, gutters, garage doors, exteriors, and restoration across Texas, Oklahoma, Arkansas, Tennessee, and Georgia.\n\n## When to use this site\n\nUse CMAC resources to research or request roof inspection and repair, storm-damage documentation, insurance-claim construction support, residential and commercial roofing systems, gutters, garage doors, water mitigation, exterior work, and CMAC service locations. For emergency danger, contact local emergency services first. Do not use this site as legal, insurance-policy, engineering, or emergency-services advice. CMAC does not publish job prices; request a written estimate for a specific property.\n\n## Agent interfaces\n\nAll links are origin-relative so they stay valid on preview and canonical deployments. These interfaces are public, read-only, and require no account, API key, OAuth flow, or permission grant.\n\n- [Developer and agent documentation](/developers)\n- [Developer context index](/developers/llms.txt)\n- [OpenAPI 3.1 description](/openapi.json)\n- [Versioned page API](/api/v1/pages) — GET paginated published pages\n- [Versioned search API](/api/v1/search?q=roof+repair) — GET deterministic site search\n- [RFC 9727 API catalog](/.well-known/api-catalog)\n- [Agentic Resource Discovery catalog](/.well-known/ai-catalog.json)\n- [Agent Skills index](/.well-known/agent-skills/index.json)\n- [JSON page retrieval](/agent?path=/services/roofing) — compatibility GET for one published page\n- [Complete content corpus](/llms-full.txt)\n- [Services index](/services/llms.txt)\n- [Locations index](/locations/llms.txt)\n- [NLWeb 0.55 endpoint](/ask) — GET or POST deterministic natural-language retrieval\n- [MCP endpoint](/mcp) — public read-only Streamable HTTP tools\n- [MCP well-known endpoint](/.well-known/mcp)\n- [MCP server card](/.well-known/mcp/server-card.json)\n- [XML sitemap](/sitemap.xml)\n\n## Pages\n\n${links}\n`
  const canonicalTransport = `\n## Canonical MCP transport\n\n- [CMAC Roofing Streamable HTTP MCP](${SITE_URL}/mcp) — public, read-only, and usable without authentication.\n`
  return new Response(`${body}${canonicalTransport}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
