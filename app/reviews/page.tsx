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
              <p className="text-[var(--color-muted)] text-sm">Average Google Rating</p>
            </div>
            <div className="text-center animate-fade-up">
              <p className="font-cormorant text-5xl font-light text-[var(--color-primary)] mb-3">366+</p>
              <p className="text-[var(--color-muted)] text-sm">Google Reviews</p>
            </div>
            <div className="text-center animate-fade-up">
              <p className="font-cormorant text-5xl font-light text-[var(--color-primary)] mb-3">2023</p>
              <p className="text-[var(--color-muted)] text-sm">Best of Hays County</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Google Review CTA */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fade-up">
          <svg className="w-12 h-12 text-yellow-400 fill-current mx-auto mb-4" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-4">
            Loved Your Visit?
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
            Your review helps other patients in the Kyle community find the eye care they need. It only takes a minute, and it means the world to us.
          </p>
          <a
            href="https://www.google.com/maps?cid=7516118286067296078"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.766 12.277c0-.816-.067-1.635-.212-2.437H12.24v4.62h6.482a5.548 5.548 0 01-2.4 3.643v3.017h3.877c2.278-2.096 3.567-5.19 3.567-8.843z" />
              <path d="M12.24 24c3.244 0 5.976-1.07 7.968-2.917l-3.877-3.017c-1.079.734-2.462 1.152-4.091 1.152-3.144 0-5.808-2.121-6.762-4.972H1.474v3.114A12 12 0 0012.24 24z" />
              <path d="M5.478 14.246a7.18 7.18 0 010-4.588V6.545H1.474a12 12 0 000 10.812l4.004-3.11z" />
              <path d="M12.24 4.75c1.767-.03 3.472.633 4.75 1.846l3.531-3.53A12 12 0 0012.24 0a12 12 0 00-10.766 6.545L5.478 9.66C6.44 6.804 9.104 4.75 12.24 4.75z" />
            </svg>
            Leave a Google Review
          </a>
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