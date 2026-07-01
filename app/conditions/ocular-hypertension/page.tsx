import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ocular Hypertension Treatment in Kyle | Spark Eye Care',
  description: 'Expert ocular hypertension treatment in Kyle. Board-certified care for elevated eye pressure. Prevent vision loss with comprehensive monitoring and personalized treatment plans.',
  keywords: 'ocular hypertension treatment Kyle, high eye pressure Kyle, glaucoma prevention, eye pressure management, ophthalmologist Kyle',
  openGraph: {
    title: 'Ocular Hypertension Treatment in Kyle | Spark Eye Care',
    description: 'Expert ocular hypertension treatment in Kyle. Board-certified care for elevated eye pressure.',
    url: 'https://sparkeyetx.com/conditions/ocular-hypertension',
    type: 'website',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }],
  },
}

export default function OcularHypertensionPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Ocular Hypertension</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Ocular Hypertension Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Elevated eye pressure requires expert monitoring and proactive management to prevent vision loss. At Spark Eye Care, we provide comprehensive ocular hypertension treatment with advanced diagnostic technology and personalized care plans designed to protect your sight for years to come.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Ocular Hypertension
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Ocular hypertension is a condition characterized by intraocular pressure (IOP) higher than normal—typically above 21 mmHg—without detectable damage to the optic nerve or visual field loss. While not glaucoma itself, ocular hypertension is considered a significant risk factor for developing glaucoma, a leading cause of irreversible blindness worldwide. Studies indicate that approximately 4-10% of adults over age 40 have ocular hypertension, though many remain unaware of their condition since it produces no noticeable symptoms. Left unmonitored, elevated eye pressure can gradually damage the optic nerve over time, making early detection and consistent management essential for preserving long-term vision health.
            </p>
            <p>
              The causes of ocular hypertension are multifactorial and not completely understood, but several risk factors have been clearly identified. These include advancing age, family history of glaucoma or ocular hypertension, African or Hispanic ancestry, high myopia (nearsightedness), diabetes, hypertension, and certain anatomical features such as thinner central corneal thickness. Eye trauma, prolonged use of corticosteroid medications (whether topical, oral, or inhaled), and conditions that affect fluid drainage within the eye can also elevate intraocular pressure. The eye continuously produces aqueous humor—a clear fluid that nourishes internal structures—and when drainage through the trabecular meshwork becomes less efficient, pressure builds. Understanding your individual risk profile allows our team to tailor monitoring frequency and intervention strategies to your specific needs.
            </p>
            <p>
              Professional treatment and consistent monitoring are critical for anyone diagnosed with ocular hypertension because the condition itself is asymptomatic until significant damage has occurred. Unlike acute angle-closure glaucoma, which presents with sudden pain and vision loss, ocular hypertension and primary open-angle glaucoma progress silently, often affecting peripheral vision first—changes you may not notice until substantial and irreversible optic nerve damage has taken place. Routine comprehensive eye examinations with tonometry (pressure measurement), optic nerve evaluation, visual field testing, and optical coherence tomography (OCT) imaging enable early detection of progression from ocular hypertension to glaucoma. With appropriate treatment—whether careful observation, pressure-lowering eye drops, laser procedures, or surgical intervention—the vast majority of patients maintain excellent vision throughout their lives. At Spark Eye Care, we combine advanced diagnostic technology with evidence-based treatment protocols to protect what matters most: your sight.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Signs & Symptoms of Ocular Hypertension
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">Visual & Perceptual Signs</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">No Noticeable Symptoms</div>
                    <div className="text-[var(--color-muted)]">Ocular hypertension typically produces no pain, discomfort, or visual changes, making regular eye exams essential for detection.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Normal Visual Acuity</div>
                    <div className="text-[var(--color-muted)]">Vision remains sharp and clear in both central and peripheral fields until significant optic nerve damage occurs.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Absence of Eye Pain</div>
                    <div className="text-[var(--color-muted)]">Unlike acute glaucoma, ocular hypertension does not cause redness, soreness, or pressure sensation in the eyes.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">No Halos or Blurred Vision</div>
                    <div className="text-[var(--color-muted)]">Vision quality remains unchanged without halos around lights or episodes of blurriness that characterize acute pressure spikes.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Detected During Routine Exam</div>
                    <div className="text-[var(--color-muted)]">Elevated intraocular pressure is discovered incidentally through tonometry during comprehensive eye examinations.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Family History of Glaucoma</div>
                    <div className="text-[var(--color-muted)]">Often occurs in individuals with relatives who have glaucoma, highlighting genetic predisposition and risk.</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">Risk Factors & Clinical Findings</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Elevated IOP Readings</div>
                    <div className="text-[var(--color-muted)]">Intraocular pressure measurements consistently above 21 mmHg on tonometry testing during multiple visits.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Thinner Corneas</div>
                    <div className="text-[var(--color-muted)]">Central corneal thickness below average may artificially lower pressure readings and increase glaucoma risk.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Age Over 40</div>
                    <div className="text-[var(--color-muted)]">Prevalence increases with advancing age as trabecular meshwork drainage efficiency naturally declines over time.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">African or Hispanic Ancestry</div>
                    <div className="text-[var(--color-muted)]">Higher genetic predisposition to both ocular hypertension and progression to primary open-angle glaucoma.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">High Myopia</div>
                    <div className="text-[var(--color-muted)]">Severe nearsightedness is associated with anatomical changes that increase susceptibility to elevated eye pressure.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Corticosteroid Use</div>
                    <div className="text-[var(--color-muted)]">Prolonged use of steroid medications in any form can cause secondary ocular hypertension requiring monitoring.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Diabetes or Hypertension</div>
                    <div className="text-[var(--color-muted)]">Systemic vascular conditions affect ocular blood flow and may influence intraocular pressure regulation.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs or have risk factors for ocular hypertension, help is available. Early detection and treatment lead to better outcomes and lifelong vision preservation.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-16 text-center text-[var(--color-ink)]">
            How We Treat Ocular Hypertension
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your initial evaluation includes detailed tonometry (pressure measurement), pachymetry (corneal thickness), gonioscopy (drainage angle examination), dilated optic nerve assessment, and baseline OCT imaging. We measure IOP at different times of day to capture fluctuations and perform visual field testing to establish a baseline. This thorough assessment identifies your unique risk profile and determines whether observation or active treatment is most appropriate for your situation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your risk factors and pressure levels, we develop an individualized management strategy. Lower-risk patients may require only careful observation with regular monitoring every 3-6 months. Higher-risk individuals—those with very elevated pressures, thin corneas, suspicious optic nerve appearance, or strong family history—typically begin pressure-lowering eye drops to reduce IOP by 20-30%. We educate you thoroughly about your condition, treatment rationale, proper medication technique, and the critical importance of adherence and follow-up.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Monitoring & Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Lifelong surveillance is essential to detect progression from ocular hypertension to glaucoma. Regular visits include pressure checks, optic nerve photography, OCT scans to measure nerve fiber layer thickness, and periodic visual field testing. If you're on medication, we monitor effectiveness and side effects, adjusting therapy as needed. Should glaucomatous damage develop despite treatment, we discuss advanced options including selective laser trabeculoplasty or surgical intervention. Our goal is preserving your vision through proactive, evidence-based care.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Our treatment approach is firmly grounded in evidence-based medicine and clinical practice guidelines from the American Academy of Ophthalmology. First-line therapy for ocular hypertension typically involves prostaglandin analogs (such as latanoprost or travoprost), which increase aqueous outflow and can lower IOP by 25-33%. Alternative or adjunctive medications include beta-blockers (timolol), alpha-agonists (brimonidine), and carbonic anhydrase inhibitors (dorzolamide or brinzolamide), each working through different mechanisms to reduce aqueous production or enhance drainage.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              For patients who struggle with medication adherence, experience intolerable side effects, or require additional pressure reduction, selective laser trabeculoplasty (SLT) offers a non-invasive option that improves trabecular meshwork function and can reduce IOP by 20-30% for several years. In rare cases where ocular hypertension progresses to glaucoma despite maximal medical therapy, surgical procedures such as trabeculectomy or minimally invasive glaucoma surgery (MIGS) may be considered. Throughout your care, we emphasize patient education, shared decision-making, and the importance of consistent follow-up to protect your precious gift of sight.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Why Choose Spark Eye Care for Ocular Hypertension Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our physicians are board-certified with specialized training in glaucoma management and ocular hypertension, ensuring you receive the highest standard of evidence-based care.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Care Plans</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's risk profile is unique. Your treatment plan is tailored to your specific pressure levels, risk factors, lifestyle, and preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Advanced Technology</h3>
              <p className="text-[var(--color-muted)]">
                We utilize state-of-the-art diagnostic equipment including OCT imaging, automated visual field testing, and pachymetry for precise monitoring and early detection of changes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Convenient Access</h3>
              <p className="text-[var(--color-muted)]">
                With flexible scheduling, extended hours, and telehealth options for follow-up consultations, we make ongoing monitoring convenient and accessible for busy patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-center text-[var(--color-ink)]">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your comprehensive initial examination includes detailed medical and family history, tonometry to measure intraocular pressure, pachymetry to assess corneal thickness, gonioscopy to evaluate drainage angles, dilated fundus examination with optic nerve photography, and baseline OCT imaging of the retinal nerve fiber layer. We may also perform visual field testing and measure IOP at multiple time points. This thorough assessment typically takes 60-90 minutes and establishes your baseline risk profile, allowing us to determine whether careful observation or active treatment is most appropriate. You'll leave with a clear understanding of your condition and our recommended management strategy.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If medication is recommended, you'll begin pressure-lowering eye drops—typically a prostaglandin analog administered once daily in the evening. We provide detailed instruction on proper instillation technique, potential side effects to watch for, and the critical importance of consistent use. A follow-up appointment 3-4 weeks after starting medication allows us to assess treatment effectiveness, measure IOP reduction, check for adverse effects, and address any questions or concerns. For observation-only patients, we schedule your next monitoring visit based on your risk level, typically within 3-6 months, and provide education about warning signs that should prompt earlier contact.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">3</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your treatment regimen is established and pressure is well-controlled, we transition to regular monitoring visits every 3-6 months depending on your individual risk factors. These visits include tonometry, optic nerve assessment, and periodic OCT imaging to detect any structural changes before functional vision loss occurs. Visual field testing is repeated annually or more frequently if concerning changes are noted. We review medication adherence, discuss any difficulties with drops or side effects, and make treatment adjustments as needed. This ongoing surveillance is essential—the goal is detecting any progression from ocular hypertension to glaucoma at the earliest possible stage when intervention is most effective.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">4</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Ocular hypertension requires lifelong monitoring because risk of progression to glaucoma persists over time. With consistent care, proper medication adherence, and regular follow-up, the vast majority of patients maintain excellent vision throughout their lives. Some patients remain stable on observation alone for decades; others require medication adjustments or additional therapy over time. If glaucomatous damage develops despite treatment, we discuss advanced options including laser procedures or surgery. Our commitment is partnering with you for the long term, providing vigilant surveillance, evidence-based treatment, and the peace of mind that comes from knowing your vision is being expertly protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Frequently Asked Questions About Ocular Hypertension
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                How long does treatment for ocular hypertension take?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Ocular hypertension requires lifelong monitoring rather than a fixed treatment duration. If you're on observation only, you'll have check-ups every 3-6 months indefinitely. If you require medication, you may need to use pressure-lowering drops for years or even permanently, with regular follow-up visits every 3-6 months to monitor effectiveness and detect any progression to glaucoma. The goal is continuous surveillance to protect your vision over your lifetime. Many patients maintain stable pressures and healthy optic nerves for decades with appropriate management.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Will I definitely need medication for ocular hypertension?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Not necessarily. Treatment decisions are individualized based on your specific risk profile. Lower-risk patients with mildly elevated pressures, thick corneas, healthy optic nerves, and no family history may be safely managed with careful observation alone. Higher-risk individuals—those with significantly elevated IOP, thin corneas, suspicious optic nerve appearance, strong family history of glaucoma, or other risk factors—typically benefit from preventive treatment with pressure-lowering eye drops to reduce the risk of developing glaucoma by approximately 50%. We'll thoroughly discuss your unique situation and make evidence-based recommendations tailored to you.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Does insurance cover ocular hypertension treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, ocular hypertension is recognized as a medical condition, and comprehensive eye examinations, diagnostic testing, and treatment are typically covered by medical insurance plans including Medicare. Your visits are billed to medical insurance (not vision plans) using appropriate diagnostic codes. Coverage for medications varies by prescription plan, but most pressure-lowering eye drops are available in generic formulations that are covered with modest copays. We participate with major insurance carriers and our staff can verify your benefits and provide cost estimates prior to treatment. Financial considerations should never be a barrier to sight-preserving care.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                What happens if medication doesn't lower my eye pressure enough?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If a single medication doesn't achieve adequate pressure reduction, we have several options. We can add a second or even third medication from different drug classes that work synergistically through different mechanisms. Combination drops are also available that deliver two medications in one bottle, improving convenience and adherence. If you experience intolerable side effects or require additional pressure lowering, selective laser trabeculoplasty (SLT) offers a non-invasive option that can reduce IOP by 20-30% and remains effective for several years. In the rare situation where you progress to glaucoma despite maximal medical therapy, surgical options including minimally invasive procedures are available. We'll work with you to find the most effective, well-tolerated treatment approach.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Can I use telehealth for follow-up appointments?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Telehealth can be useful for certain aspects of ocular hypertension management, such as discussing medication side effects, reviewing test results, providing education, or adjusting treatment plans. However, because accurate pressure measurement, optic nerve examination, and specialized imaging are essential components of monitoring, most follow-up visits will need to be in-person. We may schedule convenient telehealth consultations between in-person monitoring appointments for medication management or to address concerns. Our goal is balancing thorough clinical care with convenience and accessibility for our patients.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Will I eventually go blind from ocular hypertension?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No—with proper monitoring and treatment, the vast majority of patients with ocular hypertension maintain excellent vision throughout their lives. While ocular hypertension increases your risk of developing glaucoma compared to the general population, only about 10% of untreated patients progress to glaucoma within five years. With appropriate management—whether careful observation or preventive medication—this risk is significantly reduced. Even if glaucoma does develop, modern treatments are highly effective at controlling pressure and preventing vision loss when the condition is detected early. The key is consistent follow-up care. By partnering with us for regular monitoring, you're taking the most important step to protect your sight for a lifetime.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-8 text-center text-[var(--color-ink)]">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/glaucoma" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Glaucoma</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Comprehensive management of primary open-angle glaucoma, angle-closure glaucoma, and secondary glaucomas with medical, laser, and surgical treatments.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </a>
            <a href="/conditions/diabetic-retinopathy" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Expert detection and treatment of diabetes-related eye disease including macular edema, proliferative changes, and vision-threatening complications.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </a>
            <a href="/conditions/macular-degeneration" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Macular Degeneration</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Advanced care for age-related macular degeneration including anti-VEGF injections, monitoring, and lifestyle interventions to preserve central vision.
              </p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-4">
            Get Help for Ocular Hypertension Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face ocular hypertension alone. Our team is ready to help protect your vision with expert monitoring and personalized treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-block"
            >
              Schedule Your Evaluation
            </a>
            <a
              href="/conditions"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all inline-block"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}