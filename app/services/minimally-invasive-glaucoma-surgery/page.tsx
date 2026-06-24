import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minimally Invasive Glaucoma Surgery | Spark Eye Care',
  description: 'Advanced MIGS procedures to safely lower eye pressure and preserve vision. Expert glaucoma surgeons offering the latest minimally invasive techniques.',
}

export default function MinimallyInvasiveGlaucomaSurgeryPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Minimally Invasive Glaucoma Surgery</span>
          </nav>
          <h1 className="font-['Cormorant',serif] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Minimally Invasive Glaucoma Surgery in www.sparkeyetx
          </h1>
          <p className="text-xl opacity-95 max-w-3xl leading-relaxed">
            State-of-the-art MIGS procedures offer a safer, faster alternative to traditional glaucoma surgery with quicker recovery and fewer complications. Our experienced surgeons use the latest micro-stent and laser technologies to reduce eye pressure and protect your vision from progressive glaucoma damage.
          </p>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="bg-[var(--color-cream)] py-20 animate-fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            What is Minimally Invasive Glaucoma Surgery?
          </h2>
          
          <div className="prose prose-lg max-w-none text-[var(--color-ink)] space-y-6">
            <p className="text-lg leading-relaxed">
              Minimally Invasive Glaucoma Surgery (MIGS) represents a revolutionary advancement in the treatment of glaucoma, offering patients a middle ground between medication management and traditional filtering surgery. These innovative procedures work by creating new drainage pathways or improving the eye's natural outflow system to reduce intraocular pressure (IOP), the primary risk factor for glaucoma progression. Unlike conventional glaucoma surgeries that create external drainage sites, MIGS procedures work within the eye's existing anatomy using microscopic incisions, specialized instruments, and often implantable micro-devices that are smaller than a grain of rice.
            </p>
            
            <p className="text-lg leading-relaxed">
              The hallmark of MIGS is its excellent safety profile combined with meaningful IOP reduction. These procedures are performed through tiny incisions measuring just 1-2 millimeters, typically completed in 15-30 minutes, and often combined with cataract surgery for added convenience and effectiveness. MIGS procedures target different parts of the eye's drainage system—some bypass the trabecular meshwork, others dilate Schlemm's canal, and still others create suprachoroidal pathways. Common MIGS devices and techniques include iStent inject, Hydrus Microstent, Xen Gel Stent, OMNI surgical system, and trabecular ablation procedures. The choice of procedure depends on the type and severity of glaucoma, previous treatments, and individual eye anatomy.
            </p>
            
            <p className="text-lg leading-relaxed">
              Research published in leading ophthalmology journals demonstrates that MIGS procedures can reduce IOP by 20-40% and decrease or eliminate the need for glaucoma medications in many patients. The recovery time is significantly faster than traditional surgery—most patients return to normal activities within days rather than weeks. MIGS is particularly beneficial for patients with mild to moderate open-angle glaucoma who have not achieved adequate pressure control with medications alone, those experiencing medication side effects or compliance issues, and individuals undergoing cataract surgery who could benefit from simultaneous glaucoma treatment. Because MIGS procedures preserve the conjunctiva and avoid external blebs, they also maintain future surgical options if more aggressive treatment becomes necessary.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">You may benefit from MIGS if you experience:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Elevated intraocular pressure despite multiple glaucoma medications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Difficulty tolerating or consistently using eye drop medications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Progressive visual field loss or optic nerve damage despite treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Need for cataract surgery with coexisting glaucoma</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Desire to reduce dependence on daily glaucoma medications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Early to moderate open-angle glaucoma requiring intervention beyond drops</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE TREAT IT */}
      <section className="bg-white py-20 animate-fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            Our Approach to Minimally Invasive Glaucoma Surgery
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Comprehensive Evaluation</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Detailed glaucoma assessment including visual field testing, OCT imaging of the optic nerve, gonioscopy to examine drainage angles, pachymetry to measure corneal thickness, and careful review of your pressure history and medication response to determine the optimal MIGS procedure for your specific condition.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Customized Procedure Selection</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Based on your eye anatomy, glaucoma severity, and surgical goals, we select from advanced MIGS options including trabecular micro-bypass stents, suprachoroidal shunts, angle dilation procedures, or trabecular ablation techniques. We explain each option, expected outcomes, and can often combine MIGS with cataract surgery for optimal results.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 transition-transform hover:scale-105">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">Ongoing Monitoring & Support</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Post-operative care with scheduled pressure checks, medication management as needed, healing assessment, and long-term monitoring to ensure sustained IOP control. We track visual field stability, adjust medications when possible, and maintain comprehensive documentation of your treatment outcomes and vision preservation progress.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-light)] rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">MIGS Procedures We Perform</h3>
            <div className="grid md:grid-cols-2 gap-6 text-[var(--color-ink)]">
              <div>
                <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Trabecular Micro-Bypass</h4>
                <p className="text-sm leading-relaxed mb-4">iStent inject and similar devices create tiny bypasses through the trabecular meshwork to improve aqueous outflow into Schlemm's canal, reducing IOP with minimal tissue disruption.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Canal Dilation Procedures</h4>
                <p className="text-sm leading-relaxed mb-4">Hydrus Microstent and canaloplasty techniques dilate and scaffold Schlemm's canal, improving natural drainage pathway function across multiple clock hours.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Subconjunctival Shunts</h4>
                <p className="text-sm leading-relaxed mb-4">Xen Gel Stent and similar devices create a new drainage pathway from the anterior chamber to the subconjunctival space using a soft, flexible micro-tube for sustained IOP reduction.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Trabecular Ablation</h4>
                <p className="text-sm leading-relaxed mb-4">Kahook Dual Blade goniotomy and trabecular ablation techniques remove diseased trabecular meshwork tissue to restore natural outflow, often combined with cataract surgery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-20 animate-fade-up">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12">
            <h2 className="font-['Cormorant',serif] text-4xl text-[var(--color-ink)] mb-10 text-center">
              What to Expect During Your MIGS Journey
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Pre-Operative Consultation</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Complete glaucoma evaluation with advanced imaging, discussion of procedure options and expected outcomes, review of medications and surgical preparation instructions, and answers to all your questions about the surgery and recovery process.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Surgery Day</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Outpatient procedure performed in our surgical suite using local anesthesia and mild sedation. The actual MIGS procedure takes 15-30 minutes, with minimal discomfort and same-day discharge. You'll need someone to drive you home and should plan to rest for the remainder of the day.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">First Week Post-Op</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Follow-up visits on day 1 and week 1 to monitor healing and pressure. You'll use prescribed eye drops to prevent inflammation and infection. Most patients experience mild discomfort and blurred vision initially, with rapid improvement. Avoid strenuous activity, swimming, and eye rubbing during this healing phase.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Weeks 2-6</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Vision continues to stabilize as inflammation resolves. Follow-up appointments to monitor IOP reduction and assess medication needs. Many patients experience significant pressure lowering by 4-6 weeks, often allowing reduction or elimination of glaucoma drops. Gradual return to normal activities as cleared by your surgeon.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Long-Term Management</h3>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Ongoing monitoring every 3-6 months to track IOP control, visual field stability, and optic nerve health. Most MIGS procedures provide sustained pressure reduction for years. We adjust medications as needed and discuss additional treatment options if pressure control becomes inadequate over time. The goal is preserving your vision for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20 animate-fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Common Questions About MIGS
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>How does MIGS differ from traditional glaucoma surgery?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Traditional glaucoma surgeries like trabeculectomy and tube shunt procedures create external drainage pathways with larger incisions, extensive tissue manipulation, and higher complication risks including infection, bleeding, and vision-threatening hypotony. MIGS procedures use microscopic incisions, work within the eye's natural drainage system, have faster recovery times, and maintain lower but safer IOP reductions. While traditional surgery is still necessary for advanced glaucoma, MIGS offers an excellent middle option between medications and invasive surgery for appropriate candidates.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>How much will MIGS lower my eye pressure?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Most MIGS procedures reduce IOP by 20-40% from pre-treatment baseline, typically lowering pressure into the mid-to-low teens. The exact reduction depends on your starting pressure, the specific procedure performed, and individual healing response. Many patients can reduce or eliminate 1-3 glaucoma medications after MIGS. While MIGS generally produces more modest pressure reductions than traditional surgery, the improved safety profile and faster recovery make it ideal for mild-to-moderate glaucoma where target pressures don't require extremely low IOPs.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>Can MIGS be combined with cataract surgery?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Yes—combining MIGS with cataract surgery is one of the most common and effective approaches. Since both procedures access the eye through similar incisions, combining them adds minimal additional surgical time or risk while addressing two vision problems simultaneously. Studies show that combined surgery often produces better IOP reduction than either procedure alone, likely due to improved aqueous circulation after lens removal. If you have both cataracts and glaucoma, combined surgery offers convenience, cost-effectiveness, and excellent outcomes in a single recovery period.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>What are the risks and potential complications of MIGS?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>MIGS has an excellent safety profile with much lower complication rates than traditional surgery. Possible risks include temporary IOP elevation, inflammation, bleeding in the eye, device malposition or obstruction, and incomplete pressure reduction requiring continued medications. Serious complications like infection, severe hypotony, or vision loss are rare (less than 1%). Most side effects resolve with medication or minor interventions. The risk-benefit ratio strongly favors MIGS for appropriate candidates, and we thoroughly discuss your individual risk profile during consultation.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                <span>Will I still need glaucoma eye drops after MIGS?</span>
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Many patients can reduce or eliminate glaucoma medications after successful MIGS, but results vary by individual. Studies show that 50-80% of MIGS patients can discontinue at least one medication, with some achieving medication independence entirely. However, MIGS is often considered a "medication-sparing" rather than "medication-eliminating" procedure. Some patients continue fewer drops post-operatively, while others may need to resume medications over time as the surgical effect diminishes. The goal is achieving target IOP with the safest, most convenient treatment regimen—whether that's surgery alone, fewer medications, or optimized combination therapy.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-16 animate-fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-[var(--color-ink)] mb-10 text-center">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/services/cataract-surgery" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Cataract Surgery
              </h4>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Advanced lens replacement surgery to restore clear vision and reduce dependence on glasses.
              </p>
            </a>

            <a href="/services/glaucoma-management" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Glaucoma Management
              </h4>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Comprehensive medical management and monitoring to control eye pressure and preserve vision.
              </p>
            </a>

            <a href="/services/diabetic-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Diabetic Eye Exams
              </h4>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Specialized screening and treatment to detect and prevent diabetes-related vision complications.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center animate-fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant',serif] text-4xl md:text-5xl mb-6">
            Ready to Explore MIGS for Your Glaucoma?
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Schedule a comprehensive glaucoma consultation to learn if minimally invasive surgery is right for you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-cream)] transition-all hover:scale-105 shadow-lg"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

    </main>
  )
}