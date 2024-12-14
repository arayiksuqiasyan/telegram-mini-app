import { init, shareURL } from '@telegram-apps/sdk-react'
import { InviteFriends, TelegramUser } from '@/interfaces/telegram'

export class TelegramService {
  public static initTelegramAppsSdkReact() {
    try {
      init()
    } catch (error) {
      console.error('Error initializing Telegram SDK:', error)
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
