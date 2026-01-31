import type { NextConfig } from "next";

images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "moonshot.techcabal.com",
    },
    {
      protocol: "http",
      hostname: "www.interswitchgroup.com",
    },
  ],
  },

export default nextConfig;
