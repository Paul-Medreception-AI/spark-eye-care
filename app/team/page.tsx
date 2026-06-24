import Image from 'next/image'
import Link from 'next/link'

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Andrew Plummer, MD",
      role: "Board Certified Ophthalmologist & Cataract & Refractive Surgeon",
      image: "/images/2746390.jpg",
      bio: "Dr. Plummer is a board-certified eye physician and surgeon specializing in premium cataract and refractive surgery. He is a diplomate of the American Academy of Ophthalmology and member of the American Society of Cataract and Refractive Surgery. Dr. Plummer is passionate about delivering world-class surgical outcomes with a personalized, patient-centered approach that prioritizes your unique vision goals and lifestyle needs."
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light mb-6">Meet Our Team</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Our dedicated professionals combine advanced expertise with compassionate care to deliver exceptional vision outcomes for every patient.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16">Our Providers & Staff</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow animate-fade-up">
                <div className="relative bg-[var(--color-light)] h-72">
                  <Image 
                    src={member.image} 
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">{member.name}</h3>
                  <p className="text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
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
          <h2 className="font-cormorant text-4xl font-light mb-6">Ready to Experience Exceptional Eye Care?</h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Schedule your comprehensive evaluation with Dr. Plummer and discover how advanced vision care can transform your life.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-dark)] transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}