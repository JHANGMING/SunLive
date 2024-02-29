/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '20.44.57.192',
      },
    ],
  },
};

module.exports = nextConfig;
