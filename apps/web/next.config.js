/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'http://localhost:6006',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
