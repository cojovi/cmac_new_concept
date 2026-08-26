import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const MACHINE_PREFIXES = ['/_md', '/agent', '/ask', '/mcp', '/api', '/.well-known']
const MACHINE_FILES = new Set(['/llms.txt', '/llms-full.txt', '/robots.txt', '/sitemap.xml'])

function isContentRequest(pathname: string): boolean {
  if (MACHINE_FILES.has(pathname) || MACHINE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return false
  if (pathname.startsWith('/_next/')) return false
  return !/\.[a-z0-9]+$/i.test(pathname) || pathname.endsWith('.md')
}

function withRepresentationHeaders(response: NextResponse, canonicalPath: string): NextResponse {
  response.headers.set('Vary', 'Accept, Accept-Encoding')
  response.headers.set('X-Robots-Tag', 'noindex, follow')
  response.headers.set('Link', `<${canonicalPath}>; rel="canonical"`)
  return response
}

export function proxy(request: NextRequest) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return NextResponse.next()

  const { pathname, searchParams } = request.nextUrl
  if (!isContentRequest(pathname)) return NextResponse.next()

  const markdownSuffix = pathname.endsWith('.md')
  const wantsMarkdown = request.headers.get('accept')?.toLocaleLowerCase('en-US').includes('text/markdown') ?? false
  const wantsAgentView = searchParams.get('mode') === 'agent'

  if (markdownSuffix || wantsMarkdown) {
    const contentPath = markdownSuffix ? pathname.slice(0, -3) || '/' : pathname
    const target = request.nextUrl.clone()
    target.pathname = contentPath === '/' ? '/_md' : `/_md${contentPath}`
    target.search = ''
    const response = NextResponse.rewrite(target)
    return withRepresentationHeaders(response, contentPath)
  }

  if (wantsAgentView) {
    const target = request.nextUrl.clone()
    target.pathname = '/agent'
    target.search = ''
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-cmac-agent-path', pathname)
    const response = NextResponse.rewrite(target, { request: { headers: requestHeaders } })
    return withRepresentationHeaders(response, pathname)
  }

  const response = NextResponse.next()
  response.headers.set('Vary', 'Accept, Accept-Encoding')
  return response
}

export const config = {
  matcher: '/:path*',
}
