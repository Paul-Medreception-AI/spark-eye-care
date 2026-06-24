import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open-Angle Glaucoma Treatment in Kyle | Spark Eye Care',
  description: 'Expert open-angle glaucoma treatment in Kyle. Board-certified care for glaucoma management, pressure reduction, and vision preservation. Telehealth available.',
  keywords: 'open-angle glaucoma treatment Kyle, glaucoma Kyle TX, eye pressure treatment, glaucoma management, vision loss prevention Kyle',
  openGraph: {
    title: 'Open-Angle Glaucoma Treatment in Kyle | Spark Eye Care',
    description: 'Expert open-angle glaucoma treatment in Kyle. Comprehensive care for pressure reduction and vision preservation.',
    url: 'https://www.sparkeyetx.com/conditions/open-angle-glaucoma',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function OpenAngleGlaucomaPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Open-Angle Glaucoma</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Open-Angle Glaucoma Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed mb-4 text-white/90 max-w-3xl">
            Open-angle glaucoma is the most common form of glaucoma, a progressive eye condition that can lead to permanent vision loss if left untreated. At Spark Eye Care, we provide comprehensive diagnosis, monitoring, and treatment to preserve your vision and maintain your quality of life.
          </p>
          <p className="text-xl leading-relaxed text-white/90 max-w-3xl">
            Our expert team uses the latest technology and evidence-based treatments to manage intraocular pressure, slow disease progression, and help you maintain your independence and visual function for years to come.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Open-Angle Glaucoma
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Open-angle glaucoma, also called primary open-angle glaucoma (POAG), is a chronic eye disease characterized by progressive damage to the optic nerve, typically associated with elevated intraocular pressure (IOP). It's called "open-angle" because the drainage angle formed by the cornea and iris remains open, but the trabecular meshwork—the eye's drainage system—gradually becomes less efficient at draining aqueous humor. This leads to a buildup of pressure inside the eye that, over time, damages the optic nerve fibers. Open-angle glaucoma affects approximately 3 million Americans and is the leading cause of irreversible blindness worldwide. The condition develops slowly and painlessly, often without noticeable symptoms in its early stages, which is why it's sometimes called the "silent thief of sight." By the time patients notice vision changes, significant and permanent damage may have already occurred. The impact on daily life can be profound: loss of peripheral vision affects driving ability, mobility, and independence, while advanced cases can lead to tunnel vision or complete blindness.
            </p>
            <p>
              The exact cause of open-angle glaucoma isn't fully understood, but elevated eye pressure remains the primary modifiable risk factor. The eye continuously produces aqueous humor, a clear fluid that nourishes the cornea and lens. In healthy eyes, this fluid drains at the same rate it's produced, maintaining stable pressure. In open-angle glaucoma, the drainage system becomes clogged or inefficient, causing pressure to build up and compress the optic nerve. However, some people develop glaucoma despite normal eye pressure (normal-tension glaucoma), suggesting other factors like poor blood flow to the optic nerve may also play a role. Major risk factors include age over 60, family history of glaucoma, African American or Hispanic ethnicity, thin corneas, high myopia (nearsightedness), diabetes, hypertension, cardiovascular disease, and prolonged corticosteroid use. Genetics play a significant role—having a sibling with glaucoma increases your risk ninefold. Because multiple factors contribute to disease development and progression, a comprehensive approach to diagnosis and treatment is essential.
            </p>
            <p>
              Professional medical treatment for open-angle glaucoma is not optional—it's essential for preserving vision. Once optic nerve damage occurs, it cannot be reversed, making early detection and consistent treatment critical. The goal of glaucoma treatment is to lower intraocular pressure to a level that prevents further nerve damage, which varies for each patient based on the severity of their disease and risk factors. Regular monitoring through comprehensive eye examinations, visual field testing, and optical coherence tomography (OCT) imaging allows us to track disease progression and adjust treatment as needed. Without proper treatment, open-angle glaucoma will continue to progress, gradually stealing peripheral vision and eventually central vision. Studies show that consistent treatment can slow or halt progression in the vast majority of patients, preserving functional vision for life. At Spark Eye Care, we partner with patients to create sustainable, effective treatment plans that fit their lifestyle while protecting their most precious sense: sight.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Open-Angle Glaucoma
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Early Warning Signs</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">No Symptoms in Early Stages</span>
                    <p className="text-[var(--color-muted)]">Most patients experience no pain, redness, or vision changes initially, making regular eye exams essential for detection.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Gradual Peripheral Vision Loss</span>
                    <p className="text-[var(--color-muted)]">Slow, progressive loss of side vision that often goes unnoticed because the other eye compensates.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Tunnel Vision Development</span>
                    <p className="text-[var(--color-muted)]">In moderate to advanced stages, vision becomes restricted to a narrow central field, like looking through a tube.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty with Night Driving</span>
                    <p className="text-[var(--color-muted)]">Increased challenges seeing in low light or adjusting to darkness due to compromised peripheral vision.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Bumping into Objects</span>
                    <p className="text-[var(--color-muted)]">Frequently running into door frames, furniture, or people approaching from the side due to peripheral field loss.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Reading</span>
                    <p className="text-[var(--color-muted)]">In advanced cases, trouble locating the next line of text or losing place while reading due to visual field defects.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Elevated Eye Pressure on Exam</span>
                    <p className="text-[var(--color-muted)]">Consistently high intraocular pressure readings detected during routine eye examinations, often before vision symptoms appear.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Advanced Symptoms & Impact</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty with Stairs</span>
                    <p className="text-[var(--color-muted)]">Trouble judging depth and seeing steps clearly, increasing fall risk and affecting mobility and confidence.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Impaired Driving Ability</span>
                    <p className="text-[var(--color-muted)]">Reduced side vision makes changing lanes dangerous and may lead to loss of driving privileges.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Loss of Independence</span>
                    <p className="text-[var(--color-muted)]">Advanced vision loss can prevent driving, limit employment options, and require assistance with daily activities.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Reduced Contrast Sensitivity</span>
                    <p className="text-[var(--color-muted)]">Difficulty distinguishing objects from backgrounds, particularly in dim lighting or low-contrast environments.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Central Vision Loss</span>
                    <p className="text-[var(--color-muted)]">In very advanced glaucoma, even central vision becomes affected, severely limiting all visual tasks.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Anxiety About Vision Loss</span>
                    <p className="text-[var(--color-muted)]">Emotional distress related to diagnosis, fear of blindness, and concerns about future independence and quality of life.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Increased Fall Risk</span>
                    <p className="text-[var(--color-muted)]">Loss of peripheral vision significantly increases the likelihood of trips, falls, and injuries, especially in older adults.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 p-8 bg-[var(--color-cream)] rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              <strong>If you recognize these signs, help is available.</strong> Early detection and treatment of open-angle glaucoma can prevent vision loss and preserve your quality of life. Regular comprehensive eye exams are the only way to catch this silent disease before permanent damage occurs. Contact us today for a thorough evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Open-Angle Glaucoma
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                Your initial evaluation includes measurement of intraocular pressure, detailed examination of the optic nerve, visual field testing to map any vision loss, and optical coherence tomography (OCT) to assess nerve fiber layer thickness.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                We also evaluate corneal thickness, drainage angle anatomy, and identify risk factors that may affect your treatment plan. This comprehensive baseline allows us to detect even subtle changes over time.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Diagnostic testing is coordinated with trusted ophthalmology partners when specialized imaging or surgical evaluation is needed, ensuring seamless, integrated care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                Based on your unique presentation, we develop a customized treatment strategy to lower your eye pressure to a safe target level. First-line treatment typically involves prescription eye drops that either reduce fluid production or improve drainage.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                We consider your lifestyle, medication schedule preferences, potential side effects, and cost factors when selecting the most appropriate medication regimen. Patient adherence is critical, so we ensure your treatment plan is sustainable.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                If medications are insufficient, we coordinate referrals for laser therapy or surgical interventions with experienced glaucoma specialists, maintaining collaborative oversight of your care throughout the process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Monitoring & Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                Glaucoma is a chronic condition requiring lifelong management. We schedule regular follow-up appointments every 3-6 months to monitor your eye pressure, assess optic nerve health, and repeat visual field testing to detect any progression.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-3">
                Advanced imaging technology allows us to compare current results with baseline measurements, identifying even subtle changes that require treatment adjustment. We also address medication side effects and adherence challenges promptly.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Telehealth check-ins between office visits help ensure medication compliance, answer questions, and provide support. Our goal is preserving your functional vision for life through consistent, attentive, collaborative care.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Evidence-Based Treatment Modalities</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our treatment approach follows evidence-based guidelines established by the American Academy of Ophthalmology. Prostaglandin analogs (latanoprost, travoprost, bimatoprost) are typically first-line agents, reducing eye pressure by increasing fluid outflow. Beta-blockers (timolol), alpha agonists (brimonidine), and carbonic anhydrase inhibitors (dorzolamide, brinzolamide) may be added or used in combination to achieve target pressure.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              When medications are insufficient or not tolerated, we coordinate laser trabeculoplasty (SLT), a safe outpatient procedure that improves drainage. For advanced or refractory cases, surgical options include trabeculectomy, tube shunt implantation, or minimally invasive glaucoma surgery (MIGS). Throughout treatment, we emphasize patient education, medication adherence strategies, and lifestyle modifications including regular exercise, proper nutrition, and avoiding head-down positions that increase eye pressure.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Open-Angle Glaucoma Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our optometrists maintain advanced certifications in glaucoma management and stay current with the latest diagnostic technologies and treatment protocols through continuing education.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient's glaucoma is unique. Your treatment plan is tailored to your specific pressure targets, risk factors, lifestyle needs, and personal preferences for optimal outcomes.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Convenient virtual visits for medication reviews, treatment questions, and follow-up consultations complement in-person examinations, making consistent glaucoma care more accessible.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Extensive Glaucoma Experience</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We have successfully managed hundreds of glaucoma patients, utilizing advanced diagnostic technology and maintaining strong referral relationships with glaucoma specialists for comprehensive care coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation</h3>
                <p className="text-[var(--color-muted)] text-sm mb-2">Week 1</p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your comprehensive initial visit includes detailed medical history, measurement of intraocular pressure using multiple methods, dilated optic nerve examination, visual field testing, OCT imaging of nerve fiber layers, and corneal thickness measurement. We'll explain your diagnosis, discuss your specific risk factors, establish your target pressure range, and prescribe initial medication if needed. Plan for this appointment to take 90-120 minutes as we gather complete baseline data essential for monitoring your glaucoma over time.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins</h3>
                <p className="text-[var(--color-muted)] text-sm mb-2">Weeks 2-4</p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll start your prescribed eye drop regimen—typically once daily in the evening for prostaglandin analogs. We'll provide detailed instructions on proper administration technique, timing, and what side effects to expect. A follow-up visit at 4-6 weeks allows us to check your pressure response to medication and assess tolerance. Many patients see significant pressure reduction within 2-4 weeks. We'll address any side effects, adjust medications if needed, and answer questions about your daily routine. This phase establishes the foundation of your long-term management strategy.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review</h3>
                <p className="text-[var(--color-muted)] text-sm mb-2">Months 2-3</p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your pressure is stable on medication, we schedule comprehensive progress evaluations every 3-6 months depending on your disease severity and risk level. These visits include pressure checks, optic nerve examination, and periodic visual field testing (typically every 6-12 months) to confirm the disease isn't progressing. OCT imaging is repeated annually to track nerve fiber layer thickness changes. If your pressure isn't adequately controlled or you experience progression despite treatment, we'll adjust your medication regimen or discuss advanced options including laser therapy or surgical referral.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] text-sm mb-2">Ongoing</p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Glaucoma management is a lifelong partnership. With consistent treatment and regular monitoring, the vast majority of patients maintain functional vision throughout their lives. Your ongoing care includes continued medication use, regular office visits every 3-6 months, annual comprehensive testing, and prompt adjustment if changes are detected. We'll monitor for medication side effects, help you navigate insurance coverage, coordinate with specialists if surgical intervention becomes necessary, and provide support for any vision changes. Our commitment is preserving your independence and quality of life through expert, compassionate, proactive glaucoma care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Open-Angle Glaucoma
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                How long does open-angle glaucoma treatment take?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Open-angle glaucoma is a chronic, lifelong condition that requires ongoing management rather than a finite treatment course. Once diagnosed, you'll need to use prescribed eye drops daily—typically once or twice per day—for the rest of your life to maintain safe eye pressure levels. Follow-up appointments are scheduled every 3-6 months indefinitely to monitor disease stability. While this may sound daunting, most patients find that daily eye drops become a simple routine, similar to taking blood pressure medication. The good news is that with consistent treatment, the vast majority of patients never experience significant vision loss. Treatment is highly effective at preserving vision when followed as prescribed.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                Is medication always required for open-angle glaucoma?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  For the vast majority of open-angle glaucoma patients, prescription eye drops are the first-line treatment and are highly effective at lowering intraocular pressure. In very early cases or those with borderline pressures and low risk factors, your doctor may recommend close observation initially without medication—called "glaucoma suspect" monitoring. However, once diagnosis is confirmed and treatment is needed, medication is nearly always required. Some patients who cannot tolerate drops or don't achieve adequate pressure control may undergo laser trabeculoplasty, which can reduce or eliminate the need for some medications. Surgical procedures are reserved for advanced cases or medication failures. There are no proven dietary supplements or lifestyle changes that can replace medical treatment, though exercise, healthy diet, and avoiding smoking support overall eye health.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                Does insurance cover open-angle glaucoma treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Yes, glaucoma diagnosis and treatment are considered medically necessary and are covered by virtually all health insurance plans, including Medicare and Medicaid. Office visits, diagnostic testing (visual fields, OCT imaging), and examinations are typically covered under your medical insurance—not vision insurance—since glaucoma is a medical eye disease. Prescription eye drop medications are covered under your pharmacy benefit, though copays vary and brand-name drugs may require prior authorization or step therapy. Many effective generic glaucoma medications are now available at lower cost. If cost is a concern, let us know—we can often prescribe equally effective generic alternatives or help you access manufacturer patient assistance programs. Laser and surgical treatments, when necessary, are also covered by medical insurance.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                What if my glaucoma treatment isn't working?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  If your eye pressure remains elevated despite medication or if visual field testing shows progressive vision loss, we have multiple options to intensify treatment. First, we may add a second or third medication class, as many patients require combination therapy for adequate pressure control. Fixed-combination eye drops that contain two medications in one bottle can improve convenience and adherence. If medications are insufficient, poorly tolerated, or you're already on maximal therapy, we'll coordinate referral for selective laser trabeculoplasty (SLT), a safe, in-office procedure that improves drainage and often reduces medication needs. For advanced or refractory glaucoma, surgical options including trabeculectomy, tube shunt implantation, or minimally invasive glaucoma surgery (MIGS) may be necessary. Throughout this process, we maintain close collaboration with glaucoma specialists while continuing to monitor your progress and support your overall eye health.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                Can telehealth work for glaucoma treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Telehealth can play a valuable supplementary role in glaucoma management, though it cannot fully replace in-person examinations. Comprehensive glaucoma evaluations require specialized equipment to measure eye pressure, examine the optic nerve, and perform visual field testing—all of which must be done in the office. However, telehealth is excellent for medication reviews, discussing side effects, answering treatment questions, reviewing recent test results, providing education about your condition, and addressing adherence challenges between scheduled office visits. We may also use telehealth for follow-up consultations after medication changes to assess your response and tolerance before the next in-person examination. This hybrid approach increases access to care, reduces travel burden, and helps ensure continuous engagement with your treatment plan while maintaining the essential hands-on monitoring that glaucoma requires.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors list-none flex justify-between items-center">
                Will I go blind from open-angle glaucoma?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  The vast majority of patients with open-angle glaucoma who receive appropriate treatment and follow their prescribed care plan do not go blind. Studies show that with early detection and consistent treatment, more than 90% of glaucoma patients maintain functional vision throughout their lifetime. The key factors that determine outcomes are early diagnosis (through regular eye exams), medication adherence, and regular monitoring to detect progression early. Patients who use their drops as prescribed, attend follow-up appointments, and work with their eye care team to adjust treatment when needed have excellent visual prognoses. The patients most at risk for significant vision loss are those diagnosed late with advanced damage already present, those who don't use their medications consistently, or those who don't follow up regularly. This is why we emphasize patient education, provide adherence support, and maintain frequent communication—because we're committed to preserving your vision for life.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS SECTION */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/diabetic-retinopathy" className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Diabetic Retinopathy
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Diabetes-related damage to retinal blood vessels that can lead to vision loss if untreated. We provide comprehensive screening and management coordination.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </a>
            <a href="/conditions/macular-degeneration" className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Macular Degeneration
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Age-related deterioration of the central retina affecting detailed vision. Early detection and treatment can slow progression and preserve sight.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </a>
            <a href="/conditions/cataracts" className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Cataracts
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Clouding of the eye's natural lens causing blurry vision and glare. We provide diagnosis, monitoring, and surgical coordination when treatment is needed.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-4">
            Get Help for Open-Angle Glaucoma Today
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            You don't have to face open-angle glaucoma alone. Our team is ready to help you preserve your vision and maintain your independence through expert, compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors shadow-lg"
            >
              Schedule Your Evaluation
            </a>
            <a 
              href="/conditions" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All Conditions
            </a>
          </div>
          <p className="mt-8 text-white/80">
            <a href="tel:+15129555500" className="hover:underline">Call (512) 955-5500</a> • Located in Kyle, TX
          </p>
        </div>
      </section>

    </main>
  )
}