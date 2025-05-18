import React, { RefObject } from 'react'

import styles from './Ticker.module.scss'
import { SmartTicker } from 'react-smart-ticker'
import { SmartTickerDraggable } from 'react-smart-ticker'
import { ExtendedTickerOptions, SmartTickerHandle, TickerMode } from '../Content/Content'

const Ticker: React.FC<{
  mode: TickerMode
  options: ExtendedTickerOptions
  tickerRef: RefObject<SmartTickerHandle>
}> = ({ mode, options, tickerRef }) => {
  return (
    <div className={`${styles.ticker} ${styles[mode]} ${styles[options.direction!]}`}>
      {!options.css && (
        <SmartTickerDraggable
          smart={options.smart}
          isText={options.isText}
          autoFill={options.autoFill}
          multiLine={options.multiLine}
          infiniteScrollView={options.infiniteScrollView}
          playOnHover={options.playOnHover}
          pauseOnHover={options.pauseOnHover}
          speed={options.speed}
          speedBack={options.speedBack}
          delay={options.delay}
          delayBack={options.delayBack}
          iterations={options.iterations}
          disableSelect={options.disableSelect}
          direction={options.direction}
          rtl={options.rtl}
          disableDragging={!options.draggable}
          forwardedRef={tickerRef}
        >
          {options.children}
        </SmartTickerDraggable>
      )}

      {options.css && (
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
          forwardedRef={tickerRef}
        >
          {options.children}
        </SmartTicker>
      )}
    </div>
  )
}

export default Ticker
