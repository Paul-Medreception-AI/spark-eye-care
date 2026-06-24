import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monofocal vs Multifocal Lenses: Which IOL Is Right for You? | Spark Eye Care',
  description: 'Compare monofocal and multifocal intraocular lenses (IOLs) for cataract surgery. Learn about effectiveness, costs, and which lens option best fits your lifestyle and vision goals.',
}

export default function MonofocalVsMultifocalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span>Home</span>
            <span className="mx-2">›</span>
            <span>Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Monofocal vs Multifocal Lenses: Which IOL Is Right for You?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Making the right intraocular lens (IOL) choice during cataract surgery can dramatically impact your vision and quality of life for years to come.
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-4 font-semibold">Feature</div>
              <div className="p-4 font-semibold border-l border-white/20">Monofocal Lenses</div>
              <div className="p-4 font-semibold border-l border-white/20">Multifocal Lenses</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Effectiveness</div>
              <div className="p-4 border-l border-[var(--color-border)]">Excellent vision at one distance (typically far)</div>
              <div className="p-4 border-l border-[var(--color-border)]">Good vision at multiple distances (near, intermediate, far)</div>
            </div>

            {/* Reading Glasses */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Reading Glasses</div>
              <div className="p-4 border-l border-[var(--color-border)]">Required for near tasks (reading, phone use)</div>
              <div className="p-4 border-l border-[var(--color-border)]">Often not needed; 80-90% glasses independence</div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Visual Side Effects</div>
              <div className="p-4 border-l border-[var(--color-border)]">Minimal; crisp vision at set distance</div>
              <div className="p-4 border-l border-[var(--color-border)]">Possible halos/glare around lights, especially at night</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost</div>
              <div className="p-4 border-l border-[var(--color-border)]">Typically covered by insurance; minimal out-of-pocket</div>
              <div className="p-4 border-l border-[var(--color-border)]">Premium upgrade; $1,500-$3,000+ per eye additional cost</div>
            </div>

            {/* Adaptation Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Adaptation Period</div>
              <div className="p-4 border-l border-[var(--color-border)]">Quick; vision stabilizes within days</div>
              <div className="p-4 border-l border-[var(--color-border)]">2-6 months for brain to fully adapt to multiple focal points</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-4 border-l border-[var(--color-border)]">Budget-conscious patients; those comfortable with reading glasses; night drivers</div>
              <div className="p-4 border-l border-[var(--color-border)]">Active lifestyles; desire for glasses independence; those willing to adapt to new vision</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-6">
              Monofocal Lenses: The Proven Standard
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--color-ink)]/80">
              <p className="mb-4 leading-relaxed">
                Monofocal intraocular lenses have been the gold standard for cataract surgery for decades. These lenses provide excellent, crisp vision at a single focal point—typically set for distance vision. They're the most widely used IOL worldwide, with millions of successful implantations and a long track record of safety and reliability.
              </p>
              <p className="mb-4 leading-relaxed">
                The technology behind monofocal lenses is straightforward: they correct your vision to one specific distance, usually optimized for activities like driving, watching television, or recognizing faces across a room. Because they focus light at a single point, they produce exceptionally clear, high-contrast vision at that distance without the optical compromises inherent in multifocal designs.
              </p>
              <p className="leading-relaxed">
                Most patients with monofocal lenses will need reading glasses for close-up tasks like reading books, using smartphones, or working on a computer. Some choose a "monovision" approach, where one eye is set for distance and the other for near vision—though this requires adaptation and doesn't work for everyone. Insurance typically covers the entire cost of monofocal lenses as part of standard cataract surgery.
              </p>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-6">
              Multifocal Lenses: Premium Vision Technology
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--color-ink)]/80">
              <p className="mb-4 leading-relaxed">
                Multifocal IOLs represent an advanced lens technology designed to reduce or eliminate dependence on glasses after cataract surgery. These premium lenses feature multiple focal zones built into the lens surface, allowing you to see clearly at near, intermediate, and far distances. For many patients, this means freedom from constantly reaching for reading glasses.
              </p>
              <p className="mb-4 leading-relaxed">
                The optical design of multifocal lenses splits incoming light between different focal points. While this provides functional vision at multiple distances, it comes with trade-offs. Some patients experience halos around lights at night, reduced contrast sensitivity in low-light conditions, or visual disturbances that can take months to adapt to. About 80-90% of multifocal lens recipients achieve significant glasses independence for daily activities.
              </p>
              <p className="leading-relaxed">
                Success with multifocal lenses depends heavily on patient selection and realistic expectations. Ideal candidates are motivated individuals with healthy eyes (no significant macular degeneration or glaucoma), have an active lifestyle where glasses would be inconvenient, and understand that there's an adaptation period. They're particularly popular among professionals, athletes, and those who value spontaneity and convenience in their daily lives. The additional cost—often $1,500 to $3,000 or more per eye—is considered an investment in lifestyle quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide Section */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12">
            How to Decide: A Decision Framework
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Monofocal Column */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Choose Monofocal If...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You're comfortable wearing reading glasses for close-up tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">Budget is a primary concern and you want insurance coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You do a lot of night driving and want minimal glare</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You prioritize the sharpest possible distance vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You prefer the time-tested, proven technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You have other eye conditions that might complicate multifocal outcomes</span>
                </li>
              </ul>
            </div>

            {/* Multifocal Column */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Choose Multifocal If...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You want to reduce or eliminate dependence on glasses</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You lead an active lifestyle and find glasses inconvenient</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You're willing to invest in premium lens technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You understand there's an adaptation period (2-6 months)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">You're comfortable with possible halos/glare around lights</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]/80">Your eyes are otherwise healthy with no significant complications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-white/60 rounded-lg border-l-4 border-[var(--color-primary)]">
            <p className="text-[var(--color-ink)]/80 leading-relaxed">
              <strong className="text-[var(--color-ink)]">Important Note:</strong> This decision framework is a starting point. Your individual eye health, lifestyle needs, and visual goals are unique. A comprehensive consultation with your eye surgeon is essential to determine the best IOL for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-lg shadow-md group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                Can I switch from monofocal to multifocal lenses after surgery?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/80 leading-relaxed">
                Yes, but it requires a lens exchange procedure—essentially repeating the surgery to replace the IOL. This carries additional surgical risk and cost. While technically possible, it's far better to make the right choice initially through thorough consultation. Some patients who choose monofocal lenses initially may consider lens exchange years later if their lifestyle changes significantly.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                Do multifocal lenses work for everyone?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/80 leading-relaxed">
                Not everyone is a good candidate. Patients with significant macular degeneration, severe dry eye, irregular astigmatism, or previous corneal surgery may not achieve optimal results with multifocal lenses. Additionally, individuals who are perfectionists or have difficulty adapting to visual changes may struggle with the neurological adaptation required. A comprehensive eye exam and candidacy assessment is crucial.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                Will I still need glasses with multifocal lenses?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/80 leading-relaxed">
                Most patients (80-90%) achieve functional vision for daily activities without glasses. However, you may still want glasses for extended reading, very fine print, or demanding visual tasks. Some patients keep a pair of low-power readers for prolonged close work or computer use. The goal is glasses independence for most activities, not necessarily perfect vision at all distances in all conditions.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                How long do these lenses last?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/80 leading-relaxed">
                Both monofocal and multifocal IOLs are designed to last a lifetime. They're made from biocompatible materials that don't degrade inside the eye. Once implanted during cataract surgery, they typically never need replacement. In rare cases, a lens may need repositioning or exchange due to complications, but the vast majority of implanted lenses remain stable and functional for decades.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                What about toric lenses for astigmatism?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)]/80 leading-relaxed">
                Toric lenses correct astigmatism and are available in both monofocal and multifocal versions. If you have significant astigmatism (typically over 1.0 diopter), a toric lens can provide sharper vision by correcting the irregular curvature of your cornea. These are considered a premium option for monofocal lenses (additional cost) but are often combined with multifocal designs. Your surgeon will measure your astigmatism during pre-operative testing.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 leading-relaxed">
            Schedule a comprehensive IOL consultation to determine which lens technology is right for your eyes, lifestyle, and visual goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-primary)] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Consultation
          </a>
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            Most insurance covers the evaluation • Premium lens costs discussed during visit
          </p>
        </div>
      </section>
    </main>
  )
}