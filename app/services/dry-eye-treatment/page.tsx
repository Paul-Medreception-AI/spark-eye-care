import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dry Eye Treatment in Texas | Spark Eye Care',
  description: 'Expert dry eye treatment at Spark Eye Care. Comprehensive evaluation and personalized treatment plans for chronic dry eye syndrome, meibomian gland dysfunction, and ocular surface disease.',
}

export default function DryEyeTreatmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span className="mx-2">›</span>
            <span>Dry Eye Treatment</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Dry Eye Treatment in Texas
          </h1>
          <p className="text-xl opacity-95 leading-relaxed max-w-3xl">
            Spark Eye Care offers comprehensive dry eye evaluation and advanced treatment options for patients suffering from chronic dry eye syndrome, meibomian gland dysfunction, and ocular surface disease. Our evidence-based approach combines cutting-edge diagnostic technology with personalized treatment protocols to restore comfort and protect your long-term eye health.
          </p>
        </div>
      </section>

      {/* What Is Dry Eye Treatment */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            What is Dry Eye Treatment?
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6">
            <p>
              Dry eye disease is a chronic, multifactorial condition affecting the tear film and ocular surface, leading to symptoms of discomfort, visual disturbance, and tear film instability. It occurs when your eyes don't produce enough tears, when tears evaporate too quickly, or when the quality of your tears is poor. This condition affects millions of Americans and can significantly impact quality of life, making everyday activities like reading, computer work, and driving uncomfortable or difficult.
            </p>
            <p>
              At Spark Eye Care, dry eye treatment begins with a comprehensive diagnostic evaluation to identify the underlying causes of your symptoms. We utilize advanced diagnostic technology including meibography, tear osmolarity testing, and ocular surface staining to assess the health of your tear film and meibomian glands. This thorough assessment allows us to differentiate between evaporative dry eye, aqueous-deficient dry eye, and mixed-mechanism disease, which is critical for developing an effective treatment strategy.
            </p>
            <p>
              Our treatment philosophy recognizes that dry eye is not a one-size-fits-all condition. The disease has multiple subtypes and contributing factors including meibomian gland dysfunction, blepharitis, ocular rosacea, autoimmune conditions like Sjögren's syndrome, environmental factors, and medication side effects. By identifying your specific dry eye profile, we can create a targeted treatment plan that addresses the root causes rather than simply masking symptoms. This personalized approach leads to better long-term outcomes and improved ocular comfort.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              Common Signs You May Benefit from Dry Eye Treatment
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Persistent burning, stinging, or gritty sensation in the eyes',
                'Excessive tearing or watery eyes (reflex tearing)',
                'Redness and inflammation of the eyelids or eye surface',
                'Blurred vision that improves with blinking',
                'Eye fatigue, especially during reading or screen time',
                'Difficulty wearing contact lenses comfortably',
                'Sensitivity to light, wind, or air conditioning',
                'Stringy mucus in or around the eyes',
              ].map((symptom, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)]">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Treat It */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-16 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Our Approach to Dry Eye Treatment
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Initial Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Comprehensive dry eye evaluation including meibography, tear film analysis, osmolarity testing, and ocular surface examination to identify your specific dry eye subtype and contributing factors.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Personalized Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Customized treatment protocol combining in-office procedures, prescription medications, at-home therapies, and lifestyle modifications tailored to your specific condition and needs.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
                Ongoing Support
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Regular follow-up visits to monitor progress, adjust treatments as needed, and provide long-term management strategies to maintain ocular surface health and comfort.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              Treatment Modalities We Offer
            </h3>
            <div className="space-y-6 text-[var(--color-ink)]">
              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">Prescription Medications</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Anti-inflammatory eye drops (cyclosporine, lifitegrast), topical steroids for acute flares, antibiotic ointments for blepharitis, and oral medications for meibomian gland dysfunction and ocular rosacea.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">In-Office Procedures</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Intense pulsed light (IPL) therapy for meibomian gland dysfunction, thermal pulsation treatments, meibomian gland expression, punctal plugs to preserve natural tears, and BlephEx lid margin debridement.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">At-Home Therapies</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Warm compress therapy with specialized masks, lid hygiene protocols, omega-3 fatty acid supplementation, preservative-free artificial tears, and environmental modification strategies.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">Advanced Options</h4>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Autologous serum tears for severe cases, scleral contact lenses for ocular surface protection, amniotic membrane therapy, and specialized treatments for underlying systemic conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="text-4xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
              What to Expect from Treatment
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">First Visit (90 minutes)</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Comprehensive evaluation including detailed symptom assessment, tear film analysis, meibomian gland imaging, and ocular surface examination. We'll discuss your findings and initiate your personalized treatment plan with specific recommendations for medications, therapies, and lifestyle modifications.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Weeks 2-4</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Initial response period where you'll begin to notice improvements in comfort and symptom frequency. Some treatments like anti-inflammatory drops require several weeks to reach full effectiveness. We'll check in to ensure treatments are well-tolerated and address any questions about your at-home care routine.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Months 1-3</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Follow-up visits to assess treatment response and optimize your protocol. We may add or adjust treatments based on your progress. Many patients experience significant improvement during this period, with reduced symptoms and improved tear film stability. In-office procedures like IPL or thermal pulsation are often performed during this phase.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Dry eye is a chronic condition requiring ongoing management. Once we achieve symptom control, we'll establish a maintenance plan with periodic follow-ups to monitor your ocular surface health. Most patients continue with a simplified regimen of preventive therapies and return for check-ups every 3-6 months to maintain their results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Common Questions About Dry Eye Treatment
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between">
                How long does it take to see improvement in dry eye symptoms?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The timeline for improvement varies depending on the severity and type of dry eye disease. Some patients notice relief within 1-2 weeks with artificial tears and lid hygiene, while others with more severe disease may require 6-12 weeks of anti-inflammatory therapy before experiencing significant improvement. In-office procedures like IPL therapy often provide noticeable benefits within 2-4 weeks. It's important to understand that dry eye is a chronic condition, and while we can achieve excellent symptom control, ongoing management is typically necessary to maintain results.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between">
                Will my insurance cover dry eye treatment?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans cover the diagnostic evaluation and medical treatment of dry eye disease, including office visits, diagnostic testing, and prescription medications. However, some advanced treatments like IPL therapy, certain in-office procedures, and nutritional supplements may not be covered and would be out-of-pocket expenses. We'll provide a clear breakdown of covered and non-covered services during your consultation and work with you to develop a treatment plan that fits your budget while addressing your needs.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between">
                Can dry eye be cured, or is it a lifelong condition?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Dry eye disease is typically a chronic condition rather than one that can be permanently cured, particularly when caused by age-related changes, autoimmune conditions, or chronic meibomian gland dysfunction. However, this doesn't mean you'll always have symptoms. With proper treatment and management, most patients achieve excellent symptom control and can maintain comfortable, healthy eyes. Some situational dry eye caused by environmental factors or temporary medication use may resolve completely once the triggering factor is addressed. Our goal is to get you to a point where dry eye doesn't interfere with your daily life.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between">
                What's the difference between dry eye and allergies?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                While both conditions can cause red, irritated eyes, they have different underlying causes and treatments. Allergic conjunctivitis is triggered by allergens and typically causes intense itching, watery discharge, and swollen eyelids, with symptoms that may be seasonal or year-round. Dry eye results from tear film instability and causes burning, grittiness, and fluctuating vision, with symptoms often worse later in the day or during visually demanding tasks. It's possible to have both conditions simultaneously. During your evaluation, we'll carefully assess your symptoms, examine your eyes, and may perform specific tests to differentiate between these conditions and ensure you receive appropriate treatment.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between">
                Are there lifestyle changes that can help my dry eye symptoms?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Absolutely. Lifestyle modifications are a crucial component of dry eye management. Key strategies include: taking regular breaks during computer work (20-20-20 rule), positioning screens below eye level to reduce lid aperture, using a humidifier in dry environments, avoiding direct air flow from fans or vents, staying well-hydrated, consuming omega-3 rich foods or supplements, limiting screen time before bed, removing eye makeup thoroughly each night, and avoiding cigarette smoke. We'll provide personalized recommendations based on your specific triggers and lifestyle. Many patients find that combining these modifications with medical treatments provides the best long-term results.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 animate-fade-up">
          <h3 className="text-3xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/comprehensive-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Complete eye health evaluations including vision testing, disease screening, and ocular surface assessment.
              </p>
            </Link>

            <Link href="/services/contact-lens-fittings" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Contact Lens Fittings
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Expert contact lens fittings including specialty lenses for dry eye, irregular corneas, and scleral lenses.
              </p>
            </Link>

            <Link href="/services/glaucoma-management" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                Glaucoma Management
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Advanced glaucoma screening, monitoring, and treatment to preserve vision and prevent disease progression.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Find Relief from Dry Eye?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Schedule a comprehensive dry eye evaluation and start your journey to comfortable, healthy eyes.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </>
  )
}