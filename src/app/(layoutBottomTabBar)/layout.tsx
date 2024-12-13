'use client'
import React, { PropsWithChildren, useCallback, useEffect } from 'react'
import classes from './LayoutBottomTabBar.module.scss'
import BottomTabBar from '@/components/BottomTabBar/BottomTabBar'
import { useTonConnectUI } from '@tonconnect/ui-react'
import useAppStore from '@/stores/useAppStore'

interface ILayoutBottomTabBar extends PropsWithChildren {
  children?: React.ReactNode
}

const LayoutBottomTabBar: React.FC<ILayoutBottomTabBar> = ({ children }) => {
  const [tonConnectUI] = useTonConnectUI()
  const { setTonWalletAddress } = useAppStore()

  const handleWalletConnection = useCallback(
    (address: string) => {
      setTonWalletAddress(address)
      console.log('Wallet Connect Successfully')
    },
    [setTonWalletAddress],
  )

  const handleWalletDisconnection = useCallback(() => {
    setTonWalletAddress(undefined)
    console.log('Wallet Disconnect Successfully')
  }, [setTonWalletAddress])

  useEffect(() => {
    const checkWalletConnection = async () => {
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
  }, [handleWalletConnection, handleWalletDisconnection, tonConnectUI])

  return (
    <div className={classes.wrapper}>
      {children}
      <div className={classes.bottomTabBarPadding} />
      <BottomTabBar />
    </div>
  )
}

export default LayoutBottomTabBar
