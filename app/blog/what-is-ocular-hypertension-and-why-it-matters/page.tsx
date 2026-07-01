import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Ocular Hypertension and Why It Matters | Spark Eye Care',
  description: 'Learn about ocular hypertension, elevated eye pressure that can lead to glaucoma. Understand risk factors, symptoms, and why regular eye exams are critical for prevention.',
  keywords: 'ocular hypertension, high eye pressure, glaucoma prevention, IOP, intraocular pressure, eye health',
  openGraph: {
    title: 'What Is Ocular Hypertension and Why It Matters',
    description: 'Understanding elevated eye pressure and its link to glaucoma. Expert guidance from Spark Eye Care.',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What Is Ocular Hypertension and Why It Matters
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Imagine discovering during a routine eye exam that the pressure inside your eyes is higher than normal—yet you feel no symptoms, no pain, and your vision seems perfectly fine. This silent condition, known as ocular hypertension, affects millions of people and serves as one of the most significant risk factors for glaucoma, a leading cause of irreversible blindness worldwide.
            </p>
            <p className="mb-6">
              While elevated eye pressure doesn't automatically mean you'll develop glaucoma, understanding what ocular hypertension is, who's at risk, and why monitoring matters can make the difference between preserving your vision and facing preventable vision loss. Let's explore everything you need to know about this important eye health concern.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Ocular Hypertension
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Ocular hypertension occurs when the intraocular pressure (IOP) inside your eye measures higher than the normal range of 10-21 mmHg, but without evidence of optic nerve damage or vision loss that would indicate glaucoma. Think of it as a warning sign—elevated pressure that requires monitoring and, in some cases, intervention.
            </p>
            <p className="mb-6">
              Your eye constantly produces a clear fluid called aqueous humor that nourishes the eye's internal structures. This fluid normally drains through a mesh-like channel. When the drainage system doesn't work efficiently, or when too much fluid is produced, pressure builds up inside the eye—similar to inflating a balloon beyond its comfortable level.
            </p>
            <p className="mb-6">
              The challenge with ocular hypertension is its silence. Unlike acute angle-closure glaucoma, which causes sudden pain and blurred vision, elevated eye pressure typically causes no noticeable symptoms. You won't feel the increased pressure, and your vision may remain crystal clear for years. This is precisely why regular comprehensive eye exams are so critical.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "Ocular hypertension is a silent condition—you can't feel elevated eye pressure, which is why regular eye exams are your best defense against vision loss."
          </blockquote>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Who Is at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              While anyone can develop ocular hypertension, certain factors significantly increase your risk. Research from the Ocular Hypertension Treatment Study (OHTS) and other major clinical trials has identified several key risk factors:
            </p>
            <p className="mb-6">
              <strong>Age plays a significant role.</strong> The prevalence of ocular hypertension increases with age, particularly after 40. As we age, the drainage system in our eyes can become less efficient, leading to fluid buildup and elevated pressure.
            </p>
            <p className="mb-6">
              <strong>Race and ethnicity matter.</strong> African Americans have a higher prevalence of ocular hypertension and are at significantly greater risk of progression to glaucoma. Hispanic and Latino populations also face elevated risk compared to Caucasians.
            </p>
            <p className="mb-6">
              <strong>Family history is a major factor.</strong> If you have a close relative with glaucoma or ocular hypertension, your risk increases substantially. Genetics play an important role in both the drainage system's structure and how your optic nerve responds to pressure.
            </p>
            <p className="mb-6">
              Other risk factors include high myopia (nearsightedness), diabetes, thin corneas, and long-term use of corticosteroid medications. Certain eye injuries or surgeries can also affect drainage and increase eye pressure.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            The Connection to Glaucoma
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Here's what makes ocular hypertension so concerning: it's one of the strongest risk factors for developing glaucoma, a group of eye diseases that damage the optic nerve and can lead to permanent vision loss and blindness.
            </p>
            <p className="mb-6">
              The landmark Ocular Hypertension Treatment Study followed over 1,600 participants with elevated eye pressure for more than a decade. The results were striking: without treatment, approximately 10% of people with ocular hypertension developed glaucoma within five years. However, with pressure-lowering treatment, that risk dropped by more than half.
            </p>
            <p className="mb-6">
              It's important to understand that not everyone with ocular hypertension will develop glaucoma. Many people live their entire lives with slightly elevated pressure and never experience optic nerve damage. Conversely, some people develop glaucoma even with normal eye pressure (normal-tension glaucoma). Eye pressure is just one piece of a complex puzzle.
            </p>
            <p className="mb-6">
              What determines who progresses to glaucoma? Several factors come into play: the degree of pressure elevation, corneal thickness, optic nerve appearance, age, and family history. Your eye care provider assesses all these elements to determine your individual risk profile and whether treatment is recommended.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Diagnosis and Monitoring
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Diagnosing ocular hypertension requires more than a single pressure reading. During a comprehensive eye exam, your eye care provider will perform several tests:
            </p>
            <p className="mb-6">
              <strong>Tonometry</strong> measures your intraocular pressure. The most common method involves a gentle puff of air or a small probe that lightly touches your eye after numbing drops are applied. Multiple readings may be taken at different times of day, since eye pressure naturally fluctuates.
            </p>
            <p className="mb-6">
              <strong>Ophthalmoscopy</strong> allows your provider to examine your optic nerve for any signs of damage. A healthy optic nerve has a specific appearance; glaucoma causes characteristic changes that trained eyes can detect early.
            </p>
            <p className="mb-6">
              <strong>Pachymetry</strong> measures corneal thickness, which affects pressure readings. Thicker corneas can lead to falsely high pressure readings, while thinner corneas (a risk factor for glaucoma) may show artificially low readings.
            </p>
            <p className="mb-6">
              <strong>Visual field testing</strong> checks your peripheral vision for any early loss that might indicate optic nerve damage. Advanced imaging technologies like OCT (optical coherence tomography) can detect subtle nerve fiber layer thinning before vision loss becomes apparent.
            </p>
            <p className="mb-6">
              If you're diagnosed with ocular hypertension, regular monitoring becomes essential. Your provider will recommend follow-up intervals based on your risk factors—typically every 3-6 months initially, then annually if your condition remains stable.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Treatment Options and When They're Needed
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Not everyone with ocular hypertension requires treatment. The decision depends on your individual risk profile. Your provider weighs factors like pressure level, age, family history, corneal thickness, and optic nerve appearance to determine the best approach.
            </p>
            <p className="mb-6">
              For people at lower risk, careful monitoring without treatment may be appropriate. Regular exams ensure any changes are caught early, allowing intervention if needed.
            </p>
            <p className="mb-6">
              For those at higher risk, treatment typically begins with prescription eye drops that lower intraocular pressure by either reducing fluid production or improving drainage. These medications are highly effective, and research shows they can reduce the risk of developing glaucoma by 50% or more in high-risk individuals.
            </p>
            <p className="mb-6">
              Common pressure-lowering medications include prostaglandin analogs, beta-blockers, alpha agonists, and carbonic anhydrase inhibitors. Your provider will select the most appropriate option based on your specific situation, and may adjust or combine medications to achieve optimal pressure control.
            </p>
            <p className="mb-6">
              In some cases, laser treatments or surgical procedures may be considered, though these are more commonly reserved for glaucoma rather than ocular hypertension alone.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What You Can Do: Practical Steps for Eye Health
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              While you can't control all risk factors for ocular hypertension, you can take proactive steps to protect your vision:
            </p>
            
            <div className="space-y-4 my-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Schedule regular comprehensive eye exams.</strong> Annual exams after age 40 are essential, especially if you have risk factors. Earlier and more frequent exams may be recommended based on your individual situation.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Know your family history.</strong> Ask relatives about glaucoma or vision problems. This information helps your eye care team assess your risk accurately.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>If prescribed eye drops, use them consistently.</strong> Adherence to treatment is crucial. Set reminders, incorporate drops into your daily routine, and discuss any side effects with your provider.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Maintain overall health.</strong> Regular exercise, a healthy diet rich in leafy greens and omega-3 fatty acids, and managing conditions like diabetes and high blood pressure support eye health.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Protect your eyes from injury.</strong> Wear protective eyewear during sports and activities that pose risk. Eye trauma can affect drainage and increase pressure.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Be cautious with corticosteroids.</strong> If you need these medications for other conditions, inform your eye care provider, as they can elevate eye pressure in susceptible individuals.</p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 animate-fade-up">
            <p className="mb-6">
              Ocular hypertension is a manageable condition when detected and monitored appropriately. While the diagnosis may feel concerning, remember that awareness is power. With regular eye exams, appropriate treatment when needed, and a partnership with your eye care team, you can take control of your eye health and protect your vision for years to come.
            </p>
            <p className="mb-6">
              If you're over 40, have risk factors, or haven't had a comprehensive eye exam recently, now is the time to schedule one. Early detection of ocular hypertension—and intervention when necessary—can make all the difference in preserving the gift of sight.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Spark Eye Care Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in comprehensive eye care and glaucoma management</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Understanding Glaucoma: The Silent Thief of Sight
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Learn about glaucoma types, symptoms, and why early detection is crucial for preserving vision.</p>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                What to Expect During a Comprehensive Eye Exam
              </h4>
              <p className="text-[var(--color-muted)] text-sm">A detailed guide to the tests and procedures that protect your vision and detect eye conditions early.</p>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                How Often Should You Have an Eye Exam?
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Age-specific recommendations for eye exam frequency and when to schedule sooner based on risk factors.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help protect your vision with comprehensive eye exams and personalized care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Eye Exam
          </a>
        </div>
      </section>
    </main>
  )
}