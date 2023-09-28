/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_APP_GOOGLE_API_KEY: process.env.NEXT_APP_GOOGLE_API_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.BASE_URL,
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
