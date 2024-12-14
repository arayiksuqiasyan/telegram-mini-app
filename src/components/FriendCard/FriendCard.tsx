import React from 'react'
import classes from './FriendCard.module.scss'
import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'

export enum FriendCardStatus {
  Received = 'Received',
  NotAuthorized = 'Not authorized',
}

const MAP_STATUS_COLOR: { [key in FriendCardStatus]: string } = {
  [FriendCardStatus.Received]: 'var(--color-green-1)',
  [FriendCardStatus.NotAuthorized]: 'var(--color-gray-1)',
}

interface IFriendCard {
  url?: string | StaticImageData
  name?: string
  date?: string
  coinInfo?: string
  status?: FriendCardStatus
}

const FriendCard: React.FC<IFriendCard> = ({ url, name, date, coinInfo, status }) => {
  return (
    <CardWrapper type={CardWrapperType.Secondary} className={classNames(classes.container, 'radius-16')}>
      <div className={classes.wrapper}>
        <div className={classes.userImageWrapper}>
          {url && (
            <Image
              priority
              width={40}
              height={40}
              alt={'avatar'}
              className={classes.userImage}
              src={typeof url === 'object' ? url.src : url}
            />
          )}
        </div>

        <div className={classes.userInfo}>
          {name && <span className="tx-white fz-17">{name}</span>}
          {date && <span className="tx-gray-1 fz-15">{date}</span>}
        </div>

        <div className={classes.coinInfo}>
          {coinInfo && <span className={classNames('tx-white fz-17', classes.coinInfoText)}>{coinInfo}</span>}
          {status && (
            <span className={classNames('fz-15', classes.coinInfoText)} style={{ color: MAP_STATUS_COLOR[status] }}>
              {status}
            </span>
          )}
        </div>
      </div>
    </CardWrapper>
  )
}

export default FriendCard
