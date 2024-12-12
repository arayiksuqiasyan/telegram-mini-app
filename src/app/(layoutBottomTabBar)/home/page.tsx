'use client'
import React from 'react'
import classes from './HomePage.module.scss'
import Button from '@/components/UI/Button/Button'
import CardPortfolioBalance from '@/components/CardPortfolioBalance/CardPortfolioBalance'
import CardNextTarget from '@/components/CardNextTarget/CardNextTarget'

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
      <CardNextTarget level={1} tonCount={'45.00'} tonPrice={'$230.40'} timeLeft={'48:33:00'} />
    </div>
  )
}

export default HomePage
