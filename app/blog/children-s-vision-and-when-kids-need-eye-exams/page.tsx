import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Children's Vision and When Kids Need Eye Exams | Spark Eye Care",
  description: "Learn when children should have their first eye exam, signs of vision problems in kids, and why early detection is crucial for healthy development and academic success.",
  keywords: "children's vision, pediatric eye exam, kids eye health, vision screening, child eye care, school vision problems",
  openGraph: {
    title: "Children's Vision and When Kids Need Eye Exams | Spark Eye Care",
    description: "Expert guidance on protecting your child's vision through timely eye exams and early detection of vision problems.",
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
  }
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
          <h1 className="font-['Cormorant'] text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Children's Vision and When Kids Need Eye Exams
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
              As a parent, you diligently schedule well-child visits, keep vaccinations up to date, and monitor developmental milestones. But there's one crucial aspect of your child's health that often goes overlooked: their vision. Many parents don't realize that approximately 80% of learning in the classroom is visual, making healthy eyesight essential not just for reading the board, but for overall academic success, social development, and quality of life.
            </p>
            <p className="mb-6">
              The challenge is that children rarely complain about vision problems. They don't know what "normal" vision looks like, so they assume everyone sees the way they do. A child struggling to see the board may simply think school is hard. A youngster with an eye coordination problem might avoid reading because it gives them headaches, not realizing the issue is correctable. This is why comprehensive eye exams at appropriate ages are so critical—they catch problems your child may not even know they have.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            When Should Children Have Their First Eye Exam?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The American Optometric Association recommends a clear timeline for pediatric eye care that may surprise many parents. Vision care should begin much earlier than most families realize:
            </p>
            <p className="mb-6">
              <strong>First exam at 6 months:</strong> Even infants can have comprehensive eye exams. At this age, your eye care provider checks for proper eye development, eye alignment, and conditions like blocked tear ducts or pediatric cataracts. While babies can't read an eye chart, specialized techniques allow us to assess their vision accurately.
            </p>
            <p className="mb-6">
              <strong>Second exam at age 3:</strong> By this age, children can participate more actively in testing. We can check visual acuity more precisely, assess eye teaming and focusing abilities, and screen for conditions like amblyopia (lazy eye) and strabismus (eye turn), which are most effectively treated when caught early.
            </p>
            <p className="mb-6">
              <strong>Before kindergarten (age 5-6):</strong> A comprehensive exam before starting school ensures your child has the visual skills needed for learning. This goes beyond just seeing clearly—it includes eye coordination, tracking, focusing flexibility, and visual processing abilities.
            </p>
            <p className="mb-6">
              <strong>Every 1-2 years thereafter:</strong> School-age children should have regular exams even if they're not experiencing obvious problems. Vision can change rapidly during growth years, and many learning-related vision issues become apparent as academic demands increase.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Vision Screenings vs. Comprehensive Eye Exams
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Many parents assume the vision screening at school or the pediatrician's office is sufficient. While these screenings are valuable, they're designed only to identify obvious problems and often miss significant vision issues.
            </p>
            <p className="mb-6">
              School screenings typically only check distance vision clarity—whether your child can see the big "E" on the wall. They don't assess near vision (crucial for reading), eye coordination, focusing ability, eye health, or subtle refractive errors. Studies show that vision screenings miss up to 75% of children with vision problems.
            </p>
            <p className="mb-6">
              A comprehensive eye exam, by contrast, evaluates all aspects of vision and eye health. It includes testing eye teaming and tracking (how well the eyes work together), accommodation (focusing ability), visual perception, peripheral vision, and internal and external eye health. This thorough assessment can identify learning-related vision problems, eye diseases, and systemic health conditions that manifest in the eyes.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-['Cormorant']">
            "Children don't know what clear vision looks like. They assume everyone sees the way they do, which is why regular comprehensive eye exams are essential—even when kids aren't complaining about their vision."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Warning Signs Your Child May Have a Vision Problem
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Between regular exams, parents should watch for signs that may indicate a vision problem. Because children adapt and compensate, these signs can be subtle and are often mistaken for behavioral issues or learning disabilities.
            </p>
            <div className="my-6 space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Frequent eye rubbing or blinking:</strong> May indicate eye strain, fatigue, or irritation</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sitting too close to screens or holding books very close:</strong> Sign of nearsightedness</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Covering one eye or tilting head to see:</strong> May indicate eye teaming problems or refractive error</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Avoiding reading or homework:</strong> Often blamed on lack of interest, but may signal vision problems</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Losing place while reading or using a finger to track:</strong> May indicate tracking or coordination problems</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Complaints of headaches or tired eyes:</strong> Especially after reading or screen time</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Short attention span for age-appropriate tasks:</strong> Vision problems can masquerade as attention issues</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Sensitivity to light or excessive tearing:</strong> Can indicate various eye conditions</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Declining grades or academic performance:</strong> When intelligence isn't the issue, vision may be</span>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Vision Problems in Children
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding the most common pediatric vision conditions can help parents recognize when something might be wrong:
            </p>
            <p className="mb-6">
              <strong>Refractive errors</strong> (nearsightedness, farsightedness, astigmatism) affect millions of children. Myopia is particularly increasing worldwide, with studies showing that children who spend more time outdoors and less time on near work have lower rates. Fortunately, these conditions are easily corrected with glasses or contact lenses.
            </p>
            <p className="mb-6">
              <strong>Amblyopia (lazy eye)</strong> occurs when one eye has significantly reduced vision because the brain has learned to ignore signals from that eye. This affects about 2-3% of children and is most successfully treated when caught early—ideally before age 7. Treatment typically involves correcting any refractive error and encouraging use of the weaker eye through patching or eye drops.
            </p>
            <p className="mb-6">
              <strong>Strabismus (eye turn)</strong> is a misalignment of the eyes affecting about 4% of children. One eye may turn in, out, up, or down. Beyond cosmetic concerns, strabismus can lead to amblyopia and problems with depth perception. Early treatment with glasses, vision therapy, or sometimes surgery is important.
            </p>
            <p className="mb-6">
              <strong>Convergence insufficiency</strong> is a common eye teaming problem where the eyes struggle to work together when focusing on near tasks. This causes eye strain, double vision, headaches, and difficulty reading—yet distance vision may be perfect, so it's often missed. Vision therapy is highly effective for this condition.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Connection Between Vision and Learning
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The relationship between vision and academic performance cannot be overstated. Vision is not just about seeing clearly—it's about how efficiently and comfortably the eyes work together, how quickly they can refocus between distance and near, how accurately they track across a page, and how well the brain processes visual information.
            </p>
            <p className="mb-6">
              Children with undetected vision problems often develop compensatory behaviors that hinder learning. They may avoid reading, lose their place frequently, have poor reading comprehension despite good decoding skills, or struggle to copy from the board. These children are often mislabeled as having learning disabilities, ADHD, or behavioral problems when the root cause is visual.
            </p>
            <p className="mb-6">
              Research has shown that correcting vision problems can lead to significant improvements in academic performance, reading skills, and even classroom behavior. A child who suddenly can see the board clearly, read without words jumping around, or sustain focus without eye strain often shows dramatic improvements that surprise both parents and teachers.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Protecting Your Child's Vision: Practical Tips
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond regular eye exams, there are several ways parents can promote healthy vision development:
            </p>
            <div className="my-6 space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Encourage outdoor time:</strong> Studies show 1-2 hours of outdoor activity daily reduces myopia risk by up to 50%</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Follow the 20-20-20 rule:</strong> Every 20 minutes, look at something 20 feet away for 20 seconds during screen time or reading</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Ensure proper lighting and posture:</strong> Reading material should be 14-16 inches from eyes with adequate lighting</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Limit screen time:</strong> Follow age-appropriate guidelines and ensure screens are at appropriate distances</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Provide proper nutrition:</strong> Omega-3 fatty acids, vitamins A, C, and E support healthy eye development</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Protect eyes during sports:</strong> Ensure appropriate protective eyewear for sports and activities</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Be proactive, not reactive:</strong> Don't wait for your child to complain—schedule regular comprehensive exams</span>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 mb-8">
            <p className="mb-6">
              Your child's vision is foundational to their development, learning, and quality of life. By understanding the importance of early and regular comprehensive eye exams, recognizing warning signs of vision problems, and taking proactive steps to protect eye health, you give your child the best opportunity for success in school and beyond.
            </p>
            <p className="mb-6">
              If it's been more than a year since your child's last comprehensive eye exam—or if they've never had one—now is the time to schedule an appointment. Even if your child passed a school vision screening, remember that screenings catch only a fraction of vision problems. A thorough evaluation can identify issues that might be silently affecting your child's learning, comfort, and confidence.
            </p>
            <p>
              Don't let undetected vision problems hold your child back. Early detection and treatment of vision conditions can make a profound difference in their academic achievement, social development, and overall wellbeing. Contact us today to schedule a comprehensive pediatric eye exam and ensure your child has the visual skills they need to thrive.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Spark Eye Care Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical</div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Vision Health</div>
                <h4 className="font-['Cormorant'] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Common Eye Conditions in Adults</h4>
                <p className="text-[var(--color-muted)] text-sm">Learn about the most common vision problems affecting adults and when to seek professional care.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Patient Education</div>
                <h4 className="font-['Cormorant'] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">What to Expect During Your Comprehensive Eye Exam</h4>
                <p className="text-[var(--color-muted)] text-sm">A detailed guide to the tests and procedures included in a thorough eye examination.</p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] mb-2">Preventive Care</div>
                <h4 className="font-['Cormorant'] text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Digital Eye Strain: Protecting Your Vision in the Screen Age</h4>
                <p className="text-[var(--color-muted)] text-sm">Practical strategies for reducing eye fatigue and maintaining comfort during extended screen time.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8">Our team is here to help.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule an Appointment
          </a>
        </div>
      </section>

    </main>
  )
}