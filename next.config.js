/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
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

module.exports = {
  i18n,
};
module.exports = nextConfig;
