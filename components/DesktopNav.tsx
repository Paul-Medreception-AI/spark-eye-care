import { SERVICES } from '@/lib/data/services'
import { CONDITIONS } from '@/lib/data/conditions'

// Desktop header nav with CSS-only hover dropdowns for Services + Conditions.
// Server component — no JS. The dropdown panels read from lib/data so they stay
// in sync automatically as silo pages are added. Hover is pure Tailwind
// group-hover; a pt-3 bridge keeps the panel open while the cursor travels from
// the trigger to the menu.

const linkCls =
  'text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors'

function Caret() {
  return (
    <svg className="w-3 h-3 opacity-60 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function Dropdown({
  label,
  hubHref,
  items,
  columns,
  width,
}: {
  label: string
  hubHref: string
  items: { slug: string; title: string }[]
  columns: number
  width: string
}) {
  return (
    <div className="group relative">
      <a href={hubHref} className={`${linkCls} inline-flex items-center gap-1`}>
        {label}
        <Caret />
      </a>
      {/* pt-3 bridge = invisible hover buffer so the panel doesn't close mid-travel */}
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
        <div className={`${width} bg-white rounded-2xl shadow-xl border border-[var(--color-border)] p-4`}>
          <div className={`grid gap-x-6 gap-y-1`} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
            {items.map((it) => (
              <a
                key={it.slug}
                href={`${hubHref}/${it.slug}`}
                className="block rounded-lg px-3 py-2 text-sm text-[var(--color-ink)] hover:bg-[var(--color-cream)] hover:text-[var(--color-primary)] transition-colors leading-snug"
              >
                {it.title}
              </a>
            ))}
          </div>
          <a
            href={hubHref}
            className="mt-3 block border-t border-[var(--color-border)] pt-3 px-3 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-dark)]"
          >
            View all {label} →
          </a>
        </div>
      </div>
    </div>
  )
}

export default function DesktopNav() {
  const services = SERVICES.map((s) => ({ slug: s.slug, title: s.title }))
  const conditions = [...CONDITIONS]
    .map((c) => ({ slug: c.slug, title: c.title }))
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
      <Dropdown label="Services" hubHref="/services" items={services} columns={1} width="w-72" />
      <Dropdown label="Conditions" hubHref="/conditions" items={conditions} columns={3} width="w-[42rem]" />
      <a href="/about" className={linkCls}>About</a>
      <a href="/team" className={`${linkCls} whitespace-nowrap`}>Meet the Doctor</a>
      <a href="/contact" className={linkCls}>Contact</a>
      <a
        href="https://spark.ema.md/ema/pay/Online#/pm/payfac/pay"
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkCls} whitespace-nowrap`}
      >
        Pay My Bill
      </a>
      <a href="tel:+15123771076" className="hidden xl:inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors whitespace-nowrap">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        (512) 377-1076
      </a>
      <a href="/contact#form" className="ml-2 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap">Request Appointment</a>
    </nav>
  )
}
