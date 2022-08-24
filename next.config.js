/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',

  // Not supported for static HTML export
  experimental: {
    images: { unoptimized: true },
  }
}

module.exports = nextConfig;
