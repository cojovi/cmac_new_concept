export const dynamic = 'force-static'

export function GET() {
  const body = `# CMAC developer and agent resources

Use these interfaces to retrieve CMAC Roofing's public services, locations, contact information, and company resources. They are public and read-only: no credentials, OAuth scopes, payments, lead creation, or data mutation are available.

## Discovery

- [Developer documentation](/developers)
- [OpenAPI 3.1 description](/openapi.json)
- [RFC 9727 API catalog](/.well-known/api-catalog)
- [MCP server card](/.well-known/mcp/server-card.json)
- [Main agent index](/llms.txt)

## Retrieval

- GET /agent?path=/services/roofing returns one published page as JSON plus Markdown.
- POST /ask implements deterministic NLWeb 0.55 list-mode search.
- POST /mcp implements public, read-only Streamable HTTP MCP tools.
- Send Accept: text/markdown to a content URL or append .md for its Markdown representation.

## Safety and errors

REST errors use RFC 9457 application/problem+json. NLWeb failures retain the NLWeb 0.55 failure envelope. MCP errors use JSON-RPC. Use modest request rates and honor Retry-After if the hosting edge returns 429. Do not automate the customer lead form or submit personal information without the property owner's knowledge and consent.
`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
