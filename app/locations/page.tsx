import type { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { docByPath } from '@/content/docs'
import { metaFrom } from '@/lib/metadata'

const doc = docByPath('/locations')!

export const metadata: Metadata = metaFrom(doc)

export default function LocationsPage() {
  return <PageShell doc={doc} />
}
