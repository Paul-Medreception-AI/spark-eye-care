import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Astigmatism Treatment in Kyle | Spark Eye Care',
  description: 'Expert astigmatism treatment in Kyle. Board-certified eye care specialists offering comprehensive vision correction for astigmatism. Schedule your consultation today.',
  keywords: 'astigmatism treatment Kyle, astigmatism correction, vision correction Kyle, eye care Kyle, astigmatism specialist',
  openGraph: {
    title: 'Astigmatism Treatment in Kyle | Spark Eye Care',
    description: 'Expert astigmatism treatment in Kyle. Board-certified eye care specialists offering comprehensive vision correction.',
    url: 'https://www.sparkeyetx.com/conditions/astigmatism',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function AstigmatismPage() {
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
            <span>Astigmatism</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Astigmatism Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Astigmatism is one of the most common vision conditions, affecting millions of Americans with blurred or distorted vision at all distances. At Spark Eye Care, we provide comprehensive diagnostic evaluations and advanced corrective solutions to help you achieve clear, comfortable vision for life.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding Astigmatism
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Astigmatism is a refractive error caused by an irregularly shaped cornea or lens that prevents light from focusing properly on the retina. Instead of being perfectly round like a basketball, the cornea has an oblong shape more like a football, causing light rays to focus at multiple points rather than a single point on the retina. This results in blurred or distorted vision at all distances—near, far, and everything in between. Astigmatism affects approximately one in three Americans and can occur alone or alongside other refractive errors like nearsightedness (myopia) or farsightedness (hyperopia). Many people live with mild astigmatism without realizing it, attributing their visual difficulties to normal aging or fatigue, when in fact a simple corrective solution could dramatically improve their quality of life, work performance, and daily comfort.
            </p>
            <p>
              The causes of astigmatism are varied and can include genetic factors, eye injury, disease, or surgery. Most cases of astigmatism are present from birth and remain relatively stable throughout life, though the condition can develop or worsen over time. Corneal astigmatism, the most common type, results from an irregularly curved cornea, while lenticular astigmatism stems from distortions in the lens inside the eye. Risk factors include family history of astigmatism or other refractive errors, certain eye conditions like keratoconus (a progressive thinning of the cornea), eye injuries that cause corneal scarring, and previous eye surgery. Children with significant astigmatism may be at higher risk for amblyopia (lazy eye) if the condition goes uncorrected during critical developmental years, making early detection and treatment particularly important for young patients.
            </p>
            <p>
              Professional treatment for astigmatism is essential not just for visual clarity, but for overall eye health and quality of life. Uncorrected astigmatism forces your eyes to work harder to focus, leading to persistent eye strain, chronic headaches, squinting, and fatigue that can interfere with work, school, driving, and recreational activities. Many patients don't realize how much their vision has been compromised until they experience the clarity that proper correction provides. At Spark Eye Care in Kyle, our board-certified eye care specialists use advanced diagnostic technology to precisely measure the degree and axis of your astigmatism, ensuring that your corrective prescription is perfectly tailored to your unique vision needs. Whether through eyeglasses, contact lenses, or surgical options, we'll work with you to find the solution that best fits your lifestyle, visual demands, and long-term eye health goals.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Signs & Symptoms of Astigmatism
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Visual Symptoms
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blurred or Distorted Vision</p>
                    <p className="text-[var(--color-muted)]">Objects appear blurry, stretched, or wavy at all distances, both near and far.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty with Night Vision</p>
                    <p className="text-[var(--color-muted)]">Vision problems worsen in low light conditions, making night driving particularly challenging.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eye Strain and Discomfort</p>
                    <p className="text-[var(--color-muted)]">Eyes feel tired, achy, or uncomfortable after reading, computer work, or other visual tasks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frequent Headaches</p>
                    <p className="text-[var(--color-muted)]">Persistent headaches, especially around the forehead and temples, caused by constant focusing effort.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Reading Fine Print</p>
                    <p className="text-[var(--color-muted)]">Small text appears unclear or distorted, making reading books, labels, or screens frustrating.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Double Vision</p>
                    <p className="text-[var(--color-muted)]">Seeing ghost images or shadows around objects, particularly with one eye closed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Halos Around Lights</p>
                    <p className="text-[var(--color-muted)]">Seeing bright circles or starbursts around light sources, especially at night.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-8 text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Behavioral & Physical Signs
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frequent Squinting</p>
                    <p className="text-[var(--color-muted)]">Unconsciously squinting or partially closing eyes to try to see more clearly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Tilting Head or Turning to Side</p>
                    <p className="text-[var(--color-muted)]">Adjusting head position to find a clearer angle of vision for reading or viewing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty with Depth Perception</p>
                    <p className="text-[var(--color-muted)]">Challenges judging distances, which can affect driving, sports, and daily activities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Fatigue After Visual Tasks</p>
                    <p className="text-[var(--color-muted)]">Feeling unusually tired after reading, computer work, or other activities requiring focus.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Avoidance of Reading or Screen Time</p>
                    <p className="text-[var(--color-muted)]">Reluctance to engage in activities that require sustained visual attention due to discomfort.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Poor Performance in School or Work</p>
                    <p className="text-[var(--color-muted)]">Academic or professional difficulties related to visual tasks and concentration problems.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Rubbing Eyes Frequently</p>
                    <p className="text-[var(--color-muted)]">Constant eye rubbing due to irritation and strain from uncorrected vision problems.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Sitting Too Close to Screens</p>
                    <p className="text-[var(--color-muted)]">Moving closer to televisions, computers, or books to compensate for unclear vision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a loved one, help is available. Early treatment leads to better outcomes, preventing eye strain complications and improving quality of life. Schedule a comprehensive eye examination today.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Treat Astigmatism
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination using advanced diagnostic technology including corneal topography, refraction testing, and keratometry to precisely measure the curvature of your cornea. We assess the degree and axis of your astigmatism, evaluate overall eye health, and discuss your visual needs and lifestyle to determine the most appropriate corrective approach. This detailed evaluation typically takes 60-90 minutes and provides the foundation for your personalized treatment plan.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Customized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your diagnostic results, we'll develop a personalized correction strategy tailored to your specific type and degree of astigmatism. Options include prescription eyeglasses with cylindrical lenses designed to counteract corneal irregularity, specialized toric contact lenses that stay oriented correctly on the eye, or for qualifying candidates, refractive surgery consultation for permanent correction. We'll explain the advantages and considerations of each option, ensuring you understand how each approach addresses your unique vision needs and fits your daily lifestyle and activities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Ongoing Care & Monitoring
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Successful astigmatism management requires regular follow-up care to ensure your correction remains optimal as your eyes change over time. We schedule periodic evaluations to monitor your vision clarity, assess the fit and condition of corrective lenses, and adjust your prescription as needed. Annual comprehensive eye examinations detect any progression of astigmatism or development of other eye conditions, while also providing opportunities to explore new corrective technologies that may better suit your evolving needs and preferences.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-6">
              At Spark Eye Care, our astigmatism treatment approach is grounded in evidence-based optometric practices and the latest advances in vision correction technology. We utilize precision diagnostic equipment including computerized corneal topographers that create detailed three-dimensional maps of your cornea's surface, automated refractors that measure refractive error with exceptional accuracy, and wavefront analyzers that detect even subtle optical imperfections.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              Our corrective solutions include high-definition digital lens designs that provide sharper vision across all viewing distances, advanced toric contact lens materials that offer superior comfort and stable orientation, and when appropriate, co-management of refractive procedures like LASIK or PRK with experienced ophthalmologic surgeons. We stay current with emerging technologies such as orthokeratology (corneal reshaping lenses worn overnight) and specialty lenses for patients with irregular astigmatism from conditions like keratoconus, ensuring you have access to the most effective solutions available.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Why Choose Spark Eye Care for Astigmatism Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Board-Certified Expertise
              </h3>
              <p className="text-[var(--color-muted)]">
                Our optometrists hold board certification and maintain active licensure through continuing education in the latest vision correction technologies and treatment methodologies for all refractive errors.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Personalized Approach
              </h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's visual needs are unique. Your treatment plan is customized based on your lifestyle, occupation, recreational activities, and personal preferences for vision correction.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Advanced Technology
              </h3>
              <p className="text-[var(--color-muted)]">
                Our practice utilizes state-of-the-art diagnostic equipment including corneal topography, digital refraction systems, and optical coherence tomography for the most accurate assessments.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Convenient Care Options
              </h3>
              <p className="text-[var(--color-muted)]">
                We offer flexible scheduling including evening and weekend appointments to accommodate your busy life, making quality eye care accessible when you need it most.
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
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                01
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  First Evaluation (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination includes detailed visual acuity testing, corneal curvature measurements, and refraction assessment to determine the precise nature and degree of your astigmatism. We'll discuss your symptoms, visual goals, and lifestyle needs to identify the most appropriate correction method. You'll leave this appointment with a clear understanding of your condition and preliminary treatment recommendations. For most patients, if eyeglasses or contact lenses are prescribed, you can expect your corrective lenses to arrive within 7-10 business days.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                02
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Correction Begins (Weeks 2-4)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your corrective lenses arrive, we'll ensure proper fit and teach you optimal usage and care techniques. Most patients notice immediate improvement in visual clarity, though some adaptation period is normal, particularly with first-time astigmatism correction or significant prescription changes. Your brain may need a few days to adjust to the corrected vision, and you might experience mild headaches or visual distortion that typically resolves within one to two weeks. Contact lens wearers receive thorough insertion, removal, and hygiene training to ensure comfortable, safe wear. We encourage you to contact us with any concerns during this adjustment period.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                03
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Progress Review (Months 2-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We schedule a follow-up appointment to assess how well your correction is working and address any remaining visual concerns. This visit includes refraction verification to ensure your prescription is optimal, evaluation of lens fit and condition for contact lens wearers, and assessment of overall visual comfort and function. If needed, we can make minor prescription adjustments or recommend alternative lens designs to enhance your visual experience. Most patients achieve excellent visual outcomes by this point, though individual results vary based on the degree of astigmatism and adaptation factors.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="text-6xl font-light text-[var(--color-primary)] flex-shrink-0" style={{fontFamily: 'var(--font-cormorant)'}}>
                04
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                  Long-term Management
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Astigmatism is typically a stable condition, but regular eye examinations remain essential for maintaining optimal vision and eye health. We recommend annual comprehensive eye exams to monitor for any changes in your astigmatism, detect early signs of other eye conditions like cataracts or glaucoma, and update your prescription as needed. Contact lens wearers should be evaluated more frequently—typically every six months—to ensure continued proper fit and corneal health. As you age, your visual needs may change, and advances in corrective technology may offer new opportunities for improved vision correction. Our team remains committed to providing you with the clearest, most comfortable vision possible throughout your lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Frequently Asked Questions About Astigmatism
          </h2>
          <div className="space-y-6">
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                <span>How long does astigmatism treatment take to work?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="text-[var(--color-muted)] leading-relaxed space-y-4">
                <p>
                  The immediate improvement in vision clarity occurs as soon as you put on properly prescribed corrective lenses. However, complete adaptation to astigmatism correction—particularly if this is your first time wearing corrective lenses or if there's a significant prescription change—typically takes one to two weeks. During this adjustment period, your visual system adapts to the corrected images, and any initial symptoms like mild headaches or slight distortion gradually resolve.
                </p>
                <p>
                  For contact lens wearers, especially those new to toric lenses, the adaptation period may extend slightly longer as you learn proper insertion and removal techniques and your eyes adjust to lens wear. Most patients report feeling completely comfortable with their correction within the first month. Unlike medical conditions requiring healing time, astigmatism correction provides immediate functional benefit, with the adjustment period simply representing your brain's adaptation to clearer, more accurate visual information.
                </p>
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                <span>Will I need medication for astigmatism?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="text-[var(--color-muted)] leading-relaxed space-y-4">
                <p>
                  No, astigmatism itself does not require medication. It is a structural refractive error caused by the shape of your cornea or lens, not a disease process that responds to pharmaceutical treatment. The primary treatment modalities for astigmatism are optical corrections: eyeglasses with cylindrical lenses, toric contact lenses, or refractive surgery procedures that reshape the cornea.
                </p>
                <p>
                  However, if you experience eye strain, dryness, or discomfort related to uncorrected astigmatism or contact lens wear, we may recommend lubricating eye drops or artificial tears to enhance comfort. Contact lens wearers also benefit from appropriate lens care solutions to maintain lens cleanliness and eye health. In cases where astigmatism is associated with other eye conditions like keratoconus or post-surgical inflammation, specific medications may be prescribed to address those underlying conditions, but these would be treating the comorbid condition rather than the astigmatism itself.
                </p>
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                <span>Does insurance cover astigmatism treatment?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="text-[var(--color-muted)] leading-relaxed space-y-4">
                <p>
                  Most vision insurance plans cover comprehensive eye examinations and provide allowances or discounts toward corrective lenses (eyeglasses or contact lenses) used to treat astigmatism. Medical insurance typically covers the eye examination portion when it's part of an overall health evaluation or when investigating symptoms that may indicate eye disease. Coverage specifics vary significantly between plans, with some offering full coverage for annual exams and fixed allowances toward frames and lenses, while others provide discounts through preferred provider networks.
                </p>
                <p>
                  Contact lens fittings, particularly for specialty toric lenses or for conditions like keratoconus that cause irregular astigmatism, may have separate coverage considerations. Refractive surgery (LASIK, PRK) for astigmatism correction is typically considered elective and not covered by standard vision or medical insurance, though some plans offer discounts, and Health Savings Accounts (HSA) or Flexible Spending Accounts (FSA) can be used for these expenses. We recommend contacting your insurance provider before your appointment to understand your specific benefits, and our staff is happy to verify coverage and provide cost estimates for your anticipated services.
                </p>
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                <span>Can astigmatism get worse if left untreated?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="text-[var(--color-muted)] leading-relaxed space-y-4">
                <p>
                  For most people, astigmatism is a relatively stable condition that doesn't significantly worsen without correction, though it can gradually change over time due to natural aging processes. However, leaving astigmatism uncorrected creates several complications: persistent eye strain from your visual system working overtime to compensate for unclear images, chronic headaches from sustained focusing effort, reduced quality of life affecting work performance and daily activities, and potential safety concerns particularly with night driving.
                </p>
                <p>
                  In children, uncorrected astigmatism during critical developmental years can contribute to amblyopia (lazy eye) where the brain learns to ignore input from one eye, potentially resulting in permanent vision impairment if not addressed early. Certain progressive conditions like keratoconus cause astigmatism to worsen over time as the cornea gradually thins and bulges, making early detection and monitoring essential. While the astigmatism itself generally won't worsen simply from lack of correction, the associated symptoms and quality-of-life impacts make prompt diagnosis and treatment important for maintaining optimal vision and eye health throughout your lifetime.
                </p>
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                <span>What's the difference between regular and toric contact lenses?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="text-[var(--color-muted)] leading-relaxed space-y-4">
                <p>
                  Regular spherical contact lenses have uniform curvature across their entire surface and correct only nearsightedness or farsightedness. Toric contact lenses are specifically designed to correct astigmatism by incorporating different powers in different meridians of the lens, matching the irregular curvature of an astigmatic cornea. Toric lenses have a specific orientation that must remain stable on the eye to provide clear vision, achieved through design features like weighted bottoms, thin zones, or truncated edges that interact with the eyelids and tear film to prevent rotation.
                </p>
                <p>
                  Because of their more complex design and manufacturing process, toric lenses are typically more expensive than standard spherical lenses and require more precise fitting by your eye care professional. The fitting process involves not only determining the correct lens power but also identifying the proper axis orientation and ensuring the lens consistently returns to the correct position after blinking. Modern toric lens designs offer excellent stability and comfort, with many patients achieving vision quality comparable to or exceeding that of eyeglasses. Advanced materials now provide toric options in daily disposable, extended wear, and specialty designs for dry eyes or other specific needs.
                </p>
              </div>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xl font-light text-[var(--color-ink)] mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
                <span>Am I a candidate for LASIK or other refractive surgery?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="text-[var(--color-muted)] leading-relaxed space-y-4">
                <p>
                  Many people with astigmatism are excellent candidates for refractive surgery procedures like LASIK, PRK, or SMILE that permanently reshape the cornea to correct vision. Ideal candidacy typically requires that you be at least 18 years old (preferably 21+), have a stable prescription that hasn't changed significantly in the past year or two, have healthy corneas with sufficient thickness, and be free from certain eye diseases or conditions that affect healing. The degree and type of your astigmatism also matters—most modern laser platforms can safely and effectively correct up to 3-4 diopters of astigmatism, with some advanced systems handling even higher amounts.
                </p>
                <p>
                  During your comprehensive eye examination, we can perform preliminary screening to assess your potential candidacy and discuss whether refractive surgery might be an appropriate option for you. If you're interested in pursuing this route, we can provide referrals to experienced refractive surgeons in the area and co-manage your pre-operative evaluation and post-operative care. However, it's important to understand that not everyone is a suitable candidate—factors like thin corneas, large pupils, severe dry eye, certain autoimmune conditions, or unstable prescriptions may make traditional corrective lenses a safer and more appropriate long-term solution for your astigmatism.
                </p>
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
            <a href="/conditions/myopia" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Myopia (Nearsightedness)
              </h4>
              <p className="text-[var(--color-muted)]">
                Difficulty seeing distant objects clearly, often occurring alongside astigmatism and correctable with similar treatment approaches.
              </p>
            </a>
            <a href="/conditions/hyperopia" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Hyperopia (Farsightedness)
              </h4>
              <p className="text-[var(--color-muted)]">
                Difficulty focusing on near objects, causing eye strain and fatigue, frequently combined with astigmatism in mixed refractive errors.
              </p>
            </a>
            <a href="/conditions/presbyopia" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <h4 className="text-xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Presbyopia
              </h4>
              <p className="text-[var(--color-muted)]">
                Age-related loss of near focusing ability, typically requiring reading glasses or multifocal lenses in addition to astigmatism correction.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Get Help for Astigmatism Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to struggle with blurred vision. Our team is ready to help you achieve the clear, comfortable vision you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all">
              Schedule Your Consultation
            </a>
            <a href="/conditions" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all">
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}