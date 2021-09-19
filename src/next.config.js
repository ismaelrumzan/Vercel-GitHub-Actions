/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/test-not2',
        destination: '/',
      },
    ]
  },
}
