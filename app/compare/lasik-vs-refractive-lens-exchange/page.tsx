import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LASIK vs Refractive Lens Exchange: Which Vision Correction Is Right for You? | Spark Eye Care',
  description: 'Compare LASIK and Refractive Lens Exchange side-by-side. Learn about effectiveness, recovery, cost, and which vision correction procedure is best for your needs.',
}

export default function LASIKvsRLEPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light leading-tight mb-6">
            LASIK vs Refractive Lens Exchange:<br />Which Vision Correction Is Right for You?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A comprehensive, evidence-based comparison to help you make an informed decision about your vision correction options
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Feature</div>
              <div className="p-6 font-semibold border-l border-white/20">LASIK</div>
              <div className="p-6 font-semibold border-l border-white/20">Refractive Lens Exchange</div>
            </div>

            {/* Data Rows */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">20/20 vision or better in 90%+ of patients</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">20/20 vision or better in 94%+ of patients</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best Candidates</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Ages 18-40, stable prescription, healthy corneas</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Ages 45+, presbyopia, early cataracts, high prescription</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Procedure Type</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Reshapes cornea with laser</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Replaces natural lens with artificial lens</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Recovery Time</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">24-48 hours to functional vision; 3-6 months full healing</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">1 week to functional vision; 4-6 weeks full healing</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Common Side Effects</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Dry eyes (temporary), halos, glare, light sensitivity</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">Temporary glare, adaptation period, possible retinal detachment (rare)</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Longevity</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Permanent; vision may change with age (presbyopia)</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Permanent; prevents cataracts, addresses presbyopia</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost Range</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">$2,000-$3,000 per eye</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-white">$4,000-$6,000 per eye</div>
            </div>

            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Insurance Coverage</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">Elective; not typically covered</div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-cream)]">May be partially covered if cataracts present</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* LASIK Deep Dive */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] mb-4">
                  LASIK: Laser Vision Correction
                </h2>
                <div className="w-20 h-1 bg-[var(--color-primary)]"></div>
              </div>
            </div>
            
            <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
              <p>
                LASIK (Laser-Assisted In Situ Keratomileusis) has been the gold standard for vision correction for over 25 years. The procedure uses an excimer laser to precisely reshape the cornea, correcting nearsightedness, farsightedness, and astigmatism. The treatment takes approximately 10-15 minutes per eye and is performed under topical anesthesia (eye drops).
              </p>
              <p>
                <strong>Clinical Evidence:</strong> Over 40 million procedures have been performed worldwide with a 96% patient satisfaction rate. Studies published in the Journal of Cataract and Refractive Surgery show that 90% of patients achieve 20/20 vision or better, and 99% achieve 20/40 or better (the legal driving requirement). The procedure is FDA-approved and has an excellent safety profile when performed on appropriate candidates.
              </p>
              <p>
                <strong>Typical Patient Profile:</strong> LASIK is ideal for patients aged 18-40 with a stable prescription for at least one year. Candidates should have healthy corneas with adequate thickness, no autoimmune conditions affecting healing, and realistic expectations. The procedure is particularly popular among young professionals, athletes, and military personnel seeking freedom from glasses and contacts. Most patients return to work within 1-2 days.
              </p>
            </div>
          </div>

          {/* RLE Deep Dive */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] mb-4">
                  Refractive Lens Exchange: Advanced Lens Replacement
                </h2>
                <div className="w-20 h-1 bg-[var(--color-primary)]"></div>
              </div>
            </div>
            
            <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
              <p>
                Refractive Lens Exchange (RLE), also called Clear Lens Exchange, is essentially cataract surgery performed before cataracts develop. The procedure removes your natural lens and replaces it with a premium intraocular lens (IOL) that corrects your refractive error. Modern IOLs can correct nearsightedness, farsightedness, astigmatism, and presbyopia (age-related near vision loss) simultaneously.
              </p>
              <p>
                <strong>Clinical Evidence:</strong> RLE uses the same proven surgical techniques as cataract surgery, which is the most commonly performed surgery in the world with over 3 million procedures annually in the US alone. Research published in Ophthalmology shows 94% of patients achieve 20/20 vision or better with modern premium IOLs. The procedure permanently eliminates the possibility of cataracts and can provide vision correction that LASIK cannot achieve in patients with very high prescriptions or thin corneas.
              </p>
              <p>
                <strong>Typical Patient Profile:</strong> RLE is ideal for patients over 45 experiencing presbyopia who need reading glasses, patients with very high prescriptions (above -10.00 or +6.00), those with early cataracts, or patients who are not LASIK candidates due to thin corneas. Many patients choose RLE to address both distance and near vision simultaneously with multifocal or extended depth-of-focus lenses. Recovery is slightly longer than LASIK, with most patients returning to normal activities within one week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12">
              How to Decide: A Practical Framework
            </h2>

            <div className="space-y-10">
              {/* Choose LASIK */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Choose LASIK if you:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are between 18-45 years old with a stable prescription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have mild to moderate nearsightedness, farsightedness, or astigmatism</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have healthy corneas with adequate thickness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Want the quickest recovery time (1-2 days to resume most activities)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Prefer a less invasive, surface-level procedure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are looking for the most cost-effective option</span>
                  </li>
                </ul>
              </div>

              {/* Choose RLE */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 flex items-center gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Choose Refractive Lens Exchange if you:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are over 45 and experiencing presbyopia (need reading glasses)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have a very high prescription (above -10.00 or +6.00)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Have early cataracts or a family history of cataracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Are not a LASIK candidate due to thin corneas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Want to correct both distance and near vision simultaneously</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Prefer a permanent solution that prevents future cataracts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-primary)]">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Important Note:</strong> Only a comprehensive eye examination can determine which procedure is right for you. Many factors including corneal thickness, pupil size, tear production, overall eye health, and lifestyle needs must be evaluated by an experienced ophthalmologist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>Can I switch from LASIK to RLE later if my vision changes?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, this is a common scenario. Many patients have LASIK in their 20s or 30s and later develop presbyopia (age-related near vision loss) or cataracts in their 50s or 60s. At that point, RLE can be performed to address these age-related changes. Having had LASIK does not disqualify you from RLE, though your surgeon will need accurate pre-LASIK measurements for optimal lens calculations.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>Which procedure has better long-term outcomes?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Both procedures have excellent long-term outcomes when performed on appropriate candidates. LASIK results are permanent, but your eyes will still age naturally—you may need reading glasses after age 45. RLE addresses this by replacing your natural lens with one that can correct presbyopia, and it permanently prevents cataracts. For patients under 45, LASIK typically offers the best long-term value. For patients over 50, RLE often provides more comprehensive, lasting vision correction.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>Is one procedure safer than the other?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Both procedures are very safe with modern technology and experienced surgeons. LASIK has a slightly lower risk profile because it only affects the corneal surface. RLE carries the small risks associated with intraocular surgery, including infection (1 in 3,000) and retinal detachment (less than 1%). However, RLE uses the same proven techniques as cataract surgery, the most commonly performed surgery in medicine. Your surgeon will assess your individual risk factors and recommend the safest option for your specific situation.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>How much does each procedure actually cost out of pocket?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                LASIK typically costs $4,000-$6,000 total for both eyes using modern bladeless technology. RLE ranges from $8,000-$12,000 for both eyes with premium lenses. Neither is usually covered by insurance as they are considered elective. However, RLE may receive partial coverage if cataracts are present. Many practices offer financing with monthly payments as low as $150-$250. When considering cost, factor in the long-term savings on glasses, contacts, and contact lens supplies—many patients save $500+ annually.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span>What if I am on the borderline between procedures (age 40-50)?</span>
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                This is where a detailed consultation becomes essential. Patients in their 40s may be candidates for both procedures, and the decision depends on your presbyopia status, prescription strength, corneal health, and personal priorities. Some patients choose LASIK with monovision (one eye corrected for distance, one for near). Others prefer RLE to address both simultaneously. Your surgeon will perform a comprehensive evaluation and discuss the pros and cons of each approach based on your unique eye anatomy and lifestyle needs.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 opacity-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Schedule a comprehensive consultation to determine which vision correction procedure is right for you. Our experienced team will evaluate your eyes and help you make an informed decision.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors shadow-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}