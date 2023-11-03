/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "cdn1.iconfinder.com",
        pathname: "/data/icons/**",
      },
      {
        protocol: "https",
        port: "",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
