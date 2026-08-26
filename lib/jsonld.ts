import type { Crumb, FaqItem, Market, OfferDoc, PageDoc, ServiceDoc } from '@/content/types'
import { org } from '@/content/org'
import { hasAddress, markets } from '@/content/markets'
import { categories, categoryPath } from '@/content/services'
import { SITE_NAME, SITE_URL, abs } from './site'

const ORG_ID = `${SITE_URL}/#organization`
const SITE_ID = `${SITE_URL}/#website`

type Node = Record<string, unknown>

/**
 * The Organization node.
 *
 * `contactPoint` and `address` are the two fields the is-agentic audit specifically called out as
 * missing on the current site ("Organization schema found but missing: contactPoint"), so both are
 * emitted here — one contact point per market plus a national customer-service line.
 */
export function orgNode(): Node {
  return {
    '@type': ['Organization', 'RoofingContractor'],
    '@id': ORG_ID,
    name: org.name,
    legalName: org.legalName,
    description: org.description,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: abs('/cmac-logo-red.png') },
    image: abs('/cmac-logo-red.png'),
    slogan: org.slogan,
    telephone: org.phoneE164,
    email: org.email,
    founder: { '@type': 'Person', name: org.founder, jobTitle: org.founderTitle },
    address: {
      '@type': 'PostalAddress',
      streetAddress: org.address.street,
      addressLocality: org.address.city,
      addressRegion: org.address.state,
      postalCode: org.address.zip,
      addressCountry: org.address.country,
    },
    identifier: {
      '@type': 'PropertyValue',
      name: 'GAF Contractor ID',
      value: org.gafContractorId,
    },
    hasCredential: [
      'GAF Master Elite® Certified Contractor',
      "GAF President's Club Award Winner",
      'BBB Accredited Business — A+ Rating',
      'National Roofing Contractors Association (NRCA) Member',
    ],
    areaServed: org.states.map((name) => ({ '@type': 'State', name })),
    sameAs: org.social,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: org.phoneE164,
        email: org.email,
        areaServed: 'US',
        availableLanguage: ['en'],
      },
      ...markets.map((m) => ({
        '@type': 'ContactPoint',
        contactType: 'sales',
        name: `CMAC ${m.name}`,
        telephone: m.phoneE164,
        email: m.email,
        areaServed: m.stateCode,
        availableLanguage: ['en'],
      })),
    ],
  }
}

export function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function localBusinessNode(m: Market): Node {
  const node: Node = {
    '@type': 'RoofingContractor',
    '@id': `${abs(m.path)}#business`,
    name: `CMAC Roofing — ${m.name}`,
    description: `Roofing, gutters, garage doors, and restoration services in ${m.name}. ${m.intro}`,
    url: abs(m.path),
    parentOrganization: { '@id': ORG_ID },
    telephone: m.phoneE164,
    email: m.email,
    image: abs('/cmac-logo-red.png'),
    areaServed: m.areasServed.map((name) => ({ '@type': 'Place', name })),
    // CMAC publishes neither job pricing nor verified office hours, so both are omitted.
  }

  if (hasAddress(m)) {
    node.address = {
      '@type': 'PostalAddress',
      streetAddress: m.street,
      addressLocality: m.city,
      addressRegion: m.stateCode,
      postalCode: m.zip,
      addressCountry: 'US',
    }
  }
  if (m.geo) {
    node.geo = { '@type': 'GeoCoordinates', latitude: m.geo.lat, longitude: m.geo.lng }
  }
  return node
}

export function serviceNode(s: ServiceDoc, path: string): Node {
  return {
    '@type': 'Service',
    '@id': `${abs(path)}#service`,
    name: s.name,
    description: s.summary,
    url: abs(path),
    serviceType: s.name,
    provider: { '@id': ORG_ID },
    areaServed: org.states.map((name) => ({ '@type': 'State', name })),
    ...(s.steps?.length
      ? {
          hasPart: {
            '@type': 'HowTo',
            name: `How CMAC handles ${s.name.toLowerCase()}`,
            step: s.steps.map((step, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: step.title,
              text: step.detail,
            })),
          },
        }
      : {}),
  }
}

export function faqNode(items: FaqItem[], path: string): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbNode(trail: Crumb[], path: string): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(path)}#breadcrumbs`,
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  }
}

export function offerNodes(offers: OfferDoc[]): Node[] {
  return offers.map((o) => ({
    '@type': 'Offer',
    name: o.name,
    description: o.description,
    ...(o.price !== undefined ? { price: o.price, priceCurrency: o.priceCurrency ?? 'USD' } : {}),
    availability: 'https://schema.org/InStock',
    seller: { '@id': ORG_ID },
    areaServed: org.states.map((name) => ({ '@type': 'State', name })),
  }))
}

/**
 * Assembles the page's @graph. Nodes are @id-linked rather than duplicated, so the Organization
 * appears once and everything else points at it.
 */
export function graphFor(doc: PageDoc) {
  const g: Node[] = [orgNode(), websiteNode()]

  g.push({
    '@type': 'WebPage',
    '@id': `${abs(doc.path)}#webpage`,
    url: abs(doc.path),
    name: doc.title,
    description: doc.description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-US',
    dateModified: doc.updated,
  })

  if (doc.breadcrumbs.length > 1) g.push(breadcrumbNode(doc.breadcrumbs, doc.path))
  if (doc.entities.market) g.push(localBusinessNode(doc.entities.market))
  if (doc.entities.service) g.push(serviceNode(doc.entities.service, doc.path))
  if (doc.entities.faqs?.length) g.push(faqNode(doc.entities.faqs, doc.path))
  if (doc.entities.offers?.length) g.push(...offerNodes(doc.entities.offers))
  if (doc.path === '/') {
    for (const category of categories) {
      g.push({
        '@type': 'Service',
        '@id': `${abs(categoryPath(category))}#service`,
        name: category.name,
        description: category.summary,
        url: abs(categoryPath(category)),
        serviceType: category.name,
        provider: { '@id': ORG_ID },
        areaServed: org.states.map((name) => ({ '@type': 'State', name })),
      })
    }
  }
  // Reviews remain visible with their third-party attribution, but Google treats LocalBusiness
  // review markup controlled by the reviewed business as self-serving, so no Review or
  // AggregateRating node is emitted here.

  return { '@context': 'https://schema.org', '@graph': g }
}
