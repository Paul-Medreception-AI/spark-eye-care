import Image from 'next/image'
import Link from 'next/link'

export default function TeamPage() {
  return (
    <>
      {/* HERO — Dr. Plummer portrait side-by-side */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
              <p className="text-sm uppercase tracking-widest text-white/70 mb-4">Meet Your Surgeon</p>
              <h1 className="font-cormorant text-5xl lg:text-6xl font-light leading-tight mb-4">
                Dr. Andrew Plummer
              </h1>
              <p className="text-lg text-white/90 mb-2">Board-Certified Eye Physician & Surgeon</p>
              <p className="text-white/70 mb-8">Diplomate, American Academy of Ophthalmology · Member, American Society of Cataract and Refractive Surgery</p>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl mb-8">
                Advanced surgical expertise, the latest proven technologies, and a personal, patient-centered approach — all in one Kyle, Texas practice.
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
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/dr-plummer-portrait.jpg"
                alt="Dr. Andrew Plummer, Board-Certified Ophthalmologist"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
                style={{ objectPosition: '50% 15%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-10 text-center">
            About Dr. Plummer
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Dr. Plummer is a board-certified eye physician and surgeon specializing in premium cataract and refractive surgery. He is a diplomate of the American Academy of Ophthalmology and a member of the American Society of Cataract and Refractive Surgery.
            </p>
            <p>
              Since he began practicing in the Kyle area in 2021, he has earned a reputation for excellent surgical skills and a compassionate bedside manner. He was named <strong>&ldquo;Best of Hays County&rdquo;</strong> in the category of eye care in 2023.
            </p>
            <p>
              In 2024, Dr. Plummer decided to open his own practice to better serve his patients, offering an unmatched level of personalized care.
            </p>
            <p>
              He was born and raised in San Antonio and attended Baylor University, where he met his wife, Heather. He then graduated Summa Cum Laude from the University of Texas Southwestern Medical School in Dallas. After completing his ophthalmology residency at the University of Missouri, he and his wife knew they were destined to return to the hill country, where they are proud to be raising their three sons: Lee, Luke, and Jack.
            </p>
          </div>

          {/* Credentials grid */}
          <div className="grid sm:grid-cols-2 gap-6 mt-14">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
              <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-3">Education</p>
              <ul className="space-y-2 text-[var(--color-ink)]">
                <li>Baylor University</li>
                <li>UT Southwestern Medical School (Summa Cum Laude)</li>
                <li>Ophthalmology Residency, University of Missouri</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
              <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-3">Recognition</p>
              <ul className="space-y-2 text-[var(--color-ink)]">
                <li>&ldquo;Best of Hays County&rdquo; — Eye Care, 2023</li>
                <li>Board Certified — American Academy of Ophthalmology</li>
                <li>Member, American Society of Cataract and Refractive Surgery</li>
              </ul>
            </div>
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
