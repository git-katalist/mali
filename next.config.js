/** @type {import('next').NextConfig} */
const { prefix } = "./utils/prefix";

const nextConfig = {
  reactStrictMode: true,
  basePath: prefix,
  assetPrefix: prefix,
};

module.exports = nextConfig;
