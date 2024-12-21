"use client"
import { init, shareURL, viewport, postEvent } from '@telegram-apps/sdk-react'
import { InviteFriends, TelegramUser } from '@/interfaces/telegram'
import WebApp from '@twa-dev/sdk'

export class TelegramService {
  public static initTelegramAppsSdkReact(): void {
    try {
      init()
    } catch (error) {
      console.error('Error initializing Telegram SDK:', error)
    }
  }

  public static setThemeTelegram(): void {
    try {
    postEvent('web_app_set_background_color', { color: `#0f0f0f` })
    postEvent('web_app_set_header_color', { color: `#0f0f0f` })
    } catch {}
  }

  public static viewportExpanding(): void {
    if (viewport.expand.isAvailable()) {
      viewport.expand()
    }
  }

  public static viewportBindCssVars(): void {
    if (viewport.bindCssVars.isAvailable()) {
      viewport.bindCssVars(key => `--my-prefix-${key}`)
      // Creates CSS variables like:
      // --my-prefix-height: 675px
      // --my-prefix-width: 320px
      // --my-prefix-stableHeight: 675px
    }
  }

  public static inviteFriends({ url, message }: InviteFriends): void {
    if (shareURL.isAvailable()) {
      shareURL(url, message)
    }
  }

  public static async getTelegramUser(): Promise<TelegramUser | undefined> {
    if (typeof window !== 'undefined') {
      return WebApp?.initDataUnsafe?.user
    }
    return undefined
  }
}
