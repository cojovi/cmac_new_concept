import { brandById, brandsByIds } from './brands'
import { faqById, faqs, faqsFor } from './faqs'
import { marketById, markets, marketsInState, states } from './markets'
import { offers } from './org'
import { aggregateRating, reviews } from './reviews'
import {
  categories,
  categoryById,
  categoryPath,
  servicePath,
  services,
  servicesInCategory,
} from './services'
import { trustPages } from './trust'
import { serviceVisuals, visualForPath } from './service-visuals'
import { pageVisuals, visualForPage } from './page-visuals'
import type {
  Block,
  FaqItem,
  Market,
  PageDoc,
  Path,
  Review,
  Section,
  ServiceCategory,
  ServiceDoc,
  StateDoc,
} from './types'

const LIVE = 'https://www.cmacroofing.com'
const UPDATED = '2026-08-24'
const home: { name: string; path: Path } = { name: 'Home', path: '/' }
const cta: Extract<Section, { k: 'cta' }> = {
  k: 'cta',
  heading: 'Start with a free inspection.',
  body: 'Tell CMAC what is happening at the property. We will inspect the condition and put the recommended scope in writing.',
  cta: [
    { label: 'Request Inspection', href: '/quote', kind: 'primary' },
    { label: 'Call 1-888-389-CMAC', href: 'tel:+18883892622' },
  ],
}

const standardProcess: Extract<Section, { k: 'process' }>['steps'] = [
  { title: 'Schedule', detail: 'Tell us what is happening at your property.' },
  { title: 'Inspect', detail: 'We document the property and affected systems carefully.' },
  { title: 'Plan', detail: 'Review a clear scope and written proposal.' },
  { title: 'Build', detail: 'The CMAC team completes the approved work.' },
  { title: 'Confirm', detail: 'A final walkthrough closes out the project.' },
]

const serviceSources: Record<string, string> = {
  'roof-repairs': '/roof-repairs',
  'roof-replacement': '/roofing',
  'new-construction': '/tract-homes',
  'custom-homes': '/custom-homes',
  'specialty-systems': '/specialty-systems',
  'commercial-roofing': '/commercial-roofing',
  'multi-family': '/multi-family',
  'home-additions': '/home-additions',
  installation: '/gutter-installation',
  repairs: '/gutter-repairs',
  'gutter-guards': '/gutter-guards',
  maintenance: '/gutter-maintenance',
  'commercial-gutters': '/commercial-gutters',
  'residential-garage-doors': '/residential-garage-doors',
  'commercial-garage-doors': '/commercial-garage-doors',
  openers: '/garage-openers',
  repair: '/garage-door-repair',
  brands: '/garage-doors-vendors',
  gallery: '/garage-door-gallery',
  'water-mitigation': '/water-mitigation-and-emergency-services',
  'fire-smoke-damage': '/restoration',
  'resurfacing-refinishing': '/resurfacing-and-surface-refinishing',
  'floor-care-odor-control': '/floor-care-and-odor-control',
  'biohazard-trauma-cleanup': '/trauma-scene-and-biohazard-cleanup',
  siding: '/siding',
  windows: '/windows',
  decks: '/decks',
  'exterior-painting': '/exterior-painting',
}

const categorySources: Record<string, string> = {
  roofing: '/roofing',
  gutters: '/gutters',
  doors: '/garage-doors',
  restoration: '/restoration',
  exteriors: '/siding',
}

function serviceCards(items: ServiceDoc[]) {
  return items.map((s) => {
    const path = servicePath(s)
    const art = visualForPath(path)
    return {
      name: s.name,
      summary: s.summary,
      path,
      image: art?.src ?? s.image,
      imageAlt: art?.alt ?? s.imageAlt,
      imagePosition: art?.position,
    }
  })
}

function categoryCards(items: ServiceCategory[]) {
  return items.map((category) => ({
    name: category.name,
    summary: category.summary,
    path: categoryPath(category),
    image: visualForPath(categoryPath(category))?.src ?? category.image,
    imageAlt: visualForPath(categoryPath(category))?.alt,
    imagePosition: visualForPath(categoryPath(category))?.position,
  }))
}

