'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import classes from './HomePage.module.scss'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import CardProgress from '@/components/CardProgress/CardProgress'
import CardNextTarget from '@/components/CardNextTarget/CardNextTarget'
import CardPortfolioBalance, { BadgeStatus } from '@/components/CardPortfolioBalance/CardPortfolioBalance'
import BottomSheetVerification from '@/components/BottomSheetVerification/BottomSheetVerification'
import History from '@/components/History/History'
import { HistoryItemType } from '@/components/History/HistoryItem'
import LevelUpModal, { LevelUpModalStatus } from '@/components/LevelUpModal/LevelUpModal'
import useAppStore from '@/stores/useAppStore'
import WebApp from '@twa-dev/sdk'

import { postEvent, User } from '@telegram-apps/sdk-react'

import WalletIcon from '/public/svg/wallet.svg'
import StarIcon from '/public/svg/star.svg'

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLevelUpModal, setIsOpenLevelUpModal] = useState(false)
  const { tonWalletAddress, telegramSafeAreaViewBottom,telegramSafeAreaViewTop } = useAppStore()
  const [input, setInput] = useState('')
  const [topOffset, setTopOffset] = useState(0)
  const stickyWrapperRef = useRef<HTMLDivElement | null>(null)

  const updateStickyHeight = useCallback(() => {
    if (stickyWrapperRef.current) {
      const innerContentHeight = stickyWrapperRef.current.scrollHeight
      const clientHeight = window.innerHeight
      const bottomTabBar = 52 + telegramSafeAreaViewBottom
      const value = clientHeight - innerContentHeight - bottomTabBar - 64 - telegramSafeAreaViewTop
      if (value > 0) {
        setTopOffset(0)
      } else {
        setTopOffset(value)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stickyWrapperRef.current,telegramSafeAreaViewTop])

  useEffect(() => {
    setTimeout(() => updateStickyHeight(), 0)
  }, [updateStickyHeight, tonWalletAddress])

  return (
    <div className={classes.wrapper}>
      <div ref={stickyWrapperRef} className={classes.stickyWrapper} style={{ top: `${topOffset}px` }}>
        <Button className="fw-700 ml-16 mr-16" onClick={() => setIsOpen(true)}>
          Verification now
        </Button>

        <Button type={ButtonTypes.Success} className="pt-12 pb-12 radius-10 ml-16 mr-16">
          <div className="w-100 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-16 flex-grow-1">
              <WalletIcon />
              <span className="fz-17 tx-white">Wallet connected</span>
            </div>
            <span className="fz-17 tx-white">Tonkeeper</span>
          </div>
        </Button>

        {/*<Button type={ButtonTypes.Success} className="pt-12 pb-12 radius-10 ml-16 mr-16">*/}
        {/*  <div className="w-100 d-flex align-items-center gap-16">*/}
        {/*    <StarIcon />*/}
        {/*    <span className="fz-17 tx-white">Connect with Stars</span>*/}
        {/*  </div>*/}
        {/*</Button>*/}

        <div className={'ml-16 mr-16'}>
          <CardPortfolioBalance
            disableRefill
            disableWithdraw
            tonCount={'10.00'}
            tonPrice={`$51.11`}
            badgeStatus={BadgeStatus.Unverified}
            onWithdraw={() => console.log('onWithdraw')}
            onRefill={() => console.log('onRefill')}
          />
        </div>
        <div className={'ml-16 mr-16'}>
          <CardNextTarget
            level={1}
            tonCount={'45.00'}
            tonPrice={'$230.40'}
            timeLeft={Date.now() + 172801000}
            onLevelUp={() => setIsOpenLevelUpModal(true)}
          />
        </div>
        {tonWalletAddress && (
          <div className={'ml-16 mr-16'}>
            <CardProgress
              percent={5}
              target={'10,000.00'}
              conditionText={'There are 3 friends left to invite before moving to level 2'}
            />
          </div>
        )}
      </div>

      <div style={{ zIndex: 5 }} className={'d-flex justify-content-center align-items-center'}>
        <History maxHeight={540}>
          <History.Item
            type={HistoryItemType.Received}
            title={'Payment of the verification fee'}
            description={'Today'}
            infoTitle={'+1.00 TON'}
            infoDescription={'Received'}
          />
          <History.Item
            type={HistoryItemType.Received}
            title={'Payment of the verification fee'}
            description={'Today'}
            infoTitle={'+1.0000000 TON'}
            infoDescription={'Received'}
          />
          <History.Item
            type={HistoryItemType.Friend}
            title={'Your friend Nikita Popov has authorized in our application'}
            description={'Today'}
          />
          <History.Item
            type={HistoryItemType.Friend}
            title={'Your friend Nikita Popov has authorized in our application'}
            description={'Today'}
          />
          <History.Item
            type={HistoryItemType.Friend}
            title={'Your friend Nikita Popov has authorized in our application'}
            description={'Today'}
          />
          <History.Item
            type={HistoryItemType.Friend}
            title={'Your friend Nikita Popov has authorized in our application'}
            description={'Today'}
          />
        </History>
      </div>

      <LevelUpModal
        status={LevelUpModalStatus.InProgress}
        copyText={'example'}
        onClose={() => setIsOpenLevelUpModal(false)}
        isOpen={isOpenLevelUpModal}
        level={1}
        onPaySlot={() => {
        }}
      />

      <BottomSheetVerification isOpen={isOpen} setIsOpen={setIsOpen} />
      <div style={{ paddingBottom: `calc(var(--bottom-tab-bar-height) + 8px )` }} />
    </div>
  )
}

export default HomePage
