import React from 'react'
import { Tabs as OGTabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

import styles from './Tabs.module.scss'

interface TabProps {
  tabNames: string[]
  tabItems: React.ReactElement[]
}

const Tabs: React.FC<TabProps> = ({ tabNames, tabItems }) => {
  if (tabNames.length !== tabItems.length) {
    throw new Error('Different amount of tabNames and tabItems provided.')
  }

  return (
    <OGTabs>
      <TabList className={styles.nav}>
        {tabNames.map(name => (
          <Tab key={name} className={styles.tab}>
            {name}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabItems.map((item, i) => (
          <TabPanel key={i}>{item}</TabPanel>
        ))}
      </TabPanels>
    </OGTabs>
  )
}

export default Tabs