/** Resolve explicit FAQ records first, then add answers scoped to the page. */
function resolvedFaqs(ids: string[] | undefined, scopes: string[], limit = 6): FaqItem[] {
  const byId = (ids ?? []).map(faqById).filter((f): f is FaqItem => Boolean(f))
  const scoped = faqsFor(scopes, limit)
  return [...new Map([...byId, ...scoped].map((f) => [f.id, f])).values()].slice(0, limit)
}

function serviceIndexDoc(): PageDoc {
  const art = visualForPath('/services')
  return {
    path: '/services',
    template: 'service-index',
    sourceUrls: [`${LIVE}/roofing`, `${LIVE}/gutters`, `${LIVE}/garage-doors`, `${LIVE}/restoration`],
    title: 'Roofing, Gutters, Garage Doors, Restoration & Exteriors',
    h1: 'Services',
    description:
      'Explore CMAC roofing, gutter, garage door, restoration, and exterior services for residential, commercial, and multi-family properties.',
    breadcrumbs: [home, { name: 'Services', path: '/services' }],
    sections: [
      {
        k: 'hero',
        h1: 'Services',
        sub: 'One team for the building envelope and the damage behind it.',
        body: 'CMAC works on residential, commercial, and multi-family properties across five states. Choose a division to see the systems and project types it handles.',
        image: art?.src,
        imageAlt: art?.alt,
        imagePosition: art?.position,
        eyebrow: 'FIVE SPECIALIST DIVISIONS',
        cta: [{ label: 'Request Inspection', href: '/quote', kind: 'primary' }],
      },
      { k: 'serviceGrid', heading: 'Explore CMAC services', items: categoryCards(categories) },
      { k: 'credentials', heading: 'Verified credentials and professional standing' },
      cta,
    ],
    entities: {},
    updated: UPDATED,
    priority: 0.9,
    changeFrequency: 'monthly',
    indexing: { index: true, follow: true },
  }
}

function categoryDoc(category: ServiceCategory): PageDoc {
  const path = categoryPath(category)
  const items = servicesInCategory(category.id)
  const categoryFaqs = resolvedFaqs(category.faqIds, [category.id, 'global'])
  const brandIds = [...new Set(items.flatMap((s) => s.brandIds ?? []))]
  const art = visualForPath(path)
  const sections: Section[] = [
    {
      k: 'hero',
      h1: category.name,
      sub: category.headline,
      body: category.summary,
      image: art?.src ?? category.image,
      imageAlt: art?.alt,
      imagePosition: art?.position,
      eyebrow: `${items.length} SPECIALIST SERVICES`,
      cta: [{ label: 'Request Inspection', href: '/quote', kind: 'primary' }],
    },
    {
      k: 'prose',
      label: 'DIVISION FIELD BRIEF',
      heading: `${category.name}, clearly defined.`,
      blocks: category.body,
    },
    { k: 'serviceGrid', heading: `${category.name} services`, items: serviceCards(items) },
    {
      k: 'process',
      label: 'THE CMAC METHOD',
      heading: 'Built on a disciplined process',
      steps: standardProcess,
    },
  ]
  if (brandIds.length) sections.push({ k: 'brands', heading: 'Systems and manufacturers', brands: brandsByIds(brandIds) })
  if (categoryFaqs.length) sections.push({ k: 'faq', heading: `${category.name} questions`, items: categoryFaqs })
  sections.push(cta)

  return {
    path,
    template: 'service-category',
    sourceUrls: [`${LIVE}${categorySources[category.id]}`],
    title: `${category.name} Services`,
    h1: category.name,
    description: category.summary,
    breadcrumbs: [home, { name: 'Services', path: '/services' }, { name: category.name, path }],
    sections,
    entities: { category, faqs: categoryFaqs },
    updated: category.updated,
    priority: 0.8,
    changeFrequency: 'monthly',
    indexing: { index: true, follow: true },
  }
}

