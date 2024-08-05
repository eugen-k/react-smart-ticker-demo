import React from 'react'

import styles from './Layout.module.scss'
import { SmartTicker } from 'react-smart-ticker'

function Layout({ children }) {
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
          ReactSmartTicket
        </SmartTicker>
      </div>

      {children}
    </div>
  )
}

export default Layout
