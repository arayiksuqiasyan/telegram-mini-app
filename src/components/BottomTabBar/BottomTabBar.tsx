'use client'
import React from 'react'
import classes from './BottomTabBar.module.scss'
import Link from 'next/link'
import { Route } from '@/enums/app'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

import HomeIcon from '/public/svg/menu/home.svg'
import FriendsIcon from '/public/svg/menu/friends.svg'
import EarnIcon from '/public/svg/menu/earn.svg'

const MENU_OPTIONS = [
  { id: 1, icon: <HomeIcon />, href: Route.Home },
  { id: 2, icon: <FriendsIcon />, href: Route.Friends },
  { id: 3, icon: <EarnIcon />, href: Route.Earn },
]

const BottomTabBar = () => {
  const pathname = usePathname()
  return (
    <div className={classes.bottomTabBar}>
      {MENU_OPTIONS.map(item => {
        const { id, icon, href } = item
        return (
          <Link
            key={id}
            href={href}
            className={classNames(classes.tabBarOption, {
              [classes.tabBarOptionActive]: pathname === href,
            })}
          >
            {icon}
          </Link>
        )
      })}
    </div>
  )
}

export default BottomTabBar
