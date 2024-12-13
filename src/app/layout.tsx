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
        <TonConnectUIProvider manifestUrl={"https://ivory-large-asp-773.mypinata.cloud/files/bafkreigwbksx77ykjboifk6ehhbgalhxjqlm4f3q23vdandsc7nuu2kqty?X-Algorithm=PINATA1&X-Date=1734093441&X-Expires=30&X-Method=GET&X-Signature=4bd0e4309ce8a815e19b728e988d02510bdd2df1cf46487ade940e71f3a3d3a2"}>
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
