import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/products',
        destination: 'https://shop.baolab.au/collections/all',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: 'https://shop.baolab.au/products/:path*',
        permanent: true,
      },
      {
        source: '/compatibility',
        destination: 'https://shop.baolab.au/pages/compatibility',
        permanent: true,
      },
      {
        source: '/shipping',
        destination: 'https://shop.baolab.au/pages/shipping',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://shop.baolab.au/pages/contact',
        permanent: true,
      },
      {
        source: '/about',
        destination: 'https://shop.baolab.au/pages/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
