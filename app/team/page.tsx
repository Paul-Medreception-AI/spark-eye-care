import Link from 'next/link'

export default function TeamPage() {
  const team = [
    {
      name: "Dr. Andrew Plummer",
      role: "Board-Certified Ophthalmologist",
      bio: "Dr. Plummer specializes in advanced cataract and refractive surgery, bringing years of surgical expertise to the Kyle community. He is dedicated to delivering world-class outcomes using the latest proven technologies while maintaining a personal, patient-centered approach to care."
    },
    {
      name: "Jennifer Martinez",
      role: "Ophthalmic Technician",
      bio: "Jennifer brings extensive experience in diagnostic testing and patient care coordination. She works closely with Dr. Plummer to ensure every patient receives thorough evaluations and understands their treatment options, making each visit comfortable and informative."
    },
    {
      name: "Sarah Chen",
      role: "Patient Care Coordinator",
      bio: "Sarah manages surgical scheduling and patient communication, guiding families through every step of the treatment process. Her attention to detail and compassionate approach help patients feel confident and well-supported from consultation through post-operative care."
    }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-6xl font-light mb-6">Meet Our Team</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Dedicated professionals committed to delivering exceptional surgical eye care and personalized service to every patient we serve
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-[var(--color-ink)] text-center mb-16">Our Providers & Staff</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow animate-fade-up"
              >
                <div className="bg-[var(--color-light)] h-72 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="var(--color-primary)" 
                    strokeWidth={1.5} 
                    className="w-20 h-20 opacity-40"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[var(--color-ink)]">{member.name}</h3>
                  <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-1">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">Experience Exceptional Eye Care</h2>
          <p className="text-lg text-white/80 mb-8">
            Our team is ready to help you achieve your best vision with advanced surgical care and personalized attention
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-dark)] transition-colors"
          >
            Schedule Your Eye Exam
          </Link>
        </div>
      </section>
    </>
  )
}