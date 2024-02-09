/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '4.224.41.94',
      },
    ],
  },
};

module.exports = nextConfig
