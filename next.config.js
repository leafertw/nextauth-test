
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turn off React StrictMode for now, as react-aria (used by Plasmic)
  // has some troubles with it. See
  // https://github.com/adobe/react-spectrum/labels/strict%20mode
  reactStrictMode: false,
  transpilePackages: ['next-auth'], // bypass bug https://github.com/nextauthjs/next-auth/discussions/9385#discussioncomment-8875108
};

module.exports = nextConfig;