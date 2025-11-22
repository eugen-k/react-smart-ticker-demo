import React, { ReactNode } from 'react'

import styles from './Layout.module.scss'
import { SmartTicker } from 'react-smart-ticker'

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles['bg-logo']}>
        <SmartTicker
          style={{ paddingRight: '50px' }}
          speed={10}
          pauseOnHover
          smart={false}
          infiniteScrollView
          disableSelect
        >
          ReactSmartTicker
        </SmartTicker>
      </div>

      {children}
    </div>
  )
}

export default Layout
