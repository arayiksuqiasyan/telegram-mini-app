/** @type {import("next").NextConfig} */

const nextConfig = {
  images: {
    domains: [],
  },
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_MANIFEST_URL:
      'https://ivory-large-asp-773.mypinata.cloud/files/bafkreicdgwqarnageonctkh36u6sv6mxkpbwhsoonoppfczlkk3ucrwpdq?X-Algorithm=PINATA1&X-Date=1734021142&X-Expires=30&X-Method=GET&X-Signature=b09687985c09d68f19017c969e89f49f6c6d115c8b06eee4f614da5750a68eb9',
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
