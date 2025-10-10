/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // ✅ ensures static export for cPanel
  images: {
    unoptimized: true, // ✅ disables Image Optimization API (required for cPanel)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'doctorpizza.org',
      },
      {
        protocol: 'https',
        hostname: 'wallpaperaccess.com',
      },
    ],
  },
};

module.exports = nextConfig;
