import { mcpServerCard } from '@/lib/mcp'

export function GET(request: Request) {
  return Response.json(mcpServerCard(new URL(request.url).origin), {
    headers: { 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=3600, s-maxage=86400' },
  })
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS' },
  })
}
