/** @type {import("next").NextConfig} */

const nextConfig = {
  images: {
    domains: [],
  },
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_MANIFEST_URL: 'https://telegram-mini-app-ten-liard.vercel.app/manifest.json',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
