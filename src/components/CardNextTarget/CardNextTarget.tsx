'use client'
import React from 'react'
import classes from './CardNextTarget.module.scss'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'

import LevelUpIcon from '/public/svg/withdraw.svg'
import ArrowRightIcon from '/public/svg/arrow-right.svg'
import TimeLeft from '@/components/TimeLeft/TimeLeft'

interface ICardNextTarget {
  tonCount?: string | number
  tonPrice?: string | number
  timeLeft?: number
  onLevelUp?: () => void
  level?: string | number
  disabled?: boolean
}

const CardNextTarget: React.FC<ICardNextTarget> = ({
  level,
  tonCount = 0,
  tonPrice = 0,
  timeLeft = 0,
  onLevelUp,
  disabled = false,
}) => {
  return (
    <CardWrapper type={CardWrapperType.PrimaryLinear}>
      <div className="d-flex align-items-center justify-content-between mb-8 overflow-hidden">
        <span className="tx-white tx-uppercase fz-13">Next target</span>
        <ArrowRightIcon width={10} height={10} />
        <div className={classes.badge}>
          <span className="tx-white fz-13">{level}</span>
          <span className="tx-white tx-uppercase fz-13">Level</span>
        </div>
      </div>
      <div className="d-flex align-items-center gap-8">
        <div className={classes.block}>
          <span className="tx-white fz-13 tx-uppercase">TON</span>
          <span className="tx-white fz-28">{tonCount}</span>
          <span className="tx-white fz-13">{tonPrice}</span>
        </div>
        <div className={classes.block}>
          <span className="tx-white fz-13 tx-uppercase">Time left</span>
          <TimeLeft timeLeft={timeLeft} className={'tx-white fz-28'} />
        </div>
      </div>
      <div className={classes.wrapper}>
        <Button
          disabled={disabled}
          type={ButtonTypes.PrimaryPale}
          className="radius-8 w-100 pt-16 pb-16"
          onClick={() => onLevelUp?.()}
        >
          <div className="d-flex align-items-center gap-6">
            <LevelUpIcon
              width={20}
              height={20}
              fill={disabled ? 'var(--color-light-transparent-1)' : 'var(--color-light-1)'}
            />
            <span className="tx-nowrap fw-700 fz-17">Level UP</span>
          </div>
        </Button>
      </div>
    </CardWrapper>
  )
}

export default CardNextTarget
