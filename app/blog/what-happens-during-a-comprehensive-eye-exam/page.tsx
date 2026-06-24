import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Happens During a Comprehensive Eye Exam? | Spark Eye Care',
  description: 'Learn what to expect during a comprehensive eye exam, from visual acuity testing to retinal imaging. Understand each step and why it matters for your vision health.',
  keywords: 'comprehensive eye exam, eye examination, vision test, eye health checkup, dilated eye exam, retinal exam, glaucoma screening',
  openGraph: {
    title: 'What Happens During a Comprehensive Eye Exam? | Spark Eye Care',
    description: 'Learn what to expect during a comprehensive eye exam, from visual acuity testing to retinal imaging.',
    url: 'https://www.sparkeyetx.com/blog/what-happens-during-a-comprehensive-eye-exam',
    type: 'article',
    images: [
      {
        url: 'https://www.sparkeyetx.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spark Eye Care'
      }
    ]
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        <header className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white animate-fade-up">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="text-sm text-white/80 mb-6 text-center">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">›</span>
              <a href="/blog" className="hover:text-white transition-colors">Resources</a>
              <span className="mx-2">›</span>
              <span className="text-white/60">Article</span>
            </nav>
            
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-medium">
              Patient Education
            </div>
            
            <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light leading-tight text-center mb-6">
              What Happens During a Comprehensive Eye Exam?
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-sm text-white/70">
              <span>Published January 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Dr. Care Team</span>
            </div>
          </div>
        </header>

        <div className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-[var(--color-ink)] leading-loose text-lg animate-fade-up">
              <p className="mb-6 text-xl leading-relaxed">
                You know you should have regular eye exams, but what actually happens during one? If you've ever felt uncertain about walking into an optometrist's office, you're not alone. Understanding the comprehensive eye exam process can ease anxiety, help you prepare better questions, and empower you to take charge of your vision health. A thorough eye examination is far more than reading letters on a chart—it's a multi-step evaluation that assesses not just your ability to see clearly, but the overall health of your eyes and your risk for serious conditions.
              </p>

              <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
                Why Comprehensive Eye Exams Matter
              </h2>
              
              <p className="mb-6">
                Many eye conditions develop silently, without obvious symptoms until they've progressed significantly. Glaucoma, macular degeneration, diabetic retinopathy, and even certain brain tumors can be detected during a comprehensive eye exam before you notice any vision changes. Regular examinations allow your eye care provider to establish a baseline for your eye health and monitor subtle changes over time.
              </p>

              <p className="mb-6">
                The American Optometric Association recommends adults ages 18-64 have a comprehensive eye exam at least every two years, and annually after age 65. Those with diabetes, high blood pressure, a family history of eye disease, or who wear corrective lenses may need more frequent visits. Children should have their first exam at six months, again at age three, before starting school, and then annually throughout their school years.
              </p>

              <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
                Patient History and Preliminary Testing
              </h2>
              
              <p className="mb-6">
                Your comprehensive exam begins before you even see the doctor. A staff member will review your medical history, current medications, and any vision concerns you're experiencing. Be prepared to discuss:
              </p>

              <ul className="space-y-3 mb-6 ml-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Any vision problems you've noticed (blurriness, floaters, light sensitivity, eye pain)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Family history of eye diseases like glaucoma, macular degeneration, or cataracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Chronic health conditions, especially diabetes and high blood pressure</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Current medications, including over-the-counter supplements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Previous eye injuries or surgeries</span>
                </li>
              </ul>

              <p className="mb-6">
                Preliminary tests typically include measuring your visual acuity (how clearly you see at various distances), checking your eye pressure (tonometry), and assessing your peripheral vision. These baseline measurements help your doctor understand your current visual function and screen for conditions like glaucoma.
              </p>

              <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
                Refraction and Visual Acuity Assessment
              </h2>
              
              <p className="mb-6">
                The refraction test—the familiar "which is better, one or two?" exercise—determines your exact prescription for glasses or contact lenses. Your doctor uses an instrument called a phoropter, which contains different lenses, to identify which combination provides the clearest vision. This process tests for myopia (nearsightedness), hyperopia (farsightedness), astigmatism (irregular cornea shape), and presbyopia (age-related difficulty focusing on close objects).
              </p>

              <p className="mb-6">
                Don't worry if your answers seem inconsistent—the doctor is looking for patterns and will often cycle back to confirm choices. If you truly can't tell the difference between two options, it's perfectly fine to say so. The goal is finding the prescription that provides the clearest, most comfortable vision for your daily activities.
              </p>

              <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-['Cormorant',serif] leading-relaxed">
                "A comprehensive eye exam does more than update your prescription—it's a window into your overall health, capable of detecting systemic diseases before they cause symptoms elsewhere in your body."
              </blockquote>

              <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
                External and Internal Eye Examination
              </h2>
              
              <p className="mb-6">
                Using specialized instruments, your doctor will examine both the external and internal structures of your eyes. A slit lamp—a microscope with an intense light source—allows detailed viewing of the eyelids, cornea, iris, lens, and anterior chamber. This examination can detect cataracts, corneal scratches or infections, inflammation, and signs of systemic diseases.
              </p>

              <p className="mb-6">
                To examine the back of your eye (retina, optic nerve, and blood vessels), your doctor may dilate your pupils with eye drops. Dilation temporarily makes your pupils larger, allowing more light to enter so internal structures can be thoroughly evaluated. Your vision may be blurry and light-sensitive for several hours afterward, so bring sunglasses and consider arranging a ride home if you'll be driving.
              </p>

              <p className="mb-6">
                The dilated exam is crucial for detecting diabetic retinopathy, macular degeneration, retinal tears or detachments, optic nerve damage from glaucoma, and even signs of high blood pressure or cholesterol. Some practices now offer retinal imaging technology that can capture detailed photographs without dilation, though dilation still provides the most comprehensive view.
              </p>

              <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
                Additional Testing and Specialized Assessments
              </h2>
              
              <p className="mb-6">
                Depending on your age, risk factors, and preliminary findings, your doctor may recommend additional tests:
              </p>

              <ul className="space-y-3 mb-6 ml-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Visual field testing</strong> maps your peripheral vision and can detect blind spots caused by glaucoma or neurological conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>OCT (Optical Coherence Tomography)</strong> creates detailed cross-sectional images of your retina to detect early macular degeneration or diabetic changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Corneal topography</strong> maps the surface of your cornea, especially important for contact lens fitting or pre-surgical planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Color vision testing</strong> assesses your ability to distinguish colors, important for certain occupations</span>
                </li>
              </ul>

              <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light">
                After Your Exam: Understanding Your Results
              </h2>
              
              <p className="mb-6">
                At the conclusion of your examination, your doctor will discuss findings and recommendations. This is your opportunity to ask questions about your eye health, prescription changes, treatment options, or preventive care strategies. Don't hesitate to ask for clarification—understanding your vision needs helps you make informed decisions about your eye care.
              </p>

              <p className="mb-6">
                If your doctor detects any concerns, they'll explain next steps, which might include more frequent monitoring, lifestyle modifications, medications, or referral to a specialist. Many eye conditions are highly manageable when caught early, making regular comprehensive exams one of the most important investments in your long-term vision and overall health.
              </p>

              <p className="mb-6">
                Your eyes change over time, and what worked for your vision last year may not be optimal now. By understanding what happens during a comprehensive eye exam, you can approach your next appointment with confidence, prepared to be an active participant in protecting your precious gift of sight. If it's been more than two years since your last comprehensive eye exam, or if you're experiencing any vision changes, now is the time to schedule your appointment.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-2xl p-8 my-12 flex gap-6 items-start animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Cormorant',serif] text-2xl text-[var(--color-ink)] mb-2">
                  Written by the Spark Eye Care Clinical Team
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Board-certified providers specializing in comprehensive eye care and vision health education. Our team is dedicated to helping patients understand their eye health and make informed decisions about their vision care.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[var(--color-cream)] py-16 animate-fade-up">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mb-8 text-center">
              Related Resources
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Your Eye Prescription
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn what all those numbers and abbreviations on your eyeglass prescription actually mean.
                </p>
              </a>

              <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Common Eye Conditions Explained
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  From cataracts to glaucoma, understand the most common eye health conditions and their treatments.
                </p>
              </a>

              <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-[var(--color-light)] rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  How Often Should You See an Eye Doctor?
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover the recommended eye exam schedule for different ages and health conditions.
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center animate-fade-up">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our team is here to help you maintain optimal eye health with comprehensive, compassionate care.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
            >
              Schedule Your Eye Exam
            </a>
          </div>
        </section>
      </article>
    </main>
  )
}