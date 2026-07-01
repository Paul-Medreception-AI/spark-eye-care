import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computer Vision Syndrome Treatment in Kyle | Spark Eye Care',
  description: 'Expert Computer Vision Syndrome treatment in Kyle. Board-certified care for digital eye strain, screen fatigue, and work-related vision problems. Telehealth available.',
  keywords: 'Computer Vision Syndrome treatment Kyle, digital eye strain Kyle, screen fatigue treatment, computer glasses Kyle, eye strain relief, CVS treatment Texas',
  openGraph: {
    title: 'Computer Vision Syndrome Treatment in Kyle | Spark Eye Care',
    description: 'Expert Computer Vision Syndrome treatment in Kyle. Board-certified care for digital eye strain and screen-related vision problems.',
    url: 'https://sparkeyetx.com/conditions/computer-vision-syndrome',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function ComputerVisionSyndromePage() {
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
            <span>Computer Vision Syndrome</span>
          </nav>
          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Computer Vision Syndrome Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            If hours of screen time leave your eyes tired, dry, and strained, you're not alone—Computer Vision Syndrome affects millions of digital workers and students. At Spark Eye Care, we provide comprehensive, evidence-based treatment to relieve your symptoms and protect your long-term visual health.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Computer Vision Syndrome
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Computer Vision Syndrome (CVS), also known as Digital Eye Strain, is a group of eye and vision-related problems that result from prolonged use of computers, tablets, smartphones, and other digital devices. Studies indicate that between 50% and 90% of people who work at computers experience some symptoms of CVS, making it one of the most common occupational health complaints in the modern era. The condition encompasses a range of ocular and visual symptoms that occur because our eyes are working harder when viewing digital screens compared to printed materials. The discomfort increases with the amount of digital screen use, affecting productivity, comfort, and quality of life for students, office workers, gamers, and anyone spending significant time in front of screens.
            </p>
            <p>
              The primary causes of Computer Vision Syndrome include uncorrected vision problems, poor lighting conditions, glare on digital screens, improper viewing distances and angles, poor seating posture, and reduced blink rates during screen use. When we look at screens, our eyes must constantly refocus and realign, especially when switching between the screen, keyboard, and reference materials. The high visual demands combined with blue light exposure, screen flicker, and reduced contrast make the eyes work significantly harder than when reading print. Risk factors include existing refractive errors (nearsightedness, farsightedness, astigmatism), presbyopia in adults over 40, inadequate eye coordination or focusing abilities, dry eye disease, and ergonomic issues in the workspace. Even individuals with perfect vision can develop CVS symptoms if their visual system becomes strained from excessive digital device use.
            </p>
            <p>
              Professional eye care is essential for Computer Vision Syndrome because symptoms can significantly impact your work performance, academic success, and daily comfort—and because CVS can mask or exacerbate underlying eye conditions that require treatment. Many people attempt to self-manage with over-the-counter reading glasses or screen filters, but without a comprehensive eye examination, you may miss uncorrected refractive errors, binocular vision dysfunction, or early dry eye disease that contributes to your symptoms. At Spark Eye Care, our approach combines thorough vision assessment, personalized optical solutions including computer-specific glasses, evidence-based treatments for underlying conditions, and ergonomic guidance to create a comprehensive management plan. Early intervention not only relieves current symptoms but also prevents the development of more serious vision problems and protects your visual health for years of comfortable screen use ahead.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Computer Vision Syndrome
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-8">Visual & Ocular Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Eye Strain & Fatigue</div>
                    <p className="text-[var(--color-muted)]">Tired, sore, or burning sensation in the eyes that worsens as the day progresses, especially during or after screen use.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Blurred Vision</div>
                    <p className="text-[var(--color-muted)]">Difficulty focusing on the screen or maintaining clear vision, particularly when switching between near and far objects.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Dry or Irritated Eyes</div>
                    <p className="text-[var(--color-muted)]">Reduced blink rate during screen time leads to dry, itchy, red, or gritty-feeling eyes that may water excessively.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Double Vision</div>
                    <p className="text-[var(--color-muted)]">Seeing two images of a single object, indicating that your eyes are struggling to work together properly during prolonged screen use.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Light Sensitivity</div>
                    <p className="text-[var(--color-muted)]">Increased sensitivity to bright lights, screen glare, or difficulty with screen brightness that causes discomfort or squinting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Difficulty Focusing</div>
                    <p className="text-[var(--color-muted)]">Trouble maintaining focus on screen content, feeling like your eyes won't "lock on" to text or images clearly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Color Perception Changes</div>
                    <p className="text-[var(--color-muted)]">Colors may appear less vibrant or distinct after extended screen time, indicating visual fatigue and processing strain.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-8">Physical & Systemic Symptoms</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Headaches</div>
                    <p className="text-[var(--color-muted)]">Frequent headaches, particularly frontal or temple pain, that develop during or after computer work and may persist through the evening.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Neck & Shoulder Pain</div>
                    <p className="text-[var(--color-muted)]">Discomfort in the neck, shoulders, and upper back resulting from poor posture while trying to see the screen clearly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Reduced Productivity</div>
                    <p className="text-[var(--color-muted)]">Difficulty concentrating, decreased work efficiency, or needing to take frequent breaks due to visual discomfort and fatigue.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Reading Difficulties</div>
                    <p className="text-[var(--color-muted)]">Needing to re-read text multiple times, losing your place on the screen, or experiencing comprehension challenges during digital reading.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Sleep Disruption</div>
                    <p className="text-[var(--color-muted)]">Difficulty falling asleep or poor sleep quality, particularly when using screens in the evening due to blue light exposure affecting circadian rhythms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Eye Rubbing & Squinting</div>
                    <p className="text-[var(--color-muted)]">Frequent urge to rub eyes or habitual squinting to try to see more clearly or relieve discomfort during screen time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-[var(--color-ink)] mb-1">Overall Fatigue</div>
                    <p className="text-[var(--color-muted)]">General tiredness and reduced energy levels that seem disproportionate to the physical demands of your work, stemming from visual system overload.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes and can prevent symptoms from worsening or becoming chronic. Our comprehensive approach addresses both the underlying causes and immediate symptom relief.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Computer Vision Syndrome
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your evaluation begins with a detailed visual history and thorough eye examination including refraction, binocular vision testing, and accommodation assessment. We measure your current glasses prescription if applicable, evaluate your tear film quality and blink rate, assess eye alignment and coordination, and analyze your work environment including screen distance, lighting conditions, and ergonomic setup. We also screen for underlying conditions like dry eye disease, convergence insufficiency, or uncorrected refractive errors that may be contributing to your symptoms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment findings, we develop a customized treatment strategy that may include computer-specific eyewear with proper lens design and anti-reflective coatings optimized for your working distance. If refractive errors are found, we prescribe corrective lenses specifically calculated for intermediate viewing distances. For patients with binocular vision issues, we may recommend vision therapy exercises to improve eye coordination and focusing flexibility. Your plan also includes specific recommendations for workstation ergonomics, the 20-20-20 rule implementation, proper lighting adjustments, and screen positioning guidelines.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Ongoing Care & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Computer Vision Syndrome management is an ongoing process as your visual demands and work environment may change over time. We schedule follow-up appointments to assess your response to treatment, adjust your prescription or recommendations as needed, and ensure your symptoms continue to improve. We provide education on preventive strategies to maintain comfortable vision during screen use, monitor for any progression of underlying conditions, and update your treatment plan based on changes in your work requirements or technology use. Our goal is not just immediate symptom relief but long-term visual comfort and eye health protection.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              Our evidence-based treatment protocols incorporate the latest research in visual ergonomics, optical design, and ocular health. For patients with dry eye contributing to CVS symptoms, we may prescribe preservative-free artificial tears, omega-3 supplementation, or in-office treatments like warm compress therapy. Blue light filtering lenses can be incorporated into your computer glasses to reduce circadian rhythm disruption and potentially decrease eye strain. For those with accommodation or convergence problems, we offer vision therapy programs with specific exercises to strengthen these visual skills. Anti-fatigue lens designs with slight power boosts in the lower portions can reduce focusing effort during prolonged near work. We also address environmental factors by recommending proper ambient lighting levels, anti-glare screen filters when appropriate, and strategic break schedules to prevent visual fatigue accumulation. Many patients experience significant symptom improvement within the first few weeks of implementing their personalized treatment plan, with continued enhancement as visual habits and ergonomic changes become routine.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Computer Vision Syndrome Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our eye care professionals have specialized training in occupational vision, binocular vision disorders, and the latest evidence-based treatments for digital eye strain and Computer Vision Syndrome.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's visual demands are unique. Your treatment plan is customized to your specific work environment, visual tasks, lifestyle needs, and underlying vision conditions.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                For follow-up consultations and ergonomic assessments, we offer convenient telehealth appointments where we can review your workspace setup and provide guidance without requiring office visits.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Extensive CVS Experience</h3>
              <p className="text-[var(--color-muted)]">
                We have successfully treated hundreds of patients with Computer Vision Syndrome, from office professionals to students, gamers, and remote workers, helping them achieve comfortable, productive screen time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination typically takes 60-90 minutes and includes detailed discussion of your symptoms, work habits, and visual demands. We perform complete vision testing including refraction, binocular vision assessment, dry eye evaluation, and may photograph your workstation setup if you bring pictures. You'll leave with a clear diagnosis, understanding of contributing factors, and initial recommendations. If computer-specific glasses are prescribed, we'll discuss lens options and place your order during this visit. Many patients notice improved awareness of their visual habits immediately after this educational session.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll receive your computer glasses (typically within 7-14 days) and begin implementing ergonomic changes and visual habits we've recommended. This adjustment period involves learning to use your new eyewear properly, establishing regular break patterns with the 20-20-20 rule, optimizing your workspace lighting and screen positioning, and potentially starting artificial tears if dry eye is a factor. Most patients begin experiencing noticeable symptom relief within 2-3 weeks as these changes take effect. It's normal to need a brief adjustment period to new glasses, and we encourage you to contact us with any questions during this time.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At your follow-up appointment, we assess your symptom improvement, verify that your glasses are working optimally, and address any remaining concerns. If you're doing vision therapy exercises, we evaluate your progress and may advance to more challenging activities. We fine-tune recommendations based on your real-world experience and may adjust your treatment plan if certain symptoms persist. This is also when we determine whether any underlying conditions like dry eye or convergence insufficiency need additional targeted treatment. The majority of patients report 70-90% symptom reduction by this stage when following their complete treatment plan.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-6xl font-light text-[var(--color-primary)]">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your symptoms are well-controlled, we establish a maintenance plan that includes annual comprehensive eye exams to monitor your vision and update prescriptions as needed, periodic check-ins if your work environment or visual demands change significantly, and ongoing access to our team for any questions or concerns. We provide guidance for adapting your strategies as technology evolves or your career progresses. Many patients find that the habits and tools we've provided—proper eyewear, ergonomic setup, visual hygiene practices—become second nature, allowing them to work comfortably for years. Computer Vision Syndrome is highly manageable with the right approach, and most patients maintain excellent visual comfort long-term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Computer Vision Syndrome
          </h2>
          <div className="space-y-6">
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                How long does Computer Vision Syndrome treatment take?
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most patients experience significant symptom improvement within 2-4 weeks of receiving their computer-specific glasses and implementing ergonomic changes. However, the timeline varies based on the severity of your symptoms and contributing factors. If underlying conditions like dry eye or binocular vision dysfunction are present, complete resolution may take 2-3 months with consistent treatment. The positive news is that CVS is highly treatable, and the vast majority of patients achieve comfortable, productive screen time with proper management. Some strategies—like the 20-20-20 rule and proper workspace setup—provide immediate benefit even before your glasses arrive.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Is medication required for Computer Vision Syndrome?
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                CVS typically does not require prescription medication. The primary treatments are optical correction (computer glasses), ergonomic modifications, and visual habit changes. However, if dry eye is contributing to your symptoms, we may recommend preservative-free artificial tears, which are over-the-counter lubricating drops used several times daily. In cases of significant dry eye disease, prescription medications like cyclosporine or lifitegrast may be beneficial, though this addresses the underlying dry eye rather than CVS itself. For patients with headaches, we focus on eliminating the visual causes rather than relying on pain medication. Omega-3 supplements may be suggested for tear film support. The treatment approach is conservative, non-invasive, and focused on addressing root causes rather than masking symptoms.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Does insurance cover Computer Vision Syndrome treatment?
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Coverage varies by insurance plan and specific services provided. Most medical insurance plans cover the comprehensive eye examination when diagnosing CVS and evaluating associated conditions, particularly if symptoms are documented. Vision insurance typically covers part of the cost of eyeglasses, though computer-specific lenses may have different coverage than standard prescriptions—we recommend checking with your vision plan about coverage for occupational or computer glasses. Specialized testing like binocular vision assessments may require prior authorization. Some employers offer vision benefits specifically for computer eyewear as part of their occupational health programs. Our billing team works with you to maximize your insurance benefits and provides detailed receipts for FSA/HSA reimbursement when applicable. We also offer competitive self-pay rates and can discuss payment options during your initial consultation.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                What if treatment isn't working or symptoms return?
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                If you're not experiencing expected improvement within 3-4 weeks, we schedule a follow-up evaluation to identify potential issues. Common reasons for inadequate response include incorrect glasses prescription or inappropriate lens design, inconsistent use of prescribed eyewear, unaddressed ergonomic problems in the workspace, underlying conditions that need additional treatment, or significantly increased screen time demands. We'll reassess your visual system, verify your glasses are correct, review your workspace setup (potentially via telehealth with screen sharing), and adjust your treatment plan accordingly. Sometimes prescription adjustments or different lens designs are needed. If symptoms return after initial improvement, it often indicates changes in your work environment, visual demands, or habits—all of which can be addressed with plan modifications. We remain committed to finding solutions until you achieve comfortable vision.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Can telehealth appointments work for Computer Vision Syndrome?
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Telehealth is highly effective for certain aspects of CVS management, particularly follow-up consultations and ergonomic assessments. Your initial comprehensive eye examination must be in-person to perform necessary vision testing, measure your prescription, and evaluate ocular health. However, subsequent appointments can often be conducted via telehealth, where we can review your symptom progress, observe your workstation setup through screen sharing or video tour, provide real-time feedback on monitor positioning and lighting, verify you're using your computer glasses correctly, and adjust recommendations based on your experience. Telehealth is especially valuable for busy professionals who find it difficult to leave work for appointments. If issues arise that require hands-on examination—such as prescription concerns or new symptoms—we'll schedule an in-office visit. This hybrid approach provides convenience while ensuring you receive comprehensive care.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Will I need to wear computer glasses forever?
                <svg className="w-6 h-6 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The need for computer glasses depends on your underlying vision status and the nature of your visual demands. If you have an uncorrected refractive error (nearsightedness, farsightedness, or astigmatism), you'll benefit from wearing properly prescribed eyewear during screen time indefinitely—though your prescription may change over time and require updates. For patients with presbyopia (age-related focusing difficulty typically starting in the 40s), computer glasses optimize the intermediate viewing distance and provide ongoing benefit as this condition is permanent and progressive. However, if your CVS resulted primarily from poor ergonomics or visual habits rather than uncorrected vision problems, you may find that symptoms remain controlled with proper workspace setup and break routines alone. Even in this case, many patients choose to continue wearing computer glasses because they enhance visual comfort and reduce fatigue. The glasses don't create dependence—they simply optimize your visual system for the demands of prolonged screen use.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant',serif] text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/dry-eye" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Dry Eye Disease</h4>
              <p className="text-[var(--color-muted)] mb-4">Chronic insufficient tear production or poor tear quality causing discomfort, often worsened by screen use and reduced blink rates.</p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </a>
            <a href="/conditions/digital-eye-strain" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Digital Eye Strain</h4>
              <p className="text-[var(--color-muted)] mb-4">Temporary visual discomfort from extended digital device use including smartphones, tablets, and e-readers beyond traditional computers.</p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </a>
            <a href="/conditions/convergence-insufficiency" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Convergence Insufficiency</h4>
              <p className="text-[var(--color-muted)] mb-4">Binocular vision disorder where eyes struggle to work together during near tasks, causing eye strain, double vision, and reading difficulties.</p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-4">
            Get Help for Computer Vision Syndrome Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">
            You don't have to face Computer Vision Syndrome alone. Our team is ready to help you achieve comfortable, productive screen time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors">
              Schedule Your Evaluation
            </a>
            <a href="/conditions" className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors">
              View All Conditions
            </a>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Serving Kyle and surrounding communities with expert eye care
          </p>
        </div>
      </section>

    </main>
  )
}