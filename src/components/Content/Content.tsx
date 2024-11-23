import React, { useState, ReactNode, ComponentProps } from 'react'

import styles from './Content.module.scss'

import ModeSwitcher from '../ModeSwitcher/ModeSwitcher'
import Options from '../Options/Options'
import appleLogo from '../../assets/images/apple-logo.png'
import microsoftLogo from '../../assets/images/microsoft-logo.png'
import googleLogo from '../../assets/images/google-logo.png'
import { SmartTicker, SmartTickerDraggable } from 'react-smart-ticker'
import Ticker from '../Ticker/Ticker'

// Infer the props from SmartTicker
export type TickerOptions = ComponentProps<typeof SmartTicker> &
  ComponentProps<typeof SmartTickerDraggable>

// Extend the type if necessary
export type ExtendedTickerOptions = TickerOptions & {
  draggable: boolean
  children: ReactNode | string
}

// Define your OptionsType
export type OptionsType = {
  'multi-line': ExtendedTickerOptions
  'one-line': ExtendedTickerOptions
  html: ExtendedTickerOptions
}

export type TickerMode = 'multi-line' | 'one-line' | 'html'

export const defaultOptions: OptionsType = {
  'multi-line': {
    draggable: true,
    smart: false,
    autoFill: false,
    playOnHover: true,
    pauseOnHover: false,
    infiniteScrollView: false,
    multiLine: 5,
    speed: 60,
    delay: 0,
    delayBack: 0,
    iterations: 1,
    disableSelect: false,
    rtl: false,
    children: `Multi-line text to be shown here as an example of not-fitted content`
  },
  'one-line': {
    draggable: true,
    children: `1-line text to be shown here as an example of not fitted content`,
    smart: false,
    autoFill: false,
    playOnHover: true,
    infiniteScrollView: false,
    isText: true,
    speed: 60,
    delay: 0,
    delayBack: 0,
    iterations: 'infinite',
    disableSelect: false,
    direction: 'left',
    rtl: false
  },
  html: {
    isText: false,
    draggable: true,
    children: (
      <>
        <img
          src={appleLogo as unknown as string}
          alt='Apple logo'
          className={styles['demo-logo']}
          width={'50px'}
          height={'50px'}
        />
        <img
          src={microsoftLogo as unknown as string}
          alt='Microsoft logo'
          className={styles['demo-logo']}
          width={'50px'}
          height={'50px'}
        />
        <img
          src={googleLogo as unknown as string}
          alt='Google logo'
          className={styles['demo-logo']}
          width={'50px'}
          height={'50px'}
        />
      </>
    ),
    smart: false,
    autoFill: false,
    playOnHover: false,
    pauseOnHover: true,
    infiniteScrollView: true,
    speed: 60,
    delay: 0,
    delayBack: 0,
    iterations: 'infinite',
    disableSelect: false,
    direction: 'left'
  }
}

function Content() {
  const [mode, setMode] = useState<TickerMode>('multi-line')
  const [isOptionOpen, setIsOptionOpen] = useState(false)
  const [options, setOptions] = useState(defaultOptions)

  return (
    <div className={`${styles.content} ${isOptionOpen ? styles['option-open'] : ''}`}>
      <ModeSwitcher activeMode={mode} setMode={setMode} />
      <Ticker options={options[mode]} mode={mode} />
      <Options
        mode={mode}
        isOpen={isOptionOpen}
        setOptionOpen={setIsOptionOpen}
        options={options}
        setOptions={setOptions}
      />
    </div>
  )
}

export default Content