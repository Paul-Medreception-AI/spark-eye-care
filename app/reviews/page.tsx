import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Patient Reviews & Testimonials | Spark Eye Care',
  description: 'Read what our patients say about Dr. Andrew Plummer and Spark Eye Care. See real testimonials from cataract surgery, glaucoma treatment, and comprehensive eye care patients in Kyle, Texas.',
}

export default function ReviewsPage() {
  const testimonials = [
    {
      quote: "Dr. Plummer performed my cataract surgery and the results exceeded my expectations. I can now read without glasses and my distance vision is crystal clear. His surgical skill and gentle bedside manner made the entire experience comfortable and stress-free.",
      author: "Margaret R.",
      service: "Cataract Surgery",
      source: "Google"
    },
    {
      quote: "I was nervous about glaucoma surgery, but Dr. Plummer explained the MIGS procedure thoroughly and answered all my questions. The recovery was much easier than I anticipated, and my eye pressure is now well-controlled. I'm grateful for his expertise and caring approach.",
      author: "Robert T.",
      service: "Glaucoma Surgery",
      source: "Healthgrades"
    },
    {
      quote: "After struggling with dry eyes for years, Dr. Plummer finally identified the underlying causes and created a treatment plan that actually works. The relief has been life-changing. He truly listens and takes the time to find solutions tailored to each patient.",
      author: "Jennifer L.",
      service: "Dry Eye Treatment",
      source: "Google"
    },
    {
      quote: "Dr. Plummer's refractive lens exchange gave me freedom from glasses after decades of dependence. The entire staff was professional and supportive throughout the process. I wish I had done this sooner—my vision is better now than it's been in 30 years.",
      author: "David K.",
      service: "Refractive Lens Exchange",
      source: "Google"
    },
    {
      quote: "As a diabetic patient, regular eye exams are crucial for me. Dr. Plummer is thorough in monitoring my retinal health and explaining what he sees during each visit. His vigilance gives me peace of mind that any problems will be caught early.",
      author: "Patricia M.",
      service: "Diabetic Eye Exam",
      source: "Healthgrades"
    },
    {
      quote: "The laser eye surgery I received from Dr. Plummer has completely transformed my daily life. No more fumbling for glasses first thing in the morning or dealing with contacts. The procedure was quick, painless, and the results are outstanding.",
      author: "Michael S.",
      service: "Laser Eye Surgery",
      source: "Google"
    },
    {
      quote: "I appreciated Dr. Plummer's honest assessment of my cataracts and his recommendation to wait until the timing was right for surgery. When we did proceed, everything went perfectly. His judgment and surgical expertise are truly exceptional.",
      author: "Linda W.",
      service: "Cataract Surgery",
      source: "Google"
    },
    {
      quote: "Dr. Plummer diagnosed my glaucoma during a routine exam and started treatment immediately. His proactive approach and clear explanations helped me understand the importance of compliance with my eye drops. I feel confident my vision is being protected.",
      author: "James H.",
      service: "Glaucoma Treatment",
      source: "Healthgrades"
    },
    {
      quote: "The comprehensive eye exam I received was the most thorough I've ever had. Dr. Plummer uses advanced technology and takes the time to review all the findings with you. It's clear he's committed to providing the highest standard of care to every patient.",
      author: "Susan B.",
      service: "Comprehensive Eye Exam",
      source: "Google"
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
                  <span className="text-xs text-[var(--color-muted)] bg-[var(--color-cream)] px-3 py-1 rounded-full">
                    {testimonial.source}
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