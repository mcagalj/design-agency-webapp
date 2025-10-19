import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
};

export default nextConfig;
