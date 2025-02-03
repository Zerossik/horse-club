import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [320, 640, 768, 1024, 1280, 1920, 2048, 3840],
    imageSizes: [89, 120, 178, 360, 768, 1024, 1280, 1920, 2048, 3840],
  },
};

export default nextConfig;
