const { withFrameworkConfig } = require('./framework/common/config');

/** @type {import('next').NextConfig} */
const nextConfig = withFrameworkConfig({
  framework: {
    name: 'shopify_local',
  },
  reactStrictMode: true,
});

console.log(nextConfig);

module.exports = nextConfig;
