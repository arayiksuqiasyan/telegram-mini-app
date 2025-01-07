'use client'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import './app.scss'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Metadata } from 'next'
import { TelegramService } from '@/services/telegram'
import useAppStore from '@/stores/useAppStore'
import CongratulateModal from '@/components/CongratulateModal/CongratulateModal'
import { request, viewport } from '@telegram-apps/sdk-react'
import Button from '@/components/UI/Button/Button'
import WebApp from '@twa-dev/sdk'

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
    // TelegramService.setThemeTelegram()
    TelegramService.initTelegramAppsSdkReact()
    // TelegramService.viewportExpanding()
    // TelegramService.viewportBindCssVars()
  }, [])

  const onLoadHandler = () => {
    if (viewport.mount.isAvailable()) {
      if (!viewport.isMounting()) {
        viewport.mount()
      }
      setTimeout(() => setTelegramSafeAreaViewBottom(viewport.safeAreaInsetBottom()), 0)
    }
  }

  const [input, setInput] = useState('')

  return (
    <html lang="en" onLoad={onLoadHandler}>
    <body>
    <Script src="https://telegram.org/js/telegram-web-app.js?56" strategy={'beforeInteractive'} />
    <TonConnectUIProvider manifestUrl={'https://telegram-mini-app-ten-liard.vercel.app/manifest.json'}>
      {/*{children}*/}
      {/*<CongratulateModal*/}
      {/*  onConfirm={() => setCongratulateModalProps(undefined)}*/}
      {/*  isOpen={!!congratulateModalProps}*/}
      {/*  level={congratulateModalProps?.level}*/}
      {/*  coinCount={congratulateModalProps?.coinCount}*/}
      {/*/>*/}
    </TonConnectUIProvider>
    <input style={{ height: 32 }} type="text" onChange={event => setInput(event.target.value)} />
    <Button
      onClick={() => {
        if (typeof window !== 'undefined') {
          WebApp?.shareMessage(input, param => {
            console.log('param', param)
          })
        }
      }}
    >
      SendMessage
    </Button>
    </body>
    </html>
  )
}

export default RootLayout
