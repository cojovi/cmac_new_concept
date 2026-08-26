/**
 * The content model.
 *
 * Every page in the site resolves to a `PageDoc` before anything renders. The React templates,
 * `generateMetadata`, the JSON-LD graph, the markdown twin at `/_md/*`, `sitemap.ts`, and the
 * `llms.txt` family all consume `PageDoc` — never the JSX. That is what makes the human-readable
 * page and the machine-readable surfaces structurally incapable of drifting apart.
 */

export type Path = `/${string}`

/* ------------------------------------------------------------------ prose */

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'note'; text: string }

export interface Cta {
  label: string
  href: string
  kind?: 'primary' | 'outline'
}

/* ---------------------------------------------------------------- entities */

export type MarketId =
  | 'dallas-fort-worth'
  | 'houston'
  | 'austin'
  | 'oklahoma-city'
  | 'nashville'
  | 'arkansas'
  | 'georgia'

export type StateId = 'texas' | 'oklahoma' | 'tennessee' | 'arkansas' | 'georgia'

export interface Market {
  id: MarketId
  /** Canonical public route. It is intentionally not inferred from the id. */
  path: Path
  /** Display name, e.g. "Dallas–Fort Worth" */
  name: string
  state: StateId
  /** Two-letter postal code, e.g. "TX" */
  stateCode: string
  street?: string
  city?: string
  zip?: string
  phone: string
  /** E.164, for tel: links and JSON-LD */
  phoneE164: string
  email: string
  geo?: { lat: number; lng: number }
  /** Cities and counties named on the page and in `areaServed` */
  areasServed: string[]
  /** What makes roofs fail here — the local angle the current site is missing entirely */
  climate: string
  /** Short intro paragraph unique to this market */
  intro: string
  updated: string
}

export interface StateDoc {
  id: StateId
  /** Canonical public route. */
  path: Path
  name: string
  code: string
  marketIds: MarketId[]
  intro: string
  climate: string
  updated: string
}

export type ServiceCategoryId = 'roofing' | 'gutters' | 'doors' | 'restoration' | 'exteriors'

export interface ServiceCategory {
  id: ServiceCategoryId
  name: string
  /** Nav label — matches the live site's own top nav */
  navLabel: string
  headline: string
  summary: string
  body: Block[]
  image?: string
  faqIds?: string[]
  updated: string
}

export interface ServiceDoc {
  id: string
  category: ServiceCategoryId
  /** H1 */
  name: string
  /** Hero subheadline */
  headline: string
  /** ≤160 chars. Meta description, llms.txt line, and card copy all read from this. */
  summary: string
  body: Block[]
  /** Rendered as the icon-badge feature grid */
  bullets?: { title: string; detail: string }[]
  /** Rendered as the numbered process timeline, and as schema.org HowTo steps */
  steps?: { title: string; detail: string }[]
  /** Manufacturer / vendor partners, by `Brand.id` */
  brandIds?: string[]
  faqIds?: string[]
  /** Markets where this is offered. Omitted means all. */
  marketIds?: MarketId[]
  image?: string
  imageAlt?: string
  /** Sibling / parent links surfaced at the bottom of the page */
  related?: Path[]
  /** Feeds sitemap lastmod. Hand-maintained — never a build timestamp. */
  updated: string
}

export interface Brand {
  id: string
  name: string
  category: ServiceCategoryId
  /** What CMAC actually installs from them */
  note: string
}

export interface Credential {
  id: string
  logo: string
  title: string
  note: string
  /** CSS class on the existing credential-card styling */
  className: string
}

export interface FaqItem {
  id: string
  q: string
  a: string
  /** 'global' plus any service id, category id, or market id this answer belongs on */
  scope: string[]
}

export interface Review {
  id: string
  author: string
  city: string
  rating: 1 | 2 | 3 | 4 | 5
  body: string
  /** Where it was published, e.g. "Google" */
  source: string
  /** Link to the third-party source. Reviews never become first-party rating schema. */
  sourceUrl?: string
}

export interface OfferDoc {
  name: string
  description: string
  /** Only ever set for genuinely free offerings. CMAC publishes no job pricing. */
  price?: number
  priceCurrency?: 'USD'
}

/* ------------------------------------------------------------- render model */

export interface Crumb {
  name: string
  path: Path
}

export type FormVariant = 'inspection' | 'quote' | 'mini-homes' | 'roof-registration'

export type PageTemplate =
  | 'home'
  | 'mini-homes'
  | 'service-index'
  | 'service-category'
  | 'service-detail'
  | 'location-index'
  | 'state'
  | 'market'
  | 'trust'

export interface IndexingControls {
  index: boolean
  follow: boolean
}

export type Section =
  | {
      k: 'hero'
      h1: string
      sub: string
      body?: string
      cta?: Cta[]
      image?: string
      imageAlt?: string
      imagePosition?: string
      eyebrow?: string
      form?: boolean
      formVariant?: FormVariant
    }
  | { k: 'prose'; heading?: string; label?: string; blocks: Block[] }
  | { k: 'features'; heading: string; items: { title: string; detail: string }[] }
  | {
      k: 'serviceGrid'
      heading: string
      label?: string
      items: { name: string; summary: string; path: Path; image?: string; imageAlt?: string; imagePosition?: string }[]
    }
  | { k: 'process'; heading: string; label?: string; steps: { title: string; detail: string }[] }
  | { k: 'brands'; heading: string; brands: Brand[] }
  | { k: 'markets'; heading: string; label?: string; markets: Market[] }
  | { k: 'nap'; market: Market }
  | { k: 'credentials'; heading: string; label?: string }
  | { k: 'press'; heading: string; label?: string }
  | { k: 'reviews'; heading: string; label?: string; reviews: Review[] }
  | { k: 'faq'; heading: string; label?: string; items: FaqItem[] }
  | { k: 'offers'; heading: string; offers: OfferDoc[] }
  | { k: 'links'; heading: string; items: { name: string; summary?: string; path: Path }[] }
  | { k: 'form'; heading: string; body?: string; variant?: FormVariant }
  | { k: 'cta'; heading: string; body: string; cta: Cta[] }

export interface PageDoc {
  path: Path
  /** Rendering family used by downstream HTML/markdown/agent surfaces. */
  template: PageTemplate
  /** Absolute pages used to substantiate the copy in this document. */
  sourceUrls: string[]
  /** <title>, without the site-name suffix */
  title: string
  h1: string
  description: string
  breadcrumbs: Crumb[]
  sections: Section[]
  entities: {
    service?: ServiceDoc
    category?: ServiceCategory
    market?: Market
    state?: StateDoc
    faqs?: FaqItem[]
    reviews?: Review[]
    offers?: OfferDoc[]
  }
  updated: string
  priority?: number
  changeFrequency?: 'daily' | 'weekly' | 'monthly' | 'yearly'
  indexing?: IndexingControls
}
