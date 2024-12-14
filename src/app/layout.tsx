'use client'
import React, { PropsWithChildren, useEffect } from 'react'
import './app.scss'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Metadata } from 'next'
import { TelegramService } from '@/services/telegram'
const TonConnectUIProvider = dynamic(() => import('@tonconnect/ui-react').then(mod => mod.TonConnectUIProvider), {
  ssr: false,
})

const metadata: Metadata = {
  title: 'Telegram Mini App',
  description: 'Telegram Mini App',
}

interface IRootLayout extends PropsWithChildren {
  children?: React.ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  useEffect(() => {
    TelegramService.initTelegramAppsSdkReact()
  }, [])

  return (
    <html lang="en">
      <body>
        <Script src="https://telegram.org/js/telegram-web-app.js?56" strategy={'beforeInteractive'} />
        <TonConnectUIProvider manifestUrl={'https://telegram-mini-app-ten-liard.vercel.app/manifest.json'}>
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
