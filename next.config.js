/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: 'https://tally.so/r/w2eB7j',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
