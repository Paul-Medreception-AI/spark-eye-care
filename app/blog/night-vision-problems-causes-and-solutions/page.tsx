import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Night Vision Problems: Causes and Solutions | Spark Eye Care',
  description: 'Struggling to see clearly at night or in low light? Learn about the common causes of night vision problems and effective solutions from our expert eye care team.',
  openGraph: {
    title: 'Night Vision Problems: Causes and Solutions | Spark Eye Care',
    description: 'Struggling to see clearly at night or in low light? Learn about the common causes of night vision problems and effective solutions from our expert eye care team.',
    url: 'https://sparkeyetx.com/blog/night-vision-problems-causes-and-solutions',
    type: 'article',
    images: [{
      url: 'https://sparkeyetx.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Spark Eye Care'
    }]
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>
          
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 font-semibold">Patient Education</div>
          
          <h1 className="text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Night Vision Problems: Causes and Solutions
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published March 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>Dr. Care Team</span>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-[var(--color-ink)] leading-loose text-base">
            <p className="text-xl mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Have you ever felt anxious about driving after dark? Do dimly lit restaurants leave you struggling to read the menu? If navigating low-light environments has become increasingly challenging, you're not alone. Night vision problems affect millions of people and can significantly impact quality of life, safety, and independence.
            </p>
            
            <p className="mb-6">
              Understanding why your eyes struggle in darkness is the first step toward finding effective solutions. While some decline in night vision is a natural part of aging, sudden or severe changes warrant professional evaluation. The good news? Many causes of poor night vision are treatable, and simple interventions can make a dramatic difference in your ability to see clearly when the sun goes down.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Understanding Night Vision
            </h2>
            
            <p className="mb-6">
              Night vision, or scotopic vision, relies primarily on specialized cells in your retina called rods. Unlike cone cells that handle color perception and work best in bright light, rod cells are exquisitely sensitive to low light levels but don't detect color. Your eyes contain approximately 120 million rods concentrated in the peripheral retina.
            </p>
            
            <p className="mb-6">
              When you move from a bright environment to darkness, your eyes undergo a process called dark adaptation. The pupils dilate to allow more light to enter, and chemical changes occur in the rod cells to increase their sensitivity. This process can take 20 to 30 minutes to complete fully—which is why you gradually see better after entering a dark space.
            </p>
            
            <p className="mb-6">
              Several factors influence how well this system functions. The health of your retina, the clarity of your cornea and lens, your pupil's ability to dilate properly, and even your nutritional status all play crucial roles in maintaining optimal night vision.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Common Causes of Night Vision Problems
            </h2>
            
            <p className="mb-6">
              Multiple conditions can compromise your ability to see in low light. Identifying the underlying cause is essential for appropriate treatment.
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Cataracts</p>
            <p className="mb-6">
              Cataracts—clouding of the eye's natural lens—are among the most common culprits behind declining night vision. As proteins in the lens break down with age, they scatter light rather than allowing it to pass cleanly through to the retina. This creates halos around lights, increases glare sensitivity, and makes it difficult to distinguish objects in dim conditions. Fortunately, cataract surgery to replace the clouded lens with a clear artificial one can dramatically restore night vision.
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Vitamin A Deficiency</p>
            <p className="mb-6">
              Vitamin A is essential for producing rhodopsin, the light-sensitive pigment in rod cells. While severe deficiency leading to night blindness (nyctalopia) is rare in developed countries, subclinical deficiency can contribute to reduced night vision. This is more common in individuals with malabsorption disorders, strict dietary restrictions, or certain medical conditions.
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Diabetes and Diabetic Retinopathy</p>
            <p className="mb-6">
              Diabetes can damage the blood vessels in your retina, affecting the health of rod cells and other structures needed for vision. People with diabetes often report difficulty with night driving and adapting to darkness, even before significant retinal damage is visible on examination.
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Glaucoma</p>
            <p className="mb-6">
              This group of conditions damages the optic nerve, often starting with peripheral vision loss. Since rod cells are concentrated in the peripheral retina, glaucoma can affect night vision relatively early in the disease process.
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Retinitis Pigmentosa</p>
            <p className="mb-6">
              This inherited condition causes progressive degeneration of the retina, particularly affecting rod cells. Night blindness is often the first symptom, typically appearing in childhood or adolescence, followed by gradual loss of peripheral vision.
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Medications</p>
            <p className="mb-6">
              Certain medications can temporarily impair night vision. These include some glaucoma medications (particularly those that constrict the pupil), medications for erectile dysfunction, and antimalarial drugs. If you've noticed vision changes after starting a new medication, discuss this with your healthcare provider.
            </p>

            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8">
              <p className="text-[var(--color-ink)] italic text-xl leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
                "While some decline in night vision with age is normal, sudden changes or severe difficulty seeing in low light should never be dismissed as 'just getting older.' These symptoms deserve professional evaluation."
              </p>
            </div>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Age-Related Changes
            </h2>
            
            <p className="mb-6">
              Even in the absence of disease, aging naturally affects night vision. After age 40, several changes occur:
            </p>
            
            <ul className="mb-6 space-y-3">
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>The pupil becomes smaller and less responsive to darkness, reducing the amount of light reaching the retina</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>The lens gradually yellows, filtering out blue light and reducing overall light transmission</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>The number of rod cells decreases</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dark adaptation becomes slower and less complete</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Contrast sensitivity declines, making it harder to distinguish objects from their background in low light</span>
              </li>
            </ul>
            
            <p className="mb-6">
              By age 60, you may need three times as much light to see as well as you did at age 20. This is normal, but it doesn't mean you're helpless. Understanding these changes allows you to make appropriate adaptations.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              When to Seek Professional Help
            </h2>
            
            <p className="mb-6">
              Schedule a comprehensive eye examination if you experience:
            </p>
            
            <ul className="mb-6 space-y-3">
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sudden worsening of night vision</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Difficulty seeing in dim light that interferes with daily activities</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Halos, glare, or starbursts around lights</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Tunnel vision or loss of peripheral vision</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Concerns about safe night driving</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Night vision problems accompanied by other vision changes</span>
              </li>
            </ul>
            
            <p className="mb-6">
              A thorough examination can identify treatable conditions and rule out serious underlying problems. Your eye care provider will assess your retinal health, check for cataracts, measure your pupil response, and evaluate overall visual function.
            </p>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Solutions and Management Strategies
            </h2>
            
            <p className="mb-6">
              Depending on the underlying cause, several treatment options and strategies can improve your night vision:
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Medical Treatments</p>
            <p className="mb-6">
              For cataracts causing significant night vision impairment, surgery is highly effective. Modern cataract surgery is one of the safest and most successful procedures in medicine, with most patients experiencing dramatic improvement in their ability to see at night. If vitamin A deficiency is identified, supplementation can restore night vision within weeks. Managing underlying conditions like diabetes through better blood sugar control can also preserve and sometimes improve night vision.
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Corrective Lenses</p>
            <p className="mb-6">
              Ensuring you have the correct prescription is fundamental. Even minor refractive errors are magnified in low light conditions. Anti-reflective lens coatings reduce glare and halos from oncoming headlights and streetlights, significantly improving comfort and clarity when driving at night. Some people benefit from separate glasses optimized specifically for night driving.
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Nutritional Support</p>
            <p className="mb-6">
              While vitamin A is crucial, other nutrients support retinal health and function. Lutein and zeaxanthin—found in leafy greens—protect retinal cells from oxidative damage. Omega-3 fatty acids support overall eye health. Zinc plays a role in vitamin A metabolism and retinal function. A diet rich in colorful vegetables, fish, and nuts provides these nutrients naturally.
            </p>
            
            <p className="mb-4 font-semibold text-[var(--color-dark)]">Practical Adaptations</p>
            <p className="mb-6">
              Simple lifestyle modifications can significantly improve your safety and comfort in low-light situations:
            </p>
            
            <ul className="mb-6 space-y-3">
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Keep your car windshield and glasses clean to minimize light scattering</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Reduce dashboard light brightness to help maintain dark adaptation</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Slow down when driving at night to give yourself more reaction time</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Avoid looking directly at oncoming headlights; instead, focus on the right edge of the road</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Increase lighting in your home, especially in hallways, stairs, and bathrooms</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use nightlights to help navigate safely at night without turning on bright lights that disrupt dark adaptation</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Allow extra time for your eyes to adjust when moving from bright to dark environments</span>
              </li>
              <li className="flex gap-3">
                <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Consider limiting night driving to familiar routes and avoiding driving during dusk when vision can be most challenging</span>
              </li>
            </ul>

            <h2 className="text-3xl text-[var(--color-ink)] mt-12 mb-4 font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Taking Control of Your Night Vision
            </h2>
            
            <p className="mb-6">
              Night vision problems are more than an inconvenience—they can affect your safety, limit your activities, and reduce your quality of life. The encouraging news is that many causes are treatable, and even when complete restoration isn't possible, strategic adaptations can help you navigate low-light environments more confidently.
            </p>
            
            <p className="mb-6">
              Don't accept declining night vision as an inevitable part of aging. Whether your difficulties stem from cataracts, nutritional deficiency, or another correctable condition, professional evaluation is the first step toward clearer, safer vision after dark.
            </p>
            
            <p className="mb-6">
              Your eyes are precious, and changes in how they function deserve attention. If night vision concerns are affecting your life, reach out to an eye care professional who can identify the cause and guide you toward effective solutions. Better night vision—and the independence and confidence it brings—may be more achievable than you think.
            </p>

          </div>
        </div>
      </article>

      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Written by the Spark Eye Care Clinical Team</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical with a commitment to evidence-based patient education and comprehensive eye care.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-light text-[var(--color-ink)] mb-8 text-center" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Related Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-semibold mb-2">Eye Health</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Understanding Cataracts: What You Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">Learn about the causes, symptoms, and treatment options for cataracts, one of the leading causes of vision problems.</p>
                <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-semibold mb-2">Prevention</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Protecting Your Eyes from UV Damage
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">Discover why UV protection matters year-round and how to choose the right sunglasses for optimal eye health.</p>
                <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-semibold mb-2">Wellness</div>
                <h4 className="text-xl font-light text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  The Importance of Regular Eye Exams
                </h4>
                <p className="text-[var(--color-muted)] text-sm mb-4">Learn why comprehensive eye examinations are essential for maintaining lifelong vision health and detecting problems early.</p>
                <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2">
                  Read Article
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you achieve clearer, healthier vision.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation
            <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}