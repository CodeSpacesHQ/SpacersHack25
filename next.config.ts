import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "moonshot.techcabal.com",
      },
    ],
  },
};

export default nextConfig;
