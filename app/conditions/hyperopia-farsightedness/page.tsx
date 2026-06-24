import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hyperopia (Farsightedness) Treatment in Kyle | Spark Eye Care',
  description: 'Expert hyperopia treatment in Kyle. Board-certified eye care for farsightedness with comprehensive vision correction solutions. Schedule your evaluation today.',
  openGraph: {
    title: 'Hyperopia (Farsightedness) Treatment in Kyle | Spark Eye Care',
    description: 'Expert hyperopia treatment in Kyle. Board-certified eye care for farsightedness with comprehensive vision correction solutions.',
    url: 'https://www.sparkeyetx.com/conditions/hyperopia-farsightedness',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function HyperopiaPage() {
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
            <span>Hyperopia (Farsightedness)</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Hyperopia (Farsightedness) Treatment in Kyle
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Farsightedness affects millions of Americans, making close-up tasks like reading and computer work unnecessarily difficult. At Spark Eye Care, we provide comprehensive hyperopia evaluations and personalized vision correction solutions to help you see clearly at all distances.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Hyperopia (Farsightedness)
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Hyperopia, commonly known as farsightedness, is a refractive error that occurs when the eye focuses images behind the retina rather than directly on it. This condition makes nearby objects appear blurry while distant objects may remain relatively clear. Affecting approximately 5-10% of the U.S. population, hyperopia can range from mild to severe and often goes undiagnosed because people with mild hyperopia can sometimes compensate through their eye's natural focusing ability. However, this constant strain to maintain clear vision can lead to significant eye fatigue, headaches, and decreased quality of life, particularly when performing close-up work like reading, writing, or using digital devices.
            </p>
            <p>
              The underlying causes of hyperopia are primarily anatomical. In most cases, the eyeball is slightly shorter than normal from front to back, or the cornea has too little curvature, preventing light from focusing properly on the retina. While hyperopia is often present from birth, its effects may not be noticeable until later in life as the eye's natural ability to compensate diminishes with age. Risk factors include family history—hyperopia tends to run in families—as well as certain medical conditions like diabetes. Children born with significant hyperopia may develop crossed eyes (strabismus) or lazy eye (amblyopia) if the condition goes untreated, making early detection and intervention particularly important for pediatric patients.
            </p>
            <p>
              Professional treatment for hyperopia is essential not just for visual clarity, but for overall eye health and quality of life. Untreated farsightedness forces your eyes to work harder than they should, leading to chronic eye strain, persistent headaches, and difficulty concentrating on tasks that require near vision. For children, uncorrected hyperopia can interfere with learning and academic performance, while adults may find their work productivity and daily activities significantly impacted. At Spark Eye Care in Kyle, we understand that clear, comfortable vision is fundamental to living your best life. Our comprehensive approach to hyperopia treatment combines thorough diagnostic testing with personalized correction strategies, ensuring you receive the most effective solution for your unique visual needs.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-4 text-center">
            Signs & Symptoms of Hyperopia (Farsightedness)
          </h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-12 max-w-3xl mx-auto">
            Recognizing the symptoms of hyperopia is the first step toward clearer, more comfortable vision.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6">Visual Symptoms</h3>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Blurry Near Vision</span>
                  <p className="text-[var(--color-muted)]">Difficulty seeing objects up close, especially when reading, writing, or using smartphones and computers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Eye Strain</span>
                  <p className="text-[var(--color-muted)]">Tired, aching eyes after reading or performing close-up tasks for even short periods of time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Squinting</span>
                  <p className="text-[var(--color-muted)]">Frequent squinting or closing one eye to try to see nearby objects more clearly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Crossed Eyes (Children)</span>
                  <p className="text-[var(--color-muted)]">In children with significant hyperopia, eyes may turn inward as they struggle to focus on nearby objects.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Burning Sensation</span>
                  <p className="text-[var(--color-muted)]">A burning feeling in or around the eyes, particularly after extended periods of near work.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Difficulty Focusing</span>
                  <p className="text-[var(--color-muted)]">Trouble switching focus between near and far objects, or maintaining clear vision at close range.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6">Physical & Behavioral Symptoms</h3>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Frequent Headaches</span>
                  <p className="text-[var(--color-muted)]">Persistent headaches, especially frontal headaches around the forehead and temples, often occurring after reading or screen time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Avoidance of Reading</span>
                  <p className="text-[var(--color-muted)]">Reluctance to read books, do homework, or engage in activities requiring close-up vision due to discomfort.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Poor Academic Performance</span>
                  <p className="text-[var(--color-muted)]">In children, uncorrected hyperopia can lead to difficulty reading, learning challenges, and decreased school performance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Rubbing Eyes</span>
                  <p className="text-[var(--color-muted)]">Frequently rubbing eyes in an attempt to clear vision or relieve discomfort from eye strain.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Decreased Work Productivity</span>
                  <p className="text-[var(--color-muted)]">Difficulty maintaining focus during computer work, writing, or other professional tasks requiring near vision.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">General Fatigue</span>
                  <p className="text-[var(--color-muted)]">Overall tiredness and lack of energy caused by the constant effort required to maintain clear near vision.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-[var(--color-ink)] text-lg max-w-3xl mx-auto border-l-4 border-[var(--color-primary)] pl-6 py-2">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes and prevents the development of related conditions like amblyopia in children.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Hyperopia (Farsightedness)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough eye examination including visual acuity testing, refraction assessment to determine your exact prescription, and retinal evaluation to check overall eye health. We use advanced diagnostic equipment to measure the curvature of your cornea and the length of your eyeball, identifying the precise cause and degree of your hyperopia. This comprehensive evaluation allows us to create a treatment plan tailored to your specific visual needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment results, lifestyle needs, and personal preferences, we develop a customized vision correction strategy. This may include prescription eyeglasses for full-time or task-specific wear, contact lenses in various modalities, or a discussion of refractive surgery options for eligible candidates. We take time to explain each option, ensuring you understand the benefits and considerations of each approach so you can make an informed decision about your vision care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Vision correction for hyperopia is not a one-time event but an ongoing process. We schedule follow-up appointments to ensure your correction is working optimally, monitor for any changes in your prescription, and adjust your treatment as needed. For children, regular monitoring is particularly important as their eyes continue to grow and develop. We remain your partner in eye health, providing continuous support and making modifications to your treatment plan as your visual needs evolve over time.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Our evidence-based approach to hyperopia treatment utilizes the latest advancements in optometric care. Corrective lenses—whether eyeglasses or contact lenses—work by adding converging power to the eye's optical system, allowing light to focus properly on the retina. We offer a full range of lens options including single-vision lenses for those who need correction primarily for near tasks, progressive lenses for patients over 40 who also have presbyopia, and high-index materials for stronger prescriptions that provide thinner, lighter lenses. For contact lens wearers, we fit both soft and rigid gas-permeable lenses depending on your prescription and corneal shape. For patients interested in permanent correction, we provide thorough consultations and co-manage refractive surgeries such as LASIK and PRK with experienced ophthalmologic surgeons. Our goal is always the same: to provide you with the clearest, most comfortable vision possible using methods backed by clinical research and tailored to your individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Hyperopia (Farsightedness) Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Board-Certified Excellence</h3>
              <p className="text-[var(--color-muted)]">
                Our optometrists are board-certified and maintain the highest standards of professional competence through continuing education in the latest vision correction technologies and techniques.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's vision needs are unique. Your treatment plan is customized based on your specific prescription, lifestyle requirements, and personal preferences.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                We offer convenient telehealth consultations for initial discussions, follow-up questions, and care coordination, making quality eye care accessible from the comfort of your home.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Extensive Experience</h3>
              <p className="text-[var(--color-muted)]">
                We have successfully treated hundreds of hyperopia patients of all ages, from young children requiring their first glasses to adults seeking the most advanced vision correction options.
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
          <p className="text-center text-[var(--color-muted)] text-lg mb-16 max-w-2xl mx-auto">
            Here's what to expect when you choose Spark Eye Care for your hyperopia treatment.
          </p>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-5xl font-light text-[var(--color-primary)]">01</span>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your journey begins with a comprehensive eye examination where we assess your visual acuity, determine your exact prescription through refraction testing, and evaluate the overall health of your eyes. We'll discuss your symptoms, lifestyle needs, and any concerns you have about your vision. This appointment typically lasts 60-90 minutes and includes advanced diagnostic testing. You'll leave with a clear understanding of your hyperopia and a detailed treatment plan tailored to your needs.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-5xl font-light text-[var(--color-primary)]">02</span>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your corrective lenses arrive—whether eyeglasses or contact lenses—we'll ensure they fit perfectly and provide you with clear, comfortable vision. For eyeglasses, we'll make any necessary adjustments to the frames and verify that the optical centers align properly with your pupils. For contact lenses, we'll provide thorough training on insertion, removal, and care. Most patients adapt to their new correction within a few days to two weeks. During this period, your eyes and brain adjust to seeing clearly, and any initial discomfort typically resolves quickly.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-5xl font-light text-[var(--color-primary)]">03</span>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We schedule a follow-up appointment 4-8 weeks after you begin wearing your correction to ensure everything is working optimally. We'll check your vision with your new glasses or contacts, ask about your experience, and address any concerns. For contact lens wearers, we'll examine your eye health to ensure your lenses are fitting well and not causing any complications. If any adjustments are needed—such as prescription refinement or different lens parameters—we'll make them at this time to ensure you're achieving the best possible vision.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-5xl font-light text-[var(--color-primary)]">04</span>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Hyperopia can change over time, particularly in children whose eyes are still developing and in adults over 40 who may also develop presbyopia. We recommend annual comprehensive eye exams to monitor your vision and update your prescription as needed. These regular check-ups also allow us to screen for other eye conditions and ensure your overall eye health remains optimal. For children with hyperopia, more frequent monitoring may be necessary during their growth years. We remain your long-term partner in vision care, adapting your treatment as your needs evolve.
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
            Frequently Asked Questions About Hyperopia (Farsightedness)
          </h2>
          <div className="space-y-6">
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-[var(--color-ink)] text-lg">
                How long does hyperopia treatment take to work?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Vision correction for hyperopia works immediately once you begin wearing the proper prescription. As soon as you put on your eyeglasses or contact lenses, you should notice clearer near vision. However, it may take a few days to two weeks for your eyes and brain to fully adjust to your new correction, especially if this is your first time wearing glasses or if your prescription has changed significantly. During this adjustment period, some patients experience mild headaches or dizziness, but these symptoms typically resolve quickly as your visual system adapts.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-[var(--color-ink)] text-lg">
                Do I need to wear glasses all the time for hyperopia?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The answer depends on the severity of your hyperopia and your visual needs. People with mild hyperopia may only need glasses for specific tasks like reading, computer work, or other close-up activities. Those with moderate to severe hyperopia often benefit from wearing glasses full-time for comfortable vision at all distances. Children with significant hyperopia typically need to wear glasses all the time to prevent the development of amblyopia (lazy eye) or strabismus (crossed eyes). During your comprehensive evaluation, we'll determine the best wearing schedule for your specific situation and discuss whether full-time or part-time wear is most appropriate for your lifestyle.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-[var(--color-ink)] text-lg">
                Does insurance cover hyperopia treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most vision insurance plans cover comprehensive eye examinations and provide allowances for eyeglasses or contact lenses. Medical insurance typically covers the eye examination when there are specific symptoms or medical concerns related to your hyperopia. Coverage for eyewear varies by plan—some provide a fixed allowance toward frames and lenses every one to two years, while others offer discounts through preferred providers. We accept most major insurance plans and our staff will verify your benefits and help you understand your coverage before your appointment. Even if you don't have vision insurance, we offer flexible payment options to make quality eye care accessible and affordable.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-[var(--color-ink)] text-lg">
                Can hyperopia be corrected permanently?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, refractive surgery can provide permanent correction for hyperopia in eligible candidates. LASIK (Laser-Assisted In Situ Keratomileusis) and PRK (Photorefractive Keratectomy) are proven surgical procedures that reshape the cornea to correct farsightedness. These procedures are typically suitable for adults over 21 with stable prescriptions who meet specific health criteria. During a refractive surgery consultation, we perform additional testing to determine if you're a good candidate and discuss the benefits, risks, and expected outcomes. While surgery can eliminate or reduce your dependence on glasses or contacts, it's important to note that age-related changes like presbyopia may still require reading glasses later in life. We co-manage refractive surgery with experienced ophthalmologic surgeons, providing pre- and post-operative care.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-[var(--color-ink)] text-lg">
                What happens if hyperopia goes untreated?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Leaving hyperopia untreated can lead to several complications. In adults, uncorrected farsightedness causes chronic eye strain, persistent headaches, and difficulty performing near-vision tasks, significantly impacting quality of life and work productivity. You may experience general fatigue from the constant effort your eyes exert trying to focus. In children, the consequences can be more serious—untreated hyperopia can lead to amblyopia (lazy eye), where the brain begins to ignore input from the affected eye, resulting in permanent vision loss if not caught early. Children may also develop accommodative esotropia (crossed eyes) as they struggle to focus. Early detection and treatment of hyperopia in children is critical for proper visual development and academic success.
              </p>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg p-6">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-[var(--color-ink)] text-lg">
                Can telehealth appointments work for hyperopia treatment?
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform text-2xl">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                While the initial comprehensive eye examination and prescription determination require an in-person visit with specialized equipment, telehealth appointments can be very useful for certain aspects of hyperopia care. Virtual consultations are excellent for initial discussions about your symptoms, reviewing test results, explaining treatment options, and addressing questions or concerns about your eyewear. Follow-up appointments to discuss how you're adjusting to your new glasses or contacts can often be conducted via telehealth. We also use telehealth for prescription renewals when appropriate and for coordinating care between in-person visits. The combination of in-person examinations and telehealth follow-ups provides comprehensive, convenient care that fits your busy schedule.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/myopia-nearsightedness" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all group">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Myopia (Nearsightedness)
              </h4>
              <p className="text-[var(--color-muted)]">
                Difficulty seeing distant objects clearly, the opposite of hyperopia. Comprehensive treatment options available.
              </p>
            </a>
            <a href="/conditions/astigmatism" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all group">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Astigmatism
              </h4>
              <p className="text-[var(--color-muted)]">
                Irregular corneal curvature causing blurred or distorted vision at all distances, often occurring with hyperopia.
              </p>
            </a>
            <a href="/conditions/presbyopia" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all group">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Presbyopia
              </h4>
              <p className="text-[var(--color-muted)]">
                Age-related difficulty focusing on near objects, commonly affecting those over 40, sometimes combined with hyperopia.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Hyperopia (Farsightedness) Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            You don't have to struggle with blurry near vision any longer. Our team is ready to help you see clearly and comfortably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Your Evaluation
            </a>
            <a 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}