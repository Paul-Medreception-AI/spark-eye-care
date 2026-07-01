import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Your Eye Prescription: What the Numbers Mean | Spark Eye Care',
  description: 'Confused by the numbers on your eyeglass prescription? Learn what OD, OS, SPH, CYL, and AXIS mean and how they help you see clearly.',
  openGraph: {
    title: 'Understanding Your Eye Prescription: What the Numbers Mean',
    description: 'Confused by the numbers on your eyeglass prescription? Learn what OD, OS, SPH, CYL, and AXIS mean and how they help you see clearly.',
    url: 'https://sparkeyetx.com/blog/understanding-your-eye-prescription-what-the-numbers-mean',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00Z',
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-center text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">Patient Education</div>
          <h1 className="text-5xl font-light leading-tight text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Understanding Your Eye Prescription: What the Numbers Mean
          </h1>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
            <span>Published January 15, 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6 leading-relaxed">
              You walk out of your eye exam with a small slip of paper covered in abbreviations, numbers, and symbols that might as well be written in code. OD, OS, SPH, CYL, AXIS — what does it all mean? If you've ever felt confused by your eye prescription, you're not alone. Understanding these numbers isn't just about satisfying curiosity; it's about taking an active role in your eye health and making informed decisions about your vision correction.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              The Basic Structure: OD vs. OS
            </h2>
            <p className="mb-4">
              The first thing you'll notice on your prescription is the division between OD and OS. These Latin abbreviations stand for "oculus dexter" (right eye) and "oculus sinister" (left eye). Sometimes you'll also see OU, meaning "oculus uterque" or both eyes together. This distinction is crucial because most people have different prescriptions for each eye.
            </p>
            <p className="mb-4">
              Your right and left eyes rarely have identical vision needs. One eye might be more nearsighted than the other, or have different amounts of astigmatism. This is completely normal and is why your eye doctor examines and prescribes for each eye individually.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              SPH: The Sphere Measurement
            </h2>
            <p className="mb-4">
              The SPH (sphere) number indicates the lens power needed to correct nearsightedness or farsightedness. This number is measured in diopters (D) and can be positive or negative:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Negative numbers</strong> (e.g., -2.50) indicate myopia or nearsightedness — you see clearly up close but struggle with distance</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Positive numbers</strong> (e.g., +1.75) indicate hyperopia or farsightedness — distant objects are clearer than near ones</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Higher absolute numbers</strong> indicate stronger prescriptions and more significant vision correction needs</span>
              </li>
            </ul>
            <p className="mb-4">
              The SPH measurement is typically the most significant number on your prescription. It represents the primary refractive error that affects your vision quality.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
              "Understanding your prescription empowers you to make better choices about lens options, frame styles, and even lifestyle adjustments for optimal vision."
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              CYL and AXIS: Correcting Astigmatism
            </h2>
            <p className="mb-4">
              If you see numbers in the CYL (cylinder) and AXIS columns, you have astigmatism — a common condition where the cornea or lens has an irregular shape, causing blurred or distorted vision at all distances.
            </p>
            <p className="mb-4">
              The <strong>CYL value</strong> measures the degree of astigmatism in diopters, similar to SPH. It's also written as a positive or negative number. The higher the number (regardless of sign), the more astigmatism you have.
            </p>
            <p className="mb-4">
              The <strong>AXIS value</strong> is a number between 1 and 180 degrees that indicates the orientation of the astigmatism — essentially, which direction the irregular curve runs. Think of it like the hands on a clock showing where the correction needs to be positioned in your lens.
            </p>
            <p className="mb-4">
              These two numbers work together: CYL tells you how much correction you need, while AXIS tells you where that correction should be placed. You can't have one without the other when astigmatism is present.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              ADD: The Reading Addition
            </h2>
            <p className="mb-4">
              If you're over 40 or need help with close-up tasks, you might see an ADD number on your prescription. This stands for "addition" and represents the extra magnifying power needed for reading or other near work.
            </p>
            <p className="mb-4">
              The ADD value is always positive and typically ranges from +0.75 to +3.00. It's related to presbyopia, the natural age-related loss of focusing ability that affects everyone eventually. This number is added to your distance prescription to create bifocals, trifocals, or progressive lenses.
            </p>
            <p className="mb-4">
              Interestingly, the ADD value is usually the same for both eyes, even when your distance prescription differs significantly between the right and left eye.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Other Measurements You Might See
            </h2>
            <p className="mb-4">
              Depending on your specific needs and the type of eyewear you're ordering, your prescription might include additional measurements:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>PD (Pupillary Distance):</strong> The distance between your pupils in millimeters, crucial for properly centering lenses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prism:</strong> Corrects eye alignment issues; includes a measurement in prism diopters and a base direction</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Base Curve (BC):</strong> For contact lenses, indicates the curvature needed to fit your eye properly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Diameter (DIA):</strong> Also for contacts, this is the overall size of the lens in millimeters</span>
              </li>
            </ul>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Important Things to Remember
            </h2>
            <p className="mb-4">
              Now that you understand what the numbers mean, here are some essential points to keep in mind:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Prescriptions have expiration dates</strong> — typically one to two years — because your vision can change over time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Eyeglass and contact lens prescriptions are different</strong> — contacts sit directly on your eye while glasses sit about 12mm away, requiring different measurements</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Small changes can make big differences</strong> — even a quarter diopter adjustment can significantly impact your vision clarity and comfort</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>A prescription is not a diagnosis</strong> — it simply describes the correction needed; your eye doctor should explain any underlying conditions</span>
              </li>
            </ul>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              When to Ask Questions
            </h2>
            <p className="mb-4">
              Your eye prescription is a personal health document, and you have every right to understand it fully. Don't hesitate to ask your eye care provider to explain:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Why your prescription changed from your last exam</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Which lens options would work best for your lifestyle and budget</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Whether your vision changes indicate any health concerns</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>What you can do to maintain stable vision or slow progression</span>
              </li>
            </ul>
            <p className="mb-6">
              Understanding your eye prescription puts you in the driver's seat of your vision care. It helps you make informed decisions about eyewear, understand the reasoning behind your doctor's recommendations, and recognize when changes in your vision might warrant an earlier appointment. If you have questions about your prescription or haven't had your eyes examined recently, schedule a comprehensive eye exam. Clear vision starts with clear understanding, and our team is here to help you see — and understand — every detail.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="text-[var(--color-ink)] font-semibold mb-1">Written by the Spark Eye Care Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in comprehensive eye care and vision health education</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  How Often Should You Get an Eye Exam?
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Learn about recommended eye exam schedules for different ages and risk factors.</p>
              </div>
            </a>

            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Vision Correction</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Glasses vs. Contacts: Making the Right Choice
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Compare the benefits and considerations of eyeglasses versus contact lenses.</p>
              </div>
            </a>

            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-white p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Digital Health</div>
                <h4 className="text-xl text-[var(--color-ink)] mb-2 font-light group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Protecting Your Eyes from Blue Light
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Understand digital eye strain and evidence-based strategies for screen time.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help you understand your vision and find the perfect solution.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Eye Exam
          </a>
        </div>
      </section>
    </main>
  )
}