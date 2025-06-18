module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },

  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tinacmsbucket.s3.eu-north-1.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tinacms-kaunas-bucket.s3.eu-north-1.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tinacms-klaipeda-bucket.s3.eu-north-1.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tinacms-vilnius-bucket.s3.eu-north-1.amazonaws.com",
        pathname: "**",
      },
    ],
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://admin-dashboard-wawv.vercel.app/",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://admin-dashboard-wawv.vercel.app/", // Set this to your iframe's origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};
