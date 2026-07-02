import type { Metadata } from 'next'
import Image from 'next/image'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata: Metadata = {
  title: 'Astigmatism Treatment in Kyle, TX | Spark Eye Care',
  description: 'Expert astigmatism treatment in Kyle. Board-certified optometrists providing comprehensive vision correction including glasses, contacts, and advanced options. Schedule your eye exam today.',
  keywords: 'astigmatism treatment Kyle, astigmatism correction Kyle TX, eye doctor Kyle, vision correction Kyle, optometrist Kyle TX',
  openGraph: {
    title: 'Astigmatism Treatment in Kyle, TX | Spark Eye Care',
    description: 'Expert astigmatism treatment in Kyle. Comprehensive vision correction solutions for clearer, sharper vision.',
    url: 'https://sparkeyetx.com/conditions/astigmatism',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AstigmatismPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Astigmatism</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Astigmatism Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
            Astigmatism affects how clearly you see the world, causing blurred or distorted vision at all distances. At Spark Eye Care, we provide comprehensive astigmatism correction solutions tailored to your lifestyle, from precision eyeglasses and specialty contact lenses to advanced treatment options that restore crystal-clear vision.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/astigmatism.jpg"
                alt="Astigmatism vision chart testing"
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

      {/* Featured video */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-3xl md:text-4xl mb-3 text-[var(--color-ink)] text-center">
            Watch: What is Astigmatism?
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
            Dr. Plummer explains astigmatism and the correction options available.
          </p>
          <YouTubeEmbed videoId="hKHUnVW9nRY" title="What is Astigmatism?" />
        </div>
      </section>


      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Astigmatism
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Astigmatism is one of the most common refractive errors affecting vision, occurring when the cornea or lens of your eye has an irregular shape. Instead of being perfectly round like a basketball, an astigmatic eye is shaped more like a football, with one meridian being significantly more curved than the perpendicular meridian. This irregular curvature causes light entering the eye to focus on multiple points rather than a single point on the retina, resulting in blurred or distorted vision at all distances. Astigmatism affects approximately one in three people in the United States, and it can occur alone or in combination with nearsightedness or farsightedness. The condition can range from mild to severe, and even slight amounts of astigmatism can cause eyestrain, headaches, and difficulty with tasks requiring visual clarity such as reading, driving at night, or using digital devices for extended periods.
            </p>
            <p>
              The causes of astigmatism are multifaceted and can be present from birth or develop over time. Hereditary factors play a significant role, as astigmatism tends to run in families and is often present from early childhood. The condition can also develop following an eye injury, certain eye diseases, or after eye surgery. Keratoconus, a progressive eye disease that causes the cornea to thin and bulge into a cone shape, is a more serious form of irregular astigmatism. Risk factors include family history of astigmatism or other refractive errors, premature birth, certain ethnicities that show higher prevalence rates, and activities or conditions that may affect corneal shape over time. Unlike the myth that reading in poor light or sitting too close to the television causes astigmatism, the condition is primarily structural and related to the physical shape of the eye itself. Understanding that astigmatism is a measurable, treatable optical imperfection rather than an eye disease helps patients approach correction with confidence.
            </p>
            <p>
              Professional diagnosis and treatment of astigmatism are essential for maintaining optimal visual function and quality of life. Many people with mild astigmatism may not realize they have the condition, attributing their visual difficulties to normal aging or eye fatigue. However, uncorrected astigmatism forces your eyes to work harder to achieve clear focus, leading to chronic eyestrain, persistent headaches, squinting, and difficulty with night vision. In children, uncorrected astigmatism can interfere with learning and development, potentially leading to amblyopia (lazy eye) if left untreated during critical developmental years. At Spark Eye Care in Kyle, our comprehensive eye examinations include precise measurements of corneal curvature and refractive error using advanced diagnostic technology. We don't simply provide a prescription—we take the time to understand how your astigmatism affects your daily life, work requirements, and visual goals. With modern correction options ranging from traditional eyeglasses and soft toric contact lenses to specialized rigid gas permeable lenses and surgical referrals when appropriate, we create personalized treatment plans that deliver the sharp, comfortable vision you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Astigmatism
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Visual Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blurred Vision at All Distances</p>
                    <p className="text-[var(--color-muted)]">Objects appear unclear or out of focus whether near or far, unlike simple nearsightedness or farsightedness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Distorted or Wavy Vision</p>
                    <p className="text-[var(--color-muted)]">Straight lines appear curved or bent, and objects may look stretched or tilted in certain directions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Seeing at Night</p>
                    <p className="text-[var(--color-muted)]">Night driving becomes challenging due to halos, starbursts, or glare around lights and headlights.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Double Vision in One Eye</p>
                    <p className="text-[var(--color-muted)]">Seeing two overlapping images when looking with just one eye, caused by light focusing at multiple points.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Reading Small Print</p>
                    <p className="text-[var(--color-muted)]">Letters appear blurry or run together, making reading exhausting and requiring extra concentration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Poor Depth Perception</p>
                    <p className="text-[var(--color-muted)]">Difficulty judging distances accurately, which can affect sports performance and daily activities like parking.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Ghosting or Shadowing</p>
                    <p className="text-[var(--color-muted)]">Seeing a faint duplicate image slightly offset from the main image, particularly noticeable with high-contrast objects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Physical & Behavioral Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frequent Headaches</p>
                    <p className="text-[var(--color-muted)]">Persistent headaches, especially after reading or computer work, caused by eye muscles straining to compensate for unclear focus.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eye Strain and Fatigue</p>
                    <p className="text-[var(--color-muted)]">Eyes feel tired, heavy, or uncomfortable, particularly after visual tasks that require sustained focus.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frequent Squinting</p>
                    <p className="text-[var(--color-muted)]">Constantly narrowing the eyes in an attempt to improve focus and clarity, which can lead to facial tension.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Tilting Head to See Better</p>
                    <p className="text-[var(--color-muted)]">Unconsciously tilting or turning your head to find the clearest viewing angle, compensating for irregular corneal shape.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty with Prolonged Reading</p>
                    <p className="text-[var(--color-muted)]">Avoiding reading or experiencing discomfort after short periods, leading to reduced productivity or academic challenges.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Sensitivity to Light</p>
                    <p className="text-[var(--color-muted)]">Increased discomfort in bright conditions or when exposed to glare, making outdoor activities less enjoyable.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Rubbing Eyes Frequently</p>
                    <p className="text-[var(--color-muted)]">Habitual eye rubbing in an attempt to clear vision or relieve discomfort, which can potentially worsen the condition.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Problems with Digital Screens</p>
                    <p className="text-[var(--color-muted)]">Increased discomfort when using computers, tablets, or smartphones, with symptoms worsening as screen time increases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, preventing years of unnecessary discomfort and visual compromise while protecting your eye health and quality of life.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Astigmatism
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with advanced diagnostic testing including corneal topography to map the precise curvature of your eye, autorefraction to measure refractive error, and detailed visual acuity testing at multiple distances. We use cutting-edge technology to measure both the magnitude and axis of your astigmatism, ensuring accurate diagnosis. Our doctors also evaluate your overall eye health to rule out conditions like keratoconus and assess how astigmatism affects your daily visual function and lifestyle needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your unique prescription and lifestyle, we design a customized correction strategy that may include precision eyeglasses with cylindrical lenses to counteract corneal irregularity, soft toric contact lenses that stay properly oriented on your eye, or rigid gas permeable lenses for more complex astigmatism. We discuss the benefits and considerations of each option, taking into account your occupation, hobbies, aesthetic preferences, and budget. For patients interested in permanent correction, we provide education about refractive surgery options and coordinate referrals to trusted surgical partners when appropriate.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Ongoing Care & Refinement</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Successful astigmatism management involves regular follow-up to ensure optimal vision and comfort. We schedule follow-up appointments to assess your adaptation to new correction, make adjustments as needed, and monitor for any changes in your prescription or eye health. Annual comprehensive eye exams track the stability of your astigmatism and update your prescription as your eyes change over time. For contact lens wearers, we provide thorough training on insertion, removal, and care, along with monitoring for proper fit and corneal health to prevent complications and ensure long-term wearing success.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              At Spark Eye Care, we utilize evidence-based correction methods proven effective for astigmatism management. Eyeglasses with cylindrical lenses remain the simplest and most reliable option, particularly for patients with higher degrees of astigmatism or those who prefer not to wear contact lenses. Toric soft contact lenses feature different powers in different meridians and incorporate stabilization methods to maintain proper orientation, providing excellent vision for mild to moderate astigmatism. For irregular astigmatism or higher prescriptions, rigid gas permeable (RGP) lenses or specialty scleral lenses create a new refractive surface over the cornea, often providing superior visual quality. We stay current with the latest lens technologies and fitting techniques, offering premium options such as daily disposable toric lenses for convenience and eye health. When appropriate, we discuss surgical options including LASIK, PRK, and astigmatic keratotomy, providing honest guidance about candidacy, realistic expectations, and potential risks to help you make informed decisions about your vision care.
          </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Astigmatism Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our optometrists hold advanced certifications and extensive training in refractive error management, bringing years of specialized experience in fitting complex prescriptions and utilizing the latest diagnostic technology for precise astigmatism correction.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We take time to understand your unique visual needs, lifestyle demands, and aesthetic preferences, crafting individualized treatment plans rather than one-size-fits-all solutions. Your comfort and satisfaction drive every recommendation we make.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Convenient Access Options</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                While comprehensive eye exams require in-person visits for accurate measurements, we offer telehealth consultations for follow-up care, prescription questions, and troubleshooting contact lens concerns, making quality eye care more accessible to busy Kyle families.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Vision Solutions</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                From basic prescriptions to complex specialty lens fittings, we offer the full spectrum of astigmatism correction options. Our extensive experience with challenging cases means we can help even when other approaches have fallen short.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination typically takes 60-90 minutes and includes detailed medical history, visual acuity testing, refraction to determine your precise prescription, corneal topography or keratometry to map corneal shape, and dilated examination of eye health. We discuss your symptoms, visual goals, and lifestyle needs to understand how astigmatism affects your daily life. You'll leave with a clear understanding of your diagnosis, the degree and type of astigmatism you have, and a detailed explanation of recommended correction options with associated costs and timelines.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once you've selected your preferred correction method, we order your custom eyeglasses or contact lenses. Eyeglasses typically arrive within 7-14 days, while specialty contact lenses may take 2-3 weeks for custom parameters. For contact lens wearers, we schedule a fitting appointment where you'll learn proper insertion, removal, and care techniques, and we assess lens fit and vision quality. Most patients notice immediate improvement in visual clarity, though there may be a brief adaptation period of a few days to a week as your brain adjusts to corrected vision, particularly if this is your first time wearing astigmatic correction.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We schedule follow-up appointments to ensure your correction is providing optimal vision and comfort. For eyeglass wearers, we verify proper fit and make any necessary adjustments to frames. Contact lens patients return for evaluation of lens fit, corneal health, and wearing comfort, with modifications made if needed. This is when we address any concerns about vision quality, adaptation challenges, or lifestyle issues with your current correction. Most patients are fully adapted and satisfied by this point, though we remain available for adjustments and will modify the treatment plan if expectations aren't being met.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Astigmatism is typically stable in adulthood, though prescriptions can change gradually over time due to aging, eye health changes, or progression of conditions like keratoconus. We recommend annual comprehensive eye exams to monitor your eye health, update prescriptions as needed, and ensure your correction continues to meet your visual demands. Contact lens wearers benefit from annual evaluations to assess corneal health and upgrade to newer lens technologies as they become available. With proper care and regular monitoring, most patients enjoy clear, comfortable vision indefinitely. We're here as your long-term partner in maintaining optimal eye health and visual function throughout your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Astigmatism
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                How long does astigmatism treatment take to work?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Astigmatism correction with eyeglasses or contact lenses provides immediate improvement in visual clarity, though some patients experience a brief adaptation period of 3-7 days as their brain adjusts to the corrected image. Most people notice significantly clearer vision within the first few hours of wearing their new prescription. Contact lens wearers may need a slightly longer adaptation period, particularly with toric lenses, as they learn comfortable insertion and removal techniques. If you're considering refractive surgery, visual recovery varies by procedure type—LASIK patients often see clearly within 24 hours, while PRK may require several days to weeks for vision to stabilize. The key is that astigmatism correction is not a gradual treatment process; once proper correction is in place, you should experience clear vision immediately, with only minor adaptation needed.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Is medication required for astigmatism treatment?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>No, astigmatism is a structural optical issue caused by irregular corneal or lens shape, not a medical condition that requires medication. Treatment involves optical correction through eyeglasses, contact lenses, or refractive surgery to compensate for the irregular curvature and focus light properly on the retina. However, if you experience eye discomfort, dryness, or irritation while adapting to new correction—particularly with contact lenses—we may recommend lubricating eye drops or artificial tears to improve comfort. If astigmatism is accompanied by other eye conditions such as dry eye syndrome, allergic conjunctivitis, or inflammation, we may prescribe medications to address those specific issues. Some patients with progressive conditions like keratoconus may use specialized treatments including corneal cross-linking or custom contact lenses, but routine astigmatism correction requires no medication whatsoever.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Does insurance cover astigmatism treatment?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Most vision insurance plans cover comprehensive eye examinations that diagnose astigmatism, typically with an annual benefit. Many vision plans also provide allowances toward eyeglasses or contact lenses, though coverage varies significantly by plan. Standard single-vision or progressive lenses with astigmatic correction are usually covered at least partially, while premium lens options (anti-reflective coatings, high-index materials, photochromic lenses) may involve additional out-of-pocket costs. Contact lens coverage depends on your specific plan—some offer an allowance toward annual supply costs, while others provide limited coverage for specialty lenses. Medical insurance (as opposed to vision insurance) typically does not cover routine refractive correction but may cover treatment if astigmatism is secondary to a medical eye condition or injury. Refractive surgery like LASIK is generally considered elective and not covered by insurance, though some plans offer discounts through partnered providers. Our staff verifies your insurance benefits before your appointment and provides detailed cost estimates, offering flexible payment options and financing plans to make quality vision care accessible regardless of insurance coverage.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                What if my current glasses or contacts aren't working well?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>If you're experiencing unclear vision, discomfort, or dissatisfaction with your current correction, several factors could be responsible, and we're here to identify and resolve the issue. Your prescription may have changed—astigmatism can increase, decrease, or shift axis over time, particularly during periods of hormonal change, illness, or as part of natural aging. Poorly fitting eyeglass frames can cause lenses to sit at incorrect angles, reducing optical effectiveness. Contact lenses may be rotating on your eye if they're toric lenses, compromising vision quality, or they may have deposits, damage, or be the wrong parameters for your eye shape. In some cases, astigmatism may be more irregular than initially measured, requiring specialty contact lenses like rigid gas permeable or scleral lenses for optimal correction. We conduct thorough evaluations to determine the cause of inadequate correction and make appropriate adjustments—whether that means updating your prescription, refitting your contact lenses, adjusting your frames, or exploring alternative correction methods. We stand behind our work and want you to see clearly and comfortably, so never hesitate to reach out if your current correction isn't meeting your expectations.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Can astigmatism be managed through telehealth?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Initial diagnosis and correction of astigmatism requires an in-person comprehensive eye examination, as precise measurements of corneal curvature, refractive error, and eye health cannot be accurately obtained remotely. However, once you have an established diagnosis and prescription, telehealth can be valuable for certain aspects of ongoing care. We offer virtual consultations for troubleshooting contact lens wearing problems, discussing symptoms or concerns about your current correction, providing guidance on adapting to new eyeglasses or contact lenses, addressing questions about lens care or replacement schedules, and determining whether symptoms warrant an in-person examination. Telehealth is particularly useful for contact lens patients experiencing minor comfort issues or those considering switching to different lens types. What telehealth cannot replace is the hands-on examination needed for prescription changes, contact lens fittings, assessment of eye health, or diagnosis of new symptoms. We view telehealth as a convenient complement to in-person care, making our expertise more accessible while ensuring you receive the appropriate level of care for your specific needs. If during a telehealth visit we determine that an in-person examination is necessary, we prioritize scheduling to address your concerns promptly.</p>
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Will I need to wear glasses or contacts forever?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Astigmatism is typically a permanent structural characteristic of your eye's shape that doesn't resolve on its own. Without correction, astigmatism will continue to cause blurred or distorted vision throughout your life. However, you do have options beyond wearing glasses or contact lenses indefinitely. Refractive surgery, including LASIK, PRK, or SMILE, can permanently reshape the cornea to correct astigmatism, potentially eliminating or significantly reducing your dependence on corrective lenses. These procedures are highly successful for appropriate candidates, though not everyone qualifies based on corneal thickness, prescription stability, eye health, and other factors. Some people choose to wear correction only for specific activities like driving or computer work if their astigmatism is mild. Additionally, premium intraocular lenses with toric correction are available during cataract surgery later in life, potentially correcting astigmatism at that time. The choice to pursue surgical correction versus continuing with glasses or contacts is highly personal, involving considerations of cost, lifestyle, comfort with surgical procedures, and visual demands. We provide honest, comprehensive guidance about all options, helping you make informed decisions about the best long-term solution for your unique situation and visual goals.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/myopia-nearsightedness" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Myopia (Nearsightedness)</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Difficulty seeing distant objects clearly, often occurring alongside astigmatism and requiring comprehensive refractive correction for optimal vision.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">Learn more →</span>
            </a>
            <a href="/conditions/hyperopia-farsightedness" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Hyperopia (Farsightedness)</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Difficulty focusing on near objects, frequently combined with astigmatism, causing eyestrain and blurred vision at multiple distances.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">Learn more →</span>
            </a>
            <a href="/conditions/presbyopia" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Presbyopia</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Age-related difficulty focusing on close objects that often develops in patients who already have astigmatism, requiring multifocal correction solutions.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Astigmatism Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face astigmatism alone. Our team is ready to help you achieve the clear, comfortable vision you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors">
              Schedule Your Eye Exam
            </a>
            <a href="/conditions" className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors">
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}