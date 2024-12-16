'use client'
import React, { PropsWithChildren, useEffect } from 'react'
import './app.scss'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Metadata } from 'next'
import { TelegramService } from '@/services/telegram'
import LevelUpModal from '@/components/LevelUpModal/LevelUpModal'
import useAppStore from '@/stores/useAppStore'

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
  const { levelUpModalProps, setLevelUpModalProps } = useAppStore()
  useEffect(() => {
    TelegramService.initTelegramAppsSdkReact()
  }, [])

  return (
    <html lang="en">
      <body>
        <Script src="https://telegram.org/js/telegram-web-app.js?56" strategy={'beforeInteractive'} />
        <TonConnectUIProvider manifestUrl={'https://telegram-mini-app-ten-liard.vercel.app/manifest.json'}>
          {children}
          <LevelUpModal
            onConfirm={() => setLevelUpModalProps(undefined)}
            isOpen={!!levelUpModalProps}
            level={levelUpModalProps?.level}
            coinCount={levelUpModalProps?.coinCount}
          />
        </TonConnectUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
