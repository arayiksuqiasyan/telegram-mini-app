import React from 'react'
import classes from './TaskList.module.scss'
import Image, { StaticImageData } from 'next/image'
import TimeLeft from '@/components/TimeLeft/TimeLeft'
import Button, { ButtonTypes } from '@/components/UI/Button/Button'

interface ITaskListItem {
  title?: string
  timeLeft?: number
  buttonText?: string
  id?: string | number
  description?: string
  disabledButton?: boolean
  buttonType?: ButtonTypes
  url?: string | StaticImageData
  onClick?: (id?: string | number) => void
}

const TaskListItem: React.FC<ITaskListItem> = ({
  id,
  url,
  title,
  onClick,
  timeLeft,
  buttonText,
  description,
  disabledButton,
  buttonType = ButtonTypes.Primary,
}) => {
  return (
    <div className={classes.taskListItem}>
      <div className={classes.taskListItemImageWrapper}>
        {url && (
          <Image
            priority
            width={40}
            height={40}
            alt={'avatar'}
            className={classes.taskListItemImage}
            src={typeof url === 'object' ? url.src : url}
          />
        )}
      </div>
      <div className={classes.taskListItemSection}>
        {title && <span className="tx-white fz-17">{title}</span>}
        {description && <span className="tx-gray-1 fz-15">{description}</span>}
      </div>
      <div className="d-flex flex-column align-items-end gap-2 flex-shrink-0">
        {buttonText && (
          <Button disabled={disabledButton} className={'w-fitContent'} type={buttonType} onClick={() => onClick?.(id)}>
            {buttonText}
          </Button>
        )}
        {timeLeft && <TimeLeft timeLeft={timeLeft} className={'tx-white fz-15'} />}
      </div>
    </div>
  )
}

export default TaskListItem
