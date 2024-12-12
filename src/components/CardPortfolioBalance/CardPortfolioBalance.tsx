'use client'
import React from 'react'
import classes from './CardPortfolioBalance.module.scss'
import Image from 'next/image'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'

import ton from '/public/png/ton.png'
import RoundExclamationIcon from '/public/svg/round-exclamation-mark.svg'
import RefillIcon from '/public/svg/refill.svg'
import WithdrawIcon from '/public/svg/withdraw.svg'

interface iCardPortfolioBalance {
  title?: string
  badgeTitle?: string
  onClickBadge?: () => void
  tonCount?: number | string
  tonPrice?: number | string
  onRefill?: () => void
  disableRefill?: boolean
  onWithdraw?: () => void
  disableWithdraw?: boolean
}

const CardPortfolioBalance: React.FC<iCardPortfolioBalance> = ({
  title = 'Portfolio Balance',
  badgeTitle = 'Unverified',
  onClickBadge,
  tonCount = '',
  tonPrice = '',
  disableWithdraw = false,
  disableRefill = false,
  onRefill,
  onWithdraw,
}) => {
  return (
    <CardWrapper type={CardWrapperType.Secondary}>
      <div className={classes.wrapper}>
        <div className="d-flex align-items-center justify-content-between">
          <span className="tx-white fz-13 tx-uppercase">{title}</span>
          <div className={classes.badge} onClick={() => onClickBadge?.()}>
            <span className="tx-white fz-13 tx-uppercase">{badgeTitle}</span>
            <RoundExclamationIcon />
          </div>
        </div>
        <div className="d-flex align-items-center mt-8 gap-12">
          <Image src={ton} alt={'ton'} width={48} height={48} priority />
          <div>
            <p className="tx-white fz-28">
              {tonCount}&nbsp;
              <span className="tx-gray-2">TON</span>
            </p>
            <p className="tx-white fz-13">{tonPrice}</p>
          </div>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center mt-12 gap-8">
          <Button
            className="radius-10"
            type={ButtonTypes.Secondary}
            disabled={disableRefill}
            onClick={() => onRefill?.()}
            block
          >
            <div className="d-flex align-items-center gap-6">
              <RefillIcon
                width={16}
                height={16}
                fill={disableRefill ? 'var(--color-light-transparent-1)' : 'var(--color-light-1)'}
              />
              <span>Refill</span>
            </div>
          </Button>
          <Button
            className="radius-10"
            type={ButtonTypes.Secondary}
            disabled={disableWithdraw}
            onClick={() => onWithdraw?.()}
            block
          >
            <div className="d-flex align-items-center gap-6">
              <WithdrawIcon
                width={16}
                height={16}
                fill={disableWithdraw ? 'var(--color-light-transparent-1)' : 'var(--color-light-1)'}
              />
              <span>Withdraw</span>
            </div>
          </Button>
        </div>
      </div>
    </CardWrapper>
  )
}

export default CardPortfolioBalance
