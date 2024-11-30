const nextConfig = {
  reactStrictMode: true, // Enable React strict mode
  swcMinify: true, // Use SWC for faster builds and smaller bundle size
  experimental: {
    appDir: true, // Enable experimental app directory for routing
  },
  webpack: (config) => {
    // Example: Adding custom Webpack plugins or loaders
    return config;
  },
  images: {
    domains: ['example.com'], // Allow external image domains for <Image /> component
  },
  env: {
    NEXT_PUBLIC_GTM: process.env.NEXT_PUBLIC_GTM, // Public environment variables
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true, // Indicates a 308 permanent redirect
      },
    ];
  },
};

module.exports = nextConfig;
