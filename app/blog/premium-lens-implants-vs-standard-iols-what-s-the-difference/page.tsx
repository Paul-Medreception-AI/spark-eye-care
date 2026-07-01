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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'Cormorant, serif'}}>
            Premium Lens Implants vs Standard IOLs: What's the Difference?
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published March 2025</span>
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
            If you're preparing for cataract surgery, you've likely encountered a decision that can feel overwhelming: choosing between premium lens implants and standard intraocular lenses (IOLs). This choice isn't just about removing your cloudy natural lens—it's about shaping how you'll see the world for decades to come. Understanding the differences between these options empowers you to make an informed decision that aligns with your lifestyle, visual goals, and budget.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While both premium and standard IOLs restore vision after cataract removal, they differ significantly in their capabilities, costs, and the freedom they offer from glasses. Let's explore what sets them apart and how to determine which option is right for you.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Understanding Standard Intraocular Lenses
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Standard IOLs, also called monofocal lenses, have been the gold standard in cataract surgery for decades. These lenses are typically covered by insurance and Medicare, making them the most accessible option for patients. They provide excellent vision at a single focal distance—usually set for clear distance vision.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            With a standard IOL, most patients achieve crisp, clear vision for activities like driving, watching television, and recognizing faces across a room. However, you'll likely need reading glasses for close-up tasks like reading books, using your smartphone, or working on a computer. Many patients also require glasses for intermediate distances.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Standard IOLs don't correct astigmatism, a common condition where the cornea has an irregular shape, causing blurred or distorted vision. Patients with significant astigmatism may need glasses for both distance and near vision, or may require additional procedures to address this issue.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            The Advantages of Premium Lens Implants
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Premium IOLs represent advanced lens technology designed to address the limitations of standard lenses. While they involve additional out-of-pocket costs (typically $1,500-$3,500 per eye), many patients find the investment worthwhile for the visual freedom they provide.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            There are several types of premium IOLs, each addressing different visual needs:
          </p>

          <div className="mb-6">
            <p className="text-[var(--color-ink)] leading-loose text-base mb-3 font-semibold">
              Multifocal and Extended Depth of Focus (EDOF) Lenses
            </p>
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
              These lenses provide clear vision at multiple distances—near, intermediate, and far—significantly reducing or eliminating the need for glasses. Multifocal IOLs use different zones within the lens to focus light at various distances, while EDOF lenses create a continuous range of vision with fewer visual disturbances.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-3 font-semibold">
              Toric Lenses
            </p>
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
              Available in both standard and premium versions, toric IOLs correct astigmatism by incorporating different powers in different meridians of the lens. This provides sharper, clearer vision without glasses for patients with astigmatism.
            </p>

            <p className="text-[var(--color-ink)] leading-loose text-base mb-3 font-semibold">
              Accommodating Lenses
            </p>
            <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
              These lenses are designed to move or change shape inside the eye, similar to how your natural lens once functioned, providing a more natural range of vision.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-light" style={{fontFamily: 'Cormorant, serif'}}>
              "The choice between premium and standard IOLs isn't about good versus bad—it's about matching lens technology to your unique visual demands and lifestyle expectations."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Who Benefits Most from Premium IOLs?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Premium lens implants offer the greatest value to patients with active lifestyles who want to minimize their dependence on glasses. Consider premium IOLs if you:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">Engage in activities requiring good vision at multiple distances (golf, travel, crafts, cooking)</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">Have moderate to high astigmatism that affects your quality of vision</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">Find glasses inconvenient or incompatible with your work or hobbies</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">Value the convenience of glasses-free vision and can accommodate the additional cost</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base">Have realistic expectations and understand that some adaptation period may be needed</p>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            However, premium IOLs may not be ideal for everyone. Patients with certain eye conditions (like macular degeneration, glaucoma, or diabetic retinopathy), those who drive frequently at night, or individuals who are particularly sensitive to visual disturbances like glare or halos may be better served by standard IOLs.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            What the Research Shows
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Clinical studies consistently demonstrate high satisfaction rates with both standard and premium IOLs, though outcomes differ based on patient expectations and lifestyle needs.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research published in major ophthalmology journals shows that patients with multifocal and EDOF lenses achieve spectacle independence rates of 70-90% for most daily activities. Standard monofocal IOLs, while providing excellent distance vision quality, typically result in 80-100% of patients requiring reading glasses for near tasks.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Toric IOLs have been shown to significantly improve uncorrected visual acuity in patients with astigmatism, with studies demonstrating superior outcomes compared to standard IOLs followed by glasses correction.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Patient satisfaction studies reveal that outcomes are most positive when expectations are properly set during pre-operative consultations. Understanding the potential for visual phenomena (like halos around lights with multifocal lenses) and the adaptation period required helps patients make informed choices they're satisfied with long-term.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Making Your Decision: Key Considerations
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Choosing between premium and standard IOLs is deeply personal and should be based on a thorough discussion with your eye surgeon. Here are important factors to weigh:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><span className="font-semibold">Visual Lifestyle:</span> How important is glasses-free vision for your daily activities? Are you comfortable wearing reading glasses when needed?</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><span className="font-semibold">Financial Investment:</span> Can you comfortably afford the out-of-pocket cost of premium lenses? Consider that over time, reduced glasses needs may offset some costs.</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><span className="font-semibold">Ocular Health:</span> Do you have other eye conditions that might limit the benefits of premium lenses?</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><span className="font-semibold">Visual Expectations:</span> Are you willing to adapt to potential visual trade-offs like nighttime halos for the benefit of reduced glasses dependence?</p>
            </div>
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-[var(--color-ink)] leading-loose text-base"><span className="font-semibold">Surgeon Experience:</span> Ensure your surgeon has extensive experience with the specific premium lens you're considering.</p>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{fontFamily: 'Cormorant, serif'}}>
            Taking the Next Step
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The decision between premium and standard IOLs doesn't have a universally "right" answer—it depends entirely on your individual circumstances, priorities, and visual goals. Both options can provide excellent outcomes when matched appropriately to patient needs.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            What matters most is having a comprehensive consultation with an experienced eye surgeon who takes time to understand your lifestyle, perform thorough measurements of your eyes, and discuss realistic expectations for each lens option. Don't hesitate to ask questions, request testimonials from other patients, and take the time you need to feel confident in your choice.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Remember, cataract surgery with IOL implantation is one of the most successful procedures in all of medicine, with high satisfaction rates regardless of lens choice. The key is aligning your selection with your personal vision goals and working with a surgical team you trust.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're considering cataract surgery and want to explore which IOL option is right for you, schedule a consultation with an experienced ophthalmologist. They can perform the necessary testing, discuss your options in detail, and help you make an informed decision that supports your vision for years to come.
          </p>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <p className="text-[var(--color-ink)] font-semibold text-lg mb-1">Written by the Spark Eye Care Clinical Team</p>
              <p className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 font-light text-center" style={{fontFamily: 'Cormorant, serif'}}>
            Related Resources
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Education</p>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                  What to Expect Before, During, and After Cataract Surgery
                </h4>
                <p className="text-[var(--color-muted)] text-sm">A comprehensive guide to preparing for and recovering from cataract surgery.</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Vision Health</p>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                  Understanding Astigmatism: Causes, Symptoms, and Treatment Options
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Learn how astigmatism affects your vision and the available correction methods.</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Age-Related Vision</p>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'Cormorant, serif'}}>
                  When Is the Right Time for Cataract Surgery?
                </h4>
                <p className="text-[var(--color-muted)] text-sm">Discover the signs that indicate it's time to consider cataract surgery.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'Cormorant, serif'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  );
}