import type { Redirect } from 'next/dist/lib/load-custom-routes'
import manifest from './legacy-url-map.json'

type LegacyKind = 'page' | 'post' | 'category'

export interface LegacyMapping {
  kind: LegacyKind
  source: string
  lastModified: string
  destination: string
  requiresRedirect: boolean
}

/**
 * Explicit migration map captured from CMAC's live Wix sitemaps on 2026-08-24.
 *
 * The source contains 261 records and 260 unique paths because `/blog` appears in both the page and
 * category sitemaps. Changed paths become HTTP 301 redirects. Eleven paths already match their new
 * canonical URL and remain direct HTTP 200 responses; redirecting a URL to itself would create a loop.
 */
export const legacyMappings: LegacyMapping[] = manifest.urls.map((record) => ({
  ...record,
  kind: record.kind as LegacyKind,
}))

export function legacyRedirects(): Redirect[] {
  const unique = new Map<string, Redirect>()
  for (const mapping of legacyMappings) {
    if (!mapping.requiresRedirect || unique.has(mapping.source)) continue
    unique.set(mapping.source, { source: mapping.source, destination: mapping.destination, statusCode: 301 })
  }
  return [...unique.values()]
}
