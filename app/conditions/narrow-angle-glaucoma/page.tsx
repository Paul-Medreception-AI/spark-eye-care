import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Narrow-Angle Glaucoma Treatment in Kyle | Spark Eye Care',
  description: 'Expert narrow-angle glaucoma treatment in Kyle. Board-certified care for acute angle-closure glaucoma with comprehensive diagnosis, laser therapy, and ongoing management.',
  keywords: 'narrow-angle glaucoma treatment Kyle, angle-closure glaucoma Kyle, glaucoma specialist Kyle, laser iridotomy Kyle, acute glaucoma care',
  openGraph: {
    title: 'Narrow-Angle Glaucoma Treatment in Kyle | Spark Eye Care',
    description: 'Expert narrow-angle glaucoma treatment in Kyle. Comprehensive care for acute angle-closure glaucoma.',
    url: 'https://www.sparkeyetx.com/conditions/narrow-angle-glaucoma',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function NarrowAngleGlaucomaPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Narrow-Angle Glaucoma</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Narrow-Angle Glaucoma Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Narrow-angle glaucoma is a serious eye condition that requires immediate medical attention to prevent permanent vision loss. At Spark Eye Care, we provide comprehensive diagnosis, emergency treatment, and long-term management for narrow-angle and acute angle-closure glaucoma to protect your vision and eye health.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding Narrow-Angle Glaucoma
          </h2>
          
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6">
            <p className="leading-relaxed">
              Narrow-angle glaucoma, also called angle-closure glaucoma, occurs when the drainage angle between the iris and cornea becomes too narrow or completely blocked, preventing fluid from draining properly from the eye. This blockage causes a rapid increase in intraocular pressure (IOP), which can damage the optic nerve and lead to permanent vision loss if not treated promptly. Unlike open-angle glaucoma which develops gradually, narrow-angle glaucoma can progress quickly and is considered a medical emergency when it occurs acutely. The condition affects approximately 1 in 1,000 people and is more common in individuals over age 40, particularly those of Asian descent, women, and people who are farsighted. The sudden increase in eye pressure can cause severe symptoms including intense eye pain, blurred vision, halos around lights, nausea, and headache, significantly impacting quality of life and requiring immediate medical intervention.
            </p>
            
            <p className="leading-relaxed">
              Several anatomical and physiological factors contribute to the development of narrow-angle glaucoma. Some people are born with a naturally narrow drainage angle, which increases their risk as the lens of the eye naturally thickens with age, further narrowing the angle. Risk factors include being over 40 years old, family history of glaucoma, farsightedness (hyperopia), certain ethnic backgrounds (particularly Asian and Inuit descent), female gender, and having a shallow anterior chamber in the eye. Certain medications that dilate the pupils, such as antihistamines, decongestants, and some antidepressants, can trigger an acute attack in susceptible individuals. The condition can present as either acute angle-closure glaucoma, which is a sudden emergency, or chronic angle-closure glaucoma, which develops more slowly over time. Understanding your individual risk factors is essential for prevention and early detection.
            </p>
            
            <p className="leading-relaxed">
              Professional treatment for narrow-angle glaucoma is critical to preventing permanent vision loss and preserving eye health. Without prompt treatment, acute angle-closure glaucoma can cause irreversible damage to the optic nerve within hours to days, leading to partial or complete blindness in the affected eye. Even chronic narrow-angle glaucoma requires monitoring and treatment to prevent progression. At Spark Eye Care, we utilize comprehensive diagnostic tools including gonioscopy to examine the drainage angle, tonometry to measure eye pressure, optical coherence tomography (OCT) to assess the optic nerve, and visual field testing to detect any vision loss. Our treatment approach is tailored to each patient's specific situation and may include emergency pressure-lowering medications, laser peripheral iridotomy to create a new drainage opening, or in some cases, surgical intervention. With proper treatment and ongoing management, most patients can preserve their vision and prevent future attacks, making early diagnosis and professional care absolutely essential.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Signs & Symptoms of Narrow-Angle Glaucoma
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Acute/Emergency Symptoms */}
            <div>
              <h3 className="text-2xl font-light mb-6 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Acute Emergency Symptoms
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Severe Eye Pain</div>
                    <p className="text-[var(--color-muted)] text-sm">Sudden, intense pain in one eye that may be described as the worst eye pain ever experienced.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Sudden Vision Loss</div>
                    <p className="text-[var(--color-muted)] text-sm">Rapid onset of blurred vision or severe vision decrease that cannot be corrected with blinking.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Halos Around Lights</div>
                    <p className="text-[var(--color-muted)] text-sm">Seeing rainbow-colored rings or halos around lights, especially at night.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Red, Swollen Eye</div>
                    <p className="text-[var(--color-muted)] text-sm">Eye appears red and inflamed with visible blood vessels and possible eyelid swelling.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Nausea and Vomiting</div>
                    <p className="text-[var(--color-muted)] text-sm">Severe nausea or vomiting accompanying eye pain due to extreme pressure elevation.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Headache</div>
                    <p className="text-[var(--color-muted)] text-sm">Intense headache, often on the same side as the affected eye, that doesn't respond to pain relievers.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Cloudy Cornea</div>
                    <p className="text-[var(--color-muted)] text-sm">The cornea may appear hazy or cloudy due to swelling from elevated pressure.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chronic/Warning Signs */}
            <div>
              <h3 className="text-2xl font-light mb-6 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Chronic & Warning Signs
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Intermittent Eye Discomfort</div>
                    <p className="text-[var(--color-muted)] text-sm">Periodic mild eye pain or discomfort that comes and goes, often in dim lighting.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Temporary Vision Changes</div>
                    <p className="text-[var(--color-muted)] text-sm">Brief episodes of blurred vision or seeing halos that resolve on their own.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Peripheral Vision Loss</div>
                    <p className="text-[var(--color-muted)] text-sm">Gradual narrowing of side vision that may go unnoticed until significant damage occurs.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Difficulty Adjusting to Darkness</div>
                    <p className="text-[var(--color-muted)] text-sm">Trouble adapting vision when moving from bright to dark environments.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Family History Concerns</div>
                    <p className="text-[var(--color-muted)] text-sm">Having close relatives with glaucoma significantly increases your risk of developing the condition.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Pupil Dilation Triggers</div>
                    <p className="text-[var(--color-muted)] text-sm">Symptoms that worsen after pupil dilation from medications or dim lighting conditions.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Eye Pressure Concerns</div>
                    <p className="text-[var(--color-muted)] text-sm">Elevated eye pressure detected during routine eye exams even without symptoms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Acute angle-closure glaucoma is a medical emergency requiring immediate care to prevent permanent vision loss.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Treat Narrow-Angle Glaucoma
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough evaluation including gonioscopy to examine the drainage angle structure, tonometry to measure intraocular pressure, and optical coherence tomography (OCT) to assess optic nerve health. We also perform visual field testing to detect any existing vision loss and evaluate both eyes, as narrow angles often affect both eyes even if symptoms appear in only one. This complete assessment allows us to determine the urgency of treatment and develop the most appropriate care plan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.071 0 4.243a3 3 0 01-4.243 0l-1.402-1.402m0 0l-.364-.364m.364.364l2.121-2.121" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Individualized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For acute attacks, we immediately lower eye pressure using medications including topical beta-blockers, alpha-agonists, carbonic anhydrase inhibitors, and sometimes oral or intravenous pressure-lowering drugs. Once pressure is controlled, we typically perform laser peripheral iridotomy (LPI), a quick outpatient procedure that creates a small opening in the iris to allow fluid to flow properly and prevent future attacks. For chronic narrow angles at risk of closure, we may recommend preventive laser treatment before symptoms develop. Our approach is customized based on the severity of your condition, angle anatomy, and overall eye health.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Ongoing Monitoring & Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                After treatment, we schedule regular follow-up appointments to monitor your eye pressure, check the laser opening remains functional, and assess optic nerve health. We typically see patients within days after laser treatment, then at increasing intervals based on stability. Long-term management may include continued pressure monitoring, periodic visual field testing, and sometimes maintenance medications to ensure optimal pressure control. We educate you about warning signs of future problems and provide clear instructions on when to seek immediate care. Our goal is to preserve your vision through proactive monitoring and timely intervention if needed.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
              Evidence-Based Treatment Modalities
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our treatment approach is grounded in the latest clinical research and established best practices in glaucoma care. Laser peripheral iridotomy (LPI) is the gold-standard treatment for narrow-angle glaucoma, with decades of research demonstrating its effectiveness in preventing acute attacks and preserving vision. The procedure typically takes just minutes, is performed with topical anesthesia, and has a high success rate with minimal discomfort.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We utilize advanced imaging technology including anterior segment OCT and ultrasound biomicroscopy when needed to precisely evaluate angle anatomy and guide treatment decisions. For patients who require additional pressure control, we may prescribe prostaglandin analogs, beta-blockers, alpha-agonists, or carbonic anhydrase inhibitors based on your specific needs and health profile. In rare cases where laser treatment is insufficient, we coordinate surgical options including lens extraction or filtration surgery with experienced ophthalmologic surgeons. Every treatment recommendation is made with your individual circumstances, risk factors, and vision preservation goals in mind.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Why Choose Spark Eye Care for Narrow-Angle Glaucoma Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our team includes board-certified eye care professionals with specialized training in glaucoma diagnosis and management, ensuring you receive expert care based on the latest clinical guidelines.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient's anatomy and risk factors are unique. Your treatment plan is customized to your specific angle structure, pressure levels, and vision preservation needs.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Advanced Diagnostic Technology</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We utilize state-of-the-art imaging including OCT, gonioscopy, and advanced pressure monitoring to accurately diagnose narrow angles and track treatment effectiveness.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Emergency & Urgent Care Access</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We understand that acute angle-closure glaucoma is a medical emergency. We prioritize urgent appointments and provide clear guidance on accessing immediate care when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Your Treatment Journey
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-6xl font-light text-[var(--color-primary)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>01</div>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Initial Evaluation (Week 1)
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your first visit includes a comprehensive eye examination with gonioscopy to assess your drainage angles, tonometry to measure eye pressure, dilated fundus exam to evaluate the optic nerve, and visual field testing if indicated. We review your medical history, current medications, and family history of eye disease. For acute presentations, immediate pressure-lowering treatment begins during this visit. For chronic narrow angles, we discuss your risk level and preventive treatment options. This appointment typically takes 60-90 minutes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-6xl font-light text-[var(--color-primary)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>02</div>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Treatment Begins (Weeks 1-2)
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                If laser peripheral iridotomy is recommended, we schedule this procedure within days to weeks depending on urgency. The laser treatment is performed in-office with topical anesthesia and typically takes 5-10 minutes per eye. You may experience mild discomfort during the procedure and light sensitivity afterward. Most patients return to normal activities the next day. We often treat both eyes even if only one is symptomatic, as narrow angles usually affect both eyes. Pressure-lowering medications may be prescribed temporarily or long-term based on your specific situation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-6xl font-light text-[var(--color-primary)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>03</div>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Progress Review (Months 1-3)
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We schedule follow-up appointments to ensure the laser opening remains patent and eye pressure stays in a healthy range. These visits include pressure checks, angle examination, and assessment of any changes in vision or symptoms. Most patients experience significant improvement within weeks of treatment, with reduced risk of acute attacks and stable pressures. We adjust medications if needed and address any concerns you may have. The frequency of these visits depends on your pressure control and overall stability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-6xl font-light text-[var(--color-primary)] mb-3" style={{fontFamily: 'var(--font-cormorant)'}}>04</div>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Long-Term Management (Ongoing)
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Once your condition is stable, we transition to regular monitoring appointments every 6-12 months or as recommended based on your individual risk factors. These visits include pressure measurements, optic nerve evaluation, and periodic visual field testing to ensure no progression of damage. We continue to educate you about warning signs that require urgent attention and adjust your care plan as needed. With successful laser treatment, most patients maintain stable pressures and preserved vision long-term. Our goal is to partner with you in preventing vision loss through consistent monitoring and proactive management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Frequently Asked Questions About Narrow-Angle Glaucoma
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                What is the difference between narrow-angle and open-angle glaucoma?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The main difference lies in the anatomy of the drainage angle. In open-angle glaucoma, the drainage angle remains open but the drainage system doesn't function properly, causing pressure to rise slowly over time. In narrow-angle glaucoma, the angle itself is too narrow or becomes blocked by the iris, preventing fluid drainage. Narrow-angle glaucoma can cause sudden, severe pressure increases (acute angle-closure) requiring emergency treatment, while open-angle glaucoma typically develops gradually without symptoms. Narrow-angle glaucoma is less common but more immediately dangerous, making prompt diagnosis and preventive treatment essential.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                How long does laser peripheral iridotomy take and does it hurt?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Laser peripheral iridotomy (LPI) is a quick outpatient procedure that typically takes only 5-10 minutes per eye. The procedure is performed with topical anesthetic drops to numb the eye, so most patients experience minimal discomfort. You may feel slight pressure when the contact lens is placed on your eye and may notice bright flashes of light during the laser application, but the procedure itself is generally well-tolerated. Some patients report mild discomfort or a scratchy sensation for a few hours afterward, and you may experience temporary light sensitivity or blurred vision. Most people return to normal activities the next day, though we recommend having someone drive you home after the procedure.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Will I need to take glaucoma medications after laser treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Medication needs vary by individual. Many patients with narrow-angle glaucoma who undergo successful laser peripheral iridotomy do not require long-term pressure-lowering medications, as the laser opening allows normal fluid drainage. However, some patients may need continued medications if they have additional pressure elevation from other causes, if there's existing optic nerve damage, or if the laser opening alone doesn't provide adequate pressure control. You'll typically use anti-inflammatory drops for about a week after the laser procedure. We'll monitor your pressure at follow-up visits and make personalized recommendations about whether ongoing medication is necessary. Our goal is to use the least medication needed to maintain safe pressure levels.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Does insurance cover narrow-angle glaucoma treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans, including Medicare, cover glaucoma diagnosis and treatment as it is considered a medical necessity to prevent vision loss. This typically includes comprehensive eye exams, diagnostic testing such as gonioscopy and OCT, laser peripheral iridotomy, and follow-up care. Coverage details vary by plan, and you may have copays, deductibles, or coinsurance depending on your specific insurance. We recommend contacting your insurance provider to understand your benefits and out-of-pocket costs. Our billing staff can help verify your coverage and answer questions about costs. Vision insurance (VSP, EyeMed) typically covers routine eye exams but may not cover medical glaucoma treatment, which would fall under your medical insurance.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Can narrow-angle glaucoma be prevented if caught early?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, this is one of the most important aspects of narrow-angle glaucoma care. When narrow drainage angles are detected during routine eye exams before an acute attack occurs, prophylactic laser peripheral iridotomy can prevent acute angle-closure glaucoma from ever developing. This preventive approach is highly effective and is why comprehensive eye exams that include angle evaluation are so important, especially for people over 40, those with family history of glaucoma, or individuals of Asian descent who have higher risk. Early detection and preventive treatment can eliminate the risk of sudden, vision-threatening pressure spikes and preserve long-term vision health. This is why we emphasize the importance of regular eye examinations even when you have no symptoms.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] flex justify-between items-center">
                What should I do if I experience sudden eye pain or vision changes?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Sudden eye pain, severe vision loss, seeing halos around lights, nausea, or a red, swollen eye are potential signs of acute angle-closure glaucoma and constitute a medical emergency. If you experience these symptoms, contact us immediately or go to the nearest emergency room. Time is critical in acute angle-closure—treatment within hours can prevent permanent vision loss, while delays can result in irreversible damage. Even if symptoms improve on their own, you should still seek urgent evaluation as this may indicate intermittent angle closure that could progress to a complete attack. We prioritize urgent appointments for patients with concerning symptoms and provide after-hours emergency guidance. Never wait to see if symptoms improve on their own when it comes to sudden, severe eye pain or vision changes.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/glaucoma" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Open-Angle Glaucoma</h4>
              <p className="text-[var(--color-muted)]">
                Comprehensive diagnosis and management of chronic open-angle glaucoma with pressure monitoring and optic nerve care.
              </p>
            </a>
            
            <a href="/conditions/cataracts" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Cataracts</h4>
              <p className="text-[var(--color-muted)]">
                Evaluation and co-management of cataracts, which can sometimes contribute to narrow-angle anatomy.
              </p>
            </a>
            
            <a href="/conditions/diabetic-retinopathy" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.071 0 4.243a3 3 0 01-4.243 0l-1.402-1.402m0 0l-.364-.364m.364.364l2.121-2.121" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)]">
                Comprehensive diabetic eye care and retinopathy management to prevent vision complications.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Get Help for Narrow-Angle Glaucoma Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face narrow-angle glaucoma alone. Our team is ready to help protect your vision with expert diagnosis and treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule an Appointment
            </a>
            <a 
              href="/conditions" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}