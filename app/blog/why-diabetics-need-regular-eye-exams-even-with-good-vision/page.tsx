import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Diabetics Need Regular Eye Exams (Even with Good Vision) | Spark Eye Care',
  description: 'Diabetic retinopathy often has no early symptoms. Learn why regular comprehensive eye exams are critical for diabetes patients, even when vision seems perfect.',
  keywords: 'diabetic eye exam, diabetic retinopathy, diabetes vision care, eye health diabetes, preventive eye care',
  openGraph: {
    title: 'Why Diabetics Need Regular Eye Exams (Even with Good Vision)',
    description: 'Diabetic retinopathy often has no early symptoms. Learn why regular comprehensive eye exams are critical for diabetes patients.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white/60">Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center font-medium">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Diabetics Need Regular Eye Exams (Even with Good Vision)
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Andrew Plummer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6 text-lg leading-relaxed">
              "My vision is fine. Do I really need an eye exam?" It's a question we hear often from patients living with diabetes. The short answer is yes—and here's why: diabetic eye disease is often called the "silent thief of sight" because it develops slowly, without warning signs, and frequently without any noticeable changes to your vision until significant, often irreversible damage has occurred.
            </p>
            <p className="mb-6">
              If you have diabetes—whether type 1, type 2, or gestational—your eyes are at risk. Even if your blood sugar is well-controlled and your vision seems perfect, changes may already be happening at the back of your eye that only a comprehensive dilated eye exam can detect. Understanding why regular eye exams are non-negotiable can literally save your sight.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            The Hidden Danger: Diabetic Retinopathy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Diabetic retinopathy is the most common diabetic eye disease and a leading cause of blindness in American adults. It occurs when high blood sugar levels damage the tiny blood vessels in the retina—the light-sensitive tissue at the back of your eye that sends visual information to your brain.
            </p>
            <p className="mb-6">
              In the early stages, called non-proliferative diabetic retinopathy, these weakened blood vessels may leak fluid or bleed. You might not notice any symptoms at all during this phase. As the disease progresses to proliferative diabetic retinopathy, abnormal new blood vessels grow on the retina's surface. These fragile vessels can bleed into the vitreous (the gel-like substance filling your eye), causing sudden vision loss, or lead to retinal detachment.
            </p>
            <p className="mb-6">
              The critical point: <strong>by the time you notice vision changes, the disease has often progressed significantly.</strong> Early detection through regular screening allows for intervention before permanent damage occurs.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            "Nearly all cases of severe vision loss from diabetic retinopathy are preventable with early detection and timely treatment."
            <div className="text-sm not-italic mt-2 text-[var(--color-muted)]">— National Eye Institute</div>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Why "Good Vision" Doesn't Mean Healthy Eyes
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Many people equate clear vision with eye health, but they're not the same thing. Visual acuity—your ability to see letters clearly on an eye chart—measures only central vision. It doesn't assess the health of your retinal blood vessels, detect early swelling in the macula (the part of your retina responsible for sharp central vision), or identify silent changes happening in your peripheral retina.
            </p>
            <p className="mb-6">
              Diabetic retinopathy can advance through several stages while your vision remains 20/20. Microaneurysms, tiny bulges in retinal blood vessels, are often the first sign but cause no symptoms. Macular edema—swelling in the central retina—can develop gradually, and you may adapt to subtle changes without realizing your vision is deteriorating.
            </p>
            <p className="mb-6">
              This is precisely why the American Diabetes Association and American Academy of Ophthalmology recommend comprehensive dilated eye exams for all people with diabetes, regardless of whether they're experiencing vision problems. The exam reveals what you can't see or feel.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Other Diabetes-Related Eye Conditions
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              While diabetic retinopathy receives the most attention, diabetes increases your risk for several other serious eye conditions:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Diabetic Macular Edema (DME):</strong> Swelling in the macula caused by fluid leakage from damaged blood vessels. DME is the most common cause of vision loss in people with diabetic retinopathy.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Glaucoma:</strong> People with diabetes are nearly twice as likely to develop glaucoma, a group of diseases that damage the optic nerve. Like diabetic retinopathy, glaucoma often has no early symptoms.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Cataracts:</strong> Diabetes increases both the risk and earlier onset of cataracts—clouding of the eye's natural lens. Diabetics may develop cataracts at a younger age and experience faster progression.
                </div>
              </div>
            </div>
            <p className="mb-6">
              Regular comprehensive exams screen for all of these conditions simultaneously, providing a complete picture of your eye health and enabling early intervention when treatments are most effective.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            The Power of Early Detection and Treatment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The good news: when caught early, diabetic eye disease is highly treatable. Advanced imaging technology now allows eye care professionals to detect retinal changes years before they affect vision. Treatment options have expanded dramatically and include:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Anti-VEGF Injections:</strong> Medications injected into the eye to reduce abnormal blood vessel growth and decrease fluid leakage
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Laser Photocoagulation:</strong> Targeted laser treatment to seal leaking blood vessels or shrink abnormal vessels
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Vitrectomy:</strong> Surgical removal of blood or scar tissue from the vitreous for advanced cases
                </div>
              </div>
            </div>
            <p className="mb-6">
              Research shows that maintaining tight blood sugar control and managing blood pressure significantly reduces the risk of developing diabetic retinopathy and slows its progression. When combined with regular eye exams and timely treatment, more than 95% of cases of severe vision loss from diabetes can be prevented.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Recommended Screening Schedule
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The American Diabetes Association provides clear guidelines for diabetic eye screening:
            </p>
            <div className="bg-[var(--color-cream)] rounded-xl p-6 my-6">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span><strong>Type 1 Diabetes:</strong> First comprehensive eye exam within 5 years of diagnosis, then annually</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span><strong>Type 2 Diabetes:</strong> Comprehensive eye exam at time of diagnosis, then annually</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span><strong>Pregnancy:</strong> Exam during first trimester if you have pre-existing diabetes; additional exams throughout pregnancy and first postpartum year as recommended</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span><strong>Detected Changes:</strong> More frequent exams (every 3-6 months) if retinopathy is present</span>
                </li>
              </ul>
            </div>
            <p className="mb-6">
              Your eye care provider may recommend more frequent exams based on your individual risk factors, including duration of diabetes, blood sugar control, blood pressure, and any existing eye conditions.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            What to Expect During Your Diabetic Eye Exam
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              A comprehensive diabetic eye exam is more thorough than a basic vision screening. You can expect:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Visual Acuity Testing:</strong> Measuring how clearly you see at various distances
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Pupil Dilation:</strong> Eye drops to widen your pupils, allowing examination of the entire retina and optic nerve
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Tonometry:</strong> Measuring eye pressure to screen for glaucoma
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Optical Coherence Tomography (OCT):</strong> Non-invasive imaging that creates detailed cross-sectional images of your retina
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-[var(--color-dark)]">Fundus Photography:</strong> High-resolution images of your retina for documentation and monitoring changes over time
                </div>
              </div>
            </div>
            <p className="mb-6">
              Plan for your appointment to last 60-90 minutes. Your vision will be blurry for 4-6 hours after dilation, so bring sunglasses and arrange transportation if needed.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)] animate-fade-up">
            <h2 className="text-3xl text-[var(--color-ink)] mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
              Your Vision is Worth Protecting
            </h2>
            <p className="mb-6">
              Living with diabetes requires vigilance across many aspects of your health, and your eyes deserve equal attention to your blood sugar, diet, and physical activity. Regular comprehensive eye exams aren't just recommended—they're essential preventive care that can preserve your vision for life.
            </p>
            <p className="mb-6">
              Don't wait for symptoms. By the time you notice vision changes, significant damage may have already occurred. Schedule your annual diabetic eye exam today, even if your vision seems perfect. Early detection makes all the difference between maintaining healthy vision and facing preventable blindness.
            </p>
            <p className="mb-6 text-lg font-medium text-[var(--color-dark)]">
              If you have diabetes and haven't had a comprehensive eye exam in the past year, now is the time to schedule one. Your future self will thank you.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-medium text-[var(--color-ink)] mb-1">
                Written by the Spark Eye Care Clinical Team
              </div>
              <div className="text-sm text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to providing evidence-based patient education and comprehensive eye care for patients with diabetes and other systemic conditions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-medium mb-2">
                  Eye Health
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Comprehensive Eye Exams
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  What to expect during your visit and why routine exams are essential for maintaining lifelong vision health.
                </p>
                <div className="text-sm text-[var(--color-primary)] font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-medium mb-2">
                  Prevention
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Managing Blood Sugar for Eye Health
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  Practical strategies for protecting your vision through diabetes management, lifestyle choices, and preventive care.
                </p>
                <div className="text-sm text-[var(--color-primary)] font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-medium mb-2">
                  Treatment Options
                </div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Advanced Treatments for Diabetic Retinopathy
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  Explore modern treatment options including anti-VEGF therapy, laser procedures, and surgical interventions.
                </p>
                <div className="text-sm text-[var(--color-primary)] font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
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
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            Our team is here to help protect your vision.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] hover:scale-105 transition-all duration-300 shadow-lg animate-fade-up"
          >
            Schedule Your Eye Exam
          </a>
        </div>
      </section>

    </main>
  )
}