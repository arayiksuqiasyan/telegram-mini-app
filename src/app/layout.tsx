'use client'
import React, { PropsWithChildren } from 'react'
import './app.scss'
import dynamic from "next/dynamic";

const TonConnectUIProvider = dynamic(
  () => import('@tonconnect/ui-react').then(mod => mod.TonConnectUIProvider),
  { ssr: false }
);


interface IRootLayout extends PropsWithChildren {
  children?: React.ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <TonConnectUIProvider manifestUrl={"https://ivory-large-asp-773.mypinata.cloud/files/bafkreicdgwqarnageonctkh36u6sv6mxkpbwhsoonoppfczlkk3ucrwpdq?X-Algorithm=PINATA1&X-Date=1734021142&X-Expires=30&X-Method=GET&X-Signature=b09687985c09d68f19017c969e89f49f6c6d115c8b06eee4f614da5750a68eb9"}>{children}</TonConnectUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
