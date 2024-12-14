import React, { useMemo } from 'react'
import classes from './/History.module.scss'
import classNames from 'classnames'

import UserIcon from '/public/svg/user.svg'
import ArrowDownIcon from '/public/svg/arrow-down.svg'

export enum HistoryItemType {
  Received = 'received',
  Friend = 'friend',
}

const MAPPER_ICON: { [key in HistoryItemType]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  [HistoryItemType.Received]: ArrowDownIcon,
  [HistoryItemType.Friend]: UserIcon,
}


interface IHistoryItem {
  type: HistoryItemType
  title?: string
  description?: string
  infoColor?: string
  infoTitle?: string
  infoDescription?: string
}

const HistoryItem: React.FC<IHistoryItem> = ({
  type,
  title,
  description,
  infoColor = 'var(--color-green-1)',
  infoTitle,
  infoDescription,
}) => {
  const Icon = useMemo(() => MAPPER_ICON[type], [type])
  return (
    <div className={classNames(classes.historyItem, classes[type])}>
      <div className={classes.historyItemIcon}>
        <Icon width={20} height={20} />
      </div>
      <div className={classes.historyItemSection}>
        {title && <span className="tx-white fz-17">{title}</span>}
        {description && <span className="tx-gray-1 fz-15">{description}</span>}
      </div>

      <div className={classes.historyItemInfo}>
        {infoTitle && <p style={{ color: infoColor }} className={classes.historyItemInfoText}>{infoTitle}</p>}
        {infoDescription && <p style={{ color: infoColor }} className={classes.historyItemInfoText}>{infoDescription}</p>}
      </div>
    </div>
  )
}

export default HistoryItem
