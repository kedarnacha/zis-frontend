/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io', 'api.zisindosat.id'],
  },
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'http://api.zisindosat.id/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
