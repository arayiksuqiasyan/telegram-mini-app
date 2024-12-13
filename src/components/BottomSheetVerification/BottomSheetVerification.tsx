'use client'
import React, { useCallback } from 'react'
import { Sheet } from 'react-modal-sheet'

import CloseIcon from '/public/svg/close.svg'
import ArrowRightIcon from '/public/svg/arrow-right-long.svg'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import ConnectWalletButton from '@/components/ConnectWalletButton/ConnectWalletButton'

interface IBottomSheetVerification {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const BottomSheetVerification: React.FC<IBottomSheetVerification> = ({ isOpen, setIsOpen }) => {
  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return (
    <Sheet isOpen={isOpen} onClose={onClose} detent={'content-height'}>
      <Sheet.Container className="bg-gray-5 radius-top-right-32 radius-top-left-32">
        <Sheet.Content>
          <div className="d-flex flex-column mt-16 pl-16 pr-16">
            <div className="d-flex align-items-center justify-content-between">
              <span className="fz-34 tx-white fw-400">Verification now</span>
              <div className="d-flex align-items-center justify-content-center" onClick={onClose}>
                <CloseIcon width={16} height={16} />
              </div>
            </div>

            <ConnectWalletButton  onClick={onClose}/>

            <Button className="pt-16 pb-16 radius-10 mt-8 mb-32" type={ButtonTypes.Secondary}>
              <div className="w-100 d-flex align-items-center justify-content-between">
                <span className="tx-white fz-17">Telegram stars</span>
                <ArrowRightIcon />
              </div>
            </Button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop className="bg-dark-transparent-1" />
    </Sheet>
  )
}

export default BottomSheetVerification
