'use client'
import React from 'react'
import classes from './HomePage.module.scss'
import Button from '@/components/UI/Button/Button'
import CardPortfolioBalance from '@/components/CardPortfolioBalance/CardPortfolioBalance'
import CardNextTarget from '@/components/CardNextTarget/CardNextTarget'
import CardProgress from '@/components/CardProgress/CardProgress'

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <Button>Verification now</Button>
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
        timeLeft={'48:33:00'}
        onLevelUp={() => console.log('onLevelUp')}
      />
      <CardProgress
        target={'10,000.00'}
        percent={5}
        conditionText={'There are 3 friends left to invite before moving to level 2'}
      />
    </div>
  )
}

export default HomePage
