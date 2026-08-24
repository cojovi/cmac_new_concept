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
