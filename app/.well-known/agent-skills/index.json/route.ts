import { CMAC_RESEARCH_SKILL_DIGEST } from '@/lib/agent-discovery'

export function GET() {
  return Response.json(
    {
      $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
      skills: [
        {
          name: 'cmac-site-research',
          type: 'skill-md',
          description:
            "Research CMAC Roofing's published services, markets, contact details, and company information. Use when a user asks what CMAC offers, where CMAC works, or how to contact the appropriate market.",
          url: '/.well-known/agent-skills/cmac-site-research/SKILL.md',
          digest: CMAC_RESEARCH_SKILL_DIGEST,
        },
      ],
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
