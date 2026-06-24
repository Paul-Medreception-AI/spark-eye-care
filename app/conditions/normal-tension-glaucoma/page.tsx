import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Normal-Tension Glaucoma Treatment in Kyle | Spark Eye Care',
  description: 'Expert normal-tension glaucoma treatment in Kyle. Board-certified care for NTG with advanced diagnostics, personalized treatment plans, and ongoing monitoring. Schedule your evaluation today.',
  keywords: 'normal-tension glaucoma treatment Kyle, NTG treatment Kyle, low-tension glaucoma Kyle, glaucoma specialist Kyle, eye pressure treatment Kyle',
  openGraph: {
    title: 'Normal-Tension Glaucoma Treatment in Kyle | Spark Eye Care',
    description: 'Expert normal-tension glaucoma treatment in Kyle. Board-certified care for NTG with advanced diagnostics, personalized treatment plans, and ongoing monitoring.',
    url: 'https://www.sparkeyetx.com/conditions/normal-tension-glaucoma',
    siteName: 'Spark Eye Care',
    locale: 'en_US',
    type: 'website',
  },
}

export default function NormalTensionGlaucomaPage() {
  return (
    <main className="min-h-screen">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/conditions" className="hover:underline">Conditions</a>
            <span className="mx-2">›</span>
            <span>Normal-Tension Glaucoma</span>
          </nav>
          
          <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 leading-tight" style={{fontFamily: 'Cormorant, serif'}}>
            Normal-Tension Glaucoma Treatment in Kyle
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl opacity-95">
            Normal-tension glaucoma is a unique form of glaucoma where optic nerve damage occurs despite normal eye pressure levels. At Spark Eye Care, we provide advanced diagnostic testing and personalized treatment strategies to preserve your vision and protect your optic nerve health for the long term.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[var(--color-ink)]" style={{fontFamily: 'Cormorant, serif'}}>
            Understanding Normal-Tension Glaucoma
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Normal-tension glaucoma (NTG), also called low-tension or normal-pressure glaucoma, is a puzzling condition where the optic nerve sustains damage characteristic of glaucoma despite intraocular pressure (IOP) remaining within the statistically normal range of 10-21 mmHg. This condition accounts for approximately one-third of all open-angle glaucoma cases in the United States and is particularly prevalent among individuals of Japanese descent and those with a family history of NTG. Unlike traditional glaucoma where elevated eye pressure is the primary culprit, normal-tension glaucoma suggests that other factors—such as poor blood flow to the optic nerve, autoimmune components, or structural weakness of the optic nerve head—play critical roles in disease progression. The impact on daily life can be profound: NTG typically causes gradual peripheral vision loss that goes unnoticed until significant damage has occurred, potentially affecting driving safety, spatial awareness, and independence if left untreated.
            </p>
            
            <p>
              The exact causes of normal-tension glaucoma remain an active area of research, but several risk factors have been consistently identified. Vascular insufficiency—reduced blood flow to the optic nerve—appears to be a major contributor, which is why conditions like migraines, Raynaud's phenomenon, sleep apnea, and cardiovascular disease are associated with higher NTG risk. Age is another significant factor, with prevalence increasing after age 60. Other risk factors include family history of any glaucoma type, Japanese ancestry, female gender, myopia (nearsightedness), history of blood loss or shock, and autoimmune conditions. Notably, systemic hypotension (low blood pressure) and nocturnal blood pressure dips may compromise optic nerve perfusion, making blood pressure management a critical consideration in NTG treatment. Some patients also have a thinner central corneal thickness, which can affect pressure readings and disease susceptibility.
            </p>
            
            <p>
              Professional evaluation and treatment are essential because normal-tension glaucoma is irreversible and progressive—any vision lost cannot be recovered, making early detection and intervention paramount. The challenge with NTG is that standard glaucoma screening often focuses on elevated eye pressure, potentially missing this condition entirely. Comprehensive eye examinations with dilated fundus examination, optical coherence tomography (OCT) of the optic nerve and retinal nerve fiber layer, visual field testing, and gonioscopy are necessary to diagnose NTG and differentiate it from other optic neuropathies. At Spark Eye Care, we understand that managing normal-tension glaucoma requires a nuanced approach that goes beyond simply lowering eye pressure—it involves comprehensive cardiovascular assessment, consideration of blood pressure patterns, neuroprotective strategies, and close monitoring of optic nerve structure and visual function over time. With appropriate treatment and vigilant follow-up, we can significantly slow disease progression and preserve functional vision throughout your lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant, serif'}}>
            Signs & Symptoms of Normal-Tension Glaucoma
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Visual Changes</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Peripheral vision loss</strong>
                    <p className="text-[var(--color-muted)]">Gradual narrowing of side vision that typically goes unnoticed in early stages, often affecting both eyes asymmetrically.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Tunnel vision</strong>
                    <p className="text-[var(--color-muted)]">In advanced stages, vision may become restricted to a small central area, like looking through a narrow tube.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty with night vision</strong>
                    <p className="text-[var(--color-muted)]">Increased challenges seeing in low-light conditions or adjusting when moving from bright to dark environments.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Blind spots in vision</strong>
                    <p className="text-[var(--color-muted)]">Patchy areas of missing vision that may be detected during visual field testing but not consciously perceived initially.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Reduced contrast sensitivity</strong>
                    <p className="text-[var(--color-muted)]">Decreased ability to distinguish objects from their background, especially in dim lighting or foggy conditions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">No eye pain or redness</strong>
                    <p className="text-[var(--color-muted)]">Unlike acute glaucoma, NTG is typically painless with no external signs of eye problems, making it a "silent" vision thief.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)]">Functional & Behavioral Signs</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Bumping into objects</strong>
                    <p className="text-[var(--color-muted)]">Frequently colliding with door frames, furniture, or people approaching from the sides due to peripheral vision loss.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Difficulty driving</strong>
                    <p className="text-[var(--color-muted)]">Challenges with lane changes, noticing cars in adjacent lanes, or navigating intersections safely.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Trouble navigating stairs</strong>
                    <p className="text-[var(--color-muted)]">Increased difficulty judging steps or curbs, particularly when descending stairs or stepping off curbs.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Reading difficulties</strong>
                    <p className="text-[var(--color-muted)]">Losing your place while reading or needing to move your head more to see the entire line of text.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Cardiovascular risk factors</strong>
                    <p className="text-[var(--color-muted)]">History of migraines, low blood pressure, sleep apnea, Raynaud's syndrome, or cardiovascular disease.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Family history of glaucoma</strong>
                    <p className="text-[var(--color-muted)]">Having blood relatives with any type of glaucoma increases your risk of developing normal-tension glaucoma.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="text-[var(--color-ink)]">Abnormal optic nerve appearance</strong>
                    <p className="text-[var(--color-muted)]">Optic nerve cupping, notching, or hemorrhages detected during routine eye examination despite normal eye pressure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-[var(--color-ink)] max-w-3xl mx-auto">
            If you recognize these signs, help is available. Early treatment leads to better outcomes. Normal-tension glaucoma can be managed effectively when detected early, preventing further vision loss and preserving your quality of life.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[var(--color-light)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant, serif'}}>
            How We Treat Normal-Tension Glaucoma
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Comprehensive Assessment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your evaluation begins with advanced diagnostic imaging including optical coherence tomography (OCT) to assess optic nerve structure and retinal nerve fiber layer thickness. We perform meticulous visual field testing to map any existing vision loss and conduct diurnal tonometry to measure eye pressure fluctuations throughout the day. We also review your cardiovascular health, blood pressure patterns, and medications to identify factors that may compromise optic nerve blood flow.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Personalized Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Based on your assessment findings, we develop an individualized treatment strategy focused on lowering eye pressure below current levels (typically targeting a 30% reduction) and optimizing optic nerve perfusion. Your plan may include prescription eye drops, systemic medication adjustments in coordination with your primary care physician, nutritional supplementation, and lifestyle modifications. We consider your specific risk factors and disease progression rate to tailor the most effective approach.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-primary)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--color-ink)]">Ongoing Monitoring & Adjustment</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Normal-tension glaucoma requires vigilant long-term monitoring to ensure treatment effectiveness and detect any progression early. We schedule regular follow-up appointments with repeated OCT imaging and visual field testing to track structural and functional changes over time. If disease progression is detected despite treatment, we adjust your medication regimen, consider advanced options like selective laser trabeculoplasty, or refer for surgical intervention when appropriate. Our goal is stable disease and preserved functional vision.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] mb-6">
              Our treatment approach for normal-tension glaucoma is grounded in current evidence-based guidelines and research. We primarily utilize topical medications including prostaglandin analogs (latanoprost, travoprost, bimatoprost), which are first-line agents that effectively lower intraocular pressure by increasing aqueous outflow. For patients requiring additional pressure reduction, we may add beta-blockers (timolol), alpha-agonists (brimonidine), or carbonic anhydrase inhibitors (dorzolamide, brinzolamide). Beyond pressure lowering, we emphasize neuroprotection strategies including optimizing systemic blood pressure to avoid nocturnal hypotension, addressing sleep apnea if present, and considering nutritional supplementation with omega-3 fatty acids and antioxidants that may support optic nerve health.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              For cases where medications are insufficient, we coordinate referrals for selective laser trabeculoplasty (SLT), a minimally invasive office-based procedure that enhances aqueous drainage and can reduce or eliminate the need for eye drops. When disease continues to progress despite maximum medical therapy, surgical options including trabeculectomy or minimally invasive glaucoma surgery (MIGS) may be necessary. We work collaboratively with experienced glaucoma surgeons to ensure seamless care coordination. Throughout your treatment journey, we remain committed to preserving your vision, maintaining your quality of life, and providing compassionate, expert care tailored to the unique challenges of normal-tension glaucoma.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant, serif'}}>
            Why Choose Spark Eye Care for Normal-Tension Glaucoma Treatment
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Board-Certified Expertise</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our team includes board-certified eye care professionals with specialized training in glaucoma diagnosis and management, ensuring you receive expert care based on the latest clinical research.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Personalized Care Approach</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We recognize that normal-tension glaucoma affects each patient differently, considering your cardiovascular health, lifestyle, and individual risk factors to create a truly customized treatment plan.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Telehealth Consultations</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer convenient telehealth appointments for follow-up consultations, medication reviews, and treatment adjustments, making ongoing glaucoma management more accessible.
              </p>
            </div>
            
            <div className="text-center animate-fade-up">
              <div className="bg-[var(--color-cream)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-ink)]">Advanced Diagnostic Technology</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We utilize state-of-the-art imaging including OCT and automated visual field testing to detect subtle changes in optic nerve structure and function, enabling early intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant, serif'}}>
            Your Treatment Journey
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-serif text-3xl" style={{fontFamily: 'Cormorant, serif'}}>
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">First Evaluation (Week 1)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your initial comprehensive evaluation includes detailed medical history review focusing on cardiovascular health and medications, complete eye examination with dilated fundus examination, optical coherence tomography (OCT) imaging of the optic nerve and retinal nerve fiber layer, automated visual field testing to map any existing vision loss, gonioscopy to examine the drainage angle, and multiple intraocular pressure measurements. We may also perform corneal pachymetry (thickness measurement) and discuss diurnal tonometry if needed. This thorough assessment establishes your baseline and confirms the diagnosis of normal-tension glaucoma versus other optic neuropathies.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-serif text-3xl" style={{fontFamily: 'Cormorant, serif'}}>
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Treatment Begins (Weeks 2-4)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  After confirming your diagnosis, we initiate treatment with topical medications—typically starting with a prostaglandin analog eye drop used once daily in the evening. We provide detailed instructions on proper administration technique and discuss potential side effects. You'll receive education about the importance of medication adherence and lifestyle modifications that may support optic nerve health, including cardiovascular exercise, blood pressure optimization, sleep apnea treatment if indicated, and nutritional considerations. We schedule a follow-up appointment in 3-4 weeks to assess your initial response to treatment and check for side effects.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-serif text-3xl" style={{fontFamily: 'Cormorant, serif'}}>
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Progress Review (Months 2-3)</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  At your follow-up appointments, we measure intraocular pressure to assess medication effectiveness, aiming for at least 30% reduction from baseline. We examine the optic nerve for any changes and review your experience with the medication, addressing any side effects or adherence challenges. If pressure reduction is inadequate, we may add a second medication or adjust your regimen. After 3-4 months of stable pressure control, we perform repeat OCT imaging and visual field testing to establish a new treated baseline and confirm stability. This comparison is crucial for detecting any subtle progression.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-serif text-3xl" style={{fontFamily: 'Cormorant, serif'}}>
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-[var(--color-ink)]">Long-Term Management</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Once your condition is stable, we typically schedule monitoring visits every 4-6 months, with comprehensive OCT and visual field testing performed annually or more frequently if progression is suspected. Normal-tension glaucoma is a chronic condition requiring lifelong management and surveillance. Most patients maintain stable vision with consistent medication use and regular monitoring. If disease progression is detected despite treatment, we promptly adjust your therapy, consider laser trabeculoplasty, or coordinate surgical referral. Our long-term goal is preserving your functional vision and quality of life throughout your lifetime.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg border-l-4 border-[var(--color-primary)]">
            <p className="text-[var(--color-ink)] leading-relaxed">
              <strong>Setting Realistic Expectations:</strong> Normal-tension glaucoma cannot be cured, and any vision already lost is permanent. However, with early detection and consistent treatment, the vast majority of patients do not progress to legal blindness. The key is compliance with medications, regular monitoring, and prompt treatment adjustments when needed. Your active participation in your care—including reliable medication use and attending scheduled appointments—is essential for the best possible outcome.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant, serif'}}>
            Frequently Asked Questions About Normal-Tension Glaucoma
          </h2>
          
          <div className="space-y-6">
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span className="text-xl font-semibold text-[var(--color-ink)]">How is normal-tension glaucoma different from regular glaucoma?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The primary difference is that normal-tension glaucoma (NTG) causes optic nerve damage and vision loss despite intraocular pressure remaining within the statistically normal range (10-21 mmHg). In typical primary open-angle glaucoma, elevated eye pressure is the primary risk factor and therapeutic target. With NTG, other factors—particularly reduced blood flow to the optic nerve—are believed to play a more significant role. This means treatment involves not only lowering pressure further below your "normal" baseline but also addressing vascular risk factors like blood pressure fluctuations, sleep apnea, and cardiovascular disease. The diagnostic process, treatment principles, and need for lifelong monitoring are otherwise similar between the two conditions.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span className="text-xl font-semibold text-[var(--color-ink)]">How long does treatment for normal-tension glaucoma take?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Normal-tension glaucoma is a chronic, lifelong condition that requires ongoing management rather than short-term treatment. Once diagnosed, you will need to use eye drop medications daily for the rest of your life (unless surgical intervention eliminates the need). Initial treatment adjustments typically occur over the first 2-3 months as we optimize your medication regimen and achieve target pressure reduction. After stabilization, you'll need monitoring appointments every 4-6 months with comprehensive imaging and visual field testing annually. While this may seem daunting, most patients find that NTG management becomes routine over time. The commitment to consistent treatment and regular monitoring is essential for preserving your vision long-term, and most patients maintain stable vision when they adhere to their treatment plan.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span className="text-xl font-semibold text-[var(--color-ink)]">Will I need to take medication for normal-tension glaucoma?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Yes, prescription eye drops are the cornerstone of normal-tension glaucoma treatment. Even though your eye pressure is technically "normal," research has shown that lowering pressure further—typically by 30% or more from baseline—significantly slows disease progression and preserves vision. Most patients start with one eye drop (usually a prostaglandin analog) used once daily. Some patients require multiple medications to achieve adequate pressure reduction. These medications work through different mechanisms to either decrease fluid production in the eye or increase drainage. In addition to eye drops, we may recommend addressing systemic factors: optimizing blood pressure management with your primary care physician, treating sleep apnea if present, and considering nutritional supplements. In cases where medications are insufficient or poorly tolerated, laser therapy or surgery may be options to reduce or eliminate the need for drops.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span className="text-xl font-semibold text-[var(--color-ink)]">Does insurance cover normal-tension glaucoma treatment?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Yes, glaucoma treatment is typically covered by most health insurance plans, including Medicare, because it is a medically necessary condition that can lead to permanent vision loss if untreated. Coverage generally includes comprehensive eye examinations, diagnostic testing (OCT, visual field testing), office visits for monitoring, and prescription medications (subject to your pharmacy benefit and formulary). However, medication copays can vary significantly depending on your insurance plan, and some newer brand-name drops may require prior authorization or have higher out-of-pocket costs compared to generic alternatives. Laser procedures and surgical treatments are also usually covered when medically indicated. We recommend contacting your insurance provider to understand your specific coverage, deductibles, and copayment responsibilities. Our office staff can provide documentation and assist with prior authorizations as needed to maximize your benefits.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span className="text-xl font-semibold text-[var(--color-ink)]">What happens if treatment isn't working for my normal-tension glaucoma?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  If our monitoring reveals disease progression despite medical treatment—evidenced by worsening optic nerve appearance, thinning retinal nerve fiber layer on OCT, or progressive visual field loss—we have several options to intensify treatment. First, we optimize your medication regimen by adding additional eye drops, switching to more potent medications, or ensuring perfect adherence (many patients inadvertently miss doses). We also reassess systemic factors like blood pressure control and sleep quality. If maximum tolerated medical therapy is insufficient, selective laser trabeculoplasty (SLT) is a minimally invasive office procedure that can enhance drainage and further lower pressure. For advanced cases or when conservative approaches fail, we coordinate referral to a glaucoma subspecialist for surgical options including trabeculectomy or minimally invasive glaucoma surgery (MIGS). The key is catching progression early through regular monitoring so we can intervene before significant additional vision loss occurs.
                </p>
              </div>
            </details>
            
            <details className="group border border-[var(--color-border)] rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-[var(--color-cream)] hover:bg-[var(--color-light)] transition-colors list-none flex items-center justify-between">
                <span className="text-xl font-semibold text-[var(--color-ink)]">Can I do telehealth appointments for normal-tension glaucoma treatment?</span>
                <svg className="w-6 h-6 text-[var(--color-primary)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="p-6 bg-white">
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Telehealth can be useful for certain aspects of normal-tension glaucoma management, but it cannot fully replace in-person care. Initial diagnosis requires comprehensive in-person examination with specialized imaging and testing that cannot be performed remotely. Similarly, your regular monitoring appointments—which include intraocular pressure measurement, optic nerve examination, OCT imaging, and visual field testing—must be conducted in person. However, telehealth appointments can be valuable for medication reviews, discussing side effects or adherence challenges, addressing general questions about your condition, reviewing recent test results, and coordinating care with your other physicians. For stable patients on consistent treatment regimens, we may occasionally schedule telehealth visits between in-person monitoring appointments to check in on your progress and adjust medications if needed. This hybrid approach maximizes convenience while ensuring you receive the thorough clinical assessment essential for detecting disease progression early.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-serif text-3xl md:text-4xl mb-8 text-[var(--color-ink)] text-center" style={{fontFamily: 'Cormorant, serif'}}>
            Related Conditions We Treat
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/conditions/glaucoma" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Primary Open-Angle Glaucoma</h4>
                  <p className="text-[var(--color-muted)] leading-relaxed">The most common form of glaucoma, characterized by gradual optic nerve damage typically associated with elevated intraocular pressure.</p>
                </div>
              </div>
            </a>
            
            <a href="/conditions/macular-degeneration" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Age-Related Macular Degeneration</h4>
                  <p className="text-[var(--color-muted)] leading-relaxed">Progressive deterioration of the macula causing central vision loss, requiring monitoring and treatment similar to glaucoma management.</p>
                </div>
              </div>
            </a>
            
            <a href="/conditions/diabetic-retinopathy" className="block bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Diabetic Retinopathy</h4>
                  <p className="text-[var(--color-muted)] leading-relaxed">Diabetes-related damage to retinal blood vessels that requires careful monitoring and management to prevent vision loss.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6" style={{fontFamily: 'Cormorant, serif'}}>
            Get Help for Normal-Tension Glaucoma Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
            You don't have to face normal-tension glaucoma alone. Our team is ready to help you preserve your vision with expert diagnosis, personalized treatment, and compassionate ongoing care.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-md font-semibold text-lg hover:bg-[var(--color-cream)] transition-colors">
              Schedule Your Evaluation
            </a>
            <a href="/conditions" className="inline-block border-2 border-white text-white px-10 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-colors">
              View All Conditions
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}