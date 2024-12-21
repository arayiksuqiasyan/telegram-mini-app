import { init, shareURL, viewport } from '@telegram-apps/sdk-react'
import { InviteFriends, TelegramUser } from '@/interfaces/telegram'

export class TelegramService {
  public static initTelegramAppsSdkReact() {
    try {
      init()
    } catch (error) {
      console.error('Error initializing Telegram SDK:', error)
    }
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
      const WebApp = (await import('@twa-dev/sdk')).default
      WebApp.ready()
      return WebApp?.initDataUnsafe?.user
    }
    return undefined
  }
}
