'use client'
import React, { PropsWithChildren, useEffect, useLayoutEffect } from 'react'
import './app.scss'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Metadata } from 'next'
import { TelegramService } from '@/services/telegram'
import useAppStore from '@/stores/useAppStore'
import CongratulateModal from '@/components/CongratulateModal/CongratulateModal'
import { viewport } from '@telegram-apps/sdk-react'

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
  const { congratulateModalProps, setCongratulateModalProps, setTelegramSafeAreaViewBottom } = useAppStore()

  useEffect(() => {
    TelegramService.setThemeTelegram()
    TelegramService.initTelegramAppsSdkReact()
    TelegramService.viewportExpanding()
    TelegramService.viewportBindCssVars()
  }, [])

  const getSafe = async () => {
    if (viewport.mount.isAvailable()) {
      viewport.mount()
      while (true) {
        console.log('viewport?.isMounting()',viewport?.isMounting())
        if (viewport?.isMounting()) {
          setTelegramSafeAreaViewBottom(viewport.safeAreaInsetBottom())
          break
        }
        await new Promise(resolve => setTimeout(resolve, 100))
      }
    }
  }

  useEffect(() => {
    void getSafe()
  }, [])


  return (
    <html lang="en">
    <body style={{ paddingTop: 92 }}>
    <Script src="https://telegram.org/js/telegram-web-app.js?56" strategy={'beforeInteractive'} />
    <TonConnectUIProvider manifestUrl={'https://telegram-mini-app-ten-liard.vercel.app/manifest.json'}>
      {children}
      <CongratulateModal
        onConfirm={() => setCongratulateModalProps(undefined)}
        isOpen={!!congratulateModalProps}
        level={congratulateModalProps?.level}
        coinCount={congratulateModalProps?.coinCount}
      />
    </TonConnectUIProvider>
    </body>
    </html>
  )
}

export default RootLayout
