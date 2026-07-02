import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Spark Eye Care | Common Questions About Eye Exams & Surgery',
  description: 'Answers to common questions about cataract surgery, LASIK, insurance, appointments, and what to expect at Spark Eye Care in Kyle, TX.',
  alternates: { canonical: '/faq' },
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="w-full lg:w-3/5">
          <div className="text-sm mb-4 text-[var(--color-light)]">
            <a href="/" className="hover:underline">Home</a> › FAQ
          </div>
          <h1 className="font-serif text-5xl font-light mb-6" style={{fontFamily: 'Cormorant'}}>
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[var(--color-light)] max-w-2xl mx-auto">
            Everything you need to know about our practice and services
          </p>
            </div>
            <div className="relative w-full max-w-md lg:w-2/5 lg:max-w-none h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/AdobeStock_94313718.jpeg"
                alt="Close-up of healthy blue eye"
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

      {/* FAQ Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>Do you accept insurance and which plans do you work with?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, Spark Eye Care accepts most major medical insurance plans including Medicare and many commercial insurance carriers. We participate with a wide network of insurers to make quality eye care accessible to our community. Coverage varies by plan, especially for premium lens options during cataract surgery or elective procedures like refractive lens exchange. Our billing team will verify your specific benefits prior to your appointment and provide detailed information about your coverage, any out-of-pocket costs, and payment options. We recommend calling our office with your insurance information so we can confirm participation before your first visit.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>How do I become a new patient at Spark Eye Care?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Becoming a new patient is simple and straightforward. You can schedule your first appointment by calling our office directly or using our online contact form. We welcome patients with referrals from other doctors as well as those seeking care on their own initiative. When you call, our team will gather basic information including your insurance details, current medications, and the reason for your visit. We'll send you new patient forms to complete before your appointment, which you can fill out electronically or arrive early to complete in our office. Be sure to bring your insurance card, photo ID, current glasses or contacts, and a list of medications to your first visit.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>What should I expect during my first comprehensive eye exam?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Your comprehensive eye examination will typically last 60-90 minutes and includes multiple components. Our clinical team will begin with advanced diagnostic testing including visual acuity measurements, eye pressure checks, and detailed imaging of your eye structures. Dr. Plummer will then perform a thorough examination using specialized equipment to evaluate your cornea, lens, retina, and optic nerve. You may receive dilating drops to allow a more complete view of the back of your eye, which can cause temporary blurring and light sensitivity for several hours. Dr. Plummer will discuss all findings with you, answer your questions, and recommend any necessary treatments or follow-up care based on your specific condition and health history.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>How far in advance do I need to schedule an appointment?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Appointment availability varies based on the type of visit and time of year. For routine comprehensive exams and follow-up visits, we typically recommend scheduling 2-4 weeks in advance to ensure your preferred date and time. New patient consultations for surgical procedures like cataract surgery may have more immediate availability. If you're experiencing urgent symptoms such as sudden vision changes, eye pain, flashes of light, or new floaters, please call our office immediately so we can arrange prompt evaluation. We make every effort to accommodate urgent medical needs quickly while maintaining quality care for all our patients.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>Do you offer telehealth or virtual appointments?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              While most eye care requires in-person examination with specialized equipment, we do offer limited telehealth consultations for specific situations. Virtual visits can be appropriate for discussing test results, reviewing treatment progress, answering questions about post-operative care, or conducting preliminary consultations about surgical procedures. However, comprehensive eye exams, diagnostic testing, and most follow-up visits require an office visit to properly evaluate your eye health. Our team can help determine if a telehealth appointment is suitable for your specific needs or if an in-person visit is necessary for optimal care.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>What is the difference between routine eye exams and medical eye exams?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Routine eye exams focus primarily on vision correction and refractive needs, while medical eye exams diagnose and treat eye diseases and conditions. At Spark Eye Care, Dr. Plummer specializes in medical and surgical eye care, treating conditions like cataracts, glaucoma, diabetic retinopathy, and dry eye disease. Medical eye exams are typically covered by major medical insurance rather than vision plans. These visits involve more extensive diagnostic testing and evaluation of eye health conditions beyond simple vision testing. If you have symptoms like eye pain, redness, vision changes, or a diagnosed eye condition, your visit will be considered a medical exam and billed to your health insurance accordingly.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>How long does cataract surgery take and what is the recovery like?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              The actual cataract surgery procedure typically takes 15-20 minutes per eye, though you should plan for about 2-3 hours at the surgery center including pre-operative preparation and post-operative monitoring. Dr. Plummer uses advanced techniques with tiny incisions that usually heal without sutures. Most patients notice improved vision within a day or two, with continued improvement over the following weeks as your eye fully heals. You'll use prescribed eye drops for several weeks and avoid strenuous activities, swimming, and eye rubbing during the initial recovery period. Most people return to normal daily activities within a few days, and we schedule follow-up appointments to monitor your healing and ensure optimal visual outcomes. If you need surgery on both eyes, procedures are typically performed on separate days a few weeks apart.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>What payment options do you offer for services not covered by insurance?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We understand that some services and premium options may not be fully covered by insurance. Spark Eye Care accepts various payment methods including cash, checks, and major credit cards. For larger expenses such as premium intraocular lenses during cataract surgery or elective refractive procedures, we offer financing options through healthcare credit companies that provide flexible payment plans with low or no interest options for qualified patients. Our team will provide detailed cost estimates before any procedure and help you understand your payment options. We're committed to making quality eye care accessible and will work with you to find a payment solution that fits your budget while ensuring you receive the care you need.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>What is your cancellation and rescheduling policy?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We request at least 24-48 hours notice if you need to cancel or reschedule your appointment. This advance notice allows us to offer your appointment time to other patients who need care. Late cancellations or missed appointments without notice may result in a fee, as they prevent other patients from receiving timely care and impact our ability to serve the community effectively. We understand that emergencies and unexpected situations arise, and we'll work with you on a case-by-case basis. You can cancel or reschedule by calling our office during business hours. For surgical procedures, different cancellation policies may apply due to the extensive coordination required, and our team will explain these specific policies when scheduling your surgery.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>Do I need a referral from my primary care doctor to see Dr. Plummer?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Referral requirements depend on your specific insurance plan. Many patients can schedule directly with Spark Eye Care without a referral, while some insurance plans (particularly HMO plans and certain Medicare Advantage plans) do require a referral from your primary care physician before seeing a specialist. When you call to schedule your appointment, our team will verify whether your insurance requires a referral. If a referral is needed, we can coordinate with your primary care doctor's office to obtain it before your visit. We're happy to accept referrals from optometrists, primary care physicians, and other specialists who want their patients to receive advanced surgical and medical eye care from Dr. Plummer.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>What should I do if I'm experiencing an eye emergency?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              True eye emergencies include sudden vision loss, severe eye pain, chemical injuries, significant eye trauma, sudden onset of flashes and floaters, or eye injuries with foreign objects. If you experience any of these symptoms, call our office immediately during business hours for urgent guidance and rapid evaluation. For after-hours emergencies, our answering service can connect you with on-call coverage for urgent medical advice. In cases of severe trauma, chemical burns, or situations requiring immediate intervention, proceed directly to the nearest emergency room and inform them you're a patient of Dr. Plummer at Spark Eye Care. We'll coordinate your follow-up care to ensure continuity and optimal outcomes. Don't delay seeking care for genuine eye emergencies, as prompt treatment is often critical for preserving vision.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>Can I bring a family member or friend to my appointment?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Absolutely, and we encourage it, especially for surgical consultations or appointments where your eyes will be dilated. Having a trusted family member or friend present can help you remember important information, ask questions you might not think of, and provide support during your visit. If you're having a procedure or receiving dilating drops, you'll need someone to drive you home as your vision will be temporarily impaired. For surgical consultations, a companion can help you understand treatment options and post-operative care instructions. We want you to feel comfortable and fully informed about your eye care, and having a support person present often enhances the experience and helps ensure better outcomes.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>How do premium lens implants differ from standard cataract lenses?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Standard intraocular lenses correct vision at one distance (usually far), meaning you'll likely still need glasses for reading or other tasks. Premium lens options include multifocal lenses that provide vision at multiple distances, toric lenses that correct astigmatism, and extended depth of focus lenses that offer a broader range of clear vision. These advanced lenses can significantly reduce or eliminate dependence on glasses after cataract surgery. While standard lenses are covered by insurance, premium lenses involve additional out-of-pocket costs because they go beyond basic cataract treatment. During your consultation, Dr. Plummer will discuss your lifestyle, visual needs, and expectations to help determine which lens option is most appropriate for your individual situation and goals.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>What medications should I bring to my appointment?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Please bring a complete list of all medications you currently take, including prescription drugs, over-the-counter medications, vitamins, and supplements. The easiest approach is to bring the actual medication bottles to your appointment so we can verify exact names, dosages, and frequencies. This information is crucial because many medications can affect your eyes or interact with eye treatments and surgical procedures. Be sure to include any eye drops you're currently using, blood thinners, diabetes medications, and any drugs for blood pressure or other chronic conditions. If you're taking medications prescribed by other doctors, we may need to coordinate with them regarding timing around any procedures. Accurate medication information helps Dr. Plummer provide the safest and most effective care tailored to your complete health profile.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>How often should I have my eyes examined?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              The recommended frequency of eye exams depends on your age, health conditions, and risk factors. Adults with healthy eyes should generally have comprehensive eye exams every 1-2 years, while those over 60 should be examined annually due to increased risk of age-related conditions like cataracts, glaucoma, and macular degeneration. If you have diabetes, glaucoma, macular degeneration, or other chronic eye conditions, you'll need more frequent monitoring as determined by Dr. Plummer based on your specific situation. People with family history of eye disease, those taking medications that affect vision, or anyone experiencing vision changes should be evaluated more frequently. Dr. Plummer will recommend an appropriate follow-up schedule based on your individual eye health, risk factors, and any conditions requiring ongoing management.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>What is minimally invasive glaucoma surgery (MIGS) and who is it for?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              MIGS procedures are advanced surgical techniques that lower eye pressure in glaucoma patients using tiny incisions and specialized micro-devices. Unlike traditional glaucoma surgery, MIGS procedures have faster recovery times, fewer complications, and can often be performed at the same time as cataract surgery. These procedures work by improving the eye's natural drainage system or creating new drainage pathways to reduce intraocular pressure. MIGS is typically appropriate for patients with mild to moderate glaucoma who haven't achieved adequate pressure control with medications alone, or those who want to reduce their dependence on glaucoma eye drops. Dr. Plummer will evaluate your specific type and stage of glaucoma, current pressure levels, medication regimen, and overall eye health to determine if MIGS is a suitable option for preserving your vision.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>Do you provide glasses or contact lens prescriptions?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Dr. Plummer's practice focuses on medical and surgical eye care rather than routine vision correction services. While he can provide glasses prescriptions when medically necessary as part of comprehensive eye exams for conditions like cataracts or other eye diseases, we don't fit contact lenses or provide routine refractive services. If you need specialized contact lens fitting or comprehensive optical services, we're happy to coordinate with local optometrists who can provide these services. Our goal is to diagnose and treat eye diseases, perform advanced surgical procedures, and manage complex eye conditions that require specialized expertise. For patients who need both medical eye care and routine vision services, we work collaboratively with referring optometrists to ensure you receive comprehensive, coordinated care.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>Why should I choose Spark Eye Care for my eye surgery?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Dr. Plummer is a board-certified ophthalmologist who combines advanced surgical expertise with personalized, patient-centered care. He uses the latest proven technologies and techniques for cataract surgery, refractive lens exchange, MIGS procedures, and laser vision correction to deliver exceptional outcomes. Unlike high-volume practices, Spark Eye Care provides individualized attention where Dr. Plummer personally manages your care from initial consultation through post-operative follow-up. Our practice is conveniently located in Kyle, Texas, bringing world-class surgical eye care close to home without the need to travel to larger cities. We take time to thoroughly explain your condition, discuss all treatment options, and ensure you feel confident and comfortable throughout your surgical journey. Our commitment to both clinical excellence and compassionate care creates an environment where patients achieve outstanding results while feeling valued and supported.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white group">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] text-xl list-none flex justify-between items-center" style={{fontFamily: 'Cormorant'}}>
              <span>How can I access my medical records or test results?</span>
              <svg className="w-6 h-6 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              You have the right to access your medical records and test results at any time. To request copies of your records, contact our office and complete a medical records release form. We can provide records electronically or in paper format based on your preference. For your security and privacy, we require proper identification and may charge a reasonable fee for copying and processing extensive records as permitted by law. Test results and updates about your care are typically discussed during your appointments, and Dr. Plummer ensures you understand all findings and their implications for your eye health. If you need records transferred to another healthcare provider or specialist, we can coordinate that directly with appropriate authorization. Our team is committed to maintaining accurate, comprehensive medical records while ensuring your privacy and facilitating the continuity of your care.
            </div>
          </details>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-light mb-4" style={{fontFamily: 'Cormorant'}}>
            Still Have Questions?
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-8">
            Our team is here to help. Contact us today to learn more about our services or schedule your consultation.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-dark)] transition-colors"
          >
            Contact Our Office
          </a>
        </div>
      </section>
    </main>
  );
}