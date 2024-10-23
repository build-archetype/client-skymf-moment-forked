/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "digitalhippo-production.up.railway.app",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  transpilePackages: ["node-fetch"],
  experimental: {
    serverComponentsExternalPackages: ["payload"],
  },
};

module.exports = nextConfig;
