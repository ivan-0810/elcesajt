/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      },
      experimental: {
        serverActions: true,
      },
    images: {
        domains: [
          "fmu-web.b-cdn.net",
        ],
      },
};

export default nextConfig;
