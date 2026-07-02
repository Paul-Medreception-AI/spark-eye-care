import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye Conditions We Treat | Cataracts, Glaucoma, Dry Eye | Spark Eye Care',
  description: 'Comprehensive treatment for cataracts, glaucoma, dry eye syndrome, diabetic retinopathy, macular degeneration, and more. Dr. Andrew Plummer, Kyle, TX.',
  alternates: { canonical: '/conditions' },
}

export default function ConditionsPage() {
  const conditions = [
    {
      name: "Cataracts",
      slug: "cataracts",
      description: "Clouding of the eye's natural lens causes blurry vision and difficulty with night driving. We offer advanced surgical techniques with premium lens options to restore clear, vibrant vision.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      name: "Glaucoma",
      slug: "glaucoma",
      description: "Elevated eye pressure damages the optic nerve and can lead to permanent vision loss if untreated. Our comprehensive approach includes medical management and minimally invasive surgical options to preserve your sight.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
    },
    {
      name: "Refractive Errors",
      slug: "refractive-errors",
      description: "Nearsightedness, farsightedness, and astigmatism prevent light from focusing correctly on the retina. We provide surgical solutions including laser procedures and refractive lens exchange for lasting vision correction.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      name: "Presbyopia",
      slug: "presbyopia",
      description: "Age-related loss of near focusing ability makes reading and close work difficult without glasses. Refractive lens exchange offers a permanent solution that restores near, intermediate, and distance vision.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
    },
    {
      name: "Dry Eye Syndrome",
      slug: "dry-eye",
      description: "Insufficient tear production or poor tear quality causes burning, irritation, and fluctuating vision. Our targeted treatments address underlying causes to restore comfort and protect the ocular surface.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><line x1="9" y1="9" x2="15" y2="15" strokeLinecap="round" /></svg>
    },
    {
      name: "Diabetic Retinopathy",
      slug: "diabetic-retinopathy",
      description: "High blood sugar damages retinal blood vessels, leading to vision impairment and potential blindness. Regular screening and timely intervention prevent progression and preserve your eyesight for years to come.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
    },
    {
      name: "Macular Degeneration",
      slug: "macular-degeneration",
      description: "Age-related changes in the central retina cause loss of sharp, detailed vision needed for reading and driving. While we focus on surgical conditions, we provide appropriate referrals for specialized retinal care.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v6m0 0l-3-3m3 3l3-3" /></svg>
    },
    {
      name: "Corneal Conditions",
      slug: "corneal-conditions",
      description: "Infections, injuries, and degenerative diseases affect the clear front surface of your eye. We diagnose and manage conditions affecting the cornea to maintain clarity and protect your vision.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></svg>
    },
    {
      name: "Eye Floaters and Flashes",
      slug: "floaters-flashes",
      description: "Sudden onset of floaters or flashing lights can signal retinal tears or detachment requiring urgent care. We perform thorough dilated examinations to identify serious conditions that threaten vision.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
    },
    {
      name: "Conjunctivitis (Pink Eye)",
      slug: "conjunctivitis",
      description: "Viral, bacterial, or allergic inflammation causes redness, discharge, and discomfort. Accurate diagnosis ensures appropriate treatment to resolve symptoms and prevent spread to others.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
    },
    {
      name: "Age-Related Eye Changes",
      slug: "age-related-changes",
      description: "Natural aging affects multiple eye structures including the lens, retina, and tear film. Comprehensive adult eye exams detect conditions early when treatment is most effective.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      name: "Eye Pressure Issues",
      slug: "eye-pressure",
      description: "Elevated or fluctuating intraocular pressure requires careful monitoring and management. Advanced diagnostic testing identifies risk factors for glaucoma before irreversible damage occurs.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
    }
  ]

  const warningSigns = [
    {
      title: "Vision Changes",
      description: "Sudden blurry vision, loss of peripheral vision, distorted images, or difficulty seeing at night",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      title: "Eye Pain or Discomfort",
      description: "Persistent eye pain, severe redness, foreign body sensation, or excessive light sensitivity",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
    },
    {
      title: "Flashes or Floaters",
      description: "New floaters, flashing lights, or a curtain-like shadow in your vision may indicate retinal issues requiring urgent care",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Conditions We Treat
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Evidence-based care for a full range of eye conditions, from routine concerns to complex surgical cases requiring specialized expertise
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2748705.jpeg"
                alt="Conditions we treat"
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
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-4">
            Comprehensive Eye Care
          </h2>
          <p className="text-[var(--color-muted)] text-center text-lg mb-16 max-w-3xl mx-auto">
            Dr. Plummer diagnoses and treats a wide range of eye conditions using the latest proven technologies and surgical techniques
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              >
                <div className="stroke-[var(--color-primary)]">
                  {condition.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-4">
                  {condition.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm mt-3 leading-relaxed">
                  {condition.description}
                </p>
                <Link 
                  href={`/conditions/${condition.slug}`}
                  className="text-[var(--color-primary)] font-semibold text-sm mt-4 inline-block hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-4">
            When to Seek Help
          </h2>
          <p className="text-[var(--color-muted)] text-center text-lg mb-16 max-w-3xl mx-auto">
            Contact us immediately if you experience any of these warning signs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warningSigns.map((sign, index) => (
              <div
                key={index}
                className="bg-[var(--color-cream)] rounded-2xl p-8 text-center border border-[var(--color-border)] animate-fade-up"
              >
                <div className="stroke-[var(--color-primary)] flex justify-center mb-4">
                  {sign.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">
                  {sign.title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {sign.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] rounded-2xl p-12 text-white text-center max-w-4xl mx-auto">
            <h3 className="font-cormorant text-3xl font-semibold mb-4">
              Eye Emergency?
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              For severe eye injuries, sudden vision loss, or chemical exposure, seek immediate emergency care at your nearest hospital emergency department.
            </p>
            <p className="text-sm text-blue-200">
              For urgent but non-emergency concerns during business hours, contact our office directly for same-day evaluation when possible.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white font-light mb-6">
            Ready to Address Your Eye Health Concerns?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Schedule a comprehensive evaluation with Dr. Plummer to discuss your symptoms and explore treatment options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              Schedule Your Eye Exam
            </Link>
            <Link
              href="/services"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}