/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows images from any website link
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
