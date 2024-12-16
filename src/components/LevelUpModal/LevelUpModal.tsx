'use client'
import React, { useCallback, useState } from 'react'
import classes from './LevelUpModal.module.scss'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import { motion } from 'framer-motion'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'
import Modal, { BaseModalProps } from '@/components/UI/Modal/Modal'

import CopyIcon from '/public/svg/copy.svg'
import TickIcon from '/public/svg/tick.svg'
import CloseIcon from '/public/svg/close.svg'
import classNames from 'classnames'
import { TelegramService } from '@/services/telegram'

export enum LevelUpModalStatus {
  InProgress = 'progress',
}

interface ILevelUpModal extends BaseModalProps {
  level?: number
  copyText?: string
  coinCount?: string | number
  onClose?: () => void
  onPaySlot?: () => void
  status?: LevelUpModalStatus
  invitedFriendsCount?: string | number
}

const LevelUpModal: React.FC<ILevelUpModal> = ({
  level,
  onClose,
  onPaySlot,
  coinCount,
  copyText = '',
  status,
  invitedFriendsCount = 0,
  ...rest
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const onCopy = useCallback((text: string) => {
    if (!text) {
      return
    }
    void navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }, [])

  const onInviteFriends = useCallback(() => {
    TelegramService.inviteFriends({
      url: 'https://telegram-mini-app-ten-liard.vercel.app/',
      message: 'Telegram Mini App',
    })
  }, [])

  return (
    <Modal {...rest} zIndex={9} classNameInner={'h-100 p-0'} className={'h-100'} fullScreen>
      <div className={'w-100 h-100 d-flex flex-column overflow-auto pl-16 pr-16 mt-16'}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-8">
            <span className="tx-white fw-500 fz-34">TASK</span>
            {level && <div className="badge w-fitContent tx-white mb-auto">{level} Level</div>}
          </div>
          <div className={classes.closeIcon} onClick={() => onClose?.()}>
            <CloseIcon width={20} height={20} />
          </div>
        </div>
        <CardWrapper className="mt-16">
          <p className="tx-white fz-17">
            If you complete the level conditions on time, you will receive a reward in the form of:
          </p>
          <p className="tx-white fz-48 mt-12">
            45.00 <span className="tx-blue-3">TON</span>
          </p>
        </CardWrapper>
        <CardWrapper className="mt-12" type={CardWrapperType.Secondary}>
          <div className="w-100 d-flex align-items-center justify-content-between">
            <span className="tx-white fz-13">Conditions for transition</span>
            {status === LevelUpModalStatus.InProgress && <div className="badge tx-white fz-13">In progress</div>}
          </div>
          <span className="tx-white fz-24 mt-8">Invite 1 000 friends</span>
          <div className={classNames(classes.darkBlock, 'mt-12')}>
            <span className="tx-white fz-17">You&#39;ve already invited</span>
            <p className="tx-white fz-48 mt-8">
              {invitedFriendsCount} <span className="tx-gray-1">of 1000</span>
            </p>
          </div>

          <span className="tx-white fz-17 mt-12">
            If you don&#39;t have the opportunity to invite more people, then pay the $10 fee for them
          </span>

          <Button
            className="w-100 pt-14 pb-14 radius-10 mt-16 fw-700"
            type={ButtonTypes.Secondary}
            onClick={() => onPaySlot?.()}
          >
            Pay Slots
          </Button>
        </CardWrapper>
        <footer className={classes.footer}>
          <Button className="w-100 pt-14 pb-14 radius-10 fw-700" onClick={() => onInviteFriends?.()}>
            Invite Friends
          </Button>
          <div className={classes.copy} onClick={() => onCopy(copyText)}>
            <motion.div
              className={'mt-4'}
              key={isCopied ? 'copied' : 'copy'}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isCopied ? <TickIcon width={15} height={15} /> : <CopyIcon width={24} height={24} />}
            </motion.div>
          </div>
        </footer>
        <div style={{ paddingBottom: 124 }} />
      </div>
    </Modal>
  )
}

export default React.memo(LevelUpModal)
