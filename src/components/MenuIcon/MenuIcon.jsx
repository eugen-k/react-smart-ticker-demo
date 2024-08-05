import React from 'react'

import styles from './MenuIcon.module.scss'

function MenuIcon({ isOpen, onClick: onClickHandler }) {
  return (
    <div className={`${styles['menu-icon']} ${isOpen ? styles.open : ''}`} onClick={onClickHandler}>
      <span className={`${styles.line} ${isOpen ? styles.open : ''}`} />
      <span className={`${styles.line} ${isOpen ? styles.open : ''}`} />
      <span className={`${styles.line} ${isOpen ? styles.open : ''}`} />
    </div>
  )
}

export default MenuIcon
