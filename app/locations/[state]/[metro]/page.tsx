import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { docByPath } from '@/content/docs'
import { markets } from '@/content/markets'
import { metaFrom } from '@/lib/metadata'

type Props = { params: Promise<{ state: string; metro: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return markets
    .filter((market) => market.path.split('/').length === 4)
    .map((market) => {
      const [, , state, metro] = market.path.split('/')
      return { state, metro }
    })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, metro } = await params
  const doc = docByPath(`/locations/${state}/${metro}`)
  return doc ? metaFrom(doc) : {}
}

export default async function MarketPage({ params }: Props) {
  const { state, metro } = await params
  const doc = docByPath(`/locations/${state}/${metro}`)
  if (!doc || doc.template !== 'market') notFound()
  return <PageShell doc={doc} />
}