function detailDoc(service: ServiceDoc): PageDoc {
  const path = servicePath(service)
  const category = categoryById(service.category)!
  const serviceFaqs = resolvedFaqs(service.faqIds, [service.id, service.category, 'global'])
  const art = visualForPath(path)
  const sections: Section[] = [
    {
      k: 'hero',
      h1: service.name,
      sub: service.headline,
      body: service.summary,
      image: art?.src ?? service.image,
      imageAlt: art?.alt ?? service.imageAlt,
      imagePosition: art?.position,
      eyebrow: `${category.name.toUpperCase()} / FIELD SERVICE`,
      cta: [{ label: 'Request Inspection', href: '/quote', kind: 'primary' }],
    },
    {
      k: 'prose',
      label: 'SERVICE FIELD BRIEF',
      heading: `${service.name}, clearly scoped.`,
      blocks: service.body,
    },
  ]
  if (service.bullets?.length) sections.push({ k: 'features', heading: `What ${service.name.toLowerCase()} includes`, items: service.bullets })
  if (service.steps?.length) sections.push({ k: 'process', heading: `How CMAC handles ${service.name.toLowerCase()}`, steps: service.steps })
  else sections.push({ k: 'process', label: 'THE CMAC METHOD', heading: `The CMAC process for ${service.name.toLowerCase()}`, steps: standardProcess })
  if (service.brandIds?.length) sections.push({ k: 'brands', heading: 'Systems and manufacturers', brands: brandsByIds(service.brandIds) })
  if (serviceFaqs.length) sections.push({ k: 'faq', heading: `${service.name} questions`, items: serviceFaqs })
  if (service.related?.length) {
    sections.push({
      k: 'links',
      heading: 'Related services',
      items: service.related.map((relatedPath) => ({ name: nameForPath(relatedPath), path: relatedPath })),
    })
  }
  sections.push(cta)

  return {
    path,
    template: 'service-detail',
    sourceUrls: [`${LIVE}${serviceSources[service.id] ?? categorySources[service.category]}`],
    title: `${service.name} | ${category.name}`,
    h1: service.name,
    description: service.summary,
    breadcrumbs: [
      home,
      { name: 'Services', path: '/services' },
      { name: category.name, path: categoryPath(category) },
      { name: service.name, path },
    ],
    sections,
    entities: { service, category, faqs: serviceFaqs },
    updated: service.updated,
    priority: 0.75,
    changeFrequency: 'monthly',
    indexing: { index: true, follow: true },
  }
}

function locationsIndexDoc(): PageDoc {
  const art = visualForPage('/locations')
  return {
    path: '/locations',
    template: 'location-index',
    sourceUrls: [`${LIVE}/locations`],
    title: 'CMAC Roofing Locations',
    h1: 'Locations',
    description:
      'CMAC serves Texas, Oklahoma, Tennessee, Arkansas, and Georgia, with published contact information for each operating market.',
    breadcrumbs: [home, { name: 'Locations', path: '/locations' }],
    sections: [
      {
        k: 'hero',
        h1: 'Locations',
        sub: 'Five states. Published local contact information.',
        body: 'Choose a state or market to see its canonical address, phone number, email, and regional service information.',
        image: art?.src,
        imageAlt: art?.alt,
        imagePosition: art?.position,
        eyebrow: 'CMAC SERVICE NETWORK',
        cta: [{ label: 'Request Inspection', href: '/quote', kind: 'primary' }],
      },
      {
        k: 'links',
        heading: 'Browse by state',
        items: states.map((state) => ({ name: state.name, summary: state.intro, path: state.path })),
      },
      { k: 'markets', heading: 'CMAC markets', markets },
      cta,
    ],
    entities: {},
    updated: UPDATED,
    priority: 0.9,
    changeFrequency: 'monthly',
    indexing: { index: true, follow: true },
  }
}

