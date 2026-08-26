export function GET(request: Request) {
  const origin = new URL(request.url).origin
  const host = new URL(origin).hostname
  const privacyPolicyUrl = `${origin}/privacy-policy`
  const termsOfServiceUrl = `${origin}/terms`

  function trustManifest(identity: string) {
    return { identity, privacyPolicyUrl, termsOfServiceUrl }
  }

  const mcpIdentifier = `urn:air:${host}:mcp:website`
  const apiIdentifier = `urn:air:${host}:api:public-retrieval`
  const skillIdentifier = `urn:air:${host}:skill:site-research`

  return Response.json(
    {
      specVersion: '1.0',
      host: { displayName: 'CMAC Roofing', identifier: host },
      entries: [
        {
          identifier: mcpIdentifier,
          displayName: 'CMAC Roofing Website MCP',
          type: 'application/mcp-server-card+json',
          url: `${origin}/.well-known/mcp/server-card.json`,
          description: 'Read-only MCP tools for CMAC services, locations, published pages, and contact details.',
          trustManifest: trustManifest(mcpIdentifier),
        },
        {
          identifier: apiIdentifier,
          displayName: 'CMAC Roofing Public Retrieval API',
          type: 'application/vnd.oai.openapi+json',
          url: `${origin}/openapi.json`,
          description: 'Versioned, public, read-only page catalog and deterministic search API.',
          trustManifest: trustManifest(apiIdentifier),
        },
        {
          identifier: skillIdentifier,
          displayName: 'CMAC Roofing Site Research Skill',
          type: 'text/markdown',
          url: `${origin}/.well-known/agent-skills/cmac-site-research/SKILL.md`,
          description: 'Instructions for researching CMAC offerings and markets without inventing unsupported claims.',
          trustManifest: trustManifest(skillIdentifier),
        },
      ],
      collections: [],
    },
    {
      headers: {
        'Content-Type': 'application/ai-catalog+json; charset=utf-8',
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
