/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  basePath: !debug ? "/hyper" : "",
  reactStrictMode: true,
  images: {
    path: "/",
    loader: "imgix",
  },
};

module.exports = nextConfig;
