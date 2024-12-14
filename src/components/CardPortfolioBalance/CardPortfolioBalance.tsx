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
import Tooltip, { TooltipPosition } from '@/components/UI/Tooltip/Tooltip'

export enum BadgeStatus {
  Unverified = 'Unverified',
  Verified = 'Verified',
}

interface ICardPortfolioBalance {
  title?: string
  onClickBadge?: () => void
  badgeStatus?: BadgeStatus
  tonCount?: number | string
  tonPrice?: number | string
  onRefill?: () => void
  disableRefill?: boolean
  onWithdraw?: () => void
  disableWithdraw?: boolean
}

const CardPortfolioBalance: React.FC<ICardPortfolioBalance> = ({
  title = 'Portfolio Balance',
  badgeStatus,
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
          {badgeStatus === BadgeStatus.Unverified && (
            <Tooltip
              outsideClose={true}
              position={TooltipPosition.InsideLeft}
              content={
                'We want to know that you are a real user, so, you need to fund your balance using cryptocurrency or telegram stars'
              }
            >
              <div className={'badge'} onClick={() => onClickBadge?.()}>
                <span className="tx-white fz-13 tx-uppercase">{badgeStatus}</span>
                <RoundExclamationIcon />
              </div>
            </Tooltip>
          )}

          {badgeStatus === BadgeStatus.Verified && (
            <div className={'badge badge--success'} onClick={() => onClickBadge?.()}>
              <span className="tx-white fz-13 tx-uppercase">{badgeStatus}</span>
            </div>
          )}
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
            className="radius-10 pt-14 pb-14"
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
            className="radius-10 pt-14 pb-14"
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
