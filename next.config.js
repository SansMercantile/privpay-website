/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  typescript: {
    // Type errors fail the build. Keep `npm run lint` green.
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
