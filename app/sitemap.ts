import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.sparkeyetx.com'
  const now = new Date()

  const corePages = [
    { url: base, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/conditions`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/team`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/insurance`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/new-patients`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/telehealth`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/reviews`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/sms-terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ].map(p => ({ ...p, lastModified: now }))

  const servicePages = [
    { url: `${base}/services/cataract-surgery`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/refractive-lens-exchange`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/laser-eye-surgery`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/minimally-invasive-glaucoma-surgery`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/dry-eye-treatment`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/services/diabetic-eye-exams`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const conditionPages = [
    { url: `${base}/conditions/cataracts`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/age-related-cataracts`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/posterior-subcapsular-cataracts`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/nuclear-sclerotic-cataracts`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/cortical-cataracts`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/glaucoma`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/open-angle-glaucoma`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/narrow-angle-glaucoma`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/normal-tension-glaucoma`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/ocular-hypertension`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/dry-eye-syndrome`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/meibomian-gland-dysfunction`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/evaporative-dry-eye`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/aqueous-deficient-dry-eye`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/diabetic-retinopathy`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/diabetic-macular-edema`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/presbyopia`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/astigmatism`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/myopia-nearsightedness`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/hyperopia-farsightedness`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/refractive-errors`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/posterior-capsule-opacification`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/blepharitis`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/corneal-irregularities`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/age-related-vision-changes`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const blogPages = [
    { url: `${base}/blog/what-to-expect-during-cataract-surgery-a-complete-guide`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/premium-vs-standard-cataract-surgery-understanding-your-lens`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/5-signs-you-may-have-cataracts-and-when-to-seek-treatment`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-minimally-invasive-glaucoma-surgery-migs-differs-from-tr`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-truth-about-dry-eye-causes-symptoms-and-modern-treatment`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/diabetic-eye-disease-why-regular-screenings-can-save-your-si`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/am-i-too-young-for-cataract-surgery-age-and-timing-considera`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/refractive-lens-exchange-an-alternative-to-lasik-for-over-40`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-glaucoma-the-silent-thief-of-sight`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-to-choose-the-right-intraocular-lens-for-your-lifestyle`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/preparing-for-eye-surgery-what-you-need-to-know-before-your-`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/can-dry-eye-be-cured-treatment-options-that-actually-work`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-connection-between-high-blood-pressure-and-eye-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/toric-vs-monofocal-vs-multifocal-lenses-decoding-iol-options`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/when-should-you-see-an-ophthalmologist-vs-an-optometrist`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/recovery-timeline-what-to-expect-after-cataract-surgery`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/is-laser-eye-surgery-right-for-you-lasik-and-beyond`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-nutrition-in-eye-health-and-disease-prevention`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-astigmatism-and-how-it-affects-your-vision`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/floaters-and-flashes-when-to-worry-about-these-vision-change`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-cataract-surgery-has-evolved-modern-technology-and-techn`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/managing-glaucoma-medications-lasers-and-surgical-options`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-impact-of-screen-time-on-eye-health-and-what-you-can-do`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/presbyopia-why-everyone-eventually-needs-reading-glasses`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-happens-during-a-comprehensive-eye-exam`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/protecting-your-eyes-from-uv-damage-more-than-just-sunglasse`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-link-between-sleep-apnea-and-glaucoma-risk`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/choosing-an-eye-surgeon-what-questions-to-ask`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/secondary-cataracts-why-your-vision-may-blur-after-cataract-`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/eye-allergies-vs-dry-eye-how-to-tell-the-difference`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-importance-of-dilated-eye-exams-for-disease-detection`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-your-eye-prescription-what-the-numbers-mean`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/driving-after-eye-surgery-when-is-it-safe-to-get-behind-the-`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-future-of-eye-care-emerging-technologies-in-ophthalmolog`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-smoking-affects-your-eyes-and-vision`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/macular-degeneration-risk-factors-and-prevention-strategies`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/children-s-eye-health-when-should-kids-have-their-first-eye-`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-psychology-of-vision-loss-coping-with-eye-disease`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/insurance-coverage-for-eye-surgery-what-you-need-to-know`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/red-eye-common-causes-and-when-to-seek-emergency-care`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const comparePages = [
    { url: `${base}/compare/monofocal-vs-multifocal-lenses`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/lasik-vs-refractive-lens-exchange`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/traditional-glaucoma-surgery-vs-migs`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/standard-vs-laser-cataract-surgery`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/toric-vs-multifocal-lenses`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const locationPages = [
    { url: `${base}/locations/kyle-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/buda-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/san-marcos-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/austin-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const priorRecoveryPages = [
    { url: `${base}/providers`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/provider/andrew-plummer-md`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/service/laser-eye-surgery`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/service/cataract-surgery`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/service/minimally-invasive-glaucoma-surgery`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/service/dry-eye-treatment`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/service/diabetic-eye-exams`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/service/refractive-lens-exchange`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/testimonials`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/location/kyle-tx`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/contact-us`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/contents`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/content/privacy-sms`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/content/terms-sms`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/content/patient-form-sms`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/content/privacy-policy`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/schedule`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/our-terms`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/accessibility-statement`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/your-privacy`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/index`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  return [...corePages, ...servicePages, ...conditionPages, ...blogPages, ...comparePages, ...locationPages, ...priorRecoveryPages]
}