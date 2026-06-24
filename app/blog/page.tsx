import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">Resources & Patient Education</h1>
          <p className="text-xl text-white/90">Evidence-based information to support your vision health journey</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Featured Article</div>
            <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-6">Premium Lens Implants: How Modern Cataract Surgery Can Reduce Your Need for Glasses</h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>Cataract surgery has evolved dramatically over the past decade. What was once a procedure focused solely on removing cloudy lenses has become an opportunity to significantly improve your vision quality and reduce dependence on glasses. Premium intraocular lenses (IOLs) now offer options that previous generations could never have imagined.</p>
              <p>Today's advanced lens implants can correct not only cataracts but also nearsightedness, farsightedness, astigmatism, and even presbyopia—the age-related loss of near vision. Patients who have worn glasses their entire lives are experiencing the freedom of clear vision at multiple distances without corrective lenses. Understanding your options is the first step toward achieving your best possible visual outcome.</p>
              <p>Dr. Plummer specializes in refractive cataract surgery, taking precise measurements and using the latest diagnostic technology to match the right premium lens to your unique eye anatomy and lifestyle goals. Whether you want to read without glasses, see clearly while driving, or enjoy hobbies without visual limitations, modern cataract surgery offers solutions tailored to your individual needs.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-[var(--color-primary)] font-medium hover:gap-3 transition-all">
              Read More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Article 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Cataracts</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">When Is the Right Time for Cataract Surgery?</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Many patients wonder when cataracts have progressed enough to warrant surgery. Learn about the signs that indicate it may be time to consider treatment and how waiting too long can impact your surgical outcomes and quality of life.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all text-sm">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Glaucoma</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Understanding Glaucoma: The Silent Thief of Sight</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Glaucoma often progresses without symptoms until significant vision loss occurs. Discover why regular eye exams are critical for early detection and how modern treatments can preserve your vision for years to come.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all text-sm">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Laser Vision Correction</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Am I a Candidate for Laser Eye Surgery?</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Not everyone is a suitable candidate for laser vision correction. Learn about the factors that determine eligibility including prescription range, corneal thickness, eye health, and lifestyle considerations that impact your candidacy.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all text-sm">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Dry Eye</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">5 Common Causes of Chronic Dry Eye Syndrome</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Dry eye affects millions of Americans and can significantly impact daily comfort and vision quality. Explore the most common underlying causes from meibomian gland dysfunction to environmental factors and autoimmune conditions.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all text-sm">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Diabetic Eye Disease</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">How Diabetes Affects Your Eyes: What You Need to Know</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Diabetes can cause serious eye complications including diabetic retinopathy, macular edema, and increased cataract risk. Learn how to protect your vision through proper blood sugar management and regular comprehensive eye examinations.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all text-sm">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Refractive Lens Exchange</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Refractive Lens Exchange vs. Laser Eye Surgery: Which Is Right for You?</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Both procedures can reduce or eliminate dependence on glasses, but they work differently and serve different patient populations. Understand the key differences in technique, recovery, outcomes, and ideal candidate profiles for each approach.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all text-sm">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Article 7 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Eye Health</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Protecting Your Vision as You Age: Prevention Strategies That Work</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Age-related eye conditions are common but many are preventable or manageable with early intervention. Discover evidence-based lifestyle strategies including nutrition, UV protection, and screening schedules to maintain healthy vision throughout life.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all text-sm">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Article 8 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Surgery Preparation</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">What to Expect Before, During, and After Eye Surgery</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Proper preparation leads to better surgical outcomes and smoother recovery. Get a detailed timeline of what happens at each stage of the surgical process including pre-operative instructions, day-of-surgery expectations, and post-operative care guidelines.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all text-sm">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Article 9 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Technology</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Advanced Diagnostic Technology: How We Achieve Precise Surgical Outcomes</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Modern eye surgery success depends on accurate pre-operative measurements and planning. Learn about the advanced imaging and diagnostic tools we use to map your eye anatomy and customize your treatment for optimal visual results.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all text-sm">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white font-light mb-6">Ready to Discuss Your Vision Goals?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">Schedule a comprehensive evaluation with Dr. Plummer to explore your options for clearer, more comfortable vision.</p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-medium hover:shadow-xl transition-all hover:scale-105">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}