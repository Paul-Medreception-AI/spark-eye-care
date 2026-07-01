import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diabetic Eye Disease: Why Regular Screenings Can Save Your Sight | Spark Eye Care',
  description: 'Learn how diabetes affects your vision and why regular eye screenings are critical for preventing diabetic retinopathy, macular edema, and vision loss.',
  openGraph: {
    title: 'Diabetic Eye Disease: Why Regular Screenings Can Save Your Sight',
    description: 'Learn how diabetes affects your vision and why regular eye screenings are critical for preventing diabetic retinopathy, macular edema, and vision loss.',
    url: 'https://www.sparkeyetx.com/blog/diabetic-eye-disease-why-regular-screenings-can-save-your-si',
    type: 'article',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
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
          
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Diabetic Eye Disease: Why Regular Screenings Can Save Your Sight
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p className="text-xl leading-relaxed">
              Imagine waking up one morning to find that the world appears blurry, colors seem faded, and reading has become nearly impossible. For millions of people living with diabetes, this isn't just a nightmare—it's a real risk that silently progresses without warning signs until significant damage has occurred. The good news? Diabetic eye disease is largely preventable with timely intervention and regular screenings.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">Understanding Diabetic Eye Disease</h2>
            
            <p>
              Diabetic eye disease is an umbrella term for several eye conditions that can affect people with diabetes. The most common and serious of these is diabetic retinopathy, which occurs when high blood sugar levels damage the blood vessels in the retina—the light-sensitive tissue at the back of your eye.
            </p>

            <p>
              When blood sugar remains elevated over time, the delicate vessels in your retina can swell, leak, or even close off completely. In advanced stages, abnormal new blood vessels may grow on the retina's surface, leading to severe vision problems or blindness.
            </p>

            <p>
              Beyond diabetic retinopathy, people with diabetes also face increased risks of:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Diabetic macular edema (DME):</strong> Swelling in the macula, the part of the retina responsible for sharp central vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Glaucoma:</strong> Diabetes doubles your risk of developing this condition that damages the optic nerve</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Cataracts:</strong> People with diabetes develop cataracts at a younger age and more rapidly</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">The Silent Threat: Why Early Detection Matters</h2>
            
            <p>
              Perhaps the most dangerous aspect of diabetic eye disease is its stealth nature. In the early stages, there are often no symptoms at all. You might have 20/20 vision and feel perfectly fine while significant damage is occurring beneath the surface.
            </p>

            <p>
              By the time you notice vision changes—blurriness, floaters, dark spots, or difficulty seeing at night—the disease has typically progressed to an advanced stage. At this point, treatment becomes more complex and the likelihood of preserving your vision decreases significantly.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl font-serif">
                "Research shows that 95% of vision loss from diabetic retinopathy can be prevented with timely detection and treatment. The key is catching it before symptoms appear."
              </p>
            </div>

            <p>
              According to the American Diabetes Association, diabetic retinopathy is the leading cause of blindness among working-age adults in the United States. Currently, nearly one-third of people over 40 with diabetes show signs of diabetic retinopathy, yet many remain undiagnosed because they haven't had a comprehensive dilated eye exam.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is at Risk?</h2>
            
            <p>
              Anyone with type 1 or type 2 diabetes can develop diabetic eye disease. Your risk increases based on several factors:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Duration of diabetes:</strong> The longer you've had diabetes, the higher your risk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Poor blood sugar control:</strong> High A1C levels significantly increase your risk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>High blood pressure:</strong> Hypertension compounds damage to retinal blood vessels</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>High cholesterol:</strong> Lipid abnormalities can worsen retinal changes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Pregnancy:</strong> Women with diabetes who become pregnant need more frequent eye exams</span>
              </li>
            </ul>

            <p>
              It's important to understand that even people with well-controlled diabetes can develop eye complications, which is why screening is essential regardless of how well you're managing your condition.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">What Happens During a Diabetic Eye Screening?</h2>
            
            <p>
              A comprehensive diabetic eye exam goes far beyond reading an eye chart. Your eye care provider will perform several tests to thoroughly evaluate the health of your eyes:
            </p>

            <p>
              <strong>Dilated Eye Examination:</strong> Special drops temporarily widen your pupils, allowing your doctor to examine the retina and optic nerve for signs of damage. This is the gold standard for detecting diabetic retinopathy.
            </p>

            <p>
              <strong>Visual Acuity Testing:</strong> Measures how well you see at various distances to detect any vision loss.
            </p>

            <p>
              <strong>Tonometry:</strong> Checks the pressure inside your eyes to screen for glaucoma.
            </p>

            <p>
              <strong>Optical Coherence Tomography (OCT):</strong> This advanced imaging technology creates detailed cross-sectional images of your retina, revealing swelling, fluid accumulation, or abnormal blood vessel growth.
            </p>

            <p>
              <strong>Retinal Photography:</strong> Digital images document the current state of your retina, creating a baseline for comparison at future visits.
            </p>

            <p>
              The entire examination typically takes 30 to 45 minutes. Your vision may remain blurry for several hours after dilation, so it's wise to bring sunglasses and arrange transportation if needed.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">Treatment Options When Problems Are Detected</h2>
            
            <p>
              When diabetic eye disease is caught early, several effective treatments can slow or stop its progression:
            </p>

            <p>
              <strong>Improved diabetes management:</strong> In mild cases, optimizing blood sugar, blood pressure, and cholesterol levels may be sufficient to prevent further damage.
            </p>

            <p>
              <strong>Anti-VEGF injections:</strong> These medications, injected directly into the eye, block a protein that promotes abnormal blood vessel growth and leakage. They've revolutionized treatment for diabetic macular edema and advanced retinopathy.
            </p>

            <p>
              <strong>Laser treatment (photocoagulation):</strong> Carefully applied laser energy can seal leaking blood vessels or shrink abnormal vessels.
            </p>

            <p>
              <strong>Vitrectomy:</strong> In severe cases with bleeding or retinal detachment, surgical removal of the vitreous gel may be necessary.
            </p>

            <p>
              The success of these treatments depends heavily on early detection. Eyes with minimal damage respond much better to intervention than those with advanced disease.
            </p>

            <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">Your Action Plan: Protecting Your Vision</h2>
            
            <p>
              If you have diabetes, taking these steps can dramatically reduce your risk of vision loss:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Schedule annual comprehensive eye exams</strong> even if your vision seems perfect</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain tight blood sugar control</strong> with target A1C levels recommended by your healthcare team</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Manage blood pressure and cholesterol</strong> to reduce vascular damage</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Don't smoke</strong>—tobacco use accelerates diabetic complications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Report any vision changes immediately</strong> including floaters, flashes, or blurriness</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Work closely with your diabetes care team</strong> to coordinate comprehensive care</span>
              </li>
            </ul>

            <p>
              Remember: your eyes are not separate from the rest of your body. Managing your overall health and diabetes effectively is the single most powerful way to protect your vision for life.
            </p>

            <p className="text-lg font-medium mt-8">
              Living with diabetes requires vigilance, but it doesn't have to mean losing your sight. Regular eye screenings give you the power to catch problems early when they're most treatable. Don't wait until you notice symptoms—by then, precious time may have been lost. Make that appointment today. Your future self will thank you for taking this simple step that could save your vision.
            </p>
          </div>
        </div>
      </article>

      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">Written by the Spark Eye Care Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical</div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Eye Health</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Comprehensive Eye Exams</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn what to expect during your annual eye examination and why it's important.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Chronic Disease</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Managing Diabetes for Better Health Outcomes</h4>
                <p className="text-[var(--color-muted)] text-sm">Practical strategies for keeping blood sugar levels in check and preventing complications.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Prevention</div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Early Detection Saves Lives: The Importance of Preventive Screenings</h4>
                <p className="text-[var(--color-muted)] text-sm">Why catching health problems early gives you the best chance for successful treatment.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Eye Screening
          </a>
        </div>
      </section>
    </main>
  )
}