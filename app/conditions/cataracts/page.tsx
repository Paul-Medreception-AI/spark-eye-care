import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cataracts Treatment in Kyle | Spark Eye Care',
  description: 'Expert cataracts treatment in Kyle. Board-certified eye care specialists offering comprehensive cataract evaluation, surgical referrals, and post-operative care. Schedule your consultation today.',
  keywords: 'cataracts treatment Kyle, cataract surgery Kyle, eye care Kyle, vision problems Kyle, cloudy vision treatment',
  openGraph: {
    title: 'Cataracts Treatment in Kyle | Spark Eye Care',
    description: 'Expert cataracts treatment in Kyle. Comprehensive evaluation and care for cloudy vision and cataracts.',
    url: 'https://www.sparkeyetx.com/conditions/cataracts',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function CataractsPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Cataracts</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{fontFamily: 'var(--font-cormorant)'}}>
            Cataracts Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Cataracts are one of the most common age-related vision conditions, causing cloudy or blurred vision that can significantly impact your daily life. At Spark Eye Care, we provide comprehensive cataract evaluations, surgical coordination, and exceptional post-operative care to help you regain clear, vibrant vision.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
            Understanding Cataracts
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              A cataract is a clouding of the eye's natural lens, which lies behind the iris and pupil. This lens works much like a camera lens, focusing light onto the retina at the back of the eye to produce clear images. When a cataract develops, the lens becomes progressively opaque, scattering light rather than focusing it properly. This results in blurred, dimmed, or distorted vision that can make everyday activities like reading, driving, and recognizing faces increasingly difficult. Cataracts are extremely common, affecting more than 24 million Americans over age 40, and nearly half of all people over 75 have cataracts. While cataracts typically develop slowly over years, they eventually interfere with quality of life and require professional intervention to restore vision.
            </p>
            <p>
              The primary cause of cataracts is aging, as proteins in the eye's lens naturally break down and clump together over time, creating cloudy areas. However, several other risk factors can accelerate cataract development, including prolonged ultraviolet light exposure, diabetes, smoking, excessive alcohol consumption, high blood pressure, previous eye injuries or inflammation, prolonged use of corticosteroid medications, and family history of cataracts. Certain types of cataracts can also develop in younger individuals due to genetic factors, eye trauma, or medical conditions. Understanding these risk factors is essential for early detection and prevention strategies, including protective eyewear, healthy lifestyle choices, and regular comprehensive eye examinations.
            </p>
            <p>
              Professional eye care is crucial for managing cataracts because they do not improve on their own and will continue to worsen over time, eventually leading to significant vision impairment or even blindness if left untreated. While early-stage cataracts may be managed with updated eyeglass prescriptions, better lighting, and anti-glare sunglasses, surgery becomes necessary when vision loss interferes with daily activities. Cataract surgery is one of the most common and successful surgical procedures performed in the United States, with a success rate exceeding 95%. At Spark Eye Care, we provide thorough cataract evaluations to determine the stage of your condition, coordinate with experienced ophthalmologic surgeons for optimal surgical outcomes, and deliver comprehensive pre-operative counseling and post-operative care to ensure your vision recovery is smooth and successful.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Signs & Symptoms of Cataracts
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-6 text-[var(--color-dark)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Visual & Functional Symptoms
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Cloudy or Blurred Vision</p>
                    <p className="text-[var(--color-muted)]">Vision becomes progressively hazy, similar to looking through a foggy or frosted window.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Increased Glare Sensitivity</p>
                    <p className="text-[var(--color-muted)]">Bright lights, oncoming headlights, or sunlight cause uncomfortable glare and halos around lights.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty with Night Vision</p>
                    <p className="text-[var(--color-muted)]">Driving at night becomes challenging due to reduced clarity and increased sensitivity to headlights.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Fading or Yellowing of Colors</p>
                    <p className="text-[var(--color-muted)]">Colors appear less vibrant, washed out, or take on a yellowish tint, making it difficult to distinguish hues.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Double Vision in One Eye</p>
                    <p className="text-[var(--color-muted)]">Monocular diplopia, where you see two images when looking with only one eye, can occur with cataracts.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frequent Prescription Changes</p>
                    <p className="text-[var(--color-muted)]">Your eyeglass or contact lens prescription changes frequently as the cataract progresses and alters your vision.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Need for Brighter Light</p>
                    <p className="text-[var(--color-muted)]">You require increasingly bright lighting for reading, working, or performing detailed tasks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6 text-[var(--color-dark)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Lifestyle & Behavioral Impact
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Reading</p>
                    <p className="text-[var(--color-muted)]">Reading books, newspapers, menus, or digital screens becomes increasingly challenging despite adequate lighting.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Reduced Independence</p>
                    <p className="text-[var(--color-muted)]">Vision difficulties limit your ability to drive, shop, cook, or manage daily tasks independently.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Trouble Recognizing Faces</p>
                    <p className="text-[var(--color-muted)]">You have difficulty identifying friends, family members, or acquaintances from a distance.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Increased Fall Risk</p>
                    <p className="text-[var(--color-muted)]">Poor vision from cataracts increases your risk of tripping, stumbling, or falling, especially on stairs.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Social Withdrawal</p>
                    <p className="text-[var(--color-muted)]">Vision problems may cause you to avoid social activities, hobbies, or gatherings you once enjoyed.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frustration with Daily Tasks</p>
                    <p className="text-[var(--color-muted)]">Simple activities like threading a needle, applying makeup, or reading labels become frustrating challenges.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Decreased Quality of Life</p>
                    <p className="text-[var(--color-muted)]">Overall satisfaction with life diminishes as vision impairment affects work, hobbies, and relationships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-center text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Cataract surgery can restore clear vision and dramatically improve your quality of life.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            How We Treat Cataracts
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination including visual acuity testing, slit-lamp examination to evaluate the lens opacity, dilated retinal exam, and measurement of intraocular pressure. We assess how cataracts are affecting your daily life and determine the optimal timing for surgical intervention based on your individual needs and lifestyle requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Surgical Coordination
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                When surgery is appropriate, we coordinate with trusted ophthalmologic surgeons who specialize in advanced cataract removal techniques, including phacoemulsification and premium intraocular lens options. We provide detailed pre-operative counseling about the procedure, lens choices, and what to expect, ensuring you feel informed and confident. Our team handles all necessary measurements, medical clearances, and surgical scheduling.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-2xl font-light mb-3 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>
                Post-Operative Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Following your cataract surgery, we provide comprehensive post-operative follow-up to monitor healing, manage any complications, and ensure optimal visual recovery. We prescribe and monitor the necessary anti-inflammatory and antibiotic eye drops, assess your vision at scheduled intervals, and address any concerns during your recovery period. Our goal is to help you achieve the clearest possible vision and return to your favorite activities.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              Our approach to cataract care is grounded in evidence-based medicine and the latest advances in ophthalmologic surgery. Modern cataract surgery involves removing the clouded natural lens and replacing it with a clear artificial intraocular lens (IOL). We work with surgeons who utilize advanced techniques such as laser-assisted cataract surgery, premium IOLs that can correct astigmatism or presbyopia, and state-of-the-art diagnostic equipment for precise lens calculations. The procedure is typically performed on an outpatient basis with minimal discomfort, and most patients experience significant vision improvement within days. Throughout your care, we emphasize patient education, informed decision-making, and personalized treatment planning to ensure the best possible outcome for your unique visual needs.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Why Choose Spark Eye Care for Cataracts Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">Our eye care specialists are board-certified with extensive training in diagnosing and managing cataracts at all stages.</p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Care Plans</h3>
              <p className="text-[var(--color-muted)]">We create individualized treatment plans based on your specific vision needs, lifestyle, and overall health considerations.</p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Advanced Technology</h3>
              <p className="text-[var(--color-muted)]">We utilize state-of-the-art diagnostic equipment and coordinate with surgeons using the latest surgical techniques and premium lens options.</p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-light)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Compassionate Support</h3>
              <p className="text-[var(--color-muted)]">From diagnosis through recovery, our team provides compassionate, patient-centered care and support every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Your Treatment Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>01</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>Initial Evaluation</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  <strong>Week 1:</strong> Your first visit includes a comprehensive eye examination with visual acuity testing, slit-lamp evaluation of the cataract, dilated fundus exam, and intraocular pressure measurement. We'll discuss your symptoms, how they affect your daily activities, and review your medical history and medications. Based on these findings, we'll determine whether your cataracts require immediate surgical intervention or can be monitored with updated eyeglass prescriptions and lifestyle modifications.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>02</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>Pre-Operative Planning</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  <strong>Weeks 2-4:</strong> If surgery is recommended, we perform precise biometry measurements to calculate the appropriate intraocular lens power for your eye. We'll discuss lens options including standard monofocal lenses, toric lenses for astigmatism correction, and premium multifocal or extended-depth-of-focus lenses. You'll receive detailed instructions about pre-operative preparations, what to expect during the procedure, and post-operative care requirements. We coordinate all aspects of your surgical scheduling with our trusted ophthalmologic partners.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>03</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>Surgery & Early Recovery</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  <strong>Month 1:</strong> Cataract surgery is typically performed as an outpatient procedure lasting 15-30 minutes per eye under local anesthesia. Most patients experience minimal discomfort and notice vision improvement within 24-48 hours. You'll use prescribed antibiotic and anti-inflammatory eye drops for several weeks. We schedule follow-up appointments at one day, one week, and one month post-operatively to monitor healing, check for complications, and assess visual outcomes. If both eyes require surgery, the second eye is typically operated on 1-2 weeks after the first.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl font-light text-[var(--color-primary)]" style={{fontFamily: 'var(--font-cormorant)'}}>04</div>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2 text-[var(--color-ink)]" style={{fontFamily: 'var(--font-cormorant)'}}>Long-Term Vision Care</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-2">
                  <strong>Months 2-3 and Beyond:</strong> Once your eyes have fully healed, we perform a comprehensive refraction to determine if you need new eyeglasses for optimal vision. Most patients achieve excellent distance vision after cataract surgery, though reading glasses may still be needed unless premium multifocal lenses were chosen. We continue to monitor your overall eye health with annual comprehensive examinations, checking for posterior capsule opacification (secondary cataract), glaucoma, macular degeneration, and other age-related conditions. Our ongoing relationship ensures your vision remains clear and healthy for years to come.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 p-6 bg-white rounded-lg border border-[var(--color-border)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>What You Can Expect:</strong> Cataract surgery has an excellent success rate, with more than 95% of patients achieving significantly improved vision. Most people return to normal activities within a few days and experience dramatic improvements in clarity, color perception, and quality of life. While all surgical procedures carry some risk, serious complications are rare. We're committed to setting realistic expectations, answering all your questions, and supporting you throughout your entire cataract treatment journey.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Frequently Asked Questions About Cataracts
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">How long does cataract treatment take?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The cataract surgery itself typically takes only 15-30 minutes per eye, performed as an outpatient procedure. However, the complete treatment timeline spans several weeks. Initial evaluation and pre-operative planning take 2-4 weeks, the surgery is performed, and post-operative healing continues for 4-6 weeks. Most patients notice significant vision improvement within 24-48 hours after surgery, but complete healing and visual stabilization can take up to 6-8 weeks. If both eyes require surgery, the procedures are usually spaced 1-2 weeks apart. Overall, from initial consultation to final visual outcome, expect approximately 2-3 months for complete bilateral cataract treatment.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">Is medication required for cataract treatment?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Cataracts themselves cannot be treated with medication; surgery is the only effective cure. However, medications play an important role in the surgical process. Before surgery, you may receive dilating drops and sometimes oral medications to help you relax. After surgery, you'll use prescription antibiotic eye drops to prevent infection and anti-inflammatory steroid drops to reduce swelling and promote healing, typically for 3-4 weeks. Some patients also use lubricating artificial tears for comfort during recovery. In very early cataracts, we may temporarily improve vision with updated eyeglass prescriptions, but this is not a cure. Once cataracts significantly affect your daily activities, surgery becomes necessary and medications cannot reverse the lens clouding.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">Does insurance cover cataract surgery?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Yes, cataract surgery is typically covered by Medicare and most private health insurance plans when it is medically necessary—meaning the cataracts are significantly affecting your vision and daily activities. Insurance generally covers the cost of the surgical procedure, standard monofocal intraocular lenses, and routine post-operative care. However, premium lens options such as toric lenses (for astigmatism correction), multifocal lenses, or extended-depth-of-focus lenses may involve additional out-of-pocket costs since they provide benefits beyond basic cataract removal. Laser-assisted cataract surgery may also have extra fees. We work with your insurance provider to verify coverage, obtain pre-authorization when required, and clearly explain any potential out-of-pocket expenses before proceeding with treatment.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">What if my vision doesn't improve after surgery?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  While cataract surgery has a success rate exceeding 95%, occasionally patients experience less-than-expected vision improvement. Several factors can affect outcomes: pre-existing eye conditions such as macular degeneration, glaucoma, or diabetic retinopathy may limit final visual potential even after successful cataract removal. Some patients develop posterior capsule opacification (PCO or "secondary cataract"), where the membrane behind the lens implant becomes cloudy; this is easily treated with a quick, painless laser procedure called YAG capsulotomy. Rarely, surgical complications such as inflammation, infection, or lens displacement can affect vision. If you're not satisfied with your visual outcome, we'll conduct a thorough examination to identify the cause and recommend appropriate solutions, which may include additional laser treatment, eyeglass adjustment, or in rare cases, lens repositioning or exchange.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">Can I delay cataract surgery if I'm not ready?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Yes, cataract surgery is elective, meaning you can choose the timing based on how much the cataracts affect your quality of life. If your cataracts are mild and you can perform daily activities comfortably with updated glasses, it's perfectly acceptable to wait. However, delaying surgery indefinitely isn't always advisable. Very mature or "hypermature" cataracts can become harder, making surgery more technically challenging and increasing complication risks. Advanced cataracts can also cause secondary problems like inflammation or elevated eye pressure. Additionally, prolonged visual impairment increases fall risks and reduces independence. We'll help you make an informed decision by discussing the severity of your cataracts, your visual needs, overall health, and lifestyle considerations. There's no "perfect" time for surgery, but when cataracts interfere with activities you value—like driving, reading, or hobbies—it's time to consider treatment.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <span className="text-lg font-semibold text-[var(--color-ink)]">Can follow-up care be done through telehealth?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  While initial cataract evaluations and most post-operative appointments require in-person examinations with specialized equipment (slit lamp, tonometry, fundus examination), telehealth can play a supportive role in your care. Telemedicine visits are useful for discussing surgical options, reviewing pre-operative instructions, answering questions about medications or recovery expectations, and addressing minor post-operative concerns like drop schedules or activity restrictions. However, critical post-operative checkpoints—especially the first day, one week, and one month visits—must be conducted in person to ensure proper healing and detect any complications early. Once you've fully recovered and achieved stable vision, routine follow-up care and general eye health questions may occasionally be addressed via telehealth. We'll work with you to create a convenient care plan that balances the necessity of in-person examinations with the flexibility of virtual consultations where appropriate.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/conditions/glaucoma" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Glaucoma</h4>
              <p className="text-[var(--color-muted)] mb-4">Progressive optic nerve damage that can lead to vision loss if untreated, often associated with elevated intraocular pressure.</p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </Link>
            <Link href="/conditions/macular-degeneration" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Macular Degeneration</h4>
              <p className="text-[var(--color-muted)] mb-4">Age-related deterioration of the central retina causing loss of central vision while peripheral vision remains intact.</p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </Link>
            <Link href="/conditions/diabetic-retinopathy" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)] mb-4">Diabetes-related damage to retinal blood vessels that can cause vision loss, requiring careful monitoring and treatment.</p>
              <span className="text-[var(--color-primary)] font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Get Help for Cataracts Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face cataracts alone. Our team is ready to help you regain clear vision and improve your quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}