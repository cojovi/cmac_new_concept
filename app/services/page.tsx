import type { Metadata } from 'next'
import { PageShell } from '@/components/PageShell'
import { docByPath } from '@/content/docs'
import { metaFrom } from '@/lib/metadata'

const doc = docByPath('/services')!

export const metadata: Metadata = metaFrom(doc)

export default function ServicesPage() {
  return <PageShell doc={doc} />
}
