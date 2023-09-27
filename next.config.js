/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_APP_GOOGLE_API_KEY: process.env.NEXT_APP_GOOGLE_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/agrohimpromcenter/**',
      },
    ],
  },
};

module.exports = nextConfig;
