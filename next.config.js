/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', 
  images: {
    unoptimized: true, 
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
