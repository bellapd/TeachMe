// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
module.exports = {
  // Your existing Next.js configuration options

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
