const { withContentlayer } = require('next-contentlayer'); // eslint-disable-line

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
};

module.exports = withContentlayer(nextConfig);
