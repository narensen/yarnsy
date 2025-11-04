/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
      protocol: 'https',
      hostname: 'unsplash.com',
      pathname: '/photos/**',
    },
    ],
  },
};

export default nextConfig;
