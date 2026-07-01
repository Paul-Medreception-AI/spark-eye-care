import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Know When It\'s Time for Cataract Surgery | Spark Eye Care',
  description: 'Learn the signs that indicate it\'s time for cataract surgery, what to expect from the procedure, and how to make an informed decision about your vision health with expert guidance from Spark Eye Care.',
  openGraph: {
    title: 'How to Know When It\'s Time for Cataract Surgery | Spark Eye Care',
    description: 'Learn the signs that indicate it\'s time for cataract surgery, what to expect from the procedure, and how to make an informed decision about your vision health.',
    url: 'https://sparkeyetx.com/blog/how-to-know-when-it-s-time-for-cataract-surgery',
    type: 'article',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Spark Eye Care' }],
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </div>
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">Patient Education</div>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            How to Know When It's Time for Cataract Surgery
          </h1>
          <div className="flex justify-center items-center gap-6 text-sm text-white/80">
            <span>Published January 2025</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Dr. Care Team</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[var(--color-ink)] leading-loose text-base space-y-6">
            <p>
              You've noticed that driving at night has become more challenging. Street signs appear fuzzy, headlights seem to have halos around them, and you're squinting more than you used to. You might have adjusted the brightness on your phone or started holding books at arm's length. These small changes in your vision can accumulate so gradually that you barely notice—until one day, you realize your world has become noticeably cloudier. If cataracts are affecting your quality of life, you're not alone, and understanding when surgery becomes necessary can help you reclaim the clear vision you deserve.
            </p>

            <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Understanding Cataracts and Their Progression
            </h2>
            <p>
              A cataract is a clouding of the eye's natural lens, which lies behind the iris and pupil. Think of it like a window that gradually becomes frosted over time. While cataracts are most commonly associated with aging—affecting more than half of Americans by age 80—they can also develop due to injury, certain medications, medical conditions like diabetes, or even from birth.
            </p>
            <p>
              Cataracts typically develop slowly over years. In the early stages, you might not notice any vision changes at all. As the lens becomes cloudier, you may experience blurred or dimmed vision, increased sensitivity to glare, difficulty seeing at night, fading of colors, or the need for frequent changes in eyeglass prescriptions. The progression varies significantly from person to person—some people live with mild cataracts for years without significant disruption, while others experience more rapid vision decline.
            </p>

            <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Signs It May Be Time to Consider Surgery
            </h2>
            <p>
              The decision to proceed with cataract surgery isn't based solely on how your eyes look during an exam—it's fundamentally about how cataracts are affecting your daily life. Medical guidelines suggest considering surgery when vision loss begins to interfere with your ability to perform everyday activities safely and comfortably.
            </p>
            <p>
              Key indicators that it might be time for surgery include:
            </p>
            <div className="my-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Your vision problems make it difficult to drive safely, especially at night</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Reading, watching television, or using a computer has become frustrating despite updated glasses</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">You're avoiding activities you once enjoyed because of vision difficulties</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Glare from lights makes it uncomfortable to be in bright environments</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">You feel less confident or safe performing routine tasks like cooking or climbing stairs</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Your vision is affecting your work performance or ability to maintain independence</p>
              </div>
            </div>
            <p>
              Some patients also have medical reasons for surgery beyond lifestyle impact. In certain cases, cataracts can interfere with the treatment or monitoring of other eye conditions, such as diabetic retinopathy or macular degeneration. Occasionally, cataracts can cause secondary problems like inflammation or elevated eye pressure.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 italic text-xl font-['Cormorant_Garamond',serif] text-[var(--color-ink)]">
              "The best time for cataract surgery is when your vision loss begins to affect your quality of life—not when cataracts reach a certain 'ripeness.' Modern surgery is safest and most effective before cataracts become too dense."
            </div>

            <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What the Research Shows
            </h2>
            <p>
              Cataract surgery is one of the most commonly performed and successful procedures in medicine. According to the American Academy of Ophthalmology, more than 3 million Americans undergo cataract surgery each year, with success rates exceeding 95%. The vast majority of patients experience significant improvement in vision and quality of life.
            </p>
            <p>
              Research consistently demonstrates that cataract surgery not only improves vision but also reduces the risk of falls, enhances mental health, and increases overall life satisfaction. A landmark study published in JAMA Ophthalmology found that cataract surgery was associated with a nearly 30% lower long-term risk of developing dementia, possibly because improved vision allows for greater social engagement and cognitive stimulation.
            </p>
            <p>
              Modern cataract surgery has evolved dramatically. Today's procedures typically take 15-20 minutes, are performed on an outpatient basis with topical anesthesia, and involve minimal discomfort. Most patients notice improved vision within days and return to normal activities quickly. The procedure involves removing the clouded lens and replacing it with a clear artificial lens called an intraocular lens (IOL). Advanced IOL options can even reduce dependence on glasses for distance or near vision.
            </p>

            <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Common Concerns and Misconceptions
            </h2>
            <p>
              Many people delay cataract surgery due to fears or misconceptions. One outdated belief is that cataracts need to be "ripe" before surgery. This was true decades ago when surgical techniques were less advanced, but modern methods make it safer to operate earlier—in fact, waiting until cataracts become very dense can actually make surgery more complicated.
            </p>
            <p>
              Another common concern is fear of the procedure itself. While it's natural to feel anxious about eye surgery, understanding what happens can ease worries. You'll be awake but relaxed, your eye will be numbed so you won't feel pain, and the surgeon will guide you through each step. Millions of people undergo this procedure safely every year.
            </p>
            <p>
              Some patients worry about the recovery period disrupting their lives. While you'll need to avoid strenuous activity and follow post-operative care instructions, most people resume normal routines within a few days. The temporary inconvenience is typically far outweighed by the long-term benefits of restored vision.
            </p>

            <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Making Your Decision
            </h2>
            <p>
              Ultimately, the decision about when to have cataract surgery is personal and should be made in consultation with your eye care provider. During your examination, your ophthalmologist will assess the severity of your cataracts, measure your visual acuity, and discuss how your vision is affecting your daily life.
            </p>
            <p>
              Ask yourself these questions:
            </p>
            <div className="my-6 space-y-3">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 12h6M12 9v6" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <p className="text-[var(--color-ink)]">Am I avoiding activities I used to enjoy because of my vision?</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 12h6M12 9v6" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <p className="text-[var(--color-ink)]">Do I feel unsafe driving, especially at night or in unfamiliar areas?</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 12h6M12 9v6" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <p className="text-[var(--color-ink)]">Is my vision affecting my ability to work or maintain my independence?</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 12h6M12 9v6" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <p className="text-[var(--color-ink)]">Have I noticed my quality of life declining due to vision problems?</p>
              </div>
            </div>
            <p>
              If you answered yes to any of these questions, it's worth having a detailed conversation with your eye care specialist about whether cataract surgery is right for you.
            </p>

            <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Taking the Next Step
            </h2>
            <p>
              Living with declining vision doesn't have to be your new normal. Cataract surgery has transformed millions of lives, restoring not just sight but independence, confidence, and joy in everyday activities. The procedure is safe, effective, and has helped countless patients see the world clearly again.
            </p>
            <p>
              If you're experiencing vision changes that affect your daily life, don't wait. Schedule a comprehensive eye examination to discuss your symptoms, explore your options, and determine the best path forward. Your vision is precious—and with today's advanced treatments, clearer days are within reach.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 flex gap-6 items-start animate-fade-up">
          <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[var(--color-ink)] mb-2">
              Written by the Spark Eye Care Clinical Team
            </h3>
            <p className="text-[var(--color-muted)] text-sm">
              Board-certified providers specializing in Other Medical, dedicated to delivering compassionate, evidence-based care to help you achieve optimal vision health.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant_Garamond',serif] text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Understanding Common Eye Conditions
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Learn about the most prevalent eye health issues, their symptoms, and available treatment options.
              </p>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Preparing for Your Eye Surgery
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                A comprehensive guide to what to expect before, during, and after your eye procedure.
              </p>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-xl w-full h-48 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                How Often Should You Have an Eye Exam?
              </h4>
              <p className="text-[var(--color-muted)] text-sm">
                Discover recommended eye exam schedules for different ages and risk factors to maintain optimal vision.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you achieve clearer vision and better quality of life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}