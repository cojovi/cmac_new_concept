import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { searchDocs } from '@/lib/search'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search CMAC Roofing services, locations, and company resources.',
  alternates: { canonical: '/search' },
  robots: { index: false, follow: true },
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const params = await searchParams
  const rawQuery = Array.isArray(params.q) ? params.q[0] : params.q
  const query = rawQuery?.trim().slice(0, 500) ?? ''
  const results = query ? searchDocs(query, 20) : []

  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="eyebrow">CMAC Site Search</p>
            <h1>Search CMAC Roofing</h1>
            <p>Find services, service areas, and company information from the same content index used by our agent interfaces.</p>
            <form
              {...{
                toolname: 'search_cmac_site',
                tooldescription:
                  "Search CMAC Roofing's public services, locations, and company information. This tool is read-only.",
              }}
              action="/search"
              method="get"
              role="search"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginTop: '1.5rem', maxWidth: '48rem' }}
            >
              <label className="sr-only" htmlFor="site-search">Search this site</label>
              <input
                id="site-search"
                name="q"
                type="search"
                defaultValue={query}
                placeholder="Try “commercial roofing” or “Houston”"
                maxLength={500}
                style={{ flex: '1 1 18rem', minHeight: '44px', padding: '.75rem 1rem' }}
              />
              <button className="nav-request" type="submit" style={{ minHeight: '44px' }}>Search</button>
            </form>
          </div>
        </section>

        <section className="links-panel" aria-live="polite">
          <div className="section-heading">
            <p className="eyebrow">Results</p>
            <h2>{query ? `${results.length} result${results.length === 1 ? '' : 's'} for “${query}”` : 'Enter a search above'}</h2>
          </div>
          {query && results.length === 0 ? (
            <p>No matching pages were found. Browse the <Link href="/sitemap-page">site map</Link> or <Link href="/contact">contact CMAC</Link>.</p>
          ) : (
            <div className="links-grid">
              {results.map((result) => (
                <article className="link-card" key={result.path}>
                  <h3><Link href={result.path}>{result.name}</Link></h3>
                  <p>{result.description}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
