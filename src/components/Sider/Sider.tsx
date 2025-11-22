import React from 'react'
import GHLogo from '../../assets/images/gh-logo.svg'
import NPMLogo from '../../assets/images/npm-logo.svg'
import MailLogo from '../../assets/images/mail-logo.svg'

import styles from './Sider.module.scss'

export const Sider: React.FC = () => {
  return (
    <div className={styles.sider}>
      <p className={styles.descr}>
        React <i>component</i> that transforms child elements into a <b>ticker/marquee</b>
      </p>

      {/* <CopyCode className={styles.copycode}>npm i react-smart-ticker</CopyCode>

<CopyCode className={styles.copycode}>yarn add react-smart-ticker</CopyCode> */}

      <div className={styles.links}>
        <div className={styles.link}>
          <img src={GHLogo} width={17} alt='' />
          <a href='https://github.com/eugen-k/react-smart-ticker'>GitHub</a>
        </div>
        <div className={styles.link}>
          <img src={NPMLogo} width={17} alt='' />
          <a href='https://www.npmjs.com/package/react-smart-ticker'>NPM</a>
        </div>
        <div className={styles.link}>
          <img src={MailLogo} width={17} alt='' />
          <a href='mailto:eugen.korolev@gmail.com'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Sider
