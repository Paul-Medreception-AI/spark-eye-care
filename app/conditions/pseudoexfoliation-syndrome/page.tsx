import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pseudoexfoliation Syndrome Treatment in Kyle | Spark Eye Care',
  description: 'Expert pseudoexfoliation syndrome treatment in Kyle. Board-certified eye care specialists offering comprehensive diagnosis, monitoring, and management. Schedule your consultation today.',
  openGraph: {
    title: 'Pseudoexfoliation Syndrome Treatment in Kyle | Spark Eye Care',
    description: 'Expert pseudoexfoliation syndrome treatment in Kyle. Board-certified eye care specialists offering comprehensive diagnosis, monitoring, and management.',
    url: 'https://sparkeyetx.com/conditions/pseudoexfoliation-syndrome',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function PseudoexfoliationSyndromePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Pseudoexfoliation Syndrome</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Pseudoexfoliation Syndrome Treatment in Kyle
          </h1>
          
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
            Pseudoexfoliation syndrome is a systemic age-related disorder that can significantly impact your eye health and increase your risk of glaucoma and cataracts. At Spark Eye Care, our experienced team provides comprehensive diagnosis, monitoring, and treatment to protect your vision and prevent complications.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Pseudoexfoliation Syndrome
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Pseudoexfoliation syndrome (PEX or PXF) is a systemic disorder characterized by the abnormal production and accumulation of fibrillar extracellular material in various tissues throughout the body, particularly affecting the eyes. In the eye, this grayish-white, dandruff-like material deposits on the lens capsule, iris, ciliary body, and trabecular meshwork. The condition typically affects individuals over 60 years of age and becomes more common with advancing age. While PEX can occur in any population, it shows higher prevalence in Scandinavian, Mediterranean, and Middle Eastern populations. The condition affects approximately 10-20% of people over age 60 worldwide, though many cases go undiagnosed until complications develop. Pseudoexfoliation syndrome significantly impacts quality of life by increasing the risk of glaucoma by 5-10 times, complicating cataract surgery, and potentially leading to progressive vision loss if left unmanaged.
            </p>
            
            <p>
              The exact cause of pseudoexfoliation syndrome remains incompletely understood, though research indicates it involves both genetic and environmental factors. Genetic studies have identified the LOXL1 gene as strongly associated with PEX, though having this genetic variant alone doesn't guarantee development of the condition. The disorder involves abnormal metabolism of extracellular matrix components, leading to the production and accumulation of abnormal fibrillar material throughout the body. Environmental factors that may contribute include increased ultraviolet light exposure, oxidative stress, and dietary factors. Risk factors for developing pseudoexfoliation syndrome include advancing age (particularly over 60), family history of the condition, geographic ancestry from high-prevalence regions, and possibly prolonged outdoor exposure without eye protection. The condition typically begins unilaterally but becomes bilateral in many cases over time, though often asymmetric in severity. While the syndrome itself doesn't cause symptoms initially, the secondary complications—particularly pseudoexfoliation glaucoma and cataract complications—can lead to significant vision impairment.
            </p>
            
            <p>
              Professional eye care is essential for managing pseudoexfoliation syndrome because early detection and monitoring can prevent or minimize vision-threatening complications. Without proper treatment and monitoring, PEX can lead to pseudoexfoliation glaucoma, which tends to progress more rapidly than primary open-angle glaucoma and may be more difficult to control with medications alone. The material deposits in the trabecular meshwork reduce aqueous outflow, causing elevated intraocular pressure that damages the optic nerve. Additionally, patients with PEX undergoing cataract surgery face increased risks including weak zonular fibers supporting the lens, higher rates of surgical complications, and greater post-operative inflammation. Regular comprehensive eye examinations allow for early detection of elevated intraocular pressure, optic nerve changes, and visual field loss, enabling timely intervention. With appropriate monitoring and treatment, including pressure-lowering medications, laser procedures, or surgery when indicated, most patients with pseudoexfoliation syndrome can maintain good vision throughout their lives. Our team at Spark Eye Care specializes in the comprehensive management of this complex condition, utilizing advanced diagnostic technology and evidence-based treatment protocols to protect your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Pseudoexfoliation Syndrome
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Early Clinical Signs</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">White Flaky Material on Lens</strong>
                  <p className="text-gray-600">Characteristic dandruff-like deposits visible on the lens capsule during examination, often showing a target pattern with central disc and peripheral ring.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Pigment Dispersion</strong>
                  <p className="text-gray-600">Release of pigment from the iris with deposits on various eye structures, visible as a Sampaolesi line along the trabecular meshwork.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Elevated Eye Pressure</strong>
                  <p className="text-gray-600">Increased intraocular pressure due to reduced aqueous humor drainage through clogged trabecular meshwork, often fluctuating more than typical glaucoma.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Weak Zonular Fibers</strong>
                  <p className="text-gray-600">Fragile lens support structures that increase surgical risks and may lead to lens subluxation or dislocation in advanced cases.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Iris Changes</strong>
                  <p className="text-gray-600">Loss of pigment at the pupil margin creating a moth-eaten appearance and poor pupil dilation, which can complicate eye examinations and surgery.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Asymmetric Presentation</strong>
                  <p className="text-gray-600">One eye typically more severely affected than the other, though both eyes often show signs of the condition with careful examination.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">No Initial Symptoms</strong>
                  <p className="text-gray-600">Most patients experience no noticeable symptoms in early stages, making routine comprehensive eye examinations essential for detection.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[var(--color-dark)] mb-6">Progressive Complications</h3>
              
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Peripheral Vision Loss</strong>
                  <p className="text-gray-600">Gradual loss of side vision when pseudoexfoliation glaucoma develops, often progressing more rapidly than other glaucoma types if untreated.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Fluctuating Pressure Spikes</strong>
                  <p className="text-gray-600">Greater variability in intraocular pressure throughout the day compared to other forms of glaucoma, requiring careful monitoring and management.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Earlier Cataract Development</strong>
                  <p className="text-gray-600">Accelerated cataract formation in eyes with pseudoexfoliation, requiring earlier surgical intervention than typical age-related cataracts.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Optic Nerve Damage</strong>
                  <p className="text-gray-600">Progressive damage to the optic nerve from elevated pressure, potentially leading to permanent vision loss if glaucoma develops and remains untreated.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Poor Response to Single Medications</strong>
                  <p className="text-gray-600">Pseudoexfoliation glaucoma often requires multiple medications or earlier surgical intervention compared to primary open-angle glaucoma.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Surgical Complications Risk</strong>
                  <p className="text-gray-600">Increased risk during cataract surgery including zonular dehiscence, vitreous loss, and post-operative inflammation requiring experienced surgical management.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-[var(--color-ink)]">Central Vision Threat</strong>
                  <p className="text-gray-600">In advanced untreated cases, glaucoma can progress to affect central vision, significantly impacting reading, driving, and daily activities.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            If you recognize these signs or have risk factors for pseudoexfoliation syndrome, comprehensive eye care is available. Early detection and treatment lead to better outcomes and preserved vision throughout your life.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Pseudoexfoliation Syndrome
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6m3-3v6" />
              </svg>
              <h3 className="text-2xl font-semibant text-[var(--color-ink)] mb-4">Comprehensive Assessment</h3>
              <p className="text-gray-700 leading-relaxed">
                Your evaluation begins with a detailed examination using slit-lamp biomicroscopy to identify characteristic pseudoexfoliative material deposits on the lens capsule, iris, and other anterior segment structures. We measure intraocular pressure, assess the drainage angle using gonioscopy to evaluate trabecular meshwork changes, and examine the optic nerve for signs of glaucomatous damage. Advanced imaging including optical coherence tomography documents baseline nerve fiber layer thickness and optic disc structure for future comparison.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibant text-[var(--color-ink)] mb-4">Individualized Treatment Plan</h3>
              <p className="text-gray-700 leading-relaxed">
                Based on your examination findings, we develop a personalized management strategy tailored to your specific presentation and risk factors. For patients with pseudoexfoliation syndrome without glaucoma, we implement a monitoring schedule with more frequent examinations than standard eye care due to higher risk of pressure elevation. If pseudoexfoliation glaucoma is present, we initiate pressure-lowering therapy targeting lower pressure goals than typical glaucoma due to the aggressive nature of this condition. Your treatment plan considers your overall health, medication tolerance, and lifestyle factors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibant text-[var(--color-ink)] mb-4">Ongoing Monitoring & Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Regular follow-up visits are essential for pseudoexfoliation syndrome management, typically scheduled every 3-6 months depending on disease severity and stability. We monitor intraocular pressure trends, assess optic nerve appearance for progressive changes, perform visual field testing to detect functional loss, and adjust treatments as needed. As you age, we evaluate for cataract development and plan surgical intervention when appropriate, taking special precautions due to weak zonular support. Our proactive monitoring approach aims to detect changes early when interventions are most effective.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our evidence-based treatment approach for pseudoexfoliation syndrome utilizes multiple therapeutic modalities depending on disease severity and progression. For patients with elevated intraocular pressure or pseudoexfoliation glaucoma, we typically begin with topical medications including prostaglandin analogs (such as latanoprost or travoprost), which enhance aqueous outflow and are often first-line therapy. Beta-blockers, alpha-agonists, and carbonic anhydrase inhibitors may be added as combination therapy since pseudoexfoliation glaucoma frequently requires multiple medications for adequate pressure control.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When medical therapy proves insufficient or patients experience intolerable side effects, we offer laser and surgical interventions. Selective laser trabeculoplasty (SLT) can improve trabecular outflow and reduce medication burden in some patients with pseudoexfoliation glaucoma. For more advanced cases or inadequate pressure control, we may recommend trabeculectomy or glaucoma drainage device implantation to create alternative drainage pathways. Minimally invasive glaucoma surgeries (MIGS) provide options for patients requiring cataract surgery simultaneously. Our surgical expertise includes managing the specific challenges of pseudoexfoliation during cataract surgery, utilizing capsular tension rings when needed to support weak zonules, planning for potential complications, and achieving optimal outcomes. Throughout your care, we emphasize the importance of treatment adherence, regular monitoring, and open communication to preserve your vision for the long term.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Pseudoexfoliation Syndrome Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Board-Certified Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Our optometrists bring specialized training and extensive experience in diagnosing and managing pseudoexfoliation syndrome and its complications, utilizing the latest evidence-based protocols and advanced diagnostic technology.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Personalized Care Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                We recognize that each patient's pseudoexfoliation syndrome presents differently, requiring individualized monitoring intervals, treatment strategies, and consideration of your unique risk factors, lifestyle, and vision goals.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Advanced Diagnostic Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                Our practice utilizes state-of-the-art imaging equipment including optical coherence tomography, automated visual field testing, and digital fundus photography to detect subtle changes and monitor disease progression accurately.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] p-8 rounded-lg hover:shadow-lg transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Surgical Coordination</h3>
              <p className="text-gray-700 leading-relaxed">
                When cataract or glaucoma surgery becomes necessary, we provide seamless coordination with experienced ophthalmologic surgeons who specialize in managing pseudoexfoliation complications, ensuring optimal outcomes and continuity of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="border-l-4 border-[var(--color-primary)] pl-8">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] mb-3">01</div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Initial Comprehensive Evaluation</h3>
              <p className="text-gray-700 leading-relaxed mb-2"><strong>Timeline: First Visit</strong></p>
              <p className="text-gray-700 leading-relaxed">
                Your first appointment involves a thorough examination to confirm the diagnosis of pseudoexfoliation syndrome and assess for complications. We'll perform detailed slit-lamp examination to visualize characteristic material deposits, measure intraocular pressure, evaluate the drainage angle structures, examine your optic nerves and retinas, and conduct baseline imaging studies. We'll review your medical history including cardiovascular health (as PEX is associated with systemic vascular changes), discuss family history, and explain your diagnosis in detail. You'll leave with a clear understanding of your condition, individualized risk assessment for glaucoma development, and a customized monitoring or treatment plan. This visit typically takes 60-90 minutes to ensure comprehensive evaluation.
              </p>
            </div>

            <div className="border-l-4 border-[var(--color-primary)] pl-8">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] mb-3">02</div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Treatment Implementation & Early Monitoring</h3>
              <p className="text-gray-700 leading-relaxed mb-2"><strong>Timeline: Weeks 2-12</strong></p>
              <p className="text-gray-700 leading-relaxed">
                If pseudoexfoliation glaucoma is diagnosed or intraocular pressure is elevated, we'll begin pressure-lowering therapy immediately, typically starting with topical medication once or twice daily. You'll return within 4-6 weeks to assess treatment response and check for medication side effects or tolerance issues. We measure pressure at different times of day if needed to capture fluctuations characteristic of this condition. For patients with pseudoexfoliation syndrome without glaucoma, we establish a monitoring schedule based on your individual risk profile—typically every 3-4 months initially to watch for pressure elevation or optic nerve changes. We'll educate you about proper medication administration techniques if applicable, discuss the importance of adherence, and address any questions or concerns. Early treatment adjustments are common as we fine-tune your therapy to achieve target pressures while minimizing side effects.
              </p>
            </div>

            <div className="border-l-4 border-[var(--color-primary)] pl-8">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] mb-3">03</div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Progress Monitoring & Adjustment</h3>
              <p className="text-gray-700 leading-relaxed mb-2"><strong>Timeline: Months 2-6</strong></p>
              <p className="text-gray-700 leading-relaxed">
                During this phase, we conduct regular follow-up examinations to track disease stability and treatment effectiveness. Each visit includes pressure measurement, optic nerve evaluation, and comparison to baseline imaging to detect any progression. We perform visual field testing every 6-12 months (more frequently if changes are detected) to assess for functional vision loss. If pressure control is inadequate with initial therapy, we may add additional medications, adjust dosages, or consider laser trabeculoplasty to improve drainage. Patients tolerating treatment well and showing stable examinations may extend to longer monitoring intervals. We remain vigilant for cataract development, which occurs earlier in pseudoexfoliation syndrome, and discuss surgical timing when cataracts begin affecting your quality of life. Throughout this period, we emphasize the importance of consistent medication use and regular monitoring even when you feel fine, as glaucoma damage occurs without symptoms until advanced stages.
              </p>
            </div>

            <div className="border-l-4 border-[var(--color-primary)] pl-8">
              <div className="font-cormorant text-6xl text-[var(--color-primary)] mb-3">04</div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Long-Term Management & Preservation</h3>
              <p className="text-gray-700 leading-relaxed mb-2"><strong>Timeline: Ongoing</strong></p>
              <p className="text-gray-700 leading-relaxed">
                Pseudoexfoliation syndrome is a lifelong condition requiring continuous monitoring and management. With stable disease and well-controlled pressures, you'll transition to maintenance care with examinations every 4-6 months, adjusting frequency based on your specific situation. We continue advanced imaging annually or more often if needed to document stability and detect subtle progression early. If you develop cataracts requiring surgery, we'll coordinate with experienced surgeons familiar with pseudoexfoliation complications, provide detailed pre-operative counseling about specific risks, and resume close post-operative monitoring. Some patients eventually require glaucoma surgery if medications become insufficient—we'll discuss options thoroughly and ensure you understand the benefits and risks. Our long-term goal is preserving your functional vision throughout your lifetime through proactive management, timely intervention when needed, and partnership in your eye health. Most patients with pseudoexfoliation syndrome maintain excellent vision with appropriate treatment and monitoring, though the condition's progressive nature requires lifelong vigilance and professional care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Pseudoexfoliation Syndrome
          </h2>
          
          <div className="space-y-6">
            <details className="group bg-[var(--color-cream)] p-6 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg text-[var(--color-ink)]">
                Will pseudoexfoliation syndrome cause me to go blind?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Not necessarily. While pseudoexfoliation syndrome increases your risk of developing glaucoma, which can cause vision loss if untreated, most patients maintain good vision throughout their lives with appropriate monitoring and treatment. The key is early detection and consistent management. When we identify pseudoexfoliation syndrome before glaucoma develops or in early glaucoma stages, pressure-lowering treatments are highly effective at preserving vision. Even if pseudoexfoliation glaucoma develops, medications, laser procedures, and surgery when needed can usually control pressure and prevent significant vision loss. The most important factors are attending regular eye examinations, using prescribed medications consistently, and following through with recommended treatments. Patients who remain engaged in their care typically have excellent visual outcomes.
              </p>
            </details>

            <details className="group bg-[var(--color-cream)] p-6 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg text-[var(--color-ink)]">
                How often will I need eye examinations if I have pseudoexfoliation syndrome?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Examination frequency depends on your specific situation and disease severity. Patients with pseudoexfoliation syndrome but no glaucoma typically need comprehensive examinations every 3-6 months—more frequently than standard annual eye exams—because of the elevated risk of developing glaucoma. If you have pseudoexfoliation glaucoma being treated with medications, we'll initially see you every 4-8 weeks to assess treatment response and pressure control, then every 3-4 months once stable. After glaucoma surgery or laser procedures, more frequent monitoring is needed initially. Visual field testing is performed every 6-12 months to detect functional changes. These examinations are essential because glaucoma damage occurs without symptoms, and pseudoexfoliation glaucoma can progress more rapidly than other types. We'll customize your monitoring schedule based on factors including pressure control, optic nerve appearance, visual field stability, and overall risk profile.
              </p>
            </details>

            <details className="group bg-[var(--color-cream)] p-6 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg text-[var(--color-ink)]">
                Do I need to take eye drops forever if I develop pseudoexfoliation glaucoma?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                In most cases, glaucoma medications are a long-term or lifelong treatment, as they control but don't cure the condition. The medications work by lowering intraocular pressure to protect your optic nerve from damage, but they only work while you're using them—stopping medications allows pressure to rise again. However, there are alternatives that may reduce or eliminate medication needs. Selective laser trabeculoplasty can improve drainage and reduce medication burden in some patients, though effects may diminish over years. Glaucoma surgery creates permanent new drainage pathways, potentially eliminating medication needs entirely or significantly reducing the number of drops required. Some patients undergo combined cataract and glaucoma surgery, addressing both issues simultaneously. The decision about surgical intervention versus continued medications depends on factors including pressure control adequacy, medication tolerance and adherence, side effects, quality of life impact, and disease severity. We'll discuss all options and help you make informed decisions aligned with your preferences and circumstances.
              </p>
            </details>

            <details className="group bg-[var(--color-cream)] p-6 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg text-[var(--color-ink)]">
                Does insurance cover treatment for pseudoexfoliation syndrome?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes, medical insurance (not vision insurance) typically covers diagnosis and treatment of pseudoexfoliation syndrome and pseudoexfoliation glaucoma, as these are medical eye conditions rather than routine vision care. Coverage generally includes comprehensive eye examinations, diagnostic testing such as visual fields and optical coherence tomography, glaucoma medications (though specific drugs covered vary by plan), laser procedures, and glaucoma surgery when medically necessary. You'll be responsible for applicable copays, deductibles, and coinsurance based on your specific insurance plan. We accept most major insurance plans and our staff will verify your benefits and explain your expected costs before treatment begins. Medicare covers medically necessary glaucoma care for beneficiaries. Some glaucoma medications can be expensive, but manufacturer assistance programs may be available for patients facing financial challenges. We're committed to working with you to make necessary care accessible and will discuss cost concerns openly to find solutions that work for your situation.
              </p>
            </details>

            <details className="group bg-[var(--color-cream)] p-6 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg text-[var(--color-ink)]">
                Is cataract surgery more dangerous if I have pseudoexfoliation syndrome?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Cataract surgery in eyes with pseudoexfoliation syndrome does carry higher risks than routine cataract surgery, but experienced surgeons achieve excellent outcomes by taking appropriate precautions. The main concern is weak zonular fibers supporting the lens, which can tear during surgery, potentially leading to complications including lens dislocation or vitreous loss. Surgeons managing pseudoexfoliation cases plan carefully with detailed pre-operative assessment, may use specialized devices called capsular tension rings to support weak zonules, employ gentler surgical techniques, and prepare for potential complications. The pupil may not dilate as well, requiring additional measures for adequate visualization. Post-operative inflammation may be greater, requiring more intensive anti-inflammatory treatment. Despite these challenges, the vast majority of pseudoexfoliation patients undergoing cataract surgery achieve significant vision improvement with proper surgical planning and technique. We coordinate closely with surgeons experienced in managing pseudoexfoliation, provide detailed information about your specific case, and ensure appropriate pre- and post-operative care for optimal outcomes.
              </p>
            </details>

            <details className="group bg-[var(--color-cream)] p-6 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg text-[var(--color-ink)]">
                Can I manage pseudoexfoliation syndrome without regular doctor visits if I feel fine?
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                No, regular professional monitoring is essential for pseudoexfoliation syndrome regardless of how you feel. This is one of the most important concepts to understand about this condition: glaucoma damage occurs silently without symptoms until advanced stages when significant permanent vision loss has already occurred. You cannot tell by how your eyes feel whether pressure is elevated or your optic nerve is being damaged. By the time patients notice vision changes from glaucoma, substantial irreversible damage has occurred. Pseudoexfoliation glaucoma also tends to progress more rapidly than other glaucoma types and shows greater pressure fluctuations, making consistent monitoring even more critical. Regular examinations allow us to detect subtle changes early—slight pressure elevations, early optic nerve changes, or beginning visual field defects—when interventions are most effective at preventing progression. Patients who maintain regular follow-up appointments typically preserve excellent vision throughout their lives, while those who skip appointments often present with advanced damage that could have been prevented. Your consistent engagement in monitoring and treatment is the most important factor determining your long-term visual outcome.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/glaucoma" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)]">
                Glaucoma
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Comprehensive diagnosis and management of all glaucoma types including open-angle, angle-closure, and secondary glaucomas with pressure monitoring and treatment.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/conditions/cataracts" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)]">
                Cataracts
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Expert evaluation and co-management of cataract surgery, including pre-operative assessment and post-operative care for optimal visual outcomes.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a href="/conditions/macular-degeneration" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)]">
                Macular Degeneration
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Advanced diagnostic imaging and monitoring for age-related macular degeneration with treatment coordination and low vision support services.
              </p>
              <span className="text-[var(--color-primary)] font-medium inline-flex items-center">
                Learn more
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
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Get Help for Pseudoexfoliation Syndrome Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            You don't have to face pseudoexfoliation syndrome alone. Our team is ready to help you protect your vision with expert diagnosis, monitoring, and treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-block"
            >
              Schedule Consultation
            </a>
            <a 
              href="/conditions" 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors inline-block"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}