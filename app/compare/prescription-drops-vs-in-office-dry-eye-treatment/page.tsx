import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prescription Eye Drops vs In-Office Dry Eye Treatments | Spark Eye Care',
  description: 'Compare prescription eye drops and in-office dry eye treatments. Understand effectiveness, costs, side effects, and which option is right for your chronic dry eye.',
  openGraph: {
    title: 'Prescription Eye Drops vs In-Office Dry Eye Treatments | Spark Eye Care',
    description: 'Expert comparison to help you choose the best dry eye treatment for your needs.',
    url: 'https://sparkeyetx.com/compare/prescription-drops-vs-in-office-dry-eye-treatment',
  },
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline transition-all">Home</a>
            <span className="mx-2">›</span>
            <a href="/resources" className="hover:underline transition-all">Resources</a>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light leading-tight mb-6">
            Prescription Eye Drops vs<br />In-Office Dry Eye Treatments
          </h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            An evidence-based comparison to help you choose the most effective treatment for chronic dry eye disease
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Factor</div>
              <div className="p-6 font-semibold border-l border-white/20">Prescription Eye Drops</div>
              <div className="p-6 font-semibold border-l border-white/20">In-Office Treatments</div>
            </div>

            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Effectiveness</div>
              <div className="p-6 border-l border-[var(--color-border)]">Moderate; reduces inflammation over 3-6 months. Works best for mild to moderate cases.</div>
              <div className="p-6 border-l border-[var(--color-border)]">High; immediate gland function improvement. Effective for moderate to severe cases.</div>
            </div>

            {/* Speed of Results */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Speed of Results</div>
              <div className="p-6 border-l border-[var(--color-border)]">6-12 weeks for noticeable improvement</div>
              <div className="p-6 border-l border-[var(--color-border)]">Same day to 1 week for symptom relief</div>
            </div>

            {/* Side Effects */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Side Effects</div>
              <div className="p-6 border-l border-[var(--color-border)]">Burning, stinging, blurred vision, eye redness, possible infection risk</div>
              <div className="p-6 border-l border-[var(--color-border)]">Minimal; temporary redness or sensitivity lasting hours</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]/30">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">$300-600/month without insurance; ongoing expense</div>
              <div className="p-6 border-l border-[var(--color-border)]">$500-2,000 per treatment; results last 6-12 months</div>
            </div>

            {/* Time Commitment */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Time Commitment</div>
              <div className="p-6 border-l border-[var(--color-border)]">Daily drops (2-4x per day); requires consistency and routine</div>
              <div className="p-6 border-l border-[var(--color-border)]">30-60 minute appointments; 1-3 sessions typically needed</div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">Patients with inflammation-driven dry eye, those preferring at-home management</div>
              <div className="p-6 border-l border-[var(--color-border)]">Meibomian gland dysfunction, severe symptoms, patients wanting faster results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Prescription Eye Drops */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-6 animate-fade-up">
            Prescription Eye Drops: Detailed Analysis
          </h2>
          
          <div className="space-y-6 text-[var(--color-ink)] leading-relaxed animate-fade-up">
            <p>
              Prescription eye drops for dry eye—including Restasis (cyclosporine), Xiidra (lifitegrast), and Cequa—work by reducing inflammation on the surface of the eye and increasing natural tear production. These medications target the underlying immune response that causes chronic dry eye disease, rather than just providing temporary lubrication.
            </p>
            <p>
              Clinical studies show that approximately 15-20% of patients experience significant symptom improvement within 3 months of consistent use, with optimal results appearing after 6 months of twice-daily application. The gradual mechanism means patience is essential—these aren't quick fixes. Many patients discontinue treatment prematurely due to initial burning sensations or lack of immediate relief, never experiencing the full therapeutic benefit.
            </p>
            <p>
              The typical patient profile for prescription drops includes individuals with autoimmune-related dry eye (such as Sjögren's syndrome), those with inflammation-dominant disease, and patients who prefer managing their condition at home without office visits. Insurance coverage varies significantly, with copays ranging from $50 to over $500 monthly depending on the medication and plan. Generic alternatives are becoming available but remain limited.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive: In-Office Treatments */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-6 animate-fade-up">
            In-Office Dry Eye Treatments: Detailed Analysis
          </h2>
          
          <div className="space-y-6 text-[var(--color-ink)] leading-relaxed animate-fade-up">
            <p>
              In-office dry eye treatments encompass several advanced procedures including intense pulsed light (IPL) therapy, thermal pulsation (LipiFlow), meibomian gland expression, and radiofrequency treatments. These procedures directly address meibomian gland dysfunction (MGD)—the leading cause of evaporative dry eye—by clearing blocked oil glands and restoring healthy tear film composition.
            </p>
            <p>
              Clinical evidence demonstrates that 75-85% of patients with MGD experience significant symptom improvement following in-office treatments, with many reporting relief within days. The procedures work mechanically and thermally to liquefy hardened meibum (oil), express blockages, and stimulate gland function. Results typically last 6-12 months, after which maintenance treatments may be recommended. Unlike daily medications, these treatments require minimal ongoing patient compliance.
            </p>
            <p>
              Ideal candidates include patients with visible meibomian gland dysfunction, those experiencing inadequate relief from drops alone, individuals seeking faster results, and patients who struggle with medication adherence. Most in-office treatments are not covered by insurance and are considered elective, though some practices offer financing options. The upfront cost is higher than prescription drops initially, but may be more economical over a 12-24 month period when factoring in cumulative medication expenses.
            </p>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] mb-8 text-center">
              How to Decide Which Treatment Is Right for You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Choose Prescription Drops */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                  Choose Prescription Drops If:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You have mild to moderate inflammation-driven dry eye</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You prefer managing your condition at home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You have good insurance coverage for prescription medications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You can commit to a consistent daily routine for 6+ months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Your symptoms are tolerable while waiting for gradual improvement</span>
                  </li>
                </ul>
              </div>

              {/* Choose In-Office Treatments */}
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  Choose In-Office Treatments If:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You have meibomian gland dysfunction or evaporative dry eye</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Your symptoms are moderate to severe and affecting daily life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You want faster, more dramatic results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You've tried prescription drops without adequate relief</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You struggle with daily medication adherence</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-2 border-[var(--color-primary)]">
              <p className="text-lg text-[var(--color-ink)] text-center">
                <strong className="text-[var(--color-primary)]">Important:</strong> Many patients benefit from a combination approach—using prescription drops for ongoing inflammation control while receiving periodic in-office treatments for gland maintenance. Your eye care provider can design a personalized treatment plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl overflow-hidden shadow-sm transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                Can I use prescription eye drops and get in-office treatments at the same time?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Yes, absolutely. In fact, many patients achieve optimal results with combination therapy. Prescription drops address the inflammatory component of dry eye, while in-office treatments target meibomian gland dysfunction. This dual approach treats both major causes of chronic dry eye simultaneously. Your eye care provider can coordinate timing to ensure the treatments complement rather than interfere with each other.
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-sm transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                How long do results from in-office treatments typically last?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Most patients experience symptom relief lasting 6-12 months following in-office dry eye treatments like IPL therapy or thermal pulsation. The duration depends on the severity of your condition, lifestyle factors (screen time, environment), and adherence to at-home maintenance like warm compresses and lid hygiene. Many patients schedule maintenance treatments annually or bi-annually to sustain results. Your initial response to treatment is often a good predictor of how long benefits will last.
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-sm transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                What if prescription eye drops cause burning or discomfort?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Burning and stinging are common side effects when starting prescription dry eye drops, affecting approximately 15-20% of patients. These symptoms typically diminish after the first 2-4 weeks of use as your eyes adjust. If discomfort persists beyond one month or worsens, contact your eye care provider—you may need to try a different medication. Some patients find that refrigerating drops or using preservative-free artificial tears immediately after application helps minimize irritation. Never discontinue prescription drops without consulting your provider, as stopping prematurely prevents you from experiencing the full therapeutic benefit.
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-sm transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                Are in-office dry eye treatments covered by insurance?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                Most in-office dry eye treatments are not covered by medical insurance and are considered elective or out-of-network services. However, coverage is evolving as more evidence demonstrates the medical necessity of these treatments for chronic dry eye disease. Some insurance plans may cover diagnostic testing that determines whether you're a candidate for these procedures. Many practices offer financing options or package pricing for multiple sessions. It's worth checking with both your eye care provider and insurance company, as policies vary significantly. HSA and FSA funds can typically be used for these treatments.
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-sm transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:text-[var(--color-primary)] transition-colors">
                Which treatment option provides faster relief?
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                In-office treatments provide significantly faster relief than prescription eye drops. Most patients notice improvement within days to one week following procedures like IPL therapy or thermal pulsation, as these treatments immediately clear blocked meibomian glands and improve tear film quality. In contrast, prescription drops work gradually, typically requiring 6-12 weeks of consistent use before patients experience noticeable symptom improvement. If you're seeking rapid relief from moderate to severe dry eye symptoms, in-office treatments are generally the better option. For milder symptoms or long-term inflammation management, prescription drops may be appropriate despite the slower onset.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-6">
            Ready to Find Your Best Treatment Option?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Schedule a comprehensive dry eye evaluation to determine which treatment approach—or combination—is right for your specific condition.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] hover:scale-105 transition-all shadow-lg"
          >
            Discuss Your Options
          </a>
          <p className="mt-6 text-sm opacity-90">
            Most patients see us within 3-5 business days
          </p>
        </div>
      </section>
    </main>
  )
}