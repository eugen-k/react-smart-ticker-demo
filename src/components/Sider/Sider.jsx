import React from 'react'
import { ReactComponent as GHLogo } from '../../assets/images/gh-logo.svg'
import { ReactComponent as NPMLogo } from '../../assets/images/npm-logo.svg'
import { ReactComponent as MailLogo } from '../../assets/images/mail-logo.svg'

import styles from './Sider.module.scss'

function Sider({ children }) {
  return (
    <div className={styles.sider}>
      <p className={styles.descr}>
        React <b>component</b> that transforms child elements into a ticker/marquee
      </p>

      {/* <CopyCode className={styles.copycode}>npm i react-smart-ticker</CopyCode>

<CopyCode className={styles.copycode}>yarn add react-smart-ticker</CopyCode> */}

      <div className={styles.links}>
        <div className={styles.link}>
          <GHLogo />
          <a href='https://github.com/eugen-k/react-smart-ticker'>GitHub</a>
        </div>
        <div className={styles.link}>
          <NPMLogo />
          <a href='https://www.npmjs.com/package/react-smart-ticker'>NPM</a>
        </div>
        <div className={styles.link}>
          <MailLogo />
          <a href='mailto:eugen.korolev@gmail.com'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Sider
