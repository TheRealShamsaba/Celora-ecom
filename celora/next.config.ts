import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**", 
        // e.g. /uploads/filename.jpg
      },
    ],
  },
};

export default nextConfig;
