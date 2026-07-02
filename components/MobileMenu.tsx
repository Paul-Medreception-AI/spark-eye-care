'use client'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/conditions', label: 'Conditions' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Meet the Doctor' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://spark.ema.md/ema/pay/Online#/pm/payfac/pay', label: 'Pay My Bill', external: true },
]

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close drawer on ESC
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <>
      {/* Hamburger / close button in the site header */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(prev => !prev)}
        className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[var(--color-ink)] transition hover:bg-[var(--color-cream)]"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {mobileOpen ? (
            <path d="M6 18 18 6M6 6l12 12" />
          ) : (
            <>
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Drawer overlay + panel — always mounted so iOS renders correctly */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-200 ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Dim overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel — slides in from the right */}
        <nav
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-[min(85vw,360px)] flex-col bg-white text-[var(--color-ink)] shadow-xl transition-transform duration-200 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex h-20 items-center justify-between border-b border-[var(--color-border)] px-5 shrink-0">
            <a href="/" onClick={() => setMobileOpen(false)}>
              <img src="/logo.png" alt="Spark Eye Care" className="h-9 w-auto" />
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-ink)] transition hover:bg-[var(--color-cream)]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable nav links */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
            <div className="flex flex-col divide-y divide-[var(--color-border)]">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center justify-between py-3 text-base font-semibold text-[var(--color-ink)] transition hover:text-[var(--color-primary)]"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="text-[var(--color-muted)]">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer footer CTAs */}
          <div className="border-t border-[var(--color-border)] px-5 py-5 space-y-3 shrink-0">
            <a
              href="tel:+15123771076"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold transition hover:bg-[var(--color-primary)]/5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (512) 377-1076
            </a>
            <a
              href="/contact#form"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-full items-center justify-center rounded-xl bg-[var(--color-primary)] text-white font-semibold transition hover:bg-[var(--color-dark)]"
            >
              Request Appointment
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
