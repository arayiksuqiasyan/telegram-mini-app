import React, { PropsWithChildren } from 'react'
import classes from './LayoutBottomTabBar.module.scss'

interface ILayoutBottomTabBar extends PropsWithChildren {
  children?: React.ReactNode
}

const LayoutBottomTabBar: React.FC<ILayoutBottomTabBar> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>
}

export default LayoutBottomTabBar
