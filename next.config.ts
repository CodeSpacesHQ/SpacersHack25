import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      // Rewrite for 2023 Archive
      {
        source: "/2023",
        destination: "https://your-2023-deployment-url.com", // Replace with the actual deployment URL of the 2023 site
      },
      {
        source: "/2023/:path*",
        destination: "https://your-2023-deployment-url.com/:path*", // Replace with the actual deployment URL of the 2023 site
      },
      // Rewrite for 2024 Archive
      {
        source: "/2024",
        destination: "https://your-2024-deployment-url.com", // Replace with the actual deployment URL of the 2024 site
      },
      {
        source: "/2024/:path*",
        destination: "https://your-2024-deployment-url.com/:path*", // Replace with the actual deployment URL of the 2024 site
      },
    ];
  },
};

export default nextConfig;
