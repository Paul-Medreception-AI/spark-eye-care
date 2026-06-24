import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traditional Glaucoma Surgery vs MIGS: Comparing Your Options | Spark Eye Care',
  description: 'Compare traditional glaucoma surgery and MIGS procedures side-by-side. Understand effectiveness, recovery time, risks, and costs to make an informed treatment decision.',
  keywords: 'glaucoma surgery comparison, MIGS vs traditional surgery, trabeculectomy vs MIGS, glaucoma treatment options, minimally invasive glaucoma surgery',
  openGraph: {
    title: 'Traditional Glaucoma Surgery vs MIGS: Comparing Your Options',
    description: 'Expert comparison of glaucoma treatment options to help you make an informed decision.',
    url: 'https://www.sparkeyetx.com/compare/traditional-glaucoma-surgery-vs-migs',
  }
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all cursor-pointer">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Traditional Glaucoma Surgery vs MIGS: Comparing Your Options
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A comprehensive comparison to help you understand which glaucoma treatment approach is right for your unique situation
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Factor</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Traditional Surgery</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">MIGS</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <div className="text-[var(--color-dark)] font-semibold mb-2">20-40% IOP reduction</div>
                <p className="text-sm text-[var(--color-muted)]">Most effective for advanced glaucoma</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <div className="text-[var(--color-dark)] font-semibold mb-2">15-30% IOP reduction</div>
                <p className="text-sm text-[var(--color-muted)]">Best for mild to moderate glaucoma</p>
              </div>
            </div>

            {/* Recovery Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Recovery Time</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <div className="text-[var(--color-dark)] font-semibold mb-2">4-6 weeks</div>
                <p className="text-sm text-[var(--color-muted)]">Activity restrictions required</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <div className="text-[var(--color-dark)] font-semibold mb-2">1-2 weeks</div>
                <p className="text-sm text-[var(--color-muted)]">Minimal activity restrictions</p>
              </div>
            </div>

            {/* Side Effects & Risks */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Side Effects & Risks</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <ul className="text-sm text-[var(--color-muted)] space-y-1">
                  <li>• Infection risk (1-2%)</li>
                  <li>• Bleeding complications</li>
                  <li>• Cataracts (common)</li>
                  <li>• Vision loss (rare)</li>
                </ul>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <ul className="text-sm text-[var(--color-muted)] space-y-1">
                  <li>• Minimal bleeding</li>
                  <li>• Low infection risk</li>
                  <li>• Temporary inflammation</li>
                  <li>• Vision loss (very rare)</li>
                </ul>
              </div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <div className="text-[var(--color-dark)] font-semibold mb-2">$3,000-$6,000</div>
                <p className="text-sm text-[var(--color-muted)]">Usually covered by insurance</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <div className="text-[var(--color-dark)] font-semibold mb-2">$2,500-$5,000</div>
                <p className="text-sm text-[var(--color-muted)]">Usually covered by insurance</p>
              </div>
            </div>

            {/* Time Commitment */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Time Commitment</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <ul className="text-sm text-[var(--color-muted)] space-y-1">
                  <li>• 1-2 hour procedure</li>
                  <li>• Multiple follow-ups</li>
                  <li>• 6-8 weeks monitoring</li>
                </ul>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <ul className="text-sm text-[var(--color-muted)] space-y-1">
                  <li>• 15-45 minute procedure</li>
                  <li>• Fewer follow-ups</li>
                  <li>• 2-4 weeks monitoring</li>
                </ul>
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <ul className="text-sm text-[var(--color-muted)] space-y-1">
                  <li>• Advanced glaucoma</li>
                  <li>• Failed medication trials</li>
                  <li>• Rapid IOP reduction needed</li>
                  <li>• Previous MIGS failure</li>
                </ul>
              </div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <ul className="text-sm text-[var(--color-muted)] space-y-1">
                  <li>• Mild to moderate glaucoma</li>
                  <li>• Cataract surgery patients</li>
                  <li>• Active lifestyle</li>
                  <li>• First surgical intervention</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Traditional Surgery */}
          <div className="mb-16 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              Traditional Glaucoma Surgery: The Gold Standard
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Traditional glaucoma surgeries, primarily trabeculectomy and tube shunt procedures, have been the cornerstone of glaucoma treatment for decades. These procedures create a new drainage pathway for aqueous fluid, bypassing the eye's natural drainage system entirely. Trabeculectomy involves creating a small flap in the sclera (white part of the eye) and removing a piece of tissue to allow fluid to drain into a space beneath the conjunctiva, forming a "bleb" or fluid reservoir.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The evidence supporting traditional surgery is robust, with studies showing sustained IOP reduction of 20-40% over many years. This makes it particularly effective for advanced glaucoma cases where aggressive pressure reduction is necessary to prevent further vision loss. However, this effectiveness comes with trade-offs: longer recovery periods, more intensive post-operative care, and a higher risk of complications including infection, bleeding, and cataract formation.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Typical candidates for traditional surgery include patients with advanced glaucoma damage, those who have failed to respond to medications or laser treatments, and individuals requiring significant IOP reduction (typically below 12 mmHg). The procedure requires general or local anesthesia and takes 1-2 hours. Post-operative care is intensive, with frequent follow-up visits during the first few months to monitor healing and adjust medications to ensure the surgical site heals properly without scarring closed.
            </p>
          </div>

          {/* MIGS */}
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
              MIGS: Modern, Minimally Invasive Approach
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              Minimally Invasive Glaucoma Surgery (MIGS) represents a paradigm shift in glaucoma treatment, offering a middle ground between medications and traditional surgery. MIGS procedures work by improving the eye's natural drainage system rather than creating an entirely new pathway. Common MIGS devices include the iStent (a tiny titanium implant), Hydrus Microstent, Xen Gel Stent, and various trabecular bypass procedures. These devices are inserted through micro-incisions, often during cataract surgery, with minimal disruption to eye anatomy.
            </p>
            <p className="text-lg text-[var(--color-muted)] mb-4 leading-relaxed">
              The key advantage of MIGS is the favorable safety profile. Clinical trials show IOP reduction of 15-30% with significantly fewer complications compared to traditional surgery. The procedures are typically performed in 15-45 minutes under topical or light sedation, and most patients resume normal activities within days. The recovery is gentler, with less inflammation and faster visual rehabilitation. This makes MIGS particularly appealing for patients who are still working, active, or anxious about major eye surgery.
            </p>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              Ideal MIGS candidates have mild to moderate glaucoma with IOP in the mid-to-high teens or low twenties. It's especially beneficial when combined with cataract surgery, as both procedures can be performed simultaneously with minimal additional risk. MIGS is also preferred for patients who want to reduce dependence on eye drops but aren't ready for the commitment and risks of traditional surgery. However, MIGS may not provide sufficient pressure reduction for advanced glaucoma or cases requiring IOP below 12 mmHg.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-12">
              How to Decide: Decision Framework
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Surgery */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">
                  Choose Traditional Surgery if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have advanced glaucoma with significant optic nerve damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Your IOP needs to be reduced to 12 mmHg or lower</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You've exhausted medication and laser treatment options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">MIGS procedures have been unsuccessful for you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You can accommodate 4-6 weeks recovery time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">Maximum pressure reduction is your top priority</span>
                  </li>
                </ul>
              </div>

              {/* MIGS */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">
                  Choose MIGS if:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You have mild to moderate glaucoma (early stage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're already planning cataract surgery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You want to reduce or eliminate eye drop medications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You need a quick recovery to return to work or activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">You're concerned about surgical risks and complications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-muted)]">This is your first surgical intervention for glaucoma</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-2 border-[var(--color-primary)]">
              <p className="text-[var(--color-ink)] text-center text-lg">
                <strong>Important:</strong> This framework is a general guide. Your ophthalmologist will consider your specific eye anatomy, glaucoma type, overall health, lifestyle factors, and personal preferences to recommend the best option for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                  Can I have MIGS after traditional surgery has failed?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                It depends on the specific traditional surgery you had and the condition of your eye anatomy. Some MIGS procedures may still be possible after failed trabeculectomy, but the success rate may be lower. Your ophthalmologist will need to evaluate whether sufficient intact trabecular meshwork and drainage structures remain for a MIGS device to be effective. In many cases, if traditional surgery has failed, repeating traditional surgery or trying a different type of traditional procedure may be more appropriate.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                  Will insurance cover both procedures equally?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most insurance plans, including Medicare, cover both traditional glaucoma surgery and MIGS when medically necessary. However, coverage specifics vary by plan, and some insurers may require prior authorization or documentation that less invasive treatments have been tried first. MIGS procedures performed during cataract surgery are typically well-covered. It's important to verify coverage with your insurance provider before scheduling surgery, as out-of-pocket costs can vary significantly.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                  How long do the results from each procedure typically last?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Traditional surgery typically provides longer-lasting results, with many patients maintaining adequate IOP control for 5-10 years or more. However, scarring can reduce effectiveness over time, and some patients may need additional interventions. MIGS procedures generally have a shorter longevity, with studies showing sustained benefit for 2-5 years in most patients. Many MIGS patients eventually need additional treatments, but the advantage is that MIGS preserves eye anatomy for future surgeries if needed. Both procedures may require supplemental eye drops even when successful.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                  What if my glaucoma worsens after choosing MIGS?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                One of the key advantages of MIGS is that it doesn't "burn bridges" for future treatments. If your glaucoma progresses after MIGS, you still have all options available: adding or adjusting medications, laser procedures, additional MIGS procedures, or proceeding to traditional surgery. The minimally invasive nature of MIGS means it doesn't significantly alter eye anatomy or reduce the success rate of subsequent traditional surgeries. This is why MIGS is often preferred as a first surgical option for mild to moderate glaucoma—it allows a staged approach to treatment escalation.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                  Can I have both eyes treated at the same time?
                </span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                For traditional surgery, it's almost always recommended to treat one eye at a time, typically waiting several weeks or months between surgeries to ensure proper healing and assess results. For MIGS procedures, particularly when combined with cataract surgery, some surgeons may offer same-day bilateral treatment, though this is controversial and depends on individual risk factors. Most ophthalmologists prefer staging MIGS procedures at least 1-2 weeks apart to minimize infection risk and ensure you maintain functional vision in at least one eye during recovery. Your surgeon's recommendation will depend on your overall health, glaucoma severity, and personal circumstances.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up leading-relaxed">
            Schedule a comprehensive consultation to determine which glaucoma treatment approach is right for your unique situation. Our experienced team will evaluate your condition and help you make an informed decision.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-up"
          >
            <span>Schedule Your Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-white/80 mt-6 text-sm">
            Call us directly: <span className="font-semibold">(555) 123-4567</span>
          </p>
        </div>
      </section>
    </main>
  )
}