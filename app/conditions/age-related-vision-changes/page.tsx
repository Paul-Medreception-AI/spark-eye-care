import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Age-Related Vision Changes Treatment in Kyle | Spark Eye Care',
  description: 'Expert treatment for age-related vision changes in Kyle. Board-certified eye care specialists offering comprehensive diagnosis, treatment plans, and ongoing support for presbyopia, cataracts, and age-related conditions.',
  keywords: 'age-related vision changes treatment Kyle, presbyopia Kyle, age-related eye conditions, vision changes over 40, eye care Kyle TX',
  openGraph: {
    title: 'Age-Related Vision Changes Treatment in Kyle | Spark Eye Care',
    description: 'Expert treatment for age-related vision changes in Kyle. Comprehensive care for presbyopia, cataracts, and vision decline.',
    url: 'https://www.sparkeyetx.com/conditions/age-related-vision-changes',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function AgeRelatedVisionChangesPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Age-Related Vision Changes</span>
          </nav>
          
          <h1 className="font-serif text-5xl font-light mb-6 leading-tight" style={{fontFamily: 'Cormorant'}}>
            Age-Related Vision Changes Treatment in Kyle
          </h1>
          
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            As we age, our eyes undergo natural changes that can affect vision quality and daily function. At Spark Eye Care, we provide comprehensive diagnosis and treatment for age-related vision conditions, helping you maintain clarity, comfort, and independence throughout your life.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/age-related-vision.jpg"
                alt="Elderly patient reading with age-related vision"
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
          <h2 className="font-serif text-4xl mb-8 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant'}}>
            Understanding Age-Related Vision Changes
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Age-related vision changes encompass a spectrum of conditions that naturally occur as our eyes mature. These include presbyopia (difficulty focusing on close objects), reduced contrast sensitivity, decreased night vision, changes in color perception, and early stages of conditions like cataracts and age-related macular degeneration. According to the National Eye Institute, nearly everyone over age 40 experiences some degree of age-related vision change, with presbyopia alone affecting over 128 million Americans. These changes can significantly impact daily activities such as reading, driving, using digital devices, and recognizing faces, affecting both quality of life and independence.
            </p>
            
            <p>
              The primary causes of age-related vision changes involve structural and physiological modifications to the eye. The lens becomes less flexible and thickens over time, making it harder for the focusing muscles to adjust for near vision—the hallmark of presbyopia. The pupil becomes smaller and less responsive to light, reducing the amount of light reaching the retina and affecting night vision. The vitreous gel inside the eye liquefies, sometimes causing floaters. Risk factors include genetics, prolonged UV exposure without protection, smoking, diabetes, hypertension, certain medications, and nutritional deficiencies. Environmental factors such as extended screen time and poor lighting can accelerate symptoms and make age-related changes more noticeable.
            </p>
            
            <p>
              Professional eye care is essential for managing age-related vision changes effectively and distinguishing normal aging from serious conditions requiring intervention. While some age-related changes are inevitable, many can be corrected with proper optical solutions, lifestyle modifications, and medical treatments. Regular comprehensive eye examinations allow early detection of conditions like glaucoma, macular degeneration, and diabetic retinopathy, which often develop without symptoms but can lead to permanent vision loss if untreated. At Spark Eye Care, our experienced team provides thorough assessments, personalized treatment plans, and ongoing monitoring to preserve your vision and maintain your quality of life as you age. Early intervention not only improves current vision but helps prevent or slow the progression of age-related eye diseases.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Signs & Symptoms of Age-Related Vision Changes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Visual & Functional Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Reading Small Print:</span>
                    <span className="text-[var(--color-muted)]"> Holding books, menus, or phones at arm's length to see text clearly, especially in normal lighting conditions.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Reduced Night Vision:</span>
                    <span className="text-[var(--color-muted)]"> Struggling to see in dim lighting or while driving at night, with increased sensitivity to glare from headlights.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Blurred Near Vision:</span>
                    <span className="text-[var(--color-muted)]"> Difficulty focusing on close-up tasks like threading needles, reading labels, or working on detailed projects.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Decreased Contrast Sensitivity:</span>
                    <span className="text-[var(--color-muted)]"> Trouble distinguishing between similar colors or seeing objects against similar-colored backgrounds.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Slower Focus Adjustment:</span>
                    <span className="text-[var(--color-muted)]"> Taking longer for eyes to adjust when moving between different lighting conditions or distances.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Floaters and Light Flashes:</span>
                    <span className="text-[var(--color-muted)]"> Seeing spots, cobwebs, or flashes of light, particularly when looking at bright backgrounds.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Increased Glare Sensitivity:</span>
                    <span className="text-[var(--color-muted)]"> Experiencing discomfort or vision problems in bright sunlight or around bright indoor lights.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Physical & Daily Life Impact</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Eye Strain and Fatigue:</span>
                    <span className="text-[var(--color-muted)]"> Experiencing tired, achy eyes after reading, computer work, or other visual tasks that used to be comfortable.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Frequent Headaches:</span>
                    <span className="text-[var(--color-muted)]"> Developing headaches during or after activities requiring close focus, often around the temples or forehead.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Dry or Watery Eyes:</span>
                    <span className="text-[var(--color-muted)]"> Experiencing insufficient tear production causing dryness, or paradoxically, excessive tearing as a reflex response.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Avoidance of Visual Activities:</span>
                    <span className="text-[var(--color-muted)]"> Reducing time spent reading, crafting, or using computers due to visual discomfort or difficulty.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty with Digital Devices:</span>
                    <span className="text-[var(--color-muted)]"> Struggling to see text on smartphones, tablets, or computer screens at normal distances.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Need for Brighter Lighting:</span>
                    <span className="text-[var(--color-muted)]"> Requiring significantly more light for reading and tasks than you did when younger.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Colors Appearing Faded:</span>
                    <span className="text-[var(--color-muted)]"> Noticing that colors seem less vibrant or have a yellowish tinge, especially blues and purples.</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Balance and Coordination Issues:</span>
                    <span className="text-[var(--color-muted)]"> Experiencing difficulty with depth perception affecting activities like descending stairs or judging distances.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes and can help maintain your visual independence and quality of life for years to come.
          </p>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-16 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            How We Treat Age-Related Vision Changes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough eye examination including visual acuity testing, refraction, dilated fundus examination, tonometry for glaucoma screening, and advanced imaging when needed. Our assessment evaluates not just your current vision but also screens for age-related diseases like macular degeneration, cataracts, and glaucoma. We take time to understand how vision changes are affecting your daily life and what activities are most important to you.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your specific findings, we develop a customized treatment approach that may include prescription eyeglasses for presbyopia (including progressive, bifocal, or reading glasses), contact lens options (including multifocal or monovision designs), recommendations for nutritional supplements to support eye health, and lifestyle modifications. We explain all options clearly, discussing the benefits and considerations of each approach so you can make informed decisions about your vision care.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Monitoring & Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Age-related vision changes are progressive, so we establish a regular monitoring schedule to track changes and adjust treatments as needed. Annual comprehensive exams allow us to detect and address new developments early. We monitor for progression of conditions like cataracts and evaluate whether surgical intervention may eventually benefit you. Our team remains available to address concerns between scheduled visits and to optimize your vision as your needs evolve over time.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Our evidence-based approach to treating age-related vision changes incorporates the latest research and clinical guidelines from organizations like the American Academy of Ophthalmology and the American Optometric Association. For presbyopia, we offer a full range of corrective options including single-vision reading glasses for occasional use, progressive addition lenses for seamless vision at all distances, and specialty contact lenses designed for aging eyes. We may recommend blue-light filtering lenses for digital device users and photochromic lenses for light sensitivity.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              Beyond optical correction, we provide guidance on protecting and preserving your vision through lifestyle measures. This includes recommendations for AREDS2 formula nutritional supplements when appropriate for macular degeneration risk, strategies to reduce eye strain from digital devices, proper lighting recommendations for reading and tasks, UV protection through quality sunglasses, management of dry eye symptoms, and control of systemic conditions like diabetes and hypertension that affect eye health. When more advanced interventions are needed—such as cataract surgery, treatment for glaucoma, or management of retinal conditions—we coordinate with trusted surgical specialists while continuing to provide your primary eye care.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Why Choose Spark Eye Care for Age-Related Vision Changes Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our experienced eye care professionals have extensive training in diagnosing and managing age-related vision conditions, staying current with the latest research and treatment advances.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's vision needs and lifestyle are unique, tailoring our treatment recommendations to your specific activities, preferences, and goals for visual function.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Advanced Technology</h3>
              <p className="text-[var(--color-muted)]">
                We utilize state-of-the-art diagnostic equipment including digital retinal imaging, OCT scanning, and advanced refraction technology to provide the most accurate assessments and optimal outcomes.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-6 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Comprehensive Long-Term Care</h3>
              <p className="text-[var(--color-muted)]">
                We build lasting relationships with our patients, providing continuity of care as your vision needs change over the years and coordinating with specialists when advanced treatment is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Your Treatment Journey
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-serif text-2xl" style={{fontFamily: 'Cormorant'}}>
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive eye examination typically takes 60-90 minutes and includes a detailed medical history, visual acuity testing, refraction to determine your precise prescription, eye pressure measurement, dilated examination of the internal eye structures, and any necessary imaging studies. We'll discuss your symptoms, how they're affecting your daily activities, and answer all your questions. You'll leave with a clear understanding of what's happening with your vision and our recommended treatment approach. If prescription eyewear is needed, we can often have glasses ready within 7-10 days.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-serif text-2xl" style={{fontFamily: 'Cormorant'}}>
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Implementation (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your glasses or contact lenses are ready, we'll ensure they fit properly and provide clear, comfortable vision. We take time to educate you on proper use—for example, how to adapt to progressive lenses or the correct technique for inserting multifocal contacts. For first-time presbyopia patients, there's typically a brief adjustment period of a few days to a week as your brain adapts to the new visual experience. We'll provide tips for maximizing your success and comfort during this transition. We remain available to address any concerns and make adjustments if needed to optimize your visual clarity and comfort.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-serif text-2xl" style={{fontFamily: 'Cormorant'}}>
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Follow-Up Assessment (Month 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We schedule a follow-up visit to ensure your treatment is working well and you're satisfied with your vision. This is an opportunity to fine-tune your prescription if needed, address any adaptation challenges, and answer questions that may have arisen. For contact lens wearers, we verify that lenses are fitting properly and eye health remains good. We'll also review proper care and maintenance of your eyewear and discuss any lifestyle changes or additional visual needs that have emerged. This check-in ensures you're getting the maximum benefit from your vision correction.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-serif text-2xl" style={{fontFamily: 'Cormorant'}}>
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-Term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Age-related vision changes are progressive, so we recommend annual comprehensive eye examinations to monitor your vision and eye health. As presbyopia advances in your 40s and 50s, prescription adjustments may be needed every 1-2 years. We also monitor for development or progression of other age-related conditions such as cataracts, glaucoma, and macular degeneration. When changes occur, we update your treatment plan accordingly—whether that means a new prescription, different lens design, or referral for specialized treatment. Our goal is to keep you seeing clearly and comfortably throughout your life, maintaining your independence and quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Frequently Asked Questions About Age-Related Vision Changes
          </h2>
          
          <div className="space-y-4">
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                At what age do vision changes typically begin?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most people begin noticing age-related vision changes in their early to mid-40s, with presbyopia (difficulty focusing on close objects) being the most common first sign. This happens because the lens inside the eye gradually loses flexibility, making it harder for the focusing muscles to adjust for near vision. The timing can vary based on genetics, occupation, and whether you're nearsighted or farsighted. Some people notice changes as early as their late 30s, while others may not experience significant symptoms until their late 40s or early 50s. Other age-related changes like decreased night vision, reduced contrast sensitivity, and dry eyes often become more noticeable in the 50s and 60s. Regular eye exams starting in your 40s help detect and address these changes early.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Will I need reading glasses for the rest of my life?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Once presbyopia develops, some form of near vision correction is typically needed for life, though the specific solution may change over time. Reading glasses, bifocals, progressive lenses, or multifocal contact lenses can all provide excellent near vision. Presbyopia gradually progresses through your 40s and 50s, stabilizing around age 60-65, so you may need stronger prescriptions during those years. Some people eventually develop cataracts, and modern cataract surgery with premium intraocular lenses can reduce or eliminate the need for reading glasses afterward. There are also newer options like corneal inlays or laser procedures for presbyopia correction, though these aren't suitable for everyone. The good news is that with today's advanced lens technologies and options, we can almost always find a solution that fits your lifestyle and provides clear, comfortable vision at all distances.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can anything slow or prevent age-related vision changes?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                While you can't prevent the natural aging of the eye's structures that causes presbyopia, you can take steps to protect your overall eye health and potentially slow the progression of certain age-related conditions. Wearing quality UV-protective sunglasses reduces cumulative sun damage that contributes to cataracts and macular degeneration. A diet rich in leafy greens, colorful vegetables, and omega-3 fatty acids supports retinal health. Not smoking (or quitting) significantly reduces risk of macular degeneration and cataracts. Managing systemic conditions like diabetes, high blood pressure, and high cholesterol protects the blood vessels in your eyes. Taking AREDS2 formula supplements may slow macular degeneration progression in those at risk. Regular comprehensive eye exams allow early detection and treatment of conditions like glaucoma before vision loss occurs. While we can't stop the aging process, these measures help preserve your vision and maintain eye health as you age.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Does insurance cover treatment for age-related vision changes?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans cover the comprehensive eye examination portion of your visit, especially if you have symptoms or conditions that need medical evaluation and monitoring. The exam allows us to check for diseases like glaucoma, cataracts, and macular degeneration. However, the refraction (determining your glasses prescription) and eyewear itself are typically covered by vision insurance rather than medical insurance. Many vision insurance plans provide coverage for annual eye exams and allowances toward glasses or contact lenses. If you have both medical and vision insurance, we'll bill appropriately to maximize your benefits. For patients without vision insurance, we offer competitive pricing on comprehensive exams and a wide selection of affordable eyewear options. We're always happy to verify your specific coverage and provide cost estimates before your visit so there are no surprises.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                How do I know if my vision changes are normal aging or something serious?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                This is exactly why comprehensive eye examinations are so important—many serious eye conditions develop without obvious symptoms in their early stages. Normal age-related changes like presbyopia develop gradually over months to years and affect both eyes similarly. Warning signs that warrant prompt evaluation include sudden vision loss or blurriness in one or both eyes, new floaters or flashes of light (especially if numerous or persistent), curtain or shadow blocking part of your vision, significant distortion where straight lines appear wavy, loss of peripheral vision, eye pain or redness, halos around lights, or sudden onset of double vision. These symptoms could indicate serious conditions like retinal detachment, macular degeneration, stroke, or acute glaucoma. Even without alarming symptoms, adults over 40 should have comprehensive eye exams every 1-2 years, and annually after age 60 or if you have risk factors like diabetes, high blood pressure, or family history of eye disease. Our thorough examination can distinguish normal aging from conditions requiring treatment.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can I have a telehealth consultation for vision changes?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                While telehealth can be useful for certain follow-up visits and discussions about symptoms, diagnosing and treating age-related vision changes requires an in-person comprehensive eye examination. We need specialized equipment to measure your visual acuity accurately, determine your precise prescription through refraction, examine the internal structures of your eye with dilation, measure eye pressure, and perform imaging studies when indicated. These cannot be done remotely. However, telehealth visits can be helpful for initial consultations to discuss your symptoms and determine urgency, follow-up discussions about test results or treatment adjustments if you've been recently examined, medication management for certain eye conditions, or addressing concerns between regular visits. For new symptoms or changes in vision, we'll typically recommend scheduling an in-person examination to ensure we can thoroughly evaluate your eye health and provide the most accurate diagnosis and treatment recommendations.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS SECTION */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant'}}>
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/cataracts" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Cataracts
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Clouding of the eye's natural lens causing blurred vision, glare, and color changes, typically developing gradually with age.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </a>
            
            <a href="/conditions/dry-eye-syndrome" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Dry Eye Syndrome
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Insufficient tear production or poor tear quality causing discomfort, burning, and vision fluctuations, often worsening with age.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </a>
            
            <a href="/conditions/glaucoma" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Glaucoma
              </h4>
              <p className="text-[var(--color-muted)] mb-4">
                Progressive optic nerve damage often related to elevated eye pressure, which can lead to permanent vision loss if untreated.
              </p>
              <span className="text-[var(--color-primary)] font-semibold group-hover:underline">
                Learn more →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Get Help for Age-Related Vision Changes Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face age-related vision changes alone. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule Your Consultation
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}