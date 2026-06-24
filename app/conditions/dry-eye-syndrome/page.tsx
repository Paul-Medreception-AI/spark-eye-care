import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dry Eye Syndrome Treatment in Kyle | Spark Eye Care',
  description: 'Expert dry eye syndrome treatment in Kyle. Board-certified care for chronic dry eyes, irritation, and discomfort. Telehealth available. Start your journey to relief today.',
  keywords: 'dry eye syndrome treatment Kyle, dry eye doctor Kyle, chronic dry eyes Kyle, eye irritation treatment, dry eye specialist Kyle',
  openGraph: {
    title: 'Dry Eye Syndrome Treatment in Kyle | Spark Eye Care',
    description: 'Expert dry eye syndrome treatment in Kyle. Board-certified care for chronic dry eyes, irritation, and discomfort.',
    url: 'https://www.sparkeyetx.com/conditions/dry-eye-syndrome',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function DryEyeSyndromePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Dry Eye Syndrome</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Dry Eye Syndrome Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Chronic dry eyes can significantly impact your daily comfort and quality of life. At Spark Eye Care, we provide comprehensive, evidence-based treatment for dry eye syndrome, helping you achieve lasting relief through personalized care tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Dry Eye Syndrome
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Dry eye syndrome, also known as keratoconjunctivitis sicca, is a chronic condition that occurs when your eyes don't produce enough tears or when the tears evaporate too quickly. This common disorder affects millions of Americans, with prevalence increasing with age and affecting up to 30% of people over 50. While it may seem like a minor inconvenience, dry eye syndrome can significantly impact your daily life, causing discomfort during reading, computer work, driving, and other routine activities. The condition can range from mild irritation to severe symptoms that interfere with your vision and overall eye health.
            </p>
            <p>
              Multiple factors contribute to the development of dry eye syndrome. Environmental conditions such as low humidity, wind, air conditioning, and prolonged screen time can exacerbate tear evaporation. Aging naturally reduces tear production, particularly in women experiencing hormonal changes during menopause. Certain medications including antihistamines, decongestants, blood pressure medications, and antidepressants can decrease tear production as a side effect. Medical conditions such as rheumatoid arthritis, Sjögren's syndrome, thyroid disorders, and diabetes increase the risk of developing dry eyes. Additionally, laser eye surgery, contact lens wear, and eyelid problems that prevent proper blinking can contribute to this condition. Understanding these risk factors is essential for developing an effective treatment strategy.
            </p>
            <p>
              Professional treatment for dry eye syndrome is crucial because untreated symptoms can lead to more serious complications over time. Chronic inflammation of the eye surface can damage the cornea, increase susceptibility to eye infections, and in severe cases, lead to corneal scarring that affects vision. Beyond physical complications, persistent dry eye symptoms significantly diminish quality of life, causing constant discomfort and limiting daily activities. At Spark Eye Care, we take a comprehensive approach to diagnosing the underlying causes of your dry eyes and developing a targeted treatment plan. Through advanced diagnostic testing and evidence-based therapies, we can help restore your eye comfort and protect your long-term eye health.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Dry Eye Syndrome
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Sensory Symptoms</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Burning or Stinging Sensation</strong>
                    <p className="text-[var(--color-muted)] mt-1">Persistent burning, stinging, or scratchy feeling in the eyes that worsens throughout the day.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Gritty or Sandy Feeling</strong>
                    <p className="text-[var(--color-muted)] mt-1">A sensation as if there's something in your eye, even when nothing is present.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Eye Redness</strong>
                    <p className="text-[var(--color-muted)] mt-1">Chronic redness and bloodshot appearance due to inflammation and irritation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Light Sensitivity</strong>
                    <p className="text-[var(--color-muted)] mt-1">Increased sensitivity to bright lights and difficulty tolerating sunlight or artificial lighting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Eye Pain or Soreness</strong>
                    <p className="text-[var(--color-muted)] mt-1">Discomfort ranging from mild soreness to significant pain, especially after prolonged visual tasks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Excessive Tearing</strong>
                    <p className="text-[var(--color-muted)] mt-1">Paradoxically, dry eyes often trigger excessive watering as a reflex response to irritation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Mucus Discharge</strong>
                    <p className="text-[var(--color-muted)] mt-1">Stringy mucus in or around the eyes, particularly upon waking.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Visual & Functional Impact</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Blurred Vision</strong>
                    <p className="text-[var(--color-muted)] mt-1">Fluctuating or persistent blurry vision that may temporarily improve with blinking.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty with Reading</strong>
                    <p className="text-[var(--color-muted)] mt-1">Increasing discomfort and eye fatigue during reading or other close-up tasks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Screen Time Intolerance</strong>
                    <p className="text-[var(--color-muted)] mt-1">Worsening symptoms during computer use, watching television, or using digital devices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Contact Lens Discomfort</strong>
                    <p className="text-[var(--color-muted)] mt-1">Difficulty wearing contact lenses or reduced wearing time due to discomfort.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Heavy or Tired Eyes</strong>
                    <p className="text-[var(--color-muted)] mt-1">A feeling of heaviness in the eyelids and general eye fatigue, especially later in the day.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Wind or Air Sensitivity</strong>
                    <p className="text-[var(--color-muted)] mt-1">Increased discomfort when exposed to wind, air conditioning, or fans.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty Driving at Night</strong>
                    <p className="text-[var(--color-muted)] mt-1">Increased difficulty with night driving due to glare and fluctuating vision quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes and can prevent progression to more severe symptoms and complications.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Dry Eye Syndrome
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough evaluation including tear production testing, tear quality analysis, and examination of your eyelids and corneal surface. We assess environmental factors, medication history, and underlying health conditions that may contribute to your symptoms. Advanced diagnostic tools help us identify the specific type and severity of your dry eye condition.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your unique diagnosis, we develop a customized treatment strategy that may include prescription medications, specialized eye drops, lifestyle modifications, and in-office procedures. We consider your daily routine, visual demands, and treatment preferences to create a plan that fits seamlessly into your life. Your treatment plan evolves as we monitor your progress and response.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Dry eye syndrome requires consistent management for optimal results. We schedule regular follow-up appointments to assess your progress, adjust treatments as needed, and ensure sustained improvement. You'll have continuous access to our team for questions or concerns between visits. Our goal is not just symptom relief but long-term eye health and comfort maintenance.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              Our evidence-based treatment approach incorporates the latest advances in dry eye management. Depending on your specific diagnosis, we may recommend artificial tears and lubricating eye drops to supplement natural tear production, prescription anti-inflammatory medications such as cyclosporine or lifitegrast to reduce ocular surface inflammation, omega-3 fatty acid supplements to improve tear quality, warm compresses and eyelid hygiene to address meibomian gland dysfunction, punctal plugs to retain tears on the eye surface, or in-office procedures like intense pulsed light therapy or meibomian gland expression. We also provide guidance on environmental modifications, proper blinking techniques during screen time, and management of contributing factors such as medication side effects or underlying autoimmune conditions. Every treatment recommendation is backed by clinical research and tailored to your individual needs and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Dry Eye Syndrome Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our team brings specialized training and board certification in managing dry eye syndrome and other ocular surface disorders. We stay current with the latest research and treatment innovations to provide you with the most effective care available.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Personalized Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient's dry eye experience is unique. Your treatment plan is customized based on your specific symptoms, underlying causes, lifestyle factors, and treatment goals, ensuring the most effective path to relief.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Telehealth Available</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer convenient telehealth appointments for follow-up visits, treatment adjustments, and ongoing management consultations. Access expert care from the comfort of your home, making it easier to maintain consistent treatment.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-3">Proven Track Record</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice has successfully helped countless patients in the Kyle area achieve lasting relief from dry eye symptoms. We combine clinical expertise with compassionate care, building long-term relationships focused on your ocular health and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-5xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-2">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive evaluation includes a detailed medical history review, symptom assessment, and diagnostic testing to measure tear production, tear quality, and ocular surface health. We'll discuss your daily activities, environmental factors, and any medications that may contribute to your symptoms. By the end of this visit, you'll have a clear diagnosis and understand the underlying causes of your dry eye syndrome. We'll present your personalized treatment plan with specific recommendations and realistic expectations for improvement.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-5xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-2">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll begin your prescribed treatment regimen, which may include prescription eye drops, over-the-counter lubricants, warm compress therapy, dietary supplements, or lifestyle modifications. During this initial phase, your eyes will start adjusting to the treatment, and you may notice gradual improvement in symptoms. It's important to follow your treatment plan consistently, even if you don't see immediate dramatic changes. Some treatments, particularly anti-inflammatory medications, require several weeks to achieve their full effect. We remain available to address any questions or concerns as you adjust to your new routine.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-5xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-2">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We'll schedule a follow-up appointment to assess your response to treatment and measure improvements in tear production and ocular surface health. Most patients experience significant symptom relief by this point, though the timeline varies based on severity and individual factors. If needed, we'll adjust your treatment plan—this might involve changing medications, adding new therapies, or considering in-office procedures for more resistant cases. This checkpoint ensures we're on the right track and allows us to optimize your treatment for maximum benefit.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-5xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-2">Long-Term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Dry eye syndrome is typically a chronic condition requiring ongoing management to maintain comfort and prevent symptom recurrence. Once we've achieved optimal control, we'll establish a maintenance plan that may include continued use of certain treatments at reduced frequency, periodic office visits to monitor your ocular surface health, and strategies to manage symptom flares related to seasonal changes or environmental factors. Many patients can reduce treatment intensity over time while maintaining excellent results. Our goal is to provide you with the tools and support needed for long-term eye comfort and health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Dry Eye Syndrome
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-dark)]">
                How long does dry eye syndrome treatment take to work?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The timeline for improvement varies depending on the severity of your condition and the treatment approach. Some patients notice relief within days of starting lubricating eye drops, while prescription anti-inflammatory medications typically require 4-6 weeks to achieve full effectiveness. More severe cases or those involving meibomian gland dysfunction may take 2-3 months of consistent treatment to see significant improvement. In-office procedures often provide more rapid relief. Most patients experience meaningful symptom reduction within 4-8 weeks of beginning comprehensive treatment. Consistency with your treatment plan is crucial for achieving optimal results.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-dark)]">
                Is medication always required for dry eye syndrome?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Not all dry eye cases require prescription medication. Mild cases often respond well to over-the-counter artificial tears, lifestyle modifications, and environmental changes. However, moderate to severe dry eye syndrome, particularly when inflammation is present, typically benefits from prescription anti-inflammatory eye drops like cyclosporine or lifitegrast. These medications address the underlying inflammatory process rather than just temporarily lubricating the eye surface. During your evaluation, we'll assess whether your condition requires prescription treatment or if conservative measures will be sufficient. Our approach is always to use the most appropriate level of intervention for your specific situation.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-dark)]">
                Does insurance cover dry eye syndrome treatment?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans, including Medicare, cover evaluation and treatment for dry eye syndrome because it's recognized as a medical condition rather than a cosmetic concern. Diagnostic testing, office visits, and many prescription medications are typically covered, though coverage levels vary by plan. Some advanced in-office procedures may have limited coverage or require prior authorization. Over-the-counter artificial tears and nutritional supplements are generally not covered by insurance. We recommend contacting your insurance provider to understand your specific benefits, and our staff is available to help verify coverage and answer billing questions before treatment begins.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-dark)]">
                What if my dry eye treatment isn't working?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If you're not experiencing adequate improvement with your current treatment, we have multiple options to enhance your care. First, we'll reassess your diagnosis to ensure we're addressing all contributing factors—sometimes additional conditions like blepharitis or meibomian gland dysfunction need more targeted treatment. We can adjust medication dosages, add complementary therapies, or consider more advanced treatments such as punctal plugs, intense pulsed light therapy, or prescription medications with different mechanisms of action. Dry eye treatment often requires a multi-modal approach, and finding the right combination can take some adjustment. We're committed to working with you until we achieve meaningful symptom relief.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-dark)]">
                Can telehealth appointments work for dry eye syndrome treatment?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Telehealth can be effective for certain aspects of dry eye management, particularly follow-up visits, treatment adjustments, and symptom monitoring. After your initial in-person comprehensive evaluation and diagnosis, many subsequent appointments can be conducted virtually. During telehealth visits, we can review your symptom progress, adjust medications, provide education about home care techniques, and address any concerns. However, certain assessments requiring specialized equipment or procedures like punctal plug insertion will need in-person visits. We offer a hybrid approach that maximizes convenience through telehealth while ensuring you receive necessary hands-on care when required.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-dark)]">
                Will I need treatment for dry eye syndrome forever?
                <svg className="w-6 h-6 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The duration of treatment depends on the underlying causes of your dry eye syndrome. Some cases triggered by temporary factors like medication side effects or environmental conditions may resolve once the cause is addressed. However, dry eye syndrome is often a chronic condition requiring ongoing management to maintain comfort and prevent symptom recurrence. The good news is that once we achieve optimal control, many patients can reduce treatment intensity—using fewer medications, applying drops less frequently, or maintaining results with periodic in-office treatments. Think of it like managing other chronic conditions: consistent, appropriate care prevents problems and maintains quality of life. We'll work with you to find the minimal effective treatment level that keeps you comfortable.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/conditions/blepharitis" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Blepharitis</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">Chronic eyelid inflammation causing redness, irritation, and crusting at the lash line.</p>
            </Link>
            <Link href="/conditions/meibomian-gland-dysfunction" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Meibomian Gland Dysfunction</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">Blocked oil glands in the eyelids leading to poor tear quality and evaporative dry eye.</p>
            </Link>
            <Link href="/conditions/conjunctivitis" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h4 className="text-xl font-semibold text-[var(--color-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Conjunctivitis (Pink Eye)</h4>
              <p className="text-[var(--color-muted)] leading-relaxed">Inflammation of the conjunctiva causing redness, discharge, and eye discomfort.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-4">
            Get Help for Dry Eye Syndrome Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 font-light">
            You don't have to face dry eye syndrome alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}