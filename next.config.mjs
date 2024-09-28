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
};

export default nextConfig;
