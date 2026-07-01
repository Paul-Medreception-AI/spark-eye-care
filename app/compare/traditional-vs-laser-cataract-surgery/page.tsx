import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traditional vs Laser-Assisted Cataract Surgery | Spark Eye Care',
  description: 'Compare traditional cataract surgery with laser-assisted techniques. Understand effectiveness, costs, recovery time, and which option is right for your vision needs.',
  keywords: 'traditional cataract surgery, laser-assisted cataract surgery, femtosecond laser cataract surgery, cataract surgery comparison, FLACS vs traditional',
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light leading-tight mb-6">
            Traditional Cataract Surgery vs Laser-Assisted: Understanding Your Options
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Making an informed decision about your cataract treatment starts with understanding the differences between surgical approaches
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Factor</div>
              <div className="p-6 font-semibold text-lg border-l border-blue-400">Traditional Surgery</div>
              <div className="p-6 font-semibold text-lg border-l border-blue-400">Laser-Assisted</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] hover:bg-[var(--color-cream)] transition-colors">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">Highly effective, 98% success rate, proven technique with decades of refinement</div>
              <div className="p-6 border-l border-[var(--color-border)]">Highly effective, 98-99% success rate, enhanced precision with computer guidance</div>
            </div>

            {/* Recovery Time */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)] hover:bg-blue-50 transition-colors">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Recovery Time</div>
              <div className="p-6 border-l border-[var(--color-border)]">1-2 weeks for initial healing, full recovery 4-6 weeks</div>
              <div className="p-6 border-l border-[var(--color-border)]">Slightly faster, 1 week initial healing, potential for quicker visual stability</div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] hover:bg-[var(--color-cream)] transition-colors">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Side Effects</div>
              <div className="p-6 border-l border-[var(--color-border)]">Minimal: temporary blurriness, light sensitivity, dry eye (typically resolves)</div>
              <div className="p-6 border-l border-[var(--color-border)]">Similar profile, potentially reduced inflammation due to bladeless technique</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)] border-b border-[var(--color-border)] hover:bg-blue-50 transition-colors">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">Typically covered by insurance, minimal out-of-pocket for standard lenses</div>
              <div className="p-6 border-l border-[var(--color-border)]">Additional $1,000-$2,500 per eye, usually not covered by insurance</div>
            </div>

            {/* Procedure Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] hover:bg-[var(--color-cream)] transition-colors">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Procedure Time</div>
              <div className="p-6 border-l border-[var(--color-border)]">15-20 minutes per eye</div>
              <div className="p-6 border-l border-[var(--color-border)]">20-25 minutes per eye (includes imaging and laser steps)</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3 hover:bg-[var(--color-cream)] transition-colors">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Most patients, straightforward cataracts, budget-conscious individuals</div>
              <div className="p-6 border-l border-[var(--color-border)]">Complex cataracts, astigmatism correction, premium lens implants, precision-focused patients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Traditional Surgery */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)]">
                Traditional Cataract Surgery
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
              <p>
                Traditional phacoemulsification cataract surgery has been refined over 50 years and remains the gold standard for cataract removal. Your surgeon uses precision handheld instruments to create small incisions, fragment the clouded lens using ultrasound energy, and implant a clear artificial lens. The technique is exceptionally safe, with success rates exceeding 98% and millions of procedures performed annually worldwide.
              </p>
              
              <p>
                This approach offers proven reliability and is typically fully covered by Medicare and insurance plans. Most patients experience minimal discomfort, return to normal activities within days, and achieve excellent visual outcomes. The surgeon's skill and experience are paramount—at Spark Eye Care, our specialists have performed thousands of traditional cataract surgeries with consistently outstanding results.
              </p>
              
              <p>
                Traditional surgery is ideal for patients with straightforward cataracts who prioritize cost-effectiveness and time-tested methods. The manual techniques allow experienced surgeons to adapt in real-time to each eye's unique anatomy, and the results speak for themselves: clearer vision, restored independence, and improved quality of life for the vast majority of patients.
              </p>
            </div>
          </div>

          {/* Laser-Assisted Surgery */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)]">
                Laser-Assisted Cataract Surgery (FLACS)
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-[var(--color-ink)] leading-relaxed">
              <p>
                Femtosecond laser-assisted cataract surgery (FLACS) represents the latest advancement in cataract treatment technology. A computer-guided laser performs the most delicate steps of surgery—creating incisions, opening the lens capsule, and pre-fragmenting the cataract—with sub-millimeter precision. This bladeless approach offers enhanced accuracy and customization based on detailed 3D imaging of your eye.
              </p>
              
              <p>
                The laser technology provides particular advantages for patients with dense cataracts, significant astigmatism, or those choosing premium intraocular lenses that require exact positioning. Studies suggest laser assistance may reduce ultrasound energy needed during surgery, potentially lowering inflammation and accelerating visual recovery. The computerized precision also creates more consistent results across different skill levels.
              </p>
              
              <p>
                Laser-assisted surgery requires an additional investment—typically $1,000-$2,500 per eye beyond insurance coverage—because the technology itself represents substantial equipment and training costs. Ideal candidates include those seeking the most advanced surgical option, patients with complex cataracts or corneal conditions, and individuals who value cutting-edge precision and are comfortable with the additional expense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="px-6 my-20">
        <div className="max-w-3xl mx-auto bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)] text-center mb-10">
            How to Decide Which Option Is Right for You
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Surgery */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Choose Traditional Surgery If:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You have straightforward cataracts without complications</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You want insurance to cover the procedure completely</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You trust proven, time-tested surgical techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">Cost-effectiveness is a priority for you</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You're choosing standard monofocal lens implants</span>
                </li>
              </ul>
            </div>

            {/* Laser-Assisted Surgery */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Choose Laser-Assisted If:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You have dense or complex cataracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You need astigmatism correction during surgery</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You're choosing premium multifocal or toric lenses</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You value cutting-edge technology and precision</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">You're comfortable with additional out-of-pocket cost</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-blue-50 rounded-xl border-l-4 border-[var(--color-primary)]">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              <strong className="text-[var(--color-primary)]">Important:</strong> Both surgical approaches deliver excellent outcomes. Your ophthalmologist will assess your eye health, cataract characteristics, lifestyle needs, and budget to recommend the best option for your unique situation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Is laser-assisted cataract surgery safer than traditional surgery?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                Both procedures are exceptionally safe with comparable complication rates below 2%. Traditional surgery has a longer track record with billions of successful procedures worldwide. Laser-assisted surgery offers enhanced precision in certain steps, but this doesn't necessarily translate to improved safety for most patients. Your surgeon's experience and skill matter more than the technology used.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Will I see better with laser-assisted surgery?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                Final visual outcomes are comparable between the two approaches—most studies show no significant difference in 20/20 vision achievement rates. What matters most is the quality of your intraocular lens choice, your eye's unique characteristics, and proper healing. Some patients with laser surgery report slightly faster visual stabilization, but long-term results are similar.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Why doesn't insurance cover laser-assisted cataract surgery?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                Medicare and most insurance plans cover "medically necessary" cataract surgery—the standard procedure that safely restores vision. Laser assistance is considered an enhancement or upgrade that adds precision but isn't required for successful outcomes. The additional cost reflects the expensive laser equipment, specialized training, and extra procedure time. Think of it like choosing between standard and premium options.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Can I switch from traditional to laser surgery after my consultation?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                Yes, you can change your mind before surgery, though additional pre-operative imaging may be required for laser planning. Discuss your concerns and questions with your surgeon openly—they can help you understand whether the upgrade would provide meaningful benefits for your specific case. Some patients opt for traditional surgery on one eye and laser on the other to compare their personal experience.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                What do most patients at Spark Eye Care choose?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                The majority of our patients choose traditional surgery due to its proven effectiveness and insurance coverage. Approximately 15-20% opt for laser assistance, typically those with complex cataracts, premium lens implants, or strong preferences for advanced technology. Our surgeons excel at both techniques and will provide honest recommendations based on your clinical needs, not upselling. The "right" choice varies by individual circumstances.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
          <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-6">
            Still Weighing Your Options?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Schedule a personalized consultation with our cataract specialists. We'll evaluate your eyes, discuss your lifestyle needs, and help you make the decision that's right for you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
          >
            Discuss Your Options
          </a>
          <p className="mt-6 text-blue-200 text-sm">
            Most insurance accepted • Flexible scheduling • No-pressure consultations
          </p>
        </div>
      </section>
    </main>
  )
}