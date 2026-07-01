import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minimally Invasive Glaucoma Surgery | Spark Eye Care',
  description: 'Advanced MIGS procedures at Spark Eye Care. Micro-incision glaucoma surgery with faster recovery, reduced medication dependence, and excellent pressure control outcomes.',
}

export default function MinimallyInvasiveGlaucomaSurgeryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Minimally Invasive Glaucoma Surgery</span>
          </nav>
          
          <h1 className="text-5xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Minimally Invasive Glaucoma Surgery in sparkeyetx
          </h1>
          
          <p className="text-xl leading-relaxed opacity-95 max-w-3xl">
            Advanced micro-incision glaucoma procedures that lower eye pressure with faster recovery and fewer complications than traditional surgery. MIGS offers effective pressure control while reducing or eliminating the need for daily glaucoma drops, preserving your vision and quality of life.
          </p>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-10 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What is Minimally Invasive Glaucoma Surgery?
          </h2>
          
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6">
            <p className="leading-relaxed">
              Minimally Invasive Glaucoma Surgery (MIGS) represents a revolutionary advancement in glaucoma treatment, offering patients an effective middle ground between medication management and traditional glaucoma surgery. These procedures use microscopic equipment and tiny incisions—typically less than 2 millimeters—to improve the eye's natural drainage system or create new drainage pathways. Unlike conventional glaucoma surgery that creates external filtration sites, MIGS procedures work within the eye's existing anatomy, targeting the trabecular meshwork or Schlemm's canal to enhance aqueous humor outflow and reduce intraocular pressure.
            </p>
            
            <p className="leading-relaxed">
              The category encompasses several FDA-approved devices and techniques, including iStent, Hydrus Microstent, Kahook Dual Blade goniotomy, and ab interno canaloplasty procedures. Each approach targets different aspects of the eye's drainage system, allowing surgeons to customize treatment based on the patient's specific type and stage of glaucoma. These procedures often can be performed in conjunction with cataract surgery, offering dual benefits during a single surgical session. MIGS procedures typically preserve the conjunctival tissue, which is critical if more invasive surgery becomes necessary in the future, and they generally maintain the eye's natural anatomy rather than creating artificial drainage blebs.
            </p>
            
            <p className="leading-relaxed">
              Ideal candidates for MIGS include patients with mild to moderate open-angle glaucoma who have not achieved adequate pressure control with medications alone, those experiencing medication side effects or compliance challenges, and individuals seeking to reduce their dependence on daily eye drops. The procedures are particularly beneficial for patients undergoing cataract surgery who also have glaucoma, as addressing both conditions simultaneously can improve outcomes and reduce the burden of multiple surgeries. While MIGS procedures are less invasive than traditional glaucoma surgery, they still require careful patient selection and comprehensive pre-operative evaluation to ensure optimal results.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              You May Benefit from MIGS if You Experience:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Inadequate intraocular pressure control despite using multiple glaucoma medications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Side effects from glaucoma drops including redness, irritation, or systemic effects</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Difficulty adhering to complex medication regimens or affording multiple prescription drops</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Progressive visual field loss or optic nerve damage despite medical treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Coexisting cataracts requiring surgery in addition to glaucoma management needs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Desire to reduce medication burden while maintaining good pressure control</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-center text-[var(--color-ink)] animate-fade-up" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Our Approach to Minimally Invasive Glaucoma Surgery
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Comprehensive Assessment
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Detailed evaluation including gonioscopy to assess drainage angle anatomy, optical coherence tomography of the optic nerve, visual field testing, and pachymetry. We review your glaucoma history, current medications, and pressure patterns to determine which MIGS procedure best suits your specific anatomy and disease stage.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Surgical Precision
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Performed under local or monitored anesthesia using advanced microscopic visualization. Depending on your condition, we may utilize trabecular micro-bypass stents, goniotomy techniques, suprachoroidal shunts, or canal dilation procedures. Combined cataract-MIGS procedures are coordinated for maximum efficiency and optimal outcomes.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Post-Operative Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Structured follow-up schedule to monitor pressure reduction, assess healing, and optimize medication adjustments. We track your progress with regular pressure checks and visual field testing, gradually reducing drops as appropriate. Long-term monitoring ensures sustained pressure control and preservation of your remaining vision.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-light)] rounded-xl p-10 animate-fade-up max-w-4xl mx-auto">
            <h3 className="text-2xl font-light mb-6 text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              MIGS Procedures We Offer
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-[var(--color-ink)]">
              <div>
                <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Trabecular Micro-Bypass</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  iStent or iStent inject devices that create permanent openings in the trabecular meshwork, allowing aqueous humor to bypass the primary site of resistance and flow directly into Schlemm's canal, reducing pressure with minimal tissue disruption.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Goniotomy Procedures</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Kahook Dual Blade or trabectome techniques that remove diseased trabecular meshwork tissue to restore natural drainage pathways, offering significant pressure reduction particularly effective in patients with moderate glaucoma.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Suprachoroidal Shunts</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  CyPass or iStent Supra devices that create alternative drainage routes into the suprachoroidal space, utilizing the eye's natural uveoscleral outflow pathway for pressure reduction independent of traditional drainage structures.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Canaloplasty</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Ab interno procedures using microcatheters to viscodilate Schlemm's canal circumferentially, expanding the drainage system and improving aqueous outflow without permanent implants, preserving future surgical options.
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
            <h2 className="text-4xl font-light mb-10 text-center text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              What to Expect from Your MIGS Journey
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Surgery Day</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The procedure typically takes 15-45 minutes depending on whether it's standalone MIGS or combined with cataract surgery. You'll receive local anesthesia and mild sedation for comfort. Most patients experience minimal discomfort during the procedure and are discharged home the same day with protective eyewear and post-operative medications.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">First Week Post-Op</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Expect mild discomfort, light sensitivity, and fluctuating vision as your eye heals. You'll use prescribed anti-inflammatory and antibiotic drops while continuing some of your glaucoma medications. First follow-up visit occurs within 24-48 hours to check pressure and assess healing. Most patients return to light activities within 2-3 days.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Weeks 2-8</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Vision stabilizes and inflammation resolves. Regular pressure checks allow us to assess surgical success and begin reducing glaucoma medications as appropriate. Most patients see pressure reductions of 20-30% from baseline. Complete healing of internal structures occurs during this period, and you'll gradually resume normal activities including exercise.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Ongoing monitoring every 3-6 months includes pressure checks, visual field testing, and optic nerve imaging to ensure sustained glaucoma control. Many patients achieve significant medication reduction or elimination. While MIGS provides excellent pressure control for mild to moderate glaucoma, some patients may require additional drops or procedures over time as the disease progresses. The preserved conjunctival tissue allows for traditional surgery if ever needed in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-12 text-center text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Common Questions About MIGS
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                How does MIGS differ from traditional glaucoma surgery?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MIGS procedures use micro-incisions (less than 2mm) and work within the eye's natural anatomy, whereas traditional surgery like trabeculectomy creates larger external openings and filtration blebs under the conjunctiva. MIGS has faster recovery (days vs. weeks), fewer complications, lower infection risk, and less post-operative inflammation. However, MIGS typically provides more modest pressure reduction (20-30%) compared to traditional surgery (30-50%), making it most appropriate for mild to moderate glaucoma. MIGS preserves conjunctival tissue for future surgery if needed, while traditional approaches may limit subsequent surgical options.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Will I still need to use glaucoma eye drops after MIGS?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Many patients experience significant medication reduction after MIGS, with studies showing 60-75% of patients reduce their drop burden by at least one medication. Some patients achieve complete medication independence, while others still require fewer drops than before surgery. The goal is typically to reach target pressure with fewer medications rather than necessarily eliminating all drops. Your specific outcome depends on your baseline pressure, disease severity, target pressure, and which MIGS procedure is performed. We'll work with you to optimize your medication regimen post-operatively, gradually reducing drops as pressure control allows.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                Can MIGS be combined with cataract surgery?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, combined cataract-MIGS procedures are extremely common and offer significant advantages. Since both procedures access the eye through similar incisions and many MIGS devices are FDA-approved specifically for use during cataract surgery, combining them adds minimal additional surgical time or risk. Benefits include addressing both conditions in one surgery, single recovery period, potential for better overall pressure control, and cost efficiency. Many insurance plans cover MIGS when performed with cataract surgery. The combined approach is particularly beneficial for patients with mild to moderate glaucoma who also have visually significant cataracts, allowing comprehensive treatment of both conditions simultaneously.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                What is the recovery time and when can I return to normal activities?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MIGS recovery is significantly faster than traditional glaucoma surgery. Most patients return to light activities within 2-3 days and resume normal routines within one week. You should avoid heavy lifting (over 10 pounds), strenuous exercise, and swimming for 2-3 weeks post-operatively. Eye rubbing should be avoided for one month. Driving can typically resume within a few days once vision clears and you're off sedating medications. Most patients take 1-3 days off work depending on their occupation. You'll use antibiotic and anti-inflammatory drops for several weeks, and we'll monitor your progress closely during the critical first month of healing to ensure optimal outcomes.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm group">
              <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex justify-between items-center">
                What are the risks and potential complications of MIGS?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MIGS procedures have favorable safety profiles with significantly lower complication rates than traditional glaucoma surgery. Potential risks include temporary pressure elevation immediately post-op, mild inflammation (managed with drops), transient vision fluctuation, bleeding in the anterior chamber that typically resolves spontaneously, and rare device malposition or migration. Serious complications like infection, vision-threatening bleeding, or retinal detachment occur in less than 1% of cases. The most common "complication" is inadequate pressure reduction requiring continued medication use or additional procedures. Unlike traditional surgery, MIGS does not carry significant risk of prolonged hypotony (excessively low pressure), choroidal hemorrhage, or bleb-related infections. We'll discuss your specific risk profile during your consultation.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light mb-10 text-center text-[var(--color-ink)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/glaucoma-management" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Glaucoma Management
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Comprehensive medical management and monitoring for all types of glaucoma with advanced diagnostic imaging and personalized treatment plans.
              </p>
            </a>

            <a href="/services/cataract-surgery" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Cataract Surgery
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Advanced lens replacement surgery using the latest technology to restore clear vision, often combined with MIGS for glaucoma patients.
              </p>
            </a>

            <a href="/services/diabetic-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 transition-all hover:shadow-lg animate-fade-up">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                Diabetic Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Specialized screening and treatment for diabetic retinopathy and other diabetes-related eye complications to preserve vision.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Explore MIGS Treatment Options?
          </h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Schedule a consultation to learn if minimally invasive glaucoma surgery is right for you and discuss which procedure best fits your needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold transition-transform hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}