import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { docByPath } from '@/content/docs'
import { trustPages } from '@/content/trust'
import { metaFrom } from '@/lib/metadata'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return trustPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const doc = docByPath(`/${slug}`)
  return doc ? metaFrom(doc) : {}
}

export default async function TrustPage({ params }: Props) {
  const { slug } = await params
  const doc = docByPath(`/${slug}`)
  if (!doc || doc.template !== 'trust') notFound()
  return <PageShell doc={doc} />
}
