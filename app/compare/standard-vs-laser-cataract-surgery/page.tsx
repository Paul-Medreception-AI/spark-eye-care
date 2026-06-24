import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Standard Cataract Surgery vs Laser-Assisted: What\'s the Difference? | Spark Eye Care',
  description: 'Compare standard cataract surgery and laser-assisted techniques. Learn about effectiveness, costs, recovery, and which option is right for you at Spark Eye Care.',
  openGraph: {
    title: 'Standard Cataract Surgery vs Laser-Assisted | Spark Eye Care',
    description: 'Expert comparison of cataract surgery options to help you make an informed treatment decision.',
  }
}

export default function CompareCataractSurgeryPage() {
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
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-light leading-tight mb-6">
            Standard Cataract Surgery vs Laser-Assisted: What's the Difference?
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Understanding your options to make the best decision for your vision and lifestyle
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Factor</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Standard Cataract Surgery</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Laser-Assisted Cataract Surgery</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Effectiveness</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Highly effective; proven track record over decades. Restores clear vision in 95%+ of cases.</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Highly effective with enhanced precision. May offer slightly better outcomes for complex cases.</div>
            </div>

            {/* Precision */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Precision</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Surgeon uses handheld instruments; relies on skill and experience for incisions and lens fragmentation.</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Computer-guided laser creates highly precise incisions and softens lens; may reduce energy needed.</div>
            </div>

            {/* Recovery Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Recovery Time</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Most patients see improvement within 24-48 hours. Full recovery typically 4-6 weeks.</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Similar timeline; some patients report slightly faster initial recovery due to reduced trauma.</div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Side Effects</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Minimal; temporary dryness, light sensitivity, or mild inflammation. Rare complications include infection or swelling.</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Similar side effect profile; potentially less inflammation due to gentler lens fragmentation.</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Typically covered by Medicare and insurance for medically necessary cataract removal.</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Additional out-of-pocket cost ($1,000-$2,500 per eye); usually not covered by insurance.</div>
            </div>

            {/* Procedure Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Procedure Time</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">15-20 minutes per eye; outpatient procedure.</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">20-30 minutes per eye due to laser setup; still outpatient.</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Most patients with routine cataracts; those prioritizing insurance coverage and proven methods.</div>
              <div className="p-6 text-[var(--color-ink)] border-l border-[var(--color-border)]">Patients with complex cataracts, astigmatism, or premium lens implants; those seeking maximum precision.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] mb-4">
                  Standard Cataract Surgery: The Proven Gold Standard
                </h2>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                  Standard phacoemulsification cataract surgery has been refined over decades and remains the most common approach worldwide. During the procedure, your surgeon creates a small incision in the cornea, uses an ultrasound probe to break up the cloudy lens, and removes the fragments through gentle suction. A clear artificial lens (intraocular lens or IOL) is then implanted to restore focusing power.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                  This technique is extraordinarily safe and effective, with success rates exceeding 95%. Most patients experience dramatic vision improvement within days and return to normal activities quickly. The procedure is performed under local anesthesia with mild sedation, and discomfort is minimal.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                  Standard cataract surgery is ideal for patients with routine cataracts who want excellent outcomes using a time-tested method. Because it's considered medically necessary, Medicare and most insurance plans cover the procedure and basic monofocal lens implants. Additional costs apply only if you choose premium lens upgrades like toric or multifocal IOLs.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] mb-4">
                  Laser-Assisted Cataract Surgery: Advanced Precision Technology
                </h2>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                  Laser-assisted cataract surgery (often called femtosecond laser cataract surgery) incorporates advanced imaging and computer-guided laser technology into key steps of the procedure. Before the surgeon begins manual work, a femtosecond laser creates the corneal incisions, opens the lens capsule, and pre-softens the cataract by fragmenting it into smaller pieces.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                  This laser precision can be particularly beneficial for patients with dense or complex cataracts, significant astigmatism, or those choosing premium intraocular lenses that require exacting placement. The laser creates incisions that are more consistent in size, shape, and location than manual techniques, potentially improving lens positioning and visual outcomes. Some studies suggest reduced ultrasound energy is needed to remove the lens, which may lower the risk of inflammation or corneal swelling.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                  Laser-assisted surgery is typically an elective upgrade not covered by insurance, adding $1,000-$2,500 per eye to your out-of-pocket costs. It's best suited for patients who want the highest level of technological precision, especially those investing in premium lens implants or who have anatomical factors that benefit from computer-guided accuracy. While outcomes are excellent with both approaches, laser assistance may offer incremental advantages for select patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light text-[var(--color-ink)] text-center mb-8">
              How to Decide Which Option Is Right for You
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Choose Standard Surgery If:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have routine cataracts without complicating factors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You prefer a proven method with decades of safety data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want insurance to cover the entire procedure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're choosing a standard monofocal lens implant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Cost considerations are important to you</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Choose Laser-Assisted If:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have dense, complex, or advanced cataracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're investing in premium lens implants (multifocal, toric, or extended depth-of-focus)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have significant astigmatism requiring correction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want the highest level of computer-guided precision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're comfortable with additional out-of-pocket costs for advanced technology</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-[var(--color-primary)]">
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">The Bottom Line:</strong> Both approaches deliver excellent vision outcomes. Your choice should be based on your specific eye anatomy, cataract characteristics, lens preferences, lifestyle goals, and budget. During your consultation at Spark Eye Care, we'll perform a comprehensive evaluation and discuss which option aligns best with your individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Is laser cataract surgery safer than standard surgery?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Both procedures are extremely safe with very low complication rates. Standard cataract surgery has decades of safety data and success rates above 95%. Laser-assisted surgery offers additional precision but hasn't been shown to significantly reduce overall complication rates. Both are performed by highly trained surgeons using proven techniques. Your surgeon's experience and your individual eye health are more important factors than the technology itself.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Will I see better with laser-assisted cataract surgery?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                For most patients with routine cataracts, visual outcomes are comparable between the two methods. Laser-assisted surgery may provide slight advantages for patients with complex cataracts, significant astigmatism, or those choosing premium lens implants that require precise positioning. The lens choice (standard monofocal vs. premium multifocal or toric) typically has a bigger impact on your final vision than the surgical method. During your consultation, we'll help you understand which combination of technique and lens type will best meet your vision goals.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Does insurance cover laser cataract surgery?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Medicare and most insurance plans cover medically necessary cataract surgery and standard monofocal lens implants. However, the laser-assisted component is typically considered an elective upgrade and is not covered. Patients choosing laser assistance should expect to pay an additional $1,000-$2,500 per eye out of pocket. We'll provide a detailed cost breakdown during your consultation and help you understand your insurance benefits and payment options.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Is recovery faster with laser cataract surgery?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Recovery timelines are very similar for both procedures. Most patients notice vision improvement within 24-48 hours and can resume most normal activities within a few days. Some patients report slightly less inflammation or discomfort with laser-assisted surgery due to the reduced ultrasound energy needed, but the difference is usually minimal. Full healing and visual stabilization typically occur over 4-6 weeks regardless of the technique used. We'll provide detailed post-operative instructions to ensure a smooth recovery with either approach.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can I switch from standard to laser surgery after my consultation?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, you can adjust your decision up until your surgery date, though we recommend making your choice as early as possible to ensure scheduling and proper preparation. Many patients schedule consultations to learn about both options, review their specific test results, and discuss costs before deciding. There's no pressure to choose laser-assisted surgery—our goal is to recommend the approach that best fits your eyes, lifestyle, and budget. We're here to answer all your questions and help you feel confident in your decision.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 opacity-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-light mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a comprehensive cataract evaluation at Spark Eye Care. We'll assess your eyes, discuss your lifestyle needs, and recommend the best surgical approach for you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule Your Consultation
          </a>
          <p className="mt-6 text-sm opacity-75">
            Call us at (555) 123-4567 or complete our online form
          </p>
        </div>
      </section>
    </main>
  )
}