import { create, Mutate, StoreApi, UseBoundStore } from 'zustand'
import { TelegramUser } from '@/interfaces/telegram'

type LevelUpModalProps = {
  level?: number
  coinCount?: string | number
}

interface IAppStore {
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
  telegramSafeAreaViewBottom: 0,
  congratulateModalProps: { coinCount: '+15.00', level: 2 }, // mock
  telegramUser: undefined,
  tonWalletAddress: undefined,
}

const useAppStore: UseBoundStore<Mutate<StoreApi<IAppStore>, []>> = create(set => ({
  ...initialValues,
  setTonWalletAddress: tonWalletAddress => set({ tonWalletAddress }),
  setTelegramUser: telegramUser => set({ telegramUser }),
  setCongratulateModalProps: congratulateModalProps => set({ congratulateModalProps }),
  setTelegramSafeAreaViewBottom: telegramSafeAreaViewBottom => set({ telegramSafeAreaViewBottom }),
}))

export default useAppStore
