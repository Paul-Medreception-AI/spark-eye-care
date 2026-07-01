import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Secondary Cataracts (PCO): When Cloudiness Returns After Surgery | Spark Eye Care',
  description: 'Learn about posterior capsule opacification (PCO), why vision can become cloudy months or years after cataract surgery, and the simple laser treatment that restores clarity.',
}

export default function BlogPost() {
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

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Secondary Cataracts (PCO): When Cloudiness Returns After Surgery
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2025</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              You had cataract surgery months or even years ago, and it worked beautifully. Your vision was clear, colors were vibrant, and you felt like you'd gotten your sight back. But now, gradually, you've noticed something troubling: the cloudiness is returning. Tasks that were easy after surgery—reading, driving at night, recognizing faces—are becoming difficult again.
            </p>
            <p className="mb-6">
              If this sounds familiar, you're not alone. What you're experiencing is likely not a return of your original cataract, but rather a common condition called posterior capsule opacification, or PCO. Often referred to as a "secondary cataract," PCO affects up to 20-40% of patients within two to five years after cataract surgery. The good news? It's treatable with a quick, painless laser procedure that can restore your vision in minutes.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Posterior Capsule Opacification (PCO)?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              During cataract surgery, your surgeon removes the cloudy natural lens inside your eye and replaces it with a clear artificial lens called an intraocular lens (IOL). To keep the IOL in place, the surgeon leaves behind the thin, clear membrane that originally surrounded your natural lens—this is called the posterior capsule.
            </p>
            <p className="mb-6">
              In some patients, the cells that remain on this capsule begin to grow and multiply over time. As these cells spread across the capsule, they create a cloudy film that blocks light from reaching your retina—much like the original cataract did. This cloudiness is PCO, and it causes the same symptoms you experienced before cataract surgery: blurred vision, glare, halos around lights, and difficulty with contrast.
            </p>
            <p className="mb-6">
              It's important to understand that PCO is not a surgical complication or a failure of your original procedure. It's a natural biological response that can happen to anyone who has had cataract surgery, regardless of the surgeon's skill or the quality of the lens implant.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is at Risk for Secondary Cataracts?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While anyone who has had cataract surgery can develop PCO, certain factors may increase your risk:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Younger age at the time of surgery:</strong> Younger patients tend to have more active lens cells that are more likely to regenerate and cause PCO.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Certain medical conditions:</strong> Diabetes, uveitis, and retinitis pigmentosa are associated with higher PCO rates.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Type of IOL material:</strong> Some lens materials and designs have been shown to reduce PCO risk, though no lens can completely prevent it.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Surgical technique:</strong> Thorough cleaning of lens cells during the original surgery can lower PCO rates, but some cell growth is often unavoidable.</span>
              </li>
            </ul>
            <p className="mb-6">
              Research shows that PCO can develop anywhere from a few months to several years after cataract surgery, with the highest incidence occurring within the first two years.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The YAG laser capsulotomy has transformed the treatment of PCO from a complex surgical procedure into a simple, five-minute outpatient treatment with immediate results."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Recognizing the Symptoms of PCO
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The symptoms of PCO develop gradually and often mirror those of the original cataract. You may notice:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Progressively blurry or hazy vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increased glare, especially when driving at night</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Halos around lights</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty reading small print</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reduced contrast sensitivity, making it hard to distinguish objects from their background</span>
              </li>
            </ul>
            <p className="mb-6">
              Because PCO develops slowly, many patients initially attribute their vision changes to aging or needing new glasses. If you've had cataract surgery and notice these symptoms, it's important to schedule an eye exam. Your eye care provider can quickly diagnose PCO during a routine examination.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            The YAG Laser Capsulotomy: A Simple Solution
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The treatment for PCO is called a YAG laser capsulotomy, named after the yttrium-aluminum-garnet (YAG) laser used in the procedure. This is not a surgery—it's a painless, in-office laser treatment that typically takes less than five minutes per eye.
            </p>
            <p className="mb-6">
              Here's what to expect:
            </p>
            <p className="mb-6">
              <strong>Before the procedure:</strong> Your eye will be dilated with drops, and you'll receive numbing eye drops to ensure comfort. You'll sit at a specialized laser machine similar to the equipment used during a regular eye exam.
            </p>
            <p className="mb-6">
              <strong>During the procedure:</strong> Your doctor will use the YAG laser to create a small, clear opening in the cloudy capsule behind your lens implant. The laser pulses are focused precisely on the capsule and don't touch the IOL or other eye structures. You may see flashes of light or hear clicking sounds, but you won't feel any pain.
            </p>
            <p className="mb-6">
              <strong>After the procedure:</strong> Most patients notice immediate improvement in their vision, though it may take a few hours for your pupils to return to normal size. You may be prescribed anti-inflammatory eye drops to use for a few days. Serious complications are rare, but your doctor will monitor for increased eye pressure or retinal issues.
            </p>
            <p className="mb-6">
              The best part? Once PCO is treated with YAG laser capsulotomy, it cannot come back. The opening created in the capsule is permanent, and you won't experience cloudiness from PCO again.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Why Early Detection Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While PCO is not an emergency, living with progressively declining vision can significantly impact your quality of life and safety. Studies have shown that untreated vision problems increase the risk of falls, limit independence, and contribute to social isolation and depression, particularly in older adults.
            </p>
            <p className="mb-6">
              Additionally, if you're experiencing vision changes, it's crucial to rule out other potential causes. While PCO is common after cataract surgery, other conditions—such as macular degeneration, glaucoma, or retinal issues—can cause similar symptoms and require different treatments. A comprehensive eye exam ensures you receive the right diagnosis and care.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            When to Contact Your Eye Care Provider
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you've had cataract surgery and notice any of the following, schedule an appointment:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Vision that was clear after surgery but has become cloudy again</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>New or worsening glare, especially at night</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty with activities that were easy after your original surgery</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Any sudden changes in vision</span>
              </li>
            </ul>
            <p className="mb-6">
              Don't hesitate to reach out, even if you're unsure whether your symptoms warrant a visit. Your eye care team is there to help you maintain the clear vision you deserve.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              If you've noticed your vision becoming cloudy again after cataract surgery, you don't have to accept it as inevitable. Posterior capsule opacification is a common, treatable condition, and a simple YAG laser capsulotomy can restore your clear vision in just minutes. The procedure is safe, effective, and offers long-lasting results—most importantly, it can give you back the clarity and confidence you experienced after your original cataract surgery.
            </p>
            <p>
              At Spark Eye Care, we're committed to helping you maintain optimal vision throughout every stage of life. If you have questions about PCO or would like to schedule an evaluation, please reach out to our team. We're here to provide the expert, compassionate care you deserve.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in comprehensive eye care, committed to patient education and evidence-based treatment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Cataracts: Causes, Symptoms, and Treatment Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about this common age-related condition and when surgery might be right for you.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Preparing for Cataract Surgery: What to Expect Before, During, and After
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  A comprehensive guide to help you feel confident and prepared for your procedure.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Regular Eye Exams: Why They Matter at Every Age
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover how routine eye care helps detect conditions early and protect your vision.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}