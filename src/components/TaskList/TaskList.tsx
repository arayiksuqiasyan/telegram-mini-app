import React from 'react'
import classes from './TaskList.module.scss'
import TaskListItem from '@/components/TaskList/TaskListItem'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'
import classNames from 'classnames'

interface ITaskList {
  className?: string
  maxHeight?: number
  children?: React.ReactNode
}

const TaskList: React.FC<ITaskList> & { Item: typeof TaskListItem } = ({ children, className, maxHeight }) => {
  return (
    <CardWrapper type={CardWrapperType.Secondary} className={classNames('p-0 radius-12', className)}>
      <div className={classNames(classes.containerWrapper, { [classes.withScroll]: maxHeight })}>
        <div className={classes.containerChildren} style={{ maxHeight }}>
          {children}
        </div>
      </div>
    </CardWrapper>
  )
}

TaskList.Item = TaskListItem

export default TaskList
