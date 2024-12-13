import React, { PropsWithChildren } from 'react'
import classes from './LayoutBottomTabBar.module.scss'
import BottomTabBar from '@/components/BottomTabBar/BottomTabBar'

interface ILayoutBottomTabBar extends PropsWithChildren {
  children?: React.ReactNode
}

const LayoutBottomTabBar: React.FC<ILayoutBottomTabBar> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      {children}
      <div className={classes.bottomTabBarPadding}/>
      <BottomTabBar />
    </div>
  )
}

export default LayoutBottomTabBar
