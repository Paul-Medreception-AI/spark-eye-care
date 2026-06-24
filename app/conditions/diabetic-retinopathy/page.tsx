import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diabetic Retinopathy Treatment in Kyle | Spark Eye Care',
  description: 'Expert diabetic retinopathy treatment in Kyle, TX. Board-certified care for diabetic eye disease, retinal screening, and vision preservation. Schedule your comprehensive eye exam today.',
  keywords: 'diabetic retinopathy treatment Kyle, diabetic eye disease Kyle TX, retinal screening, diabetic eye exam, vision preservation, retinopathy specialist Kyle',
  openGraph: {
    title: 'Diabetic Retinopathy Treatment in Kyle | Spark Eye Care',
    description: 'Expert diabetic retinopathy treatment in Kyle, TX. Comprehensive care for diabetic eye disease and vision preservation.',
    url: 'https://www.sparkeyetx.com/conditions/diabetic-retinopathy',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function DiabeticRetinopathyPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Diabetic Retinopathy</span>
          </nav>
          
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Diabetic Retinopathy Treatment in Kyle
          </h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Diabetic retinopathy is a serious complication of diabetes that can lead to vision loss, but early detection and treatment can preserve your sight. At Spark Eye Care, we provide comprehensive diabetic eye exams and advanced retinopathy management to protect your vision and quality of life.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Diabetic Retinopathy
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Diabetic retinopathy is a diabetes complication that affects the eyes, specifically damaging the blood vessels in the retina—the light-sensitive tissue at the back of the eye. This condition is one of the leading causes of blindness among working-age adults in the United States, affecting approximately one-third of people with diabetes. The disease develops when high blood sugar levels cause damage to the delicate blood vessels in the retina, leading to leakage, swelling, and the growth of abnormal new blood vessels. In its early stages, diabetic retinopathy may cause no symptoms or only mild vision problems, but as it progresses, it can lead to significant vision impairment and even complete vision loss. The impact on daily life can be profound, affecting your ability to drive, read, recognize faces, work, and maintain independence. What makes diabetic retinopathy particularly concerning is that vision loss can occur before you notice any symptoms, making regular eye examinations absolutely essential for anyone living with diabetes.
            </p>
            
            <p>
              The primary cause of diabetic retinopathy is prolonged exposure to elevated blood glucose levels, which damage the tiny blood vessels that nourish the retina. Several risk factors increase the likelihood of developing this condition: the duration of diabetes is one of the most significant factors, as the longer you have diabetes, the higher your risk becomes. Poor blood sugar control accelerates retinal damage, while high blood pressure and high cholesterol further compound the risk by placing additional stress on blood vessels. Pregnancy can temporarily worsen diabetic retinopathy in women with pre-existing diabetes, and certain ethnic populations including African Americans, Hispanics, and Native Americans face higher rates of the disease. Smoking, kidney disease, and a family history of diabetic retinopathy also elevate risk. The condition typically progresses through stages: mild nonproliferative retinopathy involves small areas of balloon-like swelling in the retina's blood vessels; moderate nonproliferative retinopathy occurs when some blood vessels that nourish the retina become blocked; severe nonproliferative retinopathy involves more blocked blood vessels depriving areas of the retina of their blood supply; and proliferative diabetic retinopathy, the most advanced stage, occurs when the retina grows new abnormal blood vessels that are fragile and can leak, leading to serious vision problems and potential retinal detachment.
            </p>
            
            <p>
              Professional eye care and early intervention are critical in managing diabetic retinopathy and preserving vision. While damage that has already occurred cannot typically be reversed, treatment can significantly slow or stop progression of the disease, and in many cases, prevent further vision loss. At Spark Eye Care, we emphasize the importance of comprehensive dilated eye exams at least annually for all patients with diabetes, even if you're experiencing no vision problems. These examinations allow us to detect diabetic retinopathy in its earliest stages when treatment is most effective and before irreversible damage occurs. Early detection combined with proper diabetes management—controlling blood sugar, blood pressure, and cholesterol levels—forms the foundation of preserving your vision. When intervention is needed, we coordinate with retinal specialists to provide advanced treatments including laser therapy, anti-VEGF injections, and vitrectomy surgery when appropriate. Our approach focuses not only on treating existing retinopathy but also on patient education, helping you understand the vital connection between your overall diabetes management and your eye health. We work collaboratively with your primary care physician and endocrinologist to ensure comprehensive, coordinated care that addresses all aspects of your health and maximizes your chances of maintaining clear vision throughout your life.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Diabetic Retinopathy
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Early & Visual Symptoms */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Early & Visual Changes</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Blurred or Fluctuating Vision</p>
                    <p className="text-[var(--color-muted)]">Vision that becomes blurry or changes from day to day, often related to blood sugar fluctuations.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Floaters</p>
                    <p className="text-[var(--color-muted)]">Dark strings, spots, or cobweb-like shapes that drift through your field of vision.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty with Color Perception</p>
                    <p className="text-[var(--color-muted)]">Colors may appear faded or washed out, making it harder to distinguish between shades.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Dark or Empty Areas in Vision</p>
                    <p className="text-[var(--color-muted)]">Patches in your visual field where you cannot see clearly or at all, indicating potential retinal damage.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Poor Night Vision</p>
                    <p className="text-[var(--color-muted)]">Increasing difficulty seeing in low light conditions or adjusting when moving between light and dark environments.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Impaired Central Vision</p>
                    <p className="text-[var(--color-muted)]">Difficulty with tasks requiring sharp central vision like reading, driving, or recognizing faces.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Advanced & Functional Symptoms */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Advanced & Functional Impact</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Sudden Vision Loss</p>
                    <p className="text-[var(--color-muted)]">Abrupt loss of vision in one or both eyes, which may indicate bleeding or retinal detachment requiring immediate attention.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Distorted Vision</p>
                    <p className="text-[var(--color-muted)]">Straight lines appear wavy or bent, objects seem misshapen, or text appears distorted on the page.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Reading</p>
                    <p className="text-[var(--color-muted)]">Increasing trouble reading even with proper lighting and corrective lenses due to reduced visual acuity.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Light Sensitivity</p>
                    <p className="text-[var(--color-muted)]">Increased discomfort or difficulty tolerating bright lights, glare, or rapid changes in lighting.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">No Symptoms (Early Stages)</p>
                    <p className="text-[var(--color-muted)]">Many people experience no noticeable symptoms in early diabetic retinopathy, making regular screening essential.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Vision That Worsens Gradually</p>
                    <p className="text-[var(--color-muted)]">Progressive decline in vision quality over months or years as retinal damage accumulates.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--color-ink)]">Difficulty Driving</p>
                    <p className="text-[var(--color-muted)]">Challenges with distance vision, judging space, or seeing road signs clearly, especially at night.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Whether you've noticed changes in your vision or it's time for your annual diabetic eye exam, our team is here to protect your sight and quality of life.
          </p>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Diabetic Retinopathy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough dilated eye examination where we carefully examine your retina using advanced imaging technology including optical coherence tomography (OCT) and fundus photography. We assess the stage of diabetic retinopathy, evaluate macular edema, document any retinal bleeding or abnormal blood vessel growth, and measure your current visual acuity. This comprehensive evaluation provides the foundation for your personalized treatment plan and establishes baseline measurements to track your progress over time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on the stage and severity of your diabetic retinopathy, we develop a customized treatment strategy that may include monitoring with regular follow-up exams, coordination with your diabetes care team to optimize blood sugar control, or referral to a retinal specialist for advanced interventions. We clearly explain your diagnosis, discuss all available treatment options with their benefits and risks, and collaborate with you to create a plan that fits your health needs, lifestyle, and goals. Education is central to our approach—we ensure you understand how diabetes management directly impacts your eye health.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Monitoring & Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Diabetic retinopathy requires consistent, long-term management to preserve vision. We schedule regular follow-up examinations at intervals appropriate for your condition's severity—ranging from every 2-3 months for advanced disease to annually for mild cases or patients at risk. At each visit, we use the same advanced imaging techniques to detect any changes in your retinal health, adjust your treatment plan as needed, and coordinate closely with your other healthcare providers. We celebrate your progress, address any concerns promptly, and remain your partners in protecting your vision throughout your diabetes journey.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Evidence-Based Treatment Options</h3>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              When intervention becomes necessary, we coordinate with retinal specialists who utilize proven treatments tailored to your specific condition. For mild to moderate nonproliferative diabetic retinopathy, careful monitoring combined with optimizing diabetes control is often sufficient. When diabetic macular edema develops—swelling in the central retina that threatens vision—anti-VEGF injections (medications like Eylea, Lucentis, or Avastin) administered directly into the eye can reduce swelling and prevent vision loss. These injections block abnormal blood vessel growth and leakage, often requiring a series of treatments followed by maintenance therapy.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              For more advanced proliferative diabetic retinopathy, focal/grid laser photocoagulation may be used to seal leaking blood vessels and reduce macular edema, while pan-retinal photocoagulation (PRP) creates microscopic burns across the peripheral retina to shrink abnormal blood vessels. In cases involving vitreous hemorrhage or retinal detachment, vitrectomy surgery—removal of the vitreous gel and blood from the eye—may be necessary. Throughout any treatment, we emphasize that maintaining excellent control of blood sugar, blood pressure, and cholesterol remains the most important factor in slowing disease progression and protecting your vision long-term.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Diabetic Retinopathy Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our optometrists maintain board certification and stay current with the latest advances in diabetic eye disease through continuing education and professional development. We use state-of-the-art diagnostic equipment including digital retinal imaging and OCT technology to detect even subtle changes in retinal health, ensuring you receive accurate diagnosis and timely intervention based on the most current clinical guidelines and research.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized, Patient-Centered Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that every patient's diabetes journey is unique, and we tailor our approach to your specific circumstances, concerns, and goals. Rather than applying a one-size-fits-all protocol, we take time to understand your diabetes management routine, lifestyle factors, health history, and vision needs. We provide clear, compassionate communication and involve you in all decisions about your eye care, ensuring you feel supported and empowered throughout your treatment.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth & Flexible Options</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                While comprehensive diabetic retinopathy screening requires in-office visits with specialized equipment, we offer telehealth consultations for discussing test results, reviewing diabetic eye health education, adjusting monitoring schedules, coordinating with your diabetes care team, and addressing urgent concerns between scheduled exams. This flexibility helps you stay engaged with your eye care even when transportation, scheduling, or health challenges make office visits difficult.
              </p>
            </div>
            
            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Specialized Diabetic Eye Care Experience</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Diabetic retinopathy management is a core focus of our practice, and we have extensive experience working with patients at all stages of the disease. We maintain strong referral relationships with leading retinal specialists in the Kyle and Austin area, ensuring seamless coordination when advanced treatment is needed. Our team understands the emotional impact of diabetes-related vision concerns and provides compassionate support while maintaining the clinical vigilance necessary to protect your sight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="border-l-4 border-[var(--color-primary)] pl-8">
              <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)] mb-2">01</div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your initial comprehensive diabetic eye examination typically takes 60-90 minutes and includes dilation of your pupils to allow thorough retinal examination. We'll use advanced imaging to photograph your retina, measure retinal thickness with OCT scanning, assess your visual acuity, and check your eye pressure. You'll receive detailed education about diabetic retinopathy, your current eye health status, and specific recommendations. If retinopathy is detected, we'll explain the stage and severity, discuss whether monitoring or treatment is needed, and coordinate with your diabetes care providers. Bring a list of your current medications, recent blood sugar and A1C levels if available, and a driver since dilation will temporarily blur your vision.
              </p>
            </div>
            
            <div className="border-l-4 border-[var(--color-primary)] pl-8">
              <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)] mb-2">02</div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For early-stage diabetic retinopathy, "treatment" primarily involves optimizing your diabetes management and scheduling appropriate monitoring intervals—we'll coordinate closely with your primary care doctor or endocrinologist to ensure your blood sugar, blood pressure, and cholesterol are well-controlled. If you require advanced intervention such as anti-VEGF injections or laser treatment, we'll refer you to a trusted retinal specialist and ensure all records are transferred seamlessly. For patients beginning specialist treatment, initial injections or laser sessions typically occur within 2-4 weeks of diagnosis. Throughout this phase, we remain available to answer questions, provide support, and address any concerns that arise.
              </p>
            </div>
            
            <div className="border-l-4 border-[var(--color-primary)] pl-8">
              <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)] mb-2">03</div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                At your follow-up examination, we reassess your retinal health using the same imaging techniques to objectively measure any changes. If you've been undergoing specialist treatment, we coordinate with your retinal physician to review results and adjust the treatment plan as needed. For patients in the monitoring phase, we verify that your retinopathy remains stable and confirm that your diabetes management strategies are effectively protecting your eyes. We'll discuss any vision changes you've experienced, answer questions about long-term prognosis, and reinforce the critical connection between diabetes control and vision preservation. This visit helps establish your ongoing monitoring schedule and ensures all members of your healthcare team are aligned.
              </p>
            </div>
            
            <div className="border-l-4 border-[var(--color-primary)] pl-8">
              <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)] mb-2">04</div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-Term Management</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Diabetic retinopathy is a chronic condition requiring lifelong vigilance, but with proper care, most patients maintain functional vision throughout their lives. Your long-term monitoring schedule will be individualized based on disease severity—ranging from every 2-3 months for advanced cases to annually for patients with well-controlled diabetes and no retinopathy. At each visit, we perform the same comprehensive evaluation to detect any progression early when it's most treatable. We celebrate your successes in diabetes management, provide ongoing education about vision protection strategies, and adjust your care plan as your health status evolves. Our goal is to be your trusted partner in preserving your vision for all the activities and relationships that make life meaningful—reading, driving, enjoying nature, recognizing loved ones' faces, and maintaining your independence and quality of life for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Diabetic Retinopathy
          </h2>
          
          <div className="space-y-4">
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                How often should I have my eyes examined if I have diabetes?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                If you have diabetes but no signs of retinopathy, the American Diabetes Association recommends comprehensive dilated eye exams at least annually. If diabetic retinopathy is detected, exam frequency increases based on severity: mild nonproliferative retinopathy typically requires exams every 6-12 months; moderate nonproliferative retinopathy every 3-6 months; and severe or proliferative retinopathy every 2-3 months or as directed by your retinal specialist. Patients receiving active treatment such as injections may need monthly monitoring. Even if your vision seems perfect, these regular exams are essential because retinopathy causes no symptoms in early stages when treatment is most effective. We'll establish a personalized examination schedule based on your specific risk factors and current eye health status.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can diabetic retinopathy be reversed or cured?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Unfortunately, damage that has already occurred to the retinal blood vessels cannot be completely reversed or "cured." However, the progression of diabetic retinopathy can be significantly slowed or even halted with excellent diabetes control and appropriate treatment. Early-stage retinopathy may improve somewhat with better blood sugar management, and treatments like anti-VEGF injections can reduce macular swelling and improve vision in many patients. The key is early detection and intervention before irreversible damage occurs. Studies show that maintaining hemoglobin A1C levels below 7%, blood pressure under 130/80, and healthy cholesterol levels can reduce retinopathy risk by up to 76%. While we cannot undo existing damage, we can help preserve the vision you have and prevent further deterioration, which is why regular monitoring and proactive management are so critical.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Will I need injections in my eyes? Are they painful?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Not all patients with diabetic retinopathy require eye injections—treatment depends on the stage and type of retinopathy you have. Anti-VEGF injections are typically recommended when diabetic macular edema (swelling in the central retina) develops or in advanced proliferative retinopathy with abnormal blood vessel growth. If injections are needed, your retinal specialist uses numbing drops and sometimes a numbing gel before the procedure, making it much less uncomfortable than most patients expect. Many people report feeling only mild pressure rather than pain. While the idea of an injection near the eye understandably causes anxiety, these treatments have helped millions of people preserve their vision and prevent blindness. The injection itself takes only seconds, and most patients are surprised by how tolerable the experience is. If injections become necessary for you, we'll ensure you understand exactly what to expect and connect you with an experienced, compassionate retinal specialist.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Does insurance cover diabetic retinopathy screening and treatment?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most health insurance plans, including Medicare, recognize diabetic retinopathy screening as essential preventive care and provide coverage for annual comprehensive dilated eye exams for patients with diabetes. These examinations are typically covered under your medical insurance (not vision insurance) since diabetic eye disease is a medical condition. If retinopathy is diagnosed and treatment is needed, both monitoring exams and interventions such as injections, laser therapy, or surgery are generally covered as medically necessary care, though you may be responsible for copays, deductibles, or coinsurance according to your specific plan. We recommend contacting your insurance provider before your appointment to understand your benefits, and our office staff is happy to verify coverage and provide cost estimates. Even without insurance, we believe diabetic eye care is too important to delay and will work with you to make necessary care accessible.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                What if I'm doing everything right but my retinopathy is getting worse?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                It can be frustrating and discouraging when retinopathy progresses despite your best efforts to control your diabetes. First, know that you're not alone—diabetic retinopathy can advance even with good glucose control, especially if you've had diabetes for many years or if there was a period of poor control in the past. The duration of diabetes is one of the strongest risk factors, and sometimes "metabolic memory" means the eyes continue to show effects of previous high blood sugar even after control improves. If your retinopathy is worsening, it's important to reassess all factors: Are blood pressure and cholesterol also optimized? Could medications need adjustment? Are there other health conditions affecting your eyes? This is also when advanced treatments become especially important—anti-VEGF injections, laser therapy, and surgical options can effectively slow or stop progression even when medical management alone isn't sufficient. We'll work closely with both your diabetes care team and retinal specialists to explore all available options, adjust your treatment plan, and provide the support you need during this challenging time. Progression doesn't mean failure on your part; it means we need to intensify our clinical approach to protect your vision.
              </p>
            </details>
            
            <details className="bg-[var(--color-cream)] rounded-lg p-6 group">
              <summary className="font-semibold text-lg text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can telehealth be used for diabetic retinopathy care?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Diabetic retinopathy screening requires specialized in-office equipment—specifically dilated eye examination and retinal imaging that cannot be performed remotely. However, telehealth can play a valuable supplementary role in your diabetic eye care. We offer virtual visits for reviewing your examination results and explaining findings in detail, discussing strategies for diabetes management and how it affects your eyes, coordinating care between your eye doctor, primary care physician, and endocrinologist, addressing urgent concerns between scheduled screenings (such as sudden vision changes or questions about symptoms), and providing education about diabetic retinopathy and vision protection. Telehealth consultations can save you time and travel while still maintaining the close monitoring relationship essential for managing this condition. However, they complement rather than replace in-person examinations—you'll still need regular office visits for the dilated exams and imaging that detect retinopathy and monitor its progression. We'll help you find the right balance of in-person and virtual care to keep your eyes healthy while respecting your time and convenience.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS SECTION */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/glaucoma" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Glaucoma
              </h4>
              <p className="text-[var(--color-muted)]">
                Comprehensive screening and management for this "silent thief of sight" that damages the optic nerve, especially common in patients with diabetes.
              </p>
            </a>
            
            <a href="/conditions/macular-degeneration" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Macular Degeneration
              </h4>
              <p className="text-[var(--color-muted)]">
                Age-related macular degeneration (AMD) affects central vision and shares some treatment approaches with diabetic macular edema.
              </p>
            </a>
            
            <a href="/conditions/cataracts" className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow group">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Cataracts
              </h4>
              <p className="text-[var(--color-muted)]">
                Clouding of the eye's lens that develops earlier and progresses faster in people with diabetes, causing blurred vision and glare.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-4">
            Get Help for Diabetic Retinopathy Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face diabetic retinopathy alone. Our team is ready to help you protect your vision and quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule Your Diabetic Eye Exam
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              View All Conditions
            </a>
          </div>
          <p className="mt-8 text-sm opacity-90">
            Serving Kyle, Buda, San Marcos, and surrounding communities
          </p>
        </div>
      </section>

    </main>
  )
}