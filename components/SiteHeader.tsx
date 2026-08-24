import { ChevronDown, Phone } from 'lucide-react'
import Link from 'next/link'
import { MobileNavToggle } from './MobileNavToggle'
import { Logo } from './ui'

type Variant = 'roofing' | 'minihomes'

type NavLink = { label: string; href: string; dropdown?: boolean }

const roofingLinks: NavLink[] = [
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Our Process', href: '#process' },
  { label: 'About Us', href: '/about' },
  { label: 'Locations', href: '/locations' },
  { label: 'Resources', href: '/faqs', dropdown: true },
  { label: 'Careers', href: '/partners' },
]

const minihomesLinks: NavLink[] = [
  { label: 'Models', href: '#models', dropdown: true },
  { label: 'Our Process', href: '#process' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Resources', href: '/faqs', dropdown: true },
  { label: 'Contact', href: '#consultation' },
]

const isInternal = (href: string) => href.startsWith('/')

export function SiteHeader({ variant = 'roofing' }: { variant?: Variant }) {
  const roofing = variant === 'roofing'
  const links = roofing ? roofingLinks : minihomesLinks
  const phone = roofing ? '18883892622' : '18883892622'
  const phoneDisplay = roofing ? '1-888-389-CMAC' : '1-888-389-CMAC'
  const ctaHref = roofing ? '#inspection' : '#consultation'
  const ctaLabel = roofing ? 'Request Inspection' : 'Request Consultation'

  const navLinks = (
    <>
      {links.map(({ label, href, dropdown }) =>
        isInternal(href) ? (
          <Link key={label} href={href}>
            {label}
            {dropdown ? <ChevronDown size={10} aria-hidden="true" /> : null}
          </Link>
        ) : (
          <a key={label} href={href}>
            {label}
            {dropdown ? <ChevronDown size={10} aria-hidden="true" /> : null}
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
    <header className="top-nav">
      <Logo brand={roofing ? 'ROOFING' : 'CONTAINERS'} to={roofing ? '/' : '/mini-homes'} />
      <MobileNavToggle links={navLinks} actions={navActions} />
    </header>
  )
}
