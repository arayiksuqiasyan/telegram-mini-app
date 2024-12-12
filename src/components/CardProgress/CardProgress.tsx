import React from 'react'
import classes from './CardProgress.module.scss'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'

interface ICardProgress {
  target?: string | number
  percent?: number
  conditionText?: string
}

const CardProgress: React.FC<ICardProgress> = ({ target, percent = 0, conditionText = '' }) => {
  return (
    <CardWrapper type={CardWrapperType.Secondary}>
      <div className={classes.wrapper}>
        <header className="d-flex align-items-center justify-content-between">
          <span className="tx-white tx-uppercase fz-13 tx-center">Your Progress</span>
          {target && <span className="tx-white tx-uppercase fz-13 tx-center">Target {target} TON</span>}
        </header>
        <section className={classes.progressWrapper}>
          <div className={classes.progress} style={{ width: percent + '%' }} />
          <span className={classes.progressText}>{percent}% to complete</span>
        </section>
        {!!conditionText && (
          <footer className="mt-12">
            <span className="tx-white fz-15">{conditionText}</span>
          </footer>
        )}
      </div>
    </CardWrapper>
  )
}

export default CardProgress
