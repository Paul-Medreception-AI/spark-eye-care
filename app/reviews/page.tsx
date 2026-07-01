import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Patient Reviews & Testimonials | Spark Eye Care',
  description: 'Read what our patients say about Dr. Andrew Plummer and Spark Eye Care. See real testimonials from cataract surgery, glaucoma treatment, and comprehensive eye care patients in Kyle, Texas.',
}

export default function ReviewsPage() {
  const testimonials = [
    {
      quote: "Best decision I have made for my health and quality of life. Dr Plummer is thorough, patient and knowledgeable. He walked me through options and clearly outlined expectations. I am beyond thrilled with my results. I visited several larger practices before I met with Dr Plummer and left feeling overwhelmed. Dr Plummer put me at ease with his style and approach to my lens replacement.",
      author: "Noelle P.",
      service: "Refractive Lens Exchange",
      date: "Apr 29, 2026"
    },
    {
      quote: "My experience with Dr. Plummer has been and continues to be stellar! Five Stars are not enough! He has a kind and thoughtful bedside manner, gave me a thorough explanation of my condition, diagnosis, and recommended treatment options. I was very anxious and he made me feel comfortable, listened to my concerns, and put me totally at ease. The cataract surgery went exactly as he described—his expertise and care were above and beyond. Dr. Plummer's follow-up has been excellent and he responded promptly to phone/text messages that I had with post-op questions. His Business Office Manager, Jessica, is professional, helpful, and efficient. Timely appointments, no wait times, a very pleasant office environment. I highly recommend Dr. Plummer and Spark Eye Care without reservation!",
      author: "Marsha E.",
      service: "Cataract Surgery",
      date: "Dec 16, 2024"
    },
    {
      quote: "Would you like a Dr. who is kind & compassionate or one who explains exactly what is going to happen so you can understand it & someone extremely knowledgeable about his profession? No need to look further. Dr Plummer has it all. Come see for yourself. I did!",
      author: "Zella V.",
      service: "Patient Care",
      date: "Nov 12, 2024"
    },
    {
      quote: "Love the new practice and location—Dr. Plummer is the best. My eyes are pretty good so only seeing him once a year, but wife has things that require more frequent visits, and he takes such good care of her! Kind, gentle, and highly skilled as well. Always up on the newest treatments.",
      author: "James L.",
      service: "Comprehensive Eye Care",
      date: "Nov 10, 2024"
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            What Our Patients Say
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-xl font-light">5.0 · 50+ Reviews</span>
          </div>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/AdobeStock_637490792.jpeg"
                alt="Happy patients enjoying clear vision"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm animate-fade-up">
                <div className="flex gap-1 mb-4">
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <blockquote className="italic text-[var(--color-ink)] leading-relaxed text-sm mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[var(--color-ink)] text-sm">{testimonial.author}</p>
                    <p className="text-xs text-[var(--color-muted)]">{testimonial.service}</p>
                  </div>
                  <span className="text-xs text-[var(--color-muted)] bg-[var(--color-cream)] px-3 py-1 rounded-full whitespace-nowrap">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-up">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="font-cormorant text-5xl font-light text-[var(--color-primary)]">5.0</span>
              </div>
              <p className="text-[var(--color-muted)] text-sm">Average Rating</p>
            </div>
            <div className="text-center animate-fade-up">
              <p className="font-cormorant text-5xl font-light text-[var(--color-primary)] mb-3">50+</p>
              <p className="text-[var(--color-muted)] text-sm">Patient Reviews</p>
            </div>
            <div className="text-center animate-fade-up">
              <p className="font-cormorant text-5xl font-light text-[var(--color-primary)] mb-3">95%</p>
              <p className="text-[var(--color-muted)] text-sm">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Experience Exceptional Eye Care for Yourself
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join the many patients who trust Dr. Plummer and our team with their vision. Schedule your comprehensive eye exam today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule Your Eye Exam
          </Link>
        </div>
      </section>
    </main>
  )
}