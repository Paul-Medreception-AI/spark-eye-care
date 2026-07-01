import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glaucoma Medications: Types, Side Effects, and What to Expect | Spark Eye Care',
  description: 'Learn about glaucoma medication types, how they work, potential side effects, and what to expect during treatment. Expert guidance from Spark Eye Care.',
  keywords: 'glaucoma medications, eye drops for glaucoma, glaucoma treatment, prostaglandin analogs, beta blockers, glaucoma side effects',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Glaucoma Medications: Types, Side Effects, and What to Expect
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published May 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When you're diagnosed with glaucoma, the news can feel overwhelming. This chronic eye condition, which gradually damages the optic nerve, is one of the leading causes of irreversible blindness worldwide. But here's the encouraging truth: with proper treatment—most commonly medication—many people with glaucoma maintain their vision for life. Understanding your medication options, how they work, and what to expect can transform anxiety into empowerment as you take control of your eye health.
            </p>
            <p className="mb-6">
              Glaucoma medications primarily work by lowering intraocular pressure (IOP), the main risk factor for optic nerve damage. While the prospect of daily eye drops or oral medications might seem daunting, these treatments are highly effective when used consistently. Let's explore the different types of glaucoma medications, their mechanisms, potential side effects, and practical tips for successful treatment.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding How Glaucoma Medications Work
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Your eye continuously produces a clear fluid called aqueous humor, which nourishes the eye and maintains its shape. This fluid normally drains through tiny channels in the drainage angle. When this drainage system becomes less efficient—or when the eye produces too much fluid—pressure builds up inside the eye, potentially damaging the optic nerve.
            </p>
            <p className="mb-6">
              Glaucoma medications address this problem through two primary mechanisms: they either decrease the production of aqueous humor or increase its outflow from the eye. Some newer medications work through both pathways. The goal is to lower your eye pressure to a "target pressure" that your ophthalmologist determines is safe for your specific situation, helping to prevent further vision loss.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Prostaglandin Analogs: The First-Line Treatment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Prostaglandin analogs are typically the first medication prescribed for glaucoma, and for good reason. They're highly effective at lowering eye pressure—often by 25-35%—and require only once-daily dosing, usually in the evening. These medications work by increasing the outflow of fluid through an alternative drainage pathway called the uveoscleral route.
            </p>
            <p className="mb-6">
              Common prostaglandin analogs include latanoprost (Xalatan), travoprost (Travatan), bimatoprost (Lumigan), and tafluprost (Zioptan). While extremely effective, they do have some distinctive side effects you should know about:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Darker, longer eyelashes:</strong> Many patients actually appreciate this cosmetic effect</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Darkening of the iris:</strong> In some patients, especially those with hazel or green eyes, the colored part of the eye may gradually become browner</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Mild eye redness:</strong> This typically subsides after the first few weeks</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Darkening of eyelid skin:</strong> Usually reversible if the medication is discontinued</span>
              </li>
            </ul>
            <p className="mb-6">
              Most of these side effects are cosmetic rather than harmful, and many patients find the trade-off worthwhile for effective pressure control with convenient once-daily dosing.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Beta Blockers and Other Medication Classes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When prostaglandin analogs alone don't achieve adequate pressure control, or if they're not suitable for a particular patient, other medication classes come into play. <strong>Beta blockers</strong> like timolol (Timoptic) work by decreasing fluid production in the eye. They're effective and have been used for decades, but they're not appropriate for everyone, particularly those with asthma, certain heart conditions, or low blood pressure.
            </p>
            <p className="mb-6">
              <strong>Alpha agonists</strong> such as brimonidine (Alphagan) work through a dual mechanism: they decrease fluid production and increase outflow. Some patients experience drowsiness or dry mouth with these medications, and they should be used cautiously in young children due to potential central nervous system effects.
            </p>
            <p className="mb-6">
              <strong>Carbonic anhydrase inhibitors</strong> are available both as eye drops (dorzolamide, brinzolamide) and oral tablets (acetazolamide). The topical versions may cause a bitter taste in the mouth and stinging upon instillation. The oral form is typically reserved for more serious situations as it can cause more systemic side effects including tingling in the fingers and toes, increased urination, and rarely, kidney stones.
            </p>
            <p className="mb-6">
              <strong>Rho kinase inhibitors</strong> like netarsudil (Rhopressa) represent one of the newer medication classes. They work by increasing fluid outflow and may cause small conjunctival hemorrhages (broken blood vessels on the white of the eye) that look alarming but are harmless and resolve on their own.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The most effective glaucoma medication is the one you actually use consistently. Don't hesitate to discuss side effects with your doctor—there are often alternatives that work better for your specific situation."
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Combination Medications: Simplifying Your Routine
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many patients require more than one medication to adequately control their eye pressure. Rather than using multiple separate bottles, combination medications merge two drugs into a single eye drop. This not only simplifies your routine but also reduces exposure to preservatives found in many eye drops.
            </p>
            <p className="mb-6">
              Common combinations include prostaglandin analogs paired with beta blockers, carbonic anhydrase inhibitors with beta blockers, or the newer combination of netarsudil with latanoprost (Rocklatan). If you're using multiple medications, ask your ophthalmologist whether a combination product might be appropriate for you.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Managing Side Effects and Maximizing Effectiveness
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While side effects can be frustrating, several strategies can help minimize discomfort and maximize your medication's effectiveness:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Master the technique:</strong> Tilt your head back, pull down your lower lid to create a pocket, look up, and apply one drop. Gently close your eyes and press on the inner corner (near your nose) for 1-2 minutes to prevent the medication from draining into your tear duct and being absorbed systemically</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Wait between drops:</strong> If using multiple medications, wait at least 5 minutes between different eye drops to prevent the first drop from being washed away</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Use preservative-free options:</strong> If you experience significant irritation, ask about preservative-free formulations, which come in single-use vials</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Set reminders:</strong> Use your phone alarm or link drop application to a daily routine like brushing your teeth</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Refrigerate when appropriate:</strong> Some medications work better when cold, and the cool sensation can make it easier to tell when the drop actually enters your eye</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Communicate openly:</strong> Tell your doctor about any side effects, even minor ones. There are often alternatives that may work better for you</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Expect: The Long-Term Perspective
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Glaucoma is a chronic condition that requires lifelong management, but that doesn't mean your treatment will remain unchanged. Your ophthalmologist will monitor your eye pressure, optic nerve health, and visual field regularly—typically every 3-6 months initially, then less frequently once well-controlled.
            </p>
            <p className="mb-6">
              It's important to understand that glaucoma medications prevent further vision loss but cannot restore vision already lost. This is why adherence to your medication regimen is so critical—every day you miss your drops is a day your optic nerve may be experiencing damage.
            </p>
            <p className="mb-6">
              Some patients eventually require adjustments to their medication regimen. Your doctor might add medications, switch to different classes, or eventually recommend laser treatment or surgery if medications alone prove insufficient. This is a normal part of disease management and doesn't mean you've failed—glaucoma can be progressive, and treatment strategies naturally evolve.
            </p>
            <p className="mb-6">
              The cost of medications can also be a concern. If you're struggling with prescription costs, discuss this openly with your doctor. Generic versions are available for many glaucoma medications, patient assistance programs exist, and sometimes a different medication class might be more affordable while remaining effective.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Living with glaucoma requires commitment, but modern medications make it entirely possible to preserve your vision for life. By understanding your medication options, properly administering your drops, managing side effects, and maintaining regular follow-up with your ophthalmologist, you're taking the most important steps to protect your sight.
            </p>
            <p className="mb-6">
              Remember, you're not alone in this journey. Your eye care team at Spark Eye Care is here to answer questions, address concerns, and adjust your treatment as needed. If you're experiencing side effects, having trouble affording your medications, or simply feeling overwhelmed, please reach out. Together, we can find the right treatment approach that works for your unique situation and lifestyle.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-[var(--color-ink)] mb-1">
                Written by the Spark Eye Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in comprehensive eye care and glaucoma management
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Glaucoma: The Silent Thief of Sight
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about the different types of glaucoma, risk factors, and why early detection is crucial for preserving your vision.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Treatment Options</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Laser Treatment for Glaucoma: What You Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore how laser procedures like SLT and LPI can help manage glaucoma, often reducing the need for medications.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Prevention</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Your Complete Guide to Comprehensive Eye Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Regular eye exams are essential for detecting glaucoma early. Learn what to expect and how often you should be screened.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}