function stateDoc(state: StateDoc): PageDoc {
  const stateMarkets = marketsInState(state.id)
  const samePathMarket = stateMarkets.find((market) => market.path === state.path)
  const art = visualForPage(state.path)
  const sections: Section[] = [
    {
      k: 'hero',
      h1: `CMAC Roofing in ${state.name}`,
      sub: state.intro,
      body: state.climate,
      image: art?.src,
      imageAlt: art?.alt,
      imagePosition: art?.position,
      eyebrow: `${state.code} / REGIONAL SERVICE`,
      cta: [{ label: 'Request Inspection', href: '/quote', kind: 'primary' }],
    },
  ]
  if (samePathMarket) sections.push({ k: 'nap', market: samePathMarket })
  else sections.push({ k: 'markets', heading: `${state.name} markets`, markets: stateMarkets })
  sections.push({ k: 'serviceGrid', heading: `Services in ${state.name}`, items: categoryCards(categories) }, cta)

  return {
    path: state.path,
    template: 'state',
    sourceUrls: [`${LIVE}/${state.id}`],
    title: `Roofing & Restoration in ${state.name}`,
    h1: `CMAC Roofing in ${state.name}`,
    description: state.intro,
    breadcrumbs: [home, { name: 'Locations', path: '/locations' }, { name: state.name, path: state.path }],
    sections,
    entities: { state, ...(samePathMarket ? { market: samePathMarket } : {}) },
    updated: state.updated,
    priority: 0.8,
    changeFrequency: 'monthly',
    indexing: { index: true, follow: true },
  }
}

function marketSource(market: Market): string {
  const slugs: Record<string, string> = {
    'dallas-fort-worth': 'dallas-fort-worth-tx',
    houston: 'houston-tx',
    austin: 'austin-tx',
    'oklahoma-city': 'oklahoma',
    nashville: 'tennessee',
    arkansas: 'arkansas',
    georgia: 'georgia',
  }
  return `${LIVE}/${slugs[market.id]}`
}

function marketDoc(market: Market): PageDoc {
  const state = states.find((item) => item.id === market.state)!
  const path = market.path
  const art = visualForPage(path)
  return {
    path,
    template: 'market',
    sourceUrls: [marketSource(market), `${LIVE}/locations`],
    title: `Roofing & Restoration in ${market.name}, ${market.stateCode}`,
    h1: `CMAC Roofing in ${market.name}`,
    description: market.intro,
    breadcrumbs: [
      home,
      { name: 'Locations', path: '/locations' },
      { name: state.name, path: state.path },
      { name: market.name, path },
    ],
    sections: [
      {
        k: 'hero',
        h1: `CMAC Roofing in ${market.name}`,
        sub: market.intro,
        body: market.climate,
        image: art?.src,
        imageAlt: art?.alt,
        imagePosition: art?.position,
        eyebrow: `${market.stateCode} / LOCAL FIELD TEAM`,
        cta: [
          { label: 'Request Inspection', href: '/quote', kind: 'primary' },
          { label: `Call ${market.phone}`, href: `tel:${market.phoneE164}` },
        ],
      },
      { k: 'nap', market },
      { k: 'serviceGrid', heading: `Services in ${market.name}`, items: categoryCards(categories) },
      cta,
    ],
    entities: { market, state },
    updated: market.updated,
    priority: 0.8,
    changeFrequency: 'monthly',
    indexing: { index: true, follow: true },
  }
}

function shortReview(review: Review): Review {
  const max = 280
  const body = review.body.length <= max ? review.body : `${review.body.slice(0, max).replace(/\s+\S*$/, '')}…`
  return { ...review, body, sourceUrl: aggregateRating.sourceUrl }
}

function trustSource(path: Path): string {
  const oldPaths: Partial<Record<Path, string>> = {
    '/about': '/about-us',
    '/quote': '/get-quote',
    '/partners': '/join-the-vision',
  }
  return `${LIVE}${oldPaths[path] ?? path}`
}

