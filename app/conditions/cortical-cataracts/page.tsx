import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cortical Cataracts Treatment in Kyle | Spark Eye Care',
  description: 'Expert cortical cataracts treatment in Kyle. Board-certified eye care specialists offering comprehensive evaluation and advanced surgical solutions for clearer vision.',
  keywords: 'cortical cataracts treatment Kyle, cortical cataracts Kyle, cataract surgery Kyle, eye doctor Kyle, vision problems Kyle',
  openGraph: {
    title: 'Cortical Cataracts Treatment in Kyle | Spark Eye Care',
    description: 'Expert cortical cataracts treatment in Kyle. Board-certified eye care specialists offering comprehensive evaluation and advanced surgical solutions.',
    url: 'https://www.sparkeyetx.com/conditions/cortical-cataracts',
    type: 'website',
    locale: 'en_US',
    siteName: 'Spark Eye Care',
  },
}

export default function CorticalCataractsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Cortical Cataracts</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl font-light mb-6 leading-tight">
            Cortical Cataracts Treatment in Kyle
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Cortical cataracts form distinctive spoke-like opacities in the outer lens cortex, gradually affecting your ability to see clearly in bright light and causing troublesome glare. At Spark Eye Care, we provide comprehensive diagnostic evaluation and advanced surgical treatment options to restore your clear vision and improve your quality of life.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/AdobeStock_637490792.jpeg"
                alt="Couple enjoying clear vision after cataract care"
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

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Cortical Cataracts
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Cortical cataracts are a specific type of age-related cataract that begins in the outer edge of the lens cortex and progresses inward with characteristic wedge-shaped opacities that resemble spokes on a wheel. These cataracts develop when water accumulates in the lens fibers, creating clefts and white streaks that scatter light as it enters the eye. Cortical cataracts represent approximately 20-25% of all age-related cataracts and typically develop in both eyes, though often at different rates. Unlike nuclear cataracts that primarily affect distance vision, cortical cataracts are particularly problematic because they interfere with contrast sensitivity and cause significant glare, especially in bright sunlight or when driving at night with oncoming headlights. Many patients first notice difficulty reading in bright light or experience a "halo effect" around lights, symptoms that gradually worsen as the opacities extend toward the center of the lens. The condition can significantly impact daily activities such as driving, reading, and recognizing faces, leading to decreased independence and quality of life if left untreated.
            </p>
            <p>
              Several risk factors contribute to the development of cortical cataracts, with age being the most significant—most cases occur after age 60, though they can develop earlier in certain circumstances. Diabetes is strongly associated with cortical cataract formation, as fluctuating blood sugar levels cause osmotic changes within the lens that accelerate opacity development. Prolonged exposure to ultraviolet radiation without adequate eye protection significantly increases risk, which is why cortical cataracts are more prevalent in geographic regions with high sun exposure. Other contributing factors include long-term use of corticosteroid medications, previous eye trauma or inflammation, smoking, excessive alcohol consumption, and certain genetic predispositions. Women appear to develop cortical cataracts at slightly higher rates than men, possibly due to hormonal influences. Nutritional factors such as vitamin deficiency and oxidation may also play a role in lens protein degradation. Additionally, conditions causing chronic dehydration or electrolyte imbalances can contribute to the water clefts characteristic of cortical cataracts. Understanding these risk factors allows for better prevention strategies and earlier detection in at-risk populations.
            </p>
            <p>
              Professional evaluation and treatment of cortical cataracts is essential because this condition is progressive and will not improve with glasses, eye drops, or lifestyle changes alone. While early-stage cortical cataracts may be managed with updated prescriptions, anti-glare coatings, and enhanced lighting, surgical intervention becomes necessary when vision impairment affects your daily functioning and quality of life. Modern cataract surgery is one of the most successful and commonly performed procedures in medicine, with a success rate exceeding 98% when performed by experienced surgeons. Delaying treatment when cataracts significantly impact your vision can lead to unnecessary struggles with daily activities, increased fall risk due to impaired depth perception and glare sensitivity, and in rare cases, complications such as lens-induced inflammation if the cataract becomes hypermature. At Spark Eye Care, our board-certified eye care specialists utilize advanced diagnostic technology to accurately assess the extent of cortical cataract development, determine optimal timing for surgical intervention, and provide comprehensive pre-operative and post-operative care. We partner with experienced cataract surgeons who employ state-of-the-art techniques including phacoemulsification with premium intraocular lens options, ensuring you receive personalized treatment that addresses your specific visual needs and lifestyle goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Cortical Cataracts
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Visual & Functional Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Glare Sensitivity</p>
                    <p className="text-[var(--color-muted)]">Excessive sensitivity to bright lights, especially sunlight and oncoming headlights while driving at night.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Halos Around Lights</p>
                    <p className="text-[var(--color-muted)]">Seeing circular halos or starbursts around light sources, particularly noticeable at night or in low-light conditions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Decreased Contrast Sensitivity</p>
                    <p className="text-[var(--color-muted)]">Difficulty distinguishing objects from their background, especially in low contrast situations or dim lighting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Reading in Bright Light</p>
                    <p className="text-[var(--color-muted)]">Paradoxically, increased light makes reading more difficult due to glare and light scattering within the lens.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blurred or Cloudy Vision</p>
                    <p className="text-[var(--color-muted)]">Progressive blurring that cannot be corrected with glasses or contact lenses, worsening over months to years.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frequent Prescription Changes</p>
                    <p className="text-[var(--color-muted)]">Needing new eyeglass prescriptions more frequently as the cataract progression alters your refractive error.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Double Vision in One Eye</p>
                    <p className="text-[var(--color-muted)]">Monocular diplopia where you see double images with one eye closed, caused by irregular light refraction through the lens.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Daily Life Impact</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Driving Difficulties</p>
                    <p className="text-[var(--color-muted)]">Reduced confidence while driving, especially at night or in bright sunlight, due to glare and reduced visibility.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty with Fine Detail Work</p>
                    <p className="text-[var(--color-muted)]">Challenges with activities requiring detailed vision such as sewing, crafts, reading small print, or computer work.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Trouble Recognizing Faces</p>
                    <p className="text-[var(--color-muted)]">Reduced ability to see facial features clearly from a distance, affecting social interactions and safety awareness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Increased Fall Risk</p>
                    <p className="text-[var(--color-muted)]">Greater susceptibility to trips and falls due to impaired depth perception and difficulty seeing obstacles or steps.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Reduced Independence</p>
                    <p className="text-[var(--color-muted)]">Increasing reliance on others for transportation, reading assistance, and daily tasks as vision deteriorates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frustration with Outdoor Activities</p>
                    <p className="text-[var(--color-muted)]">Avoidance of outdoor recreation and social activities due to severe glare sensitivity and visual discomfort in sunlight.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Decreased Quality of Life</p>
                    <p className="text-[var(--color-muted)]">Overall reduction in life satisfaction and well-being due to cumulative impact of vision impairment on daily activities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Our team at Spark Eye Care can evaluate your symptoms and develop a personalized treatment plan to restore your clear vision.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Cortical Cataracts
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination including visual acuity testing, slit-lamp biomicroscopy to visualize the cortical opacities, dilated fundus examination, and measurement of intraocular pressure. We utilize advanced diagnostic technology including optical coherence tomography and corneal topography to assess overall eye health and rule out other conditions. This comprehensive evaluation allows us to determine the extent of cataract development and whether surgery is appropriate for your situation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                <path d="M9 12h6m-6 4h6" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your evaluation results, lifestyle needs, and visual goals, we develop a customized treatment approach. For early-stage cortical cataracts, we may recommend non-surgical management including updated eyeglass prescriptions, anti-glare coatings, polarized sunglasses, and enhanced lighting strategies. When cataracts significantly impact your daily activities, we coordinate surgical referral to trusted cataract surgeons who specialize in advanced phacoemulsification techniques. We help you understand intraocular lens options including monofocal, multifocal, and toric lenses to address astigmatism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For patients not yet ready for surgery, we provide regular monitoring appointments to track cataract progression and adjust management strategies as needed. Following cataract surgery, we deliver comprehensive post-operative care including same-day follow-up, monitoring for complications, managing any post-surgical inflammation, and ensuring optimal healing and visual recovery. We continue long-term eye health monitoring to address any other ocular conditions and ensure your vision remains clear and comfortable for years to come.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
              At Spark Eye Care, our approach to cortical cataract treatment is grounded in evidence-based medicine and the latest advances in ophthalmic care. When surgery becomes necessary, modern phacoemulsification cataract surgery is performed as an outpatient procedure under local anesthesia, typically taking 15-20 minutes per eye. The cloudy natural lens is broken up using ultrasonic energy and removed through a tiny incision, then replaced with a clear artificial intraocular lens that becomes a permanent part of your eye. This procedure has an exceptional safety profile with over 98% success rate and most patients experience dramatic vision improvement within days.
            </p>
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              For patients managing early cortical cataracts, we emphasize UV protection through quality sunglasses, optimal management of diabetes and other systemic conditions, nutritional support with antioxidant-rich diets, and regular monitoring to determine the ideal timing for surgical intervention. We partner closely with experienced cataract surgeons throughout Central Texas to ensure seamless coordination of your care from initial evaluation through surgical treatment and post-operative recovery. Our goal is to restore your clear, comfortable vision and help you return to the activities you love.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Cortical Cataracts Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our eye care specialists are board-certified with extensive training in comprehensive eye health, cataract evaluation, and medical-surgical co-management.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Care</h3>
              <p className="text-[var(--color-muted)]">
                We understand that every patient's visual needs and lifestyle are unique. Your treatment plan is customized specifically for your situation and goals.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Advanced Technology</h3>
              <p className="text-[var(--color-muted)]">
                We utilize state-of-the-art diagnostic equipment to accurately assess cataract development and overall eye health for optimal treatment planning.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Comprehensive Experience</h3>
              <p className="text-[var(--color-muted)]">
                With years of experience managing cortical cataracts and coordinating surgical care, we provide expert guidance throughout your entire treatment journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 animate-fade-up">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-['Cormorant'] text-3xl font-light">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination includes detailed assessment of your visual symptoms, medical history review, complete eye health evaluation with dilation, and advanced diagnostic testing to determine the extent of cortical cataract development. We discuss your findings in detail, answer all your questions, and explain treatment options appropriate for your stage of cataract. If surgery is recommended, we provide referrals to trusted cataract surgeons and coordinate all aspects of your care. For early-stage cataracts, we develop a monitoring plan and discuss strategies to optimize your vision in the meantime.
                </p>
              </div>
            </div>
            <div className="flex gap-6 animate-fade-up">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-['Cormorant'] text-3xl font-light">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  For patients proceeding with cataract surgery, pre-operative measurements and testing are completed to determine the optimal intraocular lens power and type for your needs. The surgical procedure itself is performed as an outpatient procedure, typically taking 15-20 minutes, with local anesthesia and mild sedation for comfort. Most patients experience minimal discomfort and are able to go home the same day with a protective eye shield. Post-operative eye drops are prescribed to prevent infection and reduce inflammation. Vision typically begins improving within the first few days, though complete healing takes several weeks.
                </p>
              </div>
            </div>
            <div className="flex gap-6 animate-fade-up">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-['Cormorant'] text-3xl font-light">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Following cataract surgery, we provide comprehensive post-operative care including follow-up examinations at one day, one week, and one month to monitor healing and visual recovery. We assess for any complications such as inflammation, infection, or posterior capsule opacification, and adjust treatment as needed. Most patients experience dramatic improvement in vision clarity, reduced glare sensitivity, and enhanced ability to perform daily activities. If you had surgery on one eye, we evaluate whether surgery on the second eye is recommended. A final refraction determines if glasses are needed for optimal vision at all distances.
                </p>
              </div>
            </div>
            <div className="flex gap-6 animate-fade-up">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-['Cormorant'] text-3xl font-light">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After successful cataract surgery and visual recovery, we recommend annual comprehensive eye examinations to monitor for other age-related eye conditions such as glaucoma, macular degeneration, and diabetic retinopathy. In some cases, posterior capsule opacification (clouding of the membrane behind the intraocular lens) can develop months or years after surgery, causing vision to become hazy again. This is easily treated with a quick, painless laser procedure called YAG capsulotomy that restores clear vision. We remain your long-term partner in maintaining optimal eye health and clear vision throughout your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Cortical Cataracts
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does cortical cataract treatment take?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                The timeline varies depending on the stage of your cataract and chosen treatment approach. If you're not yet ready for surgery, we may monitor your condition with annual or semi-annual examinations for months or years while managing symptoms with updated glasses and lifestyle modifications. When surgery becomes necessary, the procedure itself takes only 15-20 minutes per eye, with most visual recovery occurring within the first few days to weeks. Complete healing typically takes 4-8 weeks, after which a final glasses prescription can be determined if needed. Many patients choose to have the second eye done 1-2 weeks after the first eye has healed. The entire process from initial evaluation to final post-operative check is usually completed within 2-3 months per eye.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can cortical cataracts be treated with medication or eye drops?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Unfortunately, no eye drops, medications, or nutritional supplements can reverse or eliminate cortical cataracts once they have formed. The only definitive treatment for visually significant cataracts is surgical removal and replacement with an artificial intraocular lens. However, in early stages when cataracts are not yet significantly impacting your daily activities, updated eyeglass prescriptions, anti-glare coatings, polarized sunglasses, and enhanced lighting can help manage symptoms and maximize your functional vision. Additionally, managing underlying conditions like diabetes, protecting your eyes from UV radiation, and maintaining overall health may help slow cataract progression. When cataracts advance to the point of interfering with your quality of life, surgery becomes the appropriate and highly successful treatment option.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover cortical cataract treatment?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Yes, cataract evaluation and surgery are generally well-covered by medical insurance including Medicare when the cataract is deemed medically necessary and significantly impacting your vision and daily functioning. Comprehensive eye examinations, diagnostic testing, standard cataract surgery with monofocal intraocular lenses, and post-operative care are typically covered benefits. However, premium intraocular lens options such as multifocal, accommodating, or toric lenses that reduce dependence on glasses may have an additional out-of-pocket cost not covered by insurance. We work with most major insurance plans and will verify your specific benefits prior to scheduling any procedures. Our staff can provide detailed cost estimates and discuss financing options if needed. Vision insurance plans may cover routine eye exams but typically do not cover medical eye conditions like cataracts, which are billed to your medical insurance.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if I delay treatment for my cortical cataracts?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                If your cortical cataracts are in early stages and not significantly affecting your vision or daily activities, it is perfectly appropriate to delay surgery and continue with conservative management and regular monitoring. Cataracts do not harm the eye simply by being present, and surgery can be safely performed when you and your doctor determine the time is right. However, once cataracts are significantly impacting your quality of life, unnecessarily delaying surgery means continuing to struggle with impaired vision, increased fall risk, driving difficulties, and reduced independence. Very advanced cataracts can become more difficult to remove surgically and may slightly increase surgical complications. Additionally, living with poor vision due to cataracts can negatively affect your mental health, social engagement, and overall well-being. The decision about timing should be based on how much the cataracts are affecting your daily life and whether you're ready to proceed with surgery.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Is cataract surgery safe and what is the success rate?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                Modern cataract surgery is one of the safest and most successful procedures in all of medicine, with a success rate exceeding 98% when performed by experienced surgeons. Serious complications are rare, occurring in less than 2% of cases, and may include infection, bleeding, retinal detachment, or significant inflammation. Minor temporary side effects such as dry eye, light sensitivity, and mild discomfort are common but typically resolve within weeks. The procedure is performed under local anesthesia as an outpatient surgery, and most patients experience dramatic improvement in vision within days. Advances in surgical techniques, intraocular lens technology, and pre-operative evaluation have made the procedure safer and more predictable than ever before. At Spark Eye Care, we partner with highly skilled, experienced cataract surgeons who utilize the latest phacoemulsification technology and maintain excellent surgical outcomes.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can cortical cataract evaluations be done via telehealth?
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)]">
                While comprehensive cataract evaluation requires in-person examination with specialized equipment including slit-lamp biomicroscopy, dilated fundus exam, and precise measurements for surgical planning, telehealth can play a supportive role in your care. Initial consultations to discuss symptoms, review medical history, and determine whether an in-person examination is needed can be conducted virtually. Telehealth is also valuable for post-operative follow-up visits in certain circumstances, answering questions about your treatment plan, discussing surgical options and intraocular lens choices, and providing guidance on managing early-stage cataracts. However, the critical diagnostic examination, pre-operative measurements, and immediate post-operative care must be performed in person to ensure accurate assessment and optimal surgical outcomes. We offer flexible scheduling for in-person visits at our Kyle location and can supplement with telehealth appointments when appropriate for your specific situation.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/nuclear-sclerotic-cataracts" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Nuclear Cataracts
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Clouding of the central lens nucleus causing progressive nearsightedness and difficulty with distance vision, especially at night.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
            <Link href="/conditions/posterior-subcapsular-cataracts" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Posterior Subcapsular Cataracts
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Opacity forming on the back surface of the lens capsule, causing glare sensitivity and difficulty reading despite good distance vision.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
            <Link href="/conditions/diabetic-retinopathy" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Diabetic Retinopathy
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Diabetes-related damage to retinal blood vessels that can lead to vision loss, often occurring alongside accelerated cataract development.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-4">
            Get Help for Cortical Cataracts Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            You don't have to face cortical cataracts alone. Our team is ready to help you restore clear vision and improve your quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              Schedule Your Evaluation
            </Link>
            <Link 
              href="/conditions" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}