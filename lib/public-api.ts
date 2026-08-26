import { allDocs, docByPath } from '@/content/docs'
import type { PageDoc } from '@/content/types'
import { pageDocToMarkdown } from '@/lib/markdown'

export const API_VERSION = 'v1'
export const DEFAULT_PAGE_LIMIT = 20
export const MAX_PAGE_LIMIT = 50

export function parseLimit(value: string | null) {
  if (!value) return DEFAULT_PAGE_LIMIT
  const number = Number(value)
  return Number.isInteger(number) ? Math.max(1, Math.min(number, MAX_PAGE_LIMIT)) : null
}

export function parseCursor(value: string | null) {
  if (!value) return 0
  try {
    const decoded = Buffer.from(value, 'base64url').toString('utf8')
    const match = /^cmac:v1:(\d+)$/.exec(decoded)
    return match ? Number(match[1]) : null
  } catch {
    return null
  }
}

export function cursorFor(offset: number) {
  return Buffer.from(`cmac:v1:${offset}`, 'utf8').toString('base64url')
}

export function typeForDoc(doc: PageDoc): 'WebPage' | 'Service' | 'LocalBusiness' {
  if (doc.entities.service || doc.entities.category) return 'Service'
  if (doc.entities.market) return 'LocalBusiness'
  return 'WebPage'
}

export function pageSummary(doc: PageDoc, origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': typeForDoc(doc),
    name: doc.h1,
    description: doc.description,
    url: `${origin}${doc.path === '/' ? '' : doc.path}`,
    path: doc.path,
    dateModified: doc.updated,
  }
}

export function pageDetail(path: string, origin: string) {
  const doc = docByPath(path)
  if (!doc) return null
  return {
    ...pageSummary(doc, origin),
    breadcrumbs: doc.breadcrumbs.map((crumb) => ({
      name: crumb.name,
      url: `${origin}${crumb.path === '/' ? '' : crumb.path}`,
    })),
    markdown: pageDocToMarkdown(doc, origin),
  }
}

export function pageCatalog() {
  return allDocs()
    .filter((doc) => doc.indexing?.index !== false)
    .sort((a, b) => a.path.localeCompare(b.path))
}

export function pagination(offset: number, limit: number, total: number) {
  const nextOffset = offset + limit
  const hasMore = nextOffset < total
  return {
    limit,
    total,
    hasMore,
    nextCursor: hasMore ? cursorFor(nextOffset) : null,
  }
}
