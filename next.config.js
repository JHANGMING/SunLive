/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sunliveapi.rocket-coding.com',
      },
    ],
  },
};

module.exports = nextConfig;
