import { create, Mutate, StoreApi, UseBoundStore } from 'zustand'
import { TelegramUser } from '@/interfaces/telegram'

interface IAppStore {
  telegramUser?: TelegramUser
  setTelegramUser: (telegramUser?: TelegramUser) => void
  tonWalletAddress?: string
  setTonWalletAddress: (tonWalletAddress?: string) => void
}

const initialValues = {
  telegramUser: undefined,
  tonWalletAddress: undefined,
}

const useAppStore: UseBoundStore<Mutate<StoreApi<IAppStore>, []>> = create(set => ({
  ...initialValues,
  setTonWalletAddress: tonWalletAddress => set({ tonWalletAddress }),
  setTelegramUser: telegramUser => set({ telegramUser }),
}))

export default useAppStore
