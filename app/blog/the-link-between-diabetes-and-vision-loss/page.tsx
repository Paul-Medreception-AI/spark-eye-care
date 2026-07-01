import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Link Between Diabetes and Vision Loss | Spark Eye Care',
  description: 'Learn how diabetes affects your vision, the connection between high blood sugar and eye disease, and what you can do to protect your sight from diabetic retinopathy.',
  keywords: 'diabetes vision loss, diabetic retinopathy, diabetes eye disease, high blood sugar vision, diabetes blindness prevention',
  openGraph: {
    title: 'The Link Between Diabetes and Vision Loss | Spark Eye Care',
    description: 'Learn how diabetes affects your vision, the connection between high blood sugar and eye disease, and what you can do to protect your sight from diabetic retinopathy.',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
  }
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
          
          <h1 className="font-['Cormorant'] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Link Between Diabetes and Vision Loss
          </h1>
          
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
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
            <p className="text-xl leading-relaxed mb-8 text-[var(--color-dark)] font-['Cormorant']">
              If you're living with diabetes, you're already managing your blood sugar, watching your diet, and staying vigilant about your health. But there's one complication that often goes unnoticed until it's too late: vision loss. Diabetes is the leading cause of blindness among working-age adults in the United States, yet many people don't realize their eyes are at risk until significant damage has occurred.
            </p>

            <p className="mb-6">
              The connection between diabetes and vision loss is both serious and preventable. Understanding how high blood sugar affects your eyes—and what you can do about it—can mean the difference between maintaining clear vision and facing permanent sight loss. Let's explore this critical link and what it means for your eye health.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              How Diabetes Affects Your Eyes
            </h2>

            <p className="mb-6">
              Diabetes affects nearly every system in your body, and your eyes are particularly vulnerable. When blood sugar levels remain elevated over time, they can damage the tiny blood vessels in your retina—the light-sensitive tissue at the back of your eye that's essential for clear vision.
            </p>

            <p className="mb-6">
              This damage occurs gradually, often without symptoms in the early stages. The blood vessels may begin to leak fluid or bleed, causing swelling in the retina. In response to poor circulation, your eye may grow new, abnormal blood vessels that are fragile and prone to bleeding. These changes can lead to serious vision problems and, if left untreated, permanent vision loss.
            </p>

            <p className="mb-6">
              The longer you have diabetes and the less controlled your blood sugar is, the greater your risk of developing diabetic eye disease. But it's not just about duration—even relatively new cases of diabetes with poor blood sugar control can lead to vision complications.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Diabetic Retinopathy
            </h2>

            <p className="mb-6">
              Diabetic retinopathy is the most common diabetic eye disease and a leading cause of blindness. It progresses through several stages, each more serious than the last. In the early stage, called non-proliferative diabetic retinopathy, the blood vessels in the retina weaken and develop small bulges that may leak fluid into the surrounding tissue.
            </p>

            <p className="mb-6">
              As the condition advances to proliferative diabetic retinopathy, new blood vessels begin growing on the surface of the retina. These vessels are abnormal and fragile, prone to leaking blood into the vitreous—the clear, gel-like substance that fills the center of your eye. This can cause severe vision loss and potentially lead to retinal detachment, a medical emergency.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-['Cormorant']">
                "The most dangerous thing about diabetic retinopathy is that you can have it without knowing it. Regular eye exams aren't just recommended—they're essential for catching problems before they steal your sight."
              </p>
            </div>

            <p className="mb-6">
              Diabetic retinopathy often affects both eyes and can develop without any noticeable symptoms until it reaches an advanced stage. By the time you notice blurred vision, floaters, or dark spots, significant damage may have already occurred.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Other Diabetes-Related Eye Conditions
            </h2>

            <p className="mb-6">
              While diabetic retinopathy is the most well-known complication, diabetes increases your risk for several other serious eye conditions:
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">Diabetic Macular Edema (DME):</strong> This occurs when fluid accumulates in the macula, the part of the retina responsible for sharp, central vision. DME is a complication of diabetic retinopathy and can cause significant vision loss, making it difficult to read, drive, or recognize faces.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">Glaucoma:</strong> People with diabetes are twice as likely to develop glaucoma, a group of diseases that damage the optic nerve. Neovascular glaucoma, caused by abnormal blood vessel growth, is particularly associated with advanced diabetic retinopathy.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Cataracts:</strong> While cataracts are common as we age, people with diabetes tend to develop them earlier and more rapidly. High blood sugar levels can cause the lens of your eye to swell and cloud, leading to blurred vision.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Who Is at Risk?
            </h2>

            <p className="mb-6">
              Anyone with Type 1 or Type 2 diabetes is at risk for developing diabetic eye disease. However, certain factors significantly increase your risk:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Duration of diabetes:</strong> The longer you've had diabetes, the higher your risk of developing retinopathy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Poor blood sugar control:</strong> Consistently high blood glucose levels accelerate damage to blood vessels</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>High blood pressure:</strong> Hypertension compounds the damage to retinal blood vessels</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>High cholesterol:</strong> Elevated lipid levels can worsen retinal damage</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Pregnancy:</strong> Women with diabetes who become pregnant face increased risk of developing or worsening retinopathy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Smoking:</strong> Tobacco use increases your risk of diabetes complications, including eye disease</span>
              </li>
            </ul>

            <p className="mb-6">
              Research shows that nearly all people with Type 1 diabetes and more than 60% of those with Type 2 diabetes will eventually develop some form of diabetic retinopathy. However, with proper management and regular monitoring, the most severe complications can often be prevented.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Protecting Your Vision: What You Can Do
            </h2>

            <p className="mb-6">
              The good news is that vision loss from diabetes is largely preventable. Early detection and treatment can reduce your risk of blindness by 95%. Here's what you can do to protect your eyes:
            </p>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
              <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-6">Essential Steps for Eye Health with Diabetes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-dark)]">Get comprehensive dilated eye exams annually</strong>
                    <p className="text-sm mt-1 text-[var(--color-muted)]">This is the single most important thing you can do. Don't wait for symptoms—early retinopathy has none.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-dark)]">Control your blood sugar levels</strong>
                    <p className="text-sm mt-1 text-[var(--color-muted)]">Work with your diabetes care team to keep your A1C within target range. Better control means lower risk.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-dark)]">Manage blood pressure and cholesterol</strong>
                    <p className="text-sm mt-1 text-[var(--color-muted)]">These factors significantly impact your eye health. Take medications as prescribed and monitor regularly.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-dark)]">Maintain a healthy lifestyle</strong>
                    <p className="text-sm mt-1 text-[var(--color-muted)]">Regular exercise, a balanced diet, and avoiding smoking all contribute to better outcomes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-dark)]">Act quickly if you notice changes</strong>
                    <p className="text-sm mt-1 text-[var(--color-muted)]">Sudden vision changes, floaters, flashes of light, or vision loss require immediate attention.</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Treatment Options When Problems Develop
            </h2>

            <p className="mb-6">
              If diabetic eye disease is detected, several effective treatments are available. The key is catching problems early, when treatment is most effective:
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">Anti-VEGF injections</strong> can reduce swelling and slow the growth of abnormal blood vessels. These medications have revolutionized treatment and can prevent or even reverse vision loss in many cases.
            </p>

            <p className="mb-4">
              <strong className="text-[var(--color-dark)]">Laser treatment</strong> can seal leaking blood vessels or shrink abnormal vessels, helping to preserve remaining vision.
            </p>

            <p className="mb-6">
              <strong className="text-[var(--color-dark)]">Vitrectomy surgery</strong> may be necessary in advanced cases to remove blood from the vitreous or repair retinal detachment.
            </p>

            <p className="mb-6">
              The effectiveness of these treatments depends greatly on how early the disease is caught. This is why regular eye exams are so critical—they allow your eye care provider to detect changes before you notice any symptoms and intervene before permanent damage occurs.
            </p>

            <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Your Vision Deserves Protection
            </h2>

            <p className="mb-6">
              Living with diabetes requires vigilance across many aspects of your health, and your eyes should be a priority. The connection between diabetes and vision loss is serious, but it's not inevitable. With proper management of your diabetes, regular comprehensive eye exams, and prompt treatment when needed, you can significantly reduce your risk of vision loss.
            </p>

            <p className="mb-6">
              Don't let diabetic eye disease steal your sight silently. If you have diabetes and haven't had a comprehensive eye exam in the past year, now is the time to schedule one. Your vision is precious—and with the right care, it can be protected for years to come.
            </p>

            <p className="text-lg text-[var(--color-dark)] font-['Cormorant'] mt-8">
              Remember: the best treatment for diabetic eye disease is prevention through early detection. Make your eye health a priority today.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="font-['Cormorant'] text-2xl text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Board-certified providers specializing in Other Medical, committed to helping patients understand and manage their eye health with compassion and expertise.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="font-['Cormorant'] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Comprehensive Eye Exams
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Learn what happens during a comprehensive eye exam and why regular screenings are essential for maintaining healthy vision.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Chronic Disease</div>
                <h4 className="font-['Cormorant'] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Managing High Blood Pressure for Eye Health
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Discover how hypertension affects your vision and what steps you can take to protect your eyes from damage.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="font-['Cormorant'] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Early Warning Signs of Vision Problems
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Know the symptoms that require immediate attention and when to seek professional eye care for optimal outcomes.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help you protect your vision and maintain optimal eye health.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Comprehensive Eye Exam
          </a>
        </div>
      </section>
    </>
  )
}