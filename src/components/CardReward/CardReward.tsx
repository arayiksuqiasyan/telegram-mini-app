import React from 'react'
import classes from './CardReward.module.scss'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'

import TonIcon from '/public/svg/ton.svg'

interface ICardReward {
  level?: number
  tonCount?: string | number
  tonPrice?: string | number
}

const CardReward: React.FC<ICardReward> = ({ tonCount = 0, tonPrice = '', level }) => {
  return (
    <CardWrapper type={CardWrapperType.Primary}>
      <div className="d-flex flex-column align-items-center">
        <div className={classes.tonIcon}>
          <TonIcon className="mt-4" width={22} height={21} />
        </div>
        <div className="d-flex align-items-center gap-8 mt-8">
          <span className="tx-white fz-16">your reward!</span>
          {level && (
            <div className="badge badge--primaryLight">
              <span className="tx-white tx-uppercase fz-13">{level} LEVEL</span>
            </div>
          )}
        </div>
        <p className="fz-56 tx-white mt-12">
          {tonCount}
          <span className="ml-4 tx-blue-3">TON</span>
        </p>
        <p className="tx-white tx-center fz-13">{tonPrice}</p>
      </div>
    </CardWrapper>
  )
}

export default CardReward
