'use client'
import React, { PropsWithChildren } from 'react'
import './app.scss'
import dynamic from 'next/dynamic'

const TonConnectUIProvider = dynamic(() => import('@tonconnect/ui-react').then(mod => mod.TonConnectUIProvider), {
  ssr: false,
})

interface IRootLayout extends PropsWithChildren {
  children?: React.ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <TonConnectUIProvider manifestUrl={process.env.NEXT_PUBLIC_MANIFEST_URL}>{children}</TonConnectUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
