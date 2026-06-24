import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LASIK vs Refractive Lens Exchange: Choosing the Best Vision Correction | Spark Eye Care',
  description: 'Compare LASIK and Refractive Lens Exchange to find the right vision correction procedure for you. Expert guidance from Spark Eye Care to help you decide.',
  openGraph: {
    title: 'LASIK vs Refractive Lens Exchange: Choosing the Best Vision Correction',
    description: 'Compare LASIK and Refractive Lens Exchange to find the right vision correction procedure for you.',
    url: 'https://www.sparkeyetx.com/compare/lasik-vs-refractive-lens-exchange',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/resources" className="hover:underline">Resources</a>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-light leading-tight mb-6">
            LASIK vs Refractive Lens Exchange:<br />Choosing the Best Vision Correction
          </h1>
          <p className="text-xl text-[var(--color-light)] max-w-2xl mx-auto">
            Understanding the differences between these two leading vision correction procedures to make an informed decision for your eyes
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Factor</div>
              <div className="p-6 font-semibold border-l border-white/20">LASIK</div>
              <div className="p-6 font-semibold border-l border-white/20">Refractive Lens Exchange</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Effectiveness</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Corrects nearsightedness, farsightedness, and astigmatism with 20/20 or better vision in 90%+ of patients</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Corrects all refractive errors including high prescriptions; also addresses presbyopia and cataracts</div>
            </div>

            {/* Procedure Type */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Procedure Type</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Laser reshapes cornea; reversible with enhancement procedures</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Replaces natural lens with artificial intraocular lens; permanent solution</div>
            </div>

            {/* Recovery Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Recovery Time</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">1-2 days for basic activities; most people return to work next day</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">3-7 days for initial recovery; full visual stability in 4-6 weeks</div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Common Side Effects</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Temporary dryness, glare, and halos; typically resolve within 3-6 months</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Temporary light sensitivity, glare; small risk of retinal detachment or infection</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Cost</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">$2,000-$3,500 per eye; typically not covered by insurance</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">$3,500-$5,500 per eye; may be partially covered if cataract is present</div>
            </div>

            {/* Age Range */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Ideal Age Range</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">21-45 years old; prescription must be stable for at least 1 year</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">40+ years old, especially those with presbyopia or early cataracts</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best For</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Younger patients with low to moderate prescriptions and healthy corneas</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Patients over 40, high prescriptions, thin corneas, or those wanting to prevent cataracts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - LASIK */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up mb-16">
            <div className="flex items-center gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)]">
                Understanding LASIK
              </h2>
            </div>
            
            <p className="text-lg text-[var(--color-ink)] mb-6 leading-relaxed">
              LASIK (Laser-Assisted In Situ Keratomileusis) has been the gold standard for vision correction since its FDA approval in 1999. This procedure uses an excimer laser to precisely reshape the cornea, correcting the way light enters the eye and focuses on the retina. The surgery takes only 10-15 minutes per eye and is performed under local anesthetic eye drops.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] mb-6 leading-relaxed">
              The ideal LASIK candidate is between 21 and 45 years old, has a stable prescription for at least one year, and has sufficient corneal thickness. The procedure works best for patients with low to moderate myopia (nearsightedness), hyperopia (farsightedness), or astigmatism. Most patients achieve 20/20 vision or better, with results typically stable for decades.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Recovery is remarkably quick—most people notice improved vision within hours and return to work the next day. Common temporary side effects include dry eyes, glare around lights at night, and mild discomfort. These typically resolve within three to six months. LASIK does not address presbyopia (age-related near vision loss), so patients over 40 may still need reading glasses.
            </p>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)]">
                Understanding Refractive Lens Exchange
              </h2>
            </div>
            
            <p className="text-lg text-[var(--color-ink)] mb-6 leading-relaxed">
              Refractive Lens Exchange (RLE), also called Clear Lens Exchange, is essentially the same procedure as cataract surgery but performed before a cataract develops. The surgeon removes your natural lens and replaces it with a premium intraocular lens (IOL) customized to your vision needs. This permanent solution can correct any level of nearsightedness, farsightedness, astigmatism, and presbyopia.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] mb-6 leading-relaxed">
              RLE is ideal for patients over 40 who are beginning to experience presbyopia (difficulty with near vision), those with high prescriptions that exceed LASIK's safe treatment range, or patients with thin corneas who are not LASIK candidates. Because the natural lens is replaced, you will never develop cataracts—a significant long-term benefit. Advanced multifocal or extended depth-of-focus IOLs can provide clear vision at all distances, often eliminating the need for glasses entirely.
            </p>
            
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Recovery takes slightly longer than LASIK, typically 3-7 days before returning to normal activities, with full visual stability achieved in 4-6 weeks. While complications are rare, RLE carries slightly higher risks than LASIK since it's an intraocular procedure. These include infection (less than 0.1%), retinal detachment (0.5-2%), and potential issues with IOL positioning. However, in experienced hands, RLE offers exceptional outcomes with patient satisfaction rates exceeding 95%.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide: A Decision Framework
            </h2>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                Choose LASIK if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Are between 21 and 45 years old with a stable prescription</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Have low to moderate nearsightedness, farsightedness, or astigmatism</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Have sufficient corneal thickness and healthy corneas</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Want the quickest recovery time with minimal disruption to your schedule</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Prefer a less invasive procedure with lower upfront cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Don't yet have significant presbyopia or age-related vision changes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Choose Refractive Lens Exchange if you:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Are over 40 and experiencing presbyopia (difficulty reading up close)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Have a very high prescription beyond LASIK's safe treatment range</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Have thin corneas or irregular corneal shape that makes LASIK unsuitable</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Want to address both distance and near vision in one permanent procedure</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Have early signs of cataracts or want to prevent future cataract development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-[var(--color-ink)]">Seek a long-term solution and don't mind a slightly longer recovery period</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-2 border-[var(--color-primary)]">
              <p className="text-lg text-[var(--color-ink)] text-center">
                <strong className="text-[var(--color-primary)]">Important:</strong> These are general guidelines. A comprehensive eye examination and consultation with an experienced ophthalmologist is essential to determine which procedure is truly right for your unique eyes and vision goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                Can I switch from LASIK to RLE later if my vision changes?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Yes, it's possible to have RLE after LASIK if your vision needs change significantly as you age, particularly if you develop presbyopia or cataracts. However, previous LASIK can make calculating the correct IOL power slightly more complex, requiring specialized measurements. This is one reason why some surgeons recommend RLE for patients over 40 who are borderline candidates for both procedures—it provides a permanent solution that won't need revision.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                Will I need reading glasses after either procedure?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                With LASIK, if you're over 40, you'll likely still need reading glasses for presbyopia since LASIK doesn't address age-related lens stiffening. Some patients choose monovision LASIK (one eye corrected for distance, one for near) to reduce reading glass dependence. With RLE using multifocal or extended depth-of-focus IOLs, most patients achieve good vision at all distances and don't need glasses for most activities, though some may use readers for very fine print in dim lighting.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                Which procedure has better long-term results?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Both procedures offer excellent long-term results, but in different ways. LASIK results typically remain stable for decades, though age-related changes like presbyopia will still occur. RLE provides truly permanent refractive correction since the artificial lens doesn't change with age, and you'll never develop cataracts. For patients under 45, LASIK's long-term outcomes are outstanding. For those over 45, RLE may provide more lasting freedom from glasses as it addresses both current refractive error and future presbyopia or cataracts.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                Is one procedure safer than the other?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Both procedures are very safe when performed by experienced surgeons, but they carry different risk profiles. LASIK, being an external corneal procedure, has fewer serious risks but can cause temporary dry eye and visual disturbances. RLE, as an intraocular procedure, has slightly higher (though still very low) risks of serious complications like infection or retinal detachment. However, complication rates for RLE are similar to routine cataract surgery, which is one of the safest and most commonly performed surgeries worldwide. Your surgeon will assess your individual risk factors to recommend the safer option for you.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)] list-none flex items-center justify-between">
                How do I know which procedure is right for me?
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                The best way to determine which procedure is right for you is through a comprehensive eye examination and consultation with an experienced refractive surgeon. This evaluation includes measuring corneal thickness, mapping corneal shape, assessing lens clarity, checking for presbyopia, and discussing your lifestyle needs and visual goals. Your age, prescription, corneal health, and whether you're experiencing presbyopia are the primary factors in determining candidacy. Many patients are candidates for both procedures, making the decision more about your preferences regarding recovery time, cost, and long-term vision goals.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-white mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-[var(--color-light)] mb-10 max-w-2xl mx-auto">
            Schedule a comprehensive consultation with our experienced team to determine which vision correction procedure is best suited for your unique eyes and lifestyle.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation
          </a>
          <p className="text-[var(--color-light)] mt-6">
            Call us at <a href="tel:8889999999" className="underline hover:text-white">(888) 999-9999</a> or book online
          </p>
        </div>
      </section>
    </main>
  )
}