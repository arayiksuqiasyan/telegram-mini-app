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
        <TonConnectUIProvider manifestUrl={'https://telegram-mini-app-ten-liard.vercel.app/manifest.json'}>
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
