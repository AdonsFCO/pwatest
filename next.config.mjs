import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const pwaConfig = withPWA({
  dest: 'public',
  // Add your PWA config options here
});

export default {
  ...nextConfig,
  ...pwaConfig,
};
