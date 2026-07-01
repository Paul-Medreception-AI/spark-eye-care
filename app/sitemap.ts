import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sparkeyetx.com'
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
    { url: `${base}/conditions/glaucoma-open-angle-and-angle-closure`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/dry-eye-syndrome`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/diabetic-retinopathy`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/presbyopia`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/astigmatism`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/myopia-nearsightedness`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/hyperopia-farsightedness`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/age-related-macular-degeneration`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/floaters-and-flashes`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/ocular-hypertension`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/posterior-vitreous-detachment`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/blepharitis`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/meibomian-gland-dysfunction`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/corneal-abrasions`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/diabetic-macular-edema`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/computer-vision-syndrome`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/pterygium`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/pinguecula`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/fuchs-dystrophy`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/pseudoexfoliation-syndrome`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/narrow-angle-glaucoma`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/normal-tension-glaucoma`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/secondary-cataracts-pco`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now },
    { url: `${base}/conditions/refractive-errors`, priority: 0.85, changeFrequency: 'weekly' as const, lastModified: now }
  ]

  const blogPages = [
    { url: `${base}/blog/how-to-know-when-it-s-time-for-cataract-surgery`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/premium-lens-implants-vs-standard-iols-what-s-the-difference`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-minimally-invasive-glaucoma-surgery-migs`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-complete-guide-to-dry-eye-treatment-options`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/why-diabetics-need-regular-eye-exams-even-with-good-vision`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/refractive-lens-exchange-is-it-right-for-you`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-to-expect-during-cataract-surgery-recovery`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/5-early-warning-signs-of-glaucoma-you-shouldn-t-ignore`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-presbyopia-affects-your-vision-after-age-40`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/laser-eye-surgery-in-your-50s-and-beyond-what-you-need-to-kn`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-link-between-diabetes-and-vision-loss`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-astigmatism-and-how-it-s-corrected`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/should-you-be-worried-about-eye-floaters`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/protecting-your-eyes-from-uv-damage-more-than-sunglasses`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-causes-red-irritated-eyes-and-when-to-see-a-doctor`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/glaucoma-medications-types-side-effects-and-what-to-expect`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/computer-vision-syndrome-protecting-your-eyes-in-the-digital`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/choosing-between-lasik-and-prk-which-is-better-for-you`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/age-related-macular-degeneration-risk-factors-and-prevention`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/how-often-should-you-get-an-eye-exam`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-is-ocular-hypertension-and-why-it-matters`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-toric-lens-implants-for-astigmatism-correction`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/blepharitis-causes-symptoms-and-long-term-management`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-truth-about-eye-vitamins-and-supplements`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/night-vision-problems-causes-and-solutions`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/preparing-for-your-first-ophthalmology-appointment`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/secondary-cataracts-pco-when-cloudiness-returns-after-surger`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/understanding-your-eye-prescription-what-the-numbers-mean`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/pterygium-and-pinguecula-growths-on-the-eye-surface`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/normal-tension-glaucoma-when-eye-pressure-isn-t-the-problem`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/fuchs-dystrophy-a-progressive-corneal-condition`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-role-of-inflammation-in-eye-disease`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/children-s-vision-and-when-kids-need-eye-exams`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/pseudoexfoliation-syndrome-an-underdiagnosed-glaucoma-risk`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/what-to-know-about-eye-allergies-and-treatment-options`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/meibomian-gland-dysfunction-a-major-cause-of-dry-eye`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/vision-changes-during-pregnancy-what-s-normal-and-what-s-not`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/the-impact-of-blood-pressure-on-eye-health`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/corneal-abrasions-causes-treatment-and-healing-time`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/blog/blue-light-and-eye-health-separating-fact-from-fiction`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const comparePages = [
    { url: `${base}/compare/lasik-vs-refractive-lens-exchange`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/traditional-vs-laser-cataract-surgery`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/monofocal-vs-multifocal-lens-implants`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/migs-vs-traditional-glaucoma-surgery`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/compare/prescription-drops-vs-in-office-dry-eye-treatment`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const locationPages = [
    { url: `${base}/locations/kyle-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/buda-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/san-marcos-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now },
    { url: `${base}/locations/austin-tx`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: now }
  ]

  const priorRecoveryPages = [
  ]

  return [...corePages, ...servicePages, ...conditionPages, ...blogPages, ...comparePages, ...locationPages, ...priorRecoveryPages]
}