import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cataracts Treatment in Kyle | Spark Eye Care',
  description: 'Expert cataracts treatment in Kyle. Board-certified ophthalmology care for cataracts with advanced surgical options and personalized treatment plans.',
  keywords: 'cataracts treatment Kyle, cataract surgery Kyle, eye doctor Kyle, ophthalmologist Kyle, cataract removal',
  openGraph: {
    title: 'Cataracts Treatment in Kyle | Spark Eye Care',
    description: 'Expert cataracts treatment in Kyle. Board-certified ophthalmology care for cataracts with advanced surgical options.',
    url: 'https://sparkeyetx.com/conditions/cataracts',
  }
}

export default function CataractsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>          <nav className="text-sm mb-8 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/conditions" className="hover:underline">Conditions</Link>
            <span className="mx-2">›</span>
            <span>Cataracts</span>
          </nav>
          
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Cataracts Treatment in Kyle
          </h1>
          
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
            Cataracts are one of the most common age-related eye conditions, causing cloudy vision and difficulty with daily activities. At Spark Eye Care, we offer comprehensive evaluation and advanced surgical treatment options to restore your clear vision and improve your quality of life.
          </p>
            </div>
            <div className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto md:ml-auto md:mr-0">
              <Image
                src="/images/2748701.jpeg"
                alt="Cataract surgery consultation with Dr. Plummer"
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
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Cataracts
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              A cataract is a clouding of the natural lens inside your eye, which lies behind the iris and pupil. This lens works much like a camera lens, focusing light onto the retina at the back of the eye to produce clear, sharp images. When cataracts develop, the lens becomes progressively more opaque, causing vision to become blurry, hazy, or less colorful. Cataracts are extremely common, affecting more than half of all Americans by age 80, and are the leading cause of vision loss in people over age 40 worldwide. While cataracts typically develop slowly over many years, they can significantly impact your ability to read, drive safely at night, recognize faces, and perform everyday tasks that require clear vision. The condition affects millions of people annually, but fortunately, cataract surgery is one of the most successful and commonly performed surgical procedures in modern medicine.
            </p>
            
            <p>
              Cataracts develop for various reasons, though aging remains the primary cause. As we grow older, proteins in the eye's lens begin to break down and clump together, creating the characteristic cloudy areas that define cataracts. Beyond natural aging, several risk factors can accelerate cataract formation or increase your likelihood of developing them earlier in life. These include prolonged exposure to ultraviolet sunlight without proper eye protection, smoking and excessive alcohol consumption, diabetes and other metabolic disorders, high blood pressure, previous eye injuries or inflammation, prolonged use of corticosteroid medications, and family history of early cataracts. Certain congenital conditions can cause cataracts to appear at birth or during childhood, and radiation exposure can also contribute to their development. Understanding these risk factors is crucial because while some cannot be controlled, many lifestyle modifications can help delay the onset or slow the progression of cataracts.
            </p>
            
            <p>
              Professional evaluation and treatment of cataracts is essential for maintaining your vision and quality of life. Many people mistakenly believe that cataracts must "ripen" or become severe before treatment is necessary, but modern ophthalmology takes a more personalized approach based on how the condition affects your daily life. During comprehensive eye examinations at Spark Eye Care, we carefully assess the extent of your cataracts, measure how they impact your vision, and discuss your symptoms and lifestyle needs. Early detection allows us to monitor progression and plan treatment at the optimal time for you. When cataracts begin to interfere with activities you enjoy or need to perform, surgical removal becomes the recommended option. Today's advanced cataract surgery techniques are safer and more effective than ever, typically performed as an outpatient procedure with rapid recovery times. The surgery involves removing the clouded natural lens and replacing it with a clear artificial intraocular lens (IOL) customized to your vision needs. Delaying necessary treatment can lead to increased difficulty with the procedure and prolonged vision impairment that affects your independence, safety, and overall wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Cataracts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Visual Symptoms */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Visual Changes</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Cloudy or Blurry Vision</p>
                  <p className="text-gray-600">Progressive haziness that makes everything appear foggy or less distinct, similar to looking through a frosted window.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Difficulty with Night Vision</p>
                  <p className="text-gray-600">Increased trouble seeing in dim lighting or at night, making evening driving particularly challenging and unsafe.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Sensitivity to Light and Glare</p>
                  <p className="text-gray-600">Bright lights, sunlight, or oncoming headlights cause excessive glare or discomfort, often with halos around light sources.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Fading or Yellowing of Colors</p>
                  <p className="text-gray-600">Colors appear less vibrant, washed out, or take on a yellowish tint, affecting your ability to distinguish similar shades.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Double Vision in One Eye</p>
                  <p className="text-gray-600">Seeing multiple images from a single eye (monocular diplopia), which may disappear as the cataract progresses.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Frequent Prescription Changes</p>
                  <p className="text-gray-600">Needing new eyeglass or contact lens prescriptions more often as the cataract causes progressive changes to your vision.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Poor Contrast Sensitivity</p>
                  <p className="text-gray-600">Difficulty distinguishing objects from their background or seeing in conditions with similar tones and minimal contrast.</p>
                </div>
              </div>
            </div>

            {/* Functional Impact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Daily Life Impact</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Difficulty Reading</p>
                  <p className="text-gray-600">Struggling to read books, newspapers, menus, or digital screens even with adequate lighting and corrective lenses.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Problems with Driving</p>
                  <p className="text-gray-600">Reduced confidence or ability to drive safely, especially at night, in rain, or in bright sunlight due to compromised vision.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Trouble Recognizing Faces</p>
                  <p className="text-gray-600">Finding it harder to identify familiar people, especially from a distance or in less-than-ideal lighting conditions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Challenges with Hobbies</p>
                  <p className="text-gray-600">Activities requiring detailed vision like sewing, crafts, golf, or watching television become frustrating or impossible.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Increased Fall Risk</p>
                  <p className="text-gray-600">Greater likelihood of tripping, missing steps, or falling due to impaired depth perception and reduced visual clarity.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Need for Brighter Light</p>
                  <p className="text-gray-600">Requiring increasingly bright illumination for reading, cooking, or other tasks that were previously manageable in normal lighting.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">Reduced Independence</p>
                  <p className="text-gray-600">Growing reliance on others for activities like shopping, managing medications, or navigating unfamiliar environments.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Cataract surgery can dramatically restore your vision and quality of life, allowing you to return to the activities you love with renewed clarity and confidence.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Cataracts
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Comprehensive Assessment</h3>
              <p className="text-gray-700 leading-relaxed">
                Your journey begins with a thorough eye examination including visual acuity testing, dilated eye exam to evaluate the cataract's location and density, and measurements of your eye's shape and size for surgical planning. We use advanced diagnostic technology to precisely map your eye's anatomy and determine the optimal approach. Our team takes time to understand how cataracts affect your daily life and what visual goals matter most to you after surgery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Personalized Surgical Plan</h3>
              <p className="text-gray-700 leading-relaxed">
                Based on your assessment, we develop a customized surgical strategy tailored to your unique needs. We discuss the types of intraocular lenses available, including standard monofocal lenses for distance vision, toric lenses for astigmatism correction, and premium multifocal or accommodating lenses for reduced dependence on glasses. Our surgeons explain the procedure, answer all your questions, and ensure you feel confident and prepared. We coordinate pre-operative testing and provide detailed instructions for the day of surgery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Post-Operative Care</h3>
              <p className="text-gray-700 leading-relaxed">
                After your outpatient cataract surgery, we provide comprehensive follow-up care to ensure optimal healing and visual outcomes. You'll receive prescription eye drops to prevent infection and reduce inflammation, along with clear instructions for their use. We schedule follow-up appointments the day after surgery, then at one week, one month, and as needed to monitor your recovery. Most patients notice dramatic vision improvement within days, with full healing over several weeks. We address any concerns promptly and help you adapt to your restored vision.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Spark Eye Care, we utilize the latest phacoemulsification technique for cataract surgery, which involves making a tiny incision through which ultrasound energy gently breaks up and removes the clouded lens. This minimally invasive approach typically requires no stitches and offers rapid recovery with excellent visual outcomes. We then implant a carefully selected intraocular lens (IOL) to replace your natural lens, chosen based on your lifestyle needs and visual goals. The procedure is performed under local anesthesia with sedation for your comfort and typically takes less than 30 minutes per eye. Our experienced surgical team has performed thousands of successful cataract surgeries, and we use state-of-the-art equipment and techniques to ensure the safest, most precise treatment possible. Many patients are amazed at how quickly they can return to normal activities with dramatically improved vision.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Cataracts Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Board-Certified Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Our ophthalmologists are board-certified with specialized training in advanced cataract surgery techniques and the latest intraocular lens technologies. With years of experience and thousands of successful procedures, our surgical team brings expertise and precision to every case, ensuring you receive the highest standard of care throughout your treatment journey.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Personalized Treatment Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                We recognize that every patient has unique visual needs, lifestyle requirements, and concerns about surgery. Our team takes time to understand your individual situation, explain all available lens options in detail, and develop a surgical plan aligned with your personal goals. From your first consultation through recovery, you'll receive attentive, individualized care focused on achieving the best possible outcomes for your specific needs.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Advanced Technology & Techniques</h3>
              <p className="text-gray-700 leading-relaxed">
                Our practice invests in the latest diagnostic equipment and surgical technology to provide the most precise, effective treatment available. From computerized measurements that map your eye's unique characteristics to modern phacoemulsification systems that enable gentler, faster surgery with superior outcomes, we use cutting-edge tools to enhance safety and results. We also offer premium lens options including multifocal and toric IOLs for enhanced vision correction.
              </p>
            </div>

            <div className="border border-[var(--color-border)] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Pre & Post-Operative Care</h3>
              <p className="text-gray-700 leading-relaxed">
                Successful cataract surgery extends beyond the procedure itself, which is why we emphasize thorough preparation and attentive follow-up care. Our team guides you through every step, from pre-operative education and testing to detailed post-surgical instructions and multiple follow-up visits. We're available to address questions or concerns throughout your recovery, ensuring you feel supported and confident as you experience the life-changing improvement in your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Initial Evaluation & Planning</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Timeline: First Visit</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Your journey begins with a comprehensive eye examination where we thoroughly assess your cataracts, measure your eyes for lens selection, and discuss your visual goals and lifestyle needs. We'll review your medical history, perform detailed imaging and measurements, and explain your surgical options including different types of intraocular lenses. You'll leave with a clear understanding of the procedure, what to expect, and a timeline for moving forward. This appointment typically takes 60-90 minutes and involves pupil dilation, so plan to have someone drive you home.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Pre-Operative Preparation</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Timeline: 1-2 Weeks Before Surgery</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Once you decide to proceed with surgery, we'll schedule your procedure date and provide detailed pre-operative instructions. You may need additional measurements or tests, and we'll coordinate any necessary medical clearance with your primary care physician if you have other health conditions. We'll prescribe pre-operative eye drops and provide written instructions about medications, eating and drinking guidelines, and what to bring on surgery day. Our team remains available to answer any last-minute questions and help ease any nervousness you may feel.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Surgery Day & Immediate Recovery</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Timeline: Surgery Day & Following 24 Hours</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  On the day of surgery, you'll spend approximately 2-3 hours at our surgical facility, though the actual procedure takes only 15-30 minutes per eye. You'll receive numbing drops and light sedation for comfort, and you'll be awake but relaxed throughout. Most patients experience minimal discomfort during and after the procedure. You'll go home the same day with a protective shield over your eye and instructions for using your post-operative eye drops. Many patients notice improved vision immediately, though it's normal for things to appear somewhat cloudy or hazy for the first few hours. We'll see you the next day for your first post-operative check-up to ensure everything is healing properly.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Recovery & Vision Stabilization</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Timeline: First 4-6 Weeks</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Your vision will continue to improve dramatically over the first week as your eye heals and adjusts to the new intraocular lens. Most patients can resume normal daily activities within a few days, though you'll need to avoid heavy lifting, swimming, and rubbing your eyes for a few weeks. You'll continue using prescribed eye drops to prevent infection and reduce inflammation, and we'll see you for follow-up visits at one week and one month to monitor your healing and ensure optimal visual outcomes. By four to six weeks, your vision should be stable, and if needed, we can prescribe any fine-tuning glasses for specific tasks, though many patients find they need glasses far less than before surgery.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">05</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Long-Term Eye Health Maintenance</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Timeline: Ongoing</strong>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  After your cataract surgery is complete and your eyes have fully healed, we'll establish a schedule for regular comprehensive eye exams to monitor your overall eye health. While cataracts cannot return once removed, some patients develop posterior capsule opacification (PCO), a clouding of the membrane behind the lens implant, which can be quickly and painlessly treated with a laser procedure if needed. We'll continue to screen for other age-related eye conditions like glaucoma and macular degeneration. Most patients experience years of clear, comfortable vision after cataract surgery and express regret only that they didn't have the procedure sooner. You can expect a significant improvement in your quality of life and ability to enjoy activities that cataracts had made difficult.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Cataracts
          </h2>
          
          <div className="space-y-6">
            <details className="group border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How long does cataract surgery and recovery take?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The cataract surgery procedure itself typically takes only 15-30 minutes per eye. However, you'll spend approximately 2-3 hours at the surgical facility for pre-operative preparation and post-operative observation. Most patients notice significant vision improvement within 24-48 hours, with continued enhancement over the first week. While you can resume most normal activities within a few days, complete healing takes about 4-6 weeks. Most people return to work within 2-3 days, though this depends on your job's physical demands. We typically wait 1-2 weeks between surgeries if both eyes need treatment, allowing the first eye to heal and stabilize before addressing the second eye.
              </p>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Is cataract surgery painful?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Cataract surgery is not painful. We use numbing eye drops and light sedation to ensure your comfort throughout the procedure. You'll be awake but very relaxed, and while you may feel slight pressure or see lights during surgery, you should not experience pain. After surgery, some patients report mild discomfort, scratchiness, or a foreign body sensation for the first day or two, but this is typically manageable with over-the-counter pain relievers if needed. Most patients describe their experience as far easier and less uncomfortable than they anticipated. Your eye may be slightly red or irritated during the first week of healing, but serious pain is uncommon and should be reported to us immediately as it could indicate a complication requiring prompt attention.
              </p>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Does insurance cover cataract surgery?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes, cataract surgery is considered medically necessary and is typically covered by Medicare, Medicaid, and most private insurance plans when cataracts significantly impair your vision and daily functioning. Coverage includes the surgical procedure, standard monofocal intraocular lens implants, and related pre- and post-operative care. However, if you choose premium lens options like multifocal, accommodating, or toric lenses that reduce dependence on glasses or correct astigmatism, you may need to pay an additional out-of-pocket fee for the upgraded lens technology, as insurance typically covers only standard lenses. Our billing specialists will verify your specific insurance benefits, explain what's covered, discuss any potential out-of-pocket costs, and work with you to understand your financial responsibility before scheduling surgery.
              </p>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                When should I have cataract surgery? Do cataracts need to be "ripe"?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                This is an outdated concept from decades past. Modern cataract surgery does not require waiting until cataracts are "ripe" or severely advanced. In fact, earlier surgery is often safer and easier with better outcomes. The right time for surgery is when cataracts begin interfering with your quality of life and ability to perform daily activities you need or enjoy, whether that's driving, reading, working, or pursuing hobbies. If you're struggling with glare, difficulty reading despite updated glasses, problems with night driving, or frustration with visual limitations, it's worth discussing surgery. Waiting too long can allow cataracts to become extremely dense, making surgery more challenging and increasing complication risks. Today's approach is patient-centered: when cataracts bother you enough that you'd like clearer vision, it's an appropriate time to consider surgery.
              </p>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What if I have other eye conditions in addition to cataracts?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Many patients have coexisting eye conditions like glaucoma, macular degeneration, diabetic retinopathy, or corneal issues along with their cataracts. While these conditions can affect your expected visual outcome after cataract surgery, they don't necessarily prevent you from having the procedure. We carefully evaluate all aspects of your eye health during the pre-operative assessment and provide realistic expectations about your likely visual improvement. In some cases, treating cataracts can actually make it easier to monitor and manage other eye diseases. We may coordinate your care with retina specialists or glaucoma specialists if needed. Our goal is to optimize your vision to the greatest extent possible given your unique ocular health situation, and we'll have honest discussions about what improvements you can anticipate based on all factors affecting your eyes.
              </p>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md transition-shadow">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What are the different types of lens implants, and which is right for me?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Several types of intraocular lenses (IOLs) are available, each with different benefits. Standard monofocal lenses provide excellent distance vision and are covered by insurance, though you'll likely need reading glasses for close work. Multifocal or accommodating lenses can provide good vision at multiple distances, potentially reducing your dependence on glasses, but may cause some visual compromises like halos around lights at night. Toric lenses correct astigmatism, which standard lenses cannot address. Extended depth of focus (EDOF) lenses provide a continuous range of vision with fewer side effects than traditional multifocals. The best choice depends on your lifestyle, visual priorities, occupation, hobbies, budget, and whether you have astigmatism or other eye conditions. During your consultation, we'll discuss your daily visual needs and help you understand the trade-offs of each option so you can make an informed decision that aligns with your personal goals and expectations.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/conditions/glaucoma" className="group bg-white p-6 rounded-lg border border-[var(--color-border)] hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Glaucoma
              </h4>
              <p className="text-gray-600 mb-4">
                A group of eye conditions that damage the optic nerve, often caused by elevated intraocular pressure, which can lead to vision loss if untreated.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>

            <Link href="/conditions/age-related-macular-degeneration" className="group bg-white p-6 rounded-lg border border-[var(--color-border)] hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Macular Degeneration
              </h4>
              <p className="text-gray-600 mb-4">
                An age-related condition affecting the macula, causing central vision loss and difficulty with detailed tasks like reading and recognizing faces.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>

            <Link href="/conditions/diabetic-retinopathy" className="group bg-white p-6 rounded-lg border border-[var(--color-border)] hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Diabetic Retinopathy
              </h4>
              <p className="text-gray-600 mb-4">
                A diabetes complication affecting blood vessels in the retina, potentially causing vision impairment and blindness without proper management and treatment.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-4">
            Get Help for Cataracts Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            You don't have to live with cloudy vision. Our experienced team is ready to help you see clearly again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}