/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io', 'api.zisindosat.id', 'localhost', 'scontent-cgk1-2.cdninstagram.com'],
  },
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL + '/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
