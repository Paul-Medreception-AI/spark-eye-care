import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Myopia (Nearsightedness) Treatment in Kyle | Spark Eye Care',
  description: 'Expert myopia treatment in Kyle. Comprehensive eye care for nearsightedness including prescription lenses, orthokeratology, and myopia control. Schedule your consultation today.',
  keywords: 'myopia treatment Kyle, nearsightedness Kyle, myopia control, eye doctor Kyle, vision correction Kyle',
  openGraph: {
    title: 'Myopia (Nearsightedness) Treatment in Kyle | Spark Eye Care',
    description: 'Expert myopia treatment in Kyle. Comprehensive care for nearsightedness with advanced myopia control solutions.',
    url: 'https://sparkeyetx.com/conditions/myopia-nearsightedness',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function MyopiaPage() {
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
            <span>Myopia (Nearsightedness)</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Myopia (Nearsightedness) Treatment in Kyle
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Myopia affects millions of people worldwide, making distant objects appear blurry while near vision remains clear. At Spark Eye Care, we provide comprehensive myopia treatment and management solutions tailored to your unique vision needs, helping you see the world clearly again.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/refractive-error.jpg"
                alt="Myopia contact lens fitting"
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
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Myopia (Nearsightedness)
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Myopia, commonly known as nearsightedness, is a refractive error that occurs when the eyeball is too long or the cornea is too curved, causing light rays to focus in front of the retina instead of directly on it. This condition affects approximately 30% of the U.S. population and up to 80% of people in some Asian countries, with prevalence rates rising dramatically among younger generations. People with myopia can see nearby objects clearly—reading a book, working on a computer, or looking at their phone—but distant objects such as road signs, whiteboards, or faces across a room appear blurry and out of focus. The condition typically begins in childhood, often between ages 6 and 14, and tends to progress until the early twenties when eye growth stabilizes. Left uncorrected, myopia can significantly impact daily activities, academic performance in children, driving safety, sports participation, and overall quality of life.
            </p>
            <p>
              The causes of myopia are multifactorial, involving both genetic and environmental influences. Children with one myopic parent have approximately three times the risk of developing myopia, while those with two myopic parents have a six-fold increased risk. However, environmental factors play an increasingly significant role in the global myopia epidemic. Prolonged near work activities—such as extensive reading, computer use, and smartphone screen time—place sustained focusing demand on the eyes, potentially triggering axial elongation of the eyeball. Recent research has also identified insufficient time spent outdoors as a major risk factor, with natural daylight exposure appearing to have a protective effect against myopia development and progression. Other contributing factors include inadequate lighting during near work, poor posture while reading, nutritional deficiencies, and certain medical conditions. Asian ethnicity, premature birth, and urban living environments have also been associated with higher myopia rates.
            </p>
            <p>
              Professional myopia treatment and management are essential not only for vision correction but also for preventing long-term complications associated with high myopia. While glasses and contact lenses provide immediate visual clarity, comprehensive myopia care—especially in children—now includes strategies to slow progression and reduce the risk of developing high myopia. High myopia (typically defined as -6.00 diopters or greater) significantly increases the lifetime risk of serious eye conditions including retinal detachment, myopic macular degeneration, glaucoma, and cataracts. At Spark Eye Care in Kyle, our approach combines accurate diagnosis through comprehensive eye examinations, personalized vision correction solutions, and evidence-based myopia control strategies. We stay current with the latest advances in myopia management, including specialized contact lenses, atropine therapy, and lifestyle modifications, ensuring that each patient receives optimal care tailored to their age, lifestyle, and progression risk. Early intervention, particularly during childhood when myopia typically progresses most rapidly, can make a meaningful difference in long-term eye health and vision outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Myopia (Nearsightedness)
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Visual Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Blurry Distance Vision</span>
                    <p className="text-[var(--color-muted)]">Difficulty seeing distant objects clearly such as street signs, movie screens, or people across a room while near vision remains sharp.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Squinting</span>
                    <p className="text-[var(--color-muted)]">Frequent squinting or partially closing the eyelids when trying to see distant objects, which temporarily improves focus by reducing light scatter.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty with Night Vision</span>
                    <p className="text-[var(--color-muted)]">Increased difficulty seeing at night or in low-light conditions, making evening driving particularly challenging and potentially unsafe.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Needing to Sit Closer</span>
                    <p className="text-[var(--color-muted)]">Preference for sitting near the front of classrooms, movie theaters, or close to the television to see clearly.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Unaware of Distant Objects</span>
                    <p className="text-[var(--color-muted)]">Not noticing or recognizing people or objects in the distance that others can see, leading to missed social cues or hazards.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Halos Around Lights</span>
                    <p className="text-[var(--color-muted)]">Seeing halos or glare around lights, especially at night, which can interfere with driving and nighttime activities.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Reading Boards</span>
                    <p className="text-[var(--color-muted)]">Trouble reading classroom whiteboards, presentation screens, or scoreboards at sporting events from a normal viewing distance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Physical & Behavioral Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Eye Strain and Fatigue</span>
                    <p className="text-[var(--color-muted)]">Tired, achy eyes after activities requiring distance vision, resulting from the constant effort to bring distant objects into focus.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Headaches</span>
                    <p className="text-[var(--color-muted)]">Frequent headaches, particularly after extended periods of trying to focus on distant objects or after driving or watching television.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Excessive Eye Rubbing</span>
                    <p className="text-[var(--color-muted)]">Frequently rubbing the eyes due to strain and fatigue from uncorrected vision, particularly in children during or after school.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Academic Difficulties</span>
                    <p className="text-[var(--color-muted)]">Children may experience declining school performance, difficulty copying from the board, or reluctance to participate in activities requiring distance vision.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Reduced Sports Performance</span>
                    <p className="text-[var(--color-muted)]">Difficulty with sports involving tracking distant objects like balls, affecting athletic performance and enjoyment of physical activities.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Frequent Prescription Changes</span>
                    <p className="text-[var(--color-muted)]">Needing stronger glasses or contact lens prescriptions at regular intervals, especially during childhood and adolescence as myopia progresses.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Avoidance of Distance Activities</span>
                    <p className="text-[var(--color-muted)]">Reluctance to engage in activities requiring good distance vision, such as driving at night, attending concerts, or participating in outdoor sports.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Our comprehensive eye examinations can accurately diagnose myopia and determine the best correction and management strategy for your individual needs.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Myopia (Nearsightedness)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination including refraction testing, binocular vision assessment, and evaluation of eye health using advanced diagnostic technology. We measure the exact degree of myopia, assess eye focusing and alignment, and examine the retina and other internal structures to rule out complications. For children and progressive myopia cases, we also measure axial length to establish a baseline for monitoring progression over time.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your examination findings, age, lifestyle, and visual demands, we develop a customized treatment plan. Options include prescription eyeglasses for full-time or specific-task wear, contact lenses including daily disposables or specialty designs, and for children or rapidly progressing cases, myopia control strategies. We discuss the benefits and considerations of each option, ensuring you understand your choices and feel confident in your treatment path.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Regular follow-up appointments ensure your vision correction remains optimal and your eyes stay healthy. We monitor for prescription changes, especially important during childhood and adolescence when myopia typically progresses. For patients using myopia control treatments, we track effectiveness through periodic measurements and adjust strategies as needed. Annual comprehensive eye exams remain essential for all myopic patients to screen for complications associated with higher degrees of nearsightedness.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Evidence-Based Treatment Modalities</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              At Spark Eye Care, we utilize the full spectrum of evidence-based myopia treatments tailored to each patient's needs. For vision correction, we prescribe single-vision glasses with anti-reflective coating to reduce glare, contact lenses including soft daily disposables and rigid gas permeable lenses for crisp optics, and specialty contact lenses for patients with higher prescriptions or astigmatism.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              For myopia control—particularly important for children and adolescents—we offer several proven approaches including orthokeratology (ortho-k) corneal reshaping lenses worn overnight to temporarily correct vision and slow progression, multifocal soft contact lenses designed with peripheral defocus to reduce eye elongation, low-dose atropine eye drops (0.01% to 0.05%) which have shown significant efficacy in slowing myopia progression with minimal side effects, and lifestyle modifications including increased outdoor time and proper near work habits. We also provide co-management for patients considering refractive surgery options like LASIK or PRK once their prescription has stabilized in adulthood. Each treatment is selected based on current research, your specific clinical presentation, and your personal preferences and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Myopia (Nearsightedness) Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Expert Care</h3>
              <p className="text-[var(--color-muted)]">
                Our optometrists bring extensive experience in myopia management and stay current with the latest advances in vision correction and myopia control strategies.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient is unique, tailoring our myopia treatment plans to your specific prescription, age, lifestyle demands, and long-term vision goals.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Advanced Technology</h3>
              <p className="text-[var(--color-muted)]">
                Our practice utilizes state-of-the-art diagnostic equipment for precise measurements and monitoring, ensuring optimal vision correction and myopia management outcomes.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Convenient Access</h3>
              <p className="text-[var(--color-muted)]">
                Located in Kyle with flexible scheduling options, we make it easy for you and your family to receive comprehensive myopia care close to home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">1</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination typically takes 45-60 minutes and includes detailed testing of your vision, eye health, and refractive error. We'll discuss your visual symptoms, lifestyle needs, and if applicable, myopia control options. You'll leave with a clear understanding of your diagnosis, prescription, and recommended treatment plan. If glasses or contact lenses are prescribed, most patients receive them within 7-10 days.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">2</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once you receive your glasses or contact lenses, most patients experience immediate improvement in distance vision clarity. For contact lens wearers, we schedule a follow-up visit to ensure proper fit, comfort, and vision. If you're beginning myopia control treatment such as orthokeratology or atropine therapy, we provide detailed instructions and schedule more frequent initial monitoring. This adjustment period allows your eyes to adapt to the new correction, and we're available to address any questions or concerns.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">3</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After you've been wearing your vision correction for several weeks, we schedule a progress check to ensure everything is working optimally. We verify that your prescription is providing clear, comfortable vision and address any adaptation issues. For myopia control patients, we assess treatment effectiveness and compliance. This visit is an opportunity to fine-tune your treatment plan based on your real-world experience.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-[family-name:var(--font-cormorant)] text-6xl font-light text-[var(--color-primary)] flex-shrink-0">4</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Annual comprehensive eye examinations are essential for all myopic patients to monitor prescription changes and screen for eye health complications. Children and adolescents with progressive myopia may need more frequent visits—typically every six months—to track progression and adjust myopia control treatments. Adults with stable prescriptions typically transition to annual routine care. Our long-term goal is preserving your eye health, maintaining clear vision, and for younger patients, minimizing progression to reduce the risk of high myopia complications later in life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Myopia (Nearsightedness)
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                How long does myopia treatment take to work?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Vision correction with glasses or contact lenses provides immediate clarity—you'll notice the difference as soon as you put them on. However, for myopia control treatments aimed at slowing progression in children, the timeline is longer-term. Orthokeratology lenses typically provide clear daytime vision within 1-2 weeks of overnight wear, while the progression-slowing effects accumulate over months and years. Low-dose atropine therapy and specialty multifocal contact lenses work gradually to slow eye growth, with effectiveness assessed through periodic measurements every 6-12 months. The goal of myopia control is not immediate but rather long-term reduction in the rate of prescription increase and final myopia level.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Can myopia be cured or reversed?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Currently, myopia cannot be completely cured or reversed through non-surgical means, as it results from the physical elongation of the eyeball or excessive corneal curvature. However, myopia can be effectively corrected with glasses, contact lenses, or refractive surgery (such as LASIK or PRK) once the prescription stabilizes in adulthood. More importantly, myopia control treatments can significantly slow progression in children and adolescents, potentially preventing them from developing high myopia and its associated complications. While these interventions don't eliminate existing myopia, they can reduce how much worse it becomes. Orthokeratology provides temporary corneal reshaping that allows clear daytime vision without correction, but the effect reverses if lens wear is discontinued. The focus of modern myopia management is on optimal correction for clear vision and, especially in young patients, interventions to limit progression.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Does insurance cover myopia treatment?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most vision insurance plans and many medical insurance plans cover routine comprehensive eye examinations for myopia, though coverage details vary by plan. Standard vision correction with prescription glasses or contact lenses is typically covered under vision insurance plans, often with an allowance toward frames and lenses or contact lenses annually. However, specialized myopia control treatments—such as orthokeratology lenses, multifocal contact lenses specifically for myopia control, or low-dose atropine therapy—may not be covered by all insurance plans, as they are often considered elective or specialized treatments. We recommend checking with your insurance provider regarding coverage for these services. Our staff is happy to provide detailed billing codes and documentation to help you maximize your benefits. For services not covered by insurance, we offer transparent pricing and can discuss payment options.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                At what age should myopia treatment begin?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Vision correction for myopia should begin as soon as it's diagnosed, regardless of age, to ensure clear vision for learning, safety, and quality of life. Children can typically be fitted with glasses as young as one or two years old if needed. For myopia control treatments specifically aimed at slowing progression, the ideal age to begin is typically between 6 and 14 years old, when myopia most commonly develops and progresses most rapidly. Starting myopia control early in this window—ideally when myopia is first detected or when there's a family history suggesting high risk—offers the greatest benefit in limiting final myopia levels. However, myopia control can still be beneficial for teenagers, as progression often continues into the late teens or early twenties. Adult myopia treatment focuses on optimal vision correction and monitoring for complications rather than progression control, though adults with stable prescriptions may be candidates for refractive surgery.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                What if my child's myopia keeps getting worse despite treatment?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                While myopia control treatments significantly slow progression, they typically don't stop it completely, and individual responses vary. If your child's myopia continues to progress despite treatment, we first assess treatment compliance and technique—for example, ensuring orthokeratology lenses are worn every night or that atropine drops are used consistently. We may then adjust the treatment approach, such as increasing atropine concentration (within safe parameters), switching to a different contact lens design, or combining multiple modalities for enhanced effect. It's important to understand that "slowing" progression is success—even if the prescription still changes, the rate may be 30-60% slower than it would have been without intervention, which can make a significant difference in final myopia level and long-term eye health. We closely monitor each patient's progression with objective measurements and modify treatment plans as needed to achieve the best possible outcome.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Are there any lifestyle changes that can help with myopia?
                <span className="float-right group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, research has identified several lifestyle modifications that can help reduce myopia progression risk, particularly in children. Increasing outdoor time is one of the most significant protective factors—studies show that 1-2 hours of outdoor activity daily can reduce myopia development and progression risk, likely due to bright natural light exposure and distance viewing. Reducing prolonged near work is also beneficial: taking regular breaks during reading, computer use, or device time using the 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds) can reduce eye strain. Maintaining proper lighting during near tasks, holding reading material at an appropriate distance (not closer than 12-16 inches), and ensuring good posture all contribute to healthier visual habits. Limiting recreational screen time and emphasizing outdoor sports and activities provide dual benefits of reduced near work and increased outdoor exposure. While lifestyle modifications alone may not completely prevent myopia in genetically predisposed children, they complement other treatment strategies and support overall eye health.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/astigmatism" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Astigmatism
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Irregular corneal curvature causing blurred or distorted vision at all distances, often occurring alongside myopia.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">Learn more →</span>
            </a>
            <a href="/conditions/presbyopia" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Presbyopia
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Age-related difficulty focusing on near objects, which can affect myopic patients requiring multifocal correction.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">Learn more →</span>
            </a>
            <a href="/conditions/computer-vision-syndrome" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Digital Eye Strain
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Eye discomfort from prolonged screen use, commonly experienced by myopic individuals during near work activities.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-4">
            Get Help for Myopia (Nearsightedness) Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            You don't have to face myopia alone. Our team is ready to help you achieve clear, comfortable vision and protect your long-term eye health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block min-w-[200px]"
            >
              Schedule Consultation
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-block min-w-[200px]"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}