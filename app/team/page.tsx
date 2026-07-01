import Image from 'next/image'
import Link from 'next/link'

export default function TeamPage() {
  const team = [
    {
      name: "Dr. Andrew Plummer",
      role: "Board-Certified Ophthalmologist",
      image: "/images/dr-plummer-portrait.jpg",
      bio: "Dr. Plummer specializes in advanced cataract and refractive surgery, bringing years of surgical expertise to the Kyle community. He is dedicated to delivering world-class outcomes using the latest proven technologies while maintaining a personal, patient-centered approach to care."
    },
  ]

  return (
    <>
      {/* HERO — side-by-side with real portrait */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
              <p className="text-sm uppercase tracking-widest text-white/70 mb-4">Meet Your Surgeon</p>
              <h1 className="font-cormorant text-5xl lg:text-6xl font-light leading-tight mb-6">
                Personalized eye care from a fellowship-trained ophthalmologist
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl mb-8">
                Dr. Andrew Plummer brings advanced surgical expertise, the latest proven technologies, and a personal, patient-centered approach to every visit at Spark Eye Care in Kyle, Texas.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all group"
              >
                Schedule Your Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/dr-plummer-portrait.jpg"
                alt="Dr. Andrew Plummer, Board-Certified Ophthalmologist"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM CARDS */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-4">Our Provider</h2>
          <p className="text-center text-[var(--color-muted)] max-w-2xl mx-auto mb-16">
            Board-certified expertise and hands-on care for every patient.
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              >
                <div className="grid md:grid-cols-[2fr_3fr]">
                  <div className="relative aspect-[3/4] md:aspect-auto md:min-h-full bg-[var(--color-light)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-cormorant text-3xl text-[var(--color-ink)]">{member.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-2 mb-4">
                      {member.role}
                    </p>
                    <p className="text-[var(--color-muted)] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6">Experience Exceptional Eye Care</h2>
          <p className="text-lg text-white/80 mb-8">
            Ready to protect your vision with advanced, personalized care? Schedule your visit today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-dark)] hover:-translate-y-0.5 hover:shadow-xl transition-all group"
          >
            Schedule Your Eye Exam
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
