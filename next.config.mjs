/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'webdevtest.assemblestaging.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'webdevtest.assemblestaging.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
