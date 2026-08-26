const problemSchema = {
  type: 'object',
  required: ['type', 'title', 'status', 'detail', 'instance', 'code', 'resolution'],
  properties: {
    type: { type: 'string', format: 'uri-reference' },
    title: { type: 'string' },
    status: { type: 'integer', minimum: 400, maximum: 599 },
    detail: { type: 'string' },
    instance: { type: 'string', format: 'uri-reference' },
    code: { type: 'string' },
    resolution: { type: 'string' },
  },
  additionalProperties: true,
} as const

const askFailureSchema = {
  type: 'object',
  required: ['_meta', 'error'],
  properties: {
    _meta: {
      type: 'object',
      required: ['response_type', 'version'],
      properties: {
        response_type: { const: 'failure' },
        version: { const: '0.55' },
      },
    },
    error: {
      type: 'object',
      required: ['code'],
      properties: {
        code: {
          type: 'string',
          enum: ['NO_RESULTS', 'INVALID_QUERY', 'UNSUPPORTED_FORMAT', 'UNSUPPORTED_MODE', 'INTERNAL_ERROR'],
        },
        message: { type: 'string' },
      },
    },
  },
} as const

export function openApiDocument(origin: string) {
  return {
    openapi: '3.1.1',
    info: {
      title: 'CMAC Roofing public retrieval API',
      version: '1.0.0',
      description:
        'Public, read-only retrieval interfaces for CMAC Roofing published pages and deterministic NLWeb search. No API key, account, OAuth flow, or permission scope is required. These operations cannot create leads, change site content, or perform commerce.',
      termsOfService: `${origin}/terms`,
      license: { name: 'CMAC Roofing Terms of Service', url: `${origin}/terms` },
      contact: { name: 'CMAC Roofing', url: `${origin}/contact`, email: 'info@cmacroofing.com' },
    },
    servers: [{ url: origin, description: 'The CMAC deployment that served this description' }],
    externalDocs: { description: 'CMAC developer and agent documentation', url: `${origin}/developers` },
    security: [],
    tags: [
      { name: 'Content', description: 'Read one published CMAC page in a structured representation.' },
      { name: 'Search', description: 'Search the same public PageDoc index used by the website.' },
    ],
    paths: {
      '/agent': {
        get: {
          operationId: 'getCmacPublishedPage',
          summary: 'Get one published CMAC page',
          description:
            'Returns canonical metadata and Markdown for a public CMAC content path. This is a read-only operation and requires no authentication.',
          security: [],
          tags: ['Content'],
          parameters: [
            {
              in: 'query',
              name: 'path',
              required: false,
              description: 'Canonical content path. Defaults to the homepage.',
              schema: { type: 'string', pattern: '^/', maxLength: 300, default: '/' },
              example: '/services/roofing/roof-repairs',
            },
          ],
          responses: {
            '200': {
              description: 'Published page representation',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/PageRepresentation' } } },
            },
            '404': {
              description: 'The requested path is not a published CMAC page',
              content: { 'application/problem+json': { schema: { $ref: '#/components/schemas/ProblemDetails' } } },
            },
          },
        },
      },
      '/ask': {
        get: {
          operationId: 'getCmacNlwebCapabilities',
          summary: 'Describe the CMAC NLWeb endpoint',
          description: 'Returns the supported NLWeb version, response format, mode, and a sample request.',
          security: [],
          tags: ['Search'],
          responses: {
            '200': {
              description: 'NLWeb capability summary',
              content: { 'application/json': { schema: { type: 'object', additionalProperties: true } } },
            },
            '405': {
              description: 'Use GET to inspect capabilities or POST to run a query',
              content: { 'application/problem+json': { schema: { $ref: '#/components/schemas/ProblemDetails' } } },
            },
          },
        },
        post: {
          operationId: 'searchCmacPublishedContent',
          summary: 'Search CMAC published content with NLWeb 0.55',
          description:
            'Runs deterministic list-mode retrieval over public CMAC pages. The operation is read-only, non-streaming, and requires no authentication.',
          security: [],
          tags: ['Search'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/AskRequest' },
                example: {
                  query: { text: 'roof repair in Dallas' },
                  prefer: { mode: 'list', response_format: 'conversational_search' },
                  meta: { version: '0.55' },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'NLWeb answer or protocol-level failure such as no results',
              content: {
                'application/json': {
                  schema: {
                    oneOf: [
                      { $ref: '#/components/schemas/AskAnswer' },
                      { $ref: '#/components/schemas/AskFailure' },
                    ],
                  },
                },
              },
            },
            '400': {
              description: 'Malformed JSON or an invalid query',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/AskFailure' } } },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        ProblemDetails: problemSchema,
        PageRepresentation: {
          type: 'object',
          required: ['@context', '@type', 'name', 'description', 'url', 'dateModified', 'breadcrumbs', 'markdown'],
          properties: {
            '@context': { const: 'https://schema.org' },
            '@type': { type: 'string', enum: ['WebPage', 'Service', 'LocalBusiness'] },
            name: { type: 'string' },
            description: { type: 'string' },
            url: { type: 'string', format: 'uri' },
            dateModified: { type: 'string', format: 'date' },
            breadcrumbs: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name', 'url'],
                properties: { name: { type: 'string' }, url: { type: 'string', format: 'uri' } },
              },
            },
            markdown: { type: 'string' },
          },
        },
        AskRequest: {
          type: 'object',
          required: ['query'],
          properties: {
            query: {
              type: 'object',
              required: ['text'],
              properties: {
                text: { type: 'string', minLength: 1, maxLength: 500 },
                site: { type: 'string' },
                itemType: { type: 'string' },
              },
            },
            prefer: {
              type: 'object',
              properties: {
                streaming: { const: false },
                response_format: { const: 'conversational_search' },
                mode: { const: 'list' },
              },
            },
            meta: { type: 'object', properties: { version: { const: '0.55' } } },
          },
        },
        AskAnswer: {
          type: 'object',
          required: ['_meta', 'results'],
          properties: {
            _meta: {
              type: 'object',
              required: ['response_type', 'response_format', 'version'],
              properties: {
                response_type: { const: 'answer' },
                response_format: { const: 'conversational_search' },
                version: { const: '0.55' },
              },
            },
            results: {
              type: 'array',
              items: {
                type: 'object',
                required: ['@type', 'name', 'description', 'url'],
                properties: {
                  '@context': { type: 'string', format: 'uri' },
                  '@type': { type: 'string' },
                  name: { type: 'string' },
                  description: { type: 'string' },
                  url: { type: 'string', format: 'uri' },
                  dateModified: { type: 'string', format: 'date' },
                },
                additionalProperties: true,
              },
            },
          },
        },
        AskFailure: askFailureSchema,
      },
    },
    'x-cmac-access': {
      authentication: 'none',
      authorization: 'none',
      permissions: ['public:read'],
      writes: false,
      note: 'public:read describes capability only; it is not an OAuth scope and clients do not request a token',
    },
  }
}
