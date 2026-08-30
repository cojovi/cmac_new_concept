import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Thank You',
  robots: { index: false, follow: false },
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status } = await searchParams
  const failed = Boolean(status)
  return (
    <div className="site-shell page-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="panel page-hero page-hero-with-image utility-hero">
          <div className="page-hero-media">
            <Image
              src="/page-visuals/contact.avif"
              alt="A CMAC field coordinator connecting a property owner with the service team"
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: '62% center' }}
            />
            <div className="page-hero-media-wash" aria-hidden="true" />
            <span className="page-hero-media-index" aria-hidden="true">CMAC / REQUEST SYSTEM</span>
          </div>
          <div className="page-hero-copy">
            <span className="section-label red">REQUEST STATUS</span>
            <h1>{failed ? 'We Could Not Send Your Request' : 'Thank You'}</h1>
            <p className="hero-sub">
              {failed
                ? 'Please call 1-888-389-CMAC so our team can help directly.'
                : 'Your request has been delivered to CMAC. A team member will follow up using the contact details you provided.'}
            </p>
            <div className="hero-buttons">
              <a className="btn btn-red" href="tel:18883892622">Call CMAC</a>
              <Link className="btn btn-outline" href="/">Return Home</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
