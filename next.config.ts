import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/images/**',
      },
    ],
  },
  trailingSlash: true,
  // Skip API routes during static export
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
