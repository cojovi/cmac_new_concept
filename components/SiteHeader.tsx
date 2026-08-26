import { Phone } from 'lucide-react'
import Link from 'next/link'
import { MobileNavToggle } from './MobileNavToggle'
import { Logo } from './ui'

type Variant = 'roofing' | 'minihomes'

type NavLink = { label: string; href: string }

const roofingLinks: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Our Process', href: '/#process' },
  { label: 'About Us', href: '/about' },
  { label: 'Locations', href: '/locations' },
  { label: 'Resources', href: '/faqs' },
  { label: 'Partner With CMAC', href: '/partners' },
]

const minihomesLinks: NavLink[] = [
  { label: 'Models', href: '#models' },
  { label: 'Our Process', href: '#process' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Resources', href: '/faqs' },
  { label: 'Contact', href: '#consultation' },
]

const isInternal = (href: string) => href.startsWith('/')

export function SiteHeader({ variant = 'roofing' }: { variant?: Variant }) {
  const roofing = variant === 'roofing'
  const links = roofing ? roofingLinks : minihomesLinks
  const phone = '18883892622'
  const phoneDisplay = '1-888-389-CMAC'
  const ctaHref = roofing ? '/quote' : '#consultation'
  const ctaLabel = roofing ? 'Request Inspection' : 'Request Consultation'

  const navLinks = (
    <>
      {links.map(({ label, href }) =>
        isInternal(href) ? (
          <Link key={label} href={href}>
            {label}
          </Link>
        ) : (
          <a key={label} href={href}>
            {label}
          </a>
        ),
      )}
      <Link className="nav-route-link" href={roofing ? '/mini-homes' : '/'}>
        {roofing ? 'Mini-Homes' : 'Roofing'}
      </Link>
    </>
  )

  const navActions = (
    <>
      <a className="phone-pill" href={`tel:${phone}`}>
        <Phone size={12} aria-hidden="true" /> {phoneDisplay}
      </a>
      <a className="nav-request" href={ctaHref}>
        {ctaLabel}
      </a>
    </>
  )

  return (
    <>
      <header className="top-nav">
        <Logo brand={roofing ? 'ROOFING' : 'CONTAINERS'} to={roofing ? '/' : '/mini-homes'} />
        <MobileNavToggle links={navLinks} actions={navActions} />
      </header>
      <nav className="mobile-quick-actions" aria-label="Quick contact">
        <a href={`tel:${phone}`}>
          <Phone size={17} aria-hidden="true" /> Call CMAC
        </a>
        {roofing ? <Link href="/quote">Free Quote</Link> : <a href="#consultation">Consultation</a>}
      </nav>
    </>
  )
}
