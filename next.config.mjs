/** @type {import("next").NextConfig} */

const nextConfig = {
  images: {
    domains: [],
  },
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_MANIFEST_URL:
      'https://ivory-large-asp-773.mypinata.cloud/files/bafkreibygeys5xajbrt5jvy7fentmzd5y7shzjvf6ypo4mfgfar7skn63q?X-Algorithm=PINATA1&X-Date=1734089975&X-Expires=30&X-Method=GET&X-Signature=730bcd4ad7d41e3f04b9eb78be34af224410f5596c37da83f7be2905d2a3475b',
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
