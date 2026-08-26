import { mcpServerCard } from '@/lib/mcp'

export function GET(request: Request) {
  return new Response(JSON.stringify(mcpServerCard(new URL(request.url).origin), null, 2), {
    headers: {
      'Content-Type': 'application/mcp-server-card+json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      Vary: 'Accept',
    },
  })
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS' },
  })
}
