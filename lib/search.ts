import { allDocs } from '@/content/docs'
import type { PageDoc, Section } from '@/content/types'
import { pageDocToMarkdown } from '@/lib/markdown'
import { abs } from '@/lib/site'

export interface SiteSearchResult {
  '@context': 'https://schema.org'
  '@type': 'WebPage' | 'Service' | 'LocalBusiness'
  name: string
  description: string
  url: string
  path: string
  dateModified: string
  score: number
}

const stopWords = new Set(['a', 'an', 'and', 'at', 'for', 'from', 'in', 'is', 'me', 'of', 'on', 'the', 'to', 'with'])

function tokens(value: string): string[] {
  return value
    .toLocaleLowerCase('en-US')
    .normalize('NFKD')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter((token) => token.length > 1 && !stopWords.has(token))
}

function typeFor(doc: PageDoc): SiteSearchResult['@type'] {
  if (doc.entities.service || doc.entities.category) return 'Service'
  if (doc.entities.market) return 'LocalBusiness'
  return 'WebPage'
}

function searchableText(doc: PageDoc): string {
  return `${doc.title} ${doc.h1} ${doc.description} ${pageDocToMarkdown(doc)}`.toLocaleLowerCase('en-US')
}

function scoreDoc(doc: PageDoc, queryTokens: string[]): number {
  const title = `${doc.title} ${doc.h1}`.toLocaleLowerCase('en-US')
  const description = doc.description.toLocaleLowerCase('en-US')
  const body = searchableText(doc)

  return queryTokens.reduce((score, token) => {
    const exactTitle = title.includes(token) ? 12 : 0
    const exactDescription = description.includes(token) ? 5 : 0
    const occurrences = body.split(token).length - 1
    return score + exactTitle + exactDescription + Math.min(occurrences, 8)
  }, 0)
}

export function searchDocs(query: string, limit = 8): SiteSearchResult[] {
  return searchDocsPage(query, 0, limit).results
}

export function searchDocsPage(query: string, offset = 0, limit = 8): { results: SiteSearchResult[]; total: number } {
  const queryTokens = [...new Set(tokens(query))]
  if (queryTokens.length === 0) return { results: [], total: 0 }

  const ranked = allDocs()
    .map((doc) => ({ doc, score: scoreDoc(doc, queryTokens) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.doc.path.localeCompare(b.doc.path))

  const safeOffset = Math.max(0, Math.trunc(offset))
  const safeLimit = Math.max(1, Math.min(Math.trunc(limit), 50))
  const results = ranked
    .slice(safeOffset, safeOffset + safeLimit)
    .map(({ doc, score }) => ({
      '@context': 'https://schema.org' as const,
      '@type': typeFor(doc),
      name: doc.h1,
      description: doc.description,
      url: abs(doc.path),
      path: doc.path,
      dateModified: doc.updated,
      score,
    }))

  return { results, total: ranked.length }
}

export function docText(doc: PageDoc): string {
  return pageDocToMarkdown(doc)
}

export function isSection(value: unknown): value is Section {
  return Boolean(value && typeof value === 'object' && 'k' in value)
}
