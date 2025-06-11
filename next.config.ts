import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: 'custom',
    loaderFile: 'image-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.paulgeorge.dev',
      },
    ],
  },
};

export default nextConfig;
