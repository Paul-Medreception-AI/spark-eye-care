import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laser Eye Surgery | Spark Eye Care',
  description: 'Advanced laser eye surgery services in your area. LASIK, PRK, and vision correction procedures to reduce dependence on glasses and contacts.',
}

export default function LaserEyeSurgeryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Laser Eye Surgery</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Laser Eye Surgery at Spark Eye Care
          </h1>
          <p className="text-xl opacity-95 max-w-3xl leading-relaxed">
            Experience freedom from glasses and contact lenses with our advanced laser vision correction procedures. Our experienced surgeons use state-of-the-art technology to safely reshape your cornea, providing clearer vision and improved quality of life for patients with nearsightedness, farsightedness, and astigmatism.
          </p>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)]">
            What is Laser Eye Surgery?
          </h2>
          
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6">
            <p className="leading-relaxed">
              Laser eye surgery, also known as refractive surgery, is a revolutionary medical procedure that uses precision laser technology to reshape the cornea—the clear front surface of your eye—to correct common vision problems. By adjusting how light rays are focused onto the retina, laser eye surgery can dramatically reduce or eliminate the need for corrective eyewear. The most popular procedures include LASIK (Laser-Assisted In Situ Keratomileusis), PRK (Photorefractive Keratectomy), and SMILE (Small Incision Lenticule Extraction), each offering unique benefits depending on your individual eye characteristics and lifestyle needs.
            </p>
            
            <p className="leading-relaxed">
              These procedures work by using an excimer laser to remove microscopic amounts of corneal tissue with extraordinary precision—down to fractions of a micron. For nearsighted patients, the laser flattens the cornea to reduce its focusing power; for farsighted patients, it steepens the cornea to increase focusing ability; and for astigmatism, it smooths out irregular corneal curvature. The entire laser treatment typically takes less than a minute per eye, though the complete procedure including preparation takes about 15-30 minutes. Modern laser systems incorporate advanced wavefront technology and eye-tracking mechanisms that ensure unprecedented accuracy and safety.
            </p>
            
            <p className="leading-relaxed">
              Laser eye surgery has benefited millions of people worldwide since its FDA approval in the 1990s, with continuous technological improvements enhancing both safety and outcomes. Clinical studies demonstrate that over 96% of patients achieve 20/20 vision or better following LASIK surgery, with satisfaction rates consistently exceeding 95%. The procedure has an excellent safety profile, with serious complications being extremely rare when performed by experienced surgeons using modern equipment. Most patients experience rapid visual recovery, often noticing improved vision within hours of surgery and returning to normal activities within a few days.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-['Cormorant'] text-2xl font-light mb-6 text-[var(--color-ink)]">
              You May Be a Candidate for Laser Eye Surgery If You Have:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Stable vision prescription for at least one year with no significant changes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Nearsightedness (myopia), farsightedness (hyperopia), or astigmatism within treatable ranges</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Dependence on glasses or contact lenses that interferes with your lifestyle or work</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Healthy eyes free from conditions like severe dry eye, glaucoma, or cataracts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Age 18 or older with realistic expectations about surgical outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Sufficient corneal thickness to safely perform the procedure</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-16 text-center text-[var(--color-ink)] animate-fade-up">
            Our Approach to Laser Eye Surgery
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant'] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with an extensive pre-operative evaluation including corneal topography, wavefront analysis, pupil measurement, and tear film assessment. We measure your corneal thickness, map its curvature, and evaluate overall eye health to determine the safest and most effective procedure for your unique anatomy.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.233 0 4.465l-1.7 1.7a2.25 2.25 0 01-3.182 0l-1.595-1.595m8.475-5.972L15 9.75M12 18l-3 3" />
                </svg>
              </div>
              <h3 className="font-['Cormorant'] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Customized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your diagnostic results, lifestyle needs, and vision goals, we recommend the optimal procedure—whether LASIK for fast recovery, PRK for thin corneas, or advanced wavefront-guided treatments for superior night vision. We explain every detail, answer all questions, and ensure you feel confident before proceeding.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-['Cormorant'] text-2xl font-light mb-4 text-[var(--color-ink)]">
                Expert Care & Follow-up
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our experienced surgeons perform your procedure in a comfortable, state-of-the-art surgical suite with real-time eye tracking and safety protocols. Post-operative care includes same-day, next-day, one-week, one-month, and three-month follow-ups to monitor healing and ensure optimal visual outcomes for years to come.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-[var(--color-light)] rounded-xl p-10 animate-fade-up">
            <h3 className="font-['Cormorant'] text-3xl font-light mb-6 text-[var(--color-ink)]">
              Advanced Laser Technologies We Use
            </h3>
            <div className="space-y-6 text-[var(--color-ink)]">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-dark)]">Wavefront-Guided LASIK</h4>
                <p className="leading-relaxed text-[var(--color-muted)]">
                  Custom treatment based on your eye's unique optical fingerprint, addressing subtle irregularities beyond simple prescription errors. This technology measures 25 times more precisely than standard methods, resulting in sharper vision quality, especially in low-light conditions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-dark)]">Bladeless Femtosecond Laser</h4>
                <p className="leading-relaxed text-[var(--color-muted)]">
                  All-laser LASIK using femtosecond laser technology to create the corneal flap without blades, offering enhanced precision, faster healing, and reduced risk of complications. The computer-controlled laser creates a flap of exact dimensions tailored to your eye.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-dark)]">Advanced Surface Ablation (PRK/LASEK)</h4>
                <p className="leading-relaxed text-[var(--color-muted)]">
                  Ideal for patients with thinner corneas, high prescriptions, or active lifestyles. No flap is created; instead, the laser reshapes the corneal surface directly. While recovery takes slightly longer, this approach may be safer for certain occupations and contact sports.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-[var(--color-dark)]">Topography-Guided Treatments</h4>
                <p className="leading-relaxed text-[var(--color-muted)]">
                  Uses detailed corneal mapping to address irregular astigmatism and corneal surface irregularities that conventional treatments cannot correct. Particularly beneficial for patients with prior eye injuries, corneal scars, or irregular astigmatism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-['Cormorant'] text-4xl font-light mb-10 text-[var(--color-ink)] text-center">
              What to Expect: Your Laser Eye Surgery Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-['Cormorant'] text-2xl font-light mb-3 text-[var(--color-ink)]">
                  Consultation & Pre-Operative Phase
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  Comprehensive eye examination with advanced diagnostics (1-2 hours). Stop wearing contact lenses for 3-14 days before surgery depending on type. Review medications and receive detailed pre-operative instructions.
                </p>
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  Timeline: 1-2 weeks before surgery
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-['Cormorant'] text-2xl font-light mb-3 text-[var(--color-ink)]">
                  Surgery Day
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  Procedure takes 15-30 minutes for both eyes. Numbing drops eliminate pain; you may feel slight pressure. Many patients notice improved vision immediately. Arrange transportation home as you cannot drive. Rest with eyes closed for several hours.
                </p>
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  Timeline: Day 0
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-['Cormorant'] text-2xl font-light mb-3 text-[var(--color-ink)]">
                  First Week Recovery
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  Follow-up visit within 24-48 hours. Vision typically clears rapidly for LASIK patients. Use prescribed eye drops to prevent infection and inflammation. Avoid rubbing eyes, swimming, and eye makeup. Most patients return to work within 2-3 days.
                </p>
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  Timeline: Days 1-7
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-['Cormorant'] text-2xl font-light mb-3 text-[var(--color-ink)]">
                  First Three Months
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  Vision continues stabilizing and improving. Follow-up visits at 1 week, 1 month, and 3 months. Minor fluctuations in vision and dry eye symptoms are normal and gradually resolve. Most patients achieve final visual acuity by 3 months.
                </p>
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  Timeline: Weeks 2-12
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-['Cormorant'] text-2xl font-light mb-3 text-[var(--color-ink)]">
                  Long-Term Results
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  Vision stabilizes completely. Annual eye exams recommended to monitor long-term eye health. Most patients maintain excellent vision for many years. Age-related changes like presbyopia (reading vision) may still occur naturally after age 40, but distance vision remains corrected.
                </p>
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  Timeline: 3+ months and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]">
            Common Questions About Laser Eye Surgery
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>Does laser eye surgery hurt?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  The procedure itself is virtually painless. We use numbing eye drops that completely eliminate sensation during surgery. You may feel slight pressure when the corneal flap is created or during laser application, but no sharp pain. After surgery, some patients experience mild discomfort, grittiness, or light sensitivity for a few hours to a day, easily managed with over-the-counter pain relievers and lubricating drops. Most patients describe the discomfort as similar to having an eyelash in your eye—annoying but tolerable and temporary.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>How long does laser eye surgery recovery take?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Recovery timelines vary by procedure type. LASIK patients typically experience rapid visual recovery—many see clearly enough to drive the next day and return to work within 2-3 days. PRK recovery is longer, with usable vision returning within 3-5 days and optimal vision by 1-2 weeks. Complete healing and vision stabilization occurs over 3-6 months for both procedures. During recovery, you'll use prescribed eye drops, avoid rubbing your eyes, and attend follow-up appointments. Most restrictions on activities like exercise and swimming are lifted within 1-2 weeks.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>What are the risks and side effects of laser eye surgery?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Laser eye surgery is one of the safest elective procedures available, with serious complications occurring in less than 1% of cases. Common temporary side effects include dry eyes (affecting 30-40% initially, resolving in most patients), light sensitivity, glare, and halos around lights at night (usually diminishing over weeks to months). Rare complications include infection, flap complications (LASIK), over- or under-correction requiring enhancement, and irregular healing. Modern technology, thorough pre-operative screening, and experienced surgeons minimize these risks significantly. We conduct extensive testing to identify patients who may not be good candidates.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>How long do laser eye surgery results last?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  For most patients, laser eye surgery results are permanent. The corneal reshaping does not reverse over time. However, your eyes can still experience age-related changes. Presbyopia (difficulty focusing up close) naturally occurs after age 40, affecting everyone regardless of previous surgery. Some patients experience minor prescription regression years later, particularly those with higher initial prescriptions. Studies show that over 90% of patients maintain 20/40 vision or better (legal driving vision) 10 years after surgery. If needed, enhancement procedures can address minor changes. Annual eye exams help monitor long-term eye health and catch any changes early.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>How much does laser eye surgery cost?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Laser eye surgery costs vary based on the technology used, surgeon experience, and your specific prescription. On average, LASIK ranges from $2,000 to $3,000 per eye, while advanced wavefront-guided or custom treatments may cost more. PRK typically costs slightly less. While insurance rarely covers elective refractive surgery, many practices offer financing plans with monthly payments as low as $100-200. Consider the long-term savings—most patients spend $500-800 annually on glasses and contacts, meaning the surgery often pays for itself within 3-5 years. We provide transparent pricing during your consultation and discuss all available payment options.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl font-light mb-10 text-center text-[var(--color-ink)]">
            Related Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/cataract-surgery" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant'] text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Cataract Surgery
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Advanced cataract removal with premium lens implants to restore clear vision and reduce dependence on glasses.
              </p>
            </a>

            <a href="/services/comprehensive-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h4 className="font-['Cormorant'] text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Thorough eye health evaluations to detect vision problems, eye diseases, and overall health conditions.
              </p>
            </a>

            <a href="/services/dry-eye-treatment" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant'] text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Dry Eye Treatment
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Advanced therapies to relieve chronic dry eye symptoms and restore comfortable, healthy tear production.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-6">
            Ready to Experience Life Without Glasses?
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Schedule your comprehensive laser eye surgery consultation today and discover if you're a candidate for life-changing vision correction.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-all hover:scale-105 shadow-lg"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}