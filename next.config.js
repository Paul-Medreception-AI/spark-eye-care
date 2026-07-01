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
    ];
  },
};
module.exports = nextConfig;