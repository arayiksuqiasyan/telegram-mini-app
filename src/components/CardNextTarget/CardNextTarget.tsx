'use client'
import React, { useCallback, useEffect, useState } from 'react'
import classes from './CardNextTarget.module.scss'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'

import LevelUpIcon from '/public/svg/withdraw.svg'
import ArrowRightIcon from '/public/svg/arrow-right.svg'
import { differenceInMilliseconds, formatDuration, intervalToDuration } from 'date-fns'

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
        <TimeLeft timeLeft={timeLeft} />
      </div>
      <div className={classes.wrapper}>
        <Button
          disabled={disabled}
          type={ButtonTypes.PrimaryPale}
          className="radius-8 w-100 pt-16 pb-16"
          onClick={() => onLevelUp?.()}
        >
          <div className="d-flex align-items-center gap-6">
            <span className="tx-nowrap">Level UP</span>
            <LevelUpIcon
              width={16}
              height={16}
              fill={disabled ? 'var(--color-light-transparent-1)' : 'var(--color-light-1)'}
            />
          </div>
        </Button>
      </div>
    </CardWrapper>
  )
}

export default CardNextTarget

const TimeLeft = React.memo(({ timeLeft }: { timeLeft: number }) => {
  const [endTime] = useState(timeLeft)
  const [timeLeftState, setTimeLeftState] = useState(
    differenceInMilliseconds(endTime, Date.now()) <= 0 ? 0 : differenceInMilliseconds(endTime, Date.now()),
  )

  const formatTimeWithDateFns = useCallback((milliseconds: number) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60))
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000)

    console.log(hours)
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const millisecondsLeft = differenceInMilliseconds(endTime, Date.now())
      setTimeLeftState(millisecondsLeft)
      if (millisecondsLeft <= 0) {
        setTimeLeftState(0)
        clearInterval(timer)
      } else {
        setTimeLeftState(millisecondsLeft)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, endTime])
  return (
    <div className={classes.block}>
      <span className="tx-white fz-13 tx-uppercase">Time left</span>
      <span className="tx-white fz-28">{formatTimeWithDateFns(timeLeftState)}</span>
    </div>
  )
})
TimeLeft.displayName = 'TimeLeft'
