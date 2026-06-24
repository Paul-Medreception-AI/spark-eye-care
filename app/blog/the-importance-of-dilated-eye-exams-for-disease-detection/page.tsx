import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Importance of Dilated Eye Exams for Disease Detection | Spark Eye Care',
  description: 'Learn why dilated eye exams are essential for detecting serious eye diseases early, including diabetic retinopathy, glaucoma, and macular degeneration.',
  keywords: 'dilated eye exam, eye disease detection, diabetic retinopathy, glaucoma screening, macular degeneration, comprehensive eye exam, Spark Eye Care',
  openGraph: {
    title: 'The Importance of Dilated Eye Exams for Disease Detection',
    description: 'Discover how dilated eye exams can detect serious eye diseases before symptoms appear and protect your vision for life.',
    url: 'https://www.sparkeyetx.com/blog/the-importance-of-dilated-eye-exams-for-disease-detection',
    type: 'article',
    images: [{ url: '/og-image.jpg' }],
  },
}

export default function BlogPost() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</div>
          <h1 className="font-['Cormorant',serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Importance of Dilated Eye Exams for Disease Detection
          </h1>
          <div className="flex gap-6 justify-center text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6 font-light">
              Imagine having a window into your overall health—one that could reveal signs of diabetes, high blood pressure, or even certain cancers before you experience any symptoms. That window exists, and it's accessed through a simple procedure called a dilated eye exam. While many people associate eye exams with updating their prescription for glasses or contacts, the truth is that comprehensive dilated eye exams serve a far more critical purpose: detecting serious diseases that could threaten not only your vision but your overall well-being.
            </p>

            <p className="mb-6">
              Your eyes are often called the "windows to the soul," but for healthcare providers, they're windows to your body's health. The blood vessels, nerves, and tissues visible during a dilated eye exam can reveal early warning signs of conditions that might otherwise go unnoticed until irreversible damage has occurred. Understanding the importance of these exams—and making them a regular part of your healthcare routine—could quite literally save your sight and your life.
            </p>

            <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What Happens During a Dilated Eye Exam?
            </h2>

            <p className="mb-6">
              During a dilated eye exam, your eye care provider places special drops in your eyes that cause your pupils to widen significantly. This dilation typically takes 20-30 minutes to reach full effect and allows your doctor to see structures at the back of your eye that would otherwise remain hidden. Using specialized instruments and bright lights, they can examine your retina, optic nerve, and blood vessels in remarkable detail.
            </p>

            <p className="mb-6">
              The procedure is painless, though you may experience temporary light sensitivity and blurred near vision for several hours afterward. Many patients find it helpful to bring sunglasses to their appointment and arrange for someone else to drive them home. While the temporary inconvenience is real, the diagnostic value is immeasurable—this is the only way to thoroughly assess the internal health of your eyes.
            </p>

            <p className="mb-6">
              Modern technology has enhanced what providers can see during these exams. Digital retinal imaging and optical coherence tomography (OCT) create detailed maps of your eye's internal structures, allowing for early detection of even subtle changes that might indicate disease. These images also provide a baseline for comparison at future visits, making it easier to identify problems as they develop.
            </p>

            <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Critical Eye Diseases Detected Through Dilation
            </h2>

            <p className="mb-6">
              Glaucoma, often called the "silent thief of sight," typically produces no symptoms in its early stages. By the time patients notice vision loss, significant and irreversible damage has already occurred. During a dilated exam, your provider can assess your optic nerve for characteristic changes that indicate glaucoma, allowing for treatment before vision loss begins. With early detection and proper management, most people with glaucoma maintain functional vision throughout their lives.
            </p>

            <p className="mb-6">
              Diabetic retinopathy affects millions of Americans and is a leading cause of blindness in working-age adults. High blood sugar levels damage the delicate blood vessels in the retina, causing them to leak, swell, or grow abnormally. These changes are often invisible to patients until advanced stages, but they're clearly visible during a dilated exam. The American Diabetes Association recommends that all people with diabetes receive annual dilated eye exams—and more frequent exams if retinopathy is detected.
            </p>

            <p className="mb-6">
              Age-related macular degeneration (AMD) affects central vision and becomes increasingly common after age 50. During dilation, providers can identify drusen (small deposits under the retina) and other early signs of AMD, allowing patients to take preventive steps and receive treatment if needed. New therapies have dramatically improved outcomes for many AMD patients, but only if the condition is caught before severe vision loss occurs.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 italic text-xl font-['Cormorant',serif] text-[var(--color-ink)]">
              "Early detection through dilated eye exams can prevent up to 95% of diabetes-related vision loss, yet nearly half of Americans with diabetes don't get their recommended annual eye exam."
            </div>

            <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Beyond Eyes: Systemic Diseases Revealed
            </h2>

            <p className="mb-6">
              The blood vessels in your eyes are essentially identical to those throughout your body, making them a unique window into your cardiovascular health. During a dilated exam, providers can identify changes associated with high blood pressure, including narrowing, bleeding, or damage to retinal blood vessels. These findings sometimes represent the first indication that a patient has hypertension, prompting life-saving treatment and lifestyle changes.
            </p>

            <p className="mb-6">
              For patients with diabetes, dilated eye exams serve a dual purpose. Not only do they screen for diabetic retinopathy, but the severity of eye changes helps providers assess how well blood sugar has been controlled over time. Eye findings can prompt adjustments to diabetes management that improve overall health outcomes, not just vision.
            </p>

            <p className="mb-6">
              Surprisingly, dilated eye exams have even led to the detection of brain tumors, aneurysms, and certain cancers. The optic nerve connects directly to the brain, and increased intracranial pressure or masses can cause visible swelling or changes. Similarly, certain cancers can spread to the eye or cause paraneoplastic changes visible during examination. While these findings are less common, they underscore how comprehensive eye care connects to total body health.
            </p>

            <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Who Needs Dilated Eye Exams and How Often?
            </h2>

            <p className="mb-6">
              The frequency of dilated eye exams depends on your age, health status, and risk factors. The American Academy of Ophthalmology recommends that adults with no signs or risk factors for eye disease receive a comprehensive eye exam including dilation at age 40, when early signs of disease and changes in vision often begin. Adults aged 55-64 should have exams every 1-3 years, while those 65 and older should have annual exams.
            </p>

            <p className="mb-6">
              However, certain individuals need more frequent monitoring. If you have any of the following conditions or risk factors, you should discuss with your provider whether more frequent dilated exams are appropriate:
            </p>

            <div className="my-8 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Diabetes (Type 1 or Type 2) – Annual dilated exams are essential regardless of whether you have symptoms</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Family history of glaucoma, macular degeneration, or other eye diseases</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>High blood pressure or other cardiovascular conditions</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>African American, Hispanic, or Asian descent (higher risk for certain eye diseases)</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Previous eye injury or surgery</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>High myopia (severe nearsightedness)</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Taking medications that can affect eye health (including some steroids and certain psychiatric medications)</span>
              </div>
            </div>

            <p className="mb-6">
              Children and young adults also benefit from periodic comprehensive eye exams, particularly if they have risk factors or symptoms. Your eye care provider can recommend an appropriate schedule based on individual circumstances.
            </p>

            <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Overcoming Barriers to Regular Eye Exams
            </h2>

            <p className="mb-6">
              Despite the clear benefits, millions of Americans skip or delay recommended eye exams. Common barriers include cost concerns, lack of insurance coverage, difficulty taking time off work, or simply not recognizing the importance of preventive eye care. However, the cost of treating advanced eye disease—both financially and in terms of quality of life—far exceeds the investment in prevention.
            </p>

            <p className="mb-6">
              Most vision insurance plans cover annual comprehensive eye exams, including dilation when medically necessary. For patients with diabetes or other systemic conditions, medical insurance often covers eye exams as part of disease management. Community health centers and nonprofit organizations also provide eye care services on a sliding fee scale for those without insurance.
            </p>

            <p className="mb-6">
              If you find it difficult to take time off work for an appointment that leaves your vision temporarily blurred, consider scheduling your exam on a day when you have minimal visual demands afterward, or at the end of your workday. Many eye care practices offer early morning or evening appointments to accommodate working patients. The few hours of inconvenience pale in comparison to the protection these exams provide.
            </p>

            <h2 className="font-['Cormorant',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking Control of Your Eye Health
            </h2>

            <p className="mb-6">
              Your vision is precious, and much of the devastating vision loss that occurs each year is preventable through early detection and treatment. Making dilated eye exams a regular part of your healthcare routine represents one of the most effective steps you can take to preserve your sight and protect your overall health.
            </p>

            <p className="mb-6">
              Don't wait for symptoms to appear before scheduling a comprehensive eye exam. By the time many eye diseases cause noticeable vision changes, significant damage has already occurred. Regular dilated exams catch problems at their earliest, most treatable stages—often before you're aware anything is wrong.
            </p>

            <p className="mb-6">
              If it has been more than a year since your last dilated eye exam—or if you've never had one—now is the time to schedule an appointment. Your future self will thank you for taking this important step in protecting one of your most valuable senses. After all, the best treatment for eye disease is the prevention and early detection that comprehensive eye exams provide.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="font-['Cormorant',serif] text-2xl text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in comprehensive eye care and disease detection</p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant',serif] text-3xl mb-8 text-[var(--color-ink)] text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)] text-sm">Learn how diabetes affects your eyes and what you can do to protect your vision.</p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Glaucoma: What You Need to Know</h4>
              <p className="text-[var(--color-muted)] text-sm">Discover why regular screening is critical for preventing vision loss from glaucoma.</p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h4 className="font-['Cormorant',serif] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">How Often Should You Get Eye Exams?</h4>
              <p className="text-[var(--color-muted)] text-sm">Find out the recommended schedule for comprehensive eye exams at every age.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you protect your vision and overall health.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105">
            Schedule Your Comprehensive Eye Exam
          </a>
        </div>
      </section>
    </>
  )
}