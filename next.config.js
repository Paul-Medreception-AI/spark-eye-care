/** @type {import("next").NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: '/providers', destination: '/about', permanent: true },
      { source: '/provider/andrew-plummer-md', destination: '/about', permanent: true },
      { source: '/service/laser-eye-surgery', destination: '/services', permanent: true },
      { source: '/service/cataract-surgery', destination: '/services', permanent: true },
      { source: '/service/minimally-invasive-glaucoma-surgery', destination: '/services', permanent: true },
      { source: '/service/dry-eye-treatment', destination: '/services', permanent: true },
      { source: '/service/diabetic-eye-exams', destination: '/services', permanent: true },
      { source: '/service/refractive-lens-exchange', destination: '/services', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
      { source: '/locations', destination: '/contact', permanent: true },
      { source: '/location/kyle-tx', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contents', destination: '/', permanent: true },
      { source: '/content/privacy-sms', destination: '/privacy', permanent: true },
      { source: '/content/terms-sms', destination: '/terms', permanent: true },
      { source: '/content/patient-form-sms', destination: '/sms-terms', permanent: true },
      { source: '/content/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/schedule', destination: '/', permanent: true },
      { source: '/our-terms', destination: '/terms', permanent: true },
      { source: '/accessibility-statement', destination: '/', permanent: true },
      { source: '/your-privacy', destination: '/privacy', permanent: true },
      { source: '/index', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;