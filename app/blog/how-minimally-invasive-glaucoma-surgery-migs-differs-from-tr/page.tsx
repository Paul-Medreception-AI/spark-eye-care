import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Minimally Invasive Glaucoma Surgery (MIGS) Differs from Traditional Treatment | Spark Eye Care',
  description: 'Discover how MIGS offers a safer, faster recovery alternative to traditional glaucoma surgery. Learn about the differences, benefits, and who may be a candidate for this innovative treatment.',
  openGraph: {
    title: 'How Minimally Invasive Glaucoma Surgery (MIGS) Differs from Traditional Treatment',
    description: 'Discover how MIGS offers a safer, faster recovery alternative to traditional glaucoma surgery.',
    url: 'https://www.sparkeyetx.com/blog/how-minimally-invasive-glaucoma-surgery-migs-differs-from-tr',
    type: 'article',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
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
          <h1 className="text-5xl font-light leading-tight text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            How Minimally Invasive Glaucoma Surgery (MIGS) Differs from Traditional Treatment
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>By Spark Eye Care Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            When you're diagnosed with glaucoma, the road ahead can feel uncertain. You may have heard about traditional surgeries that require significant recovery time, or you might be wondering if there are newer, less invasive options available. The good news is that advances in ophthalmology have brought us Minimally Invasive Glaucoma Surgery, or MIGS—a game-changing approach that's transforming how we treat this sight-threatening condition.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding the difference between MIGS and traditional glaucoma surgery can help you make informed decisions about your eye health and feel more confident about your treatment options. Let's explore what sets these approaches apart and why MIGS might be the right choice for you.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Glaucoma and Why Treatment Matters
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Glaucoma is often called the "silent thief of sight" because it typically progresses without noticeable symptoms until significant vision loss has occurred. This condition damages the optic nerve, usually due to increased pressure within the eye (intraocular pressure or IOP). Without proper treatment, glaucoma can lead to permanent blindness.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            According to the American Academy of Ophthalmology, glaucoma affects more than 3 million Americans, and that number is expected to reach 4.2 million by 2030. While medications and laser treatments are often the first line of defense, many patients eventually require surgical intervention to adequately control their eye pressure and preserve their vision.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Traditional Glaucoma Surgery: The Conventional Approach
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Traditional glaucoma surgeries, such as trabeculectomy and tube shunt procedures, have been the gold standard for decades. These procedures create new drainage pathways to allow fluid to exit the eye, thereby reducing pressure.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While effective, traditional surgeries come with notable considerations:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Invasiveness:</strong> These procedures involve creating an opening in the eye wall and manipulating external tissues, which requires more extensive surgical intervention.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Recovery time:</strong> Patients often need several weeks to months to fully recover, with activity restrictions during that period.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Complication risk:</strong> While generally safe, traditional surgeries carry higher risks of complications such as infection, bleeding, scarring, and vision changes.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Long-term management:</strong> These procedures may require ongoing monitoring and sometimes additional interventions to maintain function.</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Despite these challenges, traditional surgeries remain important tools, especially for advanced glaucoma or cases where other treatments have failed.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "MIGS represents a paradigm shift in glaucoma treatment—offering effective pressure reduction with significantly less trauma to the eye and faster return to normal activities."
          </blockquote>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            What Makes MIGS Different?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Minimally Invasive Glaucoma Surgery (MIGS) represents a revolutionary advancement in glaucoma care. Rather than creating large openings or manipulating external structures, MIGS procedures work through tiny incisions—often less than 2 millimeters—and utilize the eye's natural drainage pathways.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The key distinguishing features of MIGS include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Micro-incisional approach:</strong> Surgery is performed through incredibly small openings that heal quickly and reduce tissue trauma.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Ab-interno technique:</strong> Most MIGS procedures are performed from inside the eye, avoiding external tissue manipulation and reducing scarring.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Shorter procedure time:</strong> Many MIGS procedures take only 15-30 minutes and can often be combined with cataract surgery.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Rapid recovery:</strong> Patients typically experience minimal discomfort and can return to most activities within days, not weeks.</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Improved safety profile:</strong> The less invasive nature means fewer complications and a more favorable risk-benefit ratio.</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Common MIGS devices and techniques include iStent, Hydrus Microstent, Xen Gel Stent, and trabecular micro-bypass systems. Each has unique characteristics, but all share the goal of lowering eye pressure with minimal tissue disruption.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is a Candidate for MIGS?
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            MIGS is particularly well-suited for patients with mild to moderate glaucoma who need better pressure control than medications alone can provide, but who don't yet require the more aggressive intervention of traditional surgery.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Ideal candidates often include:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Patients with early to moderate open-angle glaucoma</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Those already planning cataract surgery who want combined treatment</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Individuals seeking to reduce their dependence on daily glaucoma medications</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Patients who want a faster recovery and quicker return to activities</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            It's important to note that MIGS may not be appropriate for everyone. Patients with very advanced glaucoma, certain types of secondary glaucoma, or specific anatomical considerations may still benefit most from traditional surgical approaches. Your ophthalmologist will evaluate your individual case to determine the best treatment strategy.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Evidence and Outcomes: What the Research Shows
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The scientific evidence supporting MIGS continues to grow. Multiple clinical studies have demonstrated that MIGS procedures effectively lower intraocular pressure, often reducing or eliminating the need for glaucoma medications.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research published in ophthalmology journals has shown:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Average IOP reductions of 20-30% following MIGS procedures</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Significant reduction in medication burden for many patients</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Complication rates substantially lower than traditional glaucoma surgery</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>High patient satisfaction scores due to rapid recovery and improved quality of life</span>
            </li>
          </ul>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While MIGS typically provides more modest pressure reduction compared to traditional surgery, this trade-off often makes sense for patients with less advanced disease who want to minimize risks and downtime. Additionally, MIGS procedures don't preclude future traditional surgery if needed, preserving options for the future.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Making the Right Choice for Your Eyes
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Choosing between MIGS and traditional glaucoma surgery isn't a one-size-fits-all decision. It requires careful consideration of your specific glaucoma severity, overall eye health, lifestyle needs, and personal preferences.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Here are some questions to discuss with your eye care provider:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>What is the severity of my glaucoma, and what level of pressure reduction do I need?</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Am I a good candidate for MIGS based on my eye anatomy and type of glaucoma?</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>What are the realistic expectations for pressure reduction and medication reduction?</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>What are the potential risks and benefits specific to my situation?</span>
            </li>
            <li className="flex items-start gap-3 text-[var(--color-ink)] leading-loose">
              <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>If MIGS doesn't achieve adequate pressure control, what are my next options?</span>
            </li>
          </ul>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The emergence of MIGS has expanded the treatment landscape for glaucoma, offering patients more personalized options that balance effectiveness with safety and quality of life. While traditional glaucoma surgery remains essential for many patients with advanced disease, MIGS provides a valuable middle ground for those seeking earlier intervention with less invasiveness.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your vision is precious, and protecting it requires expert guidance. If you've been diagnosed with glaucoma or are concerned about your eye pressure, we encourage you to schedule a comprehensive consultation. Our team at Spark Eye Care will thoroughly evaluate your condition, discuss all available treatment options, and help you make the decision that's right for your eyes and your life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base font-semibold">
            Don't wait until vision loss progresses. Contact us today to learn more about MIGS and traditional treatment options for glaucoma.
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
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in comprehensive eye care and advanced glaucoma treatment. Our team is dedicated to delivering evidence-based, patient-centered care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormoant, serif' }}>
                  Understanding Your Glaucoma Diagnosis: What Comes Next
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn what to expect after a glaucoma diagnosis and how to protect your vision for the long term.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:underline">
                  Read Article →
                </span>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Role of Eye Drops in Glaucoma Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore how medications control eye pressure and tips for staying consistent with your treatment plan.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:underline">
                  Read Article →
                </span>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  5 Questions to Ask Before Glaucoma Surgery
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Prepare for your surgical consultation with these essential questions to help guide your decision.
                </p>
                <span className="text-[var(--color-primary)] text-sm font-semibold group-hover:underline">
                  Read Article →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you explore your treatment options and protect your vision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}