/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["doctorpizza.org", "wallpaperaccess.com"],
  },
};

module.exports = nextConfig;
