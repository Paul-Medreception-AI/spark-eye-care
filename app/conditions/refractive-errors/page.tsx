import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Refractive Errors Treatment in Kyle | Spark Eye Care',
  description: 'Expert refractive errors treatment in Kyle. Comprehensive eye exams, prescription eyewear, and advanced vision correction solutions. Schedule your consultation today.',
  openGraph: {
    title: 'Refractive Errors Treatment in Kyle | Spark Eye Care',
    description: 'Expert refractive errors treatment in Kyle. Comprehensive eye exams, prescription eyewear, and advanced vision correction solutions.',
    url: 'https://sparkeyetx.com/conditions/refractive-errors',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RefractiveErrorsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Refractive Errors</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Refractive Errors Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
            Blurry vision from myopia, hyperopia, or astigmatism affects millions of Americans, but clear sight is within reach. At Spark Eye Care, we provide comprehensive refractive error evaluation and treatment solutions to restore sharp, comfortable vision for all aspects of your life.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2748705.jpeg"
                alt="Refractive lens evaluation"
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

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Refractive Errors
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Refractive errors are the most common type of vision problem affecting Americans today, impacting approximately 150 million people across all age groups. These conditions occur when the shape of your eye prevents light from focusing correctly on the retina, resulting in blurred vision at various distances. The four primary types of refractive errors include myopia (nearsightedness), hyperopia (farsightedness), astigmatism (irregular corneal curvature), and presbyopia (age-related loss of near focusing ability). Whether you're struggling to see distant road signs, experiencing eye strain while reading, or noticing distorted vision at any distance, refractive errors can significantly impact your quality of life, work performance, academic success, and overall safety in daily activities.
            </p>
            <p>
              The causes of refractive errors are multifactorial, involving both genetic and environmental components. Heredity plays a substantial role—if your parents wear glasses or contacts, you have a higher likelihood of developing refractive errors yourself. The physical characteristics that lead to these conditions include an eyeball that's too long or too short, a cornea with an irregular curve, or an aging lens that loses flexibility. Additional risk factors include extended periods of close-up work, excessive screen time during childhood development, certain medical conditions like diabetes, and natural aging processes that affect the lens. Environmental factors such as inadequate lighting, poor nutrition during developmental years, and limited outdoor activity in childhood have also been associated with increased prevalence of myopia in recent decades.
            </p>
            <p>
              Professional eye care is essential for managing refractive errors effectively and preventing secondary complications. While refractive errors themselves don't cause blindness, uncorrected vision problems can lead to chronic headaches, eye strain, difficulty concentrating, reduced productivity, increased accident risk, and decreased quality of life. In children, undetected refractive errors can result in amblyopia (lazy eye) or academic difficulties that may be mistaken for learning disabilities. Regular comprehensive eye examinations allow for early detection, accurate diagnosis, and appropriate correction of refractive errors through prescription eyewear, contact lenses, or discussions about surgical options when appropriate. At Spark Eye Care in Kyle, we utilize advanced diagnostic technology to precisely measure your refractive error and provide personalized solutions that match your lifestyle, visual demands, and personal preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Refractive Errors
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Visual & Functional Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Blurred Vision at Distance</span>
                    <p className="text-[var(--color-muted)]">Difficulty seeing road signs, whiteboards, or television screens clearly from across the room.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Reading</span>
                    <p className="text-[var(--color-muted)]">Strain or blur when reading books, menus, phone screens, or doing close-up work.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Distorted or Wavy Vision</span>
                    <p className="text-[var(--color-muted)]">Straight lines appear bent or distorted, often indicating astigmatism.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Squinting</span>
                    <p className="text-[var(--color-muted)]">Frequently narrowing your eyes to see more clearly at any distance.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Halos Around Lights</span>
                    <p className="text-[var(--color-muted)]">Seeing circles or glare around headlights or streetlights, especially at night.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Double Vision</span>
                    <p className="text-[var(--color-muted)]">Seeing two images of a single object, which may indicate uncorrected astigmatism or other refractive issues.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Frequent Prescription Changes</span>
                    <p className="text-[var(--color-muted)]">Needing new glasses or contact lens prescriptions more frequently than annually.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Physical & Behavioral Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Eye Strain and Fatigue</span>
                    <p className="text-[var(--color-muted)]">Tired, achy eyes after reading, computer work, or extended visual tasks.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Frequent Headaches</span>
                    <p className="text-[var(--color-muted)]">Recurrent headaches, especially frontal or around the eyes, particularly after visual tasks.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty with Night Driving</span>
                    <p className="text-[var(--color-muted)]">Increased problems seeing clearly in low light or driving after dark.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Holding Reading Material Close or Far</span>
                    <p className="text-[var(--color-muted)]">Adjusting the distance of books, phones, or tablets to find a clear focal point.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Concentrating</span>
                    <p className="text-[var(--color-muted)]">Problems focusing on work or schoolwork due to visual discomfort or blurred vision.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Rubbing Eyes Frequently</span>
                    <p className="text-[var(--color-muted)]">Constant eye rubbing due to strain or effort to clear vision.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Sitting Too Close to Screens</span>
                    <p className="text-[var(--color-muted)]">Moving closer to the TV, computer monitor, or other displays to see clearly.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Academic or Work Performance Issues</span>
                    <p className="text-[var(--color-muted)]">Declining grades, productivity, or performance due to unaddressed vision problems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Schedule a comprehensive eye examination to determine the exact nature of your refractive error and explore correction options tailored to your lifestyle.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Refractive Errors
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination using advanced diagnostic equipment including autorefractors, phoropters, and corneal topography to measure the exact refractive error. We evaluate visual acuity at multiple distances, assess eye health through dilated examination, and discuss your visual demands, lifestyle, and preferences. This comprehensive approach ensures we understand not just your prescription, but how your vision affects your daily life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment results, we develop a customized vision correction strategy that may include prescription eyeglasses, contact lenses (soft, rigid gas permeable, or specialty lenses), or consultation regarding surgical options. We consider factors like your age, occupation, hobbies, aesthetic preferences, and budget to recommend the optimal correction method. For complex prescriptions or special needs, we offer specialty options including progressive lenses, high-index materials, anti-reflective coatings, and advanced contact lens designs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Vision changes over time, especially during childhood, adolescence, and after age 40. We provide regular follow-up examinations to monitor your eye health and update your prescription as needed. For contact lens wearers, we ensure proper fit, comfort, and eye health through periodic evaluations. We also educate you on proper eyewear care, eye health maintenance, and signs that warrant an earlier appointment, ensuring you maintain optimal vision throughout your life.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our evidence-based approach to refractive error correction utilizes the latest advances in optometric science and optical technology. We prescribe precise corrective lenses based on comprehensive refraction testing and offer a wide selection of frames and lens materials to suit every need. For contact lens candidates, we provide thorough fitting services and instruction on insertion, removal, and care. We stay current with emerging technologies including myopia control strategies for children, orthokeratology (corneal reshaping lenses), and advanced lens designs for presbyopia. When appropriate, we provide referrals to trusted ophthalmologists for surgical consultations regarding LASIK, PRK, or other refractive surgery options. Our goal is clear, comfortable vision achieved through the most appropriate method for your individual circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Refractive Errors Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Advanced Diagnostic Technology</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice utilizes state-of-the-art equipment including digital refraction systems and corneal topography to provide the most accurate prescriptions possible. This precision ensures optimal visual clarity and comfort with your corrective lenses.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Personalized Care for Every Patient</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We understand that no two patients have identical visual needs. Whether you're a student, professional, athlete, or retiree, we tailor our recommendations to match your lifestyle, occupation, and personal preferences for optimal visual performance.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Convenient Access Options</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                While comprehensive eye examinations require in-person evaluation, we offer flexible appointment scheduling and follow-up consultations to accommodate busy schedules. Our team is available to answer questions about your prescription, eyewear care, or vision concerns between appointments.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Extensive Experience with All Refractive Errors</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our team has successfully helped thousands of patients achieve clear vision, from simple prescriptions to complex cases involving high myopia, irregular astigmatism, or progressive lens challenges. We bring expertise and patience to every correction challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your comprehensive eye examination typically lasts 45-60 minutes and includes vision testing at multiple distances, refraction to determine your precise prescription, eye health evaluation with dilation, and discussion of correction options. You'll receive your prescription and recommendations for eyeglasses, contact lenses, or other appropriate interventions. If you choose eyeglasses, you can select frames and lenses during this visit, with most prescriptions available for pickup within 7-10 days.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once you receive your corrective lenses, expect an adjustment period of 1-2 weeks as your visual system adapts, particularly with progressive lenses or first-time glasses. Contact lens wearers receive training on insertion, removal, and care, with a follow-up visit scheduled to check lens fit and comfort. Most patients notice immediate improvement in visual clarity, though fine-tuning may be necessary to achieve optimal comfort and acuity. We encourage you to contact us if you experience persistent blur, discomfort, or headaches during this adaptation period.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  A brief follow-up visit ensures your correction is performing as expected and addresses any concerns about comfort, visual quality, or eyewear durability. Contact lens wearers undergo corneal health evaluation to confirm proper lens fit and absence of complications. This is an opportunity to discuss backup eyewear options, prescription sunglasses, or specialty lenses for specific activities like computer use or sports.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">4</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Annual comprehensive eye examinations are recommended to monitor for prescription changes, update your correction as needed, and screen for eye diseases that become more common with age. Children and teens experiencing active myopia progression may require more frequent evaluations every 6 months. Presbyopic patients over 40 often experience gradual changes in near vision requiring periodic prescription updates. With consistent care, proper eyewear maintenance, and regular examinations, most refractive errors can be successfully managed throughout your lifetime, providing clear, comfortable vision for all your daily activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Refractive Errors
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                How long does refractive error treatment take?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Treatment for refractive errors is immediate once you receive the appropriate corrective lenses. The initial comprehensive eye exam takes about 45-60 minutes. Eyeglasses are typically ready within 7-10 days, while contact lenses may be available same-day or require special ordering. There's a brief adaptation period of 1-2 weeks as your eyes adjust to the new prescription, particularly with progressive lenses or first-time corrections. Refractive errors are a chronic condition requiring ongoing management, but with proper correction, you can enjoy clear vision indefinitely.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Is medication required for refractive errors?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No, standard refractive errors (myopia, hyperopia, astigmatism, and presbyopia) are not treated with medication. These conditions result from the physical shape of the eye and are corrected through optical means—eyeglasses, contact lenses, or refractive surgery. However, in specific cases of progressive childhood myopia, low-dose atropine eye drops have shown promise in slowing myopia progression and may be recommended as part of a comprehensive myopia control strategy. Your eye care provider will discuss whether this or other emerging myopia management approaches might benefit your child.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Does insurance cover refractive error treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most vision insurance plans cover annual comprehensive eye examinations and provide allowances toward eyeglasses or contact lenses. Medical insurance typically covers eye exams when they're necessary to diagnose or manage medical eye conditions detected during examination. Coverage for frames, lenses, and contact lenses varies significantly by plan—some provide full coverage up to a specified amount, while others offer discounts. We recommend contacting your insurance provider before your appointment to understand your specific benefits. Our staff is happy to verify your coverage and help you maximize your benefits. Self-pay options and payment plans are also available.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Can refractive errors be cured or do they require lifelong treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Refractive errors are generally lifelong conditions that require ongoing correction, though your prescription may change over time. Eyeglasses and contact lenses provide correction but do not cure the underlying refractive error—you'll need to wear them consistently for clear vision. Refractive surgery (LASIK, PRK, or lens implants) can permanently reshape the cornea or replace the eye's natural lens, potentially eliminating the need for glasses or contacts, though age-related changes like presbyopia may still develop later. Even after successful refractive surgery, regular eye examinations remain important for monitoring overall eye health and detecting conditions like glaucoma, cataracts, or macular degeneration.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                What if my glasses prescription doesn't seem right?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Some adaptation time is normal, especially with progressive lenses, first-time glasses, or significant prescription changes. However, if you experience persistent blur, distortion, headaches, or discomfort after 1-2 weeks, contact our office immediately. The issue could involve an incorrect prescription, improper frame adjustment, lens manufacturing error, or difficulty adapting to a new lens type. We'll schedule a recheck appointment to reassess your vision, verify the prescription was correctly filled, and make any necessary adjustments to your frames or lenses. Our goal is your complete satisfaction and visual comfort—we stand behind our work and will make it right.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Can I have my eye exam done through telehealth?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Comprehensive eye examinations for refractive errors require in-person evaluation with specialized equipment to accurately measure your prescription and assess eye health. Refraction testing, corneal evaluation, retinal examination, and proper frame fitting cannot be performed remotely. However, telehealth consultations can be useful for discussing vision concerns, reviewing previous exam results, answering questions about your prescription or eyewear, addressing contact lens problems, or determining whether an in-person visit is needed for new symptoms. We're happy to schedule a virtual consultation to discuss your vision needs and help you determine the most appropriate next steps.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/cataracts" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Cataracts
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Age-related clouding of the eye's natural lens causing progressive vision loss and glare sensitivity.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="/conditions/dry-eye-syndrome" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Dry Eye Syndrome
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Chronic eye discomfort from inadequate tear production or poor tear quality affecting vision clarity.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="/conditions/glaucoma" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Glaucoma
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Progressive optic nerve damage often associated with elevated intraocular pressure requiring monitoring and treatment.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Refractive Errors Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face refractive errors alone. Our team is ready to help you achieve clear, comfortable vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all">
              Schedule Your Eye Exam
            </a>
            <a href="/conditions" className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all">
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}