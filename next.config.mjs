import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
};

export default withPWA({
  ...nextConfig,
  dest: 'public',
  // Add other PWA options here if needed
});
