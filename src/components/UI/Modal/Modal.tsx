import React, { PropsWithChildren } from 'react'
import classes from './Modal.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
import useAppStore from '@/stores/useAppStore'

export type BaseModalProps = PropsWithChildren & {
  zIndex?: number
  isOpen: boolean
  className?: string
  classNameInner?: string
  maxWidth?: string
  onClickOutside?: () => void
  fullScreen?: boolean
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
}

const Modal: React.FC<BaseModalProps> = ({
  isOpen,
  maxWidth,
  children,
  className,
  zIndex = 9999,
  classNameInner,
  onClickOutside,
  fullScreen = false,
}) => {
  const {telegramSafeAreaViewBottom} = useAppStore()
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
          variants={backdropVariants}
          style={{ zIndex: zIndex, paddingTop: 92 - telegramSafeAreaViewBottom}}
          className={classNames(classes.modalWrapper, { [classes.fullScreen]: fullScreen }, className)}
          onClick={() => onClickOutside?.()}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            variants={modalVariants}
            className={classNames(classes.modal, classNameInner)}
            style={{ maxWidth: maxWidth }}
            onClick={event => event.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
