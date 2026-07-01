import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MIGS vs Traditional Glaucoma Surgery: Benefits and Considerations | Spark Eye Care',
  description: 'Compare MIGS and traditional glaucoma surgery options. Learn about effectiveness, recovery time, risks, and which procedure may be right for your glaucoma treatment.',
  openGraph: {
    title: 'MIGS vs Traditional Glaucoma Surgery: Benefits and Considerations | Spark Eye Care',
    description: 'Compare MIGS and traditional glaucoma surgery options. Learn about effectiveness, recovery time, risks, and which procedure may be right for your glaucoma treatment.',
    url: 'https://sparkeyetx.com/compare/migs-vs-traditional-glaucoma-surgery',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function MIGSvsTraditionalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/resources" className="hover:underline">Resources</a>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light leading-tight mb-6">
            MIGS vs Traditional Glaucoma Surgery: Benefits and Considerations
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Understanding your surgical options is crucial for managing glaucoma effectively. Compare minimally invasive and traditional approaches to make an informed decision.
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold text-lg">Factor</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">MIGS</div>
              <div className="p-6 font-semibold text-lg border-l border-white/20">Traditional Surgery</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">Moderate IOP reduction (20-30% average)</div>
              <div className="p-6 border-l border-[var(--color-border)]">High IOP reduction (30-50% average)</div>
            </div>

            {/* Recovery Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Recovery Time</div>
              <div className="p-6 border-l border-[var(--color-border)]">Days to 1-2 weeks</div>
              <div className="p-6 border-l border-[var(--color-border)]">4-6 weeks</div>
            </div>

            {/* Side Effects & Risks */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Side Effects & Risks</div>
              <div className="p-6 border-l border-[var(--color-border)]">Minimal: temporary inflammation, rare bleeding</div>
              <div className="p-6 border-l border-[var(--color-border)]">Higher: infection risk, hypotony, bleb-related issues</div>
            </div>

            {/* Procedure Type */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Procedure Type</div>
              <div className="p-6 border-l border-[var(--color-border)]">Micro-incision, often combined with cataract surgery</div>
              <div className="p-6 border-l border-[var(--color-border)]">Full incision, standalone procedure</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">Moderate, often covered by insurance</div>
              <div className="p-6 border-l border-[var(--color-border)]">Higher initial cost, typically covered</div>
            </div>

            {/* Time Commitment */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Time Commitment</div>
              <div className="p-6 border-l border-[var(--color-border)]">15-30 minutes, outpatient</div>
              <div className="p-6 border-l border-[var(--color-border)]">45-90 minutes, outpatient</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Mild to moderate glaucoma, patients wanting faster recovery</div>
              <div className="p-6 border-l border-[var(--color-border)]">Advanced glaucoma, patients needing maximum IOP reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* MIGS Deep Dive */}
          <div className="mb-16 animate-fade-up">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--color-ink)] mb-6">
              Understanding MIGS (Minimally Invasive Glaucoma Surgery)
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-[var(--color-ink)]">
              <p>
                MIGS represents a revolutionary approach to glaucoma treatment that emerged in the early 2000s. These procedures utilize microscopic incisions and specialized devices to improve the eye's natural drainage system, reducing intraocular pressure with minimal tissue disruption. Common MIGS procedures include iStent injection, Hydrus Microstent, and Kahook Dual Blade goniotomy.
              </p>
              <p>
                Clinical evidence demonstrates that MIGS procedures typically reduce IOP by 20-30% and can significantly decrease patients' dependence on glaucoma medications. A 2021 study in Ophthalmology Glaucoma found that 76% of MIGS patients reduced their medication burden by at least one drop after two years. The safety profile is exceptional, with serious complications occurring in less than 1% of cases.
              </p>
              <p>
                MIGS is particularly attractive for patients with mild to moderate open-angle glaucoma who are undergoing cataract surgery. The ability to combine these procedures means patients address both conditions simultaneously with one recovery period. Most patients resume normal activities within days and experience minimal discomfort. However, MIGS may not achieve sufficient pressure reduction for advanced glaucoma cases or patients requiring very low target pressures.
              </p>
            </div>
          </div>

          {/* Traditional Surgery Deep Dive */}
          <div className="animate-fade-up">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--color-ink)] mb-6">
              Understanding Traditional Glaucoma Surgery
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-[var(--color-ink)]">
              <p>
                Traditional glaucoma surgeries—primarily trabeculectomy and tube shunt procedures—have been the gold standard for advanced glaucoma management for over 50 years. These procedures create new drainage pathways that bypass the eye's clogged natural system, establishing a filtration site (bleb) under the conjunctiva or utilizing a drainage tube connected to a reservoir plate.
              </p>
              <p>
                The pressure-lowering efficacy of traditional surgery is unmatched, with trabeculectomy achieving IOP reductions of 30-50% in most patients. The Tube Versus Trabeculectomy Study demonstrated that both approaches maintain IOP control in approximately 70% of patients at five years. This makes traditional surgery indispensable for patients with advanced disease, very high baseline pressures, or those who have failed less invasive treatments.
              </p>
              <p>
                The trade-off for this effectiveness is a more intensive surgical experience and recovery. Patients typically require 4-6 weeks before returning to full activities, with careful monitoring for complications such as hypotony (excessively low pressure), infection, or bleb leakage. Long-term success requires ongoing surveillance, and some patients need bleb needling or revision procedures. Despite these challenges, traditional surgery remains the most reliable option for preserving vision in severe glaucoma cases where medication and MIGS cannot adequately control pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[var(--color-ink)] mb-8 text-center">
              How to Decide Which Option Is Right for You
            </h2>

            <div className="space-y-10">
              {/* Choose MIGS */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-3">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Consider MIGS if...
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    You have mild to moderate open-angle glaucoma
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    You're already planning cataract surgery
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    You want to reduce dependence on glaucoma medications
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Quick recovery is important for your lifestyle or work
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    You prefer a lower-risk procedure with minimal side effects
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Your target IOP is achievable with moderate pressure reduction
                  </li>
                </ul>
              </div>

              {/* Choose Traditional Surgery */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-4 flex items-center gap-3">
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Consider Traditional Surgery if...
                </h3>
                <ul className="space-y-3 ml-11">
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-dark)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    You have moderate to advanced glaucoma requiring significant IOP reduction
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-dark)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Your IOP remains dangerously high despite maximum medical therapy
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-dark)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Previous MIGS or laser treatments have not achieved adequate control
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-dark)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    You're experiencing progressive vision loss despite treatment
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-dark)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Your target IOP is very low (single digits) to preserve remaining vision
                  </li>
                  <li className="flex items-start gap-3 text-lg text-[var(--color-ink)]">
                    <svg className="w-6 h-6 text-[var(--color-dark)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    You prioritize maximum effectiveness over recovery time
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border-2 border-[var(--color-primary)]">
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Important:</strong> This framework provides general guidance, but your specific situation is unique. The best choice depends on your glaucoma type, severity, overall eye health, lifestyle needs, and treatment goals. A comprehensive evaluation with your glaucoma specialist is essential for making the right decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Can I have MIGS first and traditional surgery later if needed?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                <p>
                  Yes, absolutely. MIGS is often considered a first-line surgical option precisely because it doesn't preclude future traditional surgery if needed. The minimally invasive nature of MIGS preserves the conjunctival tissue and anatomical structures required for trabeculectomy or tube shunt procedures. Many glaucoma specialists advocate a stepwise approach: starting with MIGS for appropriate candidates and escalating to more invasive surgery only if disease progression continues. This strategy maximizes your treatment options while minimizing risk.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                How long do the results of each surgery typically last?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                <p>
                  MIGS durability varies by procedure type, with most studies showing sustained IOP reduction for 3-5 years in the majority of patients. Some procedures like iStent have data showing benefit beyond 5 years. Traditional surgery generally provides longer-lasting results, with trabeculectomy maintaining IOP control for 5-10+ years in many patients, though some require additional interventions. Tube shunts show similarly durable results. It's important to understand that glaucoma is a lifelong condition—no surgery is permanently curative, and all patients require ongoing monitoring regardless of which procedure they undergo.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                Will I still need glaucoma eye drops after surgery?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                <p>
                  This depends on the procedure and your individual response. With MIGS, many patients significantly reduce their medication burden, with studies showing 50-75% of patients eliminating at least one medication. However, most MIGS patients continue some drops, as these procedures provide moderate rather than dramatic pressure reduction. Traditional surgery has higher rates of medication independence, with 40-60% of trabeculectomy patients medication-free at 5 years. Even if you require drops post-surgery, using fewer medications with better pressure control is a significant improvement that reduces side effects and improves quality of life.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                What are the most serious risks I should know about for each option?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                <p>
                  For MIGS, serious complications are rare (under 1%) and include bleeding inside the eye (hyphema), IOP spikes, or device malposition. Vision-threatening complications are extremely uncommon. Traditional surgery carries higher risks including infection (endophthalmitis, 0.5-1%), excessive pressure lowering (hypotony, 5-20% initially), bleeding, and bleb-related problems that can require additional procedures. Cataract formation is common after trabeculectomy if you haven't already had cataract surgery. While these risks sound concerning, it's crucial to remember that uncontrolled glaucoma leads to irreversible blindness—for advanced disease, the risk of not having surgery far exceeds the surgical risks.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-sm overflow-hidden group">
              <summary className="p-6 cursor-pointer font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                How do I choose between different types of MIGS procedures?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-ink)] leading-relaxed">
                <p>
                  There are several FDA-approved MIGS procedures, each with slightly different mechanisms and profiles. Ab-interno procedures (iStent, Hydrus) work within Schlemm's canal to improve natural drainage and are typically combined with cataract surgery. Angle-based procedures (Kahook Dual Blade, gonioscopy-assisted transluminal trabeculotomy) remove trabecular meshwork tissue. Suprachoroidal shunts (CyPass, iStent Supra) create alternate drainage routes. Your surgeon will recommend specific procedures based on your anatomy, glaucoma severity, whether you need cataract surgery, and their expertise. All MIGS options share similar safety profiles and recovery timelines, with effectiveness differences being relatively modest.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive glaucoma evaluation to determine which surgical approach is right for your unique situation. Our specialists will help you make an informed decision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-all hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation
          </a>
          <p className="text-white/80 mt-6">
            Or call us at <a href="tel:8175551234" className="underline hover:text-white">(817) 555-1234</a>
          </p>
        </div>
      </section>
    </main>
  )
}