import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What to Expect During Cataract Surgery: A Complete Guide | Spark Eye Care',
  description: 'Comprehensive patient guide to cataract surgery. Learn about the procedure, preparation, recovery, and what to expect before, during, and after surgery.',
  keywords: 'cataract surgery, eye surgery, cataract removal, phacoemulsification, intraocular lens, IOL, vision restoration, eye health',
  openGraph: {
    title: 'What to Expect During Cataract Surgery: A Complete Guide',
    description: 'Expert guidance on cataract surgery from preparation through recovery.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
  }
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
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light leading-tight text-center mb-8">
            What to Expect During Cataract Surgery: A Complete Guide
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Andrew Plummer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              If you've been diagnosed with cataracts, you're not alone. More than 3 million Americans undergo cataract surgery each year, making it one of the most common and successful surgical procedures performed today. While the prospect of eye surgery may feel overwhelming, understanding what to expect can help ease anxiety and prepare you for a smooth experience.
            </p>
            <p>
              Cataract surgery has transformed from a major operation requiring lengthy hospital stays into a streamlined outpatient procedure with remarkable success rates. This comprehensive guide walks you through every stage of the process, from pre-operative preparation to full recovery, so you can approach your surgery with confidence and peace of mind.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Cataracts and When Surgery is Needed
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              A cataract is a clouding of the eye's natural lens that develops gradually over time. While cataracts are a normal part of aging, they can significantly impact your quality of life when they interfere with daily activities like reading, driving, or recognizing faces.
            </p>
            <p className="mb-4">
              Surgery becomes necessary when cataracts progress to the point where glasses or contact lenses no longer provide adequate vision correction. Your eye care provider will recommend surgery based on how much your vision affects your lifestyle and safety, not solely on the severity of the cataract itself.
            </p>
            <p>
              The good news: cataract surgery boasts a success rate exceeding 95%, with most patients experiencing significant vision improvement. Modern techniques have made the procedure safer, faster, and more comfortable than ever before.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Before Surgery: Preparation and Planning
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Your surgical journey begins with a comprehensive pre-operative evaluation, typically scheduled one to two weeks before your procedure. During this visit, your surgeon will perform detailed measurements of your eye to determine the correct power of the intraocular lens (IOL) that will replace your natural lens.
            </p>
            <p className="mb-6">
              Key preparation steps include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Discussing lens options:</strong> Your surgeon will explain different IOL types, including standard monofocal lenses, toric lenses for astigmatism correction, and premium multifocal lenses that may reduce dependence on glasses.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Medication review:</strong> Inform your doctor about all medications and supplements you're taking. You may need to temporarily adjust blood thinners or certain eye drops.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Arranging transportation:</strong> You cannot drive yourself home after surgery, so plan for a family member or friend to accompany you.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Starting eye drops:</strong> You'll likely begin antibiotic eye drops one to two days before surgery to reduce infection risk.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Following fasting guidelines:</strong> Most patients are instructed not to eat or drink anything after midnight before morning surgery.</span>
              </li>
            </ul>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-[family-name:var(--font-cormorant)] leading-relaxed">
              "The actual surgical time is remarkably brief—typically 15 to 20 minutes per eye. Most of your time at the surgery center will be spent on preparation and post-operative monitoring."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Day of Surgery: Step-by-Step
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Understanding what happens during your surgery can significantly reduce anxiety. Here's what you can expect on the day of your procedure:
            </p>
            <p className="mb-4">
              <strong>Arrival and preparation (30-45 minutes):</strong> You'll check in at the surgical center where staff will verify your information and prepare you for surgery. A nurse will place numbing drops in your eye and may administer a mild sedative to help you relax. You'll remain awake during the procedure but feel calm and comfortable.
            </p>
            <p className="mb-4">
              <strong>The surgical procedure (15-20 minutes):</strong> Modern cataract surgery uses a technique called phacoemulsification. Your surgeon makes a tiny incision (typically 2-3 millimeters) in the cornea, then uses ultrasound energy to break up and remove the cloudy lens. The new artificial lens is then inserted through the same small incision. The procedure is painless—you may feel slight pressure but no sharp pain.
            </p>
            <p className="mb-4">
              <strong>What you'll experience:</strong> Your eye will be covered with a sterile drape, and you'll see bright lights and blurred shapes. Some patients report seeing swirling colors or patterns, which is completely normal. Your surgeon will talk you through each step, and the entire process typically feels much quicker than you anticipate.
            </p>
            <p>
              <strong>Immediate recovery (30-60 minutes):</strong> After surgery, you'll rest in a recovery area while staff monitor your vital signs and eye pressure. Your eye will be covered with a protective shield, and you'll receive detailed post-operative instructions before being discharged to go home.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Recovery: What to Expect in the Days and Weeks Following Surgery
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              Most patients are pleasantly surprised by how quickly they recover from cataract surgery. While individual experiences vary, here's a general timeline of what to expect:
            </p>
            <p className="mb-4">
              <strong>First 24 hours:</strong> Your vision will be blurry immediately after surgery as your eye adjusts and heals. You may notice improved brightness and color perception even on the first day. Mild discomfort, grittiness, or the sensation of something in your eye is normal. Rest is important—plan to take it easy and avoid strenuous activities.
            </p>
            <p className="mb-4">
              <strong>First week:</strong> Vision continues to improve daily as swelling decreases. You'll attend a follow-up appointment within 24-48 hours after surgery so your doctor can check your healing progress. Most patients can resume light activities and return to work within a few days, though you'll need to continue avoiding heavy lifting, bending over, and activities that could introduce bacteria to the eye.
            </p>
            <p className="mb-6">
              <strong>First month:</strong> Your vision stabilizes, and your eye fully heals. You'll have additional follow-up appointments to monitor your progress. Once healing is complete, you can be fitted for new glasses if needed, though many patients find they need glasses less frequently than before surgery.
            </p>
            <p className="mb-4 font-semibold">Essential recovery do's and don'ts:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>DO</strong> use all prescribed eye drops exactly as directed—these prevent infection and reduce inflammation</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>DO</strong> wear the protective eye shield while sleeping for at least the first week</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>DO</strong> wear sunglasses outdoors to protect your eye from bright light and dust</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>DON'T</strong> rub or press on your eye, even if it feels itchy</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>DON'T</strong> get water directly in your eye—avoid swimming pools and hot tubs for at least two weeks</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>DON'T</strong> engage in contact sports or heavy lifting for several weeks</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Potential Complications and When to Seek Help
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              While cataract surgery is extremely safe, it's important to be aware of potential complications and warning signs that require immediate attention. Serious complications are rare, occurring in less than 2% of procedures, but knowing what to watch for ensures prompt treatment if issues arise.
            </p>
            <p className="mb-4">
              <strong>Contact your surgeon immediately if you experience:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>Sudden vision loss or significantly worsening vision</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>Severe eye pain that doesn't improve with over-the-counter pain relievers</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>Increasing redness, discharge, or swelling</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>Flashes of light or new floaters appearing suddenly</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span>A sensation of a curtain or shadow moving across your field of vision</span>
              </li>
            </ul>
            <p>
              One condition worth noting is posterior capsule opacification (PCO), sometimes called a "secondary cataract." This occurs when the membrane that holds the lens becomes cloudy months or years after surgery, causing vision to become hazy again. PCO affects approximately 20-40% of patients but is easily treated with a quick, painless laser procedure that permanently restores clear vision.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Life After Cataract Surgery: Long-Term Outlook
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <p className="mb-4">
              The long-term results of cataract surgery are overwhelmingly positive. Studies consistently show that more than 90% of patients achieve significantly improved vision, with many describing colors as more vibrant and details as sharper than they've seen in years.
            </p>
            <p className="mb-4">
              The artificial lens implanted during surgery is designed to last a lifetime—it won't wear out, cloud over, or need to be replaced. Unlike natural lenses, IOLs don't develop cataracts, which means the clarity achieved through surgery is permanent.
            </p>
            <p className="mb-4">
              Your vision needs may still change over time due to other age-related conditions or changes in your eye's focusing ability. Many patients find they still need reading glasses for close work, particularly if they chose a standard monofocal lens. However, the improvement in distance vision and overall visual quality typically far exceeds expectations.
            </p>
            <p>
              Regular eye examinations remain important after cataract surgery. Your eye care provider will continue monitoring your eye health, checking for conditions like glaucoma, macular degeneration, and diabetic retinopathy that can affect vision independently of cataracts.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 p-6 bg-[var(--color-cream)] rounded-xl">
            <p className="mb-4">
              Cataract surgery represents one of modern medicine's greatest success stories—a procedure that can dramatically restore vision and improve quality of life with minimal risk and remarkable efficiency. While it's natural to feel anxious about eye surgery, understanding what to expect can help you approach the experience with confidence.
            </p>
            <p>
              If you're experiencing symptoms of cataracts or have been told you may need surgery, the next step is consulting with an experienced eye care provider who can evaluate your specific situation and guide you through your options. At Spark Eye Care, our team specializes in comprehensive eye care and is here to answer your questions and support you through every stage of your vision restoration journey.
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 mx-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--color-ink)] mb-2">
              Written by the Spark Eye Care Clinical Team
            </h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Board-certified providers specializing in comprehensive eye care, dedicated to helping patients achieve optimal vision health through evidence-based treatment and compassionate care.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Eye Health
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Cataracts: Symptoms, Causes, and Risk Factors
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about the early warning signs of cataracts and what factors increase your risk for developing this common age-related condition.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Treatment Options
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Choosing the Right Intraocular Lens for Your Lifestyle
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover the different types of lens implants available and how to select the option that best matches your vision goals and daily activities.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Prevention
                </div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Protecting Your Vision: Tips for Maintaining Eye Health as You Age
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore evidence-based strategies for preserving your vision and reducing your risk of age-related eye conditions through lifestyle choices.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you explore your options and answer any questions about cataract surgery.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}