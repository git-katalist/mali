/** @type {import('next').NextConfig} */
const path = require("path");
const { prefix } = "./utils/prefix";

const nextConfig = {
  reactStrictMode: true,
  basePath: prefix,
  assetPrefix: prefix,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
