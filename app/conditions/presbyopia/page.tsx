import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Presbyopia Treatment in Kyle, TX | Spark Eye Care',
  description: 'Expert presbyopia treatment in Kyle. Board-certified eye care specialists offering comprehensive vision correction solutions. Schedule your consultation today.',
  keywords: 'presbyopia treatment Kyle, presbyopia Kyle TX, reading vision Kyle, vision correction Kyle, eye care Kyle',
  openGraph: {
    title: 'Presbyopia Treatment in Kyle, TX | Spark Eye Care',
    description: 'Expert presbyopia treatment in Kyle. Board-certified eye care specialists offering comprehensive vision correction solutions.',
    url: 'https://www.sparkeyetx.com/conditions/presbyopia',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function PresbyopiaPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Presbyopia</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Presbyopia Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
            Presbyopia is a natural age-related condition that affects everyone, making it difficult to focus on close objects. At Spark Eye Care, we offer comprehensive vision correction solutions to restore your near vision and improve your quality of life.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Presbyopia
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Presbyopia is an age-related vision condition characterized by the gradual loss of the eye's ability to focus on nearby objects. This natural process typically becomes noticeable in your early to mid-40s and continues to progress until around age 65. Presbyopia affects nearly everyone as they age, regardless of whether they had perfect vision throughout their earlier years. The condition occurs when the lens inside your eye becomes less flexible, making it increasingly difficult to perform close-up tasks such as reading, using a smartphone, or working on a computer. While presbyopia is not a disease but rather a normal part of aging, it can significantly impact daily activities and quality of life, causing frustration with routine tasks that were once effortless.
            </p>
            <p>
              The underlying cause of presbyopia is the natural aging process of the eye's crystalline lens and the muscles that control its shape. Throughout childhood and young adulthood, the lens remains flexible and elastic, allowing it to change shape easily to focus on objects at varying distances—a process called accommodation. As we age, the lens gradually hardens and loses its elasticity, while the ciliary muscles that control lens shape also weaken. This combination makes it progressively harder for the eye to adjust focus for near vision. Risk factors include age (being over 40), certain medical conditions such as diabetes or cardiovascular disease, and medications including antihistamines, antidepressants, and diuretics that can contribute to premature presbyopia symptoms. Some occupations that require extensive near work may also lead to earlier symptom awareness.
            </p>
            <p>
              Professional eye care is essential for managing presbyopia effectively because proper diagnosis ensures that vision changes are due to normal aging rather than other potentially serious eye conditions. At Spark Eye Care, our comprehensive eye examinations not only confirm presbyopia but also screen for conditions such as cataracts, glaucoma, macular degeneration, and other age-related eye diseases that may present with similar symptoms. We provide personalized vision correction solutions tailored to your lifestyle, visual demands, and personal preferences. Whether through prescription reading glasses, bifocals, progressive lenses, contact lenses, or surgical options, we help you maintain clear, comfortable vision for all your daily activities. Regular monitoring also allows us to adjust your prescription as presbyopia progresses, ensuring optimal vision throughout every stage of this natural aging process.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Signs & Symptoms of Presbyopia
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Visual/Functional Symptoms */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Visual Changes</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Difficulty Reading Small Print</div>
                  <p className="text-[var(--color-muted)]">Struggling to read books, menus, medicine labels, or text messages without holding them at arm's length.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Blurred Vision at Normal Reading Distance</div>
                  <p className="text-[var(--color-muted)]">Print appears blurry when held at a comfortable reading distance of 14-16 inches from your eyes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Need for Brighter Light</div>
                  <p className="text-[var(--color-muted)]">Requiring more illumination than before when reading or doing close work, especially in the evening.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Holding Reading Material at Arm's Length</div>
                  <p className="text-[var(--color-muted)]">Instinctively extending your arms to move reading material farther away to see it more clearly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Difficulty Focusing When Switching Distances</div>
                  <p className="text-[var(--color-muted)]">Experiencing a delay or difficulty when shifting focus between near and far objects.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Trouble Seeing in Dim Light</div>
                  <p className="text-[var(--color-muted)]">Finding it particularly challenging to read or do close work in low-light conditions like restaurants.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Digital Screen Discomfort</div>
                  <p className="text-[var(--color-muted)]">Experiencing increasing difficulty viewing smartphones, tablets, or computer screens at normal distances.</p>
                </div>
              </div>
            </div>

            {/* Physical/Behavioral Symptoms */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Physical & Behavioral Signs</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Eye Strain and Fatigue</div>
                  <p className="text-[var(--color-muted)]">Experiencing tired, achy eyes after reading or doing close work for even short periods.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Headaches After Close Work</div>
                  <p className="text-[var(--color-muted)]">Developing headaches, particularly around the forehead or temples, during or after reading or computer use.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Squinting to See Clearly</div>
                  <p className="text-[var(--color-muted)]">Frequently squinting or narrowing your eyes when trying to focus on close objects or small text.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Avoiding Reading or Close Tasks</div>
                  <p className="text-[var(--color-muted)]">Finding yourself postponing or avoiding activities like reading, sewing, or hobbies that require near vision.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Taking Off Glasses to Read</div>
                  <p className="text-[var(--color-muted)]">If you wear distance glasses, needing to remove them to see near objects more clearly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Difficulty with Fine Detail Work</div>
                  <p className="text-[var(--color-muted)]">Struggling with tasks requiring precision such as threading needles, reading small instructions, or applying makeup.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Frustration with Daily Tasks</div>
                  <p className="text-[var(--color-muted)]">Feeling annoyed or frustrated when performing routine activities that were previously easy and effortless.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-[var(--color-ink)]">Eye Rubbing or Discomfort</div>
                  <p className="text-[var(--color-muted)]">Frequently rubbing your eyes or experiencing general eye discomfort after attempting to focus on near objects.</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes and allows you to maintain your quality of life and independence in all your daily activities.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-center text-[var(--color-ink)]">
            How We Treat Presbyopia
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold mb-4 text-[var(--color-ink)]">
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination that includes visual acuity testing at multiple distances, refraction to determine your precise prescription needs, and evaluation of your eye health to rule out other conditions. We assess your accommodation ability, pupil function, and ocular alignment while discussing your lifestyle, visual demands, and daily activities to understand your specific needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold mb-4 text-[var(--color-ink)]">
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your examination findings and personal preferences, we develop a customized vision correction strategy. This may include prescription reading glasses for occasional use, bifocals or trifocals for those who need multiple focal points, progressive lenses that offer seamless vision at all distances, multifocal contact lenses, or monovision contact lens correction. We explain each option's benefits and limitations to help you make an informed decision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold mb-4 text-[var(--color-ink)]">
                Ongoing Care & Adjustment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Presbyopia progresses gradually, so we provide continuous monitoring and prescription updates as your vision changes. We schedule regular follow-up appointments to assess your adaptation to new correction, address any concerns or difficulties, and make adjustments as needed. Our team remains available to answer questions, troubleshoot issues with your vision solution, and explore alternative options if your current approach isn't meeting your needs perfectly.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-cormorant font-semibold mb-4 text-[var(--color-ink)]">
              Evidence-Based Vision Correction Solutions
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              At Spark Eye Care, we offer the full spectrum of presbyopia correction options backed by optical science and clinical research. Reading glasses remain the simplest and most cost-effective solution for those who need vision correction only for close tasks. Bifocal and trifocal lenses provide distinct zones for different viewing distances, while progressive addition lenses (PALs) offer a more cosmetically appealing option with gradual power changes that eliminate visible lines.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              For those who prefer contact lenses, we fit multifocal contact lenses that incorporate multiple powers within each lens, or monovision correction where one eye is corrected for distance and the other for near vision. We also discuss surgical options including refractive lens exchange, corneal inlays, and LASIK monovision for appropriate candidates. Each solution is carefully selected based on your prescription, lifestyle needs, occupation, hobbies, cosmetic preferences, and budget considerations to ensure optimal visual outcomes and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Why Choose Spark Eye Care for Presbyopia Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Excellence</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our optometrists are board-certified with specialized training in vision correction and age-related eye conditions, ensuring you receive expert care based on the latest clinical standards.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient has unique visual needs and lifestyle demands. Your treatment plan is customized specifically for your work, hobbies, and daily activities.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Options</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From simple reading glasses to advanced progressive lenses and multifocal contacts, we offer the complete range of presbyopia correction solutions under one roof.
              </p>
            </div>

            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer flexible scheduling, including evening and weekend appointments, and follow-up consultations to ensure your vision correction meets your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Initial Comprehensive Evaluation</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  <strong>Timeline: Week 1</strong>
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your first visit includes a complete eye examination with visual acuity testing, refraction, eye health assessment, and discussion of your vision goals and lifestyle needs. We'll measure your current prescription, evaluate your eye coordination and focusing ability, and screen for other age-related eye conditions. This appointment typically takes 60-90 minutes and concludes with a detailed discussion of your correction options and recommendations tailored specifically to you.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Vision Correction Begins</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  <strong>Timeline: Weeks 2-4</strong>
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After selecting your vision correction method, we'll order your glasses or fit you with contact lenses. For glasses, we help you choose frames that complement your face and lifestyle, and ensure proper lens positioning for optimal vision. Contact lens wearers receive fitting and instruction on insertion, removal, and care. There's typically an adaptation period of several days to two weeks, especially with progressive lenses or multifocal contacts, during which your brain learns to use the new vision correction effectively.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Follow-Up and Refinement</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  <strong>Timeline: Months 2-3</strong>
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We schedule a follow-up visit to assess your adaptation and satisfaction with your vision correction. This appointment allows us to address any concerns, make minor prescription adjustments if needed, and ensure your vision is comfortable for all your activities. For contact lens wearers, we evaluate lens fit and eye health. Most patients adapt successfully to their initial correction, but we're committed to making modifications until you achieve optimal visual comfort and clarity.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  <strong>Timeline: Ongoing Annual Care</strong>
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Because presbyopia continues to progress until around age 65, we recommend annual comprehensive eye examinations to monitor your vision and update your prescription as needed. Most patients require prescription adjustments every 1-3 years during their 40s and 50s, with changes stabilizing after age 60-65. Regular eye exams also allow us to monitor for other age-related conditions such as cataracts, glaucoma, and macular degeneration, ensuring your eyes remain healthy throughout your lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-center text-[var(--color-ink)]">
            Frequently Asked Questions About Presbyopia
          </h2>
          <div className="space-y-6">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                At what age does presbyopia typically start?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Presbyopia typically becomes noticeable in the early to mid-40s, with most people experiencing symptoms between ages 40 and 45. The condition affects everyone as a natural part of aging, regardless of whether you've had perfect vision your entire life or have worn glasses for nearsightedness or farsightedness. Even if you've never needed vision correction before, you'll likely notice difficulty with close-up tasks around this age. The progression continues gradually until approximately age 60-65, when the lens has lost most of its remaining flexibility and presbyopia stabilizes. Some factors can influence when symptoms appear—people who are farsighted may notice presbyopia symptoms earlier, while those who are nearsighted may experience them slightly later or may be able to read without glasses by removing their distance correction.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Can presbyopia be prevented or reversed?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Unfortunately, presbyopia cannot be prevented or reversed as it is a natural, inevitable part of the aging process that affects everyone. The hardening of the eye's lens and weakening of the ciliary muscles occur gradually over time regardless of lifestyle factors, diet, or eye exercises. While some eye exercises and vision therapy programs claim to delay or improve presbyopia, scientific evidence does not support these claims. However, presbyopia can be effectively corrected and managed with various optical solutions including reading glasses, bifocals, progressive lenses, multifocal contact lenses, or surgical procedures. The good news is that with proper correction, you can maintain excellent vision for all activities throughout your life. The key is working with your eye care professional to find the correction method that best suits your visual needs and lifestyle, and updating your prescription as presbyopia progresses to ensure continued clear, comfortable vision.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                What's the difference between reading glasses and progressive lenses?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Reading glasses contain a single-vision lens power designed specifically for near tasks at a typical reading distance of 14-16 inches. They're ideal if you only need correction for close work and your distance vision remains clear without glasses. However, you'll need to remove them to see clearly across the room or while driving. Progressive lenses, on the other hand, are multifocal lenses that provide a seamless transition between distance vision (top of lens), intermediate vision (middle area for computer work), and near vision (bottom for reading) without any visible lines. They're designed for people who need vision correction at multiple distances and want the convenience of wearing one pair of glasses all day. The choice between them depends on your vision needs—if you have good distance vision and only struggle with reading, simple reading glasses may suffice. If you already wear glasses for distance vision or need correction at multiple distances, progressive lenses offer a more comprehensive solution. Our team will help you understand which option best matches your prescription, lifestyle, and visual demands.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Does insurance cover presbyopia treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Most vision insurance plans and many medical insurance plans cover routine comprehensive eye examinations, which include presbyopia diagnosis and prescription determination. The frequency of covered exams varies by plan but is typically annual or every two years. Vision insurance plans often provide allowances or discounts toward eyeglasses or contact lenses, though the exact coverage for frames, lenses, and lens enhancements (such as progressive lenses or anti-reflective coatings) depends on your specific plan. Some plans cover a portion of costs while others provide a fixed allowance. We recommend contacting your insurance provider before your appointment to understand your benefits. Our office staff is also happy to verify your coverage and explain what will be covered. Even without vision insurance, presbyopia correction remains highly affordable, with basic reading glasses available at reasonable prices and more advanced options available at various price points. We'll work with you to find a vision correction solution that fits both your visual needs and your budget.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                How long does it take to adapt to progressive lenses or multifocal contacts?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Adaptation to progressive lenses typically takes anywhere from a few days to two weeks for most people. During this period, your brain learns to use different parts of the lens for different viewing distances, and you develop natural head movements to find the optimal viewing zone for each task. Some people adapt within 24-48 hours, while others may need the full two weeks. The key to successful adaptation is wearing your progressive lenses consistently throughout the day rather than switching back and forth with other glasses. Multifocal contact lenses generally require a similar adaptation period of one to two weeks. Your brain learns to process the simultaneous images from different lens powers and naturally select the clearest image for the distance you're viewing. Most patients adapt successfully, though the adjustment may feel unusual at first. We provide detailed instructions on maximizing your success with progressive lenses or multifocal contacts, and we schedule follow-up appointments to address any adaptation challenges. If you're experiencing persistent difficulties after the initial adaptation period, we can make prescription adjustments or explore alternative vision correction options.
                </p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Are there surgical options for treating presbyopia?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Yes, several surgical options exist for presbyopia correction, though they're not appropriate for everyone. Refractive lens exchange (RLE) involves removing your natural lens and replacing it with an artificial multifocal or accommodating intraocular lens that provides vision at multiple distances. This procedure is similar to cataract surgery and is often recommended for patients over 55 or those with early cataracts. LASIK monovision corrects one eye for distance and the other for near vision, and can be effective for appropriate candidates who can adapt to this vision arrangement. Corneal inlays are small devices implanted in the cornea of one eye to improve near vision while maintaining distance vision. Conductive keratoplasty uses radiofrequency energy to reshape the cornea for improved near vision. Each surgical option has specific candidacy requirements, benefits, limitations, and potential risks. During your comprehensive examination, we can discuss whether you might be a candidate for surgical presbyopia correction and provide referrals to experienced ophthalmologic surgeons if you're interested in exploring these options. Many patients, however, find that optical correction with glasses or contact lenses provides excellent vision with greater flexibility and no surgical risks.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-center text-[var(--color-ink)]">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/cataracts" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Cataracts
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Age-related clouding of the eye's natural lens that causes progressive vision impairment, often occurring alongside presbyopia in patients over 60.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>

            <Link href="/conditions/dry-eye" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Dry Eye Syndrome
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Chronic condition causing insufficient tear production or poor tear quality, commonly affecting adults over 40 and often complicating contact lens wear.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>

            <Link href="/conditions/astigmatism" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Astigmatism
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Refractive error caused by irregular corneal curvature that can occur alongside presbyopia and requires specialized correction in multifocal lenses.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Presbyopia Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-light opacity-90">
            You don't have to struggle with blurry near vision. Our team is ready to help you see clearly again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-md font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Your Eye Exam
            </Link>
            <Link 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}