import type { PageDoc } from '@/content/types'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { RenderSection } from '@/components/sections'
import { JsonLd } from '@/components/JsonLd'
import { graphFor } from '@/lib/jsonld'

/**
 * Every template renders through here. The doc is the single source of truth: the markup below,
 * the JSON-LD graph, the markdown twin at /_md, sitemap.ts, and llms.txt all derive from the same
 * object, so they cannot drift apart.
 */
export function PageShell({ doc }: { doc: PageDoc }) {
  return (
    <>
      <JsonLd graph={graphFor(doc)} />
      <div className="site-shell">
        <SiteHeader />
        <main id="main-content">
          <Breadcrumbs trail={doc.breadcrumbs} />
          {doc.sections.map((section, i) => (
            <RenderSection key={`${section.k}-${i}`} section={section} />
          ))}
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
