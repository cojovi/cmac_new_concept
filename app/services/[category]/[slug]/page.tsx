import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { docByPath } from '@/content/docs'
import { services } from '@/content/services'
import { metaFrom } from '@/lib/metadata'

type Props = { params: Promise<{ category: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((service) => ({ category: service.category, slug: service.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params
  const doc = docByPath(`/services/${category}/${slug}`)
  return doc ? metaFrom(doc) : {}
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category, slug } = await params
  const doc = docByPath(`/services/${category}/${slug}`)
  if (!doc || doc.template !== 'service-detail') notFound()
  return <PageShell doc={doc} />
}
