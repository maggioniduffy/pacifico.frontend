/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withFonts = require("next-fonts");

module.exports = withFonts({
  //enableSvg: true,
  webpack(config, options) {
    return config;
  },
  images: {
    domains: ["clubimages.s3.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
