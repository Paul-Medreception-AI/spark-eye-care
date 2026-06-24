import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Toric vs Multifocal Lenses: Correcting Astigmatism and Presbyopia | Spark Eye Care',
  description: 'Compare toric and multifocal lenses for astigmatism and presbyopia. Understand effectiveness, costs, benefits, and which lens type is right for your vision needs.',
  keywords: 'toric lenses, multifocal lenses, astigmatism correction, presbyopia treatment, IOL comparison, cataract surgery lenses, premium lenses',
  openGraph: {
    title: 'Toric vs Multifocal Lenses Comparison | Spark Eye Care',
    description: 'Expert comparison of toric and multifocal intraocular lenses to help you make an informed decision about your vision correction.',
    url: 'https://www.sparkeyetx.com/compare/toric-vs-multifocal-lenses',
  },
}

export default function ToricVsMultifocalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/resources" className="hover:underline">Resources</a>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Toric vs Multifocal Lenses:<br />Correcting Astigmatism and Presbyopia
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto font-light">
            A comprehensive comparison to help you choose the right intraocular lens for your unique vision needs
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-2">Toric Lenses</h3>
                  <p className="text-[var(--color-muted)]">Specifically designed to correct astigmatism by compensating for an irregularly shaped cornea, providing clear distance vision</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-2">Multifocal Lenses</h3>
                  <p className="text-[var(--color-muted)]">Designed to correct presbyopia by providing multiple focal points for clear vision at near, intermediate, and far distances</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Feature</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Toric Lenses</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Multifocal Lenses</div>
            </div>

            {/* Primary Purpose */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Primary Purpose</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Corrects astigmatism for clear distance vision</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Corrects presbyopia for near, intermediate, and distance vision</div>
            </div>

            {/* Vision Correction */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Vision Correction</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Excellent distance vision; reading glasses usually still needed</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Near, intermediate, and distance vision; reduces or eliminates need for glasses</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best For</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Patients with astigmatism who prioritize crisp distance vision</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Patients who want glasses independence for most activities</div>
            </div>

            {/* Adaptation Period */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Adaptation Period</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Minimal; vision is typically stable within days</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">3-6 months as brain adapts to multiple focal points</div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Potential Side Effects</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Minimal; slight halos possible in low light</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Halos, glare, reduced contrast sensitivity in low light</div>
            </div>

            {/* Night Driving */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Night Driving</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Excellent; minimal visual disturbances</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">May experience halos around lights; some patients adapt fully</div>
            </div>

            {/* Cost Range */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Cost Range</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">$$$ - Premium lens upgrade</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">$$$$ - Higher premium option</div>
            </div>

            {/* Insurance Coverage */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)]/50">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Insurance Coverage</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Partial; covers basic surgery, not premium lens upgrade</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Partial; covers basic surgery, not premium lens upgrade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Toric Lenses */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Toric Intraocular Lenses</h2>
            </div>
            
            <div className="space-y-6 text-lg text-[var(--color-muted)] leading-relaxed">
              <p>
                Toric intraocular lenses are specifically engineered to correct astigmatism, a common refractive error caused by an irregularly shaped cornea. Unlike standard spherical lenses, toric lenses have different powers in different meridians of the lens, compensating for the uneven curvature of the cornea. This specialized design allows patients with astigmatism to achieve clear, crisp distance vision without relying on glasses for distance tasks.
              </p>
              <p>
                The effectiveness of toric lenses depends on precise alignment during surgery. These lenses feature orientation marks that surgeons use to position them at the exact axis required to correct your specific astigmatism. Modern toric IOLs can correct up to 6 diopters of astigmatism, covering the vast majority of patients. Studies show that over 95% of patients with toric lenses achieve 20/40 vision or better without glasses for distance, with many achieving 20/20 or better.
              </p>
              <p>
                Toric lenses provide a single focal point optimized for distance vision. This means you'll see road signs, faces across the room, and television screens clearly without glasses. However, you'll still need reading glasses for close work like reading small print, using a smartphone, or doing detailed handwork. Many patients find this trade-off acceptable because they prioritize excellent distance vision and don't mind readers for occasional close tasks. The visual quality with toric lenses is exceptional, with minimal halos or glare even in challenging lighting conditions.
              </p>
            </div>
          </div>

          {/* Deep Dive: Multifocal Lenses */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)]">Multifocal Intraocular Lenses</h2>
            </div>
            
            <div className="space-y-6 text-lg text-[var(--color-muted)] leading-relaxed">
              <p>
                Multifocal intraocular lenses represent advanced optical technology designed to provide clear vision at multiple distances—near, intermediate, and far—simultaneously. These lenses feature concentric rings or zones with different optical powers, allowing light to focus at various distances. The goal is to reduce or eliminate dependence on glasses for most daily activities, from reading a menu to using a computer to driving. Modern multifocal IOLs use sophisticated diffractive or refractive optics to split incoming light between focal points.
              </p>
              <p>
                The primary benefit of multifocal lenses is glasses independence. Clinical studies demonstrate that approximately 80-85% of patients with multifocal IOLs report rarely or never needing glasses for daily activities. You can expect to read books, check your phone, work on a computer, and drive without reaching for glasses. However, some patients may still want readers for very small print or extended reading sessions in dim lighting. The intermediate zone is particularly valuable for computer work and activities like cooking or playing musical instruments.
              </p>
              <p>
                Multifocal lenses do require neuroadaptation—the process by which your brain learns to interpret and select the appropriate focal point for each task. This adaptation typically takes 3-6 months and varies by individual. During this period, you may notice halos around lights at night, reduced contrast sensitivity, or slight visual compromises compared to monofocal lenses. Most patients adapt successfully and report high satisfaction, but roughly 10-15% of patients remain bothered by nighttime visual phenomena. Patients who drive frequently at night or have demanding visual requirements in low light should carefully weigh these considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-8 text-center">How to Decide</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Choose Toric Lenses if you:
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Have astigmatism and prioritize crisp, clear distance vision above all else</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Don't mind using reading glasses for close-up tasks</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Drive frequently at night and want minimal halos or glare</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Want the most predictable visual outcome with minimal adaptation</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prefer a lower premium lens cost while still correcting astigmatism</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Have tried multifocal contact lenses in the past and didn't tolerate them well</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Choose Multifocal Lenses if you:
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Want maximum independence from glasses for daily activities</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Need clear vision at near, intermediate, and far distances</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Have an active lifestyle and don't want to carry readers everywhere</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Are willing to adapt to potential halos or glare in low light conditions</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Don't drive extensively at night or in challenging lighting conditions</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--color-muted)]">
                    <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Have realistic expectations and patience during the 3-6 month adaptation period</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-2 border-[var(--color-primary)]">
              <p className="text-[var(--color-muted)] text-center">
                <strong className="text-[var(--color-ink)]">Important Note:</strong> Some patients have both astigmatism and presbyopia. In these cases, toric multifocal lenses are available, combining both technologies to correct astigmatism while providing multiple focal points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-sm group animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-primary)] transition-colors">
                Can I have a toric lens in one eye and a multifocal lens in the other?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>This approach, called "blended vision" or "mix and match," is not typically recommended. Having different lens technologies in each eye can cause binocular vision problems, depth perception issues, and visual confusion. If you have astigmatism and want the benefits of multifocal vision, toric multifocal lenses that combine both corrections in each eye are a better solution. Your surgeon can help determine if you're a candidate for this combined technology.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm group animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-primary)] transition-colors">
                How much astigmatism can a toric lens correct?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Modern toric intraocular lenses can correct astigmatism ranging from approximately 1.0 to 6.0 diopters, which covers the vast majority of patients with astigmatism. For very high levels of astigmatism beyond what toric lenses can correct, your surgeon may combine the toric lens with additional procedures like limbal relaxing incisions or laser vision correction. During your pre-operative evaluation, precise measurements will determine the exact power and orientation needed for your toric lens.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm group animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-primary)] transition-colors">
                Will I still see halos with toric lenses?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Toric lenses produce significantly fewer halos and less glare compared to multifocal lenses. Because toric lenses have a single focal point (like standard monofocal lenses) rather than multiple focal zones, they don't split light in the same way. Some patients may notice mild halos around bright lights at night, particularly in the first few weeks after surgery, but these are typically minimal and comparable to standard monofocal lenses. The visual quality with toric lenses is excellent in all lighting conditions.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm group animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-primary)] transition-colors">
                Are multifocal lenses worth the higher cost?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>The value of multifocal lenses depends on your lifestyle priorities and visual needs. Studies show that 80-85% of multifocal lens recipients report high satisfaction and would choose the same lens again. If you highly value glasses independence and are willing to adapt to potential nighttime visual phenomena, multifocal lenses can be worth the investment. However, if you don't mind using reading glasses or have concerns about halos and glare, a toric or standard monofocal lens may be a better value. Consider the long-term cost savings of not purchasing prescription glasses for multiple distances when evaluating the upfront premium.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm group animate-fade-up">
              <summary className="p-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] text-lg hover:text-[var(--color-primary)] transition-colors">
                Can I switch from a multifocal lens to a toric lens if I'm not happy?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>While IOL exchange is technically possible, it's a more complex procedure than the original cataract surgery and carries additional risks. Most surgeons recommend waiting at least 3-6 months to allow for full neuroadaptation before considering an exchange, as many patients who initially struggle with multifocal lenses adapt successfully over time. This is why careful pre-operative evaluation, realistic expectations, and thorough discussion of your lifestyle needs are so important. Choosing the right lens the first time is always preferable to exchanging later.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6">Ready to Discuss Your Options?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Every patient's vision needs are unique. Schedule a comprehensive consultation to determine which lens technology is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}