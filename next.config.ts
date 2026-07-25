import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.cdn.paulgeorge.dev",
      },
    ],
    qualities: [100, 75, 50, 25],
  },
};

export default nextConfig;
