import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Local assets only for now; formats kept modern for the hero photography.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
