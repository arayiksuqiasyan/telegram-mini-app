'use client'
import { useTonConnectUI } from '@tonconnect/ui-react'
import { useCallback, useEffect, useState } from 'react'
import Button from '@/components/UI/Button/Button'
import { Route } from '@/enums/app'
import { useRouter } from 'next/navigation'

export default function Layout() {
  const router = useRouter()
  const [tonConnectUI] = useTonConnectUI()
  const [tonWalletAddress, setTonWalletAddress] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleWalletConnection = useCallback((address: string) => {
    setTonWalletAddress(address)
    console.log('Wallet Connect Successfully')
    setIsLoading(false)
  }, [])

  const handleWalletDisconnection = useCallback(() => {
    setTonWalletAddress(null)
    console.log('Wallet Disconnect Successfully')
    setIsLoading(false)
  }, [])

  const handleWalletAddress = useCallback(async () => {
    if (tonConnectUI.connected) {
      setIsLoading(true)
      await tonConnectUI.disconnect()
    } else {
      await tonConnectUI.openModal()
    }
  }, [tonConnectUI])

  useEffect(() => {
    const checkWalletConnection = async () => {
      console.log(tonConnectUI)
      if (tonConnectUI?.account?.address) {
        handleWalletConnection(tonConnectUI?.account.address)
      } else {
        handleWalletDisconnection()
      }
    }

    void checkWalletConnection()

    const unsubscribe = tonConnectUI.onStatusChange(wallet => {
      if (wallet) {
        handleWalletConnection(wallet?.account?.address)
      } else {
        handleWalletDisconnection()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [tonConnectUI, handleWalletConnection, handleWalletDisconnection])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {tonWalletAddress ? (
        <div>
          <p>Connect:{tonWalletAddress}</p>
          <Button onClick={handleWalletAddress}>DisConnect Wallet</Button>
        </div>
      ) : (
        <div>
          <Button onClick={handleWalletAddress}>Connect TON Wallet</Button>
        </div>
      )}
      <Button onClick={() => router.push(Route.Home)}>Redirect Home</Button>
    </div>
  )
}
