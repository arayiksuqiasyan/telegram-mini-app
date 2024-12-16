'use client'
import React, { useCallback, useState } from 'react'
import classes from './OnBoarding.module.scss'
import CardReward from '@/components/CardReward/CardReward'
import { Route } from '@/enums/app'
import { Sheet } from 'react-modal-sheet'
import { useRouter } from 'next/navigation'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import { TERMS_AND_CONDITIONS } from '@/components/OnBoarding/constats'

import CloseIcon from '/public/svg/close.svg'

const OnBoarding = () => {
  const router = useRouter()
  const [isOpenTermsAndConditions, setIsOpenTermsAndConditions] = useState(false)

  const onClaim = useCallback(() => {
    router.replace(Route.Home)
  }, [router])

  return (
    <div className={classes.wrapper}>
      <header className="w-100 d-flex flex-column align-items-center">
        <span className="tx-white tx-center fz-34">Welcome to the app! You have already completed the task</span>
        <span className="tx-white tx-center fz-24 mt-16">Complete the tasks further and increase your capital</span>
      </header>

      <section className="d-flex flex-column mt-56">
        <CardReward level={1} tonCount={'11.00'} tonPrice={'$51.11'} />
        <Button className="radius-10 pt-14 pb-14 mt-16" type={ButtonTypes.Primary} onClick={onClaim}>
          Claim
        </Button>

        <div onClick={() => setIsOpenTermsAndConditions(true)} className="tx-underline tx-center tx-blue-6 mt-24">
          Terms Condition
        </div>
        <p className="tx-gray-1 fz-17 tx-center mt-2">All rights reserved. &nbsp;© 2024</p>

        <Sheet
          detent={'full-height'}
          isOpen={isOpenTermsAndConditions}
          onClose={() => setIsOpenTermsAndConditions(false)}
        >
          <Sheet.Container className="bg-gray-5 radius-top-right-32 radius-top-left-32 overflow-hidden">
            <Sheet.Content className={classes.sheetContent}>
              <div className={classes.closeIconWrapper}>
                <p className="fz-34 tx-white fw-500">{TERMS_AND_CONDITIONS.title}</p>
                <div className={classes.closeIcon} onClick={() => setIsOpenTermsAndConditions(false)}>
                  <CloseIcon width={20} height={20} />
                </div>
              </div>
              <p className="fz-24 tx-white fw-400 mt-8 pl-16 pr-16">{TERMS_AND_CONDITIONS.description}</p>
              <div className={classes.sheetWrapper}>
                <p className="fz-17 tx-white fw-400 mt-16">{TERMS_AND_CONDITIONS.paragraph1}</p>
                <p className="fz-17 tx-white fw-400 mt-16">{TERMS_AND_CONDITIONS.paragraph2}</p>
              </div>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop className="bg-dark-transparent-1" />
        </Sheet>
      </section>
    </div>
  )
}

export default OnBoarding
