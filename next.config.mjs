import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    // Add other PWA options here if needed
  }
};

export default withPWA(nextConfig);
