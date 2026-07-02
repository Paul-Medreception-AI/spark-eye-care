import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diabetic Macular Edema Treatment in Kyle | Spark Eye Care',
  description: 'Expert diabetic macular edema treatment in Kyle, TX. Board-certified eye care specialists offering advanced therapies including anti-VEGF injections, laser treatment, and personalized management plans.',
  keywords: 'diabetic macular edema treatment Kyle, DME treatment Kyle TX, diabetic retinopathy Kyle, macular edema specialist, anti-VEGF injections Kyle, diabetic eye disease treatment',
  openGraph: {
    title: 'Diabetic Macular Edema Treatment in Kyle | Spark Eye Care',
    description: 'Expert diabetic macular edema treatment in Kyle, TX. Advanced therapies and personalized care plans.',
    url: 'https://sparkeyetx.com/conditions/diabetic-macular-edema',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function DiabeticMacularEdemaPage() {
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
            <span>Diabetic Macular Edema</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Diabetic Macular Edema Treatment in Kyle
          </h1>
          
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Diabetic macular edema is a serious complication of diabetes that can threaten your central vision, but early intervention can preserve your sight. At Spark Eye Care, we provide advanced diagnostic imaging and proven treatments including anti-VEGF injections and laser therapy to protect your vision and improve your quality of life.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/diabetic-eye.jpg"
                alt="Retinal imaging for diabetic macular edema"
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
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Diabetic Macular Edema
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Diabetic macular edema (DME) is a vision-threatening complication of diabetic retinopathy that occurs when fluid accumulates in the macula, the central part of the retina responsible for sharp, detailed vision. This swelling develops when damaged blood vessels in the retina leak fluid and proteins onto the macula, causing it to thicken and distort central vision. DME is one of the most common causes of vision loss among working-age adults with diabetes, affecting approximately 750,000 Americans, with prevalence increasing significantly among individuals who have had diabetes for more than 20 years. The impact on daily life can be profound—patients may struggle with reading, driving, recognizing faces, and performing detailed work, leading to decreased independence and quality of life.
            </p>
            
            <p>
              The primary cause of diabetic macular edema is chronic high blood sugar levels that damage the delicate blood vessels in the retina over time. This vascular damage triggers inflammation and the release of vascular endothelial growth factor (VEGF), a protein that causes blood vessels to leak fluid and promotes the growth of abnormal new vessels. Risk factors for developing DME include longer duration of diabetes, poor blood sugar control, high blood pressure, high cholesterol, kidney disease, pregnancy, and the presence of moderate to severe diabetic retinopathy. Type 1 and Type 2 diabetes patients are both at risk, though the condition typically develops after several years of diabetes. Importantly, many people with early DME have no symptoms, making regular comprehensive dilated eye examinations essential for anyone with diabetes.
            </p>
            
            <p>
              Professional treatment for diabetic macular edema is critical because untreated DME can lead to permanent vision loss, and vision that is lost often cannot be fully restored even with later treatment. The good news is that modern treatments are highly effective at stabilizing and often improving vision when initiated early. Our approach combines advanced diagnostic technology—including optical coherence tomography (OCT) that provides detailed cross-sectional images of the macula—with evidence-based treatments such as anti-VEGF injections, corticosteroid implants, and focal laser photocoagulation. We work closely with your endocrinologist or primary care physician to optimize your overall diabetes management, as controlling blood sugar, blood pressure, and cholesterol levels is essential to treatment success. With early detection and appropriate treatment, most patients can preserve their functional vision and maintain their independence and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Diabetic Macular Edema
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Visual Changes</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Blurred Central Vision</h4>
                    <p className="text-[var(--color-muted)]">Difficulty seeing fine details in the center of your vision, making reading and recognizing faces challenging.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Distorted Vision</h4>
                    <p className="text-[var(--color-muted)]">Straight lines appearing wavy or bent, a classic sign of macular swelling and structural changes.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Color Vision Changes</h4>
                    <p className="text-[var(--color-muted)]">Colors appearing washed out or less vibrant than usual, particularly affecting central vision.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Fluctuating Vision</h4>
                    <p className="text-[var(--color-muted)]">Vision that varies throughout the day, often correlating with blood sugar level fluctuations.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Dark or Empty Areas</h4>
                    <p className="text-[var(--color-muted)]">Blank spots in the center of your visual field that interfere with reading or detailed tasks.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Double Vision</h4>
                    <p className="text-[var(--color-muted)]">Seeing two images of a single object, which can occur when macular edema affects one eye more than the other.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[var(--color-dark)]">Functional Impact</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Reading Difficulty</h4>
                    <p className="text-[var(--color-muted)]">Struggling to read books, newspapers, or screens even with your regular glasses or magnification.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Driving Challenges</h4>
                    <p className="text-[var(--color-muted)]">Difficulty seeing road signs, traffic signals, or objects in your direct line of sight while driving.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Facial Recognition Problems</h4>
                    <p className="text-[var(--color-muted)]">Trouble recognizing familiar faces or seeing facial expressions clearly from a normal distance.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Work Performance Impact</h4>
                    <p className="text-[var(--color-muted)]">Decreased ability to perform detailed work tasks, use computers effectively, or complete job responsibilities.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Loss of Independence</h4>
                    <p className="text-[var(--color-muted)]">Increased difficulty with daily activities like cooking, managing medications, or navigating unfamiliar places.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-[var(--color-ink)] mb-1">Need for Brighter Light</h4>
                    <p className="text-[var(--color-muted)]">Requiring significantly more light than usual to see clearly, especially for reading or detailed work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Many patients with diabetic macular edema experience significant vision improvement or stabilization when treatment begins promptly.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Diabetic Macular Edema
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6m3-3v6" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold mb-4 text-[var(--color-ink)]">
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your initial evaluation includes a detailed medical history review, dilated eye examination, and advanced imaging with optical coherence tomography (OCT) to precisely measure macular thickness and identify fluid accumulation. We also perform fluorescein angiography when needed to map leaking blood vessels and assess the extent of vascular damage. This thorough assessment allows us to classify the severity of your DME and develop a targeted treatment strategy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold mb-4 text-[var(--color-ink)]">
                Personalized Treatment Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your specific condition, we create an individualized treatment protocol that may include anti-VEGF injections (such as Eylea, Lucentis, or Avastin), corticosteroid injections or implants, or focal laser photocoagulation. We consider factors such as the severity of edema, your overall health status, treatment history, and personal preferences when designing your care plan. Our goal is to reduce macular swelling, stabilize vision, and prevent further deterioration while minimizing treatment burden.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-cormorant font-semibold mb-4 text-[var(--color-ink)]">
                Ongoing Monitoring & Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                DME treatment requires consistent follow-up to assess response and adjust therapy as needed. We monitor your progress with regular OCT imaging to track macular thickness changes and visual acuity testing to document functional improvement. Most patients require a series of injections on a monthly or extended schedule, with frequency adjusted based on response. We coordinate closely with your diabetes care team to ensure optimal blood sugar control, as systemic management is crucial to long-term treatment success.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-cormorant font-semibold mb-4 text-[var(--color-ink)]">
              Evidence-Based Treatment Modalities
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Our treatment approach is grounded in the latest clinical research and follows guidelines established by major clinical trials. Anti-VEGF therapy has become the first-line treatment for center-involving diabetic macular edema, with medications like aflibercept (Eylea), ranibizumab (Lucentis), and bevacizumab (Avastin) demonstrating significant vision improvement in the majority of patients. These medications are delivered via intravitreal injection—a quick, virtually painless procedure performed in our office under topical anesthesia.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              For patients who don't respond adequately to anti-VEGF therapy alone, we may recommend corticosteroid options such as dexamethasone implants (Ozurdex) or fluocinolone acetonide implants (Iluvien), which provide sustained anti-inflammatory action. Focal or grid laser photocoagulation may be used in select cases, particularly for peripheral edema or as adjunctive therapy. We also emphasize the critical importance of systemic control—optimizing hemoglobin A1c levels, blood pressure, and lipid profiles in collaboration with your endocrinologist or primary care physician—as metabolic control directly impacts treatment outcomes and long-term prognosis.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Diabetic Macular Edema Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-2xl font-semibranibold mb-3 text-[var(--color-ink)]">
                Board-Certified Expertise
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our eye care specialists are board-certified and have extensive experience in diagnosing and treating diabetic retinopathy and macular edema. We stay current with the latest research and treatment protocols, regularly participating in continuing education and professional development to ensure you receive the most advanced care available.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                Personalized, Patient-Centered Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient's situation is unique—your diabetes history, lifestyle, vision needs, and treatment goals all inform our approach. We take time to explain your condition thoroughly, discuss all treatment options, answer your questions, and involve you in decision-making. Your care plan is tailored specifically to you, not a one-size-fits-all protocol.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                Advanced Diagnostic Technology
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We utilize state-of-the-art imaging equipment including spectral-domain optical coherence tomography (SD-OCT), which provides incredibly detailed cross-sectional images of your retina and macula. This technology allows us to detect even subtle changes in macular thickness, precisely measure treatment response, and make data-driven decisions about your care.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">
                Coordinated Comprehensive Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Managing diabetic macular edema requires a team approach. We work closely with your endocrinologist, primary care physician, and other healthcare providers to ensure coordinated care. We provide detailed reports to your diabetes care team and communicate regularly about your progress, creating a comprehensive support system focused on both your vision and overall health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">01</span>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold mb-3 text-[var(--color-ink)]">
                  First Evaluation (Week 1)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive examination includes a detailed discussion of your diabetes history and vision concerns, dilated retinal examination, OCT imaging to assess macular thickness, and possibly fluorescein angiography. We'll explain your diagnosis clearly, review your imaging results with you, discuss treatment options in detail, and answer all your questions. This visit typically takes 60-90 minutes, and you'll leave with a clear understanding of your condition and recommended treatment plan.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">02</span>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold mb-3 text-[var(--color-ink)]">
                  Treatment Begins (Weeks 2-4)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Most patients begin with anti-VEGF injection therapy, typically scheduled monthly for the first three to six months. The injection procedure itself takes only a few minutes and is performed with topical anesthetic drops—most patients report minimal discomfort. You may experience temporary mild irritation, light sensitivity, or seeing floaters immediately after injection, but serious complications are rare. You can resume most normal activities the same day, though we recommend avoiding swimming and heavy lifting for 24 hours.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">03</span>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold mb-3 text-[var(--color-ink)]">
                  Progress Review (Months 2-3)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After your initial series of treatments, we'll conduct thorough follow-up evaluations to measure your response. We'll repeat OCT imaging to document changes in macular thickness, test your visual acuity to assess functional improvement, and discuss any changes in your vision or quality of life. Based on your response, we may adjust your treatment schedule—some patients transition to longer intervals between injections (treat-and-extend protocol), while others may need additional or alternative therapies. It's important to maintain realistic expectations: the goal is typically to stabilize vision and prevent further loss, though many patients do experience improvement.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">04</span>
              </div>
              <div>
                <h3 className="text-2xl font-cormorant font-semibold mb-3 text-[var(--color-ink)]">
                  Long-Term Management (Ongoing)
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Diabetic macular edema is a chronic condition that requires ongoing monitoring and often long-term treatment. After achieving stability, many patients continue with periodic injections on an as-needed basis, scheduled based on OCT findings and clinical examination. Regular follow-up appointments—typically every 4-12 weeks depending on your status—ensure we detect and address any recurrence early. We'll continue coordinating with your diabetes care team, as optimal blood sugar control remains essential to preserving treatment gains. With consistent management, most patients maintain functional vision and quality of life for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Diabetic Macular Edema
          </h2>
          
          <div className="space-y-6">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                How long does diabetic macular edema treatment take?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                DME treatment is typically a long-term commitment rather than a quick fix. Most patients begin with monthly anti-VEGF injections for three to six months, then transition to less frequent treatments based on individual response. Some patients eventually require injections only every 8-12 weeks or longer, while others need more frequent ongoing treatment. The total duration varies considerably—some patients achieve sustained improvement that requires only periodic monitoring, while others need ongoing treatment for years. The key is consistent follow-up and willingness to adjust the treatment plan as your condition changes.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Are eye injections painful?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most patients are pleasantly surprised by how tolerable intravitreal injections are. We use topical anesthetic drops to numb the eye surface, and many patients report feeling only slight pressure rather than pain during the quick procedure. Afterward, you may experience mild scratchiness, redness, or the sensation of something in your eye for a few hours, which typically resolves quickly. Serious complications like infection or retinal detachment are very rare (less than 1 in 1,000 injections). Many patients find that their anxiety about the procedure is worse than the actual experience, and most adapt well to ongoing treatment.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Will my vision return to normal?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Treatment outcomes vary depending on the severity and duration of DME before treatment begins. In major clinical trials, approximately 40-50% of patients treated with anti-VEGF therapy gained significant vision improvement (2+ lines on the eye chart), while most others maintained stable vision. Complete restoration to "normal" vision is uncommon, especially if significant damage occurred before treatment started. However, even stabilizing vision and preventing further loss is a valuable outcome that preserves independence and quality of life. Early detection and prompt treatment offer the best chance for vision improvement, which is why regular eye exams are so critical for everyone with diabetes.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Does insurance cover diabetic macular edema treatment?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most health insurance plans, including Medicare, cover medically necessary treatment for diabetic macular edema when properly documented. Anti-VEGF injections, corticosteroid implants, and laser treatment are generally covered, though you may have copays or coinsurance depending on your specific plan. Prior authorization may be required for certain medications. We work with your insurance company to obtain necessary approvals and will provide cost estimates before beginning treatment. Our billing team can discuss your coverage details and payment options. Don't let insurance concerns delay treatment—we'll help you navigate the process and explore all available options.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                What if treatment isn't working for me?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                If you're not responding adequately to initial anti-VEGF therapy, several options exist. We may switch to a different anti-VEGF medication, as some patients respond better to one agent than another. Adding or switching to corticosteroid therapy (injections or sustained-release implants) can be highly effective for patients who don't respond to anti-VEGF alone. Laser photocoagulation may be added as adjunctive treatment. We'll also reassess your systemic diabetes control, as persistently elevated blood sugar or blood pressure can undermine treatment effectiveness. Sometimes adjusting injection frequency or combining treatments achieves better results. The key is maintaining open communication about your response and working together to find the most effective approach for you.
              </div>
            </details>
            
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 text-lg font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Can I manage diabetic macular edema with telehealth visits?
                <span className="float-right group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                While DME requires in-person visits for injections, examinations, and imaging, telehealth can play a valuable supplementary role in your care. We use telehealth appointments for initial consultations to discuss your diabetes and vision concerns, post-injection follow-ups to check on your recovery and address questions, coordination discussions about your overall diabetes management, and education sessions about self-monitoring and when to seek urgent care. However, treatment injections, dilated examinations, and OCT imaging must be performed in person. We'll work with you to create a visit schedule that balances convenience with necessary in-person care, and we're always available via secure messaging for questions between appointments.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/diabetic-retinopathy" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Diabetic Retinopathy
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Damage to retinal blood vessels caused by diabetes, which can progress to vision-threatening complications.
              </p>
            </a>
            
            <a href="/conditions/diabetic-macular-edema" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Retinal Vein Occlusion
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Blockage of retinal veins causing sudden vision loss and macular swelling, often treated with similar therapies as DME.
              </p>
            </a>
            
            <a href="/conditions/age-related-macular-degeneration" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Age-Related Macular Degeneration
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Progressive deterioration of the macula causing central vision loss, also treated with anti-VEGF therapy in the wet form.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Diabetic Macular Edema Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face diabetic macular edema alone. Our team is ready to help you preserve your vision and quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors inline-block"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-block"
            >
              View All Conditions
            </a>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Serving Kyle and surrounding communities with comprehensive diabetic eye care
          </p>
        </div>
      </section>
    </main>
  )
}