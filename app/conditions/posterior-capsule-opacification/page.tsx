import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Posterior Capsule Opacification Treatment in Kyle | Spark Eye Care',
  description: 'Expert posterior capsule opacification (PCO) treatment in Kyle. Board-certified ophthalmologists offering YAG laser capsulotomy to restore clear vision after cataract surgery.',
  keywords: 'posterior capsule opacification treatment Kyle, PCO treatment Kyle, YAG laser capsulotomy Kyle, secondary cataract Kyle, cloudy vision after cataract surgery Kyle',
  openGraph: {
    title: 'Posterior Capsule Opacification Treatment in Kyle | Spark Eye Care',
    description: 'Expert PCO treatment and YAG laser capsulotomy in Kyle to restore clear vision after cataract surgery.',
    url: 'https://www.sparkeyetx.com/conditions/posterior-capsule-opacification',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function PosteriorCapsuleOpacificationPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Posterior Capsule Opacification</span>
          </nav>
          
          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Posterior Capsule Opacification Treatment in Kyle
          </h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Posterior capsule opacification (PCO), often called "secondary cataract," can cloud your vision months or years after successful cataract surgery. At Spark Eye Care in Kyle, we offer quick, painless YAG laser capsulotomy to restore the crystal-clear vision you deserve.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/AdobeStock_447730359.jpeg"
                alt="Patient smiling after PCO treatment"
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

      {/* OVERVIEW SECTION */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Posterior Capsule Opacification
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Posterior capsule opacification (PCO) is a common condition that develops after cataract surgery, affecting approximately 20-40% of patients within two to five years following their procedure. During cataract surgery, the cloudy natural lens is removed and replaced with a clear artificial intraocular lens (IOL). However, the thin capsular bag that holds the new lens is left in place. Over time, residual lens cells can migrate and multiply across the back surface of this capsule, creating a cloudy membrane that blocks light from reaching the retina. This gradual clouding mimics the symptoms of the original cataract—blurred vision, glare, halos around lights, and difficulty reading—leading many patients to believe their cataract has returned. While PCO is sometimes called a "secondary cataract," it is not actually a cataract but rather a natural healing response of the eye that can significantly impact daily activities like driving, reading, and recognizing faces.
            </p>
            
            <p>
              Several factors increase the risk of developing posterior capsule opacification. Younger patients tend to have more active lens epithelial cells, making them more susceptible to PCO development. Certain types of intraocular lenses, particularly older designs without square edges, are associated with higher PCO rates. Medical conditions such as diabetes, uveitis, or retinitis pigmentosa can increase the likelihood of capsular clouding. Surgical factors also play a role—incomplete removal of lens cortical material during the original cataract surgery can leave more cells behind that later contribute to opacification. Additionally, some patients simply have more aggressive cellular healing responses, leading to faster and more pronounced capsule clouding. The good news is that PCO is entirely treatable and preventable through modern surgical techniques and lens technology, though it cannot always be avoided completely.
            </p>
            
            <p>
              Professional treatment for posterior capsule opacification is essential because the condition progressively worsens over time and does not resolve on its own. Unlike the original cataract, PCO cannot be managed with glasses, contact lenses, or medications—the cloudy capsule must be physically cleared to restore vision. Without treatment, patients experience declining visual quality that interferes with independence, safety, and quality of life. The standard treatment, YAG laser capsulotomy, is a quick, painless office procedure that creates a clear opening in the clouded capsule, instantly restoring vision for the vast majority of patients. Delaying treatment serves no benefit and only extends the period of visual impairment. At Spark Eye Care in Kyle, our board-certified ophthalmologists have extensive experience diagnosing and treating PCO, using the latest laser technology to safely and effectively restore the clear vision you achieved with your original cataract surgery. Early evaluation and treatment mean you can quickly return to the activities and lifestyle you enjoy.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Posterior Capsule Opacification
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Visual Symptoms */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Visual Symptoms</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Gradual Vision Clouding</span>
                  <p className="text-[var(--color-muted)]">Progressive blurriness or haziness that develops months or years after initially successful cataract surgery.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Glare and Light Sensitivity</span>
                  <p className="text-[var(--color-muted)]">Increased difficulty with bright lights, particularly noticeable when driving at night or in sunlight.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Halos Around Lights</span>
                  <p className="text-[var(--color-muted)]">Bright circles or rings appearing around light sources, especially streetlights and headlights at night.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Reduced Contrast Sensitivity</span>
                  <p className="text-[var(--color-muted)]">Difficulty distinguishing objects from their background, making faces appear washed out or text harder to read.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Dimmed or Faded Vision</span>
                  <p className="text-[var(--color-muted)]">Overall reduction in brightness and color vibrancy, as though looking through a dirty window or fog.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Reading Difficulties</span>
                  <p className="text-[var(--color-muted)]">Needing brighter light for reading and experiencing frustration with small print that was previously clear.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Prescription Changes Not Helping</span>
                  <p className="text-[var(--color-muted)]">New glasses or contact lenses fail to improve vision quality, indicating a structural rather than refractive problem.</p>
                </div>
              </div>
            </div>

            {/* Functional & Lifestyle Impact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">Functional & Lifestyle Impact</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Driving Difficulties</span>
                  <p className="text-[var(--color-muted)]">Reduced confidence behind the wheel, especially at night or in challenging weather conditions due to glare and blur.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Difficulty Recognizing Faces</span>
                  <p className="text-[var(--color-muted)]">Trouble identifying friends and family from a distance, leading to social awkwardness and isolation.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Frustration with Hobbies</span>
                  <p className="text-[var(--color-muted)]">Inability to enjoy activities like reading, crafts, gardening, or sports due to compromised visual clarity.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Increased Fall Risk</span>
                  <p className="text-[var(--color-muted)]">Difficulty judging distances and seeing obstacles, particularly on stairs or uneven surfaces, increasing accident risk.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Screen Difficulty</span>
                  <p className="text-[var(--color-muted)]">Problems reading computers, phones, and tablets clearly, impacting work productivity and communication.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Loss of Independence</span>
                  <p className="text-[var(--color-muted)]">Growing reliance on others for transportation, reading labels, or daily tasks previously managed independently.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-[var(--color-ink)]">Worry About Vision Loss</span>
                  <p className="text-[var(--color-muted)]">Anxiety that the cataract has returned or that the initial surgery failed, creating unnecessary emotional distress.</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-center text-[var(--color-ink)] max-w-3xl mx-auto leading-relaxed">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Our team at Spark Eye Care in Kyle specializes in diagnosing and treating posterior capsule opacification quickly and effectively, restoring the clear vision you deserve.
          </p>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Posterior Capsule Opacification
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough dilated eye examination using advanced diagnostic equipment to visualize the posterior capsule and measure the degree of opacification. Our ophthalmologists assess your visual acuity, contrast sensitivity, and overall eye health to confirm PCO diagnosis and rule out other potential causes of vision decline. We review your cataract surgery history and current symptoms to create a complete picture of your eye health.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">YAG Laser Capsulotomy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Once PCO is confirmed, we perform a quick, painless YAG laser capsulotomy right in our office. This five-minute procedure uses focused laser energy to create a small, precise opening in the clouded posterior capsule, instantly clearing the visual pathway. You'll sit comfortably at our laser workstation while the ophthalmologist delivers the laser pulses—most patients report no discomfort and notice immediate vision improvement. No incisions, no stitches, and no recovery period required.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Follow-Up Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                After your YAG laser treatment, we schedule a brief follow-up visit to ensure optimal healing and vision restoration. We'll check your intraocular pressure and examine your eyes to confirm the capsulotomy opening is clear and properly positioned. Most patients achieve their best vision within a day or two and require no further treatment. We provide guidance on managing temporary floaters and answer any questions about your renewed visual clarity and long-term eye health.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed">
              YAG laser capsulotomy is the gold-standard treatment for posterior capsule opacification, with a success rate exceeding 95%. This evidence-based procedure is supported by decades of clinical research and millions of successful treatments worldwide. The Nd:YAG (neodymium-doped yttrium aluminum garnet) laser delivers precisely focused energy that creates a clear central opening in the clouded capsule without damaging surrounding tissues. Unlike the original cataract surgery, YAG capsulotomy requires no anesthesia beyond numbing eye drops, involves no surgical instruments entering the eye, and carries minimal risk of complications. The procedure is quick, comfortable, and produces immediate results—most patients walk out of our office with noticeably clearer vision. At Spark Eye Care, our board-certified ophthalmologists use state-of-the-art laser technology and extensive experience to deliver safe, effective treatment that restores the visual quality you achieved with your initial cataract surgery.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Posterior Capsule Opacification Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Board-Certified Ophthalmologists</h3>
              <p className="text-[var(--color-muted)]">
                Our experienced eye surgeons have performed thousands of YAG laser procedures with exceptional outcomes and patient satisfaction.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)]">
                We take time to understand your specific visual needs and concerns, creating individualized treatment plans for optimal results.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Advanced Laser Technology</h3>
              <p className="text-[var(--color-muted)]">
                We invest in the latest YAG laser systems to ensure precise, safe, and comfortable treatment with minimal side effects.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Convenient Kyle Location</h3>
              <p className="text-[var(--color-muted)]">
                Our modern facility serves Kyle and surrounding communities with flexible scheduling and streamlined appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-5xl font-light text-[var(--color-primary)]">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Initial Consultation (Day 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your journey begins with a comprehensive eye examination where we dilate your pupils and carefully examine the posterior capsule using specialized microscopy. We'll measure your visual acuity, test contrast sensitivity, and document the extent of capsular clouding. Our ophthalmologist will explain the findings, confirm that PCO is causing your symptoms, and discuss the YAG laser capsulotomy procedure in detail. We'll answer all your questions and schedule your treatment at your convenience—many patients prefer to have the procedure the same day once they understand how quick and comfortable it is.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-5xl font-light text-[var(--color-primary)]">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">YAG Laser Treatment (Same Day or Within Days)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  On treatment day, we'll place numbing drops in your eye and position you comfortably at our laser workstation. The procedure takes only five minutes—you'll rest your chin on a support while the ophthalmologist aims the laser and delivers quick pulses to create a clear opening in the clouded capsule. Most patients report no pain, just brief flashes of light and occasional clicking sounds. Vision often improves immediately, though you may notice some floaters (tiny dark specks) for a few days as cellular debris settles. You can resume normal activities the same day, and most patients can drive themselves home after their follow-up check.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-5xl font-light text-[var(--color-primary)]">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Follow-Up Visit (1-2 Weeks)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We'll see you back in the office about one to two weeks after your laser treatment to ensure everything is healing properly. During this brief visit, we check your intraocular pressure (YAG laser can cause temporary pressure elevation in some patients), examine the capsulotomy opening, and measure your improved visual acuity. Most patients are thrilled with their restored clarity and report significant improvement in daily activities. We'll address any lingering floaters or visual concerns and provide guidance on long-term eye health maintenance. This follow-up ensures you're getting maximum benefit from your treatment.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant',serif] text-5xl font-light text-[var(--color-primary)]">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Long-Term Clarity (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The great news about YAG laser capsulotomy is that it's a one-time treatment—posterior capsule opacification cannot recur once the capsule has been opened. Your vision should remain clear indefinitely, though you'll still need regular eye exams to monitor overall eye health and screen for age-related conditions like glaucoma and macular degeneration. We recommend annual comprehensive eye exams to ensure your eyes stay healthy and your vision remains optimal. Most patients report lasting satisfaction and gratitude for regaining the clear vision they thought they had lost forever. You can return to all the activities you love with confidence and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Posterior Capsule Opacification
          </h2>
          
          <div className="space-y-6">
            <details className="group bg-[var(--color-cream)] rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-[var(--color-ink)] list-none">
                How long does YAG laser capsulotomy take?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                The actual laser procedure takes only five minutes. However, your total appointment time will be about 60-90 minutes to allow for pupil dilation, preparation, the treatment itself, and a brief post-procedure observation period. Most patients are in and out of our office within two hours and can resume normal activities immediately. The treatment is performed in our office—no hospital visit or operating room required.
              </p>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-[var(--color-ink)] list-none">
                Is YAG laser capsulotomy painful?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                No, YAG laser capsulotomy is virtually painless. We use numbing eye drops before the procedure, and the laser itself doesn't cause discomfort—it never touches your eye. Most patients report only seeing bright flashes of light and hearing soft clicking sounds as the laser pulses are delivered. There's no cutting, no needles, and no recovery pain. Some patients experience minor eye irritation or sensitivity to light for a few hours afterward, easily managed with over-the-counter artificial tears.
              </p>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-[var(--color-ink)] list-none">
                Does insurance cover YAG laser treatment for PCO?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, YAG laser capsulotomy is considered a medically necessary procedure and is typically covered by Medicare and most private insurance plans when performed to treat symptomatic posterior capsule opacification. Coverage usually includes both the evaluation and the laser treatment itself. We recommend verifying your specific benefits before your appointment, and our staff is happy to assist with insurance questions and provide necessary documentation. Prior authorization is rarely required, but we'll handle any paperwork needed to ensure coverage.
              </p>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-[var(--color-ink)] list-none">
                Can posterior capsule opacification come back after treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                No, once the posterior capsule is opened with YAG laser, PCO cannot recur. The laser creates a permanent clear opening in the capsule that allows light to pass through unobstructed. Unlike some eye conditions that require ongoing treatment, YAG capsulotomy is a one-time procedure with lasting results. In very rare cases (less than 1%), the edge of the capsulotomy opening might develop minor additional clouding that requires a quick touch-up treatment, but complete recurrence is not possible.
              </p>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-[var(--color-ink)] list-none">
                What are the risks of YAG laser capsulotomy?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                YAG laser capsulotomy is extremely safe, with serious complications being very rare. The most common side effects are temporary floaters (small dark spots in your vision), mild eye pressure elevation that resolves on its own or with eye drops, and slight inflammation managed with anti-inflammatory medication if needed. Rare risks include retinal detachment (less than 1% chance, more common in very nearsighted patients), damage to the intraocular lens (extremely rare with modern techniques), and significant pressure spikes requiring treatment. Our experienced ophthalmologists minimize these risks through careful pre-treatment evaluation and precise laser technique.
              </p>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-[var(--color-ink)] list-none">
                How quickly will my vision improve after treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most patients notice immediate vision improvement, though your vision may be slightly blurry for the first few hours due to pupil dilation and potential inflammation. By the next day, the vast majority of patients experience significantly clearer vision that continues to improve over the following week as any cellular debris settles. Some patients report dramatic clarity within hours, often exclaiming that it's like "a curtain being lifted" from their vision. Maximum visual improvement is typically achieved within one to two weeks as inflammation fully resolves and the eye adapts to the restored clarity.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS SECTION */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant',serif] text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/cataracts" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Cataracts</h4>
                  <p className="text-[var(--color-muted)]">Clouding of the eye's natural lens causing blurred vision, glare, and difficulty with daily activities.</p>
                </div>
              </div>
            </a>
            
            <a href="/conditions/glaucoma" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Glaucoma</h4>
                  <p className="text-[var(--color-muted)]">Progressive optic nerve damage often caused by elevated eye pressure, leading to vision loss if untreated.</p>
                </div>
              </div>
            </a>
            
            <a href="/conditions/diabetic-retinopathy" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-4">
                <svg className="w-10 h-10 text-[var(--color-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Diabetic Retinopathy</h4>
                  <p className="text-[var(--color-muted)]">Diabetes-related damage to retinal blood vessels that can lead to vision loss without proper management.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl font-light mb-4">
            Get Help for Posterior Capsule Opacification Today
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            You don't have to face Posterior Capsule Opacification alone. Our team is ready to help you restore clear vision quickly and comfortably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors inline-block"
            >
              Schedule Your Consultation
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-block"
            >
              View All Conditions
            </a>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Serving Kyle and surrounding communities with expert eye care
          </p>
        </div>
      </section>

    </main>
  )
}