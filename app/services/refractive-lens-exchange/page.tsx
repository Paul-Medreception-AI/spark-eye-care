import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Refractive Lens Exchange | Spark Eye Care',
  description: 'Advanced refractive lens exchange surgery to correct vision and reduce dependence on glasses. Expert eye surgeons serving the community with personalized lens replacement solutions.',
}

export default function RefractiveLensExchangePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/services" className="hover:underline">Services</a>
            <span className="mx-2">›</span>
            <span>Refractive Lens Exchange</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light mb-6 leading-tight">
            Refractive Lens Exchange in sparkeyetx
          </h1>
          <p className="text-xl opacity-95 leading-relaxed max-w-3xl">
            Refractive lens exchange offers a permanent solution for vision correction by replacing your eye's natural lens with an advanced artificial lens. This sophisticated procedure not only eliminates nearsightedness, farsightedness, and astigmatism, but also prevents future cataract development while providing clear vision at multiple distances.
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2748705.jpeg"
                alt="Refractive lens exchange consultation"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-8">
            What is Refractive Lens Exchange?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Refractive lens exchange (RLE), also known as clear lens extraction or lens replacement surgery, is an advanced vision correction procedure that involves removing your eye's natural lens and replacing it with a premium artificial intraocular lens (IOL). While the surgical technique is similar to cataract surgery, RLE is performed on patients who have not yet developed cataracts but want to achieve freedom from glasses or contact lenses. This procedure is particularly beneficial for individuals over 40 who are experiencing presbyopia or have high degrees of refractive error that may not be suitable for LASIK or other corneal-based procedures.
            </p>
            
            <p>
              The natural lens of your eye sits behind the iris and pupil, and its primary function is to focus light onto the retina. As we age, this lens becomes less flexible, leading to presbyopia—the inability to focus on near objects. For some individuals, the natural lens also contributes to significant nearsightedness, farsightedness, or astigmatism. By replacing this natural lens with an advanced artificial lens, we can correct all of these refractive errors simultaneously while also preventing the future development of cataracts, since the artificial lens cannot become cloudy like the natural lens does with age.
            </p>
            
            <p>
              Modern premium intraocular lenses offer remarkable visual outcomes that were not possible with older technology. Multifocal and extended depth of focus (EDOF) lenses provide clear vision at near, intermediate, and far distances, often eliminating the need for reading glasses or bifocals. Toric IOLs correct astigmatism, while accommodating lenses attempt to mimic the natural focusing ability of the young eye. At Spark Eye Care, our surgeons carefully evaluate your visual needs, lifestyle requirements, and eye health to recommend the most appropriate lens technology for your unique situation, ensuring optimal visual outcomes that align with your daily activities and personal goals.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6">
              You May Be a Candidate for Refractive Lens Exchange If You:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Are over 40 years old and experiencing presbyopia or difficulty reading without glasses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Have high degrees of nearsightedness, farsightedness, or astigmatism not suitable for LASIK</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Want to reduce or eliminate dependence on glasses or contact lenses for daily activities</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Have thin corneas or other conditions that make corneal refractive surgery unsuitable</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Are developing early lens changes but not yet ready for traditional cataract surgery</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--color-ink)]">Desire clear vision at multiple distances without the hassle of progressive lenses or bifocals</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Treat It Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-12 text-center">
            Our Approach to Refractive Lens Exchange
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Comprehensive Evaluation
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our evaluation begins with advanced diagnostic testing including corneal topography, optical biometry, and wavefront analysis to measure your eye's unique characteristics. We assess your current prescription, corneal health, retinal condition, and overall eye anatomy. Detailed measurements determine the optimal IOL power and type for your visual needs, lifestyle, and occupational requirements.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-all delay-75">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Customized Lens Selection
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                We offer a comprehensive range of premium intraocular lenses including multifocal, extended depth of focus (EDOF), toric, and accommodating options. Your surgeon discusses the benefits and considerations of each lens technology, helping you understand how different options affect near, intermediate, and distance vision. Together, we select the lens that best matches your visual goals and daily activities.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up transition-all delay-150">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Advanced Surgical Care
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The procedure is performed using state-of-the-art femtosecond laser technology and advanced phacoemulsification techniques. Through a tiny incision, we remove your natural lens and implant the premium IOL with exceptional precision. Most patients experience minimal discomfort and can return home the same day. Our comprehensive post-operative protocol ensures optimal healing and visual outcomes.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-[var(--color-light)] rounded-xl p-10">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">
              Advanced Technology and Techniques
            </h3>
            <div className="space-y-4 text-[var(--color-ink)] leading-relaxed">
              <p>
                At Spark Eye Care, we utilize the latest advances in refractive lens exchange technology to ensure the safest procedures and best visual outcomes. Our femtosecond laser-assisted cataract surgery platform enables blade-free incisions with unprecedented precision, creating perfectly sized and positioned openings for lens insertion. This technology also allows for precise capsulotomy creation and lens fragmentation, reducing ultrasound energy needed during the procedure and promoting faster healing.
              </p>
              <p>
                Advanced optical biometry and intraoperative aberrometry help us achieve exceptional IOL power accuracy, minimizing residual refractive error and maximizing your chances of spectacle independence. We employ advanced surgical techniques including microincisional surgery, resulting in faster visual recovery, reduced induced astigmatism, and excellent refractive outcomes. Our commitment to staying at the forefront of ophthalmic technology ensures you receive the highest quality care available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-8">
              What to Expect: Your RLE Journey
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                  Initial Consultation
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your comprehensive eye examination includes detailed measurements, corneal mapping, and retinal evaluation. We discuss your visual goals, lifestyle needs, and expectations. You'll learn about different premium IOL options and receive personalized recommendations. Most consultations last 60-90 minutes to ensure all your questions are thoroughly answered.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                  Surgery Day
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  The procedure typically takes 15-20 minutes per eye. You'll receive numbing eye drops and mild sedation for comfort. Most patients report feeling little to no discomfort during surgery. After a brief recovery period, you'll go home the same day with protective eyewear and detailed post-operative instructions. Most patients notice improved vision within hours, though it continues to stabilize over the following days.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                  First Week After Surgery
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  You'll have follow-up appointments the day after surgery and again within the first week. Vision typically improves rapidly, with many patients seeing well enough to resume most normal activities within a few days. You'll use prescribed eye drops to prevent infection and reduce inflammation. Most patients experience minimal discomfort, with any irritation resolving within the first few days.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                  Weeks 2-4: Visual Adaptation
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Your vision continues to sharpen as your eye heals and adapts to the new lens. With multifocal or EDOF lenses, your brain begins adapting to the expanded range of vision. Most patients return to work and normal activities within a week, though strenuous exercise and swimming should be avoided for 2-3 weeks. Follow-up visits monitor healing progress and address any concerns.
                </p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                  Long-term Results
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Full visual stabilization typically occurs within 1-3 months. The artificial lens is permanent and will never develop cataracts. Most patients achieve significant spectacle independence for daily activities, though reading glasses may occasionally be helpful for extended near work in certain lighting conditions. Annual comprehensive eye exams ensure continued eye health. Patient satisfaction rates with modern premium IOLs are exceptionally high, with most patients reporting life-changing improvements in quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-12">
            Common Questions About Refractive Lens Exchange
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                How does refractive lens exchange differ from cataract surgery?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  The surgical techniques used in refractive lens exchange and cataract surgery are essentially identical—both involve removing the eye's natural lens and replacing it with an artificial intraocular lens. The primary difference is the indication: cataract surgery is performed when the natural lens has become cloudy due to cataract formation, affecting vision quality, while RLE is performed on a clear lens primarily to correct refractive error and achieve spectacle independence. RLE is typically considered an elective, refractive procedure, whereas cataract surgery is often covered by insurance when cataracts impair functional vision. Because RLE is performed before cataracts develop, it also serves as a preventive measure—patients who undergo RLE will never develop cataracts in the future since the natural lens has been replaced with an artificial lens that cannot become cloudy.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                What are the different types of intraocular lenses available?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Modern premium intraocular lenses offer various options to meet different visual needs. Monofocal IOLs provide excellent vision at one distance, typically optimized for distance vision, though near vision glasses would still be needed for reading. Multifocal IOLs have multiple focal points that provide clear vision at near, intermediate, and far distances, often eliminating the need for glasses entirely. Extended depth of focus (EDOF) lenses provide a continuous range of vision from distance through intermediate with reduced halos and glare compared to traditional multifocal designs. Toric IOLs correct astigmatism in addition to nearsightedness or farsightedness. Accommodating lenses attempt to mimic the natural eye's ability to change focus. During your consultation, we'll discuss your lifestyle, visual demands, occupation, and hobbies to recommend the lens technology that best matches your needs and provides the optimal balance of visual quality and spectacle independence.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Is refractive lens exchange safe, and what are the risks?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Refractive lens exchange is one of the most commonly performed and safest surgical procedures in medicine, with success rates exceeding 98%. However, as with any surgery, there are potential risks that should be understood. The most serious but rare complications include infection (endophthalmitis), retinal detachment, and elevated intraocular pressure. More common but typically manageable issues include posterior capsule opacification (which can be easily treated with a quick laser procedure), residual refractive error requiring enhancement, and visual phenomena such as halos or glare, particularly with multifocal lenses. Our experienced surgeons utilize the latest technology and surgical techniques to minimize these risks. We conduct thorough pre-operative screening to identify any factors that might increase surgical risk, provide detailed informed consent discussions, and maintain rigorous sterility protocols. Most complications, when they do occur, can be successfully managed with appropriate treatment.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                How long do the results of refractive lens exchange last?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  The results of refractive lens exchange are permanent. Unlike LASIK or PRK, which reshape the cornea but don't prevent age-related changes in the natural lens, RLE replaces your natural lens with an artificial lens that will never develop cataracts and won't change over time. The intraocular lens is designed to last a lifetime and doesn't degrade or lose clarity. Once implanted, the IOL becomes a permanent part of your eye. While your vision should remain stable long-term, it's important to understand that RLE doesn't prevent other age-related eye conditions such as glaucoma, macular degeneration, or diabetic retinopathy. Some patients may experience posterior capsule opacification months or years after surgery, where the membrane behind the IOL becomes cloudy, but this is easily corrected with a simple, painless YAG laser procedure performed in the office. Regular comprehensive eye examinations remain important to monitor overall eye health and detect any other conditions early.
                </p>
              </div>
            </details>

            <details className="bg-white rounded-lg overflow-hidden group">
              <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] text-lg list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-colors">
                Am I too young or too old for refractive lens exchange?
                <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                <p>
                  While there's no absolute age cutoff for refractive lens exchange, the procedure is typically most appropriate for patients over 45-50 years old who are experiencing presbyopia or have high refractive errors. At this age, the natural lens has lost most of its accommodative ability, making lens replacement a logical solution for both distance correction and near vision. Younger patients are generally better candidates for corneal-based procedures like LASIK or PRK, since their natural lens still has some accommodative function. However, younger patients with extremely high prescriptions not suitable for corneal surgery may benefit from phakic IOL implantation (keeping the natural lens while adding an additional lens) rather than RLE. On the other end of the spectrum, there's no upper age limit for RLE as long as the eye is otherwise healthy. Many patients in their 70s, 80s, and beyond successfully undergo lens replacement surgery. The key factors are overall eye health, absence of conditions that would compromise surgical outcomes, and realistic expectations about visual results. A comprehensive evaluation helps determine whether RLE is appropriate for your specific age and circumstances.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-10 text-center">
            Related Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/services/cataract-surgery" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Cataract Surgery
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Advanced cataract removal with premium lens implants to restore clear, vibrant vision and reduce dependence on glasses.
              </p>
            </a>

            <a href="/services/laser-eye-surgery" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                LASIK Surgery
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Precision laser vision correction to eliminate nearsightedness, farsightedness, and astigmatism for younger patients.
              </p>
            </a>

            <a href="/services/diabetic-eye-exams" className="group bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="mb-4">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                Comprehensive Eye Exams
              </h4>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Thorough eye health evaluations and vision assessments to determine candidacy for refractive procedures and monitor eye health.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-6">
            Ready to Experience Visual Freedom with Refractive Lens Exchange?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Discover if refractive lens exchange is right for you. Schedule your comprehensive consultation today.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-lg font-semibold hover:bg-[var(--color-cream)] transition-colors text-lg"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}