function trustDoc(page: (typeof trustPages)[number]): PageDoc {
  const pageFaqs = page.slug === 'faqs' ? faqs : faqsFor(page.faqScopes ?? [], 8)
  const pageReviews = page.slug === 'reviews'
    ? [...reviews.slice(0, 5), reviews.find((review) => review.rating < 5)!].filter(Boolean).map(shortReview)
    : []
  const art = visualForPage(page.path)
  const sections: Section[] = [
    {
      k: 'hero',
      h1: page.h1,
      sub: page.sub,
      image: art?.src,
      imageAlt: art?.alt,
      imagePosition: art?.position,
      eyebrow: 'CMAC / COMPANY RESOURCE',
      cta: page.form
        ? [
            {
              label: 'Start Here',
              href: page.formVariant === 'roof-registration' ? '#roof-registration' : '#quote',
              kind: 'primary',
            },
          ]
        : undefined,
    },
    { k: 'prose', label: 'PAGE GUIDE', heading: 'What to know.', blocks: page.body },
  ]
  if (page.credentials) sections.push({ k: 'credentials', heading: 'Credentials and professional standing' })
  if (page.markets) sections.push({ k: 'markets', heading: 'Contact a CMAC market', markets })
  if (page.offers) sections.push({ k: 'offers', heading: 'Free ways to get started', offers })
  if (pageReviews.length) sections.push({ k: 'reviews', heading: 'Published customer feedback', reviews: pageReviews })
  if (pageFaqs.length) sections.push({ k: 'faq', heading: page.slug === 'faqs' ? 'Questions and answers' : 'Common questions', items: pageFaqs })
  if (page.slug === 'warranty') {
    sections.push({
      k: 'links',
      heading: 'Roof registration',
      items: [
        {
          name: 'Register My Roof',
          summary: 'Submit a CMAC-installed property for the service team to locate the installation record.',
          path: '/register-my-roof',
        },
      ],
    })
  }
  if (page.developerResources) {
    sections.push({
      k: 'links',
      heading: 'Developer discovery and retrieval',
      items: [
        { name: 'OpenAPI 3.1 description', summary: 'Typed contract for public retrieval operations.', path: '/openapi.json' },
        { name: 'Versioned page API', summary: 'Cursor-paginated catalog of every published page.', path: '/api/v1/pages' },
        { name: 'Versioned search API', summary: 'Deterministic public site search with cursor pagination.', path: '/api/v1/search?q=roof+repair' },
        { name: 'RFC 9727 API catalog', summary: 'Machine-readable API discovery links.', path: '/.well-known/api-catalog' },
        { name: 'Agentic Resource Discovery catalog', summary: 'API, MCP, and skill resources in one catalog.', path: '/.well-known/ai-catalog.json' },
        { name: 'Agent Skills index', summary: 'Integrity-pinned public research instructions.', path: '/.well-known/agent-skills/index.json' },
        { name: 'Scoped developer context', summary: 'Concise integration guidance for language models.', path: '/developers/llms.txt' },
        { name: 'NLWeb capability document', summary: 'Supported NLWeb 0.55 mode and request example.', path: '/ask' },
        { name: 'MCP server card', summary: 'Discover the public read-only Streamable HTTP server.', path: '/.well-known/mcp/server-card.json' },
        { name: 'Agent page representation', summary: 'Retrieve the roofing service page as structured JSON.', path: '/agent?path=/services/roofing' },
      ],
    })
  }
  if (page.slug === 'sitemap-page') {
    sections.push(
      { k: 'links', heading: 'Services', items: serviceDocs.map((doc) => ({ name: doc.h1, path: doc.path })) },
      { k: 'links', heading: 'Locations', items: locationDocs.map((doc) => ({ name: doc.h1, path: doc.path })) },
      {
        k: 'links',
        heading: 'Company and resources',
        items: trustPages.filter((item) => item.path !== page.path).map((item) => ({ name: item.h1, path: item.path })),
      },
    )
  }
  if (page.form) {
    sections.push({
      k: 'form',
      heading: page.formVariant === 'roof-registration' ? 'Registration details' : 'Tell us about the property',
      body: 'Submit the form and the appropriate CMAC team will follow up.',
      variant: page.formVariant ?? (page.slug === 'quote' ? 'quote' : 'inspection'),
    })
  }
  if (!page.form && page.slug !== 'sitemap-page' && page.slug !== 'reviews') sections.push(cta)

  return {
    path: page.path,
    template: 'trust',
    sourceUrls: page.sourceUrls ?? (page.slug === 'reviews' ? [aggregateRating.sourceUrl] : [trustSource(page.path)]),
    title: page.title,
    h1: page.h1,
    description: page.description,
    breadcrumbs: [home, { name: page.h1, path: page.path }],
    sections,
    entities: {
      faqs: pageFaqs,
      reviews: pageReviews,
      ...(page.offers ? { offers } : {}),
    },
    updated: page.updated,
    priority: page.priority,
    changeFrequency: 'yearly',
    indexing: { index: true, follow: true },
  }
}

