'use client'
import React, { useState } from 'react'
import classes from './Earn.module.scss'
import TabMenu, { TabMenuData } from '@/components/TabMenu/TabMenu'
import TaskList from '@/components/TaskList/TaskList'
import { ButtonTypes } from '@/components/UI/Button/Button'

const EarnPage = () => {
  const [tabMenuData] = useState<TabMenuData[]>([
    { id: 1, title: 'Item 1', showBadge: true, badgeContent: '1' },
    { id: 2, title: 'Item 2', showBadge: true, badgeContent: '2' },
    { id: 3, title: 'Item 3', showBadge: true, badgeContent: '3' },
  ])
  const [selectedData, setSelectedData] = useState<TabMenuData | undefined>(tabMenuData[0])

  return (
    <div className={classes.wrapper}>
      <p className="tx-uppercase tx-white fz-34">Earn</p>
      <p className="tx-white fz-24 mt-8">Get rewards for completing quests</p>
      <TabMenu data={tabMenuData} selectedData={selectedData} onSelect={item => setSelectedData(item)} />
      <TaskList className={'mt-16'}>
        <TaskList.Item
          buttonText={'Start'}
          description={'+ 0.1 TON'}
          title={'Register in the wallet'}
          buttonType={ButtonTypes.Primary}
        />
        <TaskList.Item
          buttonText={'Start'}
          description={'+ 0.1 TON'}
          timeLeft={1734286622467}
          buttonType={ButtonTypes.Primary}
          title={'Enable notifications  in the channel'}
        />
        <TaskList.Item
          buttonText={'Start'}
          description={'+ 0.1 TON'}
          timeLeft={1734296622467}
          buttonType={ButtonTypes.Primary}
          title={'Enable notifications  in the channel'}
        />
        <TaskList.Item
          buttonText={'Complete'}
          description={'+ 0.1 TON'}
          title={'Register in the wallet'}
          buttonType={ButtonTypes.Success}
        />{' '}
        <TaskList.Item
          disabledButton={true}
          description={'+ 0.1 TON'}
          buttonText={'Unavailable'}
          title={'Register in the wallet'}
          buttonType={ButtonTypes.Primary}
        />
      </TaskList>
    </div>
  )
}

export default EarnPage
