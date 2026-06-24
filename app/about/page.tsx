import Link from 'next/link'

export const metadata = {
  title: 'About Us | Spark Eye Care',
  description: 'Learn about Dr. Andrew Plummer and our commitment to world-class surgical eye care in Kyle, Texas.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span>›</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="font-cormorant text-6xl font-light leading-tight">
            Exceptional Eye Care Rooted in Trust and Technology
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-3xl">
            Bringing world-class surgical outcomes and personalized vision care to Central Texas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3 lg:pr-12">
              <p className="mb-6 text-lg leading-relaxed text-[var(--color-ink)]">
                Spark Eye Care was founded on the belief that every patient deserves access to world-class surgical eye care delivered with genuine compassion and respect. Dr. Andrew Plummer established our practice in Kyle to bring the most advanced ophthalmologic treatments to Central Texas, combining cutting-edge technology with the personalized attention that only a dedicated local practice can provide. We understand that your vision affects every aspect of your life, and we take that responsibility seriously.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-[var(--color-ink)]">
                Our practice specializes in premium refractive cataract surgery, which goes beyond simply removing cataracts to actually improve your vision beyond what glasses provided before surgery. We invest in the latest proven technologies and surgical techniques, ensuring our patients receive outcomes comparable to the nation's top academic medical centers. From minimally invasive glaucoma procedures to advanced dry eye treatments, we offer comprehensive surgical and medical eye care under one roof. Dr. Plummer stays current with the latest research and techniques, regularly attending national conferences and bringing innovative approaches back to our Kyle community.
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-ink)]">
                What truly sets Spark Eye Care apart is our commitment to informed, empowered patients. We take the time to thoroughly explain your condition, discuss all available treatment options, and answer every question you have. You will never feel rushed or pressured. Our team believes that the best outcomes happen when patients understand their care and actively participate in decisions about their vision. From your first consultation through post-operative care and beyond, we are your partners in maintaining healthy, functional vision for life.
              </p>
            </div>

            <aside className="lg:col-span-2">
              <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-white p-8">
                <h3 className="mb-6 font-cormorant text-2xl font-semibold text-[var(--color-ink)]">
                  Credentials & Expertise
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Board-Certified Ophthalmologist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Premium Refractive Cataract Surgery Specialist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Advanced MIGS Trained Surgeon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Latest Proven Surgical Technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Personalized Patient-Centered Approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 shrink-0 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Comprehensive Surgical & Medical Eye Care</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-cormorant text-4xl text-[var(--color-ink)]">
            Our Approach
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8 text-center transition-all hover:shadow-lg">
              <div className="mb-6 flex justify-center">
                <svg className="h-12 w-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.23 0 4.462l-1.402 1.402m-14.8-7.266l-1.402 1.402c-1.232 1.232-1.232 3.23 0 4.462l1.402 1.402m0 0l6.364 6.364a3 3 0 004.243 0l6.364-6.364m-14.142 0A9.015 9.015 0 0012 21a9.015 9.015 0 006.071-2.337" />
                </svg>
              </div>
              <h3 className="mb-3 font-cormorant text-xl font-semibold text-[var(--color-ink)]">
                Excellence in Surgical Outcomes
              </h3>
              <p className="text-[var(--color-muted)]">
                We invest in the latest proven technologies and techniques to deliver outcomes that rival the nation's top academic centers. Every procedure is performed with meticulous attention to detail and a commitment to your best possible vision.
              </p>
            </div>

            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8 text-center transition-all hover:shadow-lg">
              <div className="mb-6 flex justify-center">
                <svg className="h-12 w-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="mb-3 font-cormorant text-xl font-semibold text-[var(--color-ink)]">
                Truly Personalized Care
              </h3>
              <p className="text-[var(--color-muted)]">
                Your vision goals and lifestyle needs drive every treatment decision we make. We listen carefully, explain thoroughly, and create customized plans that align with what matters most to you in your daily life.
              </p>
            </div>

            <div className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8 text-center transition-all hover:shadow-lg">
              <div className="mb-6 flex justify-center">
                <svg className="h-12 w-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="mb-3 font-cormorant text-xl font-semibold text-[var(--color-ink)]">
                Empowered, Informed Patients
              </h3>
              <p className="text-[var(--color-muted)]">
                We believe the best results happen when you fully understand your condition and treatment options. You'll never feel rushed or pressured—only supported, educated, and confident in your decisions about your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-6 font-cormorant text-4xl font-light">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Schedule your consultation and discover how we can help you achieve your best vision.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-[var(--color-primary)] transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}