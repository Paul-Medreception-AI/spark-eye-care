import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Fuchs' Dystrophy: A Progressive Corneal Condition | Spark Eye Care",
  description: "Learn about Fuchs' dystrophy, a progressive corneal condition that affects vision. Understand symptoms, causes, treatment options, and when to seek care from eye specialists.",
  keywords: "Fuchs dystrophy, corneal dystrophy, corneal endothelium, corneal edema, vision problems, eye disease, corneal transplant, DSEK, DMEK",
  openGraph: {
    title: "Fuchs' Dystrophy: A Progressive Corneal Condition",
    description: "Comprehensive guide to understanding Fuchs' dystrophy, its progression, and modern treatment approaches.",
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
          
          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Education
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Fuchs' Dystrophy: A Progressive Corneal Condition
          </h1>
          
          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
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
              Waking up with blurry vision that gradually improves throughout the day might seem like a minor inconvenience at first. But for people with Fuchs' dystrophy, this morning haze is often the earliest sign of a progressive corneal condition that can significantly impact vision over time. Understanding this disease—how it develops, who it affects, and what treatment options are available—can empower patients to seek timely care and preserve their quality of life.
            </p>
          </div>

          {/* What Is Fuchs' Dystrophy */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What Is Fuchs' Dystrophy?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Fuchs' dystrophy (pronounced "fooks") is a degenerative eye disease that affects the cornea, the clear front window of the eye. Specifically, it targets the corneal endothelium—a single layer of cells on the inner surface of the cornea responsible for pumping excess fluid out to keep the cornea clear and transparent.
            </p>
            <p className="mb-6">
              In Fuchs' dystrophy, these endothelial cells gradually deteriorate and die off. As the cell count decreases, the cornea loses its ability to regulate fluid balance, leading to swelling (corneal edema). This swelling causes the cornea to become cloudy, resulting in blurred vision, glare, and light sensitivity.
            </p>
            <p className="mb-6">
              The condition typically progresses slowly over many years and is bilateral, meaning it affects both eyes, though one eye may be more severely affected than the other. Named after Austrian ophthalmologist Ernst Fuchs who first described it in 1910, the disease remains one of the leading reasons for corneal transplantation in the United States.
            </p>
          </div>

          {/* Who Is Affected */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Who Is Affected by Fuchs' Dystrophy?
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Fuchs' dystrophy is relatively common, affecting approximately 4% of people over age 40 in the United States. However, certain demographic patterns emerge:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Age:</strong> While early changes may begin in the 30s or 40s, symptoms typically don't appear until the 50s or 60s.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Gender:</strong> Women are affected more frequently than men, with some studies showing a 3:1 female-to-male ratio.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Genetics:</strong> There is a hereditary component; having a family member with Fuchs' dystrophy increases your risk. Specific genetic mutations have been identified in some familial cases.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Ethnicity:</strong> The condition appears to be more common in Caucasian populations.</span>
              </li>
            </ul>
            <p className="mb-6">
              Early-onset Fuchs' dystrophy, which appears before age 40, is less common and often has a stronger genetic link. Understanding your family history can help with early detection and monitoring.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            "The hallmark symptom of Fuchs' dystrophy is blurred vision that's worse in the morning and gradually improves throughout the day as surface moisture evaporates."
          </blockquote>

          {/* Symptoms and Progression */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Recognizing the Symptoms and Stages
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Fuchs' dystrophy progresses through distinct stages, and symptoms evolve as the disease advances:
            </p>
            <p className="mb-4 font-semibold">Early Stage:</p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Often asymptomatic; changes only visible during eye examination</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Tiny droplets (guttae) form on the corneal endothelium</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Vision remains relatively normal</span>
              </li>
            </ul>
            <p className="mb-4 font-semibold">Moderate Stage:</p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Blurred vision, especially upon waking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Glare and halos around lights, particularly at night</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Light sensitivity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Vision improves as the day progresses and corneal swelling decreases</span>
              </li>
            </ul>
            <p className="mb-4 font-semibold">Advanced Stage:</p>
            <ul className="space-y-3 mb-6 ml-6">
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Vision remains cloudy throughout the day</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Corneal swelling may cause painful epithelial blisters (bullae)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Significant impact on daily activities like driving and reading</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary)]">•</span>
                <span>Increased risk of corneal scarring</span>
              </li>
            </ul>
            <p className="mb-6">
              The progression rate varies significantly among individuals. Some people remain in early stages for decades with minimal symptoms, while others experience faster deterioration. Regular monitoring by an eye care specialist is essential to track disease progression.
            </p>
          </div>

          {/* Diagnosis and Testing */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Diagnosis and Testing
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Diagnosing Fuchs' dystrophy involves a comprehensive eye examination with specialized tools:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Slit-lamp examination:</strong> This microscope allows the doctor to view the cornea in detail and identify the characteristic guttae (droplet-like deposits).</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Pachymetry:</strong> Measures corneal thickness; a thicker cornea indicates swelling from fluid buildup.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Specular microscopy:</strong> Provides detailed images of endothelial cells and counts cell density to assess disease severity.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Visual acuity testing:</strong> Measures how well you can see at various distances to document functional impact.</span>
              </li>
            </ul>
            <p className="mb-6">
              Early detection through routine eye examinations is crucial, even before symptoms appear. If you have a family history of Fuchs' dystrophy, inform your eye care provider so they can monitor you appropriately.
            </p>
          </div>

          {/* Treatment Options */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Treatment Options: From Conservative to Surgical
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Treatment for Fuchs' dystrophy depends on the stage and severity of symptoms. Options range from conservative management to surgical intervention.
            </p>
            <p className="mb-4 font-semibold">Conservative Management (Early to Moderate Stages):</p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Hypertonic saline drops and ointment:</strong> Draws excess fluid from the cornea, particularly helpful for morning cloudiness. Using ointment at bedtime and drops during the day can reduce swelling.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Blow-drying technique:</strong> Using a hair dryer on cool setting at arm's length can help evaporate surface moisture and temporarily improve vision.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Soft contact lenses:</strong> For painful corneal blisters, a bandage contact lens can provide comfort and protect the cornea.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Reducing eye pressure:</strong> Lowering intraocular pressure may slow progression in some cases.</span>
              </li>
            </ul>
            <p className="mb-4 font-semibold">Surgical Options (Moderate to Advanced Stages):</p>
            <p className="mb-6">
              When conservative measures no longer provide adequate relief and vision significantly impacts quality of life, surgical intervention becomes necessary. Modern corneal transplant techniques have revolutionized treatment:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>DMEK (Descemet's Membrane Endothelial Keratoplasty):</strong> The current gold standard for Fuchs' dystrophy. Only the diseased endothelial layer is replaced with healthy donor tissue (about as thick as a red blood cell). This selective approach offers faster recovery, better visual outcomes, and lower rejection rates compared to full-thickness transplants.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>DSEK (Descemet's Stripping Endothelial Keratoplasty):</strong> Replaces the endothelium and a thin layer of supporting tissue. Slightly thicker than DMEK but still offers excellent results with potentially easier surgical technique.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Penetrating Keratoplasty (PK):</strong> Full-thickness corneal transplant, now reserved for cases with significant corneal scarring or when endothelial transplants are not feasible.</span>
              </li>
            </ul>
            <p className="mb-6">
              Success rates for DMEK and DSEK procedures are excellent, with most patients achieving significantly improved vision. Recovery typically takes several months, and anti-rejection eye drops are required long-term to protect the donor tissue.
            </p>
          </div>

          {/* Living With Fuchs' Dystrophy */}
          <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Living Well With Fuchs' Dystrophy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              While there's currently no way to prevent or reverse Fuchs' dystrophy, several strategies can help you manage symptoms and maintain quality of life:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Schedule demanding visual tasks:</strong> Plan activities requiring clear vision for late morning or afternoon when vision is typically better.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Protect your eyes:</strong> Wear sunglasses to reduce glare sensitivity, and use protective eyewear to prevent corneal injury.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Maintain regular follow-ups:</strong> Consistent monitoring allows your eye care provider to track progression and recommend treatment at the optimal time.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Stay informed:</strong> Research in corneal disease continues to advance. New treatments and techniques are constantly being developed.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Connect with support:</strong> Patient advocacy organizations and support groups can provide emotional support and practical advice from others living with the condition.</span>
              </li>
            </ul>
            <p className="mb-6">
              If you're considering cataract surgery and have Fuchs' dystrophy, discuss this carefully with your ophthalmologist. Cataract surgery can accelerate corneal endothelial cell loss, and in some cases, combining cataract surgery with endothelial transplant may be recommended.
            </p>
          </div>

          {/* Closing Section */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Fuchs' dystrophy is a progressive condition, but it doesn't have to define your life. With proper monitoring, timely intervention, and modern surgical techniques when needed, most people with Fuchs' dystrophy can maintain good vision and quality of life. The key is establishing care with an experienced eye specialist who can guide you through each stage of the disease.
            </p>
            <p className="mb-6">
              If you're experiencing morning vision blur, increased glare sensitivity, or have a family history of Fuchs' dystrophy, don't wait to seek evaluation. Early diagnosis and proactive management provide the best outcomes. Your vision is precious—protecting it starts with understanding the conditions that threaten it and taking action to preserve your sight.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[var(--color-ink)] mb-1">Written by the Spark Eye Care Clinical Team</div>
              <div className="text-[var(--color-muted)] text-sm">Board-certified providers specializing in Other Medical</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl text-[var(--color-ink)] mb-8 text-center font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Eye Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Understanding Corneal Health: The Window to Clear Vision
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn about the cornea's vital role in vision and common conditions that affect this essential eye structure.
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
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Treatment Options</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Modern Corneal Transplant Techniques: What to Expect
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover how advances in surgical technology have transformed corneal transplantation with faster recovery and better outcomes.
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
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="aspect-video bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">Prevention</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The Importance of Regular Eye Exams at Every Age
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Early detection saves vision. Learn why comprehensive eye examinations are essential for maintaining lifelong eye health.
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
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}