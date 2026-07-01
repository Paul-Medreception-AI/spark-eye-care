import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hyperopia (Farsightedness) Treatment in Kyle | Spark Eye Care',
  description: 'Expert hyperopia (farsightedness) diagnosis and treatment in Kyle, TX. Comprehensive vision correction solutions including glasses, contacts, and surgical options. Schedule your eye exam today.',
  keywords: 'hyperopia treatment Kyle, farsightedness Kyle TX, vision correction Kyle, eye care Kyle, refractive error treatment, eye doctor Kyle',
  openGraph: {
    title: 'Hyperopia (Farsightedness) Treatment in Kyle | Spark Eye Care',
    description: 'Expert hyperopia (farsightedness) diagnosis and treatment in Kyle, TX. Comprehensive vision correction solutions for clearer near vision.',
    url: 'https://sparkeyetx.com/conditions/hyperopia-farsightedness',
    type: 'website',
  }
}

export default function HyperopiaFarsightednessPage() {
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
            <span>Hyperopia (Farsightedness)</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Hyperopia (Farsightedness) Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl opacity-95">
            Hyperopia, commonly known as farsightedness, affects millions of Americans and can significantly impact your quality of life, from reading and computer work to everyday tasks. At Spark Eye Care, we provide comprehensive diagnosis and personalized treatment solutions to help you achieve clear, comfortable vision at all distances.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Hyperopia (Farsightedness)
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Hyperopia, or farsightedness, is a common refractive error where distant objects may be seen clearly, but close objects appear blurry. This condition occurs when the eye is too short relative to its focusing power, or when the cornea is too flat, causing light rays to focus behind the retina instead of directly on it. Affecting approximately 5-10% of the U.S. population, hyperopia can range from mild to severe and impacts people of all ages, though it becomes more noticeable as we age and our eyes' natural focusing ability diminishes. Many people with mild hyperopia may not notice symptoms in childhood or young adulthood because the eye's lens can compensate, but as the eye's focusing muscles tire over time, symptoms become more apparent, affecting reading, computer work, and other near tasks.
            </p>
            <p>
              The causes of hyperopia are primarily related to the eye's structural development and genetics. Most commonly, it results from an eyeball that is slightly shorter than normal or a cornea that has insufficient curvature. Family history plays a significant role—if one or both parents have hyperopia, children are more likely to develop it. Unlike myopia (nearsightedness), which often develops during school years and progresses through adolescence, hyperopia is typically present from birth and may improve, worsen, or remain stable as the eye grows. Other contributing factors include aging, which naturally reduces the eye's ability to accommodate and focus on near objects (a condition called presbyopia that compounds hyperopia), and certain medical conditions such as diabetes, which can temporarily affect focusing ability.
            </p>
            <p>
              Professional treatment for hyperopia is essential not just for visual clarity, but for preventing long-term complications and maintaining quality of life. Untreated hyperopia can lead to chronic eye strain, persistent headaches, and accommodative dysfunction, where the eyes struggle constantly to maintain focus, causing fatigue and discomfort. In children, uncorrected hyperopia can result in amblyopia (lazy eye) or strabismus (crossed eyes) if the brain favors one eye over the other. Adults may find that uncorrected hyperopia significantly impacts work productivity, reading enjoyment, and safety during activities like driving. At Spark Eye Care in Kyle, we conduct thorough refractive examinations to accurately diagnose the degree of hyperopia and develop individualized treatment plans that address your specific visual needs, lifestyle, and goals. Early intervention and appropriate correction can dramatically improve daily function, reduce eye strain, and enhance overall visual comfort and performance.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Hyperopia (Farsightedness)
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Visual Symptoms</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Blurred Near Vision</span>
                    <p className="text-[var(--color-muted)]">Difficulty seeing objects clearly at close range, especially when reading, using smartphones, or doing detailed work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Eye Strain and Fatigue</span>
                    <p className="text-[var(--color-muted)]">A feeling of tired, achy eyes after reading or close work as the focusing muscles work overtime to compensate.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Headaches</span>
                    <p className="text-[var(--color-muted)]">Frequent headaches, particularly across the forehead or around the eyes, especially after prolonged near work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Focusing</span>
                    <p className="text-[var(--color-muted)]">Trouble switching focus between near and far objects, or needing extra time for eyes to adjust when changing distances.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Squinting When Reading</span>
                    <p className="text-[var(--color-muted)]">Habitually squinting or holding reading materials at arm's length to see text more clearly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Burning or Aching Eyes</span>
                    <p className="text-[var(--color-muted)]">A persistent burning sensation or dull ache in and around the eyes, especially during or after close work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Poor Reading Comprehension</span>
                    <p className="text-[var(--color-muted)]">Difficulty concentrating on reading material or losing your place frequently due to visual discomfort.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Behavioral & Functional Symptoms</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Avoidance of Close Work</span>
                    <p className="text-[var(--color-muted)]">Reluctance to engage in reading, crafts, or other activities requiring sustained near vision due to discomfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Reduced Work Productivity</span>
                    <p className="text-[var(--color-muted)]">Decreased efficiency with computer work, paperwork, or detailed tasks due to visual fatigue and strain.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Eye Rubbing</span>
                    <p className="text-[var(--color-muted)]">Frequent rubbing of the eyes, particularly in children, as a response to visual stress and discomfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Poor Academic Performance (Children)</span>
                    <p className="text-[var(--color-muted)]">Children may struggle with reading assignments or homework, leading to frustration and declining grades.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Need for Extra Lighting</span>
                    <p className="text-[var(--color-muted)]">Requiring brighter light than usual when reading or doing close work to see comfortably.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Crossed Eyes (Children)</span>
                    <p className="text-[var(--color-muted)]">In moderate to severe cases, children may develop accommodative esotropia, where one or both eyes turn inward.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">General Fatigue</span>
                    <p className="text-[var(--color-muted)]">Feeling unusually tired at the end of the day, particularly after activities requiring sustained focus on near objects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs in yourself or a family member, help is available. Early treatment leads to better outcomes, improved comfort, and enhanced quality of life. Schedule a comprehensive eye examination at Spark Eye Care in Kyle today.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Hyperopia (Farsightedness)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-dark)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough refractive examination using advanced diagnostic technology including retinoscopy, autorefraction, and subjective refraction to precisely measure the degree of hyperopia. We assess your visual acuity at multiple distances, evaluate your eye's focusing ability and accommodative function, and examine the overall health of your eyes to rule out other conditions. We also discuss your lifestyle, visual demands, and treatment goals to create a personalized care plan.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-dark)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we develop a customized correction strategy tailored to your needs. Treatment options may include prescription eyeglasses designed specifically for your hyperopia, which provide immediate clear vision for near and far distances. Contact lenses offer an alternative for those seeking freedom from frames, available in various designs including daily disposables, monthlies, and specialty multifocal options. We carefully explain each option, demonstrate proper use and care, and help you select the solution that best fits your lifestyle and preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-dark)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Vision changes over time, and we're committed to your long-term eye health. We schedule regular follow-up appointments to monitor your vision, assess the effectiveness of your current correction, and make adjustments as needed. Annual comprehensive eye exams ensure your prescription remains accurate and allow us to detect any changes in your eye health early. For patients considering surgical correction such as LASIK or PRK, we provide thorough consultations, candidacy evaluations, and co-management with experienced refractive surgeons to ensure optimal outcomes.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Our treatment approach is grounded in evidence-based optometric care and the latest advancements in vision correction technology. For most patients with hyperopia, corrective lenses—either eyeglasses or contact lenses—provide excellent visual outcomes and immediate relief from symptoms. Eyeglasses with convex (plus) lenses bend light rays to focus them properly on the retina, compensating for the eye's refractive error. Modern lens materials include lightweight polycarbonate, high-index plastics for thinner profiles, and advanced anti-reflective coatings that reduce glare and improve visual clarity, especially during computer work and night driving. For contact lens wearers, we offer a full range of options including soft daily disposable lenses, extended-wear monthlies, rigid gas permeable lenses for higher prescriptions, and multifocal designs for patients with both hyperopia and presbyopia. For patients interested in a more permanent solution, we provide comprehensive consultations for refractive surgery options including LASIK (laser-assisted in situ keratomileusis), PRK (photorefractive keratectomy), and other procedures that reshape the cornea to correct the refractive error. While we do not perform surgery on-site, we partner with leading refractive surgeons in the area and provide complete pre-operative evaluations and post-operative care. Throughout your treatment journey, our focus remains on delivering the highest quality care, ensuring your comfort, and helping you achieve the clearest, most comfortable vision possible for your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Hyperopia (Farsightedness) Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">Expert Optometric Care</h3>
              <p className="text-[var(--color-muted)]">
                Board-certified optometrists with extensive experience in diagnosing and treating refractive errors, committed to staying current with the latest vision correction technologies and techniques.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's vision needs and lifestyle are unique. Your treatment plan is customized to your specific prescription, visual demands, aesthetic preferences, and long-term goals.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                Convenient virtual consultations for follow-up care, questions about your prescription, contact lens troubleshooting, and preliminary evaluations, making quality eye care accessible from home.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-dark)]">Comprehensive Experience</h3>
              <p className="text-[var(--color-muted)]">
                Years of experience treating hyperopia in patients of all ages, from children needing their first glasses to adults managing age-related vision changes and presbyopia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-dark)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination typically takes 60-90 minutes and includes a detailed health history, measurement of your current visual acuity, precise refraction to determine your prescription, assessment of eye muscle function and focusing ability, and a thorough evaluation of eye health using advanced diagnostic equipment. We'll discuss your symptoms, lifestyle needs, and treatment options, and you'll leave with a clear understanding of your diagnosis and recommended correction. If you choose eyeglasses, we'll help you select frames and order your lenses; if contact lenses, we'll perform additional measurements and may provide trial lenses to take home.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-dark)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your custom eyeglasses typically arrive within 7-14 days, depending on lens complexity. When you pick them up, we'll ensure proper fit and alignment and teach you how to care for your new glasses. For contact lenses, you'll return for a fitting appointment where we'll teach you insertion, removal, and care techniques, and verify the lenses provide clear, comfortable vision. Most patients adapt quickly to their new correction, experiencing immediate improvement in near vision clarity and reduction in eye strain. We encourage you to wear your correction consistently as prescribed to allow your visual system to fully adjust. Some patients may experience a brief adaptation period (a few days to two weeks) as their eyes adjust to the corrected vision.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-dark)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We schedule a follow-up visit to assess how well your correction is working and address any concerns. For eyeglass wearers, we check frame fit and lens condition and make any necessary adjustments. Contact lens wearers receive an evaluation of lens fit, comfort, and vision, along with assessment of eye health to ensure no complications. This is an opportunity to discuss your satisfaction with your current correction and explore alternative options if needed. Most patients report significant improvement in their ability to read, work on computers, and perform detailed tasks comfortably. Any remaining symptoms are addressed with prescription refinements or additional treatment strategies.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-6xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-dark)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Annual comprehensive eye exams are essential to monitor your vision and eye health over time. Hyperopia can change, particularly as you age and presbyopia develops, requiring periodic prescription updates. We track these changes and adjust your correction as needed to maintain optimal vision. Regular exams also allow us to detect other eye conditions early, such as glaucoma, cataracts, or retinal issues. For patients interested in refractive surgery, we provide candidacy evaluations and discuss whether you're a good candidate based on your prescription stability, corneal health, and lifestyle. Our goal is a long-term partnership in your eye health, ensuring you always have the clearest, most comfortable vision possible for your daily activities and quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Hyperopia (Farsightedness)
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-dark)] hover:bg-[var(--color-light)] transition-colors">
                How long does it take to adjust to glasses or contacts for hyperopia?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most people adapt to their new prescription within a few days to two weeks. Eyeglasses typically require minimal adjustment time—many patients notice immediate improvement and feel comfortable within 1-3 days of consistent wear. Contact lenses may take slightly longer as your eyes adjust to having lenses on the surface, with most wearers fully comfortable within one to two weeks. During the adaptation period, you may notice slight distortion, depth perception changes, or mild discomfort, but these symptoms resolve as your visual system adjusts. We recommend wearing your correction consistently as prescribed to speed adaptation. If you're still experiencing discomfort or vision issues after two weeks, contact us for a follow-up evaluation—sometimes minor prescription adjustments or different lens options can make a significant difference.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-dark)] hover:bg-[var(--color-light)] transition-colors">
                Is medication required to treat hyperopia?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                No, hyperopia itself is not treated with medication. It's a refractive error caused by the eye's shape, so correction requires optical solutions like eyeglasses, contact lenses, or refractive surgery. In rare cases, eye drops may be prescribed for related conditions—for example, children with accommodative esotropia (eye turning) due to uncorrected hyperopia may use low-dose atropine drops as part of a comprehensive treatment plan that includes corrective lenses. Some patients experience secondary symptoms like dry eyes or eye strain, which may be managed with artificial tears or other supportive therapies, but these address symptoms rather than the hyperopia itself. The primary treatment remains optical correction to properly focus light on the retina.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-dark)] hover:bg-[var(--color-light)] transition-colors">
                Does insurance cover hyperopia treatment?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most vision insurance plans and many medical insurance plans cover routine comprehensive eye exams, which include diagnosis and management of hyperopia. Vision insurance typically provides benefits toward eyeglasses (frames and lenses) or contact lenses, though the coverage amount varies by plan—some offer an allowance every one or two years. Medical insurance may cover eye exams if you're experiencing symptoms that require medical evaluation, such as headaches, eye pain, or vision changes. Refractive surgery like LASIK is generally considered elective and is not covered by insurance, though some plans offer discounts through affiliated providers. We recommend contacting your insurance provider before your appointment to understand your specific benefits. Our office is happy to verify your coverage and provide cost estimates, and we accept most major vision and medical insurance plans. For services not covered by insurance, we offer flexible payment options.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-dark)] hover:bg-[var(--color-light)] transition-colors">
                What if my glasses or contacts don't seem to be working?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If you're not experiencing clear, comfortable vision with your correction after the initial adaptation period, several factors could be at play. First, ensure you're wearing your glasses or contacts as prescribed—inconsistent use can delay adaptation. If you're still having issues, the prescription may need refinement, the glasses may need adjustment for proper alignment, or contact lenses may need to be refit for optimal positioning on your eye. Sometimes patients have additional vision issues beyond hyperopia, such as astigmatism or binocular vision problems, that require addressing. Contact our office for a follow-up evaluation—we'll assess your correction, check the accuracy of the prescription and lens quality, evaluate your eye health, and make any necessary changes. Most vision problems with new corrections can be resolved with minor adjustments or prescription modifications. We're committed to ensuring you achieve the clear, comfortable vision you deserve, and follow-up visits are an important part of that process.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-dark)] hover:bg-[var(--color-light)] transition-colors">
                Can telehealth work for hyperopia treatment?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                While the initial diagnosis and prescription for hyperopia require an in-person comprehensive eye examination with specialized equipment, telehealth can be valuable for certain aspects of ongoing care. Virtual visits are excellent for follow-up consultations to discuss how you're adapting to your new glasses or contacts, troubleshooting contact lens insertion or comfort issues, addressing questions about your prescription or eye care routine, and determining whether symptoms require an in-person visit. Telehealth is also useful for preliminary consultations about refractive surgery or alternative correction options. However, activities that require hands-on examination—such as measuring your prescription, fitting contact lenses, checking eye health, or adjusting eyeglass frames—must be done in person. We offer flexible telehealth appointments for appropriate situations, making it convenient to stay connected with your eye care team from home. If during a virtual visit we determine you need an in-person exam, we'll schedule that promptly.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-dark)] hover:bg-[var(--color-light)] transition-colors">
                Will my hyperopia get worse over time?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Hyperopia progression varies by individual. In children, mild hyperopia may actually improve as the eyes grow and lengthen during development, though moderate to high hyperopia typically remains stable or requires continued correction. In adults, hyperopia itself usually remains relatively stable, but the eye's ability to compensate through accommodation decreases with age, making symptoms more noticeable over time. Around age 40, presbyopia begins—a natural age-related loss of near focusing ability that compounds hyperopia and often necessitates bifocals, progressive lenses, or reading glasses even if you never needed correction before. Some adults experience a gradual increase in hyperopia with age due to changes in the eye's lens. Regular eye exams allow us to monitor any changes and adjust your correction accordingly. Wearing your prescribed correction does not make your eyes "dependent" or worsen your hyperopia—this is a common myth. Proper correction actually reduces eye strain and supports long-term eye health and visual comfort.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/myopia-nearsightedness" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                Myopia (Nearsightedness)
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Difficulty seeing distant objects clearly, the opposite of hyperopia, requiring concave lenses for correction.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">
                Learn more →
              </span>
            </a>
            <a href="/conditions/astigmatism" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                Astigmatism
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Irregular corneal curvature causing blurred or distorted vision at all distances, often occurring alongside hyperopia.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">
                Learn more →
              </span>
            </a>
            <a href="/conditions/presbyopia" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                Presbyopia
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Age-related loss of near focusing ability that compounds hyperopia, typically beginning around age 40.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">
                Learn more →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Hyperopia (Farsightedness) Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to live with blurry near vision and eye strain. Our team is ready to help you see clearly and comfortably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule Your Eye Exam
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </a>
          </div>
          <p className="mt-8 text-sm opacity-90">
            Serving Kyle, TX and surrounding communities with expert eye care
          </p>
        </div>
      </section>

    </main>
  )
}