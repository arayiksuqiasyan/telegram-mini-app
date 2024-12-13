'use client'
import React, { MouseEvent } from 'react'
import classes from './Button.module.scss'
import classNames from 'classnames'

export enum ButtonTypes {
  Primary = 'primary',
  PrimaryPale = 'primaryPale',
  Secondary = 'secondary',
  Success = 'success',
}

export type Props = {
  block?: boolean
  children: React.ReactElement | string
  type?: ButtonTypes
  disabled?: boolean
  className?: string
  onClick?: (e: MouseEvent) => void
  onMouseUp?: (e: MouseEvent) => void
}

const Button: React.FC<Props> = ({
  block = false,
  children,
  disabled,
  onClick,
  onMouseUp,
  className,
  type = ButtonTypes.Primary,
}) => {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={event => onClick?.(event)}
      onMouseUp={event => onMouseUp?.(event)}
      className={classNames(classes.button, classes[type], { [classes.isBlock]: block }, className)}
    >
      {children}
    </button>
  )
}

export default Button
