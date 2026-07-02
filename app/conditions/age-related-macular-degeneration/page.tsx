import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Age-Related Macular Degeneration Treatment in Kyle | Spark Eye Care',
  description: 'Expert Age-Related Macular Degeneration treatment in Kyle. Board-certified care for AMD with personalized treatment plans. Early intervention improves outcomes.',
  keywords: 'Age-Related Macular Degeneration treatment Kyle, AMD treatment Kyle, macular degeneration Kyle, retina specialist Kyle, vision loss treatment',
  openGraph: {
    title: 'Age-Related Macular Degeneration Treatment in Kyle | Spark Eye Care',
    description: 'Expert Age-Related Macular Degeneration treatment in Kyle. Board-certified care for AMD with personalized treatment plans.',
    url: 'https://sparkeyetx.com/conditions/age-related-macular-degeneration',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AgeRelatedMacularDegenerationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Age-Related Macular Degeneration</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6 leading-tight">
            Age-Related Macular Degeneration Treatment in Kyle
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
            Age-Related Macular Degeneration (AMD) is the leading cause of vision loss in adults over 50, affecting your ability to see fine details and recognize faces. At Spark Eye Care, we provide comprehensive AMD management with cutting-edge treatments designed to preserve your vision and maintain your quality of life.
          </p>
            </div>
            <div className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto md:ml-auto md:mr-0">
              <Image
                src="/images/conditions/macular-degeneration.jpg"
                alt="Central vision loss from macular degeneration"
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

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-ink)]">
            Understanding Age-Related Macular Degeneration
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Age-Related Macular Degeneration is a progressive eye condition affecting the macula, the central part of the retina responsible for sharp, detailed vision. AMD is remarkably common, affecting more than 11 million Americans, with that number expected to double by 2050 as our population ages. The condition manifests in two forms: dry AMD, which accounts for approximately 85-90% of cases and progresses slowly through the accumulation of drusen deposits, and wet AMD, a less common but more aggressive form characterized by abnormal blood vessel growth beneath the retina. While AMD rarely causes complete blindness, it significantly impacts central vision, making everyday tasks like reading, driving, recognizing faces, and viewing screens increasingly difficult. The emotional toll can be profound, as patients experience loss of independence, difficulty maintaining hobbies, and challenges with self-care activities that many of us take for granted.
            </p>
            <p>
              The development of AMD involves multiple interconnected factors that damage the delicate cells of the macula over time. Age is the most significant risk factor—your risk increases substantially after 60, though early changes can begin in your 50s. Genetics play a crucial role; having a family history of AMD increases your risk by three to six times. Smoking is the single most modifiable risk factor, doubling or even tripling your chances of developing AMD while also accelerating its progression. Other contributing factors include cardiovascular disease, high blood pressure, obesity, prolonged sun exposure without UV protection, and dietary patterns low in antioxidants and omega-3 fatty acids. Caucasians face higher risk than other ethnic groups, and women tend to be affected more frequently than men, partly due to longer life expectancy. The complex interaction of these factors means that AMD often develops gradually, with subtle changes in vision that patients may initially dismiss as normal aging.
            </p>
            <p>
              Professional treatment and monitoring are absolutely essential for AMD management because early intervention can dramatically slow disease progression and preserve functional vision for years or even decades. Without treatment, wet AMD can cause rapid and severe vision loss within months, while even dry AMD can progress to advanced stages called geographic atrophy, resulting in permanent central vision loss. Modern treatments for wet AMD—including anti-VEGF injections—have revolutionized outcomes, with many patients maintaining or even improving their vision when treatment begins promptly. For dry AMD, nutritional supplementation following the AREDS2 formula has been proven to reduce progression risk by approximately 25% in intermediate and advanced cases. Regular monitoring allows us to detect conversion from dry to wet AMD immediately, enabling intervention before irreversible damage occurs. Furthermore, low vision rehabilitation, lifestyle modifications, and emerging therapies offer hope and practical solutions for maintaining independence and quality of life throughout the disease course. At Spark Eye Care in Kyle, we're committed to providing the latest evidence-based treatments and personalized care plans that address your unique needs and vision goals.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Signs &amp; Symptoms of Age-Related Macular Degeneration
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Visual Changes</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Blurred Central Vision</span>
                    <p className="text-gray-600">Difficulty seeing fine details clearly, especially when reading or looking at faces directly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Distorted Vision (Metamorphopsia)</span>
                    <p className="text-gray-600">Straight lines appear wavy, bent, or irregular, particularly noticeable when viewing door frames or window blinds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Central Dark or Blank Spots</span>
                    <p className="text-gray-600">A shadowy area or empty spot in the center of your visual field that obscures what you're looking at directly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Decreased Color Brightness</span>
                    <p className="text-gray-600">Colors appear less vivid or washed out, making it harder to distinguish between similar shades.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Difficulty Adapting to Low Light</span>
                    <p className="text-gray-600">Increased trouble seeing in dimly lit environments or needing significantly brighter lighting for tasks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Reduced Contrast Sensitivity</span>
                    <p className="text-gray-600">Difficulty distinguishing objects from their background, making navigation and reading more challenging.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Slow Reading Speed</span>
                    <p className="text-gray-600">Taking longer to read text or needing to move closer to reading materials than before.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Functional &amp; Emotional Impact</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Difficulty Recognizing Faces</span>
                    <p className="text-gray-600">Unable to identify familiar people until they're very close or speak to you, causing social awkwardness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Driving Challenges</span>
                    <p className="text-gray-600">Trouble reading road signs, seeing traffic signals clearly, or judging distances while driving, especially at night.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Reading and Screen Difficulty</span>
                    <p className="text-gray-600">Struggling to read books, newspapers, medication labels, or see text on phones and computers clearly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Loss of Independence</span>
                    <p className="text-gray-600">Needing help with activities you previously managed alone, from cooking to managing finances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Anxiety About Vision Loss</span>
                    <p className="text-gray-600">Worry, fear, or depression about progressive vision decline and its impact on your future independence.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Abandoning Hobbies</span>
                    <p className="text-gray-600">Giving up activities you love like reading, crafts, gardening, or watching television due to visual limitations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Social Withdrawal</span>
                    <p className="text-gray-600">Avoiding social situations due to embarrassment about vision difficulties or difficulty navigating unfamiliar environments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Increased Fall Risk</span>
                    <p className="text-gray-600">Greater likelihood of tripping, bumping into objects, or missing steps due to reduced central vision clarity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Our team at Spark Eye Care specializes in preserving vision and maintaining your quality of life through comprehensive AMD management.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Age-Related Macular Degeneration
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-gray-700 leading-relaxed">
                Your journey begins with a thorough dilated eye examination including advanced imaging with Optical Coherence Tomography (OCT) to visualize retinal layers in microscopic detail. We perform fluorescein angiography when needed to detect abnormal blood vessel growth, assess your Amsler grid results to map visual distortions, and review your medical history, family history, and lifestyle factors. This comprehensive evaluation allows us to accurately stage your AMD, differentiate between dry and wet forms, and identify any early signs of conversion that require immediate intervention.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-gray-700 leading-relaxed">
                Based on your specific type and stage of AMD, we develop a customized treatment strategy tailored to your needs and goals. Your plan addresses your specific AMD type, incorporates your overall health status and other medical conditions, considers your lifestyle and daily visual demands, and sets realistic expectations for vision preservation. We discuss all available treatment options, explain the evidence behind each approach, and collaborate with you to choose the path that aligns with your values and circumstances.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Monitoring &amp; Support</h3>
              <p className="text-gray-700 leading-relaxed">
                AMD requires consistent monitoring to detect changes early and adjust treatment as needed. We schedule regular follow-up appointments based on your disease stage and treatment plan, provide home monitoring tools like Amsler grids with clear instructions on when to call, track your response to treatments with repeat imaging studies, and modify your care plan as your condition evolves. Our team remains accessible for urgent concerns, ensures continuity of care, and connects you with low vision rehabilitation services when beneficial to maximize your remaining vision and maintain independence.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              <strong className="text-[var(--color-dark)]">Evidence-Based Treatments We Provide:</strong> For wet AMD, we offer anti-VEGF intravitreal injections using medications like Avastin, Lucentis, and Eylea, which block the growth factor responsible for abnormal blood vessel formation. These injections have revolutionized wet AMD treatment, with studies showing that many patients maintain or improve vision when treatment begins promptly and continues regularly. The injection procedure is performed in-office under local anesthesia and takes just minutes, with most patients experiencing minimal discomfort.
            </p>
            <p>
              For dry AMD, we prescribe AREDS2 vitamin supplementation—a specific formulation of vitamins C and E, zinc, copper, lutein, and zeaxanthin proven to reduce progression risk by approximately 25% in intermediate and advanced cases. We provide detailed nutritional counseling emphasizing leafy green vegetables, omega-3 fatty acids from fish, and colorful fruits high in antioxidants. For patients with advanced dry AMD and geographic atrophy, we stay current with emerging therapies and clinical trials that may offer new hope. Additionally, we prescribe specialized optical aids, refer to low vision specialists for rehabilitation, and provide practical strategies for adapting your environment—brighter lighting, high-contrast markings, magnification devices, and accessible technology—to help you maintain independence and continue enjoying daily activities despite vision changes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Age-Related Macular Degeneration Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-gray-600">
                Our providers are board-certified with specialized training in retinal diseases and AMD management, ensuring you receive the highest standard of care based on the latest clinical evidence.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Care Plans</h3>
              <p className="text-gray-600">
                We recognize that every patient's AMD journey is unique, taking time to understand your lifestyle, concerns, and goals to create a treatment approach tailored specifically to you.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Advanced Technology</h3>
              <p className="text-gray-600">
                Our practice utilizes state-of-the-art diagnostic imaging including OCT and angiography, enabling early detection of changes and precise treatment monitoring for optimal outcomes.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Convenient Access</h3>
              <p className="text-gray-600">
                Located in Kyle with flexible scheduling and telehealth options for follow-up consultations, we make ongoing AMD management accessible and convenient for busy lives.
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
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">1</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your initial comprehensive examination includes detailed medical history, dilated retinal examination, OCT imaging, and visual function testing. We'll determine your AMD type and stage, explain your diagnosis clearly, discuss all treatment options, and answer your questions. Most patients leave this appointment with a clear understanding of their condition and a defined treatment plan. For those requiring injections, we can often schedule your first treatment within days if needed urgently.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">2</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-8)</h3>
                <p className="text-gray-700 leading-relaxed">
                  For wet AMD patients, treatment typically begins with a loading phase of monthly anti-VEGF injections for the first three months to maximize visual benefit. For dry AMD, you'll start AREDS2 supplementation and implement lifestyle modifications including dietary changes, smoking cessation support if needed, and UV protection strategies. We provide home monitoring tools and education on warning signs that require immediate attention. This phase focuses on stabilizing your condition and establishing a foundation for long-term management.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">3</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-gray-700 leading-relaxed">
                  After the initial treatment phase, we conduct comprehensive reassessment with repeat imaging to evaluate your response. For wet AMD patients responding well to injections, we may adjust to a treat-and-extend protocol, gradually lengthening intervals between treatments while maintaining visual stability. We track vision changes, assess your comfort with home monitoring, address any concerns or side effects, and optimize your treatment schedule. This is when we fine-tune your individualized maintenance plan based on how your eyes are responding.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-cormorant text-5xl font-light text-[var(--color-primary)]">4</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-Term Management (Ongoing)</h3>
                <p className="text-gray-700 leading-relaxed">
                  AMD is a chronic condition requiring ongoing monitoring and management. Wet AMD patients typically continue with regular injections on a personalized schedule—some need monthly treatments, others can extend to every 8-12 weeks. Dry AMD patients continue supplementation and lifestyle modifications with monitoring every 6-12 months, or more frequently if progression occurs. We remain vigilant for conversion from dry to wet AMD, adjust treatment as your condition evolves, coordinate with low vision services when helpful, and provide continuous support. Our goal is preserving your functional vision and quality of life for years to come.
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
            Frequently Asked Questions About Age-Related Macular Degeneration
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                How long does AMD treatment take?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                AMD is a chronic, lifelong condition that requires ongoing management rather than a cure. For wet AMD, anti-VEGF injections typically begin with monthly treatments for the first three months (loading phase), then transition to a personalized schedule that may range from every 4 weeks to every 12 weeks depending on your response. Some patients need injections indefinitely to maintain vision stability, while others may experience periods of inactivity. Dry AMD management is continuous, with daily AREDS2 supplementation and lifestyle modifications, plus regular monitoring appointments every 6-12 months to watch for progression or conversion to wet AMD. The key to successful outcomes is consistency and long-term commitment to your treatment plan.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Are anti-VEGF injections painful?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                Most patients report that intravitreal injections are much more tolerable than they expected. Before each injection, we apply numbing drops and use a local anesthetic to ensure comfort. The injection itself takes just seconds, and while you may feel slight pressure, most patients experience minimal to no pain during the procedure. Afterward, your eye may feel mildly scratchy or irritated for a few hours, similar to having an eyelash in your eye, but this typically resolves quickly. Many patients are nervous before their first injection but feel reassured after experiencing how quick and relatively comfortable the process is. Our team takes every measure to ensure your comfort and will address any concerns you have about the procedure.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Does insurance cover AMD treatment?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                Yes, AMD treatment is generally covered by most insurance plans, including Medicare and private insurance, as it is considered medically necessary to prevent vision loss. Anti-VEGF injections for wet AMD are typically covered, though specific medication choices may depend on your plan's formulary. Diagnostic testing like OCT and fluorescein angiography are also usually covered when medically indicated. AREDS2 vitamin supplements are generally not covered by insurance and are an out-of-pocket expense, but they are available over-the-counter at reasonable cost. We recommend contacting your insurance provider to understand your specific coverage, copays, and any prior authorization requirements. Our billing team is happy to help verify your benefits and discuss financial concerns before beginning treatment.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can AMD lead to complete blindness?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                AMD rarely causes complete blindness. The disease affects the macula (central vision) while typically leaving peripheral vision intact, so patients with even advanced AMD can usually navigate their environment and maintain some level of independence. However, AMD can cause legal blindness, defined as visual acuity of 20/200 or worse in the better eye, which severely impacts quality of life by making activities like reading, driving, recognizing faces, and performing detailed tasks extremely difficult. This is precisely why early detection and consistent treatment are so critical. Modern treatments, especially anti-VEGF injections for wet AMD, have dramatically reduced rates of severe vision loss. When treatment begins promptly and continues regularly, many patients maintain functional vision for years or decades, allowing them to continue enjoying meaningful activities and independence.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                What if my vision doesn't improve with treatment?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                It's important to understand that the primary goal of AMD treatment is to stabilize vision and prevent further loss, rather than restore vision that's already been lost. Many patients do experience some visual improvement with anti-VEGF therapy, especially when treatment begins early, but stability is also a successful outcome. If your vision isn't responding as hoped, we have several options: switching to a different anti-VEGF medication, adjusting injection frequency, investigating other contributing factors like cataracts, or exploring combination therapies. For advanced AMD where central vision is significantly impaired, low vision rehabilitation becomes essential—we can connect you with specialists who provide training in adaptive strategies, prescribe magnification devices and assistive technology, and teach techniques to maximize your remaining vision. Our commitment to you extends beyond medical treatment to encompass comprehensive support for maintaining independence and quality of life.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] list-none flex justify-between items-center">
                Can I use telehealth for AMD follow-up appointments?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                Telehealth can be useful for certain aspects of AMD care, particularly for discussing test results, reviewing home monitoring findings, addressing concerns or questions, adjusting supplement regimens, and providing education and support between in-person visits. However, AMD management requires regular in-person examinations with dilated retinal exams and OCT imaging to properly monitor disease progression and treatment response. Anti-VEGF injections must be performed in-office. We often use a hybrid approach: in-person visits for comprehensive exams, imaging, and injections, supplemented by telehealth appointments for check-ins, symptom discussions, and care coordination between scheduled procedures. This approach maximizes convenience while ensuring you receive the thorough monitoring essential for optimal AMD management. We're happy to discuss how telehealth can fit into your individualized care plan.
              </div>
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
            <a href="/conditions/diabetic-retinopathy" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Diabetic Retinopathy
              </h4>
              <p className="text-gray-600 mb-4">
                Retinal damage from diabetes affecting blood vessels in the eye, requiring specialized monitoring and treatment to prevent vision loss.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="/conditions/glaucoma" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Glaucoma
              </h4>
              <p className="text-gray-600 mb-4">
                Progressive optic nerve damage often related to eye pressure, requiring early detection and treatment to preserve peripheral and central vision.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="/conditions/cataracts" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Cataracts
              </h4>
              <p className="text-gray-600 mb-4">
                Clouding of the eye's natural lens causing blurred vision, glare, and difficulty with daily activities, treatable with surgical intervention.
              </p>
              <span className="text-[var(--color-primary)] font-semibold inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Get Help for Age-Related Macular Degeneration Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            You don't have to face Age-Related Macular Degeneration alone. Our team is ready to help you preserve your vision and maintain your independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Schedule Your Consultation
            </a>
            <a
              href="/conditions"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-block"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}