/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Allow the server to be accessed from any host for live preview
  experimental: {
    serverComponentsExternalPackages: ['ollama'],
  },
};

export default nextConfig;
