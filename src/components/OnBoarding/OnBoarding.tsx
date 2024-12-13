'use client'
import React, { useCallback } from 'react'
import classes from './OnBoarding.module.scss'
import CardReward from '@/components/CardReward/CardReward'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Route } from '@/enums/app'

const OnBoarding = () => {
  const router = useRouter()

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

        <Link href={'#'} className="tx-underline tx-center tx-blue-6 mt-24">
          Terms Condition
        </Link>
        <p className="tx-gray-1 fz-17 tx-center mt-2">All rights reserved. &nbsp;© 2024</p>
      </section>
    </div>
  )
}

export default OnBoarding
