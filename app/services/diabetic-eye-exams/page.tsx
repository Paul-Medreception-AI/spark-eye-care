import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diabetic Eye Exams | Spark Eye Care',
  description: 'Comprehensive diabetic eye exams to detect and manage diabetic retinopathy, macular edema, and other diabetes-related vision complications. Early detection saves sight.',
}

export default function DiabeticEyeExamsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Diabetic Eye Exams</span>
          </nav>
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Diabetic Eye Exams in Spark Eye Care
          </h1>
          <p className="text-xl leading-relaxed opacity-95 max-w-3xl">
            Specialized comprehensive eye examinations designed to detect, monitor, and manage diabetes-related eye complications before they threaten your vision. Our advanced diagnostic technology and expert care help protect your sight through early intervention and personalized treatment planning.
          </p>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What is a Diabetic Eye Exam?
          </h2>
          
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6">
            <p>
              A diabetic eye exam is a specialized, comprehensive evaluation specifically designed for individuals with diabetes to detect vision-threatening complications at their earliest stages. Diabetes affects the blood vessels throughout your body, including the delicate vessels in your retina, potentially leading to diabetic retinopathy, diabetic macular edema, glaucoma, and cataracts. These conditions often develop without noticeable symptoms in their early stages, making regular professional screening absolutely essential for preserving your vision.
            </p>
            
            <p>
              During a diabetic eye exam, we utilize advanced diagnostic imaging technology that goes far beyond a standard eye examination. Our evaluation includes dilated fundus photography, optical coherence tomography (OCT) to create detailed cross-sectional images of your retina, and careful assessment of intraocular pressure. We examine the macula for signs of swelling, check for abnormal blood vessel growth, assess the optic nerve for glaucoma damage, and evaluate overall retinal health. This thorough approach allows us to detect microscopic changes in your retinal blood vessels months or even years before you might notice any vision changes.
            </p>
            
            <p>
              The American Diabetes Association and the American Academy of Ophthalmology both recommend that individuals with Type 1 diabetes have their first comprehensive eye exam within five years of diagnosis, while those with Type 2 diabetes should be examined immediately upon diagnosis. Annual examinations are recommended for most patients, though some may require more frequent monitoring depending on the severity of diabetic eye disease, blood sugar control, duration of diabetes, and presence of other risk factors such as hypertension or kidney disease. Early detection through regular diabetic eye exams reduces the risk of severe vision loss by 95%, making these examinations one of the most important preventive health measures for people living with diabetes.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Signs You Need a Diabetic Eye Exam
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You have been diagnosed with Type 1 or Type 2 diabetes at any stage</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Experiencing blurry or fluctuating vision that changes throughout the day</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Seeing dark spots, floaters, or cobweb-like shapes in your visual field</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty with color perception or night vision deterioration</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>You are pregnant with diabetes or have developed gestational diabetes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>It has been more than one year since your last comprehensive diabetic eye exam</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sudden vision loss, dark areas, or curtain-like shadows in your vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Your blood sugar levels have been difficult to control or frequently elevated</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 text-center text-[var(--color-ink)] animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Our Approach to Diabetic Eye Exams
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto animate-fade-up">
            We combine state-of-the-art diagnostic technology with compassionate, personalized care to protect your vision through every stage of diabetes management.
          </p>

          {/* Three Column Process */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 animate-fade-up">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a detailed review of your diabetes history, current management, medications, and any vision concerns. Our thorough evaluation includes visual acuity testing, pupil dilation, intraocular pressure measurement, and advanced retinal imaging using optical coherence tomography (OCT) and fundus photography to detect even microscopic changes.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Personalized Monitoring Plan
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your examination results, we create a customized monitoring schedule that may range from every 6-12 months for those without retinopathy to every 2-3 months for active disease. We coordinate closely with your primary care physician and endocrinologist to ensure comprehensive diabetes management that protects your vision.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Ongoing Support & Treatment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                When diabetic eye disease is detected, we provide immediate access to advanced treatments including anti-VEGF injections for macular edema, laser photocoagulation for proliferative retinopathy, and surgical referrals when necessary. We track your progress over time and adjust treatment strategies to achieve the best possible outcomes for your vision.
              </p>
            </div>
          </div>

          {/* Detailed Treatment Description */}
          <div className="max-w-4xl mx-auto animate-fade-up">
            <div className="bg-gradient-to-br from-[var(--color-light)] to-white rounded-2xl p-10 shadow-sm">
              <h3 className="text-3xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Advanced Diagnostic Technology & Treatment Options
              </h3>
              <div className="space-y-6 text-[var(--color-ink)]">
                <p>
                  Our practice utilizes the latest ophthalmic imaging technology to detect diabetic eye disease at its earliest, most treatable stages. Optical coherence tomography (OCT) provides microscopic cross-sectional views of your retina, allowing us to measure retinal thickness with micron-level precision and detect fluid accumulation from macular edema before it affects your vision. Ultra-widefield fundus photography captures detailed images of up to 200 degrees of your retina in a single image, enabling comprehensive documentation and comparison over time to track disease progression or treatment response.
                </p>
                <p>
                  When diabetic retinopathy or macular edema is detected, we offer a comprehensive range of evidence-based treatments. For diabetic macular edema, anti-VEGF intravitreal injections such as Eylea, Lucentis, or Avastin can reduce retinal swelling and stabilize or improve vision in most patients. These medications work by blocking vascular endothelial growth factor, a protein that promotes abnormal blood vessel growth and leakage. Focal or scatter laser photocoagulation treats leaking blood vessels and prevents the growth of abnormal new vessels that characterize proliferative diabetic retinopathy. For more advanced cases involving vitreous hemorrhage or retinal detachment, we coordinate surgical intervention with experienced vitreoretinal surgeons.
                </p>
                <p>
                  Beyond direct eye treatments, we emphasize the critical importance of systemic diabetes management in preserving vision. Studies consistently demonstrate that maintaining optimal blood glucose control (HbA1c below 7%), blood pressure management, and cholesterol control significantly reduces the risk of developing diabetic retinopathy and slows its progression. We provide detailed education about the connection between your overall health and eye health, empowering you to take an active role in protecting your vision through lifestyle modifications, medication adherence, and regular medical care coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="text-4xl font-light mb-8 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What to Expect: Your Diabetic Eye Exam Timeline
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">First Visit (90-120 minutes)</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Your comprehensive diabetic eye exam begins with medical history review and visual acuity testing. We will administer dilating drops, which take 20-30 minutes to work fully and will cause temporary light sensitivity and blurred near vision for 4-6 hours. During dilation, we perform advanced retinal imaging with OCT and fundus photography. Our doctor then examines your retina, optic nerve, and blood vessels under high magnification using specialized lenses. You will receive detailed results, photographs of your retina, and a personalized follow-up plan before leaving. Bring sunglasses and avoid driving if possible, as your vision will be temporarily affected.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Follow-Up Schedule (Varies by Findings)</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    If no diabetic retinopathy is detected and your diabetes is well-controlled, annual examinations are typically sufficient. Mild nonproliferative diabetic retinopathy requires monitoring every 6-12 months. Moderate retinopathy necessitates exams every 3-6 months, while severe nonproliferative or proliferative retinopathy may require evaluation every 2-3 months. If treatment is initiated, such as anti-VEGF injections for macular edema, you will need monthly visits initially, with frequency adjusted based on your response to therapy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Active Treatment Phase (If Needed)</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    When diabetic eye disease requires intervention, treatment response typically becomes apparent within 1-3 months. Anti-VEGF injections often produce measurable improvement in retinal thickness on OCT imaging after the first or second injection, with visual improvement following anatomic improvement. Laser photocoagulation effects develop more gradually over 2-4 months as treated areas stabilize. Most patients with diabetic macular edema require an initial loading phase of monthly injections for 3-5 months, followed by less frequent maintenance injections based on disease activity.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Long-Term Management</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    Diabetic eye disease requires lifelong monitoring, even after successful treatment or in the absence of current complications. Your risk of developing or experiencing progression of diabetic retinopathy increases with longer diabetes duration, so maintaining regular examination schedules becomes increasingly important over time. With consistent monitoring, optimal diabetes control, and timely intervention when needed, the vast majority of patients maintain functional vision throughout their lives. We become your long-term partners in vision preservation, coordinating care with your medical team and adapting our monitoring intensity to your individual risk profile and disease status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Common Questions About Diabetic Eye Exams
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>How often should I have a diabetic eye exam?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                The frequency of diabetic eye exams depends on your diabetes type, duration, control, and whether retinopathy has been detected. Individuals with Type 1 diabetes should have their first comprehensive dilated eye exam within 5 years of diagnosis, then annually. Those with Type 2 diabetes should be examined at the time of diagnosis and annually thereafter, since many people have had undiagnosed diabetes for years before detection. If you have no retinopathy and excellent diabetes control, annual exams are usually sufficient. Any degree of diabetic retinopathy requires more frequent monitoring—every 6-12 months for mild disease, every 3-6 months for moderate disease, and every 2-3 months for severe or proliferative retinopathy. Pregnant women with diabetes need examinations each trimester and for one year postpartum due to the risk of rapid progression during pregnancy.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Is the diabetic eye exam different from a regular eye exam?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, a diabetic eye exam is significantly more comprehensive than a routine eye examination. While both include visual acuity testing and basic eye health evaluation, the diabetic eye exam requires pupil dilation and specialized imaging to thoroughly evaluate the retina for signs of diabetic damage. We use optical coherence tomography (OCT) to create detailed cross-sectional images that can detect retinal thickening from macular edema at microscopic levels. Ultra-widefield fundus photography documents the entire retinal surface to identify peripheral retinopathy that might be missed with standard examination techniques. Our evaluation specifically focuses on assessing retinal blood vessels for microaneurysms, hemorrhages, cotton-wool spots, hard exudates, neovascularization, and other signs of diabetic retinopathy. We also carefully evaluate for diabetic-related cataracts and increased glaucoma risk. This specialized examination takes longer and provides much more detailed information about diabetes-related eye health than a standard vision screening.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Will my vision be affected after the exam?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, your vision will be temporarily affected after a diabetic eye exam due to the dilating drops required for thorough retinal evaluation. The drops cause your pupils to enlarge, which creates significant light sensitivity and makes it difficult to focus on near objects like reading material or phone screens. These effects typically last 4-6 hours, though some individuals remain dilated for up to 8 hours depending on eye color (lighter eyes often dilate longer) and individual response to the medication. Distance vision is generally less affected than near vision, but depth perception may be altered. We strongly recommend bringing sunglasses to reduce light sensitivity after your exam. If possible, arrange for someone else to drive you home, or plan to wait at least 30-45 minutes before driving if you must drive yourself. Avoid scheduling important work requiring detailed near vision or reading on the afternoon of your exam. Despite the temporary inconvenience, dilation is essential for detecting early diabetic retinopathy and cannot be adequately performed without it.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Can diabetic eye disease be reversed or only slowed down?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                The answer depends on the stage and type of diabetic eye disease present. Very early nonproliferative diabetic retinopathy (a few microaneurysms or small hemorrhages) can sometimes improve or resolve completely with excellent long-term blood sugar control, though this is uncommon. More commonly, our goal is to prevent progression and preserve your current level of vision. However, diabetic macular edema—swelling in the central retina—often responds dramatically well to treatment with anti-VEGF injections, with many patients experiencing significant visual improvement as the swelling resolves. Studies show that approximately 40% of patients with diabetic macular edema gain two or more lines of vision with appropriate anti-VEGF therapy. Laser photocoagulation for proliferative retinopathy doesn't improve vision but prevents vision loss by stopping abnormal blood vessel growth and reducing hemorrhage risk. The key message is that while we may not be able to reverse established retinal damage from years of diabetes, we can often prevent further deterioration and in some cases (particularly with macular edema treatment) restore vision that has recently declined. This is why regular screening and early intervention are so critical—treatment is most effective before permanent retinal damage occurs.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Does insurance cover diabetic eye exams?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans, including Medicare, cover comprehensive diabetic eye examinations because they are considered medically necessary preventive care for individuals with diabetes. These exams are typically billed to your medical insurance (not vision insurance) using diabetes and eye examination diagnosis codes. Medicare Part B covers one dilated eye exam per year for all beneficiaries with diabetes, and more frequent exams when diabetic retinopathy or other complications are present. Private insurance coverage varies by plan, but the vast majority recognize diabetic eye exams as essential preventive services under diabetes management. If treatment is required, such as anti-VEGF injections for macular edema, these are also generally covered by medical insurance, though prior authorization may be required. We recommend verifying your specific coverage with your insurance carrier before your appointment, and our office staff is happy to check your benefits and obtain any necessary pre-authorizations. Vision insurance plans typically do not cover diabetic eye exams since they are medical rather than routine vision care, so you should expect to use your medical insurance for these visits.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 animate-fade-up">
          <h3 className="text-3xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/comprehensive-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Complete vision and eye health evaluations for all ages, including refraction, prescription updates, and screening for common eye diseases.
              </p>
            </a>

            <a href="/services/glaucoma-management" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Glaucoma Management
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Advanced screening, diagnosis, and treatment of glaucoma to prevent vision loss from elevated eye pressure and optic nerve damage.
              </p>
            </a>

            <a href="/services/macular-degeneration" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="text-2xl font-light mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Macular Degeneration
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Diagnosis and management of age-related macular degeneration with advanced imaging, monitoring, and treatment to preserve central vision.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Protect Your Vision with a Diabetic Eye Exam?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Early detection and treatment can prevent 95% of diabetes-related vision loss. Schedule your comprehensive diabetic eye exam today.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
          >
            Schedule Your Exam Today
          </a>
        </div>
      </section>
    </main>
  )
}