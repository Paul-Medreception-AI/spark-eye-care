import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Children's Eye Health: When Should Kids Have Their First Eye Exam? | Spark Eye Care",
  description: "Learn when children should have their first eye exam, what to expect, and why early detection matters for your child's vision and development.",
  keywords: "children's eye health, pediatric eye exam, kids first eye exam, vision screening, child eye care, pediatric optometry",
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
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'var(--font-cormorant)'}}>
            Children's Eye Health: When Should Kids Have Their First Eye Exam?
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
            As parents, we dutifully track our children's milestones—first words, first steps, first days of school. But there's one critical developmental marker that often goes overlooked: their first comprehensive eye exam. Vision plays a fundamental role in how children learn, interact with the world, and develop confidence. Yet many parents are surprised to learn that vision problems can begin in infancy, long before a child can read an eye chart or articulate that something seems "blurry."
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding when and why children need eye exams isn't just about checking a box on the pediatric care checklist. It's about giving your child the best possible foundation for learning, development, and lifelong eye health. Let's explore the essential timeline for children's eye care and what you need to know to protect your child's vision.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            The Recommended Timeline for Children's Eye Exams
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The American Optometric Association recommends a specific schedule for pediatric eye exams, starting much earlier than most parents realize. These guidelines are based on decades of research showing that early detection and treatment of vision problems can prevent long-term complications and learning difficulties.
          </p>

          <div className="bg-[var(--color-light)] rounded-xl p-8 my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Recommended Eye Exam Schedule:</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>First exam at 6 months:</strong> Initial assessment of eye health and visual development</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Second exam at 3 years:</strong> Comprehensive evaluation before preschool begins</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Before first grade (age 5-6):</strong> Critical exam before formal education begins</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed"><strong>Every 1-2 years thereafter:</strong> Regular monitoring throughout childhood and adolescence</p>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Children with existing vision problems, family history of eye conditions, or certain risk factors may need more frequent exams. Your eye care provider will recommend a personalized schedule based on your child's individual needs.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Why Early Eye Exams Matter
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many parents wonder why babies need eye exams when they can't communicate or read letters. The answer lies in understanding critical periods of visual development. A child's visual system undergoes rapid development in the first few years of life, and problems during this window can have lasting consequences.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research shows that 80% of learning in the classroom is visual. Children with undetected vision problems may struggle academically not because of cognitive limitations, but simply because they can't see clearly. They may have difficulty reading the board, lose their place while reading, or experience eye strain and headaches that make concentration difficult.
          </p>

          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
            <p className="text-[var(--color-ink)] italic text-xl leading-relaxed" style={{fontFamily: 'var(--font-cormorant)'}}>
              "One in four school-age children has a vision problem that affects their ability to learn. Many of these children don't realize they have a problem because they've never known what clear vision looks like."
            </p>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Early detection is particularly crucial for conditions like amblyopia (lazy eye), which affects 2-3% of children. If caught and treated before age 7, amblyopia is highly treatable. After that critical window closes, treatment becomes much more difficult and may be less effective.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Common Childhood Vision Problems
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Children can experience a wide range of vision problems, many of which have no obvious symptoms to parents. Understanding these conditions helps explain why professional eye exams are so important—a vision screening at school is not sufficient to detect many of these issues.
          </p>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">Refractive Errors</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">Myopia (nearsightedness), hyperopia (farsightedness), and astigmatism are common in children and easily corrected with glasses or contact lenses.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">Amblyopia (Lazy Eye)</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">When one eye doesn't develop normal vision, often due to misalignment or significant difference in prescription between eyes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">Strabismus (Eye Misalignment)</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">When eyes don't align properly, which can affect depth perception and lead to amblyopia if untreated.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">Convergence Insufficiency</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">Difficulty with eye coordination when focusing on near objects, causing reading problems and eye strain.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">Color Vision Deficiency</h3>
              <p className="text-[var(--color-ink)] leading-relaxed">Difficulty distinguishing certain colors, which can affect learning and daily activities.</p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            What to Expect During Your Child's Eye Exam
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Many parents worry about bringing young children to eye exams, wondering how the doctor will assess vision in a baby or toddler who can't read or follow complex instructions. Pediatric eye care providers use specialized techniques designed for each developmental stage.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For infants, the exam focuses on structural health, eye alignment, and the ability to focus and track objects. The doctor will use lights, toys, and other engaging tools to assess how the baby's eyes move and respond. These exams are typically quick and completely non-invasive.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For preschoolers, providers use picture charts, matching games, and other age-appropriate tests. By school age, children can usually participate in standard vision tests similar to adult exams, including reading letter charts and having their eye pressure checked.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            A comprehensive pediatric eye exam evaluates visual acuity, eye alignment and movement, focusing ability, depth perception, color vision, and overall eye health. The doctor will also dilate your child's pupils to get a complete view of the internal eye structures—this is painless, though the temporary light sensitivity and blurred vision can be uncomfortable for a few hours afterward.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Signs Your Child May Have a Vision Problem
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Between regular exams, parents should watch for signs that might indicate a vision problem. Children often don't complain about blurry vision because they assume everyone sees the same way they do. Behavioral clues are often your best indicators.
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
            <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-4">Warning Signs to Watch For:</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Frequent eye rubbing or blinking</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Sitting very close to the TV or holding books very close</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Tilting head or covering one eye to see better</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Squinting or frowning when looking at distant objects</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Complaints of headaches or tired eyes</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Avoiding reading or other close-up activities</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Losing place while reading or using a finger to guide reading</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Sensitivity to light or excessive tearing</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Eyes that don't align or move together</p>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-[var(--color-ink)]">Declining academic performance or lack of interest in school</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Protecting Your Child's Vision for Life
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond regular eye exams, there are several ways parents can support healthy vision development and protect their children's eyes from injury and strain.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Limit screen time and encourage outdoor play. Research has shown that children who spend more time outdoors have a lower risk of developing myopia. When using digital devices, remind children to follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Ensure proper lighting when reading or doing homework, and encourage good posture. Make sure your child wears appropriate protective eyewear during sports and other activities where eye injury is possible.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Nutrition also plays a role in eye health. A balanced diet rich in fruits, vegetables, and omega-3 fatty acids supports healthy vision development. Foods like leafy greens, carrots, fish, and citrus fruits contain nutrients that are particularly beneficial for eyes.
          </p>

          {/* Closing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Taking the Next Step
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Your child's vision is foundational to their learning, development, and quality of life. While it's easy to put off scheduling an eye exam when your child seems to be seeing fine, remember that many vision problems have no obvious symptoms in the early stages. By following the recommended exam schedule and staying alert to warning signs, you're giving your child the gift of clear vision and the best possible start in life.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If it's been more than a year since your child's last comprehensive eye exam—or if they've never had one—now is the time to schedule an appointment. Early detection and treatment of vision problems can make a profound difference in your child's academic success, confidence, and overall well-being.
          </p>
        </div>

        {/* Author Box */}
        <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6">
          <div className="flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'var(--font-cormorant)'}}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                Understanding Digital Eye Strain in Children
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Learn how screen time affects your child's eyes and what you can do to protect their vision.</p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                Preparing Your Child for Their First Eye Exam
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Tips to make your child's first eye appointment a positive and stress-free experience.</p>
            </a>

            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{fontFamily: 'var(--font-cormorant)'}}>
                Vision Problems and Learning: What Parents Should Know
              </h4>
              <p className="text-[var(--color-muted)] text-sm">Discover the connection between vision and academic performance in school-age children.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{fontFamily: 'var(--font-cormorant)'}}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Child's Eye Exam
          </a>
        </div>
      </section>
    </main>
  )
}