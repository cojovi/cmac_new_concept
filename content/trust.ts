import type { Block, FormVariant, Path } from './types'
import {
  aboutBody,
  accessibilityBody,
  aiBody,
  contactBody,
  insuranceBody,
  partnersBody,
  pricingBody,
  privacyBody,
  stormBody,
  termsBody,
  warrantyBody,
} from './pages'

export interface TrustPage {
  path: Path
  slug: string
  title: string
  h1: string
  sub: string
  description: string
  body: Block[]
  /** FAQ scopes to pull onto the page */
  faqScopes?: string[]
  /** Show the free-offer grid (used on pricing and quote) */
  offers?: boolean
  /** Show the market/NAP grid */
  markets?: boolean
  /** Show the lead form */
  form?: boolean
  formVariant?: FormVariant
  credentials?: boolean
  /** Add linked machine-readable integration resources to the page. */
  developerResources?: boolean
  /** Standards or first-party records used to substantiate authored documentation. */
  sourceUrls?: string[]
  updated: string
  priority?: number
}

export const trustPages: TrustPage[] = [
  {
    path: '/about',
    slug: 'about',
    title: 'About CMAC Roofing | Veteran-Owned Since Day One',
    h1: 'About CMAC Roofing',
    sub: 'Veteran-owned. Five states. One standard.',
    description:
      'CMAC Roofing and Sheet Metal LLC is a veteran-owned roofing, gutter, garage door, and restoration contractor founded by Christian Viveiros, serving Texas, Oklahoma, Arkansas, Tennessee, and Georgia.',
    body: aboutBody,
    faqScopes: ['about', 'global'],
    credentials: true,
    markets: true,
    updated: '2026-08-24',
    priority: 0.9,
  },
  {
    path: '/contact',
    slug: 'contact',
    title: 'Contact CMAC Roofing | Free Inspection in 5 States',
    h1: 'Contact CMAC',
    sub: 'Schedule your free inspection.',
    description:
      'Reach CMAC Roofing directly. Local offices and direct phone numbers for Dallas–Fort Worth, Houston, Austin, Oklahoma City, Nashville, Arkansas, and Georgia. Free, no-obligation inspections.',
    body: contactBody,
    markets: true,
    form: true,
    updated: '2026-08-24',
    priority: 0.9,
  },
  {
    path: '/quote',
    slug: 'quote',
    title: 'Get a Free Quote | CMAC Roofing',
    h1: 'Get a Free Quote',
    sub: 'Free inspection. Free written estimate. No obligation.',
    description:
      'Request a free, no-obligation roofing, gutter, garage door, or restoration estimate from CMAC. We inspect, document the damage, and put the scope in writing at no cost.',
    body: contactBody,
    offers: true,
    form: true,
    faqScopes: ['pricing'],
    updated: '2026-08-24',
    priority: 0.9,
  },
  {
    path: '/pricing',
    slug: 'pricing',
    title: 'How CMAC Prices Work | Roofing Cost Guide',
    h1: 'How Pricing Works',
    sub: 'What drives the cost of a roof, and what CMAC does for free.',
    description:
      'CMAC does not publish price lists. This page explains what actually drives roofing, gutter, and door pricing, how insurance work differs from out-of-pocket work, and how to read any estimate.',
    body: pricingBody,
    offers: true,
    faqScopes: ['pricing', 'insurance-claims'],
    updated: '2026-08-24',
    priority: 0.8,
  },
  {
    path: '/insurance-claims',
    slug: 'insurance-claims',
    title: 'Storm Damage Insurance Claims | CMAC Roofing',
    h1: 'Insurance Claims',
    sub: 'Stress-free storm damage claims.',
    description:
      'CMAC documents storm damage, meets your adjuster on the roof, and makes sure the approved scope covers everything the storm damaged. Free inspection before you file.',
    body: insuranceBody,
    faqScopes: ['insurance-claims', 'global'],
    form: true,
    updated: '2026-08-24',
    priority: 0.9,
  },
  {
    path: '/storm-response',
    slug: 'storm-response',
    title: '24/7 Storm Damage Response | CMAC Roofing',
    h1: 'Storm Response',
    sub: 'Local crews. Not storm chasers.',
    description:
      'Hail, wind, and water damage response across Texas, Oklahoma, Arkansas, Tennessee, and Georgia — from 24/7 emergency water mitigation through full reconstruction.',
    body: stormBody,
    faqScopes: ['storm-response', 'insurance-claims'],
    markets: true,
    form: true,
    updated: '2026-08-24',
    priority: 0.9,
  },
  {
    path: '/warranty',
    slug: 'warranty',
    title: 'Warranty & Roof Registration | CMAC Roofing',
    h1: 'Warranty & Roof Registration',
    sub: 'Manufacturer coverage and workmanship coverage, explained.',
    description:
      'How CMAC roofing warranties work: enhanced GAF Master Elite® system warranties, CMAC workmanship coverage, and free roof registration for new-construction homeowners.',
    body: warrantyBody,
    faqScopes: ['warranty', 'global'],
    updated: '2026-08-24',
    priority: 0.7,
  },
  {
    path: '/partners',
    slug: 'partners',
    title: 'Partner With CMAC | Subcontractor Opportunities',
    h1: 'Partner With CMAC',
    sub: 'For roofing and construction businesses.',
    description:
      'CMAC partners with independent roofing and general construction businesses across Texas, Oklahoma, Arkansas, Tennessee, and Georgia. Insured crews that install to spec and finish on schedule.',
    body: partnersBody,
    updated: '2026-08-24',
    priority: 0.5,
  },
  {
    path: '/ai',
    slug: 'ai',
    title: 'For AI Agents & Developers | CMAC Roofing',
    h1: 'For AI Agents & Developers',
    sub: 'Machine-readable access to everything on this site.',
    description:
      'Markdown twins of every page, llms.txt indexes, a natural-language /ask endpoint, read-only MCP discovery, and full JSON-LD structured data. How to read cmacroofing.com programmatically.',
    body: aiBody,
    updated: '2026-08-24',
    priority: 0.6,
  },
  {
    path: '/developers',
    slug: 'developers',
    title: 'Developer & AI Agent Documentation | CMAC Roofing',
    h1: 'CMAC Developer & Agent Resources',
    sub: 'Public, read-only access to CMAC’s published knowledge.',
    description:
      'OpenAPI, NLWeb, Markdown, JSON page retrieval, and MCP documentation for accessing CMAC Roofing public services, locations, and contact information.',
    body: aiBody,
    developerResources: true,
    sourceUrls: [
      'https://spec.openapis.org/oas/v3.1.1.html',
      'https://www.rfc-editor.org/rfc/rfc9727.html',
      'https://nlweb.ai/docs/specification',
      'https://modelcontextprotocol.io/specification/2025-11-25/basic/transports',
    ],
    updated: '2026-08-25',
    priority: 0.6,
  },
  {
    path: '/accessibility',
    slug: 'accessibility',
    title: 'Accessibility Statement | CMAC Roofing',
    h1: 'Accessibility',
    sub: 'Built to be usable by everyone.',
    description:
      'CMAC builds toward WCAG 2.1 Level AA. What is in place on this site, and how to report an accessibility problem so we can fix it.',
    body: accessibilityBody,
    updated: '2026-08-24',
    priority: 0.4,
  },
  {
    path: '/privacy-policy',
    slug: 'privacy-policy',
    title: 'Privacy Policy | CMAC Roofing',
    h1: 'Privacy Policy',
    sub: 'What we collect, why, and what you can do about it.',
    description:
      'How CMAC Roofing and Sheet Metal LLC collects, uses, and shares personal information submitted through cmacroofing.com, including SMS consent and opt-out.',
    body: privacyBody,
    updated: '2026-08-24',
    priority: 0.4,
  },
  {
    path: '/terms',
    slug: 'terms',
    title: 'Terms of Service | CMAC Roofing',
    h1: 'Terms of Service',
    sub: 'Terms governing use of this website.',
    description:
      'Terms of use for cmacroofing.com. Site content is general information and does not create an estimate, warranty, or contract — your signed CMAC documents control.',
    body: termsBody,
    updated: '2026-08-24',
    priority: 0.3,
  },
  {
    path: '/reviews',
    slug: 'reviews',
    title: 'Customer Reviews',
    h1: 'Customer Reviews',
    sub: 'Published feedback from CMAC customers.',
    description:
      'Read attributed customer feedback about CMAC roofing, gutter, restoration, and exterior projects across its service markets.',
    body: [
      {
        t: 'p',
        text: 'The comments below are excerpts from customer reviews published on third-party platforms. CMAC does not use these reviews to create a first-party aggregate rating, and critical feedback is not hidden from the source record.',
      },
    ],
    updated: '2026-08-24',
    priority: 0.7,
  },
  {
    path: '/faqs',
    slug: 'faqs',
    title: 'Frequently Asked Questions',
    h1: 'Frequently Asked Questions',
    sub: 'Straight answers about CMAC, inspections, projects, and storm work.',
    description:
      'Answers to common questions about CMAC Roofing, free inspections, estimates, roofing, gutters, garage doors, restoration, insurance claims, and warranties.',
    body: [
      {
        t: 'p',
        text: 'These answers provide general information. The written estimate, contract, manufacturer documentation, insurance policy, and project-specific warranty govern your own work.',
      },
    ],
    faqScopes: [
      'global',
      'about',
      'pricing',
      'insurance-claims',
      'roofing',
      'gutters',
      'doors',
      'restoration',
      'warranty',
    ],
    updated: '2026-08-24',
    priority: 0.8,
  },
  {
    path: '/sitemap-page',
    slug: 'sitemap-page',
    title: 'Site Index',
    h1: 'Site Index',
    sub: 'Browse every public CMAC page.',
    description:
      'A human-readable index of CMAC Roofing services, locations, company information, and customer resources.',
    body: [
      {
        t: 'p',
        text: 'Use this index to browse the public content on this website. Search engines and automated tools can use the XML sitemap or the machine-readable resources linked from the AI resources page.',
      },
    ],
    updated: '2026-08-24',
    priority: 0.5,
  },
  {
    path: '/register-my-roof',
    slug: 'register-my-roof',
    title: 'Register My Roof',
    h1: 'Register My Roof',
    sub: 'Put your CMAC-installed roof in our service system.',
    description:
      'Register a CMAC-installed roof so the service team can identify the property and follow up about the installation record.',
    body: [
      {
        t: 'p',
        text: 'Roof registration is available for properties where CMAC completed the roof installation, including newly built homes. Submit the property and contact details below so the service team can locate the installation record. Registration does not change the terms of a builder, manufacturer, or CMAC warranty.',
      },
    ],
    form: true,
    formVariant: 'roof-registration',
    faqScopes: ['warranty'],
    updated: '2026-08-24',
    priority: 0.6,
  },
]

export const trustPageBySlug = (slug: string) => trustPages.find((p) => p.slug === slug)
