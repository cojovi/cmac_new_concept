import type { MetadataRoute } from 'next'
import { allDocs } from '@/content/docs'
import { abs } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return allDocs()
    .filter((doc) => doc.indexing?.index !== false)
    .map((doc) => ({
      url: abs(doc.path),
      lastModified: doc.updated,
      changeFrequency: doc.changeFrequency ?? 'monthly',
      priority: doc.priority ?? 0.6,
    }))
}
