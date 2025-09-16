/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "doctorpizza.org",     // ye wala tumhari product image ke liye
      "wallpaperaccess.com", // ye wala background wallpaper ke liye
    ],
  },
};

module.exports = nextConfig;
