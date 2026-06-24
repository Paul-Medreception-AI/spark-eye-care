import Link from 'next/link'

export default function InsurancePage() {
  const insurers = [
    'Aetna',
    'BlueCross BlueShield',
    'Cigna',
    'United Healthcare',
    'Humana',
    'Medicare',
    'Medicaid',
    'VSP Vision Care',
    'EyeMed',
    'Spectera',
    'Anthem',
    'Scott & White Health Plan'
  ]

  const billingSteps = [
    {
      title: 'Verify Coverage',
      description: 'We verify your insurance benefits before your appointment and inform you of expected costs',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Service Provided',
      description: 'You receive your eye care examination, treatment, or surgical procedure',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Claim Submitted',
      description: 'We submit your insurance claim and handle all communication with your insurance company',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      title: 'You Pay Remainder',
      description: 'After insurance processes your claim, you pay any remaining co-pay, deductible, or coinsurance',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      )
    }
  ]

  const faqs = [
    {
      question: 'Do you accept my insurance?',
      answer: 'We accept most major medical insurance plans including Medicare, Medicaid, and major vision insurance carriers. Please call our office at your earliest convenience to verify your specific plan is accepted. Our staff will verify your benefits and explain your coverage before your appointment.'
    },
    {
      question: 'What is my financial responsibility?',
      answer: 'Your responsibility depends on your insurance plan and may include a co-pay due at the time of service, a deductible that must be met before insurance pays, and coinsurance (a percentage of the cost you pay after the deductible). We verify your benefits before your visit and provide an estimate of your costs.'
    },
    {
      question: 'What if I don\'t have insurance?',
      answer: 'We welcome self-pay patients and offer competitive cash pricing for our services. Payment plans are available for larger procedures, and we provide a Good Faith Estimate for all services as required by the No Surprises Act. Please ask our billing team about payment options that work for your budget.'
    },
    {
      question: 'Are premium lens upgrades covered by insurance?',
      answer: 'Insurance typically covers standard cataract surgery with a basic lens implant. Premium lens options that correct astigmatism or reduce dependence on glasses are considered elective upgrades and require out-of-pocket payment. We discuss all lens options and their costs during your cataract consultation.'
    },
    {
      question: 'When do I need to pay?',
      answer: 'Co-pays and any known out-of-pocket costs are due at the time of service. For surgical procedures, we collect estimated patient responsibility before your surgery date. After we receive payment from your insurance, we will bill you for any remaining balance or refund any overpayment.'
    }
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6">
            Insurance & Billing
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Transparent pricing and billing information
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-4">
            Accepted Insurance Plans
          </h2>
          <p className="text-lg text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto">
            We work with most major medical and vision insurance carriers. Call us to verify your specific plan coverage.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {insurers.map((insurer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] animate-fade-up transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {insurer}
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-[var(--color-muted)]">
            Don't see your insurance listed? Contact us to verify acceptance of your specific plan.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-4">
            How Billing Works
          </h2>
          <p className="text-lg text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto">
            We handle insurance billing so you can focus on your vision and recovery
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {billingSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-center mb-6 text-[var(--color-primary)]">
                  {step.icon}
                </div>
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
              Understanding Your Bill
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">1</span>
                </div>
                <h4 className="font-semibold text-xl text-[var(--color-ink)] mb-3">Co-Pay</h4>
                <p className="text-[var(--color-muted)]">
                  A fixed amount you pay at each visit as required by your insurance plan. This is typically due at check-in.
                </p>
              </div>
              <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">2</span>
                </div>
                <h4 className="font-semibold text-xl text-[var(--color-ink)] mb-3">Deductible</h4>
                <p className="text-[var(--color-muted)]">
                  The amount you pay out-of-pocket before your insurance begins to pay. We help you track your deductible status.
                </p>
              </div>
              <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">3</span>
                </div>
                <h4 className="font-semibold text-xl text-[var(--color-ink)] mb-3">EOB</h4>
                <p className="text-[var(--color-muted)]">
                  Your Explanation of Benefits shows what your insurance paid and what you owe. We'll help you understand this document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-4">
                  Self-Pay Options
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                  If you don't have insurance or prefer to pay out-of-pocket, we offer transparent self-pay pricing and flexible payment options to make quality eye care accessible.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 ml-14">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Competitive Cash Pricing</h4>
                  <p className="text-[var(--color-muted)]">We offer fair, transparent pricing for patients paying out-of-pocket</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Payment Plans Available</h4>
                  <p className="text-[var(--color-muted)]">Flexible payment arrangements for surgical procedures and larger treatments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">Good Faith Estimates</h4>
                  <p className="text-[var(--color-muted)]">As required by the No Surprises Act, we provide written cost estimates for all services upon request</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-1">HSA & FSA Accepted</h4>
                  <p className="text-[var(--color-muted)]">Use your Health Savings Account or Flexible Spending Account funds for eligible services</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-[var(--color-primary)]">
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-ink)]">No Surprises Act:</strong> You have the right to receive a Good Faith Estimate explaining how much your medical care will cost. Under the law, health care providers need to give patients who don't have insurance or who are not using insurance an estimate of the bill for medical items and services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-4">
            Billing Questions & Answers
          </h2>
          <p className="text-lg text-[var(--color-muted)] text-center mb-16">
            Common questions about insurance and payment
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-[var(--color-border)] overflow-hidden animate-fade-up transition-all duration-300 hover:shadow-md"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none">
                  <span className="pr-8">{faq.question}</span>
                  <svg
                    className="w-6 h-6 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2 text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-[var(--color-muted)] mb-6">
              Still have questions about insurance or billing? Our team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[var(--color-dark)] hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Our Billing Team
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Contact us today to verify your insurance coverage and schedule your comprehensive eye evaluation with Dr. Plummer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[var(--color-cream)] hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule Your Consultation
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}