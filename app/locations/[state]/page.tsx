import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { docByPath } from '@/content/docs'
import { states } from '@/content/markets'
import { metaFrom } from '@/lib/metadata'

type Props = { params: Promise<{ state: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return states.map((state) => ({ state: state.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params
  const doc = docByPath(`/locations/${state}`)
  return doc ? metaFrom(doc) : {}
}

export default async function StatePage({ params }: Props) {
  const { state } = await params
  const doc = docByPath(`/locations/${state}`)
  if (!doc || doc.template !== 'state') notFound()
  return <PageShell doc={doc} />
}
