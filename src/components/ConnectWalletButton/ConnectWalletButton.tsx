'use client'
import React from 'react'
import { useTonConnectUI } from '@tonconnect/ui-react'
import { useCallback } from 'react'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'

import ArrowRightIcon from '/public/svg/arrow-right-long.svg'
import useAppStore from '@/stores/useAppStore'

interface IConnectWalletButton {
  onClick?: () => void
}

const ConnectWalletButton: React.FC<IConnectWalletButton> = ({ onClick }) => {
  const [tonConnectUI] = useTonConnectUI()
  const { tonWalletAddress } = useAppStore()

  const handleWalletAddress = useCallback(async () => {
    if (tonConnectUI.connected) {
      await tonConnectUI.disconnect()
    } else {
      await tonConnectUI.openModal()
    }
    onClick?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tonConnectUI])

  return (
    <div className="w-100">
      <Button className="w-100 pt-16 pb-16 radius-10 mt-12" type={ButtonTypes.Secondary} onClick={handleWalletAddress}>
        <div className="w-100 d-flex align-items-center justify-content-between">
          <span className="tx-white fz-17">{tonWalletAddress ? 'Disconnect wallet' : 'Connect wallet'}</span>
          <ArrowRightIcon />
        </div>
      </Button>
    </div>
  )
}

export default ConnectWalletButton
