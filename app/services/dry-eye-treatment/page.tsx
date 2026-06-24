import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dry Eye Treatment | Spark Eye Care',
  description: 'Comprehensive dry eye treatment in your area. Advanced diagnostics and personalized care for chronic dry eye syndrome, meibomian gland dysfunction, and ocular surface disease.',
}

export default function DryEyeTreatmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Dry Eye Treatment</span>
          </nav>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Dry Eye Treatment at Spark Eye Care
          </h1>
          <p className="text-xl leading-relaxed mb-4 opacity-95 max-w-3xl">
            Our comprehensive dry eye treatment program combines advanced diagnostic technology with personalized therapeutic approaches to address the root causes of chronic dry eye syndrome, meibomian gland dysfunction, and ocular surface disease.
          </p>
          <p className="text-lg leading-relaxed opacity-90 max-w-3xl">
            Whether you experience occasional discomfort or persistent symptoms that impact your daily life, our evidence-based treatments are designed to restore comfort, improve tear film quality, and protect your long-term ocular health.
          </p>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-8 text-[var(--color-ink)]">
            What is Dry Eye Treatment?
          </h2>
          
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-6">
              Dry eye disease is a chronic, multifactorial condition affecting millions of people worldwide. It occurs when your eyes don't produce enough quality tears to keep the ocular surface adequately lubricated, or when tears evaporate too quickly due to meibomian gland dysfunction. This leads to inflammation, discomfort, and potential damage to the eye's surface. Dry eye treatment encompasses a range of therapeutic interventions designed to restore the natural tear film, reduce inflammation, and address underlying causes rather than simply masking symptoms.
            </p>
            
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-6">
              Modern dry eye treatment has evolved significantly beyond basic artificial tears. We now understand that dry eye is often an inflammatory condition with multiple contributing factors including meibomian gland dysfunction, blepharitis, autoimmune conditions, environmental factors, digital device use, hormonal changes, and certain medications. Effective treatment requires comprehensive evaluation to identify your specific dry eye subtype and underlying causes, followed by a customized therapeutic approach that may include multiple complementary interventions.
            </p>
            
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-10">
              At Spark Eye Care, we utilize advanced diagnostic tools including meibography, tear osmolarity testing, and ocular surface imaging to precisely characterize your dry eye condition. This diagnostic precision allows us to develop targeted treatment protocols that address the root causes of your symptoms. Our treatment options range from prescription medications and in-office procedures to lifestyle modifications and nutritional support, all designed to work synergistically to restore ocular comfort and health.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Common Dry Eye Symptoms</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Burning or stinging sensation</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Gritty or sandy feeling in eyes</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Excessive tearing or watery eyes</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Redness and inflammation</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Blurred vision or eye fatigue</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Light sensitivity</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Difficulty wearing contact lenses</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Symptoms worsening throughout the day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-16 text-center text-[var(--color-ink)] animate-fade-up">
            Our Approach to Dry Eye Treatment
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.23 0 4.462s-3.23 1.232-4.462 0L13.5 17.8" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Comprehensive Evaluation</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                We begin with advanced diagnostic testing including tear film analysis, meibomian gland imaging, osmolarity measurement, and inflammatory marker assessment to identify your specific dry eye subtype and severity.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Based on your diagnostic results, we create a customized treatment protocol combining multiple therapeutic modalities tailored to address your specific underlying causes and symptom patterns.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Ongoing Optimization</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                We monitor your progress through regular follow-up assessments, adjusting treatments as needed and introducing additional therapies to achieve optimal long-term symptom control and ocular surface health.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-up">
            <h3 className="text-3xl font-semibold text-[var(--color-ink)] mb-8">Our Treatment Modalities</h3>
            
            <div className="space-y-6">
              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Prescription Medications</h4>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  We utilize advanced prescription therapies including anti-inflammatory medications, immunomodulators, and tear production stimulants. Medications like cyclosporine, lifitegrast, and varenicline nasal spray address the underlying inflammation and stimulate natural tear production. We also prescribe antibiotic-steroid combinations for blepharitis and meibomian gland dysfunction when appropriate.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Intense Pulsed Light (IPL) Therapy</h4>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  IPL therapy is a cutting-edge treatment for meibomian gland dysfunction, the leading cause of evaporative dry eye. This non-invasive procedure uses carefully calibrated light pulses to reduce inflammation around the eyelids, improve meibomian gland function, and decrease abnormal blood vessels that contribute to chronic inflammation. Most patients require a series of 3-4 treatments for optimal results.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Meibomian Gland Expression & Thermal Therapy</h4>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  In-office thermal pulsation devices and manual expression techniques help clear blocked meibomian glands and restore healthy lipid secretion to the tear film. We use advanced technologies that apply controlled heat and gentle pressure to liquify and express thickened oils from the glands, providing immediate relief and long-term improvement in tear film stability.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Punctal Plugs & Moisture Retention</h4>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  For patients with aqueous deficiency, we offer temporary or long-term punctal plugs that slow tear drainage and increase tear film retention on the ocular surface. These tiny biocompatible devices are placed painlessly in the tear ducts and can provide significant symptom relief by preserving your natural and supplemental tears.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Nutritional & Lifestyle Support</h4>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  We provide comprehensive guidance on omega-3 supplementation, dietary modifications, environmental optimization, and digital device habits that support ocular surface health. Evidence shows that high-quality omega-3 fatty acids can reduce inflammation and improve meibomian gland function, while simple environmental changes can dramatically reduce symptom triggers.
                </p>
              </div>

              <div className="bg-[var(--color-cream)] rounded-lg p-6">
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Advanced Tear Supplements</h4>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  We recommend specific preservative-free artificial tears, lipid-based supplements, and prescription eye ointments based on your tear film deficiencies. The right supplementation strategy can provide immediate symptom relief while other treatments address underlying causes, and we help you navigate the overwhelming array of over-the-counter options to find what works best for your condition.
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
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-10 text-[var(--color-ink)]">
              What to Expect During Treatment
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Initial Consultation</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Your first visit includes comprehensive diagnostic testing to characterize your dry eye condition. We'll perform tear film evaluation, meibography, osmolarity testing, and ocular surface examination. This appointment typically takes 60-90 minutes and provides the foundation for your personalized treatment plan. You'll leave with initial recommendations and often begin treatment the same day.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Weeks 2-4: Early Treatment Phase</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  During the first few weeks, you'll implement your at-home treatment regimen including prescription medications, quality tear supplements, warm compresses, and lifestyle modifications. Some patients notice improvement within days, while others require several weeks. We schedule a follow-up to assess your response and make any necessary adjustments. If you're undergoing in-office procedures like IPL, we'll begin the treatment series during this phase.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Months 1-3: Optimization Period</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Most patients experience significant symptom improvement during this period as treatments take full effect. Prescription medications typically require 4-12 weeks to demonstrate maximum benefit, while procedural interventions show progressive improvement with each treatment session. We continue monitoring your progress, completing any planned treatment series, and fine-tuning your regimen based on your response.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Long-Term Management</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Dry eye is a chronic condition that requires ongoing management to maintain optimal results. Once we achieve symptom control, we establish a maintenance plan that may include continued medication use, periodic in-office treatments, and regular monitoring appointments. Many patients can reduce treatment intensity over time, but consistent management prevents symptom recurrence and protects long-term ocular health. We typically see stable patients every 3-6 months for monitoring.
                </p>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-lg p-6">
              <p className="text-[var(--color-ink)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Important Note:</strong> Treatment timelines and outcomes vary significantly based on dry eye severity, underlying causes, and individual response. Some patients achieve excellent results with simple interventions, while others with severe disease require more aggressive multimodal therapy. We're committed to working with you through this process to find the most effective approach for your unique situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-12 text-center text-[var(--color-ink)]">
            Common Questions About Dry Eye Treatment
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                How long does it take for dry eye treatment to work?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                Treatment response varies depending on severity and treatment type. Simple supplementation with quality artificial tears may provide immediate relief, while prescription anti-inflammatory medications typically require 4-12 weeks to show full benefit. Procedural treatments like IPL therapy demonstrate progressive improvement over a series of 3-4 sessions spaced 3-4 weeks apart. Most patients notice meaningful symptom reduction within the first month of comprehensive treatment, with continued improvement over 2-3 months. Severe or long-standing dry eye may require more time and multimodal approaches to achieve optimal results.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Will I need treatment forever, or can dry eye be cured?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                Dry eye disease is typically a chronic condition that requires ongoing management rather than a one-time cure, similar to conditions like high blood pressure or arthritis. However, the intensity of treatment often decreases significantly once we achieve symptom control. Many patients can transition from intensive initial therapy to much simpler maintenance regimens. Some patients with situation-specific dry eye (such as from temporary medication use or environmental factors) may achieve resolution once underlying causes are addressed. The goal is to find the minimal effective treatment that maintains your comfort and ocular health with the least burden on your daily routine.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Are the advanced treatments like IPL therapy covered by insurance?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                Insurance coverage for dry eye treatment varies significantly by plan and treatment type. Diagnostic testing and medical evaluation are typically covered by medical insurance. Prescription medications are usually covered through pharmacy benefits with typical copays. However, many advanced procedural treatments like IPL therapy, thermal pulsation devices, and some specialized therapies are not covered by insurance and are considered out-of-pocket expenses. We provide detailed cost information during your consultation and help you understand your coverage. Many patients find that investing in advanced treatments provides significant value through improved quality of life and reduced need for ongoing symptom management.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                What's the difference between regular eye drops and prescription dry eye treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                Over-the-counter artificial tears provide temporary symptomatic relief by supplementing your natural tears, but they don't address underlying inflammation or disease processes. They're essentially lubricating the eye surface without treating the root cause. Prescription dry eye medications like cyclosporine, lifitegrast, and varenicline work differently—they reduce inflammation, stimulate natural tear production, and help restore normal ocular surface health. While artificial tears can be part of an effective treatment regimen, moderate to severe dry eye typically requires prescription therapy to achieve meaningful long-term improvement. Think of it like the difference between using lotion for dry skin versus treating an underlying skin condition with prescription medication.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-[var(--color-ink)] hover:bg-[var(--color-light)] transition-colors">
                Can lifestyle changes really make a difference, or do I need medical treatment?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                Lifestyle modifications can have surprisingly significant impact on dry eye symptoms and are an essential component of any comprehensive treatment plan. Increasing omega-3 intake through diet or supplementation, optimizing indoor humidity, reducing screen time and practicing the 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds), staying well-hydrated, and protecting eyes from wind and sun exposure can all meaningfully improve symptoms. For mild dry eye, lifestyle changes combined with quality preservative-free artificial tears may be sufficient. However, moderate to severe dry eye typically requires medical treatment in addition to lifestyle optimization. We view it as a partnership: medical treatments address the underlying disease process, while lifestyle modifications optimize your environment and habits to support ocular surface health.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-10 text-center text-[var(--color-ink)]">
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/comprehensive-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg hover:scale-105">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Complete vision and eye health evaluations including dry eye screening and early disease detection.
              </p>
            </a>

            <a href="/services/contact-lens-fitting" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg hover:scale-105">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Contact Lens Fitting
              </h4>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Expert fitting for all lens types including specialty options for patients with dry eye disease.
              </p>
            </a>

            <a href="/services/medical-eye-care" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg hover:scale-105">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Medical Eye Care
              </h4>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Diagnosis and management of eye diseases, infections, and inflammatory conditions affecting vision.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mb-6">
            Ready to Find Relief from Dry Eye?
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Schedule a comprehensive dry eye evaluation and discover personalized treatment options that can restore your comfort and eye health.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--color-cream)] transition-all hover:scale-105 shadow-lg"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </>
  )
}