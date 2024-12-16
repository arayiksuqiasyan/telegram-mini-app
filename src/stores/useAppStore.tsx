import { create, Mutate, StoreApi, UseBoundStore } from 'zustand'
import { TelegramUser } from '@/interfaces/telegram'

type LevelUpModalProps = {
  level?: number
  coinCount?: string | number
}

interface IAppStore {
  levelUpModalProps?: LevelUpModalProps
  setLevelUpModalProps: (levelUpModalProps?: LevelUpModalProps) => void
  telegramUser?: TelegramUser
  setTelegramUser: (telegramUser?: TelegramUser) => void
  tonWalletAddress?: string
  setTonWalletAddress: (tonWalletAddress?: string) => void
}

const initialValues = {
  levelUpModalProps: undefined,
  telegramUser: undefined,
  tonWalletAddress: undefined,
}

const useAppStore: UseBoundStore<Mutate<StoreApi<IAppStore>, []>> = create(set => ({
  ...initialValues,
  setTonWalletAddress: tonWalletAddress => set({ tonWalletAddress }),
  setTelegramUser: telegramUser => set({ telegramUser }),
  setLevelUpModalProps: levelUpModalProps => set({ levelUpModalProps }),
}))

export default useAppStore
