import React from 'react'

import styles from './ModeSwitcher.module.scss'

function ModeSwitcher({ activeMode, setMode }) {
  return (
    <div className={styles['mode-switcher']}>
      <div
        className={`${styles['mode']} ${activeMode === 'multi-line' ? styles.active : ''}`}
        onClick={() => setMode('multi-line')}
      >
        Multi-line
      </div>
      <div
        className={`${styles['mode']} ${activeMode === 'one-line' ? styles.active : ''}`}
        onClick={() => setMode('one-line')}
      >
        1-line
      </div>
      <div
        className={`${styles['mode']} ${activeMode === 'html' ? styles.active : ''}`}
        onClick={() => setMode('html')}
      >
        HTML
      </div>
    </div>
  )
}

export default ModeSwitcher
