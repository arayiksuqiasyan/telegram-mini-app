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
        <TonConnectUIProvider manifestUrl={"https://ivory-large-asp-773.mypinata.cloud/files/bafkreiedjcvw3xbsu4kivs6optmubztrt5tytiqi37hkfxdecx4spw4t2u?X-Algorithm=PINATA1&X-Date=1734092985&X-Expires=30&X-Method=GET&X-Signature=31ce2833613c84c714c294414d2afc632ff46550e779b0cbe8d1715bcbe5d8d6"}>
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
