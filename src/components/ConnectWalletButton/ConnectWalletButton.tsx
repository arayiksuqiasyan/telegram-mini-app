'use client'
import React from 'react'
import { useTonConnectUI } from '@tonconnect/ui-react'
import { useCallback, useEffect, useState } from 'react'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import { useRouter } from 'next/navigation'
import Loader from '@/components/UI/Loader/Loader'

import ArrowRightIcon from '/public/svg/arrow-right-long.svg'

interface IConnectWalletButton {
  onClick?: () => void
}

const ConnectWalletButton: React.FC<IConnectWalletButton> = ({ onClick }) => {
  const [tonConnectUI] = useTonConnectUI()
  const [tonWalletAddress, setTonWalletAddress] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
    onClick?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tonConnectUI])

  useEffect(() => {
    const checkWalletConnection = async () => {
      console.log('tonConnectUI', tonConnectUI?.account?.address)
      if (tonConnectUI?.account?.address) {
        handleWalletConnection(tonConnectUI?.account.address)
      } else {
        // handleWalletDisconnection()
      }
    }

    void checkWalletConnection()

    const unsubscribe = tonConnectUI.onStatusChange(wallet => {
      if (wallet) {
        handleWalletConnection(wallet?.account?.address)
      } else {
        // handleWalletDisconnection()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [tonConnectUI])

  if (isLoading) {
    return <Loader text={'Add the code...'} />
  }

  return (
    <div className="w-100">
      {tonWalletAddress ? (
        <div>
          <p>Connect:{tonWalletAddress}</p>
          <Button onClick={handleWalletAddress}>DisConnect Wallet</Button>
        </div>
      ) : (
        <div>
          <Button
            className="w-100 pt-16 pb-16 radius-10 mt-12"
            type={ButtonTypes.Secondary}
            onClick={handleWalletAddress}
          >
            <div className="w-100 d-flex align-items-center justify-content-between">
              <span className="tx-white fz-17">Connect wallet</span>
              <ArrowRightIcon />
            </div>
          </Button>
        </div>
      )}
    </div>
  )
}

export default ConnectWalletButton
