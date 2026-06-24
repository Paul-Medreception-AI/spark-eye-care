import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Glaucoma: The Silent Thief of Sight | Spark Eye Care',
  description: 'Learn about glaucoma, its symptoms, risk factors, and treatment options. Expert insights from Spark Eye Care on protecting your vision from this silent disease.',
  openGraph: {
    title: 'Understanding Glaucoma: The Silent Thief of Sight',
    description: 'Learn about glaucoma, its symptoms, risk factors, and treatment options. Expert insights from Spark Eye Care on protecting your vision from this silent disease.',
    url: 'https://www.sparkeyetx.com/blog/understanding-glaucoma-the-silent-thief-of-sight',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
  },
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
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
            Understanding Glaucoma: The Silent Thief of Sight
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
            <span>Published January 15, 2024</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Imagine losing your vision so gradually that you don't notice until it's too late. This is the reality for millions of people living with glaucoma, a group of eye conditions that damage the optic nerve and can lead to irreversible blindness. Often called "the silent thief of sight," glaucoma typically progresses without warning signs until significant vision loss has occurred. Understanding this condition is the first step in protecting yourself and your loved ones from preventable blindness.
            </p>
            <p>
              More than 3 million Americans have glaucoma, yet the Glaucoma Research Foundation estimates that only half of them know they have it. As the second leading cause of blindness worldwide, glaucoma doesn't discriminate—but certain factors dramatically increase your risk. The good news? When detected early, glaucoma can be managed effectively, preserving your vision for years to come.
            </p>
          </div>

          {/* What Is Glaucoma */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Is Glaucoma?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Glaucoma is not a single disease but rather a group of eye conditions that damage the optic nerve, which is essential for good vision. This damage is often caused by abnormally high pressure in your eye, known as intraocular pressure (IOP). The optic nerve connects your eye to your brain, transmitting visual information. When this nerve is damaged, it cannot be repaired, making early detection critical.
            </p>
            <p className="mb-6">
              The most common type is open-angle glaucoma, which develops slowly over time. The drainage angle formed by the cornea and iris remains open, but the trabecular meshwork—the eye's drainage system—becomes partially blocked. This causes a gradual increase in eye pressure that damages the optic nerve. Because this happens so slowly and affects peripheral vision first, many people don't notice symptoms until the disease is advanced.
            </p>
            <p>
              Angle-closure glaucoma, though less common, is a medical emergency. It occurs when the iris bulges forward and blocks the drainage angle, causing a rapid increase in eye pressure. This type can cause sudden symptoms including severe eye pain, headache, nausea, blurred vision, and halos around lights. If you experience these symptoms, seek immediate medical attention to prevent permanent vision loss.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl font-serif">
              "Vision loss from glaucoma cannot be recovered, making regular eye exams your most powerful tool for prevention and early intervention."
            </p>
          </div>

          {/* Who Is at Risk */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Who Is at Risk for Glaucoma?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While anyone can develop glaucoma, certain factors significantly increase your risk. Age is one of the most important factors—people over 60 are at higher risk, and the risk continues to increase with each decade of life. However, glaucoma can occur at any age, including in infants and children.
            </p>
            <p className="mb-6">
              Family history plays a crucial role. If you have a parent or sibling with glaucoma, you're four to nine times more likely to develop the condition. This genetic component makes regular screening essential for those with affected family members.
            </p>
            <p className="mb-6">
              Ethnicity also influences risk. African Americans are three to four times more likely to develop glaucoma than Caucasians and tend to develop it at younger ages with more rapid progression. People of Asian descent have an increased risk of angle-closure glaucoma, while those of Hispanic descent face elevated risk as well.
            </p>
            <p>
              Other risk factors include having high eye pressure, being extremely nearsighted or farsighted, having had an eye injury or certain types of eye surgery, having thin corneas, having diabetes or high blood pressure, and long-term use of corticosteroid medications. Even having certain medical conditions affecting blood flow can increase risk.
            </p>
          </div>

          {/* Why Early Detection Matters */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Early Detection Matters
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The National Eye Institute reports that early treatment can slow or prevent vision loss from glaucoma. However, because the disease is usually painless and initially affects only peripheral vision, many people don't realize they have it until significant damage has occurred. By the time you notice vision changes, you may have already lost 40% or more of your optic nerve fibers.
            </p>
            <p className="mb-6">
              Regular comprehensive eye exams are your best defense. During these exams, your eye care professional will measure your eye pressure, inspect your eye's drainage angle, examine your optic nerve for damage, test your peripheral vision, take a picture or computer measurement of your optic nerve, and measure the thickness of your cornea. These tests are painless and provide crucial information about your eye health.
            </p>
            <p>
              The American Academy of Ophthalmology recommends that adults with no signs or risk factors for eye disease get a baseline eye screening at age 40. Those with risk factors should start earlier and have more frequent exams. Adults over 65 should have eye exams every one to two years, or more often if recommended by their eye care provider.
            </p>
          </div>

          {/* Treatment Options */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Treatment Options and Management
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While damage from glaucoma cannot be reversed, treatment can slow or stop further damage and vision loss. The goal of all glaucoma treatment is to lower eye pressure to a safe level for your individual eyes. Treatment options range from prescription eye drops to laser procedures and surgery.
            </p>
            <p className="mb-6">
              Medicated eye drops are typically the first line of treatment. These medications work by either decreasing the production of fluid in your eye or improving drainage. It's crucial to use these drops exactly as prescribed, even if you feel fine. Glaucoma is a lifelong condition that requires consistent management.
            </p>
            <p className="mb-6">
              When eye drops alone aren't sufficient, laser treatment may be recommended. Selective laser trabeculoplasty (SLT) uses a laser to improve drainage through the trabecular meshwork. This outpatient procedure is quick and can effectively lower eye pressure. For angle-closure glaucoma, laser peripheral iridotomy creates a small hole in the iris to improve fluid flow.
            </p>
            <p>
              In more advanced cases, surgical options such as trabeculectomy or drainage implants may be necessary. These procedures create new pathways for fluid to drain from the eye. While more invasive, they can significantly reduce eye pressure when other treatments haven't been effective. Your eye care team will work with you to determine the best treatment plan for your specific situation.
            </p>
          </div>

          {/* Protecting Your Vision */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Protecting Your Vision: Action Steps
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Taking proactive steps to protect your vision can make all the difference in preventing vision loss from glaucoma. Here are essential actions you can take starting today:
            </p>
            
            <div className="space-y-4 my-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Schedule regular comprehensive eye exams</strong> — not just vision screenings. A dilated eye exam is essential for detecting glaucoma in its early stages.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Know your family history</strong> and inform your eye care provider if glaucoma runs in your family. This allows for earlier and more frequent screening.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Protect your eyes from injury</strong> by wearing protective eyewear during sports and activities that could cause eye trauma. Eye injuries can lead to traumatic glaucoma.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Maintain a healthy lifestyle</strong> with regular exercise, which can help lower eye pressure. However, avoid exercises that involve head-down positions if you have glaucoma.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Manage chronic conditions</strong> such as diabetes and high blood pressure, which can affect your eye health and increase glaucoma risk.
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong>Take prescribed eye drops consistently</strong> if you've been diagnosed with glaucoma. Skipping doses can allow eye pressure to rise and cause further damage.
                </div>
              </div>
            </div>
          </div>

          {/* Living With Glaucoma */}
          <h2 className="font-serif text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Living Well With Glaucoma
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              A glaucoma diagnosis can feel overwhelming, but many people live full, active lives while managing this condition. The key is education, consistent treatment, and maintaining open communication with your eye care team. Understanding your specific type of glaucoma, your target eye pressure, and your treatment plan empowers you to take control of your eye health.
            </p>
            <p className="mb-6">
              Support is available. Organizations like the Glaucoma Research Foundation offer educational resources, support groups, and the latest research updates. Connecting with others who understand the challenges of living with glaucoma can provide valuable emotional support and practical tips for daily management.
            </p>
            <p className="mb-6">
              Technology continues to advance rapidly in glaucoma detection and treatment. Researchers are developing new medications, improved surgical techniques, and innovative approaches to neuroprotection. Early detection combined with modern treatment options gives people with glaucoma an excellent chance of maintaining functional vision throughout their lives.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Glaucoma may be called the silent thief of sight, but it doesn't have to steal your vision. With regular eye exams, early detection, consistent treatment, and a partnership with your eye care team, you can protect your precious gift of sight. Don't wait for symptoms to appear—by then, significant damage may have already occurred. Schedule your comprehensive eye exam today and take the first step in safeguarding your vision for the future.
            </p>
            <p>
              If you have concerns about glaucoma or are due for your regular eye exam, our team at Spark Eye Care is here to provide expert, compassionate care. We use the latest diagnostic technology to detect glaucoma early and offer personalized treatment plans to preserve your vision. Your eyes deserve the best care—let us help you see clearly for years to come.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                Written by the Spark Eye Care Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in comprehensive eye care, including glaucoma detection, management, and treatment. Our team is dedicated to preserving and protecting your vision through evidence-based care and patient education.
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
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Eye Health
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Why Regular Eye Exams Are Essential
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover what happens during a comprehensive eye exam and why preventive care is crucial for long-term vision health.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Insurance & Billing
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Your Vision Insurance Benefits
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn how to maximize your insurance coverage for eye exams, glaucoma screenings, and treatment.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">
                  Prevention
                </div>
                <h4 className="font-serif text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Protecting Your Eyes as You Age
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Age-related eye conditions and proactive steps you can take to maintain healthy vision throughout your life.
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
            Our team is here to help protect your vision with comprehensive eye care.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Eye Exam
          </a>
        </div>
      </section>
    </main>
  )
}