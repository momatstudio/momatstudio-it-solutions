import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // necessary for static export if using <Image />
  },
};

export default nextConfig;