const bespokeDocs: PageDoc[] = [
  {
    path: '/',
    template: 'home',
    sourceUrls: [LIVE],
    title: 'Veteran-Owned Roofing, Gutters, Doors & Restoration',
    h1: 'Built for the storm. Backed for life.',
    description:
      'CMAC is a veteran-owned roofing, gutter, garage door, restoration, and exterior contractor serving Texas, Oklahoma, Arkansas, Tennessee, and Georgia.',
    breadcrumbs: [home],
    sections: [
      {
        k: 'hero',
        h1: 'Built for the storm. Backed for life.',
        sub: 'Veteran-owned exterior and restoration work across five states.',
      },
    ],
    entities: {},
    updated: UPDATED,
    priority: 1,
    changeFrequency: 'weekly',
    indexing: { index: true, follow: true },
  },
  {
    path: '/mini-homes',
    template: 'mini-homes',
    sourceUrls: ['https://cmaccontainers.com'],
    title: 'CMAC Mini-Homes & Container Buildings',
    h1: 'Built different. Built to move.',
    description: 'Explore CMAC container-based mini-homes, workforce housing, and commercial spaces.',
    breadcrumbs: [home, { name: 'Mini-Homes', path: '/mini-homes' }],
    sections: [
      {
        k: 'hero',
        h1: 'Built different. Built to move.',
        sub: 'Container-based spaces for living, workforce housing, and commercial use.',
      },
    ],
    entities: {},
    updated: UPDATED,
    priority: 0.8,
    changeFrequency: 'monthly',
    indexing: { index: true, follow: true },
  },
]

const serviceDocs: PageDoc[] = [serviceIndexDoc(), ...categories.map(categoryDoc), ...services.map(detailDoc)]
const metroDocs = markets.filter((market) => market.path !== `/locations/${market.state}`)
const locationDocs: PageDoc[] = [locationsIndexDoc(), ...states.map(stateDoc), ...metroDocs.map(marketDoc)]
const companyDocs: PageDoc[] = trustPages.map(trustDoc)
const docs: readonly PageDoc[] = Object.freeze([...bespokeDocs, ...serviceDocs, ...locationDocs, ...companyDocs])

function nameForPath(path: Path): string {
  const service = services.find((item) => servicePath(item) === path)
  if (service) return service.name
  const category = categories.find((item) => categoryPath(item) === path)
  if (category) return category.name
  return path.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ') ?? 'Home'
}

export function allDocs(): readonly PageDoc[] {
  return docs
}

export function allPaths(): Path[] {
  return docs.map((doc) => doc.path)
}

export function docByPath(input: string): PageDoc | undefined {
  const path = (input !== '/' ? input.replace(/\/+$/, '') : input) as Path
  return docs.find((doc) => doc.path === path)
}

function blockMarkdown(block: Block): string {
  if (block.t === 'h2') return `## ${block.text}`
  if (block.t === 'h3') return `### ${block.text}`
  if (block.t === 'ul') return block.items.map((item) => `- ${item}`).join('\n')
  if (block.t === 'note') return `> ${block.text}`
  return block.text
}

