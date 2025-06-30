let userConfig = undefined;

try {
  // Try to import ESM first
  userConfig = await import('./user-next.config.mjs');
} catch (e) {
  try {
    // Fallback to CJS import
    userConfig = await import("./user-next.config");
  } catch (innerError) {
    // Ignore error if no custom config is found
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  output: 'export',
  trailingSlash: true,
};

// Merge user custom config (if any)
if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
