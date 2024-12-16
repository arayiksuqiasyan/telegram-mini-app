'use client'
import React from 'react'
import classes from './LevelUpModal.module.scss'
import Modal, { BaseModalProps } from '@/components/UI/Modal/Modal'
import Button from '@/components/UI/Button/Button'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'
import confettiAnimation from '/public/animations/confetti.json'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

import TonIcon from '/public/svg/ton.svg'
import dynamic from 'next/dynamic'

interface ILevelUpModal extends BaseModalProps {
  onConfirm?: () => void
  level?: number
  coinCount?: string | number
}

const LevelUpModal: React.FC<ILevelUpModal> = ({ onConfirm, level, coinCount, ...rest }) => {
  return (
    <Modal {...rest} fullScreen>
      <div className={'w-100 h-100 d-flex flex-column justify-content-between'}>
        <span className="fz-24 tx-white tx-center mt-16">Congratulations!</span>
        <Lottie animationData={confettiAnimation} className={classes.confetti} loop={false} />
        <div className="d-flex flex-column align-items-center gap-16">
          <span className="fz-24 tx-white tx-center">You’re moving to</span>
          {level && <span className="fz-80 tx-white tx-center">{level} LEVEL</span>}
          <CardWrapper
            type={CardWrapperType.Secondary}
            className={'flex-row pt-8 pb-8 pl-12 pr-12 radius-10 gap-8 w-fitContent'}
          >
            <div className={classes.tonIcon}>
              <TonIcon className="mt-4" width={16} height={16} />
            </div>
            {coinCount && <span className="tx-green fz-28">{coinCount} TON</span>}
          </CardWrapper>
        </div>

        <div className="d-flex flex-column">
          <span className="tx-white fz-24 tx-center">
            You&#39;ve done a good job, keep it up and get even more rewards
          </span>
          <Button className="w-100 radius-10 pt-14 pb-14 mt-16" onClick={() => onConfirm?.()}>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default LevelUpModal
