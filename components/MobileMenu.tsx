'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <>
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

      {mounted && mobileOpen && createPortal(
        <div
          aria-hidden={false}
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            animation: 'sparkFade 0.2s ease-out',
          }}
        >
          {/* Right-side drawer */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={e => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(88vw, 380px)',
              backgroundColor: '#ffffff',
              boxShadow: '-8px 0 24px rgba(15, 23, 42, 0.18)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              animation: 'sparkSlideIn 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
                height: '80px',
                borderBottom: '1px solid #e5e7eb',
                backgroundColor: '#ffffff',
                flexShrink: 0,
              }}
            >
              <a href="/" onClick={() => setMobileOpen(false)}>
                <img src="/logo.png" alt="Spark Eye Care" style={{ height: '40px', width: 'auto' }} />
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: 'none',
                  color: '#1a2030',
                  cursor: 'pointer',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav list */}
            <div style={{ padding: '8px 24px' }}>
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 0',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#1a2030',
                    borderBottom: '1px solid #e5e7eb',
                    textDecoration: 'none',
                  }}
                >
                  <span>{link.label}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ padding: '24px', paddingBottom: '40px', marginTop: 'auto' }}>
              <a
                href="tel:+15123771076"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  height: '52px',
                  borderRadius: '12px',
                  border: '2px solid #0070c0',
                  color: '#0070c0',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginBottom: '12px',
                  boxSizing: 'border-box',
                }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (512) 377-1076
              </a>
              <a
                href="/contact#form"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: '#0070c0',
                  color: '#ffffff',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                }}
              >
                Request Appointment
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
