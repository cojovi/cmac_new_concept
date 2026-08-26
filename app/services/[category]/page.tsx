import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { docByPath } from '@/content/docs'
import { categories } from '@/content/services'
import { metaFrom } from '@/lib/metadata'

type Props = { params: Promise<{ category: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const doc = docByPath(`/services/${category}`)
  return doc ? metaFrom(doc) : {}
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category } = await params
  const doc = docByPath(`/services/${category}`)
  if (!doc || doc.template !== 'service-category') notFound()
  return <PageShell doc={doc} />
}