export function docToMarkdown(doc: PageDoc): string {
  const lines = [`# ${doc.h1}`, '', doc.description]
  for (const section of doc.sections) {
    if (section.k === 'hero') {
      if (section.sub) lines.push('', section.sub)
      if (section.body) lines.push('', section.body)
    } else if (section.k === 'prose') {
      if (section.heading) lines.push('', `## ${section.heading}`)
      lines.push('', ...section.blocks.flatMap((block) => [blockMarkdown(block), '']))
    } else if (section.k === 'features') {
      lines.push('', `## ${section.heading}`, '', ...section.items.map((item) => `- **${item.title}:** ${item.detail}`))
    } else if (section.k === 'serviceGrid' || section.k === 'links') {
      lines.push('', `## ${section.heading}`, '', ...section.items.map((item) => `- [${item.name}](${item.path})${item.summary ? ` — ${item.summary}` : ''}`))
    } else if (section.k === 'faq') {
      lines.push('', `## ${section.heading}`)
      for (const item of section.items) lines.push('', `### ${item.q}`, '', item.a)
    } else if (section.k === 'nap') {
      lines.push('', `## CMAC ${section.market.name}`, '', `${section.market.phone} · ${section.market.email}`)
    } else if (section.k === 'cta') {
      lines.push('', `## ${section.heading}`, '', section.body)
    }
  }
  lines.push('', `Canonical URL: ${doc.path}`, `Last updated: ${doc.updated}`)
  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`
}

export function validateContent(): void {
  const errors: string[] = []
  const paths = allPaths()
  const pathSet = new Set(paths)
  if (pathSet.size !== paths.length) errors.push('Duplicate public paths found')
  if (docs.length !== 65) errors.push(`Expected 65 public documents; found ${docs.length}`)
  if (serviceDocs.length !== 34) errors.push(`Expected 34 service documents; found ${serviceDocs.length}`)
  if (locationDocs.length !== 12) errors.push(`Expected 12 location documents; found ${locationDocs.length}`)
  if (companyDocs.length !== 17) errors.push(`Expected 17 trust documents; found ${companyDocs.length}`)

  const machinePaths = new Set([
    '/openapi.json',
    '/api/v1/pages',
    '/api/v1/search?q=roof+repair',
    '/.well-known/api-catalog',
    '/.well-known/ai-catalog.json',
    '/.well-known/agent-skills/index.json',
    '/developers/llms.txt',
    '/ask',
    '/.well-known/mcp/server-card.json',
    '/agent?path=/services/roofing',
  ])

  for (const doc of docs) {
    if (!doc.sourceUrls.length || doc.sourceUrls.some((url) => !URL.canParse(url))) {
      errors.push(`${doc.path}: missing or invalid source URL`)
    }
    for (const crumb of doc.breadcrumbs) {
      if (!pathSet.has(crumb.path)) errors.push(`${doc.path}: dangling breadcrumb ${crumb.path}`)
    }
    for (const section of doc.sections) {
      if (section.k === 'links' || section.k === 'serviceGrid') {
        for (const item of section.items) {
          if (!pathSet.has(item.path) && !machinePaths.has(item.path)) errors.push(`${doc.path}: dangling link ${item.path}`)
        }
      }
    }
  }

  for (const market of markets) {
    if (!/^\+[1-9]\d{7,14}$/.test(market.phoneE164)) errors.push(`${market.id}: invalid E.164 phone`)
    if (!pathSet.has(market.path)) errors.push(`${market.id}: missing canonical market path ${market.path}`)
  }
  for (const service of services) {
    for (const id of service.brandIds ?? []) if (!brandById(id)) errors.push(`${service.id}: dangling brand ${id}`)
    for (const id of service.faqIds ?? []) if (!faqById(id)) errors.push(`${service.id}: dangling FAQ ${id}`)
    for (const path of service.related ?? []) if (!pathSet.has(path)) errors.push(`${service.id}: dangling relation ${path}`)
  }
  for (const category of categories) {
    for (const id of category.faqIds ?? []) if (!faqById(id)) errors.push(`${category.id}: dangling FAQ ${id}`)
  }
  for (const serviceDoc of serviceDocs) {
    if (!serviceVisuals[serviceDoc.path]) errors.push(`${serviceDoc.path}: missing art-directed service visual`)
  }
  for (const doc of [...locationDocs, ...companyDocs]) {
    if (!pageVisuals[doc.path]) errors.push(`${doc.path}: missing art-directed page visual`)
    const hero = doc.sections.find((section) => section.k === 'hero')
    if (!hero || hero.k !== 'hero' || !hero.image) errors.push(`${doc.path}: hero does not consume its page visual`)
  }
  if (!marketById('arkansas').path.endsWith('/arkansas')) errors.push('Arkansas canonical path is invalid')
  if (!marketById('georgia').path.endsWith('/georgia/atlanta')) errors.push('Atlanta canonical path is invalid')

  if (errors.length) throw new Error(`Content validation failed:\n- ${errors.join('\n- ')}`)
}

validateContent()
