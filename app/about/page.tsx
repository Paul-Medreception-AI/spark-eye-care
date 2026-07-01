import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Spark Eye Care',
  description: 'Expert eye care focused on your vision goals. Dr. Andrew Plummer brings world-class ophthalmology services to Kyle, Texas with advanced surgical expertise and genuine personal attention.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About</span>
          </div>
          
          <h1 className="font-cormorant text-6xl font-light max-w-4xl">
            Expert Eye Care Focused on Your Vision Goals
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-3xl">
            Combining advanced surgical expertise with genuine personal attention to deliver exceptional vision outcomes in Kyle, Texas
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2745822.jpeg"
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

      {/* Main Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main Text */}
            <div className="lg:col-span-3 lg:pr-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--color-ink)] leading-relaxed mb-6">
                  Spark Eye Care was founded on the principle that exceptional eye care combines advanced surgical expertise with genuine personal attention. Led by Dr. Andrew Plummer, our practice brings world-class ophthalmology services to the growing Kyle, Texas community. We understand that your vision is precious, and every patient deserves access to the latest proven technologies and techniques without traveling to distant medical centers.
                </p>
                
                <p className="text-[var(--color-ink)] leading-relaxed mb-6">
                  Dr. Plummer specializes in advanced surgical procedures including premium cataract surgery, refractive lens exchange, and minimally invasive glaucoma surgery. His commitment to staying at the forefront of ophthalmology means our patients benefit from the most effective treatments available. We invest in cutting-edge diagnostic equipment and surgical technology, but never lose sight of what matters most: helping you achieve your best possible vision and quality of life.
                </p>
                
                <p className="text-[var(--color-ink)] leading-relaxed">
                  At Spark Eye Care, we believe informed patients make the best decisions about their eye health. We take time to explain your condition, discuss all treatment options, and answer every question thoroughly. Whether you need routine eye care, management of chronic conditions like glaucoma or dry eye, or advanced surgical intervention, our team provides compassionate, personalized care at every step of your journey to better vision.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] sticky top-8 animate-fade-up">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-6">
                  Credentials & Expertise
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Board-Certified Ophthalmologist</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Advanced Cataract & Refractive Surgery Specialist</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Minimally Invasive Glaucoma Surgery Expert</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">State-of-the-Art Diagnostic Technology</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Premium Lens Implant Options</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Comprehensive Adult Eye Health Services</span>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Personalized Treatment Planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-ink)] mb-16">
            Our Approach
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Advanced Expertise */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] text-center mb-4">
                Advanced Surgical Expertise
              </h3>
              <p className="text-[var(--color-muted)] text-center leading-relaxed">
                We invest in the latest proven technologies and surgical techniques to deliver exceptional outcomes. Our commitment to continuous learning ensures you receive the most effective treatments available in modern ophthalmology.
              </p>
            </div>

            {/* Personalized Care */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] text-center mb-4">
                Personalized Patient Care
              </h3>
              <p className="text-[var(--color-muted)] text-center leading-relaxed">
                Every patient receives individualized attention tailored to their unique vision goals and lifestyle needs. We take time to listen, explain thoroughly, and develop treatment plans that align with what matters most to you.
              </p>
            </div>

            {/* Patient Education */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
              <div className="flex justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-ink)] text-center mb-4">
                Informed Decision Making
              </h3>
              <p className="text-[var(--color-muted)] text-center leading-relaxed">
                We believe educated patients make the best healthcare decisions. Our team ensures you understand your condition, all available treatment options, and what to expect at every stage of your care journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a comprehensive eye examination and discover how we can help you achieve your vision goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Eye Exam
          </Link>
        </div>
      </section>
    </main>
  )
}