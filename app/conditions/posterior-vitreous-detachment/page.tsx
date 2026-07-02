import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Posterior Vitreous Detachment Treatment in Kyle | Spark Eye Care',
  description: 'Expert posterior vitreous detachment treatment in Kyle. Board-certified care for floaters, flashes, and vision changes. Telehealth available. Call Spark Eye Care today.',
  openGraph: {
    title: 'Posterior Vitreous Detachment Treatment in Kyle | Spark Eye Care',
    description: 'Expert posterior vitreous detachment treatment in Kyle. Board-certified care for floaters, flashes, and vision changes.',
    url: 'https://sparkeyetx.com/conditions/posterior-vitreous-detachment',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function PosteriorVitreousDetachmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Posterior Vitreous Detachment</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Posterior Vitreous Detachment Treatment in Kyle
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl opacity-95">
            Posterior vitreous detachment is a common age-related change that affects the gel-like substance inside your eye, often causing floaters and flashes that can be alarming. At Spark Eye Care, our experienced team provides comprehensive evaluation and management to ensure your eye health remains protected during this natural process.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/conditions/retinal-anatomy.jpg"
                alt="Posterior vitreous detachment anatomy"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-8">
            Understanding Posterior Vitreous Detachment
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Posterior vitreous detachment (PVD) occurs when the vitreous gel that fills the inside of your eye separates from the retina at the back of the eye. This is an extremely common condition that affects more than 75% of people over age 65, and it typically develops as a natural part of the aging process. The vitreous gel, which is firmly attached to the retina during youth, becomes more liquid over time and eventually pulls away from the retinal surface. While PVD itself is not a disease, it can cause sudden and sometimes alarming symptoms including floaters (dark spots or cobwebs in your vision), flashes of light, and a temporary decrease in vision clarity. For most people, PVD is a benign condition that requires monitoring but not active treatment, though the symptoms can significantly impact daily activities and quality of life, particularly in the first few weeks after onset.
            </p>
            <p>
              The primary cause of posterior vitreous detachment is aging, as the vitreous gel naturally liquefies and shrinks with time through a process called syneresis. However, several risk factors can accelerate or influence when PVD occurs. Nearsightedness (myopia) increases the risk of earlier PVD because the elongated shape of myopic eyes creates different mechanical forces on the vitreous. Eye trauma, inflammation, or previous eye surgery can also trigger PVD at younger ages. Other contributing factors include diabetes, which can affect the consistency of the vitreous, and certain genetic predispositions that influence collagen structure within the eye. Women may experience PVD slightly more often than men, and it frequently occurs in both eyes, though typically not simultaneously. While PVD is often a straightforward age-related change, approximately 10-15% of cases involve complications such as retinal tears or, more rarely, retinal detachment, which makes professional evaluation absolutely essential.
            </p>
            <p>
              Seeking professional eye care when experiencing PVD symptoms is critical because distinguishing between uncomplicated PVD and sight-threatening complications requires expert examination. The sudden onset of floaters and flashes that characterize PVD can also signal a retinal tear or detachment, conditions that require immediate intervention to prevent permanent vision loss. At Spark Eye Care in Kyle, we perform comprehensive dilated eye examinations to thoroughly assess the vitreous and retina, identifying any tears or areas of concern that need treatment. Our board-certified team understands the anxiety that sudden vision changes can cause, and we provide same-day urgent appointments for new PVD symptoms. We use advanced diagnostic technology to visualize the entire retinal surface and monitor your condition over time, ensuring that any complications are caught early. Proper management of PVD includes patient education about warning signs, appropriate follow-up scheduling, and clear guidance about when to seek emergency care, giving you the confidence and knowledge to protect your vision during this transition.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Signs & Symptoms of Posterior Vitreous Detachment
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Visual Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Sudden Floaters:</strong>
                    <span className="text-[var(--color-muted)]"> New dark spots, cobwebs, or squiggly lines that move across your field of vision, often appearing suddenly and in large numbers.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Flashes of Light:</strong>
                    <span className="text-[var(--color-muted)]"> Brief streaks or arcs of light, particularly in peripheral vision or when moving your eyes in darkness, caused by vitreous traction on the retina.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Cobweb Effect:</strong>
                    <span className="text-[var(--color-muted)]"> A large, central floater that resembles a spider web or tangled hair floating in your vision, especially noticeable against bright backgrounds.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Ring of Floaters:</strong>
                    <span className="text-[var(--color-muted)]"> A circular or ring-shaped floater caused by the Weiss ring, where the vitreous separated from the optic nerve head.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Blurred Vision:</strong>
                    <span className="text-[var(--color-muted)]"> Temporary decrease in vision clarity or haziness, particularly if dense floaters are blocking central vision or if complications develop.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Shadow or Curtain:</strong>
                    <span className="text-[var(--color-muted)]"> A dark shadow or curtain moving across your vision, which may indicate a more serious complication like retinal detachment requiring immediate attention.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Increased Symptoms with Eye Movement:</strong>
                    <span className="text-[var(--color-muted)]"> Floaters that become more noticeable when you move your eyes quickly, as the vitreous gel shifts within the eye.</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">Impact & Functional Symptoms</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Reading Difficulty:</strong>
                    <span className="text-[var(--color-muted)]"> Trouble focusing on text or small objects because floaters interfere with central vision, making reading frustrating and tiring.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Driving Concerns:</strong>
                    <span className="text-[var(--color-muted)]"> Distraction or difficulty seeing clearly while driving, especially in bright conditions when floaters are most visible against the sky or road.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Anxiety About Vision Loss:</strong>
                    <span className="text-[var(--color-muted)]"> Worry or fear that the sudden symptoms indicate serious eye disease or impending blindness, which is a common and understandable response.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Computer Work Challenges:</strong>
                    <span className="text-[var(--color-muted)]"> Increased awareness of floaters when looking at bright computer screens or white backgrounds, disrupting work productivity.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Outdoor Activity Disruption:</strong>
                    <span className="text-[var(--color-muted)]"> Floaters appearing more prominent in bright sunlight, affecting enjoyment of outdoor activities and sports.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Sleep Disturbances:</strong>
                    <span className="text-[var(--color-muted)]"> Difficulty falling asleep due to worry about eye symptoms or noticing flashes in darkness when trying to rest.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Constant Visual Awareness:</strong>
                    <span className="text-[var(--color-muted)]"> Persistent attention to floaters and eye sensations, making it difficult to concentrate on tasks or enjoy activities without distraction.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">One-Eye Occurrence:</strong>
                    <span className="text-[var(--color-muted)]"> Symptoms typically affecting one eye initially, though the second eye often develops PVD within months to years.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early evaluation leads to better outcomes and peace of mind, protecting your vision from potential complications.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-16 text-center">
            How We Treat Posterior Vitreous Detachment
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We begin with a thorough dilated eye examination to visualize the entire retina and vitreous, identifying any tears or detachments. Advanced imaging technology allows us to document your condition precisely and establish a baseline for monitoring. Your examination includes detailed questioning about symptom onset, visual acuity testing, and intraocular pressure measurement to rule out other conditions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Personalized Management Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                For uncomplicated PVD, we provide reassurance, education about warning signs, and a follow-up schedule tailored to your risk profile. If retinal tears are detected, we discuss laser photocoagulation or cryotherapy to seal the tear and prevent detachment. Each plan considers your specific anatomy, symptom severity, and lifestyle needs, ensuring you understand what to expect and when to seek urgent care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-3">Ongoing Monitoring</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We schedule follow-up examinations based on your individual risk, typically at two weeks, six weeks, and three months after initial PVD symptoms. These visits allow us to monitor for delayed complications and ensure your retina remains healthy. As symptoms stabilize and your brain adapts to floaters, visits become less frequent, though we remain available for urgent concerns and provide clear instructions about warning signs that require immediate attention.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              Our treatment approach is grounded in evidence-based ophthalmology and current clinical guidelines from the American Academy of Ophthalmology. For uncomplicated PVD, observation is the standard of care, as symptoms typically improve over weeks to months as the brain adapts to floaters and the vitreous settles. When retinal tears are identified—occurring in approximately 10-15% of acute PVD cases—we employ laser photocoagulation, which uses focused laser energy to create small burns around the tear, forming scar tissue that bonds the retina to underlying tissue and prevents fluid from seeping under the retina. This outpatient procedure has a high success rate in preventing retinal detachment. In rare cases of persistent, vision-limiting floaters, we can discuss referral for vitrectomy surgery, though this is reserved for severe cases due to surgical risks. Throughout your care, we emphasize patient education, helping you distinguish normal PVD progression from warning signs of complications like retinal detachment, which requires emergency surgical intervention.
          </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Why Choose Spark Eye Care for Posterior Vitreous Detachment Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)]">
                Our team includes board-certified ophthalmologists with specialized training in retinal conditions and years of experience managing PVD and its complications.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)]">
                We recognize that each patient's experience with PVD is unique, tailoring our monitoring schedule, education, and interventions to your specific situation and concerns.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Telehealth Available</h3>
              <p className="text-[var(--color-muted)]">
                For follow-up consultations and symptom discussions, we offer convenient telehealth appointments, making ongoing monitoring accessible from your home.
              </p>
            </div>
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Same-Day Urgent Appointments</h3>
              <p className="text-[var(--color-muted)]">
                We understand that new PVD symptoms require prompt evaluation, and we prioritize same-day or next-day appointments for acute floaters and flashes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Your Treatment Journey
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">01</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Initial Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your first visit includes a comprehensive dilated eye examination where we carefully assess your retina, vitreous, and overall eye health. This exam takes about 60-90 minutes and allows us to determine whether your PVD is uncomplicated or if there are retinal tears requiring treatment. We'll discuss your symptoms in detail, explain what's happening inside your eye, and provide clear guidance about warning signs to watch for. Most patients leave with reassurance and a specific follow-up plan tailored to their risk level.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">02</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Early Monitoring (Weeks 2-6)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  During this critical period, we schedule one or two follow-up examinations to monitor for delayed retinal tears, which can develop in the weeks following initial PVD. If a tear is found, we can perform laser treatment promptly to prevent detachment. For uncomplicated cases, you'll notice that floaters begin to settle and become less bothersome as your brain adapts. We remain available for urgent concerns and encourage you to contact us immediately if symptoms worsen or you notice new flashes, increased floaters, or vision loss.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">03</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  By two to three months after PVD onset, the risk of complications has significantly decreased, and most patients have adapted well to residual floaters. We perform a final dilated examination to confirm retinal stability and address any remaining concerns. At this point, many patients report that floaters are much less noticeable or have moved out of their central vision. We discuss long-term expectations and provide guidance about routine eye care going forward, emphasizing the importance of monitoring the fellow eye, which often develops PVD within one to two years.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-['Cormorant'] text-6xl font-light text-[var(--color-primary)]">04</div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-2">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After the acute phase resolves, you'll return to routine annual eye examinations unless new symptoms develop. We educate you about lifetime warning signs and the importance of prompt evaluation if you experience sudden changes in the fellow eye or any new visual symptoms. Most patients with uncomplicated PVD enjoy stable vision and normal eye health long-term, though some residual floaters may persist. We remain your partner in eye health, ready to address any concerns and monitor for age-related eye conditions that may develop in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions About Posterior Vitreous Detachment
          </h2>
          <div className="space-y-4">
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                How long does it take for posterior vitreous detachment symptoms to improve?
                <svg className="w-5 h-5 text-[var(--color-muted)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most patients notice significant improvement in floaters within 2-6 months as the vitreous settles and the brain adapts to the visual changes. Flashes typically resolve within weeks as the vitreous completes its separation from the retina. However, some floaters may persist indefinitely, though they usually become less noticeable over time. The adaptation process varies by individual—some patients adjust quickly while others may remain aware of floaters for a year or more. The key is that symptoms generally become less bothersome and interfere less with daily activities as time passes.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Is there medication or eye drops that can treat PVD?
                <svg className="w-5 h-5 text-[var(--color-muted)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Unfortunately, there are no proven medications or eye drops that can reverse PVD or dissolve floaters. PVD is a mechanical process involving the vitreous gel separating from the retina, and this cannot be undone with medication. Various supplements and treatments have been marketed for floaters, but none have strong scientific evidence supporting their effectiveness. The mainstay of treatment is observation and allowing time for natural adaptation. In severe cases where floaters significantly impact quality of life, surgical vitrectomy can be considered, but this carries risks and is reserved for exceptional circumstances.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Does insurance cover treatment for posterior vitreous detachment?
                <svg className="w-5 h-5 text-[var(--color-muted)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, medical insurance typically covers the evaluation and monitoring of PVD, as it is a medical eye condition that requires professional assessment to rule out sight-threatening complications. Dilated eye examinations for acute floaters and flashes are considered medically necessary and are covered by most insurance plans, including Medicare. If laser treatment for a retinal tear is needed, this is also covered as a necessary procedure to prevent retinal detachment. We work with most major insurance carriers and will verify your coverage before your appointment. Our billing team can provide estimates and answer questions about your specific benefits and any out-of-pocket costs.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                What are the warning signs that my PVD has become more serious?
                <svg className="w-5 h-5 text-[var(--color-muted)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Seek immediate eye care if you experience a sudden increase in floaters, new or persistent flashes of light, a shadow or curtain moving across your vision, or decreased vision in the affected eye. These symptoms may indicate a retinal tear or detachment, which requires urgent treatment to prevent permanent vision loss. Also contact us if you notice a large, sudden decrease in vision, eye pain, or redness. While most PVD cases remain uncomplicated, these warning signs indicate potential complications that need same-day evaluation. We provide clear instructions about these symptoms at your initial visit and are available for urgent concerns during business hours, with guidance for after-hours emergencies.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Can I use telehealth for posterior vitreous detachment follow-up?
                <svg className="w-5 h-5 text-[var(--color-muted)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Initial evaluation of new PVD symptoms requires an in-person dilated examination so we can directly visualize your retina and rule out tears or detachment. However, once we've established your diagnosis and confirmed retinal stability, certain follow-up visits can be conducted via telehealth, particularly if you're doing well and simply need reassurance or symptom discussion. Telehealth works well for education, answering questions about symptoms, and determining whether new concerns require urgent in-person evaluation. We'll guide you on which appointments can be virtual versus those requiring in-office examination, balancing convenience with the need for thorough monitoring.
              </div>
            </details>
            <details className="group border border-[var(--color-border)] rounded-lg">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex justify-between items-center">
                Will posterior vitreous detachment happen in my other eye?
                <svg className="w-5 h-5 text-[var(--color-muted)] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, if you've experienced PVD in one eye, there's a very high likelihood it will occur in your fellow eye, typically within one to two years. The aging changes that caused PVD in the first eye are usually present in both eyes, though the timing of vitreous separation varies. When PVD begins in your second eye, you'll likely recognize the symptoms immediately, which can be reassuring since you'll know what to expect. However, it's still essential to have the second eye examined promptly, as each PVD episode carries independent risk for complications. We'll monitor both eyes carefully and ensure you're prepared for symptoms in the fellow eye, providing expedited appointments when needed.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Conditions Section */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-['Cormorant'] text-3xl md:text-4xl text-[var(--color-ink)] mb-8 text-center">
            Related Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/posterior-vitreous-detachment" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Retinal Detachment</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Emergency treatment for retinal separation that can follow PVD, requiring immediate intervention to preserve vision.
              </p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </a>
            <a href="/conditions/posterior-vitreous-detachment" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Retinal Tears</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Laser treatment for retinal breaks that can occur during vitreous detachment, preventing progression to detachment.
              </p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </a>
            <a href="/conditions/floaters-and-flashes" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px]">
              <h4 className="text-xl font-semibold text-[var(--color-ink)] mb-2">Eye Floaters</h4>
              <p className="text-[var(--color-muted)] mb-4">
                Management and evaluation of persistent floaters, including assessment for underlying causes like PVD or vitreous hemorrhage.
              </p>
              <span className="text-[var(--color-primary)] font-medium">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-4">
            Get Help for Posterior Vitreous Detachment Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You don't have to face posterior vitreous detachment alone. Our experienced team in Kyle is ready to help you protect your vision and find peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-cream)] transition-colors"
            >
              Schedule an Evaluation
            </a>
            <a
              href="/conditions"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              View All Conditions
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}