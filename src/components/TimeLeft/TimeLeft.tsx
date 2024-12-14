'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { differenceInMilliseconds } from 'date-fns'

interface ITimeLeft {
  timeLeft: number
  className?: string
  style?: React.CSSProperties
}

const TimeLeft: React.FC<ITimeLeft> = ({ timeLeft, className, style }) => {
  const [endTime] = useState(timeLeft)
  const [timeLeftState, setTimeLeftState] = useState(
    differenceInMilliseconds(endTime, Date.now()) <= 0 ? 0 : differenceInMilliseconds(endTime, Date.now()),
  )

  const formatTimeWithDateFns = useCallback((milliseconds: number) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60))
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000)

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
    <span className={className} style={style}>
      {formatTimeWithDateFns(timeLeftState)}
    </span>
  )
}

export default React.memo(TimeLeft)
