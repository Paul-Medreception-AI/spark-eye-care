import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Often Should You Get an Eye Exam? | Spark Eye Care',
  description: 'Learn how frequently you should schedule comprehensive eye exams based on your age, health, and risk factors. Expert guidance from the Spark Eye Care team.',
  keywords: 'eye exam frequency, comprehensive eye exam, vision screening, eye health, preventive eye care, annual eye exam',
  openGraph: {
    title: 'How Often Should You Get an Eye Exam? | Spark Eye Care',
    description: 'Learn how frequently you should schedule comprehensive eye exams based on your age, health, and risk factors.',
    url: 'https://sparkeyetx.com/blog/how-often-should-you-get-an-eye-exam',
    type: 'article',
    images: [{ url: '/logo.png' }],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="text-sm text-white/80 mb-8 text-center">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">›</span>
              <a href="/blog" className="hover:text-white transition-colors">Resources</a>
              <span className="mx-2">›</span>
              <span className="text-white">Article</span>
            </nav>

            {/* Category Tag */}
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
              Patient Education
            </div>

            {/* Title */}
            <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
              How Often Should You Get an Eye Exam?
            </h1>

            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <span>January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span>Dr. Andrew Plummer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Opening Hook */}
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
              <p className="mb-6">
                When was the last time you had a comprehensive eye exam? If you're struggling to remember, you're not alone. Many people assume that if their vision seems fine, their eyes are healthy. But here's what most don't realize: many serious eye conditions develop silently, without obvious symptoms, until significant damage has already occurred. Regular eye exams aren't just about updating your prescription—they're a critical component of preventive healthcare that can save your vision and even detect life-threatening conditions early.
              </p>
              <p className="mb-6">
                Understanding how often you need an eye exam depends on several factors, including your age, overall health, family history, and existing risk factors. Let's explore the evidence-based guidelines that can help you protect your vision for life.
              </p>
            </div>

            {/* Section 1 */}
            <div className="animate-fade-up">
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                Why Regular Eye Exams Matter
              </h2>
              <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
                <p className="mb-6">
                  Your eyes are complex organs that can reveal much more than just whether you need glasses. During a comprehensive eye exam, your eye care provider examines not only your vision clarity but also the health of your entire visual system. This includes checking for signs of glaucoma, cataracts, macular degeneration, diabetic retinopathy, and even indicators of systemic conditions like high blood pressure, diabetes, and certain cancers.
                </p>
                <p className="mb-6">
                  According to the American Academy of Ophthalmology, early detection through routine exams can prevent up to 95% of vision loss from certain eye diseases. Many conditions, like glaucoma, can steal your sight gradually without any noticeable symptoms until irreversible damage has occurred. Regular exams create a baseline for your eye health and allow providers to detect subtle changes over time.
                </p>
                <p className="mb-6">
                  Beyond disease detection, routine eye exams ensure you're seeing as clearly and comfortably as possible. Undetected vision problems can affect your quality of life, work performance, and safety—especially when driving or operating machinery.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="animate-fade-up">
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                Recommended Exam Frequency by Age
              </h2>
              <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
                <p className="mb-6">
                  The frequency of eye exams varies throughout your lifetime. Here are the guidelines recommended by leading eye health organizations:
                </p>
                
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Children and Adolescents (Ages 0-18)</h3>
                    <p className="mb-3">
                      Children should have their first comprehensive eye exam at 6 months of age, again at age 3, and before starting first grade. School-age children should have exams every one to two years, even if no vision problems are apparent. Early detection of issues like amblyopia (lazy eye) or misalignment is crucial during developmental years when treatment is most effective.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Young Adults (Ages 18-39)</h3>
                    <p className="mb-3">
                      If you're in this age group with no known vision problems or risk factors, you should have a comprehensive exam at least every two years. However, if you wear contact lenses or glasses, annual exams are recommended to ensure your prescription remains accurate and to monitor eye health.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Middle-Aged Adults (Ages 40-54)</h3>
                    <p className="mb-3">
                      Age 40 is a critical milestone for eye health. This is when many people first experience presbyopia (difficulty focusing on close objects) and when the risk for certain eye diseases begins to increase. Adults in this age range should have comprehensive exams every two to four years, depending on their risk factors.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Older Adults (Ages 55-64)</h3>
                    <p className="mb-3">
                      The risk for age-related eye conditions increases significantly during these years. Comprehensive exams should occur every one to three years to monitor for cataracts, glaucoma, and macular degeneration.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Seniors (Age 65 and Older)</h3>
                    <p className="mb-3">
                      Annual comprehensive eye exams are strongly recommended for everyone 65 and older. Age-related conditions become increasingly common, and early intervention can preserve independence and quality of life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pull Quote */}
            <aside className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
              "Many serious eye conditions develop silently. By the time you notice symptoms, significant damage may have already occurred. Prevention through regular exams is your best defense."
            </aside>

            {/* Section 3 */}
            <div className="animate-fade-up">
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                Risk Factors That Require More Frequent Exams
              </h2>
              <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
                <p className="mb-6">
                  Certain health conditions and risk factors necessitate more frequent monitoring, regardless of your age. You may need annual or even more frequent exams if you have:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Diabetes:</span> Diabetic retinopathy is a leading cause of blindness in adults. Annual dilated eye exams are essential for anyone with Type 1 or Type 2 diabetes.
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <span className="font-semibold">High Blood Pressure:</span> Hypertension can damage the delicate blood vessels in your eyes, leading to hypertensive retinopathy.
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Family History of Eye Disease:</span> Glaucoma, macular degeneration, and other conditions can have genetic components. If these run in your family, more frequent monitoring is crucial.
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Previous Eye Injury or Surgery:</span> Past trauma or procedures require ongoing monitoring to detect complications early.
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <span className="font-semibold">High Prescription:</span> Severe nearsightedness (myopia) increases the risk of retinal detachment and other complications.
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Certain Medications:</span> Some prescription drugs can affect vision or eye health, requiring regular monitoring.
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Occupation or Hobbies:</span> Jobs or activities that pose risk of eye injury or involve prolonged screen time may warrant more frequent assessments.
                    </div>
                  </div>
                </div>

                <p className="mb-6">
                  Your eye care provider will create a personalized exam schedule based on your individual risk profile. Don't hesitate to discuss any concerns or changes in your health that might affect your eyes.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="animate-fade-up">
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                What Happens During a Comprehensive Eye Exam
              </h2>
              <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
                <p className="mb-6">
                  Understanding what to expect can help you appreciate the thoroughness of a comprehensive eye exam and why it differs from a simple vision screening.
                </p>
                <p className="mb-6">
                  A complete exam typically includes several components. Your provider will review your medical history, current medications, and any vision concerns. Visual acuity testing measures how clearly you see at various distances. Refraction assessment determines your precise prescription for glasses or contact lenses if needed.
                </p>
                <p className="mb-6">
                  The exam also includes tests for eye alignment and movement, depth perception, color vision, and peripheral vision. Your provider will examine the external structures of your eyes and measure intraocular pressure to screen for glaucoma. Dilation—using special drops to widen your pupils—allows for a detailed examination of the internal structures, including the retina, optic nerve, and blood vessels.
                </p>
                <p className="mb-6">
                  Advanced imaging technologies may also be used to capture detailed images of your eye structures, creating a permanent record for comparison during future exams. These comprehensive assessments typically take 45 minutes to an hour and provide invaluable information about your eye health and overall wellness.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="animate-fade-up">
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                Signs You Should Schedule an Exam Sooner
              </h2>
              <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
                <p className="mb-6">
                  While following recommended exam schedules is important, certain symptoms warrant immediate attention. Don't wait for your next scheduled appointment if you experience:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>Sudden vision loss or significant vision changes</div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>Eye pain, redness, or discharge</div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>Flashes of light or new floaters in your vision</div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>A curtain or shadow moving across your field of vision</div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>Double vision or difficulty focusing</div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>Persistent headaches, especially after reading or screen time</div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>Difficulty seeing at night or adapting to changing light levels</div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>Eye injury or trauma of any kind</div>
                  </div>
                </div>

                <p className="mb-6">
                  These symptoms can indicate serious conditions that require prompt evaluation and treatment. Trust your instincts—if something feels wrong with your vision or eyes, it's always better to err on the side of caution.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="animate-fade-up">
              <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
                Taking Action: Protecting Your Vision for Life
              </h2>
              <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
                <p className="mb-6">
                  Your vision is precious, and unlike some aspects of health, you have significant control over protecting it. Regular comprehensive eye exams are one of the most effective preventive measures you can take. By following age-appropriate screening guidelines and adjusting frequency based on your individual risk factors, you're taking an active role in safeguarding your sight.
                </p>
                <p className="mb-6">
                  Remember that vision problems and eye diseases often develop gradually without obvious warning signs. By the time symptoms appear, treatment options may be more limited, and some damage may be irreversible. Early detection through routine exams opens the door to interventions that can slow or halt disease progression, preserving your vision and quality of life for years to come.
                </p>
                <p className="mb-6">
                  If you're unsure about when you last had a comprehensive exam or whether you're due for one, now is the perfect time to schedule an appointment. Our team at Spark Eye Care is dedicated to providing thorough, compassionate care tailored to your unique needs. We'll work with you to establish an exam schedule that ensures optimal eye health throughout every stage of your life.
                </p>
                <p className="mb-6">
                  Don't wait until you notice a problem. Take charge of your eye health today—your future self will thank you for it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Author Box */}
        <section className="bg-white pb-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">
                  Written by the Spark Eye Care Clinical Team
                </div>
                <div className="text-[var(--color-muted)] text-sm">
                  Board-certified providers specializing in Other Medical
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl mb-8 text-[var(--color-ink)] font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                    Eye Health
                  </div>
                  <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                    Understanding Common Vision Problems
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Learn about myopia, hyperopia, astigmatism, and presbyopia—and how they're corrected.
                  </p>
                </div>
              </a>

              {/* Article 2 */}
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                    Prevention
                  </div>
                  <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                    Protecting Your Eyes from Digital Strain
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    Practical tips for reducing eye fatigue from screens and maintaining healthy vision habits.
                  </p>
                </div>
              </a>

              {/* Article 3 */}
              <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                    Patient Guide
                  </div>
                  <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                    What to Expect at Your Eye Exam
                  </h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    A comprehensive guide to eye exam procedures and how to prepare for your visit.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Our team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              <span>Schedule Your Eye Exam</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </section>
      </article>
    </main>
  )
}