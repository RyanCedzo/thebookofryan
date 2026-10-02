'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="text-muted hover:text-text sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-60 sm:hidden">
        <div className="fixed inset-0 bg-text/20" aria-hidden="true" />
        <DialogPanel className="bg-bg fixed inset-0 z-70 px-5 py-8">
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-muted hover:text-text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-10 flex flex-col">
            {headerNavLinks.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`border-border border-b py-4 font-serif text-2xl ${
                    active ? 'text-text' : 'text-muted'
                  }`}
                >
                  {link.title}
                </Link>
              )
            })}
          </nav>
        </DialogPanel>
      </Dialog>
    </>
  )
}

export default MobileNav
