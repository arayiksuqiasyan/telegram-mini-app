'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import classes from './Tooltip.module.scss'
import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'

import CloseIcon from '/public/svg/close.svg'

export enum TooltipPosition {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  TopStart = 'top-start',
  TopEnd = 'top-end',
  BottomStart = 'bottom-start',
  BottomEnd = 'bottom-end',
  InsideRight = 'inside-right',
  InsideLeft = 'inside-left',
}

interface TooltipProps {
  closeIcon?: boolean
  outsideClose?: boolean
  width?: number
  children: React.ReactNode
  content: string | React.ReactNode
  position?: TooltipPosition
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  width = 275,
  outsideClose = false,
  closeIcon = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const handleOutsideClick = useCallback(
    (event: PointerEvent) => {
      if (outsideClose && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setVisible(false)
      }
    },
    [outsideClose],
  )

  useEffect(() => {
    document.addEventListener('pointerdown', handleOutsideClick)

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick)
    }
  }, [handleOutsideClick])

  return (
    <div ref={containerRef} className={classes.tooltipWrapper} onClick={() => setVisible(!visible)}>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: width + 'px' }}
            className={classNames(classes.tooltipBox, classes[position], { ['pr-32']: closeIcon })}
          >
            {content}
            {closeIcon && (
              <div className={classes.close} onClick={() => setVisible(false)}>
                <CloseIcon width={16} height={16} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip
