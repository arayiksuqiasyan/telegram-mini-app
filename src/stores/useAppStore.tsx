import { create, Mutate, StoreApi, UseBoundStore } from 'zustand'
import { TelegramUser } from '@/interfaces/telegram'

type LevelUpModalProps = {
  level?: number
  coinCount?: string | number
}

interface IAppStore {
  telegramSafeAreaViewTop: number
  setTelegramSafeAreaViewTop: (telegramSafeAreaViewTop: number) => void
  telegramSafeAreaViewBottom: number
  setTelegramSafeAreaViewBottom: (telegramSafeAreaViewBottom: number) => void
  congratulateModalProps?: LevelUpModalProps
  setCongratulateModalProps: (levelUpModalProps?: LevelUpModalProps) => void
  telegramUser?: TelegramUser
  setTelegramUser: (telegramUser?: TelegramUser) => void
  tonWalletAddress?: string
  setTonWalletAddress: (tonWalletAddress?: string) => void
}

const initialValues = {
  telegramSafeAreaViewTop: 54,
  telegramSafeAreaViewBottom: 34,
  congratulateModalProps: { coinCount: '+15.00', level: 2 }, // mock
  telegramUser: undefined,
  tonWalletAddress: undefined,
}

const useAppStore: UseBoundStore<Mutate<StoreApi<IAppStore>, []>> = create(set => ({
  ...initialValues,
  setTonWalletAddress: tonWalletAddress => set({ tonWalletAddress }),
  setTelegramUser: telegramUser => set({ telegramUser }),
  setTelegramSafeAreaViewTop: telegramSafeAreaViewTop => set({ telegramSafeAreaViewTop }),
  setCongratulateModalProps: congratulateModalProps => set({ congratulateModalProps }),
  setTelegramSafeAreaViewBottom: telegramSafeAreaViewBottom => set({ telegramSafeAreaViewBottom }),
}))

export default useAppStore
