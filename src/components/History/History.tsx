import React, { ReactNode } from 'react'
import classes from './History.module.scss'
import HistoryItem from '@/components/History/HistoryItem'
import classNames from 'classnames'

interface HistoryProps {
  maxHeight?: number
  className?: string
  children?: ReactNode
}

const History: React.FC<HistoryProps> & { Item: typeof HistoryItem } = ({ className, children, maxHeight }) => {
  return (
    <div className={classNames(classes.wrapper, className)}>
      <span className="tx-uppercase mb-8 tx-gray-1 pl-16">HISTORY</span>
      <div className={classNames(classes.containerWrapper, { [classes.withScroll]: maxHeight })}>
        <div className={classes.containerChildren} style={{ maxHeight }}>
          {children}
        </div>
      </div>
    </div>
  )
}

History.Item = HistoryItem

export default History
