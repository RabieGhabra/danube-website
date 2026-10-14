import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/danube-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;