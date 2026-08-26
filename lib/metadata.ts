import type { Metadata } from 'next'
import type { PageDoc } from '@/content/types'
import { abs } from './site'

/** One canonical metadata projection for every content-backed human route. */
export function metaFrom(doc: PageDoc): Metadata {
  const index = doc.indexing?.index ?? true
  const follow = doc.indexing?.follow ?? true
  // RootLayout adds the site-name suffix. A few imported records already carried it.
  const title = doc.title.replace(/\s*\|\s*CMAC Roofing$/i, '')
  return {
    title,
    description: doc.description,
    alternates: { canonical: doc.path },
    robots: { index, follow },
    openGraph: {
      type: 'website',
      title,
      description: doc.description,
      url: abs(doc.path),
      siteName: 'CMAC Roofing',
      locale: 'en_US',
      images: [{ url: abs('/cmac-logo-red.png'), alt: 'CMAC Roofing' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: doc.description,
      images: [abs('/cmac-logo-red.png')],
    },
  }
}
