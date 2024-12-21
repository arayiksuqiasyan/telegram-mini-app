'use client'
import React, { useCallback, useState } from 'react'
import classes from './Friends.module.scss'
import Button from '@/components/UI/Button/Button'
import { motion } from 'framer-motion'
import { TelegramService } from '@/services/telegram'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'
import FriendCard, { FriendCardStatus } from '@/components/FriendCard/FriendCard'

import CopyIcon from '/public/svg/copy.svg'
import TickIcon from '/public/svg/tick.svg'

import manky from '/public/manky.png'
import useAppStore from '@/stores/useAppStore'

const FriendsPage = () => {
  const [isCopied, setIsCopied] = useState(false)
  const { telegramSafeAreaViewBottom } = useAppStore()

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
    <div className={classes.wrapper}>
      <p className="tx-uppercase tx-white fz-34">Friends</p>
      <p className="tx-white fz-24 mt-8">Invite more friends to get more coins to your account</p>

      <CardWrapper className={'pt-4 pb-4 radius-4 mt-16'} type={CardWrapperType.Secondary}>
        <div className="w-100 d-flex align-items-center justify-content-between">
          <span className="tx-white fz15">Total</span>
          <span className="tx-white fz15">1 users</span>
        </div>
      </CardWrapper>

      <section className={classes.friends}>
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <FriendCard
              key={i}
              url={manky}
              name={'Maria Malkova'}
              date={'November, 13'}
              coinInfo={'+10.00 TON'}
              status={FriendCardStatus.Received}
            />
          ))}
      </section>

      <footer className={classes.footer}>
        <Button className="w-100 pt-14 pb-14 radius-10 fw-700" onClick={onInviteFriends}>
          Invite Friends
        </Button>
        <div className={classes.copy} onClick={() => onCopy('copy clipboard')}>
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
      <div style={{ paddingBottom: `calc(var(--bottom-tab-bar-height) + ${telegramSafeAreaViewBottom}px - 8px)` }} />
    </div>
  )
}

export default FriendsPage
