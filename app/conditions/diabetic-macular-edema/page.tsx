import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diabetic Macular Edema Treatment in Kyle | Spark Eye Care',
  description: 'Expert diabetic macular edema treatment in Kyle. Board-certified care for vision-threatening diabetic eye complications. Early intervention saves sight.',
  openGraph: {
    title: 'Diabetic Macular Edema Treatment in Kyle | Spark Eye Care',
    description: 'Expert diabetic macular edema treatment in Kyle. Board-certified care for vision-threatening diabetic eye complications.',
    url: 'https://www.sparkeyetx.com/conditions/diabetic-macular-edema',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function DiabeticMacularEdemaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Diabetic Macular Edema</span>
          </nav>
          <h1 className="font-serif text-5xl font-light mb-6 leading-tight" style={{fontFamily: 'Cormorant, serif'}}>
            Diabetic Macular Edema Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Diabetic macular edema is a serious complication of diabetes that threatens central vision, but with early detection and specialized treatment, vision loss can often be prevented or reversed. At Spark Eye Care, we provide comprehensive, evidence-based care to protect your sight and help you maintain the clear vision essential for daily life.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Understanding Diabetic Macular Edema
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Diabetic macular edema (DME) is a vision-threatening complication of diabetic retinopathy that occurs when fluid accumulates in the macula—the central part of the retina responsible for sharp, detailed vision. This swelling disrupts the macula's ability to function properly, leading to blurred or distorted central vision that can significantly impact reading, driving, recognizing faces, and performing daily tasks. DME affects approximately 7.6% of people with diabetes and is the leading cause of vision loss among working-age adults in developed countries. The condition can develop at any stage of diabetic retinopathy and may affect one or both eyes, making regular eye examinations essential for anyone living with diabetes.
            </p>
            <p>
              The primary cause of diabetic macular edema is damage to the tiny blood vessels in the retina caused by chronically elevated blood sugar levels. When these delicate vessels become weakened and leaky, fluid and proteins seep into the surrounding retinal tissue, causing the macula to swell. Several risk factors increase the likelihood of developing DME, including poor blood sugar control, high blood pressure, high cholesterol, longer duration of diabetes, kidney disease, and fluid retention. Pregnancy can also increase the risk of DME progression in women with pre-existing diabetic retinopathy. Additionally, certain inflammatory processes triggered by vascular damage release chemical mediators, particularly vascular endothelial growth factor (VEGF), which further increases blood vessel permeability and contributes to ongoing fluid accumulation.
            </p>
            <p>
              Without proper treatment, diabetic macular edema can lead to permanent vision loss that significantly diminishes quality of life and independence. However, advances in medical technology and treatment options have dramatically improved outcomes for patients with DME. Early detection through comprehensive dilated eye examinations and advanced imaging techniques such as optical coherence tomography (OCT) allows for timely intervention before irreversible damage occurs. Professional treatment not only helps preserve existing vision but can often improve visual acuity that has already been compromised. At Spark Eye Care, we emphasize the critical importance of proactive management, combining the latest treatment modalities with personalized care plans tailored to each patient's unique circumstances, overall health status, and visual needs.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Signs & Symptoms of Diabetic Macular Edema
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">Visual Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Blurred Central Vision</span>
                    <p className="text-[var(--color-muted)]">Difficulty seeing fine details clearly, especially when reading or looking at faces directly ahead.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Wavy or Distorted Vision</span>
                    <p className="text-[var(--color-muted)]">Straight lines appear bent or irregular, and objects may seem warped or misshapen.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Washed Out Colors</span>
                    <p className="text-[var(--color-muted)]">Colors appear faded, less vibrant, or difficult to distinguish from one another.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Reading</span>
                    <p className="text-[var(--color-muted)]">Printed text becomes harder to read even with proper lighting and reading glasses.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Dark or Empty Spots</span>
                    <p className="text-[var(--color-muted)]">Blank areas or shadows appearing in the center of your visual field.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Fluctuating Vision</span>
                    <p className="text-[var(--color-muted)]">Vision quality varies throughout the day, often correlating with blood sugar fluctuations.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Light Sensitivity</span>
                    <p className="text-[var(--color-muted)]">Increased discomfort or difficulty adapting to bright lights or glare.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">Functional Impact</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Driving Difficulties</span>
                    <p className="text-[var(--color-muted)]">Trouble seeing road signs, traffic signals, or judging distances safely while driving.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Work Performance Issues</span>
                    <p className="text-[var(--color-muted)]">Decreased ability to perform tasks requiring detailed vision, especially computer work.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Recognizing Faces</span>
                    <p className="text-[var(--color-muted)]">Difficulty identifying people, even familiar individuals, until they're very close.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Balance and Coordination Problems</span>
                    <p className="text-[var(--color-muted)]">Increased risk of stumbling or falling due to impaired depth perception and spatial awareness.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Hobby Limitations</span>
                    <p className="text-[var(--color-muted)]">Reduced enjoyment or ability to participate in activities like crafts, sports, or watching television.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Medication Management Challenges</span>
                    <p className="text-[var(--color-muted)]">Difficulty reading prescription labels or measuring insulin doses accurately.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Emotional Distress</span>
                    <p className="text-[var(--color-muted)]">Anxiety, depression, or loss of independence associated with declining vision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. The sooner diabetic macular edema is diagnosed and managed, the greater the likelihood of preserving and even improving your vision.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-16 text-center text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            How We Treat Diabetic Macular Edema
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough dilated eye examination and advanced diagnostic imaging, including optical coherence tomography (OCT) to measure retinal thickness and identify areas of fluid accumulation. Fluorescein angiography may be performed to evaluate blood vessel integrity and leakage patterns. We also review your diabetes management, including current blood sugar control, blood pressure, kidney function, and other systemic factors that influence DME progression and treatment planning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on the severity of your DME, visual acuity, retinal thickness measurements, and overall health profile, we develop an individualized treatment strategy. This may include anti-VEGF intravitreal injections to reduce fluid accumulation, focal or grid laser photocoagulation for targeted treatment, corticosteroid implants for chronic cases, or a combination approach. We coordinate closely with your primary care physician and endocrinologist to optimize systemic diabetes management, as improved blood sugar control significantly enhances treatment outcomes and reduces recurrence risk.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Ongoing Monitoring & Support</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                DME requires consistent monitoring to assess treatment response and adjust therapies as needed. We schedule regular follow-up appointments with repeat OCT imaging to track changes in retinal thickness and fluid resolution. Treatment frequency is individualized—some patients respond well to monthly injections initially, then transition to less frequent maintenance treatments, while others may achieve stability with different protocols. We provide continuous education about diabetes management, lifestyle modifications, and warning signs that require immediate attention, ensuring you remain an active partner in protecting your vision.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-[var(--color-ink)] leading-relaxed">
            <p>
              Our treatment approach emphasizes evidence-based therapies proven effective for diabetic macular edema. Anti-VEGF medications such as ranibizumab, aflibercept, and bevacizumab have become the gold standard for DME treatment, significantly improving visual outcomes by targeting the biological processes that cause vascular leakage. These medications are administered via intravitreal injection—a quick, office-based procedure performed under topical anesthesia with minimal discomfort. For cases that don't respond adequately to anti-VEGF therapy alone, we may incorporate focal laser photocoagulation to seal leaking blood vessels or long-acting corticosteroid implants that provide sustained anti-inflammatory effects. Each treatment decision is guided by the latest clinical research and tailored to your specific condition, lifestyle, and treatment goals, maximizing the potential for vision preservation and improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Why Choose Spark Eye Care for Diabetic Macular Edema Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our eye care professionals have specialized training in diabetic retinopathy and macular edema management, with extensive experience in advanced retinal imaging and intravitreal injection procedures.
              </p>
            </div>
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's diabetes journey is unique. Your treatment plan considers your specific health status, visual needs, lifestyle factors, and personal preferences to achieve optimal outcomes.
              </p>
            </div>
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Access Options</h3>
              <p className="text-[var(--color-muted)]">
                While treatment procedures require in-person visits, we offer telehealth consultations for initial evaluations, follow-up monitoring discussions, and ongoing care coordination to minimize travel when appropriate.
              </p>
            </div>
            <div className="text-center p-6 animate-fade-up">
              <svg className="w-16 h-16 text-[var(--color-primary)] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Comprehensive Diabetic Eye Care</h3>
              <p className="text-[var(--color-muted)]">
                Beyond DME treatment, we provide complete diabetic eye examinations, screening for other complications like proliferative retinopathy and glaucoma, ensuring all aspects of your ocular health are monitored and protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-8 text-center text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="text-6xl font-serif text-[var(--color-primary)] font-light flex-shrink-0" style={{fontFamily: 'Cormorant, serif'}}>01</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial visit includes a comprehensive dilated eye examination, visual acuity testing, intraocular pressure measurement, and OCT imaging to establish baseline retinal thickness and identify areas of macular edema. We'll review your complete medical history, current diabetes management, and any previous eye treatments. This thorough assessment typically takes 60-90 minutes and allows us to determine the severity of your DME and recommend the most appropriate treatment strategy. We'll discuss all available treatment options, expected outcomes, potential risks, and answer all your questions before proceeding.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="text-6xl font-serif text-[var(--color-primary)] font-light flex-shrink-0" style={{fontFamily: 'Cormorant, serif'}}>02</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If anti-VEGF injections are recommended, treatment typically begins within 1-2 weeks of diagnosis. The injection procedure itself takes only a few minutes and is performed under sterile conditions with topical anesthetic drops to minimize discomfort. Most patients describe mild pressure rather than pain during the injection. You may experience temporary blurred vision, floaters, or a scratchy sensation for 24-48 hours afterward, but serious complications are rare. Many patients notice some visual improvement within days to weeks, though maximum benefits often take several weeks to develop as macular swelling gradually resolves.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="text-6xl font-serif text-[var(--color-primary)] font-light flex-shrink-0" style={{fontFamily: 'Cormorant, serif'}}>03</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After initial treatment sessions, we schedule follow-up appointments to assess your response through repeat visual acuity testing and OCT imaging. These objective measurements help us determine whether your treatment frequency should continue, increase, or potentially be reduced. During the loading phase (typically the first 3-6 months), most patients require monthly injections to achieve optimal fluid reduction. We carefully evaluate not just imaging findings but also your functional vision improvements—whether you're reading better, driving more confidently, or noticing enhanced color perception. Treatment plans are adjusted based on individual response patterns.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="text-6xl font-serif text-[var(--color-primary)] font-light flex-shrink-0" style={{fontFamily: 'Cormorant, serif'}}>04</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-ink)]">Long-term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Diabetic macular edema is a chronic condition requiring ongoing vigilance, but many patients achieve stable vision with less frequent maintenance treatments after the initial intensive phase. Some individuals transition to injections every 8-12 weeks or longer if the macula remains dry, while others may require more frequent interventions. Consistent follow-up monitoring every 4-8 weeks helps detect recurrence early, when it's most easily managed. Long-term success depends significantly on maintaining good systemic diabetes control—optimal blood sugar, blood pressure, and cholesterol levels reduce the biological drivers of DME and improve treatment durability. We partner with you and your diabetes care team to support comprehensive health management that protects your vision for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-12 text-center text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Frequently Asked Questions About Diabetic Macular Edema
          </h2>
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                How long does diabetic macular edema treatment take?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Treatment duration varies significantly based on DME severity and individual response. The initial intensive phase typically involves monthly anti-VEGF injections for 3-6 months to achieve maximum fluid reduction and visual improvement. After this loading phase, many patients transition to less frequent maintenance treatments—potentially every 2-3 months or longer if the macula remains stable. Some patients achieve lasting improvement after several months of treatment, while others require ongoing injections indefinitely to prevent recurrence. DME is a chronic condition related to diabetes, so long-term monitoring remains essential even during treatment-free intervals. Improved diabetes management significantly impacts treatment duration and success.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Are intravitreal injections painful?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most patients experience minimal discomfort during intravitreal injections. We use topical anesthetic eye drops to numb the eye surface before the procedure, and the injection itself takes only a few seconds. Patients typically describe a sensation of pressure or mild discomfort rather than sharp pain. The needle used is extremely fine, and the injection site is carefully chosen to minimize sensation. After the procedure, you may experience a scratchy or gritty feeling, mild redness, or temporary blurred vision for several hours, but these effects usually resolve within 24-48 hours. Serious complications such as infection or retinal detachment are rare (less than 1 in 1000 injections). Many patients find that their anxiety about the procedure decreases significantly after the first injection once they realize how tolerable it actually is.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Does insurance cover diabetic macular edema treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, most insurance plans, including Medicare and Medicaid, cover medically necessary treatment for diabetic macular edema because it is a vision-threatening complication of diabetes. Anti-VEGF injections, laser photocoagulation, and corticosteroid implants are typically covered when deemed appropriate based on clinical findings and established treatment guidelines. However, specific coverage details, prior authorization requirements, and out-of-pocket costs vary by plan. We recommend contacting your insurance provider before beginning treatment to understand your benefits, copayments, deductibles, and any authorization requirements. Our staff is experienced in working with insurance companies and can assist with documentation and prior authorization submissions. For patients without insurance or with high-deductible plans, we can discuss payment options and potentially less expensive medication alternatives that maintain clinical effectiveness.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Can diabetic macular edema come back after successful treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, DME can recur because it results from underlying diabetic vascular damage that persists as long as diabetes remains present. Even after successful initial treatment that resolves macular swelling and improves vision, the biological factors driving fluid leakage—particularly elevated VEGF levels and compromised blood-retinal barrier function—may reactivate over time. This is why ongoing monitoring with periodic OCT imaging is essential even during stable periods. Many patients require intermittent maintenance injections to prevent recurrence, though the frequency often decreases compared to the initial treatment phase. The single most important factor in reducing recurrence risk is optimizing systemic diabetes control: maintaining HbA1c levels as close to target as possible, controlling blood pressure, managing cholesterol, and addressing other cardiovascular risk factors. Patients with well-controlled diabetes tend to experience fewer recurrences and require less intensive long-term treatment.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Will I regain all my vision loss from diabetic macular edema?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Visual outcomes vary depending on several factors, including the severity and duration of macular edema, baseline visual acuity, degree of retinal damage, and how quickly treatment begins. Many patients experience significant vision improvement with anti-VEGF therapy—clinical trials show that approximately 40-50% of treated patients gain 2 or more lines of vision on an eye chart. However, complete restoration to pre-DME vision levels isn't always possible, especially if chronic swelling has caused permanent photoreceptor damage or structural changes in the macula. The earlier treatment begins, the better the prognosis for visual recovery. Some patients achieve stabilization rather than improvement, which is still a valuable outcome that prevents further deterioration. Even modest improvements in visual acuity can translate to meaningful functional benefits in daily activities. Setting realistic expectations while remaining optimistic about treatment potential is important—we'll discuss your individual prognosis based on your specific clinical findings.
              </div>
            </details>
            <details className="group bg-[var(--color-cream)] rounded-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-[var(--color-ink)]">
                Can telehealth appointments work for diabetic macular edema management?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Telehealth can play a supportive role in diabetic macular edema management, though in-person visits remain necessary for diagnostic procedures, imaging, and treatment injections. Virtual appointments are valuable for initial consultations to discuss symptoms and review medical history, follow-up conversations to review test results and adjust treatment plans, education about diabetes management and its impact on eye health, and addressing concerns between scheduled in-person visits. However, critical components of DME care—including dilated eye examinations, OCT imaging, fluorescein angiography, and intravitreal injections—require office visits with specialized equipment. We utilize a hybrid approach when appropriate, combining necessary in-person treatment sessions with convenient telehealth check-ins that reduce overall travel burden while maintaining comprehensive care. This model works particularly well during stable maintenance phases when injection frequency is reduced and monitoring becomes the primary focus.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl mb-8 text-center text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/diabetic-retinopathy" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)]">Comprehensive screening and management of diabetic damage to retinal blood vessels before vision loss occurs.</p>
            </a>
            <a href="/conditions/macular-degeneration" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Macular Degeneration</h4>
              <p className="text-[var(--color-muted)]">Advanced treatment for age-related macular degeneration to preserve central vision and independence.</p>
            </a>
            <a href="/conditions/retinal-vein-occlusion" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Retinal Vein Occlusion</h4>
              <p className="text-[var(--color-muted)]">Expert care for blocked retinal veins causing sudden vision loss, swelling, and bleeding in the retina.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{fontFamily: 'Cormorant, serif'}}>
            Get Help for Diabetic Macular Edema Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            You don't have to face diabetic macular edema alone. Our team is ready to help you protect your vision and maintain your quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors inline-block"
            >
              Schedule Your Evaluation
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-block"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}