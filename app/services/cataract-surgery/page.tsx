import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cataract Surgery in Kyle, TX | Spark Eye Care',
  description: 'Expert cataract surgery at Spark Eye Care in Kyle, TX. Advanced lens replacement techniques to restore clear vision and improve your quality of life.',
}

export default function CataractSurgeryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Cataract Surgery</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Cataract Surgery in Kyle, TX
          </h1>
          <p className="text-xl opacity-95 max-w-3xl leading-relaxed">
            Restore your clear vision with advanced cataract surgery at Spark Eye Care. Our experienced surgeons use state-of-the-art techniques and premium lens options to remove clouded lenses and replace them with artificial intraocular lenses, helping you see the world clearly again.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2748701.jpeg"
                alt="Woman with glasses reading her phone"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            What is Cataract Surgery?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Cataracts are one of the most common age-related eye conditions, affecting millions of Americans each year. A cataract occurs when the natural lens inside your eye becomes cloudy, blocking and scattering light as it enters the eye. This cloudiness develops gradually over time, causing progressive vision loss that can significantly impact your daily activities, from reading and driving to recognizing faces. While cataracts are most commonly associated with aging, they can also develop due to injury, certain medications, medical conditions like diabetes, or prolonged UV exposure.
            </p>
            
            <p>
              Cataract surgery is a safe, proven procedure that involves removing the clouded natural lens and replacing it with a clear artificial lens called an intraocular lens (IOL). This outpatient procedure typically takes less than 30 minutes and is performed using advanced techniques such as phacoemulsification, where ultrasound energy gently breaks up the cloudy lens for removal through a tiny incision. At Spark Eye Care, we utilize the latest surgical technology and premium lens options to not only restore clarity but potentially reduce your dependence on glasses for distance, reading, or both.
            </p>
            
            <p>
              The success rate for cataract surgery is exceptionally high, with over 95% of patients experiencing improved vision. Most patients notice a dramatic improvement in their vision within days of surgery, with colors appearing brighter and details becoming sharper. The procedure has been refined over decades and is now one of the most commonly performed surgeries in the United States, with millions of successful outcomes each year. Modern cataract surgery is minimally invasive, uses topical anesthesia, and requires no stitches in most cases, allowing for rapid recovery and minimal discomfort.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">Signs You May Have Cataracts</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Cloudy, blurred, or dim vision that worsens over time</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Increased difficulty with night vision and sensitivity to glare from headlights</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Fading or yellowing of colors, making vibrant hues appear dull</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Seeing halos around lights, especially at night</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Frequent changes in eyeglass or contact lens prescription</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Double vision in one eye</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Difficulty reading or performing detailed tasks despite adequate lighting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-4 text-[var(--color-ink)] text-center">
            Our Approach to Cataract Surgery
          </h2>
          <p className="text-xl text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto">
            At Spark Eye Care, we combine surgical expertise with advanced technology to deliver exceptional visual outcomes in a comfortable, personalized environment.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Evaluation</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough eye examination including advanced diagnostic imaging to measure your eye's unique characteristics. We assess cataract severity, evaluate your overall eye health, discuss your visual goals and lifestyle needs, and determine the optimal surgical approach and lens options specifically for you.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Advanced Surgical Technique</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We perform modern phacoemulsification cataract surgery using state-of-the-art equipment in our accredited surgical facility. Through a micro-incision, we gently remove the clouded lens and implant your customized intraocular lens. The procedure is virtually painless with topical anesthesia and typically completed in under 30 minutes.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Recovery Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Following surgery, we provide detailed post-operative care instructions and prescription eye drops to promote healing. We schedule follow-up visits at one day, one week, and one month to monitor your recovery and visual progress. Our team remains available to address any questions or concerns throughout your healing journey.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-light)] rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-['Cormorant'] mb-6 text-[var(--color-ink)]">Premium Lens Options</h3>
            <p className="text-lg text-[var(--color-ink)] mb-8 leading-relaxed">
              At Spark Eye Care, we offer a range of advanced intraocular lens options to match your visual goals and lifestyle. Beyond standard monofocal lenses that provide clear distance vision, we provide premium lens technologies that can reduce or eliminate your dependence on glasses.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Multifocal Lenses</h4>
                <p className="text-[var(--color-muted)]">Provide clear vision at multiple distances—near, intermediate, and far—reducing the need for reading glasses and bifocals.</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Toric Lenses</h4>
                <p className="text-[var(--color-muted)]">Specially designed to correct astigmatism during cataract surgery, providing sharper, clearer vision without distortion.</p>
              </div>
              <div className="bg-white rounded-lg p-6 md:col-span-2">
                <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Extended Depth of Focus Lenses</h4>
                <p className="text-[var(--color-muted)]">Offer a continuous range of high-quality vision from distance to intermediate, ideal for computer work and daily activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12">
            <h2 className="font-['Cormorant'] text-4xl mb-8 text-[var(--color-ink)] text-center">
              What to Expect: Your Cataract Surgery Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Initial Consultation</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During your first visit, we perform comprehensive measurements and diagnostics to assess your cataracts and overall eye health. We discuss your visual goals, review lens options, and create a customized surgical plan. You'll receive pre-operative instructions and have all your questions answered before scheduling your procedure.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Surgery Day</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The procedure itself takes approximately 15-30 minutes per eye. You'll receive topical anesthetic drops and light sedation to ensure comfort. Most patients experience no pain, just gentle pressure sensations. After a brief recovery period in our facility, you'll go home the same day with protective eyewear and post-operative instructions.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Week of Recovery</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Many patients notice improved vision within 24 hours, though it continues to stabilize over the following days. You'll use prescribed eye drops to prevent infection and reduce inflammation. We'll see you for a one-day post-op check and again at one week. Most patients can resume normal daily activities within a few days, avoiding only strenuous exercise and swimming.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">One Month and Beyond</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  By one month, your vision should be stable and significantly improved. If you're having surgery on both eyes, the second eye is typically done 1-2 weeks after the first. At your one-month visit, we'll perform a comprehensive exam and, if needed, prescribe any fine-tuning glasses. Most patients enjoy clear, vibrant vision for years to come with their new intraocular lenses.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-Term Outlook</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Intraocular lenses are designed to last a lifetime and never need replacement. Your vision should remain clear and stable. We recommend annual comprehensive eye exams to monitor your overall eye health and address any other age-related eye conditions. The overwhelming majority of patients report high satisfaction with their improved quality of life after cataract surgery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Common Questions About Cataract Surgery
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>How do I know if I'm ready for cataract surgery?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>You're ready for cataract surgery when your vision loss begins interfering with your daily activities and quality of life. This might include difficulty driving at night, trouble reading despite adequate lighting, challenges recognizing faces, or struggling with hobbies you once enjoyed. There's no need to wait until cataracts are "ripe"—modern surgery can be performed whenever vision impairment becomes bothersome. During your consultation, we'll evaluate your cataract severity and discuss whether surgery is appropriate based on your symptoms and visual goals.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>Is cataract surgery painful?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Cataract surgery is virtually painless. We use topical anesthetic eye drops to numb your eye completely, along with light sedation to help you relax. During the procedure, you may feel gentle pressure or awareness of movement, but no pain. Most patients are surprised by how comfortable the experience is. After surgery, you may experience mild irritation, grittiness, or sensitivity to light for a day or two, which is easily managed with prescribed eye drops. Any discomfort is typically minimal and short-lived.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>How long does recovery take after cataract surgery?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Most patients experience rapid visual improvement, with many noticing clearer vision within 24 hours. Initial healing occurs within the first week, and full visual stabilization typically happens within 4-6 weeks. You can usually resume most normal activities within a few days, including reading, watching TV, and light work. We recommend avoiding strenuous exercise, swimming, and heavy lifting for about two weeks. You'll need to use prescribed eye drops for several weeks to promote healing and prevent infection. Each patient heals at their own pace, and we monitor your progress closely through scheduled follow-up visits.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>Will I still need glasses after cataract surgery?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>Your need for glasses after surgery depends on the type of intraocular lens you choose. Standard monofocal lenses provide excellent distance vision but typically require reading glasses for close work. Premium lens options like multifocal, extended depth of focus, or accommodating lenses can significantly reduce or even eliminate your dependence on glasses for most activities. During your consultation, we'll discuss your visual priorities—whether that's freedom from glasses, optimal night driving vision, or best reading clarity—and recommend lens options that align with your lifestyle goals and expectations.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                <div className="flex items-center justify-between">
                  <span>Can cataracts come back after surgery?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>No, cataracts cannot return because the natural lens that developed the cataract has been completely removed and replaced with an artificial lens. However, some patients develop a condition called posterior capsule opacification (PCO), sometimes called a "secondary cataract," where the thin membrane behind the lens implant becomes cloudy over time. This occurs in about 20-30% of patients months or years after surgery. PCO is easily and permanently treated with a quick, painless laser procedure called YAG capsulotomy, performed in our office in just a few minutes with no recovery time needed.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-['Cormorant'] mb-10 text-[var(--color-ink)] text-center">
            Related Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/diabetic-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Complete eye health evaluations with advanced diagnostic testing to detect cataracts and other conditions early.
              </p>
            </a>

            <a href="/services/minimally-invasive-glaucoma-surgery" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Glaucoma Management
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Expert monitoring and treatment of glaucoma to protect your vision and preserve your optic nerve health.
              </p>
            </a>

            <a href="/services/diabetic-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Diabetic Eye Care
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Specialized care for diabetic retinopathy and other diabetes-related eye complications to prevent vision loss.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-6">
            Ready to See Clearly Again with Cataract Surgery?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Don't let cataracts diminish your quality of life. Schedule your consultation today and discover how modern cataract surgery can restore your clear, vibrant vision.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}