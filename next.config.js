/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
  },
  webpack: (config, options) => {
    // Handle SVG imports with SVGR
    config.module.rules.push({
      test: /\.inline\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    // Handle regular SVG imports
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      exclude: /\.inline\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
