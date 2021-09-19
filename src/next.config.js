/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/helloworld',
        destination: '/',
      },
    ]
  },
}
