import React from 'react'

import styles from './Ticker.module.scss'
import { SmartTicker, SmartTickerDraggable } from 'react-smart-ticker'

function Ticker({ mode, options }) {
  console.log('mode', mode)
  console.log('multiLine', options.multiLine)
  console.log('options.direction', options.direction)
  return (
    <div className={`${styles.ticker} ${styles[mode]} ${styles[options.direction]}`}>
      {options.draggable && (
        <SmartTickerDraggable
          smart={options.smart}
          isText={options.isText}
          autoFill={options.autoFill}
          multiLine={options.multiLine}
          infiniteScrollView={options.infiniteScrollView}
          playOnHover={options.playOnHover}
          pauseOnHover={options.pauseOnHover}
          speed={options.speed}
          delay={options.delay}
          delayBack={options.delayBack}
          iterations={options.iterations}
          disableSelect={options.disableSelect}
          direction={options.direction}
          rtl={options.rtl}
        >
          {options.children}
        </SmartTickerDraggable>
      )}

      {!options.draggable && (
        <SmartTicker
          smart={options.smart}
          isText={options.isText}
          autoFill={options.autoFill}
          multiLine={options.multiLine}
          infiniteScrollView={options.infiniteScrollView}
          playOnHover={options.playOnHover}
          playOnClick={options.playOnClick}
          pauseOnHover={options.pauseOnHover}
          pauseOnClick={options.pauseOnClick}
          speed={options.speed}
          delay={options.delay}
          iterations={options.iterations}
          disableSelect={options.disableSelect}
          direction={options.direction}
          rtl={options.rtl}
        >
          {options.children}
        </SmartTicker>
      )}
    </div>
  )
}

export default Ticker
