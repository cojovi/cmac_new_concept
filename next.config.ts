import type { NextConfig } from 'next'
import { legacyRedirects } from './content/legacy-redirects'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Trailing slashes off keeps one canonical form per URL.
  trailingSlash: false,

  async redirects() {
    return legacyRedirects()
  },

  async headers() {
    return [
      {
        // HTML and markdown are alternate representations of the same public URL.
        source: '/:path*',
        headers: [
          { key: 'Vary', value: 'Accept, Accept-Encoding' },
          {
            key: 'Link',
            value: '</.well-known/api-catalog>; rel="api-catalog", </.well-known/ai-catalog.json>; rel="alternate"; type="application/json", </.well-known/agent-skills/index.json>; rel="alternate"; type="application/json", </.well-known/mcp/server-card.json>; rel="service-meta"; type="application/json", </openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json", </developers>; rel="service-doc"; type="text/html", </llms.txt>; rel="alternate"; type="text/plain", </sitemap.xml>; rel="sitemap"; type="application/xml", </schemamap.xml>; rel="alternate"; type="application/xml"',
          },
        ],
      },
      {
        // Machine-readable surfaces are safe to cache hard at the edge.
        source: '/:path(llms.txt|llms-full.txt)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
    ]
  },
}

export default nextConfig
