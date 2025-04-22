/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turn off React StrictMode for now, as react-aria (used by Plasmic)
  // has some troubles with it. See
  // https://github.com/adobe/react-spectrum/labels/strict%20mode
  reactStrictMode: false,

  // Removing x-powered-by-nextjs message for security
  poweredByHeader: false,

  // bypass bug https://github.com/nextauthjs/next-auth/discussions/9385#discussioncomment-8875108
  transpilePackages: ['next-auth'],

  async headers() {
    return [
      {
        source: '/:path*', // for all paths
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Permissions-Policy',
            value: "camera=(), geolocation=(self), microphone=()"
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            //HSTS
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ],
      },
    ]
  },

};

module.exports = nextConfig;