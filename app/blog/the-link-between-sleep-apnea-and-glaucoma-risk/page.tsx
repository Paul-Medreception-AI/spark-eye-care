import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Link Between Sleep Apnea and Glaucoma Risk | Spark Eye Care',
  description: 'Discover the important connection between sleep apnea and glaucoma risk. Learn how sleep disorders may impact your eye health and what you can do to protect your vision.',
  keywords: 'sleep apnea, glaucoma, eye health, vision loss, sleep disorders, optic nerve damage, eye pressure',
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Link Between Sleep Apnea and Glaucoma Risk
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
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              You might not think that the quality of your sleep has anything to do with your vision, but emerging research reveals a surprising connection: people with obstructive sleep apnea face a significantly higher risk of developing glaucoma, one of the leading causes of irreversible blindness worldwide. If you've been diagnosed with sleep apnea—or suspect you might have it—understanding this link could be crucial for protecting your long-term eye health.
            </p>
            <p className="mb-6">
              Both conditions are more common than many realize, affecting millions of Americans. Yet the relationship between disrupted breathing during sleep and progressive optic nerve damage is only beginning to be fully understood by the medical community. Let's explore what we know about this important connection and what it means for your health.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Understanding Sleep Apnea
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Obstructive sleep apnea (OSA) occurs when the muscles in your throat relax excessively during sleep, causing your airway to narrow or close completely. This interrupts normal breathing, sometimes dozens or even hundreds of times per night. Each episode temporarily deprives your body—including your eyes—of oxygen.
            </p>
            <p className="mb-6">
              Common symptoms include loud snoring, gasping for air during sleep, morning headaches, daytime fatigue, and difficulty concentrating. Many people don't realize they have sleep apnea because the breathing interruptions happen while they're unconscious. Often, it's a bed partner who first notices the problem.
            </p>
            <p className="mb-6">
              Risk factors for sleep apnea include excess weight, neck circumference, narrowed airway, being male, older age, family history, and use of alcohol or sedatives. Left untreated, OSA can contribute to high blood pressure, heart disease, type 2 diabetes, and metabolic syndrome—in addition to increasing glaucoma risk.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            What Is Glaucoma?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Glaucoma is a group of eye conditions that damage the optic nerve, which is essential for good vision. This damage is often caused by abnormally high pressure in your eye, though glaucoma can occur even with normal eye pressure. It's one of the leading causes of blindness for people over 60, though it can occur at any age.
            </p>
            <p className="mb-6">
              The most common type, open-angle glaucoma, develops gradually and painlessly. Many people don't notice symptoms until the disease is quite advanced, which is why regular eye exams are so critical. Vision loss from glaucoma is permanent and cannot be recovered, making early detection and treatment essential.
            </p>
            <p className="mb-6">
              The optic nerve is particularly vulnerable to fluctuations in blood flow and oxygen supply. This is where the connection to sleep apnea becomes especially relevant—the repeated oxygen deprivation that occurs during apnea episodes may create conditions that harm the delicate optic nerve tissue.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            "Studies show that people with sleep apnea are up to ten times more likely to develop glaucoma compared to those without sleep breathing disorders."
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            The Research Behind the Connection
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Multiple studies have established a clear association between obstructive sleep apnea and increased glaucoma risk. Research published in leading ophthalmology journals has found that OSA patients have significantly higher rates of glaucoma diagnosis compared to the general population.
            </p>
            <p className="mb-6">
              Several mechanisms may explain this connection. First, the repeated drops in blood oxygen levels during apnea episodes can compromise blood flow to the optic nerve. Second, the physical strain of apnea episodes may cause fluctuations in intraocular pressure (the pressure inside your eye). Third, the systemic inflammation associated with OSA may contribute to optic nerve damage.
            </p>
            <p className="mb-6">
              Particularly concerning is the association between sleep apnea and normal-tension glaucoma, where optic nerve damage occurs despite eye pressure being in the normal range. This suggests that the vascular and oxygen-related effects of sleep apnea may be especially important in glaucoma development, independent of pressure changes.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Is Most at Risk?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Certain individuals face elevated risk for both conditions and should be particularly vigilant about screening and prevention:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>Adults over 60:</strong> Both glaucoma and sleep apnea become more common with age</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>People with obesity:</strong> Excess weight is a major risk factor for sleep apnea and may also increase glaucoma risk</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>Those with family history:</strong> Both conditions have genetic components</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>Individuals with cardiovascular disease:</strong> Poor vascular health affects both breathing and eye health</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>People of African, Hispanic, or Asian descent:</strong> Certain ethnic groups face higher glaucoma risk</span>
              </li>
            </ul>
            <p className="mb-6">
              If you fall into any of these categories, proactive screening for both conditions is especially important.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            What You Can Do to Protect Your Vision
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Understanding the link between sleep apnea and glaucoma empowers you to take proactive steps to protect your eye health:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>Get screened for sleep apnea:</strong> If you snore loudly, gasp during sleep, or experience excessive daytime fatigue, talk to your doctor about a sleep study</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>Treat diagnosed sleep apnea:</strong> CPAP therapy or other treatments can dramatically reduce apnea episodes and may help protect your eyes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>Schedule regular comprehensive eye exams:</strong> Annual or biennial exams can detect glaucoma in its early stages when treatment is most effective</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>Inform your eye doctor:</strong> Let your ophthalmologist know if you have sleep apnea so they can monitor you more closely for glaucoma</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span><strong>Maintain a healthy lifestyle:</strong> Weight loss, regular exercise, and avoiding alcohol before bed can improve both sleep apnea and overall eye health</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            The Importance of Coordinated Care
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              The connection between sleep apnea and glaucoma highlights why comprehensive, coordinated healthcare is so important. Your sleep specialist and eye doctor should be aware of each other's findings and work together to optimize your treatment plan.
            </p>
            <p className="mb-6">
              If you're being treated for sleep apnea, consistent use of CPAP or other therapies is crucial—not just for better sleep and daytime alertness, but potentially for protecting your vision as well. Likewise, if you have glaucoma, screening for sleep disorders may be an important part of understanding and managing your condition.
            </p>
            <p className="mb-6">
              Early detection and treatment of both conditions can make a significant difference in outcomes. While we can't reverse vision loss from glaucoma, we can slow or stop its progression with proper treatment. Similarly, managing sleep apnea can dramatically improve your quality of life and reduce your risk for numerous health complications, including potential vision problems.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)] animate-fade-up">
            <p className="mb-6">
              The link between sleep apnea and glaucoma serves as a powerful reminder that our health is interconnected—what affects one system in our body can have far-reaching effects on others. If you have sleep apnea or are at risk for it, regular comprehensive eye exams aren't just recommended—they're essential for protecting your vision for years to come.
            </p>
            <p className="mb-6">
              Don't wait for symptoms to appear. Both sleep apnea and glaucoma can progress silently, causing damage before you're aware there's a problem. Taking action now—whether that means getting screened, following through with treatment, or simply scheduling that overdue eye exam—could be one of the most important things you do for your long-term health.
            </p>
            <p>
              <strong>If you have concerns about sleep apnea, glaucoma, or how your sleep health might be affecting your vision, our team at Spark Eye Care is here to help. Schedule a comprehensive eye examination to protect your sight and discuss any risk factors that may apply to you.</strong>
            </p>
          </div>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 mx-6 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Board-certified providers specializing in Other Medical, committed to delivering evidence-based patient education and compassionate care.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center animate-fade-up" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Eye Health</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Your Glaucoma Diagnosis
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn what a glaucoma diagnosis means and how modern treatment can preserve your vision.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Wellness</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  How Sleep Quality Affects Your Health
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover the far-reaching impact of sleep on your overall health and well-being.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Prevention</div>
                <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  The Importance of Regular Eye Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Why annual comprehensive eye exams are essential for detecting problems early.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
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
  )
}