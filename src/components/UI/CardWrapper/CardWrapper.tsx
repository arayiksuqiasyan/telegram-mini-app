import React, { PropsWithChildren } from 'react'
import classes from './CardWrapper.module.scss'
import classNames from 'classnames'

export enum CardWrapperType {
  Primary = 'primary',
  Secondary = 'secondary',
  PrimaryLinear = 'primaryLinear',
}

interface ICardWrapper extends PropsWithChildren {
  type?: CardWrapperType
  children?: React.ReactNode
  className?: string
}

const CardWrapper: React.FC<ICardWrapper> = ({ type = CardWrapperType.Primary, className, children }) => {
  return <div className={classNames(classes.wrapper, className, classes[type])}>{children}</div>
}

export default CardWrapper
