/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable image optimization since we're in WebContainer
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true
  },
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true
  },
  // Disable SWC minification to prevent WebContainer issues
  swcMinify: false,
  // Configure webpack for WebContainer compatibility
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
    };
    return config;
  }
};

module.exports = nextConfig;