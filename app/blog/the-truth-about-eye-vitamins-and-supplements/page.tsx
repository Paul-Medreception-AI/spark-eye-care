import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Truth About Eye Vitamins and Supplements | Spark Eye Care',
  description: 'Learn what the science says about eye vitamins and supplements. Evidence-based guidance on AREDS2, lutein, zeaxanthin, omega-3s, and what really works for eye health.',
  keywords: 'eye vitamins, AREDS2, macular degeneration supplements, lutein, zeaxanthin, omega-3 for eyes, eye health supplements, vitamin A vision',
}

export default function BlogPost() {
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Cormorant, serif' }}>
            The Truth About Eye Vitamins and Supplements
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <span>Published January 15, 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Andrew Plummer</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Walk down the vitamin aisle of any pharmacy, and you'll find dozens of products promising to protect your vision, prevent eye disease, and even improve your eyesight. The supplement industry is booming, with eye health products generating billions in sales each year. But do these vitamins and supplements actually work? And more importantly, which ones are backed by science—and which are just expensive placebos?
            </p>
            <p className="mb-6">
              If you've ever wondered whether you should be taking eye vitamins, or if the ones you're already taking are doing any good, you're not alone. The truth is more nuanced than the marketing claims suggest. Let's separate fact from fiction and explore what the research actually tells us about eye vitamins and supplements.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The AREDS Studies: The Gold Standard
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              When it comes to eye vitamins, the most important research comes from two landmark studies conducted by the National Eye Institute: AREDS (Age-Related Eye Disease Study) and AREDS2. These large-scale clinical trials are the gold standard for understanding which supplements actually work.
            </p>
            <p className="mb-6">
              The original AREDS study, published in 2001, found that a specific combination of vitamins and minerals reduced the risk of progression to advanced age-related macular degeneration (AMD) by about 25% in people who already had intermediate or advanced disease. This was groundbreaking news—finally, there was scientific evidence that certain supplements could slow vision loss.
            </p>
            <p className="mb-6">
              The AREDS2 study, completed in 2013, refined this formula further. It found that adding lutein and zeaxanthin while removing beta-carotene improved safety and effectiveness. The current AREDS2 formula includes vitamin C, vitamin E, zinc, copper, lutein, and zeaxanthin.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl" style={{ fontFamily: 'Cormorant, serif' }}>
            "The AREDS2 formula is not a cure, but for people with moderate to advanced AMD, it's one of the few proven interventions that can slow disease progression."
          </blockquote>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Who Should Take Eye Vitamins?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Here's where many people get confused: the AREDS2 formula has proven benefits for a specific population—people with intermediate or advanced age-related macular degeneration. It does not prevent AMD from developing in the first place, and it hasn't been proven to help with other eye conditions like cataracts or glaucoma.
            </p>
            <p className="mb-6">
              If you have early AMD or no AMD at all, taking AREDS2 vitamins won't necessarily prevent the disease. The supplements are most beneficial for people who have already been diagnosed with moderate AMD in at least one eye. In these cases, the vitamins can significantly reduce the risk of progression to advanced stages that cause severe vision loss.
            </p>
            <p className="mb-6">
              Your eye care provider can determine your AMD risk category through a comprehensive dilated eye exam. They'll look at the size and number of drusen (yellow deposits under the retina) and assess any pigment changes. Based on this exam, they can recommend whether AREDS2 supplements are appropriate for you.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What About Other Eye Supplements?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond AREDS2, the supplement market is flooded with products claiming to support eye health. Some contain ingredients like bilberry, ginkgo biloba, or high doses of omega-3 fatty acids. While some of these ingredients show promise in laboratory studies, most lack the robust clinical trial evidence that supports the AREDS2 formula.
            </p>
            <p className="mb-6">
              Omega-3 fatty acids (specifically DHA and EPA) are essential for retinal health, and observational studies suggest that people who eat more omega-3-rich foods have lower rates of AMD. However, when omega-3 supplements were added to the AREDS2 formula in the clinical trial, they didn't provide additional benefit beyond the core vitamins and minerals. This doesn't mean omega-3s aren't important—it just means that supplementing beyond a healthy diet may not offer extra protection.
            </p>
            <p className="mb-6">
              Lutein and zeaxanthin, the carotenoids found in leafy green vegetables, are components of the AREDS2 formula and do have solid research supporting their role in eye health. These antioxidants accumulate in the macula and help filter harmful blue light while protecting against oxidative damage.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Food-First Approach
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While supplements can play a role for specific conditions, the foundation of eye health remains the same as overall health: a nutrient-rich diet. Many of the vitamins and minerals in eye supplements can be obtained from food, often with better absorption and additional health benefits.
            </p>
            <p className="mb-6">
              Dark leafy greens like spinach, kale, and collards are loaded with lutein and zeaxanthin. Citrus fruits provide vitamin C. Nuts and seeds offer vitamin E. Fatty fish deliver omega-3s. Colorful fruits and vegetables supply a spectrum of antioxidants that work together in ways that isolated supplements cannot replicate.
            </p>
            <p className="mb-6">
              Research consistently shows that people who eat diets rich in fruits, vegetables, whole grains, and healthy fats have lower rates of age-related eye diseases. The Mediterranean diet, in particular, has been associated with reduced AMD risk—likely due to its emphasis on fish, olive oil, nuts, and produce.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            What You Should Know Before Taking Supplements
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're considering eye vitamins, here are some important things to keep in mind:
            </p>
            <div className="space-y-4 my-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Not all "AREDS2" products are created equal.</strong> Some over-the-counter supplements labeled as "AREDS2 formula" don't contain the exact amounts tested in the clinical trials. Check the label carefully or ask your eye care provider for a specific brand recommendation.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>High doses can have side effects.</strong> The zinc in AREDS2 supplements can cause stomach upset in some people. Taking supplements with food can help. Very high doses of vitamin E have been associated with increased bleeding risk.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Smokers should avoid beta-carotene.</strong> The original AREDS formula contained beta-carotene, which was later found to increase lung cancer risk in smokers. The AREDS2 formula replaced this with lutein and zeaxanthin, which are safer.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Supplements don't replace regular eye exams.</strong> Even if you're taking AREDS2 vitamins, you still need regular monitoring by an eye care professional to track disease progression and adjust treatment as needed.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p><strong>Check with your doctor about interactions.</strong> Some vitamins and minerals can interact with medications. For example, vitamin E can increase bleeding risk if you're taking blood thinners.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            The Bottom Line
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The truth about eye vitamins is neither as simple as "they don't work" nor as universal as "everyone should take them." The science is clear that the AREDS2 formula can slow progression of moderate to advanced AMD—a significant benefit for people in that category. For others, the evidence is less compelling.
            </p>
            <p className="mb-6">
              If you're concerned about your eye health, the best approach is to schedule a comprehensive eye exam. Your eye care provider can assess your individual risk factors, examine your eyes for signs of disease, and make personalized recommendations about whether supplements might benefit you. They can also help you understand other important factors like controlling blood pressure and blood sugar, protecting your eyes from UV light, not smoking, and maintaining a healthy weight—all of which influence your long-term eye health.
            </p>
            <p className="mb-6">
              Remember: supplements are meant to supplement, not replace, a healthy lifestyle. The most powerful tools for protecting your vision are still the basics—eating well, not smoking, wearing sunglasses, and seeing your eye doctor regularly. When supplements are appropriate, they're most effective as part of this comprehensive approach to eye health.
            </p>
            <p className="mb-6">
              At Spark Eye Care, we take the time to evaluate your individual needs and recommend evidence-based strategies for protecting your vision. Whether you need guidance on supplements, treatment for existing eye conditions, or simply a thorough eye exam, our team is here to provide expert, personalized care.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">
                Written by the Spark Eye Care Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm">
                Board-certified providers specializing in Other Medical
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up group">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Patient Education</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Understanding Age-Related Macular Degeneration
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Learn about AMD causes, symptoms, and treatment options for this common age-related eye condition.
                </p>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up group">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Nutrition</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  Foods That Support Healthy Vision
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Discover which foods contain the nutrients your eyes need and how to incorporate them into your diet.
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a href="/blog" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up group">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">Prevention</div>
                <h4 className="text-xl font-light mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  How Often Should You Have an Eye Exam?
                </h4>
                <p className="text-[var(--color-muted)] text-sm">
                  Find out when you need comprehensive eye exams based on your age and risk factors.
                </p>
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
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}