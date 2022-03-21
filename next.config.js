/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL
  }
}

module.exports = nextConfig
