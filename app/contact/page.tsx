import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Spark Eye Care',
  description: 'Contact Spark Eye Care in Kyle, TX. Schedule your consultation with Dr. Andrew Plummer for cataract surgery, laser vision correction, and comprehensive eye care. Call (512) 377-1076.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-6xl font-light mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to schedule an appointment or ask a question.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div id="form" className="bg-white rounded-2xl p-10 shadow-sm border border-[var(--color-border)] animate-fade-up">
              <h2 className="font-serif text-3xl mb-8 text-[var(--color-ink)]">Send Us a Message</h2>
              <form method="POST" action="https://formspree.io/f/placeholder">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Full Name <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Email <span className="text-[var(--color-primary)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="Cataract Evaluation">Cataract Evaluation</option>
                      <option value="Refractive Lens Exchange Consultation">Refractive Lens Exchange Consultation</option>
                      <option value="Laser Vision Correction">Laser Vision Correction</option>
                      <option value="Glaucoma Management">Glaucoma Management</option>
                      <option value="Dry Eye Treatment">Dry Eye Treatment</option>
                      <option value="Diabetic Eye Exam">Diabetic Eye Exam</option>
                      <option value="General Eye Exam">General Eye Exam</option>
                      <option value="Second Opinion">Second Opinion</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="border border-[var(--color-border)] rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white py-4 rounded-xl font-semibold transition-colors mt-2"
                  >
                    Send Message
                  </button>

                  <p className="text-[var(--color-muted)] text-xs mt-4">
                    Please do not share personal health information via this form. For urgent medical matters, please call our office directly.
                  </p>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]">Visit Us</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Kyle, TX
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]">Call or Fax</h3>
                <a href="tel:(512) 377-1076" className="font-serif text-3xl font-semibold text-[var(--color-primary)] hover:text-[var(--color-dark)] transition-colors block mb-2">
                  (512) 377-1076
                </a>
              </div>

              <div className="bg-[var(--color-light)] rounded-2xl p-8 animate-fade-up">
                <svg stroke="var(--color-primary)" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-serif text-2xl mb-3 text-[var(--color-ink)]">Office Hours</h3>
                <p className="text-[var(--color-ink)]">
                  Call for availability
                </p>
              </div>

              <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 animate-fade-up">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <h3 className="font-serif text-2xl mb-3">Book an Appointment</h3>
                <p className="mb-6 text-white/90">
                  Ready to take the next step toward clearer vision? Fill out our contact form or give us a call today.
                </p>
                <a
                  href="#form"
                  className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-xl font-semibold hover:bg-[var(--color-cream)] transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}