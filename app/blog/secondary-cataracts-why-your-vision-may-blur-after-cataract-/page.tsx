import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Secondary Cataracts: Why Your Vision May Blur After Cataract Surgery | Spark Eye Care',
  description: 'Learn about posterior capsule opacification (PCO), why it causes blurred vision after cataract surgery, and how a simple laser treatment can restore clarity.',
  keywords: 'secondary cataracts, PCO, posterior capsule opacification, blurred vision after cataract surgery, YAG laser capsulotomy, cataract surgery complications',
}

export default function SeconddaryCataractsPage() {
  return (
    <main className="min-h-screen bg-white">
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
          
          {/* Category Tag */}
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">Patient Education</p>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Secondary Cataracts: Why Your Vision May Blur After Cataract Surgery
          </h1>
          
          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        {/* Opening Paragraph */}
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            You remember the day you had cataract surgery. The world became clearer, colors more vibrant, and everyday tasks easier. But now, months or even years later, you notice your vision starting to cloud again. You might wonder: "Is my cataract coming back?" The good news is that cataracts cannot return after they've been removed. However, what you're experiencing is likely a common condition called posterior capsule opacification, often referred to as a "secondary cataract." Understanding this condition can ease your concerns and guide you toward a simple solution.
          </p>
        </div>

        {/* Section 1 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          What Are Secondary Cataracts?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            Secondary cataracts, medically known as posterior capsule opacification (PCO), occur when the clear membrane that holds your artificial lens in place becomes cloudy. During cataract surgery, your surgeon removes the clouded natural lens but leaves this thin capsule intact to support the new intraocular lens (IOL). Over time, residual lens cells can grow and multiply on this capsule, causing it to thicken and become opaque—mimicking the symptoms of your original cataract.
          </p>
          <p className="mb-6">
            It's important to understand that PCO is not a true cataract returning, nor is it a sign that your surgery failed. It's simply a natural healing response that can occur after the procedure. The condition develops gradually and can affect one or both eyes at different rates.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          Who Is at Risk and When Does It Happen?
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            Secondary cataracts can develop in anyone who has had cataract surgery, but certain factors may increase your likelihood:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Younger patients:</strong> Those under 60 tend to have more active lens cell regeneration</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Diabetes:</strong> People with diabetes may experience higher rates of PCO</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Inflammatory conditions:</strong> Uveitis and other inflammatory eye diseases increase risk</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Type of IOL:</strong> Certain lens materials and designs may influence PCO development</span>
            </li>
          </ul>
          <p className="mb-6">
            Research indicates that PCO can develop anywhere from a few months to several years after cataract surgery, with most cases appearing within two to five years. Studies show that approximately 20-40% of patients develop some degree of PCO within five years of their initial surgery.
          </p>
        </div>

        {/* Pull Quote */}
        <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
          "PCO is not a sign of surgical failure—it's a treatable condition that can be resolved in minutes with a simple, painless laser procedure."
        </blockquote>

        {/* Section 3 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          Recognizing the Symptoms
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            The symptoms of secondary cataracts closely mirror those of your original cataract, which is why many patients worry about recurrence. Common signs include:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Gradual blurring or clouding of vision</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Increased sensitivity to glare, especially when driving at night</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Difficulty reading or performing close-up tasks</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Colors appearing less vivid or slightly faded</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Halos around lights in low-light conditions</span>
            </li>
          </ul>
          <p className="mb-6">
            These symptoms typically develop slowly, so you might not notice them at first. If you've had cataract surgery and are experiencing any of these changes, it's worth scheduling an eye examination to determine if PCO is the cause.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          The Simple Solution: YAG Laser Capsulotomy
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            The excellent news is that secondary cataracts are easily treatable with a quick, painless outpatient procedure called YAG laser capsulotomy. This treatment doesn't require incisions, stitches, or a lengthy recovery period.
          </p>
          <p className="mb-6">
            During the procedure, your eye surgeon uses a specialized laser to create a small opening in the clouded capsule behind your lens implant. This opening allows light to pass through clearly again, immediately restoring your vision. The entire process typically takes less than five minutes per eye, and you can usually resume normal activities the same day.
          </p>
          <p className="mb-6">
            Most patients notice significant vision improvement within hours to days after the procedure. The results are permanent—once the capsule has been opened with the laser, PCO cannot recur in that eye. Complications are rare, though your doctor will monitor for increased eye pressure and inflammation as precautionary measures.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          When to Seek Treatment
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            Not everyone with mild PCO needs immediate treatment. Some people develop only slight cloudiness that doesn't significantly impact their daily life. However, you should consult your eye care provider if:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Your vision changes are interfering with daily activities like reading, driving, or working</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You notice a sudden or rapid decline in vision quality</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Glare or halos are affecting your safety, especially while driving</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>You feel anxious or frustrated about your vision quality</span>
            </li>
          </ul>
          <p className="mb-6">
            Your ophthalmologist can perform a comprehensive exam to confirm PCO and determine whether laser treatment would benefit you. The decision to proceed is based on how much the condition affects your quality of life and visual function.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
          Moving Forward with Confidence
        </h2>
        <div className="text-[var(--color-ink)] leading-loose text-base">
          <p className="mb-6">
            If you've noticed your vision becoming cloudy after cataract surgery, you're not alone—and you're not without options. Secondary cataracts are a well-understood condition with a proven, effective treatment. The key is recognizing the symptoms early and seeking professional evaluation.
          </p>
          <p className="mb-6">
            Remember that experiencing PCO doesn't mean your cataract surgery was unsuccessful. Modern cataract surgery has transformed millions of lives, and the occasional need for a follow-up laser procedure is simply part of comprehensive eye care. With YAG laser capsulotomy, you can reclaim the clear, vibrant vision you enjoyed immediately after your initial surgery.
          </p>
          <p className="mb-6">
            If you're experiencing changes in your vision after cataract surgery, don't wait. Early evaluation ensures you get the clarity and quality of life you deserve. Our team at Spark Eye Care is here to provide expert diagnosis, compassionate care, and advanced treatment options tailored to your unique needs.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 mx-6 flex gap-6 items-start">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
          <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
          <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in comprehensive eye care and vision health.</p>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</p>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Cataracts: Symptoms and Treatment Options</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn about the causes, symptoms, and modern treatment approaches for cataracts.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Surgery</p>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">What to Expect After Cataract Surgery</h4>
                <p className="text-[var(--color-muted)] text-sm">A comprehensive guide to recovery, care instructions, and what's normal after your procedure.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Prevention</p>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">How to Maintain Healthy Vision as You Age</h4>
                <p className="text-[var(--color-muted)] text-sm">Practical tips and lifestyle changes to protect your eyesight throughout your life.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}