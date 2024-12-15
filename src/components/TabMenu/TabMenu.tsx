import React, { useMemo } from 'react'
import classes from './TabMenu.module.scss'
import CardWrapper, { CardWrapperType } from '@/components/UI/CardWrapper/CardWrapper'
import classNames from 'classnames'

export type TabMenuData = {
  title: string
  showBadge: boolean
  id: string | number
  badgeContent: string
}

interface ITabMenu {
  data: TabMenuData[]
  selectedData?: TabMenuData
  onSelect: (item: TabMenuData) => void
}

const TabMenu: React.FC<ITabMenu> = ({ data, selectedData, onSelect }) => {
  return (
    <CardWrapper className={'w-100 p-0 radius-4 mt-16'} type={CardWrapperType.Secondary}>
      <div className={classes.tabMenu}>
        {data.map(item => (
          <div
            key={item.id}
            style={{ width: `calc(100% / ${data.length})` }}
            className={classNames(classes.tabMenuItem, { [classes.active]: selectedData?.id === item.id })}
            onClick={() => onSelect(item)}
          >
            <span className={classes.tabMenuItemText}>{item.title}</span>
            {item.showBadge && (
              <div className={classNames('badge badge--small-round', classes.badge)}>
                <span className={classes.tabBadgeText}>{item.badgeContent}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </CardWrapper>
  )
}

export default TabMenu
