/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'dummyimage.com',
      },
    ],
  },
}

module.exports = nextConfig
