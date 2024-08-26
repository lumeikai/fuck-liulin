/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: "incremental",
  },
  api: {
    bodyParser: true, // 确保bodyParser被启用
  },
};

export default nextConfig;
