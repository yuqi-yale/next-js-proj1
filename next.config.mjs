/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'next-js-proj1.vercel.app',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bible_verse',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
