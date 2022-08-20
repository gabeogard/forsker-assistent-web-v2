/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Not supported for static HTML export
  experimental: {
    images: { unoptimized: true },
  }
}

module.exports = nextConfig;
