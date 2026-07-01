import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Diabetic Eye Exams | Spark Eye Care',
  description: 'Comprehensive diabetic eye exams to protect your vision. Early detection and monitoring of diabetic retinopathy and other diabetes-related eye conditions.',
}

export default function DiabeticEyeExamsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Diabetic Eye Exams</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Diabetic Eye Exams in Texas
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            Protect your vision with specialized diabetic eye examinations designed to detect and monitor diabetes-related eye complications early. Our comprehensive approach combines advanced diagnostic technology with personalized care to preserve your eye health and prevent vision loss.
          </p>
            </div>
            <div className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto md:ml-auto md:mr-0">
              <Image
                src="/images/2748704.jpg"
                alt="Diabetic eye exam"
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

      {/* WHAT IS IT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 animate-fade-up">
            What is a Diabetic Eye Exam?
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed animate-fade-up">
            <p>
              A diabetic eye exam is a specialized comprehensive eye examination specifically designed for individuals living with diabetes, whether type 1, type 2, or gestational diabetes. These examinations go beyond standard vision testing to focus on detecting and monitoring the unique eye complications that diabetes can cause, including diabetic retinopathy, diabetic macular edema, cataracts, and glaucoma. The exam utilizes advanced diagnostic imaging and careful evaluation of the retina, blood vessels, and other delicate structures of the eye that are particularly vulnerable to damage from elevated blood sugar levels.
            </p>
            <p>
              Diabetes affects the small blood vessels throughout the body, and the eyes are especially susceptible to this damage. High blood glucose levels can cause the blood vessels in the retina to leak fluid or bleed, leading to vision problems and potential blindness if left undetected and untreated. Diabetic retinopathy is currently the leading cause of blindness among working-age adults in the United States, yet up to 95% of severe vision loss from diabetes is preventable with early detection and timely treatment. Regular diabetic eye exams are essential because eye damage often occurs before any noticeable vision changes, making these screenings crucial for catching problems in their earliest, most treatable stages.
            </p>
            <p>
              The American Diabetes Association recommends that people with type 1 diabetes have their first dilated eye exam within five years of diagnosis, while those with type 2 diabetes should have an exam immediately upon diagnosis since the disease may have been present for years before detection. Pregnant women with diabetes should be examined during the first trimester and monitored closely throughout pregnancy and postpartum. These regular examinations are not just recommended—they are essential preventive care that can mean the difference between maintaining healthy vision and experiencing irreversible vision loss.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 animate-fade-up">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6">Signs You Need a Diabetic Eye Exam</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">You have been diagnosed with type 1, type 2, or gestational diabetes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">It has been more than 12 months since your last comprehensive eye exam</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">You are experiencing blurry or fluctuating vision, even if it comes and goes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">You notice floaters, dark spots, or shadows in your field of vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">You have difficulty with color perception or night vision</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">Your blood sugar levels have been poorly controlled or fluctuating</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]/80">You are pregnant and have pre-existing or gestational diabetes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE TREAT IT */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center animate-fade-up">
            Our Approach to Diabetic Eye Exams
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="bg-[var(--color-primary)] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Comprehensive Assessment</h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                We begin with a thorough review of your diabetes management, including your HbA1c levels, blood sugar control history, and any previous eye-related concerns. This comprehensive intake helps us understand your individual risk factors and tailor the examination to your specific needs.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="bg-[var(--color-primary)] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Advanced Diagnostic Testing</h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Using state-of-the-art technology including dilated fundus examination, optical coherence tomography (OCT), and retinal photography, we capture detailed images of your retina and optic nerve to detect even the earliest signs of diabetic eye disease before symptoms appear.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="bg-[var(--color-primary)] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Personalized Monitoring Plan</h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Based on your examination results and risk profile, we develop a customized monitoring schedule and coordinate with your diabetes care team to ensure comprehensive management. If any concerns are detected, we provide prompt referrals and treatment recommendations.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6 animate-fade-up">Specialized Diagnostic Technologies</h3>
            <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed animate-fade-up">
              <p>
                Our diabetic eye examinations utilize multiple advanced technologies to provide the most comprehensive assessment possible. Optical Coherence Tomography (OCT) creates high-resolution cross-sectional images of the retina, allowing us to detect subtle changes in retinal thickness and identify diabetic macular edema in its earliest stages. Digital retinal photography documents the appearance of your retina over time, enabling us to track even minute changes that might indicate progression of diabetic retinopathy.
              </p>
              <p>
                The dilated fundus examination remains the gold standard for comprehensive retinal evaluation. By temporarily widening your pupils with eye drops, we can examine the entire retina, including the peripheral areas where early diabetic changes often first appear. We carefully inspect the blood vessels for signs of microaneurysms, hemorrhages, exudates, and neovascularization—all indicators of diabetic retinopathy at various stages.
              </p>
              <p>
                When clinically indicated, we may perform fluorescein angiography, a specialized imaging technique that uses an injectable dye to highlight blood flow patterns in the retina and identify areas of leakage or poor circulation. We also conduct tonometry to measure intraocular pressure, as diabetes increases the risk of glaucoma, and perform visual field testing to detect any peripheral vision loss that may indicate advanced diabetic eye disease or concurrent glaucoma.
              </p>
            </div>

            <div className="mt-12 bg-[var(--color-light)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">Stages of Diabetic Retinopathy We Monitor</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Mild Nonproliferative Retinopathy</h4>
                  <p className="text-[var(--color-ink)]/70">Early stage with microaneurysms—small areas of balloon-like swelling in the retina's tiny blood vessels.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Moderate Nonproliferative Retinopathy</h4>
                  <p className="text-[var(--color-ink)]/70">Blood vessels that nourish the retina become blocked, with more severe changes visible during examination.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Severe Nonproliferative Retinopathy</h4>
                  <p className="text-[var(--color-ink)]/70">Many more blood vessels are blocked, depriving blood supply to areas of the retina and triggering growth factor signals.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Proliferative Diabetic Retinopathy</h4>
                  <p className="text-[var(--color-ink)]/70">Advanced stage where new, abnormal blood vessels grow, which are fragile and can leak, causing severe vision loss and requiring immediate treatment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-10 text-center">What to Expect</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">1</div>
                </div>
                <div>
                  <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">First Visit (90-120 minutes)</h3>
                  <p className="text-[var(--color-ink)]/70 leading-relaxed">
                    Your initial diabetic eye exam begins with a detailed health history, including questions about your diabetes diagnosis, current medications, blood sugar control, and any vision concerns. We will perform vision testing, measure eye pressure, and administer dilating drops. After allowing 20-30 minutes for full dilation, we will conduct a comprehensive retinal examination and capture diagnostic images. You should plan to have someone drive you home as your vision will be blurry and light-sensitive for several hours after dilation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">2</div>
                </div>
                <div>
                  <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Results Discussion (Same Day)</h3>
                  <p className="text-[var(--color-ink)]/70 leading-relaxed">
                    Before you leave, we will review all findings with you in detail, showing you images of your retina and explaining what we observed. If no diabetic eye disease is detected, we will establish a monitoring schedule appropriate for your risk level—typically annual exams for those with well-controlled diabetes and no retinopathy. If we detect any changes, we will discuss the severity, treatment options, and follow-up timeline.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">3</div>
                </div>
                <div>
                  <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Follow-Up Schedule (Personalized)</h3>
                  <p className="text-[var(--color-ink)]/70 leading-relaxed">
                    Your follow-up schedule depends on your examination findings. Those with no retinopathy and well-controlled diabetes typically return annually. Mild nonproliferative retinopathy may require monitoring every 6-12 months. More advanced changes necessitate more frequent examinations, potentially every 2-4 months, and may require referral to a retina specialist for treatment such as laser therapy or intravitreal injections.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-semibold">4</div>
                </div>
                <div>
                  <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">Long-Term Partnership</h3>
                  <p className="text-[var(--color-ink)]/70 leading-relaxed">
                    Diabetic eye care is a lifelong commitment, and we are here to partner with you throughout your journey. We communicate with your primary care physician and endocrinologist to coordinate your overall diabetes management, as blood sugar control directly impacts eye health. We celebrate stable results with you and provide support and rapid intervention if changes occur. Our goal is to help you preserve your vision for life through vigilant monitoring and timely care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 animate-fade-up">
            Common Questions About Diabetic Eye Exams
          </h2>
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>How often should I have a diabetic eye exam?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                The frequency of diabetic eye exams depends on your type of diabetes, how long you have had it, and whether any eye disease has been detected. As a general guideline, people with type 1 diabetes should have their first comprehensive dilated eye exam within five years of diagnosis, then annually thereafter if no retinopathy is present. Those with type 2 diabetes should have an exam shortly after diagnosis since the condition may have been present for years undetected, then annually if no issues are found. If mild nonproliferative retinopathy is detected, you may need exams every 6-12 months. More advanced retinopathy requires more frequent monitoring every 2-4 months. Pregnant women with pre-existing diabetes should be examined in the first trimester and monitored throughout pregnancy and one year postpartum.
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Will my eyes be dilated, and how long does it last?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                Yes, dilation is an essential component of a comprehensive diabetic eye exam because it allows us to see the entire retina, including the peripheral areas where diabetic changes often first appear. We will instill eye drops that cause your pupils to widen, which takes about 20-30 minutes to take full effect. During dilation, your near vision will become blurry and your eyes will be more sensitive to light. These effects typically last 4-6 hours, though some patients with lighter-colored eyes may experience effects for up to 8-12 hours. We strongly recommend bringing sunglasses and arranging for someone to drive you home. While newer imaging technologies like ultra-widefield retinal photography can sometimes supplement dilation, they do not replace the detailed view that dilation provides, especially for detecting subtle diabetic changes.
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Can diabetic eye disease be treated if it is detected?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                Yes, diabetic eye disease is highly treatable when caught early, which is precisely why regular screening is so critical. For mild to moderate nonproliferative diabetic retinopathy without macular edema, the primary treatment is optimizing blood sugar, blood pressure, and cholesterol control through working closely with your diabetes care team. For more advanced retinopathy or diabetic macular edema, several effective treatments are available including anti-VEGF intravitreal injections that reduce swelling and abnormal blood vessel growth, focal or panretinal laser photocoagulation to seal leaking vessels and prevent new vessel formation, and in severe cases, vitrectomy surgery to remove blood and scar tissue from the eye. Studies show that these interventions can reduce the risk of severe vision loss by 90% or more when applied at the appropriate stage. The key is detecting changes before significant vision loss occurs, as advanced damage is more difficult to reverse.
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>My vision seems fine. Do I still need a diabetic eye exam?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                Absolutely yes—this is one of the most important things to understand about diabetic eye disease. In the early and even moderate stages of diabetic retinopathy, you may have no symptoms whatsoever and your vision may be completely normal. Damage to the blood vessels in your retina occurs before it affects your central vision or becomes noticeable to you. By the time you notice blurred vision, floaters, or vision loss, the disease has often progressed to an advanced stage that is more difficult to treat and may have already caused permanent damage. The entire purpose of regular diabetic eye exams is to detect these changes in their earliest stages when treatment is most effective and vision can be preserved. Studies consistently show that regular eye exams and early intervention prevent up to 95% of diabetes-related severe vision loss. Waiting until you notice vision problems means missing the critical window for the most effective treatment.
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                <span>Does good diabetes control really make a difference for my eyes?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)]/70 leading-relaxed">
                Yes, blood sugar control has a profound impact on your eye health and is the single most important factor in preventing and slowing diabetic eye disease. Landmark studies including the Diabetes Control and Complications Trial (DCCT) and the United Kingdom Prospective Diabetes Study (UKPDS) have definitively proven that intensive blood sugar control reduces the risk of developing diabetic retinopathy by 76% and slows progression of existing retinopathy by 54%. Every percentage point reduction in HbA1c (a measure of average blood sugar over three months) corresponds to a significant decrease in eye disease risk. Additionally, controlling blood pressure and cholesterol levels also plays an important protective role. While we provide specialized eye care and monitoring, the most powerful prevention strategy remains working closely with your primary care physician or endocrinologist to maintain target blood sugar levels, blood pressure below 140/90 mmHg, and healthy cholesterol levels. Your daily diabetes management directly protects your vision for the long term.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-10 text-center">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/diabetic-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="bg-[var(--color-primary)] rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Comprehensive Eye Exams</h4>
              <p className="text-[var(--color-ink)]/70">Complete vision and eye health evaluations for all ages, including refraction, ocular health screening, and disease detection.</p>
            </a>

            <a href="/services/minimally-invasive-glaucoma-surgery" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="bg-[var(--color-primary)] rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Glaucoma Screening</h4>
              <p className="text-[var(--color-ink)]/70">Early detection and monitoring of glaucoma through pressure testing, optic nerve evaluation, and visual field assessment.</p>
            </a>

            <a href="/services/diabetic-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="bg-[var(--color-primary)] rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">Retinal Imaging</h4>
              <p className="text-[var(--color-ink)]/70">Advanced diagnostic imaging technology to capture detailed images of your retina for comprehensive eye disease detection and monitoring.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 animate-fade-up">
            Ready to Protect Your Vision with a Diabetic Eye Exam?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed animate-fade-up">
            Early detection is key to preventing diabetes-related vision loss. Schedule your comprehensive diabetic eye exam today and take control of your eye health.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors animate-fade-up"
          >
            Schedule Your Exam
          </a>
        </div>
      </section>
    </main>
  )
}