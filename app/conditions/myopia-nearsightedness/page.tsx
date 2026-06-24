import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Myopia (Nearsightedness) Treatment in Kyle | Spark Eye Care',
  description: 'Expert myopia treatment in Kyle. Board-certified eye care for nearsightedness with personalized treatment plans, advanced therapies, and telehealth options.',
  keywords: 'myopia treatment Kyle, nearsightedness Kyle, myopia management, vision correction Kyle, eye care Kyle',
  openGraph: {
    title: 'Myopia (Nearsightedness) Treatment in Kyle | Spark Eye Care',
    description: 'Expert myopia treatment in Kyle. Board-certified eye care for nearsightedness with personalized treatment plans.',
    url: 'https://www.sparkeyetx.com/conditions/myopia-nearsightedness',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function MyopiaPage() {
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
            <span>Myopia (Nearsightedness)</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Myopia (Nearsightedness) Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Clear vision shouldn't be limited to what's right in front of you. At Spark Eye Care, we provide comprehensive myopia management and treatment solutions to help you see clearly at all distances, protecting your long-term vision health.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Myopia (Nearsightedness)
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Myopia, commonly known as nearsightedness, is a refractive error where distant objects appear blurry while close objects remain clear. This occurs when the eye grows too long from front to back, or when the cornea has too much curvature, causing light rays to focus in front of the retina rather than directly on it. Myopia affects approximately 30% of the U.S. population and up to 90% of young adults in some Asian countries, making it one of the most prevalent vision conditions worldwide. Beyond the inconvenience of blurry distance vision, myopia can significantly impact daily activities like driving, watching movies, playing sports, and recognizing faces across a room. For children, it can affect classroom learning, athletic performance, and social confidence, making early detection and management crucial.
            </p>
            <p>
              The causes of myopia are multifactorial, involving both genetic and environmental components. Children with one myopic parent have a two to three times higher risk of developing myopia, while having two myopic parents increases the risk five to six times. Environmental factors play an increasingly significant role in what researchers call the "myopia epidemic." Prolonged near work activities such as reading, computer use, and smartphone screen time strain the focusing system and encourage axial elongation of the eye. Studies show that children who spend less than 90 minutes outdoors daily have higher myopia rates compared to those with more outdoor exposure, as natural light and distance viewing help regulate eye growth. Other risk factors include early onset of myopia (before age 8), rapid progression rates, higher education levels, and urban living environments with limited access to outdoor spaces and natural lighting.
            </p>
            <p>
              Professional myopia management is essential because nearsightedness is not just about needing glasses or contact lenses—it's a progressive condition that increases the risk of serious eye health complications. High myopia (prescriptions stronger than -6.00 diopters) significantly elevates the lifetime risk of retinal detachment, myopic macular degeneration, glaucoma, and cataracts. These sight-threatening conditions can develop even with corrective lenses, making myopia control strategies critical, especially for children. Modern myopia management goes beyond simple vision correction to actually slow the progression of eye elongation through specialized treatments like orthokeratology, atropine therapy, multifocal contact lenses, and lifestyle modifications. Early intervention during childhood and adolescence, when myopia progresses most rapidly, can reduce final prescription strength by 30-60%, substantially lowering future eye health risks. At Spark Eye Care in Kyle, we combine comprehensive eye examinations with evidence-based myopia control strategies to protect not just your current vision, but your lifelong eye health.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Myopia (Nearsightedness)
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Visual & Functional Symptoms</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Blurry Distance Vision</p>
                    <p className="text-[var(--color-muted)]">Difficulty seeing objects far away clearly, such as road signs, whiteboards, or faces across a room, while near vision remains sharp.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Frequent Squinting</p>
                    <p className="text-[var(--color-muted)]">Habitually squinting or partially closing eyelids to temporarily improve focus and clarity when looking at distant objects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Eye Strain and Fatigue</p>
                    <p className="text-[var(--color-muted)]">Tired, aching eyes especially after activities requiring distance vision like driving, watching television, or attending lectures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Frequent Headaches</p>
                    <p className="text-[var(--color-muted)]">Recurring headaches, particularly frontal or temporal, caused by the constant effort to focus on distant objects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Difficulty with Night Driving</p>
                    <p className="text-[var(--color-muted)]">Increased difficulty seeing clearly in low light conditions, particularly when driving at night or in poorly lit environments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Need to Sit Closer</p>
                    <p className="text-[var(--color-muted)]">Consistently sitting closer to the television, movie screen, or front of the classroom to see clearly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Excessive Eye Rubbing</p>
                    <p className="text-[var(--color-muted)]">Frequently rubbing eyes due to strain, fatigue, or the subconscious attempt to clear blurry vision.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-primary)]">Behavioral & Developmental Signs</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Academic Difficulties</p>
                    <p className="text-[var(--color-muted)]">Struggling to see the whiteboard or smartboard in school, leading to missed information, incomplete notes, and declining grades.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Sports Performance Issues</p>
                    <p className="text-[var(--color-muted)]">Difficulty tracking balls, judging distances, or seeing teammates and opponents clearly during athletic activities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Avoidance of Distance Activities</p>
                    <p className="text-[var(--color-muted)]">Showing disinterest in activities that require good distance vision, such as outdoor sports, hiking, or bird watching.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Lack of Awareness of Surroundings</p>
                    <p className="text-[var(--color-muted)]">Not recognizing people from a distance or appearing inattentive to environmental details and distant objects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Holding Objects Very Close</p>
                    <p className="text-[var(--color-muted)]">Bringing books, phones, tablets, or other objects unusually close to the face, even though near vision is typically unaffected.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Rapid Prescription Changes</p>
                    <p className="text-[var(--color-muted)]">Needing frequent updates to eyeglass or contact lens prescriptions, indicating progressive myopia that requires management.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] mb-1">Social Withdrawal</p>
                    <p className="text-[var(--color-muted)]">Reluctance to participate in group activities or social situations where distance vision is important, leading to isolation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or your child, help is available. Early detection and treatment of myopia leads to better visual outcomes and significantly reduces the risk of future eye health complications.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Myopia (Nearsightedness)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough eye examination including refraction testing, axial length measurement, and retinal evaluation to determine your current myopia level and progression rate. We assess your visual demands, lifestyle factors, family history, and age to understand the full picture. Advanced diagnostic technology helps us measure corneal curvature, pupil size, and eye health markers that guide personalized treatment recommendations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Customized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment results, we develop a personalized myopia management strategy tailored to your specific needs and goals. For children and teens, we focus on myopia control interventions to slow progression. For adults, we emphasize optimal vision correction and long-term eye health monitoring. Your plan may combine multiple approaches for maximum effectiveness, and we explain each option's benefits, expectations, and any required commitments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Myopia management requires regular follow-up to track progression, adjust treatments, and ensure optimal results. We schedule periodic evaluations to measure changes in prescription, axial length, and eye health. Treatment effectiveness is continuously assessed, and modifications are made as needed based on your response. We provide education on lifestyle factors that influence myopia progression and celebrate the milestones achieved through consistent care and commitment to treatment protocols.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              At Spark Eye Care, we utilize evidence-based myopia treatment modalities proven to slow progression and protect long-term vision. <strong>Orthokeratology (Ortho-K)</strong> involves specially designed gas-permeable contact lenses worn overnight to gently reshape the cornea, providing clear daytime vision without glasses or contacts while slowing axial elongation by 30-50%. <strong>Low-dose atropine eye drops</strong> (0.01-0.05% concentration) have demonstrated significant myopia control with minimal side effects, reducing progression by approximately 50% in clinical studies. <strong>Multifocal soft contact lenses</strong> designed with peripheral defocus technology slow eye growth by 25-50% while providing clear vision throughout the day. For standard vision correction, we offer <strong>single-vision glasses and contact lenses</strong> in the latest materials and designs, as well as comprehensive education on <strong>environmental modifications</strong> including increased outdoor time (2+ hours daily), the 20-20-20 rule for screen use (every 20 minutes, look 20 feet away for 20 seconds), proper lighting, and optimal working distances. We also provide guidance on <strong>refractive surgery consultations</strong> for adults with stable prescriptions interested in LASIK, PRK, or ICL procedures. Our integrative approach addresses both immediate visual needs and long-term eye health goals, giving you the comprehensive care myopia truly requires.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Myopia (Nearsightedness) Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Excellence</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our eye care professionals maintain the highest credentials and stay current with the latest myopia research and treatment innovations through continuing education.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient's myopia is unique, creating individualized treatment plans based on your specific prescription, age, lifestyle, and vision goals.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Telehealth Options</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Access myopia consultations, follow-up appointments, and treatment guidance from the comfort of your home through our secure telehealth platform when appropriate.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Specialized Myopia Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We have extensive experience treating all levels of myopia, from mild nearsightedness to high myopia, with proven myopia control strategies for children and adults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination includes detailed refraction testing, axial length measurement using advanced biometry, retinal health assessment, and corneal topography. We discuss your visual symptoms, lifestyle demands, family history, and treatment goals. You'll receive a clear explanation of your myopia level, progression risk, and all available treatment options. We answer your questions thoroughly and develop a preliminary treatment plan. This appointment typically takes 60-90 minutes and establishes the baseline for monitoring your progress throughout treatment.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your treatment plan is finalized, we initiate your chosen interventions. For orthokeratology, this involves custom lens fitting, insertion and removal training, and follow-up visits to assess corneal response and visual outcomes. Atropine therapy begins with proper administration instruction and discussion of what to expect. Multifocal contact lens wearers receive fitting sessions and adaptation support. Standard eyeglasses or contact lenses are prescribed and dispensed with proper usage guidance. We provide detailed written instructions, respond to any concerns promptly, and schedule your first progress check.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At your follow-up appointment, we reassess your vision, measure any prescription changes, evaluate eye health, and review treatment adherence and effectiveness. For myopia control patients, we compare current axial length measurements to baseline data to quantify progression rates. We discuss what's working well, address any challenges you're experiencing, and make treatment adjustments if needed. This is an opportunity to refine your plan based on real-world results. We reinforce positive behaviors and provide additional education on environmental factors that support treatment success.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Myopia management is a multi-year commitment, especially for children and adolescents whose eyes are still growing. We typically schedule progress evaluations every 6-12 months to track prescription stability, axial length changes, and overall eye health. As you or your child matures, treatment may be gradually adjusted or transitioned based on age-appropriate needs and myopia stabilization. Adults with stable myopia continue with regular eye exams to monitor for any myopia-related complications. Our goal is to minimize final prescription strength, reduce future eye disease risk, and maintain optimal vision throughout your lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Myopia (Nearsightedness)
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                How long does myopia treatment take to show results?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  The timeline depends on your specific treatment approach. Standard eyeglasses and contact lenses provide immediate vision correction—you'll see clearly as soon as you put them on. Orthokeratology typically produces noticeable results within the first few days to weeks, with full stabilization in 1-2 weeks. However, myopia control treatments like Ortho-K, atropine drops, and multifocal lenses are designed to slow progression over months and years, not provide instant correction. Measurable slowing of axial elongation becomes evident at 6-12 month follow-ups when we compare progression rates to untreated historical data. The greatest benefits of myopia management are realized over the long term—reducing your final prescription strength and lowering lifetime risk of sight-threatening complications. Consistency and patience are essential for optimal outcomes.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Is medication required for myopia treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Medication is not required for basic myopia correction—eyeglasses and contact lenses effectively correct blurry vision without any drugs. However, low-dose atropine eye drops are an evidence-based medication option for myopia control in children and teenagers. Atropine 0.01-0.05% has been extensively studied and shown to slow myopia progression by approximately 50% with minimal side effects. The drops are administered once nightly before bed, and most patients experience no light sensitivity or near vision blur at these low concentrations. Atropine is often combined with other interventions like orthokeratology or multifocal lenses for enhanced effectiveness. Not all myopia patients need atropine, and we carefully evaluate whether it's appropriate based on your age, progression rate, and overall treatment goals. The decision to use medication is always made collaboratively with thorough discussion of benefits and potential side effects.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Does insurance cover myopia treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Insurance coverage for myopia treatment varies significantly by plan and specific services. Most vision insurance plans cover routine eye examinations and provide allowances toward eyeglasses or contact lenses. Medical insurance typically covers comprehensive eye exams when medically necessary and treatment of eye diseases or complications. However, specialized myopia control interventions like orthokeratology, atropine therapy, and multifocal contact lenses designed specifically for myopia management are often not covered or only partially covered, as they may be considered elective or investigational by some insurers. Coverage is improving as myopia control becomes more widely recognized as preventive medicine. We recommend contacting your insurance provider to verify your specific benefits for eye exams, vision correction, and myopia management services. Our office can provide detailed documentation and diagnostic codes to support medical necessity claims when appropriate. We're committed to working with you to maximize your benefits and offer flexible payment options for out-of-pocket expenses.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                What if my myopia treatment isn't working?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  If your myopia continues to progress despite treatment, we have several strategies to optimize outcomes. First, we conduct a thorough evaluation to determine why treatment may be less effective—this might include assessing treatment compliance (are lenses being worn as prescribed?), examining fit and comfort issues, reviewing environmental factors like screen time and outdoor exposure, and measuring actual axial length changes objectively. Sometimes simple adjustments like increasing atropine concentration, modifying ortho-K lens parameters, or switching contact lens modalities can significantly improve results. We may recommend combining multiple treatment approaches for additive effects—for example, using both atropine drops and orthokeratology together. In some cases, genetic factors or rapid growth periods make complete progression control difficult, but even partial slowing provides meaningful long-term benefits. We remain committed to your care, continuously refining your treatment plan based on your individual response and the latest research findings. Open communication about your experience is essential, so we can make timely adjustments and set realistic expectations together.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                Can telehealth work for myopia treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Telehealth can be a valuable component of myopia care for certain aspects of treatment, though in-person visits remain essential for comprehensive evaluation and monitoring. Initial diagnostic appointments require in-office visits for refraction testing, axial length measurement, eye health examination, and specialized imaging that cannot be performed remotely. Similarly, contact lens fittings, orthokeratology assessments, and detailed retinal evaluations need hands-on examination. However, telehealth is very effective for follow-up consultations, treatment compliance discussions, troubleshooting minor issues, reviewing test results, adjusting medication dosages, providing education about lifestyle modifications, and answering questions between scheduled in-person visits. Many patients appreciate the convenience of virtual check-ins for routine monitoring when no physical examination is needed. We utilize a hybrid approach—combining necessary in-office visits for objective measurements and clinical assessments with convenient telehealth appointments for ongoing support, education, and minor adjustments. This model optimizes both clinical outcomes and patient convenience while maintaining the highest standard of care.
                </p>
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)]">
                At what age should myopia treatment begin?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Myopia can be detected and vision corrected at any age, but myopia control interventions are most beneficial when started early in childhood. Research shows that children who develop myopia before age 8-10 tend to progress to higher final prescriptions, making them ideal candidates for aggressive myopia management. We generally recommend initiating myopia control treatments as soon as progressive myopia is identified, typically between ages 6-12, when eye growth is most active and intervention can have the greatest impact. However, myopia control can still be effective in teenagers and young adults whose prescriptions are still changing. For very young children (under age 6), we focus on vision correction with glasses, regular monitoring, and lifestyle modifications like increased outdoor time and reduced near work. Adults with stable myopia primarily need appropriate vision correction and regular eye health screenings to detect any myopia-related complications early. The key is individualized assessment—we evaluate each patient's age, progression rate, prescription strength, and risk factors to determine the optimal timing and approach for treatment.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/astigmatism" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Astigmatism</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Blurred or distorted vision at all distances caused by irregular corneal curvature, often occurring alongside myopia.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn More →</span>
            </a>
            <a href="/conditions/presbyopia" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Presbyopia</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Age-related difficulty focusing on close objects, typically beginning in the 40s and requiring reading glasses or multifocal lenses.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn More →</span>
            </a>
            <a href="/conditions/dry-eye-syndrome" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Dry Eye Syndrome</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Chronic eye discomfort, burning, and irritation caused by insufficient tear production or poor tear quality, common among contact lens wearers.
              </p>
              <span className="text-[var(--color-primary)] font-semibold hover:underline">Learn More →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Myopia (Nearsightedness) Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face myopia alone. Our team is ready to help you achieve clearer vision and protect your long-term eye health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule a Consultation
            </a>
            <a
              href="/conditions"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}