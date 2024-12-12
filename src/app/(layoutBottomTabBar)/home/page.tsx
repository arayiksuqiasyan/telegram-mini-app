import React from 'react'
import classes from './HomePage.module.scss'
import Button from '@/components/UI/Button/Button'
import CardPortfolioBalance from '@/components/CardPortfolioBalance/CardPortfolioBalance'

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <Button>Verification now</Button>
      <CardPortfolioBalance tonCount={'10.00'} tonPrice={`$51.11`} />
    </div>
  )
}

export default HomePage
