import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diabetic Retinopathy Treatment in Kyle | Spark Eye Care',
  description: 'Expert diabetic retinopathy treatment in Kyle. Board-certified ophthalmologists specializing in diabetic eye disease management, retinal imaging, and advanced treatment options.',
  keywords: 'diabetic retinopathy treatment Kyle, diabetic eye disease Kyle, retinal screening Kyle, diabetes eye care, ophthalmologist Kyle',
  openGraph: {
    title: 'Diabetic Retinopathy Treatment in Kyle | Spark Eye Care',
    description: 'Expert diabetic retinopathy treatment in Kyle. Comprehensive diabetic eye disease management and advanced retinal care.',
    url: 'https://sparkeyetx.com/conditions/diabetic-retinopathy',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  }
}

export default function DiabeticRetinopathyPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Diabetic Retinopathy</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Diabetic Retinopathy Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Diabetic retinopathy is the leading cause of vision loss in working-age adults, but early detection and expert treatment can preserve your sight. Our specialized team provides comprehensive diabetic eye care using the latest diagnostic technology and evidence-based treatment protocols to protect your vision for years to come.
          </p>
            </div>
            <div className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto md:ml-auto md:mr-0">
              <Image
                src="/images/2748704.jpg"
                alt="Diabetic retinopathy dilated eye exam"
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

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Diabetic Retinopathy
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6 leading-relaxed">
            <p>
              Diabetic retinopathy is a serious eye condition that develops as a complication of diabetes, affecting the blood vessels in the retina—the light-sensitive tissue at the back of your eye. When blood sugar levels remain elevated over time, they can damage the delicate blood vessels that supply the retina with oxygen and nutrients. These damaged vessels may leak fluid, bleed, or become blocked, leading to vision problems and, if left untreated, permanent vision loss or blindness. Diabetic retinopathy affects approximately one in three people with diabetes over the age of 40, making it one of the most common diabetic complications. The condition often develops gradually and may not cause noticeable symptoms in its early stages, which is why regular eye examinations are critical for anyone living with diabetes. The impact on daily life can be profound—from difficulty reading and recognizing faces to challenges driving at night and performing work tasks—making early detection and treatment essential for maintaining independence and quality of life.
            </p>
            <p>
              The primary cause of diabetic retinopathy is chronically elevated blood sugar levels associated with both Type 1 and Type 2 diabetes. When glucose levels remain high over extended periods, they trigger biochemical changes in retinal blood vessels, weakening vessel walls and causing them to bulge, leak, or close entirely. Several risk factors increase the likelihood and severity of diabetic retinopathy: the duration of diabetes (the longer you've had diabetes, the higher your risk), poor blood sugar control (elevated HbA1c levels), high blood pressure, high cholesterol, pregnancy, tobacco use, and certain ethnic backgrounds including African American, Hispanic, and Native American populations. The condition progresses through stages, beginning with mild nonproliferative retinopathy where small areas of balloon-like swelling occur in the retina's blood vessels, advancing to moderate and severe nonproliferative stages with increasing vessel blockage, and potentially progressing to proliferative diabetic retinopathy where new, abnormal blood vessels grow on the retina's surface. These fragile new vessels can leak into the vitreous (the clear gel filling the eye) and cause severe vision loss or retinal detachment.
            </p>
            <p>
              Professional treatment for diabetic retinopathy is not just important—it's essential for preventing vision loss and blindness. While diabetic retinopathy cannot always be completely reversed, early detection through comprehensive dilated eye examinations and timely intervention can slow or stop disease progression in the vast majority of cases. Without professional care, diabetic retinopathy inevitably worsens, leading to complications such as diabetic macular edema (swelling in the central retina that causes blurred vision), vitreous hemorrhage (bleeding into the eye), retinal detachment, and neovascular glaucoma. The key to successful outcomes lies in regular monitoring combined with appropriate treatment when indicated, alongside optimal management of diabetes, blood pressure, and cholesterol. Modern treatments including anti-VEGF injections, laser photocoagulation, and vitrectomy surgery have dramatically improved outcomes for patients with diabetic retinopathy. At Spark Eye Care, we emphasize a collaborative approach, working closely with your primary care physician and endocrinologist to address both your eye health and overall diabetes management, because protecting your vision requires treating the whole person, not just the eye.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Diabetic Retinopathy
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Vision & Visual Changes</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Blurred or fluctuating vision</strong>
                    <p className="text-[var(--color-muted)]">Vision that varies throughout the day or seems hazy, making it difficult to focus on objects at any distance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Dark spots or floaters</strong>
                    <p className="text-[var(--color-muted)]">Seeing dark strings, specks, or cobweb-like shapes that drift across your field of vision, especially noticeable against light backgrounds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Impaired color vision</strong>
                    <p className="text-[var(--color-muted)]">Colors appearing washed out, faded, or less vibrant than they used to be, making it harder to distinguish between shades.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Dark or empty areas in vision</strong>
                    <p className="text-[var(--color-muted)]">Patches in your visual field where you cannot see clearly or at all, often described as blind spots or missing areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty seeing at night</strong>
                    <p className="text-[var(--color-muted)]">Increased trouble with night driving or navigating in low-light conditions, with longer adjustment time to darkness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Sudden vision loss</strong>
                    <p className="text-[var(--color-muted)]">Rapid or dramatic decrease in vision in one or both eyes, which may indicate bleeding or retinal detachment requiring immediate care.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Distorted vision</strong>
                    <p className="text-[var(--color-muted)]">Straight lines appearing wavy or bent, or objects seeming distorted in shape or size, particularly in your central vision.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Functional Impact</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty reading</strong>
                    <p className="text-[var(--color-muted)]">Trouble reading books, menus, medication labels, or text on screens, requiring brighter light or magnification.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Challenges with fine detail work</strong>
                    <p className="text-[var(--color-muted)]">Difficulty with tasks requiring visual precision such as threading needles, writing, or working with small objects.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Problems recognizing faces</strong>
                    <p className="text-[var(--color-muted)]">Inability to identify familiar faces from a distance or distinguish facial features and expressions clearly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty driving</strong>
                    <p className="text-[var(--color-muted)]">Problems seeing road signs, traffic lights, or other vehicles, especially in challenging conditions like rain or at dusk.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Frequent changes in glasses prescription</strong>
                    <p className="text-[var(--color-muted)]">Needing new eyeglass prescriptions more often than usual, with vision continuing to fluctuate despite updated lenses.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Eye pain or pressure</strong>
                    <p className="text-[var(--color-muted)]">Discomfort, aching, or pressure in or around the eyes, which may indicate complications like elevated eye pressure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">No symptoms in early stages</strong>
                    <p className="text-[var(--color-muted)]">Many people experience no noticeable symptoms until significant damage has occurred, underscoring the importance of regular screening.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Because diabetic retinopathy often has no symptoms in its early stages, regular comprehensive eye examinations are critical for everyone living with diabetes.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Diabetic Retinopathy
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough dilated eye examination where we carefully evaluate your retinal health using advanced imaging technology. We perform optical coherence tomography (OCT) to create detailed cross-sectional images of your retina, fluorescein angiography to assess blood flow and detect leaking vessels, and fundus photography to document and monitor changes over time. This comprehensive evaluation allows us to stage your diabetic retinopathy accurately and develop a personalized treatment strategy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on the stage and severity of your diabetic retinopathy, we design a treatment approach tailored to your specific needs. For mild to moderate nonproliferative retinopathy, we may recommend careful monitoring with regular examinations and optimization of blood sugar, blood pressure, and cholesterol control. For more advanced disease, we implement appropriate interventions including anti-VEGF injections, laser treatment, or surgical options. We coordinate closely with your diabetes care team to address both eye health and systemic factors contributing to disease progression.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Ongoing Monitoring & Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Diabetic retinopathy requires consistent, long-term management to preserve your vision. We establish a regular monitoring schedule appropriate for your disease stage, ranging from every few months for advanced disease to annually for early-stage retinopathy. During follow-up visits, we assess treatment response, monitor for progression, and adjust your care plan as needed. Our team remains vigilant for complications requiring urgent intervention and provides education about warning signs that should prompt immediate contact with our office.
              </p>
            </div>
          </div>
          <div className="prose prose-lg max-w-4xl mx-auto text-[var(--color-ink)]">
            <p className="leading-relaxed">
              At Spark Eye Care, we utilize evidence-based treatments proven to prevent vision loss from diabetic retinopathy. For diabetic macular edema—swelling in the central retina that affects reading vision—we administer anti-VEGF (vascular endothelial growth factor) injections such as Eylea, Lucentis, or Avastin directly into the eye to reduce swelling and prevent further damage. These medications block the growth of abnormal blood vessels and reduce leakage from damaged vessels. For proliferative diabetic retinopathy with abnormal vessel growth, we perform panretinal photocoagulation laser treatment, which strategically treats the peripheral retina to reduce oxygen demand and cause abnormal vessels to regress. In advanced cases with vitreous hemorrhage or retinal detachment, vitrectomy surgery may be necessary to remove blood and scar tissue and restore retinal anatomy. Corticosteroid injections or implants provide another option for reducing inflammation and macular edema in selected cases. The most important aspect of treatment is maintaining optimal control of blood sugar (targeting HbA1c below 7%), blood pressure (below 140/90 mmHg), and cholesterol levels, as these systemic factors directly influence disease progression. Our approach combines the most appropriate ocular interventions with collaborative systemic disease management to give you the best possible outcomes for preserving your vision and maintaining your quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Diabetic Retinopathy Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our ophthalmologists are board-certified with specialized training in diabetic eye disease and medical retina, bringing years of experience in diagnosing and treating all stages of diabetic retinopathy.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Individualized Care Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that every patient's diabetic retinopathy is unique. Your treatment plan is customized based on your disease stage, overall health, lifestyle needs, and personal goals for vision preservation.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Advanced Technology</h3>
              <p className="text-[var(--color-muted)]">
                We utilize state-of-the-art diagnostic imaging including OCT, fluorescein angiography, and ultra-widefield retinal photography to detect diabetic retinopathy early and monitor treatment response precisely.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Collaborative Care Model</h3>
              <p className="text-[var(--color-muted)]">
                We work closely with your primary care physician, endocrinologist, and diabetes care team to ensure comprehensive management of both your diabetic retinopathy and underlying diabetes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="font-cormorant text-5xl font-light text-[var(--color-primary)] flex-shrink-0">01</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive evaluation includes a detailed medical history review focusing on your diabetes management, visual acuity testing, dilated eye examination, and advanced retinal imaging. We'll assess the stage of diabetic retinopathy, identify any macular edema or other complications, and discuss your diagnosis in detail. You'll leave with a clear understanding of your condition, recommended treatment approach, and monitoring schedule. This appointment typically takes 90-120 minutes to ensure thoroughness.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-cormorant text-5xl font-light text-[var(--color-primary)] flex-shrink-0">02</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Treatment Begins (Weeks 2-8)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Depending on your disease stage, treatment may begin within days to weeks of your initial evaluation. For early-stage retinopathy, we may recommend close observation with repeat imaging in 3-6 months while optimizing your systemic diabetes control. For more advanced disease requiring intervention, we'll schedule anti-VEGF injections (typically given monthly initially) or laser photocoagulation sessions. Injections are performed in-office using topical anesthesia and take only a few minutes, though you'll need someone to drive you home. Most patients experience gradual vision stabilization or improvement over the first few months of treatment.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-cormorant text-5xl font-light text-[var(--color-primary)] flex-shrink-0">03</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Progress Review (Months 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  We'll monitor your response to treatment through regular follow-up examinations including repeat OCT imaging to assess macular thickness and visual acuity testing. For patients receiving injections, we'll evaluate whether the treatment frequency can be reduced or spacing between injections extended. If laser treatment was performed, we'll assess the retinal response and determine if additional sessions are needed. During this phase, we're also reviewing your systemic diabetes management with your medical team, as improvements in blood sugar control directly impact treatment success.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="font-cormorant text-5xl font-light text-[var(--color-primary)] flex-shrink-0">04</div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Long-term Management (Ongoing)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Diabetic retinopathy requires lifelong monitoring even when successfully treated, as the underlying diabetes remains and the condition can progress. We'll establish a maintenance schedule tailored to your disease stage—ranging from every 3-4 months for advanced retinopathy to annually for mild disease with well-controlled diabetes. Many patients can transition to less frequent injections or observation-only status once their retinopathy stabilizes. The key to long-term success is maintaining optimal diabetes control (HbA1c below 7%), blood pressure control, adhering to your monitoring schedule, and promptly reporting any vision changes. With consistent management, the vast majority of patients maintain functional vision and continue their daily activities without significant limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Diabetic Retinopathy
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">How long does treatment for diabetic retinopathy take?</h3>
                  <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Treatment duration varies significantly depending on the stage and severity of your diabetic retinopathy. Early-stage retinopathy may require only regular monitoring examinations every 6-12 months without active treatment. More advanced disease with macular edema typically requires a series of anti-VEGF injections—initially given monthly for 3-6 months, then spaced out based on your response. Some patients need ongoing injections indefinitely, though many can transition to less frequent treatments (every 2-3 months or longer) once the condition stabilizes. Laser photocoagulation is usually completed in 1-3 sessions. Importantly, diabetic retinopathy requires lifelong monitoring even when successfully treated, as progression can occur if diabetes control worsens. Think of this as managing a chronic condition rather than a one-time fix—consistent care over time protects your vision for the long term.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">Will I need injections in my eye? Does it hurt?</h3>
                  <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Whether you need injections depends on your disease stage. Mild to moderate nonproliferative retinopathy without macular edema typically doesn't require injections—just regular monitoring. However, if you develop diabetic macular edema or proliferative retinopathy, anti-VEGF injections are often the most effective treatment to prevent vision loss. While the idea of an eye injection understandably causes anxiety, the procedure is much more comfortable than most patients expect. We use numbing drops and sometimes a small amount of anesthetic gel, and the injection itself takes only seconds. Most patients describe feeling mild pressure but no pain during the injection. Afterward, your eye may feel scratchy or irritated for a few hours, but this resolves quickly. The temporary discomfort is far outweighed by the vision-preserving benefits. Thousands of these injections are performed safely every day, and most patients quickly become comfortable with the process.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">Does insurance cover diabetic retinopathy treatment?</h3>
                  <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Yes, treatment for diabetic retinopathy is typically covered by medical insurance (not vision insurance) because it's a medical eye disease, not a routine vision issue. Most insurance plans, including Medicare, cover comprehensive diabetic eye examinations, diagnostic imaging such as OCT and fluorescein angiography, anti-VEGF injections, laser treatments, and vitrectomy surgery when medically necessary. Coverage details vary by plan, and you may have copays, coinsurance, or deductibles that apply. We recommend contacting your insurance provider before your first appointment to understand your specific benefits. Our office staff is experienced in working with insurance companies and will help verify your coverage, obtain necessary authorizations, and maximize your benefits. We'll also discuss any out-of-pocket costs upfront so you understand your financial responsibility. Don't let insurance concerns delay essential care—diabetic retinopathy treatment is generally well-covered, and protecting your vision is invaluable.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">Can diabetic retinopathy be reversed or cured?</h3>
                  <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Diabetic retinopathy cannot be fully "cured" because the underlying diabetes remains, but it can be successfully managed, stabilized, and in some cases, early changes may partially improve with excellent diabetes control. The damage to retinal blood vessels that has already occurred is generally permanent, but treatment can prevent further progression and preserve your current vision. With early detection and appropriate intervention—combined with optimal control of blood sugar, blood pressure, and cholesterol—many patients maintain good functional vision throughout their lives. Some patients with diabetic macular edema experience significant vision improvement after anti-VEGF injection treatment as the swelling resolves. The key is catching the disease early before irreversible damage occurs. This is why annual dilated eye examinations are so critical for everyone with diabetes, even if your vision seems fine. Early-stage retinopathy detected through screening can often be managed simply by optimizing diabetes control, while advanced disease with vision loss is much harder to treat effectively.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">What happens if I don't get treatment?</h3>
                  <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Without treatment, diabetic retinopathy almost always progresses over time, leading to increasingly severe vision loss and potential blindness. Early-stage retinopathy may worsen slowly over years, while proliferative retinopathy can cause rapid vision loss from bleeding or retinal detachment. Untreated diabetic macular edema causes gradual deterioration in reading vision and central vision that becomes irreversible once the photoreceptor cells die. The abnormal blood vessels that develop in proliferative disease are fragile and prone to sudden hemorrhage, which can cause dramatic vision loss overnight. Additionally, untreated proliferative diabetic retinopathy can lead to neovascular glaucoma—a severe form of glaucoma that's difficult to treat and can cause pain and complete blindness. The tragedy is that most severe vision loss from diabetic retinopathy is preventable with regular screening and timely treatment. Studies consistently show that patients who receive appropriate treatment maintain significantly better vision than those who delay or avoid care. The time to act is now—vision loss from diabetic retinopathy is often irreversible, but progression can be stopped with treatment.
                </p>
              </div>
            </details>

            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer list-none p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-[var(--color-ink)]">How can I prevent diabetic retinopathy from getting worse?</h3>
                  <svg className="w-6 h-6 text-[var(--color-primary)] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The single most important factor in preventing diabetic retinopathy progression is maintaining optimal blood sugar control, targeting an HbA1c level below 7%. Studies show that improving HbA1c by even one percentage point significantly reduces retinopathy progression risk. Blood pressure control is equally critical—keep it below 140/90 mmHg, as high blood pressure accelerates retinal blood vessel damage. Managing your cholesterol levels, particularly with statin medications when appropriate, also helps. Attend all scheduled eye examinations so any progression is detected early when it's most treatable. If you smoke, quitting is essential—smoking dramatically worsens diabetic retinopathy. Maintain a healthy weight through diet and regular exercise, as this improves insulin sensitivity and overall diabetes control. Work closely with your endocrinologist or primary care physician to optimize your diabetes medications. Promptly report any vision changes to your eye doctor—don't wait for your scheduled appointment if you notice new floaters, flashes of light, blurred vision, or sudden vision loss. Finally, follow your eye doctor's treatment recommendations consistently, including keeping injection appointments if prescribed. Prevention and early intervention are far more effective than trying to restore vision after severe damage occurs.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/glaucoma" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Glaucoma
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Progressive optic nerve damage often associated with elevated eye pressure, which can cause vision loss if untreated. People with diabetes have higher glaucoma risk.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">
                Learn more →
              </span>
            </a>
            <a href="/conditions/age-related-macular-degeneration" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Macular Degeneration
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Age-related deterioration of the macula causing central vision loss. Like diabetic retinopathy, it affects the retina and may require similar treatments.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">
                Learn more →
              </span>
            </a>
            <a href="/conditions/cataracts" className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-2xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Cataracts
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Clouding of the eye's natural lens that causes vision to become blurry. People with diabetes tend to develop cataracts earlier and more rapidly.
              </p>
              <span className="text-[var(--color-primary)] font-medium group-hover:underline">
                Learn more →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Diabetic Retinopathy Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-95">
            You don't have to face diabetic retinopathy alone. Our team is ready to help you protect your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
            >
              Schedule Consultation
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