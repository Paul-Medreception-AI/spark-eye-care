import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Spark Eye Care',
  description: 'Find answers to common questions about eye care, cataract surgery, laser vision correction, insurance, appointments, and what to expect at Spark Eye Care in Kyle, Texas.',
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="font-['Cormorant'] text-5xl md:text-6xl font-light mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Everything you need to know about our practice and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              Do you accept insurance for eye care services?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, we accept most major medical and vision insurance plans, including Medicare. Coverage varies depending on your specific plan and the type of service you need. Medical eye care, such as cataract surgery, glaucoma treatment, and diabetic eye exams, is typically covered by medical insurance. Routine vision exams and refractive procedures like laser vision correction are usually covered by vision plans or may be out-of-pocket. We recommend calling our office with your insurance information so we can verify your benefits before your appointment and provide you with a clear understanding of your coverage and any out-of-pocket costs.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              How do I schedule my first appointment as a new patient?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Scheduling your first appointment is easy. You can call our office directly during business hours, or use our online contact form to request an appointment and our team will reach out to confirm your preferred date and time. When scheduling, please let us know the reason for your visit—whether it's a cataract evaluation, general eye exam, laser vision consultation, or treatment for a specific concern. New patients should plan to arrive 15 minutes early to complete registration paperwork, or you can download forms from our website in advance. We'll also need your insurance information and a list of current medications to make your visit as efficient as possible.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              What should I bring to my first appointment?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Please bring a valid photo ID, your insurance card(s), and a list of all current medications including dosages. If you wear glasses or contact lenses, bring them with you along with your current prescription if available. It's also helpful to bring a list of any eye concerns or questions you'd like to discuss with Dr. Plummer. If you're coming for a comprehensive exam or surgical consultation, plan for your pupils to be dilated—this temporarily affects your vision, so consider bringing a driver or wearing sunglasses for the ride home. Any previous eye exam records or surgical history from other providers is valuable for us to review.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              What can I expect during my comprehensive eye examination?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Your comprehensive eye exam typically takes 60-90 minutes and includes multiple diagnostic tests to fully evaluate your eye health and vision. We'll measure your visual acuity, check your eye pressure, assess your eye muscle function, and examine the internal and external structures of your eyes. Advanced imaging technology allows Dr. Plummer to detect conditions like cataracts, glaucoma, macular degeneration, and diabetic retinopathy in their earliest stages. Your eyes will likely be dilated with drops to allow a complete view of the retina and optic nerve—dilation takes about 20-30 minutes to take effect and lasts 4-6 hours. Dr. Plummer will discuss all findings with you, answer your questions, and recommend any necessary treatment or follow-up care tailored to your specific needs.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              Am I a candidate for laser vision correction?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Good candidates for laser vision correction are generally over 18 years old, have stable vision for at least one year, and have healthy eyes free from conditions like glaucoma, cataracts, or severe dry eye. Your prescription should fall within treatable ranges for nearsightedness, farsightedness, or astigmatism. During your consultation, we'll perform detailed measurements of your corneal thickness, shape, and overall eye health to determine if laser surgery is safe and effective for you. Some patients with thin corneas, very high prescriptions, or certain eye conditions may be better candidates for refractive lens exchange instead. Dr. Plummer will discuss all available options and recommend the best procedure based on your unique anatomy, lifestyle goals, and vision needs.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              How long does cataract surgery take and what is recovery like?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              The cataract surgery procedure itself typically takes only 15-20 minutes per eye, though you should plan for about 2-3 hours at our surgery center for pre-operative preparation and post-operative monitoring. The procedure is performed under local anesthesia with light sedation, so you'll be comfortable and relaxed throughout. Most patients notice improved vision within 24 hours, with continued improvement over the following weeks as your eye heals. You'll use prescription eye drops for several weeks and attend follow-up appointments to monitor healing. Most people return to normal activities within a few days, though you should avoid heavy lifting, swimming, and rubbing your eyes during the initial recovery period. Dr. Plummer will provide detailed post-operative instructions tailored to your specific needs.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              What are premium lens implants and are they worth it?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Premium lens implants offer advanced vision correction beyond what standard lenses provide during cataract surgery or refractive lens exchange. Options include toric lenses to correct astigmatism, multifocal lenses that provide clear vision at multiple distances, and extended depth of focus lenses that reduce dependence on reading glasses. While standard monofocal lenses are covered by insurance and provide excellent distance vision, premium lenses can significantly reduce or eliminate your need for glasses after surgery. The additional cost varies depending on the lens technology selected and is typically not covered by insurance. During your consultation, Dr. Plummer will discuss your lifestyle, visual demands, and goals to help you determine if premium lenses are the right investment for your quality of life and vision independence.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              Do you offer telehealth or virtual appointments?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              While comprehensive eye examinations and surgical procedures require in-person visits to properly evaluate your eye health with specialized equipment, we do offer telehealth consultations for certain follow-up appointments, medication management, and initial discussions about treatment options. Virtual visits can be convenient for reviewing test results, discussing minor concerns, or determining if an in-person visit is needed. However, conditions requiring diagnostic imaging, pressure measurements, or detailed eye examinations must be evaluated in our office. If you're interested in a telehealth appointment, please contact our office to determine if your specific situation is appropriate for a virtual visit or if an in-person examination is necessary.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              How often should I have a comprehensive eye exam?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              The frequency of eye exams depends on your age, overall health, and risk factors for eye disease. Adults with no known eye problems should have a comprehensive exam every 1-2 years until age 60, then annually thereafter. If you have diabetes, glaucoma, macular degeneration, or a family history of eye disease, you may need more frequent monitoring—often every 6-12 months. Patients who have had eye surgery or are being treated for specific conditions will follow a customized schedule based on their needs. Regular eye exams are essential not just for updating prescriptions, but for detecting serious conditions like glaucoma, cataracts, and retinal problems before they cause permanent vision loss. Dr. Plummer will recommend an exam schedule tailored to your individual risk profile and eye health status.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              What payment options do you accept?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We accept cash, checks, and all major credit cards including Visa, MasterCard, American Express, and Discover. For elective procedures like laser vision correction, refractive lens exchange, and premium lens implants, we offer flexible financing options through healthcare lending partners that provide low-interest and interest-free payment plans for qualified patients. This allows you to proceed with vision-enhancing procedures and pay over time in manageable monthly installments. We believe financial concerns should not prevent you from accessing the eye care you need, so our team works with each patient to find a payment solution that fits their budget. Payment is typically expected at the time of service for routine visits, and we'll provide cost estimates for surgical procedures during your consultation.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              What is your cancellation and rescheduling policy?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              We understand that schedule changes happen and ask that you provide at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer your appointment time to other patients who need care. You can call our office during business hours to make changes to your appointment. Late cancellations or missed appointments without advance notice may result in a missed appointment fee, as these time slots could have been used to serve other patients. For surgical procedures, different cancellation policies may apply due to the coordination of surgical facilities and staff—we'll review these policies with you when scheduling surgery. We appreciate your understanding and cooperation in helping us serve all our patients efficiently.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              Do I need a referral to see Dr. Plummer?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Whether you need a referral depends on your specific insurance plan. Many insurance plans, including Medicare, do not require a referral to see an ophthalmologist like Dr. Plummer. However, some HMO and managed care plans do require authorization from your primary care physician before seeing a specialist. We recommend checking with your insurance provider or calling our office—we can help verify your benefits and let you know if a referral is needed. Even if your insurance doesn't require a referral, it can be helpful if your primary doctor or optometrist has already examined you and identified a specific concern that needs Dr. Plummer's surgical expertise. We gladly accept referrals from other eye care providers and work collaboratively to ensure you receive comprehensive, coordinated care.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              What should I do if I experience a sudden vision change or eye emergency?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Eye emergencies require immediate attention to prevent permanent vision loss. If you experience sudden vision loss, flashes of light, a curtain or shadow across your vision, eye trauma, chemical exposure, or severe eye pain, contact our office immediately. During business hours, call and inform our staff that you have an urgent situation—we prioritize emergency cases and will see you as quickly as possible. After hours, our answering service can connect you with Dr. Plummer or the on-call provider for guidance. For severe trauma or chemical burns, proceed directly to the nearest emergency room and then contact our office for follow-up care. Not all eye problems are emergencies, but sudden changes should always be evaluated promptly rather than waiting for a routine appointment.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              Can you treat dry eye syndrome effectively?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Yes, we provide comprehensive dry eye evaluation and treatment to identify the root cause of your symptoms and create an effective, personalized treatment plan. Dry eye can result from various factors including poor tear quality, inadequate tear production, inflammation, meibomian gland dysfunction, and environmental factors. We use advanced diagnostic tools to assess your tear film and identify the specific type of dry eye you have. Treatment options range from prescription eye drops and nutritional supplements to in-office procedures like intense pulsed light therapy and meibomian gland expression. Many patients experience significant relief with proper treatment, though managing chronic dry eye often requires ongoing care. Dr. Plummer will work with you to find the most effective combination of therapies to restore comfort and protect your eye health.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              What is minimally invasive glaucoma surgery and who is a candidate?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Minimally invasive glaucoma surgery (MIGS) uses tiny devices and micro-incisions to improve fluid drainage from the eye and lower intraocular pressure with less trauma than traditional glaucoma surgeries. These procedures offer faster recovery, fewer complications, and can often be performed at the same time as cataract surgery. MIGS is typically appropriate for patients with mild to moderate glaucoma who need better pressure control despite using eye drops, or who want to reduce their dependence on glaucoma medications. Not all glaucoma patients are candidates for MIGS—advanced glaucoma may require more aggressive surgical approaches. During your consultation, Dr. Plummer will evaluate your glaucoma severity, pressure levels, optic nerve health, and visual field status to determine if MIGS or another treatment approach is most appropriate for preserving your vision.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              How often do I need diabetic eye exams?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              If you have diabetes, you should have a comprehensive dilated eye exam at least once a year, even if your vision seems fine. Diabetic retinopathy often develops without symptoms in its early stages, and regular screening allows us to detect changes before they threaten your vision. If diabetic eye disease is detected, you may need more frequent exams—every 3-6 months—to monitor progression and adjust treatment. We use advanced retinal imaging to document any changes in your blood vessels, retina, and optic nerve over time. Early detection and treatment of diabetic retinopathy can prevent up to 95% of diabetes-related vision loss. Working closely with your primary care doctor or endocrinologist to maintain good blood sugar control is also essential for protecting your eyes from diabetes-related damage.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              Can I get a second opinion on a recommended eye surgery?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Absolutely. We welcome second opinion consultations and believe informed patients make the best decisions about their eye care. If another provider has recommended surgery or treatment and you want another expert perspective, Dr. Plummer will thoroughly review your medical history, examine your eyes, and provide an independent assessment and recommendation. Please bring any previous test results, imaging, and medical records to your appointment so we have complete information. Second opinions can provide peace of mind, clarify confusing information, or present alternative treatment options you may not have considered. We respect the relationship you have with your current eye care provider and will communicate with them as appropriate to ensure coordinated care. Your vision is too important to proceed with treatment if you have unanswered questions or concerns.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              What makes Spark Eye Care different from other practices?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Spark Eye Care combines world-class surgical expertise with genuinely personalized, patient-centered care. Dr. Andrew Plummer is a board-certified ophthalmologist who stays current with the latest proven technologies and techniques while maintaining a conservative, evidence-based approach to treatment recommendations. We take time to understand your unique vision goals, lifestyle needs, and concerns rather than rushing through appointments. Our practice uses advanced diagnostic equipment to ensure accurate diagnoses and optimal surgical planning. We explain your options clearly, answer every question, and never pressure you into treatments you don't need. Whether you need surgery or medical management, you'll receive attentive care and thorough follow-up to ensure the best possible outcomes. Our commitment is to help you see life clearly with treatments tailored specifically to your eyes and your goals.
            </div>
          </details>

          <details className="border border-[var(--color-border)] rounded-xl mb-3 bg-white animate-fade-up">
            <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-['Cormorant'] text-xl list-none flex justify-between items-center hover:bg-[var(--color-cream)] transition-colors">
              How do I prepare for cataract surgery?
              <svg className="w-5 h-5 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-sm">
              Preparing for cataract surgery involves several steps to ensure the best outcome and your safety. You'll attend a pre-operative appointment where we take detailed measurements of your eye to select the proper lens implant power. We'll review your medical history and current medications—some blood thinners or supplements may need to be temporarily stopped with your prescribing doctor's approval. You'll receive detailed written instructions including which eye drops to start before surgery, fasting requirements, and what to expect on surgery day. Arrange for a responsible adult to drive you to and from the surgery center, as you cannot drive after the procedure. Wear comfortable clothing and avoid wearing makeup, lotions, or perfumes on surgery day. Most importantly, ask any questions you have before your procedure so you feel completely comfortable and confident about your upcoming surgery.
            </div>
          </details>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl font-light mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our team is here to help. Contact us to speak with a member of our staff who can answer your specific questions and help you schedule your appointment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}