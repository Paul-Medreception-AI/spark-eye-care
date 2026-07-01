import Link from 'next/link'

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl font-light mb-6">Resources & Patient Education</h1>
          <p className="text-xl text-white/90">Evidence-based information to support your eye health and vision care journey</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm animate-fade-up">
            <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-4">Featured Article</div>
            <h2 className="font-serif text-4xl text-[var(--color-ink)] mb-6">Understanding Your Cataract Surgery Options: Premium Lens Technology Explained</h2>
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed mb-8">
              <p>Cataract surgery has evolved dramatically over the past decade, offering patients more choices than ever before. While traditional monofocal lenses provide excellent distance vision, premium lens options can reduce or eliminate your dependence on glasses for both near and far vision. Understanding these options is essential to making an informed decision about your eye care.</p>
              <p>Advanced intraocular lenses (IOLs) include multifocal lenses that provide clear vision at multiple distances, toric lenses that correct astigmatism, and extended depth of focus lenses that offer a broader range of clear vision. Each lens type has specific advantages depending on your lifestyle, visual demands, and eye health characteristics. Dr. Plummer takes time during your consultation to explain how each option aligns with your personal vision goals.</p>
              <p>The key to successful cataract surgery outcomes lies in precise measurements, careful lens selection, and advanced surgical techniques. Our practice uses the latest diagnostic technology to map your eye's unique characteristics, ensuring optimal lens positioning and visual results. This personalized approach to cataract surgery has helped countless patients achieve clearer, more vibrant vision than they've experienced in years.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] font-medium hover:text-[var(--color-dark)] transition-colors">
              Read More 
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Article 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Surgical Care</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">What to Expect During Your Cataract Surgery Recovery</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Most patients experience rapid visual improvement after cataract surgery, with minimal discomfort. Learn about the recovery timeline, post-operative care instructions, and when you can resume normal activities.</p>
              <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-dark)] transition-colors">
                Read More →
              </Link>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Eye Conditions</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">5 Warning Signs of Glaucoma You Shouldn't Ignore</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Glaucoma often develops without noticeable symptoms until significant vision loss occurs. Recognizing early warning signs and maintaining regular eye exams are crucial for preserving your sight.</p>
              <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-dark)] transition-colors">
                Read More →
              </Link>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Diabetes & Vision</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">How Diabetes Affects Your Eyes: A Comprehensive Guide</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Diabetes can cause serious eye complications including diabetic retinopathy and increased cataract risk. Understanding these risks and maintaining regular screenings can prevent vision loss.</p>
              <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-dark)] transition-colors">
                Read More →
              </Link>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Vision Correction</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Refractive Lens Exchange vs. LASIK: Which Is Right for You?</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Both procedures correct vision, but they work differently and suit different patients. Learn about the benefits of each approach and how to determine the best option for your eyes and lifestyle.</p>
              <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-dark)] transition-colors">
                Read More →
              </Link>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Dry Eye</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Modern Solutions for Chronic Dry Eye Syndrome</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Dry eye affects millions of people and can significantly impact quality of life. Discover the latest treatment options beyond artificial tears, from prescription medications to advanced therapies.</p>
              <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-dark)] transition-colors">
                Read More →
              </Link>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Surgical Technology</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">The Advantages of Minimally Invasive Glaucoma Surgery</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">MIGS procedures offer effective pressure reduction with faster recovery and fewer risks than traditional glaucoma surgery. Learn how these innovative techniques are changing glaucoma treatment.</p>
              <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-dark)] transition-colors">
                Read More →
              </Link>
            </div>

            {/* Article 7 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Prevention</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Protecting Your Vision: When to Schedule Your Eye Exam</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Regular eye examinations detect problems before they cause symptoms or permanent damage. Understand the recommended screening schedule based on your age, health, and risk factors.</p>
              <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-dark)] transition-colors">
                Read More →
              </Link>
            </div>

            {/* Article 8 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Patient Stories</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Life After Cataract Surgery: Patient Success Stories</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Hear from patients who have regained clear vision through cataract surgery. Their experiences highlight the life-changing impact of modern eye surgery techniques and personalized care.</p>
              <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-dark)] transition-colors">
                Read More →
              </Link>
            </div>

            {/* Article 9 */}
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up">
              <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-3">Eye Health</div>
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-4">Understanding Presbyopia: Why Reading Becomes Difficult After 40</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">Age-related near vision changes affect everyone eventually. Learn about presbyopia causes, symptoms, and the various correction options from reading glasses to surgical solutions.</p>
              <Link href="/contact" className="inline-flex items-center text-[var(--color-primary)] text-sm font-medium hover:text-[var(--color-dark)] transition-colors">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-10">Schedule a comprehensive evaluation with Dr. Plummer to discuss your vision goals and explore your treatment options.</p>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-colors">
            Schedule Your Eye Exam
          </Link>
        </div>
      </section>
    </main>
  )
}