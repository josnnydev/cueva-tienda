import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns:[
      {
        protocol:'http',
        hostname:'localhost',
        port:'3001',
        pathname: '/images/products/*'
      }
    ]
  },   
};

export default nextConfig;
