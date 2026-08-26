import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Logo({
  small = false,
  brand = 'ROOFING',
  to = '/',
}: {
  small?: boolean
  brand?: string
  to?: string
}) {
  return (
    <Link aria-label={`CMAC ${brand} home`} className={small ? 'logo logo-small' : 'logo'} href={to}>
      <Image src="/cmac-logo-red.png" alt="CMAC" width={164} height={45} priority={!small} />
      <strong data-brand={brand}>{brand}</strong>
    </Link>
  )
}

export function RedButton({
  children,
  wide = false,
  href = '#inspection',
}: {
  children: React.ReactNode
  wide?: boolean
  href?: string
}) {
  const className = wide ? 'btn btn-red btn-wide' : 'btn btn-red'
  const content = (
    <>
      {children}
      <ArrowRight size={13} strokeWidth={2.6} aria-hidden="true" />
    </>
  )

  return href.startsWith('/') ? (
    <Link className={className} href={href}>
      {content}
    </Link>
  ) : (
    <a className={className} href={href}>
      {content}
    </a>
  )
}

export function IconBox({ children, soft = false }: { children: React.ReactNode; soft?: boolean }) {
  return <span className={soft ? 'icon-box icon-box-soft' : 'icon-box'}>{children}</span>
}
