import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refractive Errors Treatment in Kyle | Spark Eye Care',
  description: 'Expert refractive errors treatment in Kyle. Comprehensive vision correction for nearsightedness, farsightedness, astigmatism, and presbyopia. Schedule your consultation today.',
  keywords: 'refractive errors treatment Kyle, vision correction Kyle, nearsightedness Kyle, farsightedness Kyle, astigmatism treatment, presbyopia treatment, eye care Kyle',
  openGraph: {
    title: 'Refractive Errors Treatment in Kyle | Spark Eye Care',
    description: 'Expert refractive errors treatment in Kyle. Comprehensive vision correction for nearsightedness, farsightedness, astigmatism, and presbyopia.',
    url: 'https://www.sparkeyetx.com/conditions/refractive-errors',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function RefractiveErrorsPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Refractive Errors</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Refractive Errors Treatment in Kyle
          </h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Refractive errors affect how your eyes focus light, causing blurred vision that impacts every aspect of your daily life. At Spark Eye Care, we provide comprehensive vision correction solutions tailored to your unique needs, helping you see clearly and live fully.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Refractive Errors
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Refractive errors are the most common vision problems affecting people worldwide, impacting approximately 150 million Americans alone. These conditions occur when the shape of your eye prevents light from focusing correctly on the retina, resulting in blurred or distorted vision. The four primary types of refractive errors include myopia (nearsightedness), hyperopia (farsightedness), astigmatism (irregular corneal curvature), and presbyopia (age-related focusing difficulty). While refractive errors can affect anyone at any age, they significantly impact quality of life—making it difficult to read, drive, work on computers, recognize faces, and perform everyday tasks that require clear vision. Many people live with uncorrected or under-corrected refractive errors, experiencing unnecessary eyestrain, headaches, and reduced productivity when effective solutions are readily available.
            </p>
            
            <p>
              The causes of refractive errors stem from variations in eye anatomy and natural aging processes. Myopia typically develops when the eyeball is too long or the cornea is too curved, causing distant objects to appear blurry while near objects remain clear. Hyperopia occurs when the eyeball is too short or the cornea is too flat, making close-up tasks challenging while distance vision may remain relatively unaffected. Astigmatism results from an irregularly shaped cornea or lens that prevents light from focusing evenly on the retina, causing distorted or blurred vision at all distances. Presbyopia is a natural part of aging that typically begins around age 40, when the eye's lens loses flexibility and makes focusing on close objects increasingly difficult. Risk factors include genetics (family history strongly predicts refractive errors), prolonged near work and screen time, insufficient outdoor time during childhood development, certain systemic health conditions like diabetes, and environmental factors that affect eye development and function.
            </p>
            
            <p>
              Professional treatment for refractive errors is essential because untreated vision problems create far-reaching consequences beyond simple blurriness. Children with uncorrected refractive errors often struggle academically, experience behavioral issues misattributed to learning disabilities, and may develop permanent vision problems like amblyopia if not addressed during critical developmental periods. Adults face decreased work performance, increased accident risk while driving or operating machinery, chronic headaches and eye fatigue, and reduced quality of life that affects social engagement and mental wellbeing. At Spark Eye Care, we understand that clear vision is fundamental to your health, safety, and happiness. Our comprehensive approach goes beyond simply prescribing glasses or contact lenses—we thoroughly evaluate your visual system, discuss your lifestyle and visual demands, and develop personalized correction strategies that optimize your vision for how you actually live and work. Whether you're experiencing your first vision changes or seeking better solutions for long-standing refractive errors, our team provides the expertise and individualized care you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Refractive Errors
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-8">Visual Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Blurred Vision at Distance or Near</p>
                    <p className="text-[var(--color-muted)]">Objects appear fuzzy, unclear, or out of focus at specific distances, making it difficult to see details clearly.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Reading Small Print</p>
                    <p className="text-[var(--color-muted)]">Text appears blurry or requires holding materials at arm's length to see clearly, especially common with presbyopia.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Distorted or Double Vision</p>
                    <p className="text-[var(--color-muted)]">Objects may appear stretched, wavy, or doubled, particularly with astigmatism or uncorrected high refractive errors.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Halos Around Lights</p>
                    <p className="text-[var(--color-muted)]">Glare, starbursts, or rings appear around lights at night, making driving after dark particularly challenging.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Seeing the Whiteboard or TV</p>
                    <p className="text-[var(--color-muted)]">Students and adults struggle to see presentations, screens, or distant objects clearly from their normal viewing position.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Reduced Night Vision</p>
                    <p className="text-[var(--color-muted)]">Vision becomes noticeably worse in low-light conditions, with increased difficulty distinguishing objects in dim environments.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Computer Vision Strain</p>
                    <p className="text-[var(--color-muted)]">Digital screens become increasingly difficult to view comfortably, with text appearing blurry after extended computer work.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-8">Physical & Behavioral Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Frequent Headaches</p>
                    <p className="text-[var(--color-muted)]">Tension headaches, especially around the forehead and temples, develop after visual tasks due to constant focusing effort.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Eye Strain and Fatigue</p>
                    <p className="text-[var(--color-muted)]">Eyes feel tired, heavy, or uncomfortable after reading, computer work, or other activities requiring sustained visual focus.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Squinting Frequently</p>
                    <p className="text-[var(--color-muted)]">Narrowing eyes to see more clearly becomes an unconscious habit, often accompanied by frowning or facial tension.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Excessive Eye Rubbing</p>
                    <p className="text-[var(--color-muted)]">Persistent eye rubbing to temporarily improve clarity or relieve discomfort, particularly in children with refractive errors.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Sitting Too Close to Screens</p>
                    <p className="text-[var(--color-muted)]">Moving closer to televisions, computers, or reading materials to compensate for blurry vision at normal distances.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Academic or Work Performance Decline</p>
                    <p className="text-[var(--color-muted)]">Difficulty concentrating, reduced productivity, or declining grades due to unrecognized vision problems affecting learning and work.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Avoiding Reading or Visual Tasks</p>
                    <p className="text-[var(--color-muted)]">Loss of interest in reading, hobbies, or activities that require clear vision due to discomfort or frustration.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Driving at Night</p>
                    <p className="text-[var(--color-muted)]">Increased anxiety or avoiding nighttime driving due to glare, halos, or reduced visual clarity in low-light conditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes, improved quality of life, and prevents the development of additional vision complications. Schedule a comprehensive eye examination to discover your clearest vision yet.
          </p>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Refractive Errors
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination that measures your exact refractive error, evaluates overall eye health, and assesses how your eyes work together. We use advanced diagnostic technology including autorefraction, retinoscopy, and subjective refraction to precisely determine your prescription. Our evaluation also considers your lifestyle, visual demands, occupational requirements, and personal preferences to ensure any correction strategy aligns perfectly with how you live and work.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Personalized Correction Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment results, we develop a customized vision correction strategy tailored to your specific needs. Options may include prescription eyeglasses designed for your primary visual tasks, contact lenses suited to your lifestyle and eye health, or referrals for refractive surgery consultations when appropriate. We discuss the advantages and considerations of each option, ensuring you make informed decisions about your eye care. Your correction plan considers not just your current vision needs but also anticipates future changes and provides strategies for optimal long-term visual health.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Refractive errors can change over time, so we provide continuous care to ensure your vision remains optimal. Regular follow-up examinations monitor prescription changes, assess eye health for conditions that may affect vision, and adjust your correction strategy as your needs evolve. We provide guidance on proper eyewear maintenance, contact lens care protocols, and strategies to reduce digital eye strain. Our team remains available to address concerns, troubleshoot any issues with your current correction, and ensure you're always seeing your absolute best.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our evidence-based approach to treating refractive errors combines time-tested optometric principles with cutting-edge technology. We utilize precision refraction techniques that account for both objective measurements and your subjective visual experience, ensuring prescriptions that provide not just clarity but also comfort. For patients requiring specialized corrections, we offer advanced solutions including progressive lenses for seamless multifocal vision, specialty contact lenses for astigmatism or presbyopia, orthokeratology for myopia control in children, and low vision aids when standard corrections aren't sufficient. Our practice stays current with the latest research in myopia management, particularly important for children whose refractive errors may progress without proper intervention. We also provide blue light filtering options, computer-specific glasses, and occupational lenses designed for specific visual tasks. Every correction we prescribe considers the full spectrum of your visual needs—from driving safety to digital device comfort to quality of life improvements that clear vision provides.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Refractive Errors Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="mb-6 flex justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Expert Credentials</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our optometrists are board-certified with extensive training in refractive error diagnosis and management, ensuring you receive the highest standard of care based on the latest clinical evidence.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="mb-6 flex justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Personalized Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient's vision needs are unique. Our individualized treatment plans consider your lifestyle, occupation, hobbies, and personal preferences to optimize your visual outcomes.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="mb-6 flex justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Convenient Care Options</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer flexible scheduling including evening and weekend appointments, and telehealth consultations for follow-up care, prescription adjustments, and addressing minor concerns without office visits.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="mb-6 flex justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Advanced Technology</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice utilizes state-of-the-art diagnostic equipment including digital refraction systems, corneal topography, and optical coherence tomography to ensure precise measurements and comprehensive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] font-light flex-shrink-0">01</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Initial Comprehensive Examination (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your first visit includes a complete visual assessment with advanced diagnostic testing to measure your exact refractive error, evaluate eye health, and assess binocular vision function. We discuss your symptoms, visual challenges, lifestyle needs, and goals for treatment. This appointment typically takes 60-90 minutes and concludes with a detailed discussion of your diagnosis and recommended correction options. You'll leave with a clear understanding of your vision condition and a personalized treatment plan.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] font-light flex-shrink-0">02</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Correction Implementation (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once you've selected your preferred correction method, we'll order your prescription eyeglasses or contact lenses with precision measurements ensuring optimal fit and performance. Glasses typically arrive within 1-2 weeks, while contact lenses may be available immediately for trial or ordered based on your specific parameters. We provide thorough instruction on proper use, care, and maintenance. Contact lens wearers receive comprehensive training on insertion, removal, cleaning protocols, and wearing schedules. Most patients adapt to new corrections within days, though some complex prescriptions may require a brief adjustment period.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] font-light flex-shrink-0">03</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Follow-Up & Fine-Tuning (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We schedule follow-up appointments to ensure your correction is performing optimally and you're experiencing the clear, comfortable vision you deserve. These visits allow us to address any adjustment concerns, verify that your prescription is accurate, and make refinements if needed. Contact lens wearers receive evaluations to assess lens fit, eye health response to lens wear, and vision quality. This is also an opportunity to explore additional correction options—such as computer glasses, sunglasses, or backup pairs—that enhance your visual experience in different situations.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] font-light flex-shrink-0">04</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Long-Term Vision Care (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Refractive errors change over time, particularly during childhood growth years and after age 40 when presbyopia develops. We recommend annual comprehensive eye examinations to monitor prescription changes, screen for eye diseases, and update your correction as needed. Between regular exams, we're available to address concerns, troubleshoot issues with current eyewear, and provide guidance on maintaining optimal eye health. Our long-term relationship with you ensures continuous, personalized care that adapts to your evolving vision needs throughout all life stages.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg border-l-4 border-[var(--color-primary)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Setting Realistic Expectations:</strong> Most patients experience immediate vision improvement once properly corrected, with complete adaptation occurring within days to two weeks. While refractive errors cannot be "cured" (they're anatomical variations in eye shape), appropriate correction restores clear, functional vision that dramatically improves quality of life. Some patients initially experience mild symptoms like depth perception changes or slight dizziness with new prescriptions—these adjustment symptoms are normal and typically resolve quickly. Our team provides ongoing support throughout your adaptation process, ensuring your journey to clearer vision is smooth and successful.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Refractive Errors
          </h2>
          
          <div className="space-y-6">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none">
                <span>How long does refractive error treatment take?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                The initial comprehensive examination takes 60-90 minutes, after which you'll receive your diagnosis and correction recommendations immediately. If you choose eyeglasses, they typically arrive within 1-2 weeks; contact lenses may be available for same-day trial or require ordering specific parameters. Most patients adapt to new corrections within 3-7 days, though complex prescriptions like progressive lenses or high astigmatism corrections may require 2-3 weeks for complete adaptation. Refractive errors are lifelong conditions requiring ongoing management—annual examinations ensure your correction remains optimal as your vision naturally changes over time.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none">
                <span>Is medication required for treating refractive errors?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                No, standard refractive errors do not require medication for treatment. The primary corrections are optical—prescription eyeglasses, contact lenses, or refractive surgery. However, some specialized treatments may involve pharmaceutical interventions: atropine eye drops for myopia control in children (to slow nearsightedness progression), artificial tears for dry eye associated with contact lens wear, or prescription eye drops for conditions coexisting with refractive errors. Your eye care team will discuss any relevant medication options if they apply to your specific situation, though most patients manage refractive errors successfully with optical correction alone.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none">
                <span>Does insurance cover refractive error treatment?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                Most vision insurance plans cover routine eye examinations annually or biennially, which include refractive error assessment and prescription determination. Many plans also provide allowances toward prescription eyeglasses or contact lenses, though coverage levels vary significantly by plan. Medical insurance typically covers eye examinations when medically necessary conditions are being evaluated or managed alongside refractive error assessment. We accept most major insurance plans and our staff will verify your benefits, explain your coverage, and help maximize your insurance benefits. For services not covered by insurance, we offer competitive self-pay rates and flexible payment options to ensure cost never prevents you from achieving clear vision.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none">
                <span>Can I get LASIK or other surgery to permanently fix my refractive error?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                Refractive surgery options like LASIK, PRK, and SMILE can effectively reduce or eliminate dependence on glasses and contact lenses for many patients. However, not everyone is a suitable candidate—factors including prescription stability, corneal thickness, eye health, age, and lifestyle all influence candidacy. During your comprehensive examination, we assess whether refractive surgery might be appropriate for you and provide honest, unbiased guidance. If you're a potential candidate, we offer co-management with experienced refractive surgeons, coordinating your pre-operative evaluation, surgical planning, and post-operative care. We'll help you understand realistic expectations, as presbyopia (age-related near vision loss) will still develop after age 40 regardless of previous refractive surgery.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none">
                <span>Will my refractive error get worse over time?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                Refractive error progression depends on your age, the type of error, and individual factors. Myopia typically progresses during childhood and adolescence, often stabilizing in the early twenties—though adult-onset myopia and continued progression can occur. Hyperopia may remain stable or decrease slightly with age until presbyopia develops. Astigmatism generally remains relatively stable unless corneal conditions develop. Presbyopia inevitably progresses from the early 40s through the early 60s as the eye's lens continues losing flexibility. While we cannot prevent natural age-related changes, we can implement myopia control strategies for children to slow nearsightedness progression, provide appropriate corrections that don't strain your visual system, and monitor your eyes for conditions that might affect refractive status. Wearing proper correction does not make your eyes "worse"—this is a persistent myth contradicted by clinical evidence.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none">
                <span>Can telehealth appointments work for refractive error management?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-[var(--color-muted)] leading-relaxed">
                While initial comprehensive examinations and prescription determinations require in-person visits with specialized equipment, telehealth is excellent for many follow-up needs. Virtual appointments work well for discussing eyewear concerns, troubleshooting contact lens issues, addressing adaptation questions, reviewing test results, providing guidance on lens care or eye health strategies, and determining whether symptoms require in-person evaluation. We also offer telehealth consultations for second opinions, pre-appointment discussions about treatment options, and post-adjustment check-ins. Our hybrid approach combines the precision of in-person diagnostic care with the convenience of virtual follow-up, ensuring you receive comprehensive treatment that fits your schedule and lifestyle.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS SECTION */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/dry-eye" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Dry Eye Syndrome</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Chronic eye dryness, irritation, and discomfort affecting vision quality and daily comfort, often coexisting with contact lens wear.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            
            <a href="/conditions/computer-vision-syndrome" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Computer Vision Syndrome</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Eye strain, headaches, and vision problems from prolonged digital device use, often exacerbated by uncorrected refractive errors.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            
            <a href="/conditions/presbyopia" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Presbyopia</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Age-related near vision loss affecting reading and close work, a natural type of refractive error developing after age 40.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Refractive Errors Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">
            You don't have to live with blurry vision. Our team is ready to help you see clearly and live fully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-all hover:scale-105 inline-block"
            >
              Schedule Your Eye Exam
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-all hover:scale-105 inline-block"
            >
              View All Conditions
            </a>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Serving Kyle and surrounding communities with exceptional eye care
          </p>
        </div>
      </section>

    </main>
  )
}