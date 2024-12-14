'use client'
import React, { useState } from 'react'
import classes from './HomePage.module.scss'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import CardProgress from '@/components/CardProgress/CardProgress'
import CardNextTarget from '@/components/CardNextTarget/CardNextTarget'
import CardPortfolioBalance from '@/components/CardPortfolioBalance/CardPortfolioBalance'
import BottomSheetVerification from '@/components/BottomSheetVerification/BottomSheetVerification'

// import WalletIcon from '/public/svg/wallet.svg'
// import StarIcon from '/public/svg/star.svg'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classes.wrapper}>
      <Button className="fw-700" onClick={() => setIsOpen(true)}>
        Verification now
      </Button>
      {/*<Button type={ButtonTypes.Success} className="pt-12 pb-12 radius-10">*/}
      {/*  <div className="w-100 d-flex align-items-center justify-content-between">*/}
      {/*    <div className="d-flex align-items-center gap-16 flex-grow-1">*/}
      {/*      <WalletIcon />*/}
      {/*      <span className="fz-17 tx-white">Wallet connected</span>*/}
      {/*    </div>*/}
      {/*    <span className="fz-17 tx-white">Tonkeeper</span>*/}
      {/*  </div>*/}
      {/*</Button>*/}

      {/*<Button type={ButtonTypes.Success} className="pt-12 pb-12 radius-10">*/}
      {/*  <div className="w-100 d-flex align-items-center gap-16">*/}
      {/*    <StarIcon />*/}
      {/*    <span className="fz-17 tx-white">Connect with Stars</span>*/}
      {/*  </div>*/}
      {/*</Button>*/}

      <CardPortfolioBalance
        disableRefill
        disableWithdraw
        tonCount={'10.00'}
        tonPrice={`$51.11`}
        onWithdraw={() => console.log('onWithdraw')}
        onRefill={() => console.log('onRefill')}
      />
      <CardNextTarget
        level={1}
        tonCount={'45.00'}
        tonPrice={'$230.40'}
        timeLeft={Date.now() + 172801000}
        onLevelUp={() => console.log('onLevelUp')}
      />
      <CardProgress
        target={'10,000.00'}
        percent={5}
        conditionText={'There are 3 friends left to invite before moving to level 2'}
      />

      <BottomSheetVerification isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default HomePage
