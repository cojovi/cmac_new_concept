import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const MACHINE_PREFIXES = ['/_md', '/agent', '/ask', '/mcp', '/api', '/.well-known']
const MACHINE_FILES = new Set(['/llms.txt', '/llms-full.txt', '/robots.txt', '/sitemap.xml'])

type Representation = 'html' | 'markdown' | 'not-acceptable'

interface AcceptRange {
  type: string
  subtype: string
  q: number
  order: number
}

function parseAccept(value: string): AcceptRange[] {
  return value.split(',').flatMap((entry, order) => {
    const [mediaRange, ...parameters] = entry.trim().toLocaleLowerCase('en-US').split(';')
    const [type, subtype] = mediaRange.split('/')
    if (!type || !subtype) return []
    const qParameter = parameters.map((parameter) => parameter.trim()).find((parameter) => parameter.startsWith('q='))
    const q = qParameter ? Number(qParameter.slice(2)) : 1
    if (!Number.isFinite(q) || q < 0 || q > 1) return []
    return [{ type, subtype, q, order }]
  })
}

function preferenceFor(ranges: AcceptRange[], type: string, subtype: string) {
  const matches = ranges
    .filter((range) => (range.type === '*' || range.type === type) && (range.subtype === '*' || range.subtype === subtype))
    .map((range) => ({
      ...range,
      specificity: (range.type === '*' ? 0 : 1) + (range.subtype === '*' ? 0 : 1),
    }))
    .sort((a, b) => b.specificity - a.specificity || a.order - b.order)
  return matches[0]
}

/** RFC 9110-style selection for the two representations this site can produce. */
function negotiate(accept: string | null): Representation {
  if (!accept?.trim()) return 'html'
  const ranges = parseAccept(accept)
  if (!ranges.length) return 'not-acceptable'
  const html = preferenceFor(ranges, 'text', 'html')
  const markdown = preferenceFor(ranges, 'text', 'markdown')
  const candidates = [
    ...(html && html.q > 0 ? [{ representation: 'html' as const, ...html }] : []),
    ...(markdown && markdown.q > 0 ? [{ representation: 'markdown' as const, ...markdown }] : []),
  ].sort((a, b) => b.q - a.q || a.order - b.order || (a.representation === 'html' ? -1 : 1))
  return candidates[0]?.representation ?? 'not-acceptable'
}

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
  const wantsAgentView = searchParams.get('mode') === 'agent'

  if (markdownSuffix) {
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

  const representation = negotiate(request.headers.get('accept'))
  if (representation === 'not-acceptable') {
    return new NextResponse(request.method === 'HEAD' ? null : 'Not Acceptable. Request text/html or text/markdown.\n', {
      status: 406,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', Vary: 'Accept, Accept-Encoding' },
    })
  }

  if (representation === 'markdown') {
    const target = request.nextUrl.clone()
    target.pathname = pathname === '/' ? '/_md' : `/_md${pathname}`
    target.search = ''
    return withRepresentationHeaders(NextResponse.rewrite(target), pathname)
  }

  const response = NextResponse.next()
  response.headers.set('Vary', 'Accept, Accept-Encoding')
  return response
}

export const config = {
  matcher: '/:path*',
}
