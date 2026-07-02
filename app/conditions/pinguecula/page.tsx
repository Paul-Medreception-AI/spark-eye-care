import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Pinguecula Treatment in Kyle | Spark Eye Care',
  description: 'Expert pinguecula treatment in Kyle. Board-certified eye care specialists offering comprehensive evaluation and evidence-based treatment for pinguecula and related eye conditions.',
  keywords: 'pinguecula treatment Kyle, pinguecula removal, eye growth treatment, conjunctival lesion, eye specialist Kyle',
  openGraph: {
    title: 'Pinguecula Treatment in Kyle | Spark Eye Care',
    description: 'Expert pinguecula treatment in Kyle. Comprehensive evaluation and evidence-based care for pinguecula and related eye conditions.',
    url: 'https://sparkeyetx.com/conditions/pinguecula',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function PingueculaPage() {
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
            <span>Pinguecula</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Pinguecula Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Pinguecula is a common, benign growth on the conjunctiva that can cause discomfort, redness, and cosmetic concerns. At Spark Eye Care, we provide expert evaluation and personalized treatment to relieve symptoms and protect your eye health.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/pinguecula.jpg"
                alt="Conjunctival pinguecula close-up"
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

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)]">
            Understanding Pinguecula
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              A pinguecula is a yellowish, raised bump that forms on the conjunctiva—the clear membrane covering the white part of your eye. This benign growth typically appears on the nasal side of the eye, near the cornea, though it can develop on either side. Pingueculae are extremely common, especially in adults who have spent significant time outdoors, and they are composed of protein, fat, and calcium deposits. While pingueculae are non-cancerous and generally harmless, they can become inflamed (a condition called pingueculitis), causing discomfort, irritation, and noticeable redness. For many patients in Kyle and surrounding areas, where outdoor activities are a way of life, understanding and managing pinguecula is essential for maintaining comfortable vision and eye health.
            </p>
            <p>
              The primary causes of pinguecula development include chronic ultraviolet (UV) exposure from sunlight, environmental irritants such as wind, dust, and pollen, and chronic eye dryness. People who work outdoors, spend extensive time in bright sunlight without proper eye protection, or live in sunny climates like Central Texas face higher risk of developing this condition. Additional risk factors include advancing age, as pingueculae become more prevalent with time, and habitual squinting or eye strain. Welders, farmers, construction workers, and outdoor enthusiasts are particularly susceptible. The growth process is gradual, often taking years to develop, and while pingueculae do not grow onto the cornea (unlike pterygia), they can enlarge over time and become more symptomatic.
            </p>
            <p>
              Professional evaluation and treatment are important for several reasons. First, while pingueculae themselves are benign, they can occasionally be confused with more serious conditions, making proper diagnosis essential. Second, when pingueculae become inflamed or irritated, they can significantly impact quality of life, causing persistent discomfort, foreign body sensation, and cosmetic concerns that affect self-confidence. Third, appropriate treatment can prevent progression and reduce the likelihood of developing related complications such as pterygium, a more serious growth that can affect vision. At Spark Eye Care, our experienced team provides comprehensive assessment, evidence-based treatment recommendations, and preventive strategies tailored to your lifestyle and specific needs. Whether your pinguecula is causing symptoms or you're concerned about its appearance, professional care ensures optimal outcomes and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]">
            Signs & Symptoms of Pinguecula
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Visual and Appearance Symptoms */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Visual & Appearance Changes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Yellowish Bump on Eye White</p>
                    <p className="text-[var(--color-muted)]">A visible raised, yellowish or whitish growth on the conjunctiva, typically near the cornea on the nasal side of the eye.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eye Redness</p>
                    <p className="text-[var(--color-muted)]">Persistent or intermittent redness around the pinguecula, especially when inflamed or irritated by environmental factors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Cosmetic Concerns</p>
                    <p className="text-[var(--color-muted)]">Self-consciousness about the visible appearance of the growth, particularly in social or professional situations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Gradual Growth</p>
                    <p className="text-[var(--color-muted)]">Slow enlargement of the bump over months or years, sometimes becoming more noticeable with age or sun exposure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Visible Blood Vessels</p>
                    <p className="text-[var(--color-muted)]">Prominent or dilated blood vessels within or around the pinguecula, particularly when the area becomes inflamed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blurred Vision (Rare)</p>
                    <p className="text-[var(--color-muted)]">Occasional vision disturbances if the pinguecula becomes significantly elevated or affects tear film distribution across the cornea.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Uneven Eye Appearance</p>
                    <p className="text-[var(--color-muted)]">Asymmetry between eyes if pinguecula develops more prominently on one side, causing noticeable differences in appearance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Discomfort Symptoms */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Physical Discomfort & Irritation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Foreign Body Sensation</p>
                    <p className="text-[var(--color-muted)]">Persistent feeling that something is in your eye, like a grain of sand or eyelash, especially when the pinguecula becomes inflamed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Eye Dryness and Irritation</p>
                    <p className="text-[var(--color-muted)]">Chronic dry, gritty feeling in the affected eye due to disrupted tear film distribution caused by the raised growth.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Burning or Stinging</p>
                    <p className="text-[var(--color-muted)]">Uncomfortable burning sensation, particularly after sun exposure, wind exposure, or prolonged screen time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Increased Tearing</p>
                    <p className="text-[var(--color-muted)]">Excessive watering of the eye as your body attempts to compensate for irritation or dryness caused by the pinguecula.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Itching Around the Eye</p>
                    <p className="text-[var(--color-muted)]">Mild to moderate itching near the growth site, often worsening in dry, dusty, or windy conditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Swelling and Inflammation</p>
                    <p className="text-[var(--color-muted)]">Episodes of pingueculitis where the growth becomes red, swollen, and tender, requiring medical attention.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Contact Lens Discomfort</p>
                    <p className="text-[var(--color-muted)]">Difficulty wearing contact lenses comfortably due to the raised growth interfering with lens positioning or causing irritation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes, preventing progression and providing relief from discomfort. Our experienced team at Spark Eye Care can evaluate your symptoms and create a personalized treatment plan.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-16 text-center text-[var(--color-ink)]">
            How We Treat Pinguecula
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination using advanced diagnostic equipment to evaluate the pinguecula's size, location, and level of inflammation. We assess your tear film quality, UV exposure history, and any contributing factors like chronic dryness or environmental irritants. Our team takes time to understand your symptoms, lifestyle, and concerns to develop a complete picture of your eye health and determine the most appropriate treatment approach.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment, we create a customized treatment strategy tailored to your specific needs. For mild cases, this may include lubricating eye drops, anti-inflammatory medications, and preventive measures. For symptomatic or cosmetically concerning pingueculae, we discuss all options including conservative management and surgical removal if appropriate. We educate you about UV protection, lifestyle modifications, and ongoing care strategies to prevent progression and optimize your eye health long-term.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Care & Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Pinguecula management is an ongoing process requiring regular monitoring to ensure optimal results and prevent complications. We schedule follow-up appointments to assess treatment effectiveness, monitor for growth or inflammation, and adjust your care plan as needed. Our team provides continuous support, answering questions and addressing concerns as they arise. We also educate you about long-term prevention strategies, including proper UV protection and eye care habits, to maintain your eye health and comfort for years to come.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              At Spark Eye Care, our treatment approach for pinguecula is grounded in evidence-based medicine and tailored to each patient's unique needs. For symptomatic pingueculae, we typically begin with conservative management including preservative-free artificial tears to improve lubrication, anti-inflammatory eye drops or short courses of topical corticosteroids to reduce inflammation during acute flare-ups, and comprehensive patient education about UV protection using quality sunglasses with full UV blocking capability. We emphasize lifestyle modifications such as using wraparound sunglasses outdoors, staying hydrated, and managing environmental exposures to wind and dust. For patients with chronic dry eye contributing to symptoms, we may recommend punctal plugs or prescription medications like cyclosporine to improve tear production. In cases where pingueculae cause significant cosmetic concerns, recurrent inflammation despite medical management, or interfere with contact lens wear, we discuss surgical excision options and provide appropriate referrals to experienced ophthalmologic surgeons. Our goal is always to provide the least invasive effective treatment while ensuring your long-term eye health and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]">
            Why Choose Spark Eye Care for Pinguecula Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our team includes board-certified eye care specialists with extensive training in diagnosing and treating conjunctival conditions including pinguecula and pterygium.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Approach</h3>
              <p className="text-[var(--color-muted)]">
                We understand that every patient's pinguecula is different. Our treatment plans are customized based on your symptoms, lifestyle, and individual goals for eye health and comfort.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                For follow-up visits and consultation, we offer convenient telehealth appointments, making it easier to receive expert care without disrupting your busy schedule.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Experienced with This Condition</h3>
              <p className="text-[var(--color-muted)]">
                We have extensive experience treating pinguecula in the Kyle community, understanding the unique environmental factors that contribute to this condition in Central Texas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-8 text-center text-[var(--color-ink)]">
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial appointment includes a comprehensive eye examination with detailed assessment of your pinguecula using specialized imaging equipment. We'll discuss your symptoms, medical history, environmental exposures, and any concerns you have. You'll receive a clear diagnosis, education about the condition, and a detailed treatment plan. Most patients leave with prescriptions for lubricating drops or anti-inflammatory medications, along with specific recommendations for UV protection and lifestyle modifications. This visit typically takes 45-60 minutes and establishes the foundation for your ongoing care.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During this phase, you'll implement your treatment plan using prescribed medications and following recommended lifestyle changes. For most patients with uncomplicated pinguecula, conservative treatment with artificial tears and UV protection provides significant symptom relief within 2-4 weeks. If inflammation is present (pingueculitis), anti-inflammatory drops typically reduce redness and discomfort within 1-2 weeks. You may notice gradual improvement in foreign body sensation, dryness, and eye redness. We're available for questions or concerns during this period and may schedule a brief check-in call to assess your progress.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At your follow-up appointment, we reassess your pinguecula to evaluate treatment effectiveness and monitor for any changes in size or appearance. Most patients experience significant improvement in symptoms by this point, with reduced irritation and better eye comfort. We'll discuss your experience with treatment, address any ongoing concerns, and adjust your care plan if needed. For patients considering surgical removal due to cosmetic concerns or persistent symptoms despite conservative treatment, this is when we typically have detailed discussions about surgical options, benefits, risks, and recovery expectations. We'll also reinforce prevention strategies to protect your eyes long-term.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-light">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Pinguecula is a chronic condition that requires ongoing attention to prevent progression and maintain comfort. We recommend annual eye examinations to monitor your pinguecula and overall eye health, with more frequent visits if you experience symptom flare-ups. Long-term management focuses on consistent use of lubricating drops as needed, diligent UV protection with quality sunglasses, management of underlying dry eye if present, and prompt treatment of inflammation when it occurs. Many patients maintain excellent eye comfort and prevent progression with these simple measures. Our team remains your partner in eye health, providing guidance, support, and expert care whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]">
            Frequently Asked Questions About Pinguecula
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                How long does pinguecula treatment take?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                The timeline for pinguecula treatment varies depending on the severity of symptoms and the treatment approach. For mild, asymptomatic pingueculae, no active treatment may be needed beyond preventive measures and monitoring. If you're experiencing inflammation (pingueculitis), anti-inflammatory treatment typically provides relief within 1-2 weeks, with complete resolution in 2-4 weeks. Conservative management with lubricating drops and UV protection is ongoing and provides symptom control for most patients indefinitely. If surgical removal is chosen, the procedure itself takes about 20-30 minutes, with recovery lasting 2-4 weeks and final cosmetic results visible after 2-3 months. Most patients find that conservative treatment provides adequate long-term symptom control without the need for surgery.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Is medication always required for pinguecula?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Not necessarily. Many people with pinguecula require no medication at all if the growth is small and causes no symptoms. In these cases, we focus on prevention strategies like UV protection and regular monitoring. If you experience dryness or mild irritation, over-the-counter preservative-free artificial tears are often sufficient to manage symptoms. Prescription anti-inflammatory eye drops are typically reserved for episodes of acute inflammation (pingueculitis) when the growth becomes red, swollen, and painful. These medications provide rapid relief during flare-ups but aren't needed continuously. For patients with underlying chronic dry eye contributing to symptoms, prescription medications like cyclosporine may be recommended for long-term management. Our approach is to use the least medication necessary to keep you comfortable while preventing progression.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Does insurance cover pinguecula treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans cover evaluation and treatment of symptomatic pinguecula because it's a medical condition affecting eye health and comfort. Your comprehensive eye examination, diagnostic testing, and prescription medications for inflammation or dry eye are typically covered benefits subject to your copay, deductible, and coinsurance. Follow-up visits for monitoring and management are also usually covered. However, if you're seeking surgical removal purely for cosmetic reasons when the pinguecula is asymptomatic, insurance may not provide coverage, as this would be considered an elective cosmetic procedure. We recommend checking with your insurance provider about specific coverage details. Our staff is experienced in working with insurance companies and can help verify your benefits before treatment begins. We'll provide cost estimates and discuss payment options to ensure you can access the care you need.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Can pinguecula grow back after surgical removal?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, pingueculae can recur after surgical excision, though recurrence rates vary depending on surgical technique and post-operative care. Studies show recurrence rates ranging from 5-15% when modern surgical techniques are used. Risk factors for recurrence include continued UV exposure without proper eye protection, chronic eye dryness, ongoing environmental irritation, and inadequate post-operative healing. To minimize recurrence risk, surgeons often use tissue grafting techniques and may apply mitomycin-C during surgery to prevent regrowth. After surgery, diligent UV protection with quality sunglasses, consistent use of lubricating eye drops, and follow-up care are essential. It's important to note that because the underlying risk factors (sun exposure, aging, environmental factors) remain present, new pingueculae can also develop in different locations on the eye. This is why we emphasize comprehensive prevention strategies regardless of whether you choose conservative management or surgical treatment.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Will pinguecula affect my vision permanently?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                In the vast majority of cases, pinguecula does not affect vision permanently or significantly. Because pingueculae grow on the conjunctiva and do not extend onto the cornea (the clear front surface of your eye), they typically don't interfere with the optical pathway. Some patients may experience temporary blurred vision during episodes of inflammation due to excess tearing or changes in the tear film distribution across the cornea, but this resolves with treatment. Very rarely, if a pinguecula becomes extremely elevated, it may cause astigmatism by altering the tear film, but this is uncommon. The main concern is if a pinguecula transforms into or is accompanied by a pterygium—a related but more aggressive growth that does extend onto the cornea and can affect vision if it reaches the visual axis. This is why regular monitoring is important. With appropriate management and UV protection, your pinguecula is unlikely to cause any permanent vision problems.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Can I manage my pinguecula with telehealth appointments?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Telehealth can be an excellent option for certain aspects of pinguecula care, particularly for established patients. Your initial evaluation should be conducted in person so we can perform a comprehensive eye examination with specialized equipment to properly diagnose and assess your pinguecula. However, once we've established your diagnosis and treatment plan, telehealth visits can be very effective for follow-up consultations, discussing symptom changes, adjusting medications, reviewing treatment progress, and providing ongoing education and support. If you experience a flare-up of inflammation, we can often assess it via telehealth and prescribe appropriate treatment without requiring an office visit. Telehealth is especially convenient for busy patients in Kyle who may have difficulty scheduling in-person appointments. However, if your pinguecula shows significant changes, causes new symptoms, or requires detailed examination, we'll recommend an in-person visit. We're committed to providing flexible, convenient care that fits your lifestyle while ensuring you receive the thorough evaluation necessary for optimal eye health.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl font-light mb-8 text-center text-[var(--color-ink)]">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/pterygium" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Pterygium
              </h4>
              <p className="text-[var(--color-muted)] mb-3">
                A growth of fleshy tissue on the conjunctiva that can extend onto the cornea, potentially affecting vision if left untreated.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="/conditions/dry-eye-syndrome" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Dry Eye Syndrome
              </h4>
              <p className="text-[var(--color-muted)] mb-3">
                Chronic eye dryness and irritation that can worsen pinguecula symptoms and contribute to inflammation of the conjunctiva.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="/conditions/dry-eye-syndrome" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Conjunctivitis
              </h4>
              <p className="text-[var(--color-muted)] mb-3">
                Inflammation of the conjunctiva that can mimic or coexist with pingueculitis, causing redness and discomfort requiring treatment.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Pinguecula Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-95">
            You don't have to face pinguecula alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors inline-block">
              Schedule Your Consultation
            </a>
            <a href="/conditions" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-block">
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}