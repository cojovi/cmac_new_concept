import type { Block, PageDoc, Section } from '@/content/types'
import { abs } from '@/lib/site'

const linkTarget = (href: string) => (href.startsWith('/') ? abs(href) : href)

function blockToMarkdown(block: Block): string {
  switch (block.t) {
    case 'h2':
      return `## ${block.text}`
    case 'h3':
      return `### ${block.text}`
    case 'ul':
      return block.items.map((item) => `- ${item}`).join('\n')
    case 'note':
      return `> ${block.text}`
    default:
      return block.text
  }
}

function sectionToMarkdown(section: Section): string {
  switch (section.k) {
    case 'hero':
      return [section.sub, section.body, ...(section.cta ?? []).map((cta) => `[${cta.label}](${linkTarget(cta.href)})`)]
        .filter(Boolean)
        .join('\n\n')
    case 'prose':
      return [section.heading ? `## ${section.heading}` : '', ...section.blocks.map(blockToMarkdown)]
        .filter(Boolean)
        .join('\n\n')
    case 'features':
      return [`## ${section.heading}`, ...section.items.map((item) => `### ${item.title}\n\n${item.detail}`)].join('\n\n')
    case 'serviceGrid':
      return [
        `## ${section.heading}`,
        ...section.items.map((item) => `- [${item.name}](${abs(item.path)}) — ${item.summary}`),
      ].join('\n')
    case 'process':
      return [
        `## ${section.heading}`,
        ...section.steps.map((step, index) => `${index + 1}. **${step.title}** — ${step.detail}`),
      ].join('\n')
    case 'brands':
      return [`## ${section.heading}`, ...section.brands.map((brand) => `- **${brand.name}** — ${brand.note}`)].join('\n')
    case 'markets':
      return [
        `## ${section.heading}`,
        ...section.markets.map((market) => `- **${market.name}, ${market.stateCode}** — ${market.intro}`),
      ].join('\n')
    case 'nap': {
      const market = section.market
      const address = market.street ? `${market.street}, ${market.city}, ${market.stateCode} ${market.zip}` : 'Regional service team'
      return `## ${market.name} contact\n\n- Address: ${address}\n- Phone: [${market.phone}](tel:${market.phoneE164})\n- Email: [${market.email}](mailto:${market.email})`
    }
    case 'credentials':
    case 'press':
      return `## ${section.heading}`
    case 'reviews':
      return [
        `## ${section.heading}`,
        ...section.reviews.map((review) => `> ${review.body}\n>\n> — ${review.author}, ${review.source}`),
      ].join('\n\n')
    case 'faq':
      return [`## ${section.heading}`, ...section.items.flatMap((item) => [`### ${item.q}`, item.a])].join('\n\n')
    case 'offers':
      return [`## ${section.heading}`, ...section.offers.map((offer) => `- **${offer.name}** — ${offer.description}`)].join('\n')
    case 'links':
      return [
        `## ${section.heading}`,
        ...section.items.map((item) => `- [${item.name}](${abs(item.path)})${item.summary ? ` — ${item.summary}` : ''}`),
      ].join('\n')
    case 'form':
      return `## ${section.heading}\n\n${section.body ?? 'Use the form on the HTML page or contact CMAC directly.'}`
    case 'cta':
      return [
        `## ${section.heading}`,
        section.body,
        ...section.cta.map((cta) => `[${cta.label}](${linkTarget(cta.href)})`),
      ].join('\n\n')
  }
}

export function pageDocToMarkdown(doc: PageDoc): string {
  const sources = 'sourceUrls' in doc && Array.isArray(doc.sourceUrls) ? (doc.sourceUrls as string[]) : []
  const lines = [
    '---',
    `title: ${JSON.stringify(doc.h1)}`,
    `description: ${JSON.stringify(doc.description)}`,
    `canonical: ${JSON.stringify(abs(doc.path))}`,
    `last-modified: ${JSON.stringify(doc.updated)}`,
    '---',
    '',
    `# ${doc.h1}`,
    '',
    `> ${doc.description}`,
    '',
    `Canonical: ${abs(doc.path)}`,
    `Last updated: ${doc.updated}`,
    '',
    ...doc.sections.map(sectionToMarkdown).flatMap((text) => [text, '']),
  ]

  if (sources.length > 0) {
    lines.push('## Sources', '', ...sources.map((source) => `- ${source}`), '')
  }

  return `${lines.join('\n').trim()}\n`
}
