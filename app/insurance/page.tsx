import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Insurance & Billing | Spark Eye Care',
  description: 'Transparent pricing and billing information for eye care services at Spark Eye Care in Kyle, Texas.',
}

export default function InsurancePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
          <h1 className="font-cormorant text-5xl font-light mb-6">Insurance & Billing</h1>
          <p className="text-xl text-white/90">Transparent pricing and billing information</p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/shutterstock_2018571389.jpg"
                alt="Comfortable patient at home"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">Accepted Insurance Plans</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up">Aetna</div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up">BlueCross BlueShield</div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up">Cigna</div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up">United Healthcare</div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up">Humana</div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up">Medicare</div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up">Medicaid</div>
            <div className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up">Tricare</div>
          </div>
          <p className="text-center text-[var(--color-muted)] mt-8">Don't see your insurance provider listed? Contact our office to verify coverage for your specific plan.</p>
        </div>
      </section>

      {/* Billing Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">How Billing Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Verify Coverage</h3>
              <p className="text-[var(--color-muted)]">We verify your insurance benefits before your appointment to confirm coverage and estimate your out-of-pocket costs.</p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Service Provided</h3>
              <p className="text-[var(--color-muted)]">You receive exceptional eye care from Dr. Plummer and our team. Any applicable co-pays are collected at the time of service.</p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Claim Submitted</h3>
              <p className="text-[var(--color-muted)]">Our billing team submits claims to your insurance company on your behalf, handling all the paperwork and follow-up communications.</p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">You Pay Remainder</h3>
              <p className="text-[var(--color-muted)]">After your insurance processes the claim, we send you a statement for any remaining balance such as deductibles or coinsurance amounts.</p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Understanding Your Costs</h4>
              <div className="space-y-4 text-[var(--color-muted)]">
                <p><strong className="text-[var(--color-ink)]">Co-pay:</strong> A fixed amount you pay at each visit, typically ranging from $10 to $50 depending on your plan.</p>
                <p><strong className="text-[var(--color-ink)]">Deductible:</strong> The amount you must pay out-of-pocket before your insurance begins covering services. Deductibles reset annually.</p>
                <p><strong className="text-[var(--color-ink)]">Coinsurance:</strong> Your share of costs after meeting your deductible, usually expressed as a percentage (e.g., you pay 20%, insurance pays 80%).</p>
                <p><strong className="text-[var(--color-ink)]">Explanation of Benefits (EOB):</strong> A statement from your insurance explaining what was covered and what you owe. This is not a bill.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Options */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">Self-Pay Options</h3>
            <div className="space-y-6 text-[var(--color-muted)]">
              <p>We believe everyone deserves access to exceptional eye care. For patients without insurance coverage or those choosing to pay out-of-pocket, we offer several options:</p>
              
              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Flexible Payment Plans</h4>
                <p>We work with patients to establish manageable payment arrangements that fit your budget. Our team will discuss payment plan options during your visit.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Transparent Pricing</h4>
                <p>Before any procedure or treatment, we provide clear cost estimates so you understand exactly what to expect. We believe in no surprises when it comes to your healthcare costs.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-ink)] mb-2">Good Faith Estimates</h4>
                <p>Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges for scheduled services. Request your estimate when booking your appointment.</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-[var(--color-border)] mt-8">
                <p className="text-sm"><strong className="text-[var(--color-ink)]">Your Rights Under the No Surprises Act:</strong> You have protection against surprise medical bills. If you receive care from an out-of-network provider, the most they can bill you is the in-network cost-sharing amount. For questions about your rights, visit <span className="text-[var(--color-primary)]">cms.gov/nosurprises</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">Billing Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 border border-[var(--color-border)] animate-fade-up group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Do you accept my insurance?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] mt-4">We accept most major insurance plans including Medicare, Medicaid, and commercial insurers. Call our office at your earliest convenience to verify whether we accept your specific plan and are in-network providers.</p>
            </details>

            <details className="bg-white rounded-xl p-6 border border-[var(--color-border)] animate-fade-up group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                When is payment due?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] mt-4">Co-pays are due at the time of service. For any remaining balance after insurance processing, payment is due within 30 days of receiving your statement. We accept cash, checks, and all major credit cards.</p>
            </details>

            <details className="bg-white rounded-xl p-6 border border-[var(--color-border)] animate-fade-up group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                What if my insurance denies coverage?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] mt-4">If your insurance denies a claim, our billing team will work with you and your insurance company to understand why and explore appeal options. We'll communicate clearly about any patient responsibility and discuss payment arrangements if needed.</p>
            </details>

            <details className="bg-white rounded-xl p-6 border border-[var(--color-border)] animate-fade-up group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Are surgical procedures covered by insurance?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] mt-4">Medically necessary procedures like cataract surgery and glaucoma treatment are typically covered by insurance, subject to your deductible and coinsurance. Premium lens options for cataract surgery may have additional out-of-pocket costs. We'll provide a detailed cost breakdown during your consultation.</p>
            </details>

            <details className="bg-white rounded-xl p-6 border border-[var(--color-border)] animate-fade-up group">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can I get a cost estimate before my procedure?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-muted)] mt-4">Absolutely. We provide detailed cost estimates for all procedures once we verify your insurance benefits. For self-pay patients, we offer Good Faith Estimates as required by law. Contact our billing department to request an estimate for any scheduled service.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-white mb-6">Questions About Your Coverage?</h2>
          <p className="text-xl text-white/90 mb-8">Our billing team is here to help you understand your insurance benefits and payment options.</p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-colors">
            Contact Our Billing Team
          </Link>
        </div>
      </section>
    </main>
  )
}