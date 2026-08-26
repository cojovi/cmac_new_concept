import { allDocs, docByPath } from '@/content/docs'
import type { PageDoc } from '@/content/types'
import { pageDocToMarkdown } from '@/lib/markdown'
import { searchDocs } from '@/lib/search'
import { abs } from '@/lib/site'

export const MCP_PROTOCOL_VERSION = '2025-11-25'
export const MCP_SERVER_INFO = { name: 'com.cmacroofing.website', title: 'CMAC Roofing Website', version: '1.0.0' }

const readOnlyAnnotations = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
}

export const MCP_TOOLS = [
  {
    name: 'search_site',
    title: 'Search CMAC Roofing',
    description: 'Search CMAC services, service areas, and company information using deterministic keyword retrieval.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', minLength: 1, maxLength: 500, description: 'Natural-language search query.' },
        limit: { type: 'integer', minimum: 1, maximum: 20, default: 8 },
      },
      required: ['query'],
      additionalProperties: false,
    },
    annotations: { ...readOnlyAnnotations, title: 'Search CMAC Roofing' },
  },
  {
    name: 'get_page',
    title: 'Get a CMAC page',
    description: 'Retrieve one published CMAC page as canonical metadata and Markdown.',
    inputSchema: {
      type: 'object',
      properties: { path: { type: 'string', pattern: '^/', description: 'Canonical site path, such as /services/roofing.' } },
      required: ['path'],
      additionalProperties: false,
    },
    annotations: { ...readOnlyAnnotations, title: 'Get a CMAC page' },
  },
  {
    name: 'list_services',
    title: 'List CMAC services',
    description: 'List published CMAC service pages, optionally filtered by roofing, gutters, doors, restoration, or exteriors.',
    inputSchema: {
      type: 'object',
      properties: { category: { type: 'string', enum: ['roofing', 'gutters', 'doors', 'restoration', 'exteriors'] } },
      additionalProperties: false,
    },
    annotations: { ...readOnlyAnnotations, title: 'List CMAC services' },
  },
  {
    name: 'list_locations',
    title: 'List CMAC locations',
    description: 'List CMAC state and market pages, optionally filtered by two-letter state code or state name.',
    inputSchema: {
      type: 'object',
      properties: { state: { type: 'string', minLength: 2, maxLength: 20 } },
      additionalProperties: false,
    },
    annotations: { ...readOnlyAnnotations, title: 'List CMAC locations' },
  },
  {
    name: 'get_contact',
    title: 'Get CMAC contact details',
    description: 'Get verified published contact details for a CMAC market, or the main contact page when no market is supplied.',
    inputSchema: {
      type: 'object',
      properties: { market: { type: 'string', description: 'Market name, market ID, state, or state code.' } },
      additionalProperties: false,
    },
    annotations: { ...readOnlyAnnotations, title: 'Get CMAC contact details' },
  },
] as const

function summary(doc: PageDoc) {
  return { name: doc.h1, description: doc.description, url: abs(doc.path), path: doc.path, dateModified: doc.updated }
}

function textResult(value: unknown, isError = false) {
  return {
    content: [{ type: 'text', text: JSON.stringify(value, null, 2) }],
    structuredContent: typeof value === 'object' && value !== null ? value : { value },
    isError,
  }
}

function stringArg(args: Record<string, unknown>, name: string): string | undefined {
  const value = args[name]
  return typeof value === 'string' ? value.trim() : undefined
}

export function callMcpTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case 'search_site': {
      const query = stringArg(args, 'query')
      if (!query || query.length > 500) return textResult({ error: 'query must contain 1–500 characters' }, true)
      const limit = typeof args.limit === 'number' && Number.isInteger(args.limit) ? Math.min(20, Math.max(1, args.limit)) : 8
      return textResult({ query, results: searchDocs(query, limit) })
    }
    case 'get_page': {
      const path = stringArg(args, 'path')
      const doc = path ? docByPath(path) : undefined
      if (!doc) return textResult({ error: 'Page not found', path }, true)
      return textResult({ ...summary(doc), markdown: pageDocToMarkdown(doc) })
    }
    case 'list_services': {
      const category = stringArg(args, 'category')?.toLocaleLowerCase('en-US')
      const docs = allDocs().filter((doc) => {
        if (!doc.entities.service && !doc.entities.category) return false
        return !category || doc.entities.service?.category === category || doc.entities.category?.id === category
      })
      return textResult({ services: docs.map(summary) })
    }
    case 'list_locations': {
      const state = stringArg(args, 'state')?.toLocaleLowerCase('en-US')
      const docs = allDocs().filter((doc) => {
        const entity = doc.entities.market ?? doc.entities.state
        if (!entity) return false
        if (!state) return true
        if ('stateCode' in entity) return entity.stateCode.toLocaleLowerCase('en-US') === state || entity.state === state
        return entity.code.toLocaleLowerCase('en-US') === state || entity.id === state || entity.name.toLocaleLowerCase('en-US') === state
      })
      return textResult({ locations: docs.map(summary) })
    }
    case 'get_contact': {
      const market = stringArg(args, 'market')?.toLocaleLowerCase('en-US')
      const marketDocs = allDocs().filter((doc) => doc.entities.market)
      const match = market
        ? marketDocs.find((doc) => {
            const entity = doc.entities.market!
            return [entity.id, entity.name, entity.state, entity.stateCode].some(
              (value) => value.toLocaleLowerCase('en-US') === market,
            )
          })
        : undefined
      if (market && !match) return textResult({ error: 'Market not found', market }, true)
      if (match?.entities.market) {
        const entity = match.entities.market
        return textResult({
          market: entity.name,
          phone: entity.phone,
          phoneE164: entity.phoneE164,
          email: entity.email,
          address: entity.street
            ? { street: entity.street, city: entity.city, state: entity.stateCode, postalCode: entity.zip }
            : null,
          url: abs(match.path),
        })
      }
      const contact = docByPath('/contact')
      return textResult({
        page: contact ? summary(contact) : null,
        markdown: contact ? pageDocToMarkdown(contact) : null,
        markets: marketDocs
          .filter((doc) => doc.entities.market)
          .map((doc) => ({
            market: doc.entities.market!.name,
            phone: doc.entities.market!.phone,
            email: doc.entities.market!.email,
            url: abs(doc.path),
          })),
      })
    }
    default:
      return textResult({ error: `Unknown tool: ${name}` }, true)
  }
}

export function mcpServerCard() {
  return {
    $schema: 'https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json',
    name: `${MCP_SERVER_INFO.name}/mcp`,
    version: MCP_SERVER_INFO.version,
    title: MCP_SERVER_INFO.title,
    description: 'Public, read-only access to CMAC Roofing services, locations, pages, and contact information.',
    websiteUrl: abs('/ai'),
    documentationUrl: abs('/ai'),
    remotes: [{ type: 'streamable-http', url: abs('/mcp') }],
  }
}
