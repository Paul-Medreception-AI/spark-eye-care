import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ocular Hypertension Treatment in Kyle | Spark Eye Care',
  description: 'Expert ocular hypertension treatment in Kyle. Board-certified eye care specialists offering comprehensive IOP monitoring, medication management, and preventive glaucoma care.',
  keywords: 'ocular hypertension treatment Kyle, high eye pressure Kyle, glaucoma prevention Kyle, IOP monitoring, eye pressure specialist',
  openGraph: {
    title: 'Ocular Hypertension Treatment in Kyle | Spark Eye Care',
    description: 'Expert ocular hypertension treatment in Kyle. Comprehensive IOP monitoring and preventive care.',
    url: 'https://www.sparkeyetx.com/conditions/ocular-hypertension',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function OcularHypertensionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Ocular Hypertension</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Ocular Hypertension Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed opacity-95 max-w-3xl">
            Elevated eye pressure requires careful monitoring and expert management to prevent vision loss. At Spark Eye Care, we provide comprehensive ocular hypertension evaluation, advanced IOP monitoring, and personalized treatment plans to protect your vision and prevent progression to glaucoma.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Ocular Hypertension
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Ocular hypertension is a condition characterized by higher than normal intraocular pressure (IOP) without detectable optic nerve damage or visual field loss. Affecting approximately 4-10% of adults over age 40, ocular hypertension represents one of the most significant risk factors for developing glaucoma, a leading cause of irreversible blindness worldwide. While not everyone with elevated eye pressure will develop glaucoma, studies show that individuals with untreated ocular hypertension are 10 times more likely to develop the disease compared to those with normal IOP. The condition is often discovered during routine comprehensive eye examinations, as elevated eye pressure typically produces no noticeable symptoms until significant damage has occurred. This silent nature makes regular eye care essential for early detection and intervention, particularly for individuals in high-risk categories.
            </p>
            <p>
              Multiple factors contribute to the development of ocular hypertension, primarily involving an imbalance between aqueous humor production and drainage within the eye. The trabecular meshwork, which serves as the eye's primary drainage system, may become less efficient with age or due to anatomical variations, causing fluid to accumulate and pressure to rise. Risk factors include advancing age (particularly over 40), family history of glaucoma or ocular hypertension, African American or Hispanic ethnicity, high myopia (nearsightedness), diabetes, hypertension, and thin central corneal thickness. Certain medications, particularly long-term corticosteroid use in any form (eye drops, pills, inhalers, or injections), can significantly elevate IOP. Eye trauma, even injuries that occurred years earlier, may also compromise drainage structures and lead to elevated pressure. Understanding these risk factors helps identify individuals who require more frequent monitoring and potentially earlier intervention to preserve vision.
            </p>
            <p>
              Professional treatment and monitoring of ocular hypertension is crucial because the condition serves as a critical window for preventing irreversible vision loss from glaucoma. The Ocular Hypertension Treatment Study, a landmark five-year clinical trial, demonstrated that topical medication to lower IOP reduced the development of glaucoma by more than 50% in high-risk patients. However, not every patient with elevated eye pressure requires immediate medication—the decision depends on multiple factors including pressure levels, corneal thickness, optic nerve appearance, age, family history, and overall risk profile. This is where specialized expertise becomes essential. An experienced eye care professional can accurately assess your individual risk, determine appropriate monitoring intervals, and recommend treatment only when truly necessary, avoiding both under-treatment that allows disease progression and over-treatment with unnecessary medications and their potential side effects. Regular professional monitoring allows for detection of the earliest signs of optic nerve damage or visual field changes, enabling intervention at the most treatable stage when vision can be preserved.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Ocular Hypertension
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Risk Indicators</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Family History of Glaucoma</p>
                    <p className="text-[var(--color-muted)]">Having parents or siblings with glaucoma significantly increases your risk of ocular hypertension and subsequent glaucoma development.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Age Over 40</p>
                    <p className="text-[var(--color-muted)]">The prevalence of ocular hypertension increases significantly with age, particularly after age 40, making regular eye exams essential.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">African American or Hispanic Ethnicity</p>
                    <p className="text-[var(--color-muted)]">These populations have higher prevalence of both ocular hypertension and glaucoma, often developing the condition at younger ages.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Previous Eye Injury</p>
                    <p className="text-[var(--color-muted)]">Trauma to the eye, even years earlier, can damage drainage structures and lead to chronically elevated eye pressure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Thin Corneas</p>
                    <p className="text-[var(--color-muted)]">Central corneal thickness measurements below average indicate higher risk for glaucoma development even with moderately elevated pressure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Long-term Steroid Use</p>
                    <p className="text-[var(--color-muted)]">Corticosteroids in any form—eye drops, pills, inhalers, or injections—can significantly elevate intraocular pressure over time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">High Myopia</p>
                    <p className="text-[var(--color-muted)]">Severe nearsightedness alters eye anatomy and increases susceptibility to elevated intraocular pressure and glaucoma.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Clinical Findings</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Elevated IOP Readings</p>
                    <p className="text-[var(--color-muted)]">Intraocular pressure consistently measuring above 21 mmHg on multiple occasions, detected during comprehensive eye examinations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">No Subjective Symptoms</p>
                    <p className="text-[var(--color-muted)]">Most patients with ocular hypertension experience no pain, vision changes, or other noticeable symptoms, making professional screening essential.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Normal Visual Fields</p>
                    <p className="text-[var(--color-muted)]">Computerized visual field testing shows no peripheral vision loss, distinguishing ocular hypertension from glaucoma.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Healthy-Appearing Optic Nerve</p>
                    <p className="text-[var(--color-muted)]">Detailed optic nerve examination and imaging show no cupping or damage, though careful monitoring for changes is necessary.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Open Drainage Angles</p>
                    <p className="text-[var(--color-muted)]">Gonioscopy examination confirms that the drainage angle remains open, indicating open-angle type pressure elevation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Pressure Fluctuations</p>
                    <p className="text-[var(--color-muted)]">IOP may vary throughout the day or between visits, requiring multiple measurements to establish true pressure patterns.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Comorbid Conditions</p>
                    <p className="text-[var(--color-muted)]">Presence of diabetes, hypertension, or cardiovascular disease may increase overall risk and influence treatment decisions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you have risk factors or elevated eye pressure has been detected, professional evaluation and monitoring is essential. Early detection and appropriate management lead to the best outcomes for preserving your vision.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Ocular Hypertension
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your evaluation begins with detailed intraocular pressure measurement using multiple techniques, including Goldmann applanation tonometry for the most accurate readings. We perform pachymetry to measure central corneal thickness, which influences pressure readings and risk assessment. Comprehensive optic nerve evaluation using dilated examination and optical coherence tomography (OCT) imaging establishes a baseline for future comparison.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{animationDelay: '0.1s'}}>
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Risk-Based Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your individual risk profile, we determine whether observation or active treatment is most appropriate. High-risk patients may benefit from IOP-lowering medication, while lower-risk individuals may require only careful monitoring. We discuss treatment goals, typically aiming for 20-30% pressure reduction in treated patients. Your plan considers your overall health, lifestyle, medication tolerance, and preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up" style={{animationDelay: '0.2s'}}>
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Regular follow-up appointments track IOP trends, assess optic nerve health, and detect any early signs of glaucomatous change. Monitoring frequency depends on your risk level and pressure control—typically every 3-6 months initially, potentially extending to annual visits once stability is established. We perform periodic visual field testing and OCT imaging to ensure no progression is occurring.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-6">
              Our treatment approach is grounded in evidence-based medicine and the findings of major clinical trials including the Ocular Hypertension Treatment Study (OHTS) and the European Glaucoma Prevention Study (EGPS). For patients requiring medication, we typically begin with prostaglandin analogs (latanoprost, travoprost, or bimatoprost) as first-line therapy due to their excellent efficacy, once-daily dosing, and favorable safety profile. These medications work by increasing aqueous humor outflow through the uveoscleral pathway, achieving 25-33% IOP reduction on average.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              Alternative medication classes include beta-blockers (timolol, betaxolol), which reduce aqueous production; alpha-agonists (brimonidine), which both decrease production and increase outflow; and carbonic anhydrase inhibitors (dorzolamide, brinzolamide), which suppress aqueous production. Combination medications may be prescribed for patients requiring greater pressure reduction. We carefully monitor for medication side effects and adjust therapy as needed. Patients who develop side effects or have medical contraindications to certain drug classes have multiple alternative options available, ensuring we can find an effective, well-tolerated regimen for virtually every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Ocular Hypertension Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our eye care specialists have extensive training in glaucoma risk assessment and ocular hypertension management. We stay current with the latest research and clinical guidelines, ensuring you receive care based on the most recent evidence. Our experience allows us to accurately distinguish between patients who require immediate treatment and those who can be safely monitored, avoiding both over-treatment and under-treatment.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up" style={{animationDelay: '0.1s'}}>
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Individualized Care Plans</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient's situation is unique. Your treatment plan considers your specific pressure levels, corneal thickness, optic nerve appearance, family history, age, overall health, lifestyle, and personal preferences. We take time to explain your individual risk profile, discuss all available options, and involve you in treatment decisions. Your plan adapts as circumstances change over time.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up" style={{animationDelay: '0.2s'}}>
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Advanced Diagnostic Technology</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We utilize state-of-the-art equipment including optical coherence tomography (OCT) for detailed optic nerve imaging, automated visual field testing, pachymetry for corneal thickness measurement, and precision tonometry for accurate IOP assessment. This technology allows us to detect the earliest changes and establish comprehensive baseline documentation for your long-term monitoring.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up" style={{animationDelay: '0.3s'}}>
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Convenient Access to Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer flexible scheduling for monitoring appointments and medication follow-ups. Many aspects of ocular hypertension management can be handled through telehealth visits, including treatment reviews, medication adjustments, and discussion of test results. This convenience helps ensure you maintain the regular monitoring schedule essential for preserving your vision while minimizing disruption to your daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Initial Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your first comprehensive visit includes detailed IOP measurement, corneal thickness testing, dilated optic nerve examination, and OCT imaging. We review your medical history, family history, and risk factors. Based on this evaluation, we determine your individual risk level and whether you require immediate treatment or can be safely monitored. You'll leave with a clear understanding of your condition, your risk profile, and the recommended management approach. This visit typically takes 60-90 minutes to ensure thoroughness.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Initiation (Weeks 2-8)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  For patients requiring medication, we begin with a single first-line agent and provide detailed instruction on proper administration technique. You'll return after 4-6 weeks to assess treatment response and check for side effects. If IOP reduction is insufficient, we may adjust the dosage, switch medications, or add a second agent. Patients in the observation category undergo confirmatory pressure measurements and potentially baseline visual field testing. This period establishes whether your chosen management strategy is achieving the desired pressure control.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Stabilization Period (Months 2-6)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once we've achieved target IOP levels or confirmed stable pressures in observation patients, visit frequency may decrease to every 3-4 months. We continue monitoring pressure trends, assess optic nerve appearance for any changes, and perform periodic visual field testing to confirm no glaucomatous progression is occurring. Medication adjustments may still occur during this period as we fine-tune your regimen for optimal pressure control with minimal side effects. You'll become comfortable with your treatment routine and monitoring schedule.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-Term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Ocular hypertension requires lifelong monitoring, as the condition is chronic and risk persists throughout life. Stable patients typically transition to monitoring every 6-12 months, with annual visual field testing and OCT imaging. We remain vigilant for any signs of progression to glaucoma, which would prompt treatment intensification. The good news is that with proper monitoring and treatment, the vast majority of ocular hypertension patients never develop glaucoma or vision loss. Your active participation in maintaining regular appointments and medication adherence is essential for this excellent long-term prognosis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Ocular Hypertension
          </h2>
          <div className="space-y-6">
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Does ocular hypertension mean I have glaucoma?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                No, ocular hypertension and glaucoma are distinct conditions. Ocular hypertension means you have elevated eye pressure without optic nerve damage or vision loss, while glaucoma involves actual damage to the optic nerve and corresponding visual field defects. However, ocular hypertension is a significant risk factor for developing glaucoma—studies show that approximately 10% of people with untreated ocular hypertension will develop glaucoma within five years. This is why monitoring is so important: we want to detect the earliest signs of any progression so we can intervene before permanent vision loss occurs. Many people with ocular hypertension never develop glaucoma, especially with proper monitoring and treatment when indicated.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Do I need to take medication for ocular hypertension?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Not necessarily. The decision to treat ocular hypertension with medication depends on your individual risk profile. Factors we consider include how high your pressure is, your corneal thickness, the appearance of your optic nerve, your age, your family history of glaucoma, and any other risk factors you may have. Low-risk patients can often be safely monitored without medication, while high-risk individuals benefit significantly from pressure-lowering treatment. The Ocular Hypertension Treatment Study showed that medication reduced glaucoma development by more than 50% in high-risk patients, but not everyone requires this intervention. We'll thoroughly assess your individual situation and recommend treatment only if the benefits outweigh the inconvenience and potential side effects of medication.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                How often will I need eye examinations?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Monitoring frequency depends on your risk level and treatment status. Initially, you'll typically be seen every 3-4 months to establish pressure trends and treatment response. Higher-risk patients or those starting new medications may require more frequent monitoring initially. Once your condition is stable—pressures are controlled and optic nerves show no changes—visits may be extended to every 6-12 months. Regardless of visit frequency, you'll have comprehensive examinations with detailed optic nerve assessment at least annually, along with periodic visual field testing and OCT imaging. Regular monitoring is essential because ocular hypertension is a chronic condition requiring lifelong surveillance, but we strive to minimize visit burden while maintaining the safety net you need.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Does insurance cover ocular hypertension treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans, including Medicare, cover evaluation and monitoring of ocular hypertension because it's a medical condition with potential for serious complications. Comprehensive eye examinations, diagnostic testing like OCT and visual fields, and follow-up visits are typically covered under your medical insurance rather than vision insurance. Prescription medications for IOP reduction are usually covered by your pharmacy benefit, though copays vary by plan and medication. Some insurance plans may have specific requirements for prior authorization or step therapy (trying certain medications before others). Our staff can help verify your coverage and work with your insurance company to ensure you receive the care you need. We also discuss cost considerations when selecting medications, as generic options are available for many drug classes.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can I use telehealth for ocular hypertension management?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Telehealth can be valuable for certain aspects of ocular hypertension management, though in-person examinations remain necessary for comprehensive assessment. Virtual visits work well for discussing test results, reviewing treatment progress, adjusting medications, addressing side effects, answering questions, and providing education about your condition. However, actual pressure measurements, optic nerve examinations, and diagnostic testing require in-person visits with specialized equipment. For established patients with stable pressure control, we can often alternate between in-person and telehealth appointments, reducing travel burden while maintaining appropriate monitoring. New patients and those with changing clinical status require in-person evaluation. We'll work with you to maximize the convenience of telehealth where appropriate while ensuring you receive thorough clinical care.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                What if my eye pressure doesn't respond to medication?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                If your eye pressure doesn't adequately respond to initial medication, we have multiple options available. We may increase the dosage, switch to a different medication class with an alternative mechanism of action, or add a second medication to achieve greater pressure reduction. Combination eye drops containing two medications in one bottle can improve convenience while providing enhanced IOP lowering. In some cases, addressing medication technique—ensuring proper administration and absorption—resolves apparent non-response. It's also important to verify that you're not inadvertently raising pressure through other means, such as steroid use or certain systemic medications. Very rarely, if medication proves ineffective or intolerable and your risk profile warrants aggressive intervention, we may discuss selective laser trabeculoplasty (SLT) or referral to a glaucoma specialist. However, the vast majority of ocular hypertension patients achieve satisfactory pressure control with topical medications.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/glaucoma" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Glaucoma</h4>
              <p className="text-[var(--color-muted)]">Comprehensive diagnosis, treatment, and monitoring of glaucoma to preserve your vision and prevent progression.</p>
            </a>
            <a href="/conditions/diabetic-retinopathy" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)]">Specialized care for diabetes-related eye complications, including screening, monitoring, and treatment to protect your sight.</p>
            </a>
            <a href="/conditions/macular-degeneration" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Macular Degeneration</h4>
              <p className="text-[var(--color-muted)]">Advanced diagnostic evaluation and treatment options for age-related macular degeneration to preserve central vision.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Ocular Hypertension Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face ocular hypertension alone. Our team is ready to help you protect your vision with expert monitoring and treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              Schedule Your Evaluation
            </a>
            <a 
              href="/conditions" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}