/** @type {import('next').NextConfig} */
const nextConfig = {};

const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true
})

export default nextConfig;
