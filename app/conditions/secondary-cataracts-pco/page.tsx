import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Secondary Cataracts (PCO) Treatment in Kyle | Spark Eye Care',
  description: 'Expert Secondary Cataracts (PCO) treatment in Kyle. Board-certified care for posterior capsule opacification with advanced YAG laser capsulotomy. Schedule your consultation today.',
  openGraph: {
    title: 'Secondary Cataracts (PCO) Treatment in Kyle | Spark Eye Care',
    description: 'Expert Secondary Cataracts (PCO) treatment in Kyle. Board-certified care for posterior capsule opacification with advanced YAG laser capsulotomy.',
    url: 'https://sparkeyetx.com/conditions/secondary-cataracts-pco',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function SecondaryCataractsPCOPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Secondary Cataracts (PCO)</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6 leading-tight">
            Secondary Cataracts (PCO) Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            If your vision has become cloudy months or years after successful cataract surgery, you may have developed posterior capsule opacification (PCO), commonly called secondary cataracts. At Spark Eye Care, we offer quick, painless YAG laser capsulotomy treatment to restore your clear vision in a single office visit.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2745822.jpeg"
                alt="Follow-up cataract care"
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
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Secondary Cataracts (PCO)
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Posterior capsule opacification (PCO), often referred to as secondary cataracts or after-cataracts, is the most common complication following cataract surgery, affecting approximately 20-40% of patients within two to five years after their initial procedure. Despite its name, PCO is not a true cataract returning, but rather a clouding of the lens capsule—the thin, clear membrane that holds your intraocular lens (IOL) in place. During cataract surgery, the cloudy natural lens is removed, but the posterior capsule is intentionally left intact to support the new artificial lens. Over time, residual lens cells can migrate across this capsule, multiply, and create a film that gradually obscures your vision, mimicking the symptoms of your original cataract. This condition can significantly impact your quality of life, making it difficult to read, drive safely at night, perform detailed work, or enjoy activities that require clear vision.
            </p>
            <p>
              The development of PCO is a natural biological response rather than a surgical error or complication. Several factors increase the risk of developing secondary cataracts, including younger age at the time of initial cataract surgery (younger patients have more active lens cells), certain eye conditions such as diabetes or uveitis, the type and material of intraocular lens implanted, and the surgical technique used during the original procedure. Some IOL designs and materials have lower rates of PCO due to their edge design, which creates a barrier effect preventing cell migration. The condition typically develops gradually, and many patients don't realize their vision is deteriorating until it significantly affects their daily activities. Unlike the original cataract, which could take years or decades to develop, PCO can occur relatively quickly—sometimes within months of surgery, though it more commonly appears one to three years post-operatively.
            </p>
            <p>
              Professional treatment for secondary cataracts is essential because the condition will not improve on your own, and unlike the original cataract, it cannot be managed with updated eyeglass prescriptions or lifestyle modifications. The good news is that PCO is highly treatable with a safe, effective, and painless outpatient procedure called YAG laser capsulotomy. This treatment has an extremely high success rate, typically restoring vision to post-cataract surgery levels within hours or days. At Spark Eye Care in Kyle, our experienced ophthalmologists use state-of-the-art laser technology to precisely treat secondary cataracts, creating a clear opening in the clouded capsule without touching your eye or requiring any incisions. Understanding that cloudy vision after successful cataract surgery is frustrating and concerning, we provide comprehensive evaluation and same-day treatment options to help you regain the clear vision you deserve and get back to the activities you love.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Secondary Cataracts (PCO)
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Visual Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Gradual Vision Cloudiness</p>
                    <p className="text-[var(--color-muted)]">Your vision slowly becomes hazy or cloudy, similar to looking through a dirty window, months or years after cataract surgery.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Glare and Halos</p>
                    <p className="text-[var(--color-muted)]">Increased sensitivity to bright lights, with halos or starbursts around headlights, lamps, or sunlight.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Reduced Contrast Sensitivity</p>
                    <p className="text-[var(--color-muted)]">Difficulty distinguishing objects from their background, especially in low-light conditions or when colors are similar.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blurred Vision</p>
                    <p className="text-[var(--color-muted)]">Overall blurriness that affects both near and distance vision and cannot be corrected with new glasses.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Reading</p>
                    <p className="text-[var(--color-muted)]">Text appears less sharp or clear, requiring more light or magnification than you needed immediately after your cataract surgery.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Night Vision Problems</p>
                    <p className="text-[var(--color-muted)]">Increasing difficulty driving at night or navigating in dimly lit environments due to reduced clarity and increased glare.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Faded Color Perception</p>
                    <p className="text-[var(--color-muted)]">Colors may appear less vibrant or somewhat washed out as the cloudiness filters the light entering your eye.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Functional & Daily Life Impact</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty with Detailed Tasks</p>
                    <p className="text-[var(--color-muted)]">Challenges performing activities that require clear vision, such as sewing, crafts, using a computer, or reading fine print.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Driving Concerns</p>
                    <p className="text-[var(--color-muted)]">Reduced confidence or ability to drive safely, especially at night or in challenging weather conditions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Return of Pre-Surgery Frustrations</p>
                    <p className="text-[var(--color-muted)]">Experiencing the same visual limitations you had before your original cataract surgery, causing concern that the surgery failed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Need for Brighter Lighting</p>
                    <p className="text-[var(--color-muted)]">Requiring significantly more light for reading, cooking, or other activities than you did immediately after cataract surgery.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Reduced Independence</p>
                    <p className="text-[var(--color-muted)]">Increasing reliance on others for activities like shopping, reading labels, or managing medications due to vision decline.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Avoiding Previously Enjoyed Activities</p>
                    <p className="text-[var(--color-muted)]">Withdrawing from hobbies, social activities, or recreational pursuits that have become difficult due to declining vision.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Frustration and Anxiety</p>
                    <p className="text-[var(--color-muted)]">Emotional distress from worrying that your cataract has returned or that additional surgery will be needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. The YAG laser capsulotomy procedure is quick, painless, and highly effective at restoring the clear vision you enjoyed immediately after your original cataract surgery.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Secondary Cataracts (PCO)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough eye examination including visual acuity testing, slit-lamp biomicroscopy to evaluate the degree of capsular opacification, and dilated fundus examination to rule out other potential causes of vision loss. Our advanced diagnostic equipment allows us to precisely assess whether PCO is the cause of your vision decline and determine if you're a good candidate for YAG laser capsulotomy treatment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">YAG Laser Capsulotomy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The gold-standard treatment for PCO is YAG laser capsulotomy, a quick outpatient procedure performed right in our office. Using focused laser energy, we create a small, precise opening in the clouded posterior capsule, allowing light to pass clearly through to your retina. The procedure is painless, requires no incisions or stitches, and typically takes only 5-10 minutes. Most patients notice immediate improvement in their vision, with full results apparent within 24-48 hours.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Follow-Up Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                After your YAG laser treatment, we schedule a follow-up examination to ensure optimal results and monitor for any rare complications such as temporary eye pressure elevation or inflammation. We provide anti-inflammatory eye drops if needed and give you detailed instructions for post-procedure care. Most patients resume normal activities immediately, and the results are permanent—PCO cannot recur in the same area once treated, giving you lasting clear vision.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              YAG laser capsulotomy is the only effective treatment for secondary cataracts and has been used safely for over three decades with an excellent success rate exceeding 95%. The procedure uses a neodymium-doped yttrium aluminum garnet (Nd:YAG) laser to create photodisruption of the clouded capsule tissue without thermal damage to surrounding structures. Before the procedure, your eye is dilated and numbing drops are applied to ensure your comfort. You'll be seated at the laser slit lamp, and a special contact lens is placed on your eye to help focus the laser and keep your eyelids open. The laser creates small, precise openings in the posterior capsule, forming a clear central window. You may see flashes of light or hear clicking sounds during the treatment, but there is no pain. The entire procedure typically takes 5-10 minutes, and you can go home shortly afterward. Vision improvement is often noticeable immediately, though some patients experience temporary floaters or light flashes that resolve within days. Unlike the original cataract surgery, YAG capsulotomy carries minimal risk and requires no recovery period, making it one of the most convenient and effective treatments in modern ophthalmology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Secondary Cataracts (PCO) Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Expert Ophthalmologists</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our board-certified ophthalmologists have extensive experience diagnosing and treating PCO with advanced YAG laser technology, ensuring safe, precise, and effective results.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We take time to understand your specific vision concerns and medical history, creating a customized treatment approach that addresses your individual needs and expectations.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">State-of-the-Art Technology</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice utilizes the latest YAG laser systems and diagnostic equipment, providing the most advanced and comfortable treatment experience available.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Convenient & Efficient</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Same-day laser treatment is often possible, and the quick in-office procedure means you can return to normal activities immediately with no lengthy recovery period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="font-cormorant text-6xl font-light text-[var(--color-primary)] flex-shrink-0">01</div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Initial Evaluation (Same Day or Within Days)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your first visit includes a comprehensive eye examination with visual acuity testing, pupil dilation, and slit-lamp evaluation to confirm PCO diagnosis. We'll review your medical and surgical history, discuss your symptoms, and explain the YAG laser capsulotomy procedure in detail. If you're a good candidate and prefer immediate treatment, we can often perform the laser procedure during the same visit, or we'll schedule it for your convenience within the next few days.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="font-cormorant text-6xl font-light text-[var(--color-primary)] flex-shrink-0">02</div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">YAG Laser Treatment (5-10 Minutes)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The actual laser treatment is remarkably quick and comfortable. After your eye is dilated and numbed with drops, you'll sit at the laser slit lamp while the doctor precisely targets the clouded capsule with short bursts of laser energy. You'll see flashes of light but feel no pain. The entire procedure takes 5-10 minutes, and you can go home immediately afterward. Many patients notice clearer vision within hours, with continued improvement over the next day or two as any temporary haziness from the procedure resolves.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="font-cormorant text-6xl font-light text-[var(--color-primary)] flex-shrink-0">03</div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Follow-Up Examination (1-2 Weeks)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We'll schedule a brief follow-up appointment one to two weeks after your treatment to check your eye pressure, ensure the capsulotomy opening is optimal, and verify that your vision has improved as expected. This visit allows us to address any concerns and confirm that you're achieving the clear vision you deserve. Most patients report being thrilled with their results and wish they had sought treatment sooner.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="font-cormorant text-6xl font-light text-[var(--color-primary)] flex-shrink-0">04</div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-Term Vision Maintenance (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your PCO is treated with YAG laser capsulotomy, it cannot recur in the treated area—the results are permanent. You'll continue with regular comprehensive eye exams to monitor your overall eye health, check for other age-related conditions, and ensure your intraocular lens remains properly positioned. We're committed to supporting your long-term vision health and helping you maintain the clear, vibrant vision you've regained through treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Secondary Cataracts (PCO)
          </h2>
          <div className="space-y-6">
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does YAG laser capsulotomy treatment take?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The actual laser procedure takes only 5-10 minutes per eye. Including preparation time for dilating your pupil and applying numbing drops, your total time in the office is typically 30-45 minutes. The treatment itself is remarkably quick—the laser fires short pulses for just a few seconds to create the opening in the clouded capsule. Most patients are surprised by how fast and simple the procedure is compared to their original cataract surgery.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                Is YAG laser capsulotomy painful?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                No, the procedure is painless. Before treatment, we apply numbing eye drops to ensure your comfort. During the laser application, you may see bright flashes of light and hear clicking sounds as the laser fires, but you won't feel any pain or discomfort. Some patients report mild eye irritation or a scratchy sensation for a few hours afterward, which resolves quickly. The procedure requires no incisions, injections, or surgical instruments touching your eye.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover YAG laser capsulotomy for PCO?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, YAG laser capsulotomy is typically covered by Medicare and most private insurance plans when medically necessary to treat vision-impairing PCO. Since PCO is a recognized complication of cataract surgery that affects your functional vision, the treatment is considered medically necessary rather than cosmetic. We'll verify your insurance coverage before your procedure and provide you with information about any out-of-pocket costs based on your specific plan. Our billing team is experienced in working with insurance companies to ensure you receive the benefits you're entitled to.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                What is the recovery time after YAG laser capsulotomy?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Recovery from YAG laser capsulotomy is minimal to nonexistent. Most patients can resume normal activities immediately after the procedure. Your vision may be slightly blurry for a few hours due to the dilating drops, so we recommend having someone drive you home. You may notice some floaters or light flashes for a day or two as microscopic debris settles in your eye, but these typically resolve quickly. We may prescribe anti-inflammatory eye drops for a few days to prevent inflammation, but there are no activity restrictions, and most people return to work, driving, and other normal activities the next day. Vision improvement is often noticeable within hours and continues to improve over 24-48 hours.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                Can secondary cataracts come back after YAG laser treatment?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                No, once the posterior capsule has been opened with the YAG laser, PCO cannot recur in that area. The laser creates a permanent opening in the clouded capsule tissue, and since that tissue has been removed from the visual axis, it cannot regrow or cloud over again. The results are permanent, and the vast majority of patients never need retreatment. In very rare cases (less than 5% of patients), additional laser treatment may be needed if the initial opening was too small or if clouding occurs at the edges of the opening, but this is uncommon. The one-time nature of the treatment is one of its major advantages.
              </p>
            </details>
            <details className="group border-b border-[var(--color-border)] pb-6">
              <summary className="cursor-pointer text-xl font-semibold text-[var(--color-ink)] list-none flex justify-between items-center">
                How soon will I notice improvement in my vision?
                <span className="text-[var(--color-primary)] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Many patients notice immediate improvement in their vision clarity within hours of the procedure. However, your pupil will still be dilated for several hours after treatment, which can cause temporary blurriness and light sensitivity. As the dilation wears off and any minor inflammation settles, your vision continues to improve. Most patients achieve their final, optimal vision within 24-48 hours. You may experience temporary floaters as microscopic debris from the laser treatment settles and is naturally absorbed by your eye. These typically fade within days to weeks. The dramatic improvement in vision clarity—often described as "like removing a dirty windshield"—is why patients are so pleased with their results.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/cataracts" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Cataracts</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Comprehensive evaluation and advanced surgical treatment for age-related cataracts causing cloudy, blurry vision.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="/conditions/glaucoma" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Glaucoma</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Expert diagnosis and management of glaucoma to preserve your vision and prevent optic nerve damage.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="/conditions/age-related-macular-degeneration" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Macular Degeneration</h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Advanced treatment options for age-related macular degeneration to help preserve your central vision.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Get Help for Secondary Cataracts (PCO) Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face Secondary Cataracts (PCO) alone. Our team is ready to help you regain the clear vision you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-block">
              Schedule Consultation
            </a>
            <a href="/conditions" className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all inline-block">
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}