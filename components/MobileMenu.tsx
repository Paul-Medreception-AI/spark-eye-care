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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, backgroundColor: '#ffffff', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
          className="lg:hidden"
        >
          <div style={{ minHeight: '100%', display: 'block', backgroundColor: '#ffffff', paddingBottom: '32px' }}>
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: '80px', borderBottom: '1px solid var(--color-border)', backgroundColor: '#ffffff' }}>
              <a href="/" onClick={() => setOpen(false)}>
                <img src="/logo.png" alt="Spark Eye Care" style={{ height: '44px', width: 'auto' }} />
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '8px', color: 'var(--color-ink)', background: 'transparent', border: 'none' }}
              >
                <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Link list */}
            <nav style={{ padding: '16px 24px', backgroundColor: '#ffffff' }}>
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '16px 0', fontSize: '20px', fontWeight: 500, color: 'var(--color-ink)', borderBottom: '1px solid var(--color-border)', textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div style={{ padding: '24px', backgroundColor: '#ffffff' }}>
              <a
                href="tel:+15123771076"
                onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '14px', borderRadius: '12px', border: '2px solid var(--color-primary)', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', marginBottom: '12px' }}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (512) 377-1076
              </a>
              <a
                href="/contact#form"
                onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '14px', borderRadius: '12px', backgroundColor: 'var(--color-primary)', color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}
              >
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
