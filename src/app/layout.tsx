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
        <TonConnectUIProvider manifestUrl={"https://ivory-large-asp-773.mypinata.cloud/files/bafkreigwbksx77ykjboifk6ehhbgalhxjqlm4f3q23vdandsc7nuu2kqty?X-Algorithm=PINATA1&X-Date=1734093694&X-Expires=30&X-Method=GET&X-Signature=f76acd05057f52700328deff37096c8e56500dd53e74f42167135e67d6a1946d"}>
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
