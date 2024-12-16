import React, { PropsWithChildren } from 'react'
import classes from './Modal.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'

export type BaseModalProps = PropsWithChildren & {
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
  classNameInner,
  onClickOutside,
  fullScreen = false,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
          variants={backdropVariants}
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
