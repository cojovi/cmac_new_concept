import Link from 'next/link'
import { org } from '@/content/org'

export default function NotFound() {
  return (
    <main id="main-content" style={{ minHeight: '70vh', padding: 'clamp(6rem, 12vw, 10rem) clamp(1.25rem, 6vw, 6rem)' }}>
      <p style={{ color: '#ef3340', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>404 · Page not found</p>
      <h1 style={{ maxWidth: '18ch', fontSize: 'clamp(2.25rem, 7vw, 5rem)', lineHeight: 1 }}>That page is not under this roof.</h1>
      <p style={{ maxWidth: '62ch', fontSize: '1rem', lineHeight: 1.7 }}>
        The address may be old or mistyped. Start with our service or location indexes, search the site, or call CMAC for help.
      </p>
      <nav aria-label="Page recovery" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
        <Link href="/services">Browse services</Link>
        <Link href="/locations">Find a location</Link>
        <Link href="/search">Search the site</Link>
        <Link href="/sitemap-page">HTML sitemap</Link>
        <a href={`tel:${org.phoneDigits}`}>{org.phone}</a>
      </nav>
      <p style={{ marginTop: '2rem' }}>
        Agents: <Link href="/llms.txt">llms.txt</Link> · <Link href="/sitemap.xml">sitemap.xml</Link>
      </p>
    </main>
  )
}

