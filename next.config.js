/** @type {import("next").NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // Legacy slug changes (sparkeyetx.com → new site paths)
      { source: '/accessibility-statement', destination: '/', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/content/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/our-terms', destination: '/terms', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },

      // Provider pages → team page (single-provider practice)
      { source: '/provider/andrew-plummer-md', destination: '/team', permanent: true },
      { source: '/providers', destination: '/team', permanent: true },
      // Catch-all for any other /provider/* Google indexed
      { source: '/provider/:slug*', destination: '/team', permanent: true },

      // Legacy /service/{slug} → new /services/{slug}
      { source: '/service/cataract-surgery', destination: '/services/cataract-surgery', permanent: true },
      { source: '/service/diabetic-eye-exams', destination: '/services/diabetic-eye-exams', permanent: true },
      { source: '/service/dry-eye-treatment', destination: '/services/dry-eye-treatment', permanent: true },
      { source: '/service/laser-eye-surgery', destination: '/services/laser-eye-surgery', permanent: true },
      { source: '/service/minimally-invasive-glaucoma-surgery', destination: '/services/minimally-invasive-glaucoma-surgery', permanent: true },
      { source: '/service/refractive-lens-exchange', destination: '/services/refractive-lens-exchange', permanent: true },
      // Catch-all for any other /service/* Google indexed (typos, retired services)
      { source: '/service/:slug*', destination: '/services', permanent: true },
      { source: '/conditions/age-related-changes', destination: '/conditions/age-related-vision-changes', permanent: true },
      { source: '/conditions/allergic-conjunctivitis', destination: '/conditions/dry-eye-syndrome', permanent: true },
      { source: '/conditions/chalazion', destination: '/conditions/blepharitis', permanent: true },
      { source: '/conditions/chronic-dry-eye', destination: '/conditions/dry-eye-syndrome', permanent: true },
      { source: '/conditions/conjunctivitis', destination: '/conditions/dry-eye-syndrome', permanent: true },
      { source: '/conditions/convergence-insufficiency', destination: '/conditions/computer-vision-syndrome', permanent: true },
      { source: '/conditions/corneal-ulcer', destination: '/conditions/corneal-abrasions', permanent: true },
      { source: '/conditions/digital-eye-strain', destination: '/conditions/computer-vision-syndrome', permanent: true },
      { source: '/conditions/dry-eye', destination: '/conditions/dry-eye-syndrome', permanent: true },
      { source: '/conditions/eye-infections', destination: '/conditions/corneal-abrasions', permanent: true },
      { source: '/conditions/floaters', destination: '/conditions/floaters-and-flashes', permanent: true },
      { source: '/conditions/hyperopia', destination: '/conditions/hyperopia-farsightedness', permanent: true },
      { source: '/conditions/keratoconus', destination: '/conditions/corneal-irregularities', permanent: true },
      { source: '/conditions/macular-degeneration', destination: '/conditions/age-related-macular-degeneration', permanent: true },
      { source: '/conditions/myopia', destination: '/conditions/myopia-nearsightedness', permanent: true },
      { source: '/conditions/nuclear-cataracts', destination: '/conditions/nuclear-sclerotic-cataracts', permanent: true },
      { source: '/conditions/ocular-rosacea', destination: '/conditions/blepharitis', permanent: true },
      { source: '/conditions/retinal-detachment', destination: '/conditions/posterior-vitreous-detachment', permanent: true },
      { source: '/conditions/retinal-tears', destination: '/conditions/posterior-vitreous-detachment', permanent: true },
      { source: '/conditions/retinal-vein-occlusion', destination: '/conditions/diabetic-macular-edema', permanent: true },
      { source: '/conditions/sjogrens-syndrome', destination: '/conditions/aqueous-deficient-dry-eye', permanent: true },
      { source: '/services/comprehensive-eye-exams', destination: '/services/diabetic-eye-exams', permanent: true },
      { source: '/services/contact-lens-fittings', destination: '/services', permanent: true },
      { source: '/services/diabetic-eye-care', destination: '/services/diabetic-eye-exams', permanent: true },
      { source: '/services/diagnostic-evaluations', destination: '/services/diabetic-eye-exams', permanent: true },
      { source: '/services/evaluations', destination: '/services/diabetic-eye-exams', permanent: true },
      { source: '/services/glaucoma-management', destination: '/services/minimally-invasive-glaucoma-surgery', permanent: true },
      { source: '/services/glaucoma-screening', destination: '/services/minimally-invasive-glaucoma-surgery', permanent: true },
      { source: '/services/lasik', destination: '/services/laser-eye-surgery', permanent: true },
      { source: '/services/medical-eye-care', destination: '/services', permanent: true },
      { source: '/services/medication-management', destination: '/services', permanent: true },
      { source: '/services/psychiatric-evaluations', destination: '/services', permanent: true },
      { source: '/services/telehealth', destination: '/telehealth', permanent: true },
      { source: '/services/retinal-imaging', destination: '/services/diabetic-eye-exams', permanent: true },
      { source: '/conditions/floaters-flashes', destination: '/conditions/floaters-and-flashes', permanent: true },
      { source: '/conditions/corneal-conditions', destination: '/conditions/corneal-irregularities', permanent: true },
    ];
  },
};
module.exports = nextConfig;