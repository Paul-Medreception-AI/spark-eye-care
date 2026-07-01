import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Floaters and Flashes Treatment in Kyle | Spark Eye Care',
  description: 'Expert floaters and flashes treatment in Kyle. Board-certified care for eye floaters, flashing lights, and visual disturbances. Telehealth available.',
  keywords: 'floaters and flashes treatment Kyle, eye floaters Kyle, flashing lights vision, vitreous detachment, retinal tears Kyle',
  openGraph: {
    title: 'Floaters and Flashes Treatment in Kyle | Spark Eye Care',
    description: 'Expert floaters and flashes treatment in Kyle. Board-certified care for eye floaters, flashing lights, and visual disturbances.',
    url: 'https://sparkeyetx.com/conditions/floaters-and-flashes',
    type: 'website',
  }
}

export default function FloatersFlashesPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Floaters and Flashes</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Floaters and Flashes Treatment in Kyle
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-95">
            Experiencing spots, cobwebs, or flashing lights in your vision can be alarming and disruptive to daily life. At Spark Eye Care, we provide expert evaluation and treatment for floaters and flashes, ensuring your eye health and peace of mind with comprehensive, compassionate care.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)]">
            Understanding Floaters and Flashes
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Floaters and flashes are common visual disturbances that affect millions of people worldwide. Floaters appear as small dark spots, strings, or cobweb-like shapes that drift across your field of vision, particularly noticeable against bright backgrounds like a clear sky or white wall. Flashes, on the other hand, manifest as brief bursts of light, similar to seeing stars or lightning streaks, especially in peripheral vision. While many cases are benign age-related changes, floaters and flashes can sometimes signal serious eye conditions requiring immediate attention. These visual phenomena can impact quality of life, causing anxiety, difficulty reading, driving challenges, and concerns about eye health that warrant professional evaluation.
            </p>
            <p>
              The most common cause of floaters and flashes is posterior vitreous detachment (PVD), a natural aging process where the gel-like vitreous inside the eye shrinks and pulls away from the retina. This typically occurs after age 50 but can happen earlier in people who are nearsighted, have had eye surgery or trauma, or have inflammatory eye conditions. As the vitreous separates, it can cast shadows on the retina (floaters) and tug on the retina causing electrical stimulation perceived as flashes. Other causes include retinal tears or detachment, vitreous hemorrhage from diabetic retinopathy or blood vessel abnormalities, inflammation inside the eye (uveitis), and migraine aura. Risk factors include advancing age, high myopia (nearsightedness), previous eye surgery including cataract removal, eye injuries, diabetes, and family history of retinal problems.
            </p>
            <p>
              Professional evaluation is critical because while many floaters and flashes are harmless, they can indicate sight-threatening conditions like retinal tears or detachment that require urgent treatment to prevent permanent vision loss. A comprehensive dilated eye examination allows our eye care specialists to visualize the entire retina and vitreous, distinguishing between benign age-related changes and serious pathology. Early detection of retinal tears enables preventive laser treatment to avoid progression to retinal detachment, a surgical emergency. Even when floaters are benign, understanding their cause provides reassurance and establishes a baseline for monitoring changes. At Spark Eye Care in Kyle, we combine advanced diagnostic technology with extensive experience to accurately diagnose the cause of your symptoms and recommend appropriate treatment, whether that's reassurance and monitoring, laser treatment, or surgical referral when necessary.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Signs & Symptoms of Floaters and Flashes
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Visual Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Dark Spots or Strings</span>
                    <p className="text-[var(--color-muted)]">Small black or gray specks, threads, or cobweb-like shapes that move when you move your eyes and seem to dart away when you try to look at them directly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Flashing Lights</span>
                    <p className="text-[var(--color-muted)]">Brief bursts or streaks of light, often in peripheral vision, that may appear like lightning bolts, sparkles, or camera flashes, especially noticeable in dim lighting or when eyes are closed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Shadow or Curtain Over Vision</span>
                    <p className="text-[var(--color-muted)]">A dark shadow, veil, or curtain that obscures part of your visual field, potentially indicating retinal detachment requiring emergency treatment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Sudden Increase in Floaters</span>
                    <p className="text-[var(--color-muted)]">A dramatic rise in the number of floaters, especially if accompanied by flashes or vision loss, which may signal vitreous hemorrhage or retinal tear.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Ring or Arc of Light</span>
                    <p className="text-[var(--color-muted)]">A semicircular flash or ring of light in peripheral vision, often indicating vitreous traction on the retina from posterior vitreous detachment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Difficulty Reading or Focusing</span>
                    <p className="text-[var(--color-muted)]">Floaters that interfere with reading, computer work, or other visual tasks, particularly when they drift through the central visual field.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Cobweb or Cloud Sensation</span>
                    <p className="text-[var(--color-muted)]">Feeling like you're looking through a hazy cloud or cobweb that moves with eye movement, caused by dense vitreous opacities casting shadows.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">Impact on Daily Life</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Anxiety About Vision Loss</span>
                    <p className="text-[var(--color-muted)]">Persistent worry or fear about losing vision, especially when symptoms first appear or when learning they can indicate serious conditions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Driving Difficulties</span>
                    <p className="text-[var(--color-muted)]">Distraction or concern while driving, particularly in bright sunlight or at night when floaters or flashes are more noticeable against contrasting backgrounds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Work Performance Impact</span>
                    <p className="text-[var(--color-muted)]">Reduced productivity or concentration at work, especially for jobs requiring detailed visual tasks, computer use, or prolonged reading.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Disrupted Sleep Patterns</span>
                    <p className="text-[var(--color-muted)]">Difficulty sleeping due to worry about eye health or experiencing flashes with eye movements in dark bedroom environments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Avoidance of Activities</span>
                    <p className="text-[var(--color-muted)]">Reluctance to participate in hobbies, sports, or social activities due to visual disturbances or fear of worsening symptoms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Frequent Eye Rubbing or Blinking</span>
                    <p className="text-[var(--color-muted)]">Instinctive attempts to clear vision by rubbing eyes or excessive blinking, which typically doesn't improve floaters and may cause irritation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Constant Visual Monitoring</span>
                    <p className="text-[var(--color-muted)]">Hypervigilance about changes in floaters or new symptoms, leading to repeated self-checking and heightened awareness of normal visual phenomena.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--color-ink)]">Mood Changes</span>
                    <p className="text-[var(--color-muted)]">Frustration, irritability, or low mood related to persistent visual disturbances and their impact on quality of life and independence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Prompt evaluation can distinguish between benign floaters and sight-threatening conditions, providing peace of mind and protecting your vision.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center">
            How We Treat Floaters and Flashes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your journey begins with a thorough dilated eye examination using advanced imaging technology to visualize the vitreous and retina in detail. We carefully assess for posterior vitreous detachment, retinal tears, retinal detachment, vitreous hemorrhage, and other causes of your symptoms. Our evaluation includes detailed history-taking to understand symptom onset, progression, and risk factors, along with visual acuity testing and intraocular pressure measurement to rule out associated conditions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on examination findings, we develop a tailored treatment approach specific to your condition and needs. For uncomplicated posterior vitreous detachment with benign floaters, we provide reassurance, education, and monitoring with follow-up examinations to ensure stability. If retinal tears are detected, we arrange prompt laser photocoagulation to prevent progression to detachment. For significant vitreous hemorrhage or retinal detachment, we coordinate urgent surgical referral to a retinal specialist while providing supportive care and patient education throughout the process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Monitoring & Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For patients with benign floaters, we establish a monitoring schedule with follow-up examinations at appropriate intervals to ensure no progression or new developments. We educate you about warning signs requiring immediate attention, including sudden increase in floaters, new onset flashes, shadow or curtain over vision, or vision loss. We provide coping strategies for managing bothersome floaters, discuss when symptoms typically improve through neuroadaptation, and offer continued support as your eyes adjust. Our team remains accessible for urgent concerns and questions throughout your care journey.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-4">
              Our evidence-based treatment approach integrates the latest clinical guidelines and diagnostic technology. For posterior vitreous detachment, the primary management is observation with serial dilated examinations at 2-4 weeks, then 3 months, and 6 months to monitor for delayed retinal tears which can occur in 10-15% of cases. When floaters significantly impact quality of life and don't improve after 6 months, we discuss advanced treatment options including YAG laser vitreolysis for large, symptomatic floaters in appropriate anatomic locations, or referral for pars plana vitrectomy surgery for severe cases, while carefully weighing risks and benefits.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              For retinal tears discovered during evaluation, we coordinate prompt prophylactic laser retinopexy (barrier laser treatment) to create adhesive scarring around the tear, preventing fluid from entering the subretinal space and causing detachment. This outpatient procedure has a high success rate in preventing retinal detachment when performed early. We work closely with retinal surgery specialists for cases requiring surgical intervention, ensuring seamless care coordination and communication. Throughout treatment, we emphasize patient education about symptom recognition, realistic expectations, and the natural course of vitreous changes, helping reduce anxiety while maintaining appropriate vigilance for complications.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Why Choose Spark Eye Care for Floaters and Flashes Treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Eye Care Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our eye care providers are board-certified with extensive training in diagnosing and managing vitreoretinal conditions including floaters, flashes, posterior vitreous detachment, and retinal pathology. We stay current with the latest diagnostic techniques and treatment protocols through continuing education and professional development, ensuring you receive the highest standard of care based on current clinical evidence and best practices in ophthalmology.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Personalized, Patient-Centered Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that each patient's experience with floaters and flashes is unique, and we take time to understand your specific symptoms, concerns, and how they impact your daily life. Our approach combines thorough clinical evaluation with compassionate communication, ensuring you understand your diagnosis, treatment options, and prognosis. We address anxiety about vision loss with clear explanations and realistic expectations, empowering you to participate actively in your eye care decisions.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Convenient Telehealth Options</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For initial consultations, follow-up discussions, and urgent symptom evaluation, we offer secure telehealth appointments that allow you to connect with our providers from the comfort of your home. While comprehensive dilated eye examinations require in-office visits for direct visualization of your retina, telehealth is valuable for discussing new symptoms, reviewing test results, addressing questions about your diagnosis, providing education about warning signs, and determining urgency of in-person evaluation when new symptoms develop.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] p-8 rounded-lg animate-fade-up">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Proven Experience with Vitreoretinal Conditions</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice has extensive experience evaluating and managing patients with floaters and flashes, from routine age-related vitreous changes to complex cases requiring urgent intervention. We have established relationships with leading retinal surgeons in the region for seamless referral when surgical treatment is necessary, while providing continuity of care through coordination and communication. Our track record of successful outcomes, early detection of sight-threatening complications, and high patient satisfaction reflects our commitment to excellence in vitreoretinal care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-[var(--color-ink)] text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial visit includes comprehensive medical history, discussion of symptom onset and characteristics, visual acuity testing, intraocular pressure measurement, and dilated fundus examination with indirect ophthalmoscopy to visualize the entire retina and vitreous. We use advanced imaging when indicated to document findings. You'll receive a clear diagnosis, thorough explanation of your condition, discussion of any associated risks, and specific recommendations for treatment or monitoring. For urgent findings like retinal tears, we arrange immediate intervention or specialist referral. Most patients leave with significant relief from understanding their diagnosis and having a clear management plan.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Implementation (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  For uncomplicated posterior vitreous detachment, treatment involves careful observation and patient education about warning symptoms requiring immediate attention: sudden increase in floaters, new or increased flashes, shadow or curtain over vision, or vision decrease. We schedule follow-up examination at 2-4 weeks to ensure no delayed retinal complications have developed. For retinal tears requiring laser treatment, photocoagulation is typically performed within days of detection, with post-treatment monitoring to ensure adequate adhesion. You'll learn coping strategies for bothersome floaters including avoiding bright backgrounds when possible, moving eyes to shift floater location, and understanding that neuroadaptation typically occurs over weeks to months as your brain learns to filter out the floater perception.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Follow-up examinations at 3 months assess stability of posterior vitreous detachment, confirm absence of new retinal tears or complications, and evaluate symptomatic improvement. Many patients report significant reduction in floater awareness at this stage as neuroadaptation progresses. We perform repeat dilated examination to ensure retinal integrity and document any changes in vitreous appearance. For patients who underwent laser treatment, we verify successful retinopexy with stable retinal attachment. This checkpoint allows us to adjust monitoring frequency, address persistent concerns, discuss long-term prognosis, and determine whether additional interventions might be appropriate for significantly symptomatic floaters that haven't improved.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">4</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-term Management (6+ Months)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After 6 months of stability, most patients with benign posterior vitreous detachment can return to routine annual eye examinations, with continued awareness of warning symptoms requiring urgent evaluation. The risk of delayed retinal complications decreases significantly after 3-6 months. Floater symptoms typically improve substantially through neuroadaptation, though some persistent visual disturbances may remain. We maintain open communication for any new concerns, provide ongoing education about age-related eye changes, optimize management of risk factors like myopia and diabetes, and continue comprehensive eye health monitoring. For the small percentage of patients with severely symptomatic floaters that don't improve, we discuss advanced treatment options including referral for YAG laser vitreolysis or vitrectomy surgery based on individual circumstances, symptom severity, and anatomic considerations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center">
            Frequently Asked Questions About Floaters and Flashes
          </h2>
          <div className="space-y-4">
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                How long does it take for floaters to go away?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Floaters from posterior vitreous detachment rarely disappear completely, but most people experience significant improvement over 3-6 months through neuroadaptation, where your brain learns to ignore the floaters. Initially very noticeable floaters typically become less bothersome as your visual system adapts, though they may still be visible against bright backgrounds like blue sky or white walls. The floaters themselves may also settle inferiorly in the vitreous due to gravity, moving out of your central visual axis. Some floaters persist long-term but become less disruptive to daily activities. In rare cases of severely symptomatic floaters that don't improve after 6 months and significantly impact quality of life, advanced treatments like YAG laser vitreolysis or vitrectomy surgery may be considered, though these carry risks and are reserved for select cases.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Are floaters and flashes dangerous?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most floaters and flashes result from benign age-related posterior vitreous detachment and are not dangerous, though they warrant professional evaluation to rule out serious complications. However, these symptoms can indicate sight-threatening conditions including retinal tears (occurring in 10-15% of posterior vitreous detachment cases), retinal detachment, vitreous hemorrhage from diabetic retinopathy or torn blood vessels, or inflammatory conditions. Warning signs requiring emergency evaluation include sudden onset of many new floaters, significant increase in existing floaters, persistent or frequent flashing lights, shadow or curtain obscuring part of your vision, or sudden vision loss. Prompt diagnosis through dilated eye examination is essential because retinal tears can be treated preventively with laser to avoid progression to retinal detachment, which requires surgery and may result in permanent vision loss if not treated urgently. Even when symptoms prove benign, professional evaluation provides peace of mind and establishes necessary monitoring.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                What should I do if I suddenly see new floaters or flashes?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Sudden onset of new floaters, especially multiple floaters or shower-like appearance, or new flashing lights requires prompt eye examination within 24 hours to rule out retinal tear or detachment. Contact our office immediately to schedule urgent evaluation. If accompanied by vision loss, shadow over vision, or curtain effect, this constitutes an emergency requiring same-day examination. Until your appointment, avoid strenuous activities, heavy lifting, and jarring movements that might worsen a potential retinal tear. Don't assume new symptoms are harmless even if you've had floaters before—each new episode requires reassessment. When you call, describe symptoms clearly including number of floaters, presence of flashes, any vision changes, which eye is affected, and timing of onset. We prioritize acute floater and flash evaluations because early detection and treatment of retinal tears can prevent progression to retinal detachment, preserving vision and avoiding more invasive surgical intervention.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Does insurance cover treatment for floaters and flashes?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most medical insurance plans, including Medicare, cover evaluation and treatment of floaters and flashes because they can indicate serious eye conditions requiring medical attention. Dilated eye examinations to diagnose the cause of your symptoms are typically covered as medically necessary. Treatment for retinal tears with laser photocoagulation is covered as it prevents retinal detachment and vision loss. Surgical treatments like vitrectomy for complications such as retinal detachment or dense vitreous hemorrhage are covered when medically necessary. However, advanced elective treatments for benign but bothersome floaters, such as YAG laser vitreolysis for cosmetic/quality-of-life improvement in uncomplicated cases, may not be covered by all insurance plans and might be considered investigational or cosmetic. Coverage varies by plan and specific circumstances. Our billing staff can verify your specific coverage, provide cost estimates, discuss payment options, and help you understand your insurance benefits before treatment. We accept most major insurance plans and offer flexible payment arrangements when needed.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can floaters be prevented?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Posterior vitreous detachment and associated floaters are a natural aging process that cannot be prevented, typically occurring in most people by age 70. However, you can reduce risk factors that may lead to earlier or more problematic vitreous changes: maintain good control of diabetes and blood pressure to prevent vitreous hemorrhage, protect eyes from trauma with safety glasses during sports or hazardous activities, manage high myopia with regular eye examinations as nearsighted eyes are at higher risk, avoid eye rubbing which can cause vitreous traction, and promptly treat eye inflammation or infections that can lead to vitreous changes. While you can't prevent age-related floaters, you can minimize risk of sight-threatening complications through regular comprehensive eye exams that detect and treat retinal problems early, especially if you have risk factors like high myopia, previous eye surgery, family history of retinal detachment, or eye trauma. Maintaining overall eye health through proper nutrition, UV protection, and management of systemic diseases supports retinal and vitreous health throughout life.
              </p>
            </details>
            <details className="bg-[var(--color-cream)] p-6 rounded-lg group">
              <summary className="font-semibold text-xl text-[var(--color-ink)] cursor-pointer list-none flex justify-between items-center">
                Can telehealth appointments work for evaluating floaters and flashes?
                <span className="text-[var(--color-primary)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Telehealth is valuable for initial consultation about new floater or flash symptoms to assess urgency and determine whether immediate in-office evaluation is needed, but it cannot replace a comprehensive dilated eye examination which requires direct visualization of your retina and vitreous in the office. During a telehealth visit, we can take detailed symptom history, assess your risk factors, perform external eye evaluation via video, provide preliminary assessment of symptom characteristics, discuss warning signs that indicate emergency, and schedule appropriate in-person follow-up. Telehealth is also useful for post-treatment follow-up discussions, addressing questions about your diagnosis, reviewing test results from previous examinations, evaluating whether new or changing symptoms require urgent in-office assessment, and providing education about long-term monitoring. For diagnosis and treatment of floaters and flashes, an in-office dilated examination is essential and typically needs to occur within 24 hours of new symptom onset to ensure prompt detection of retinal tears or other serious conditions requiring immediate intervention.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/conditions/diabetic-retinopathy" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Diabetic Retinopathy</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Diabetes-related eye damage that can cause floaters from vitreous hemorrhage and requires careful monitoring and treatment.
              </p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </a>
            <a href="/conditions/macular-degeneration" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Macular Degeneration</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Age-related retinal condition that may present with visual distortions and requires comprehensive retinal evaluation.
              </p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </a>
            <a href="/conditions/cataracts" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)]">Cataracts</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Clouding of the eye's lens that often occurs alongside posterior vitreous detachment and requires comprehensive eye assessment.
              </p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
            Get Help for Floaters and Flashes Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 font-light">
            You don't have to face floaters and flashes alone. Our team is ready to help protect your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-medium text-lg hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule Urgent Evaluation
            </a>
            <a 
              href="/conditions" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-white/10 transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}