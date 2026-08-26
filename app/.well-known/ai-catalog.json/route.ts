export function GET(request: Request) {
  const origin = new URL(request.url).origin
  const host = new URL(origin).hostname

  return Response.json(
    {
      specVersion: '1.0',
      host: { displayName: 'CMAC Roofing', identifier: host },
      entries: [
        {
          identifier: `urn:ai:${host}:mcp:website`,
          displayName: 'CMAC Roofing Website MCP',
          type: 'application/mcp-server+json',
          url: `${origin}/.well-known/mcp/server-card.json`,
          description: 'Read-only MCP tools for CMAC services, locations, published pages, and contact details.',
        },
        {
          identifier: `urn:ai:${host}:api:public-retrieval`,
          displayName: 'CMAC Roofing Public Retrieval API',
          type: 'application/vnd.oai.openapi+json',
          url: `${origin}/openapi.json`,
          description: 'Versioned, public, read-only page catalog and deterministic search API.',
        },
        {
          identifier: `urn:ai:${host}:skill:site-research`,
          displayName: 'CMAC Roofing Site Research Skill',
          type: 'text/markdown',
          url: `${origin}/.well-known/agent-skills/cmac-site-research/SKILL.md`,
          description: 'Instructions for researching CMAC offerings and markets without inventing unsupported claims.',
        },
      ],
      collections: [],
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      },
    },
  )
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS' },
  })
}
