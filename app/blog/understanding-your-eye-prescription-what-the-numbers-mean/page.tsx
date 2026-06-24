import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Your Eye Prescription: What the Numbers Mean | Spark Eye Care',
  description: 'Decode your eye prescription with this comprehensive guide. Learn what OD, OS, sphere, cylinder, axis, and add power mean for your vision health.',
  openGraph: {
    title: 'Understanding Your Eye Prescription: What the Numbers Mean',
    description: 'Decode your eye prescription with this comprehensive guide. Learn what OD, OS, sphere, cylinder, axis, and add power mean for your vision health.',
    url: 'https://www.sparkeyetx.com/blog/understanding-your-eye-prescription-what-the-numbers-mean',
    type: 'article',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }]
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Your Eye Prescription: What the Numbers Mean
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Dr. Care Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base animate-fade-up">
            <p className="text-xl mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              You've just left your eye exam, prescription in hand, and you're staring at a series of numbers, abbreviations, and symbols that look more like a secret code than medical information. You're not alone. Most people leave the optometrist's office without fully understanding what their prescription means—yet these numbers hold the key to how clearly you'll see the world.
            </p>

            <p className="mb-6">
              Your eye prescription is a precise mathematical formula designed specifically for your eyes. Understanding what those numbers mean empowers you to make informed decisions about your vision correction, communicate better with eye care professionals, and appreciate just how personalized your glasses or contact lenses really are. Let's decode that prescription together.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              The Basic Anatomy of Your Prescription
            </h2>

            <p className="mb-6">
              Every eye prescription starts with two fundamental abbreviations that you'll see at the top: OD and OS. These Latin terms—oculus dexter and oculus sinister—simply mean right eye and left eye, respectively. Some prescriptions also include OU, which means both eyes together. These abbreviations ensure your correction is applied to the correct eye, as each eye often requires different correction.
            </p>

            <p className="mb-6">
              Below these abbreviations, you'll find a series of numbers arranged in columns. The main values you'll encounter are sphere (SPH), cylinder (CYL), axis, add power, and sometimes prism. Each of these measurements addresses a specific aspect of how your eye focuses light, and together they create a complete picture of your vision correction needs.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Sphere: Correcting Nearsightedness and Farsightedness
            </h2>

            <p className="mb-6">
              The sphere (SPH) value is usually the first number you'll see, and it measures the degree of nearsightedness (myopia) or farsightedness (hyperopia) you have. This number is measured in diopters, which indicate the focusing power needed to correct your vision.
            </p>

            <p className="mb-6">
              A minus sign (-) before the number means you're nearsighted—you can see close objects clearly, but distant objects appear blurry. A plus sign (+) indicates farsightedness, meaning distant objects are clearer than nearby ones. The higher the number, the stronger the correction needed. For example, -2.00 represents mild myopia, while -6.00 indicates more significant nearsightedness.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
              "Understanding your prescription isn't just about numbers—it's about taking an active role in your eye health and making informed choices about your vision correction."
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Cylinder and Axis: Addressing Astigmatism
            </h2>

            <p className="mb-6">
              If you have numbers in the cylinder (CYL) and axis columns, you have astigmatism—a common condition where the cornea is shaped more like a football than a basketball, causing blurred vision at all distances. The cylinder value measures the degree of astigmatism, while the axis indicates the orientation of the irregularity.
            </p>

            <p className="mb-6">
              The cylinder number, like sphere, is measured in diopters and can be positive or negative. The axis is measured in degrees, ranging from 1 to 180. This tells the lens maker exactly where to place the astigmatism correction. An axis of 90 degrees means the astigmatism is vertical, while 180 degrees indicates horizontal astigmatism.
            </p>

            <p className="mb-6">
              It's important to note that you can have astigmatism in combination with nearsightedness or farsightedness. In fact, most people with significant vision correction have some degree of astigmatism, making their prescription slightly more complex but perfectly manageable with modern lens technology.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Add Power: For Presbyopia and Reading
            </h2>

            <p className="mb-6">
              If you're over 40, you might see an "add" or "ADD" value on your prescription. This number addresses presbyopia, the age-related loss of near focusing ability that affects everyone eventually. The add power is always a positive number and indicates additional magnifying power needed for reading and close work.
            </p>

            <p className="mb-6">
              Add powers typically range from +0.75 to +3.00 and are the same for both eyes. This value is added to your distance prescription to create the bottom portion of bifocals or progressive lenses. If you only need reading glasses, your prescription might only show an add power without distance correction.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Other Values You Might Encounter
            </h2>

            <p className="mb-6">
              Some prescriptions include additional measurements. Pupillary distance (PD) measures the distance between your pupils in millimeters and ensures that the optical center of your lenses aligns with your eyes. Prism and base values are prescribed less commonly and correct eye alignment issues, helping both eyes work together properly.
            </p>

            <p className="mb-6">
              You might also see notations about lens type recommendations—such as single vision, bifocal, or progressive—or special coatings like anti-reflective treatment or blue light filtering. These aren't part of the prescription itself but are helpful guidance from your eye care provider.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              What Your Prescription Reveals About Your Eye Health
            </h2>

            <p className="mb-6">
              Your prescription does more than just help you see clearly—it provides valuable information about your eye health over time. Tracking changes in your prescription can reveal important patterns. Rapidly increasing myopia in children and adolescents might warrant myopia management strategies. Sudden changes in adults could indicate underlying health conditions like diabetes or cataracts.
            </p>

            <div className="bg-[var(--color-cream)] rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Key Takeaways About Your Prescription</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sphere values indicate nearsightedness (minus) or farsightedness (plus)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cylinder and axis values correct astigmatism, a common refractive error</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Add power addresses presbyopia, the natural aging of near vision</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Each eye often has a different prescription—that's completely normal</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prescriptions should be updated every 1-2 years, even if your vision seems stable</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Glasses and contact lens prescriptions may differ due to lens distance from the eye</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Understanding your prescription also helps you make informed choices about lens options. Higher prescriptions may benefit from high-index lenses that are thinner and lighter. Significant astigmatism might require toric contact lenses. Progressive lens designs can be optimized based on your specific add power and visual needs.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              When to Discuss Your Prescription with Your Eye Doctor
            </h2>

            <p className="mb-6">
              While decoding your prescription is helpful, certain situations warrant a conversation with your eye care professional. If you notice rapid changes in your vision between exams, if your new glasses or contacts don't feel right after an adjustment period, or if you're experiencing symptoms like eye strain, headaches, or difficulty with night vision, it's time to schedule a follow-up.
            </p>

            <p className="mb-6">
              Your prescription is also the starting point for discussions about vision correction alternatives. LASIK and other refractive surgeries, specialty contact lenses for keratoconus or irregular corneas, and myopia control strategies for children all begin with understanding your current prescription and how it's changed over time.
            </p>

            <p className="mb-6">
              Remember that your eye prescription is valid for a specific period—usually one to two years—because eyes change over time. Regular eye exams ensure your prescription stays current and allows your eye doctor to monitor your overall eye health, screening for conditions like glaucoma, cataracts, and macular degeneration that go beyond simple vision correction.
            </p>

            <p className="mt-8 text-lg" style={{ fontFamily: 'Cormorant, serif' }}>
              Understanding your eye prescription transforms those mysterious numbers into meaningful information about your vision. If you have questions about your prescription or it's time for your next eye exam, our team at Spark Eye Care is here to provide clear answers and personalized care for your vision needs.
            </p>
          </div>
        </div>
      </article>

      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] text-lg mb-1">Written by the Spark Eye Care Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in comprehensive eye care and vision correction</div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Vision Care</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  How Often Should You Get an Eye Exam?
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Learn about recommended eye exam schedules for different ages and health conditions.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Glasses vs. Contact Lenses: Making the Right Choice
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Compare vision correction options to find what works best for your lifestyle.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Eye Health</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Protecting Your Vision: Daily Habits That Matter
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Simple lifestyle changes to maintain healthy eyes and prevent vision problems.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you understand your vision and provide personalized eye care.</p>
          <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Schedule Your Eye Exam
          </a>
        </div>
      </section>
    </main>
  )
}