import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Minimally Invasive Glaucoma Surgery (MIGS) | Spark Eye Care',
  description: 'Learn about MIGS procedures, benefits, candidacy, and what to expect. Expert insights on modern glaucoma treatment options from Spark Eye Care.',
  keywords: 'MIGS, minimally invasive glaucoma surgery, glaucoma treatment, eye surgery, intraocular pressure, glaucoma management',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Understanding Minimally Invasive Glaucoma Surgery (MIGS)
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            If you've been diagnosed with glaucoma, you know the constant concern about vision loss and the daily regimen of eye drops. For years, the treatment options seemed limited: either manage it with medications that often come with side effects, or undergo traditional surgery that requires significant recovery time. But what if there was a middle ground—a way to effectively lower eye pressure with minimal disruption to your life?
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Enter Minimally Invasive Glaucoma Surgery, or MIGS. This revolutionary approach is transforming how we treat glaucoma, offering hope to millions who want to preserve their vision without the extensive recovery associated with conventional surgery. Let's explore what MIGS is, who can benefit, and why it's becoming an increasingly popular option for glaucoma management.
          </p>

          {/* Section 1 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is MIGS?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Minimally Invasive Glaucoma Surgery represents a category of procedures designed to lower intraocular pressure (IOP)—the primary risk factor for glaucoma progression—through microscopic incisions and techniques. Unlike traditional glaucoma surgeries such as trabeculectomy or tube shunt procedures, MIGS procedures work with the eye's natural drainage systems to improve fluid outflow.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            These procedures typically involve creating tiny openings or inserting microscopic devices to enhance the eye's ability to drain aqueous humor, the fluid that maintains eye pressure. The "minimally invasive" aspect refers to several key characteristics: smaller incisions, reduced tissue trauma, faster recovery times, and a significantly better safety profile compared to traditional surgeries.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            MIGS procedures are often performed in conjunction with cataract surgery, making them particularly attractive for patients who need both treatments. However, some MIGS options can also be performed as standalone procedures for appropriate candidates.
          </p>

          {/* Section 2 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Types of MIGS Procedures
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Several MIGS approaches have been developed, each targeting different drainage pathways within the eye. The most common include:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Trabecular Micro-Bypass Stents</strong> are tiny devices inserted into the eye's natural drainage canal (Schlemm's canal) to create a permanent opening that bypasses the blocked trabecular meshwork. These stents are smaller than a grain of rice and work continuously to facilitate fluid drainage.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Trabecular Ablation</strong> uses laser or surgical instruments to remove a small portion of the trabecular meshwork, directly opening the drainage pathway. This approach doesn't require implanting a device, as it modifies the existing anatomy.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Suprachoroidal Shunts</strong> create a new drainage route by placing a tiny tube that diverts fluid to the space between the sclera (white of the eye) and the choroid (vascular layer). This utilizes an alternative drainage pathway that's particularly effective for moderate glaucoma.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Subconjunctival Procedures</strong> enhance drainage through the conjunctiva, the thin membrane covering the white of the eye. These often involve gel-like implants that create and maintain a drainage pathway.
          </p>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-serif">
              "MIGS has fundamentally changed the conversation with our glaucoma patients. We can now offer effective pressure reduction without the recovery time and risks associated with traditional surgery."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is a Candidate for MIGS?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            MIGS procedures are particularly well-suited for patients with mild to moderate open-angle glaucoma—the most common form of the disease. Ideal candidates typically fall into several categories:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Patients whose glaucoma isn't adequately controlled with medications alone, or those experiencing side effects from multiple eye drops, often benefit significantly from MIGS. The procedure can reduce or eliminate the need for daily medications, dramatically improving quality of life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Those scheduled for cataract surgery who also have glaucoma are excellent candidates, as the procedures can be combined during a single surgery session. This "two-birds-one-stone" approach is particularly appealing because it addresses both conditions without additional recovery time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Patients who want to slow glaucoma progression before more aggressive intervention becomes necessary may choose MIGS proactively. This preventive approach can potentially delay or avoid the need for traditional surgery.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            However, MIGS may not be appropriate for everyone. Patients with advanced glaucoma, closed-angle glaucoma, or those who need very significant pressure reduction may require traditional surgical approaches. Your eye care specialist will evaluate your specific condition, pressure targets, and overall eye health to determine if MIGS is right for you.
          </p>

          {/* Section 4 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Benefits and Advantages of MIGS
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The rise of MIGS reflects its numerous advantages over both medical management and traditional surgery. Understanding these benefits helps explain why it's becoming a preferred option for many patients and surgeons.
          </p>

          <div className="my-8">
            <div className="flex gap-3 mb-4">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Faster Recovery:</strong> Most patients return to normal activities within days rather than weeks, with minimal postoperative discomfort.
              </p>
            </div>

            <div className="flex gap-3 mb-4">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Excellent Safety Profile:</strong> MIGS procedures carry significantly lower risks of serious complications compared to traditional glaucoma surgeries.
              </p>
            </div>

            <div className="flex gap-3 mb-4">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Reduced Medication Burden:</strong> Many patients can decrease or eliminate their glaucoma eye drops, improving adherence and reducing side effects.
              </p>
            </div>

            <div className="flex gap-3 mb-4">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Preserves Future Options:</strong> MIGS doesn't preclude traditional surgery later if needed, whereas traditional surgery often limits future options.
              </p>
            </div>

            <div className="flex gap-3 mb-4">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Minimal Tissue Disruption:</strong> The ab-interno (from inside the eye) approach of most MIGS procedures leaves the external eye anatomy largely undisturbed.
              </p>
            </div>

            <div className="flex gap-3 mb-4">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose">
                <strong>Predictable Outcomes:</strong> Clinical studies show consistent pressure reduction across diverse patient populations.
              </p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            It's important to note that while MIGS procedures are highly effective, they typically achieve more modest pressure reduction compared to traditional surgeries. For many patients with mild to moderate glaucoma, this level of reduction is precisely what's needed to preserve vision while minimizing surgical risk.
          </p>

          {/* Section 5 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What to Expect: The MIGS Experience
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding the MIGS process can help alleviate anxiety and prepare you for the experience. Most MIGS procedures follow a similar pattern, though specifics vary by technique.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Before Surgery:</strong> Your ophthalmologist will conduct a comprehensive eye examination, including detailed pressure measurements and imaging of your optic nerve and drainage structures. You'll discuss which MIGS procedure best suits your specific anatomy and glaucoma characteristics. Pre-operative preparation is minimal—typically just avoiding certain medications and arranging transportation home after the procedure.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>During Surgery:</strong> MIGS procedures are performed under local anesthesia with sedation, meaning you're comfortable but awake. The surgery itself typically takes 15-30 minutes when performed alone, or slightly longer when combined with cataract surgery. Using a microscope, your surgeon accesses the drainage structures through a tiny incision, places the device or performs the tissue modification, and closes the incision—often without sutures.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>After Surgery:</strong> Most patients experience minimal discomfort, with symptoms similar to having an eyelash in your eye for a day or two. You'll use antibiotic and anti-inflammatory eye drops for several weeks. Vision may be slightly blurry initially but typically clears within days. Most people return to desk work within 2-3 days and resume all normal activities within a week. Strenuous exercise and heavy lifting should be avoided for about two weeks.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Follow-Up:</strong> You'll have several post-operative appointments to monitor your eye pressure and healing. It can take weeks to months to see the full pressure-lowering effect, and some patients may still need glaucoma medications, though typically fewer than before surgery.
          </p>

          {/* Section 6 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Evidence: What Research Shows
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            MIGS procedures are backed by substantial clinical evidence demonstrating both safety and efficacy. Multiple large-scale studies and real-world data have confirmed their role in modern glaucoma management.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research consistently shows that MIGS procedures can reduce intraocular pressure by 20-30% on average, with many patients achieving target pressures without medications. Studies comparing MIGS to medication alone demonstrate superior pressure control and improved quality of life when surgery is incorporated into the treatment plan.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Long-term follow-up data extending five years and beyond shows sustained pressure reduction, with the majority of patients maintaining their results without additional intervention. Importantly, complication rates remain remarkably low across all MIGS platforms, with serious adverse events occurring in less than 1% of cases—substantially lower than traditional glaucoma surgeries.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Cost-effectiveness analyses indicate that MIGS can reduce long-term healthcare expenditures by decreasing medication needs and potentially preventing the vision loss that leads to disability and reduced quality of life. As the technology matures and more data accumulates, the evidence base continues to strengthen.
          </p>

          {/* Section 7 */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking the Next Step
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're living with glaucoma, the landscape of treatment options has never been more promising. MIGS represents a significant advancement that fills the gap between medications and traditional surgery, offering effective pressure control with minimal disruption to your life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The decision about glaucoma treatment is personal and should be made in close consultation with your eye care specialist. They can evaluate your specific condition, discuss whether you're a candidate for MIGS, and help you understand what to expect. Don't let fear of surgery prevent you from exploring this option—the procedures are truly minimally invasive, and the potential benefits for your long-term vision are substantial.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Glaucoma doesn't have to mean inevitable vision loss. With modern treatments like MIGS, we have more tools than ever to preserve your sight and maintain your independence. The key is taking action before significant damage occurs. If you're struggling with glaucoma management, experiencing side effects from medications, or simply want to explore your options, reach out to your eye care provider to discuss whether MIGS might be right for you.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[var(--color-ink)] font-semibold text-lg mb-1">
                Written by the Spark Eye Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Other Medical
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Eye Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Early Signs of Glaucoma: What to Watch For
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn the warning signs and risk factors for glaucoma to protect your vision.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Treatment Options
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Comparing Glaucoma Treatment Approaches
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Explore medications, laser therapy, and surgical options for managing glaucoma.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Patient Guide
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Living with Glaucoma: Lifestyle Tips
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Practical strategies for managing glaucoma and maintaining quality of life.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}