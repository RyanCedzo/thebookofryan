'use client'

import { usePathname } from 'next/navigation'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="hidden items-center gap-x-6 sm:flex">
      {headerNavLinks
        .filter((link) => link.href !== '/')
        .map((link) => {
          const active = isActive(pathname, link.href)
          return (
            <Link
              key={link.title}
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={`text-[0.95rem] transition-colors ${
                active
                  ? 'text-text border-accent border-b pb-0.5'
                  : 'text-muted hover:text-text border-b border-transparent pb-0.5'
              }`}
            >
              {link.title}
            </Link>
          )
        })}
    </nav>
  )
}
