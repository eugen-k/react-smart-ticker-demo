import React, { useEffect, useState } from 'react'
import Prism from 'prismjs'

import styles from './CodeBlock.module.scss'
import '../../assets/css/prism.css'

require('prismjs/components/prism-jsx')

const defaultOptions = {
  'multi-line': {
    draggable: true,
    children: `I’m a multi-line text to be shown here as an example`,
    smart: false,
    autoFill: false,
    playOnHover: false,
    infiniteScrollView: true,
    multiLine: 5,
    speed: 60,
    delay: 0,
    delayBack: 0,
    iterations: 'infinite',
    disableSelect: false
  },
  'one-line': {
    draggable: true,
    children: `I’m a multi-line text to be shown here as an example`,
    smart: false,
    autoFill: false,
    playOnHover: true,
    infiniteScrollView: false,
    isText: true,
    speed: 60,
    delay: 0,
    delayBack: 0,
    iterations: 'infinite',
    disableSelect: false
  },
  html: {
    draggable: true,
    children: `I’m a multi-line text to be shown here as an example`,
    smart: false,
    autoFill: false,
    playOnHover: false,
    infiniteScrollView: true,
    multiLine: 5,
    speed: 60,
    delay: 0,
    delayBack: 0,
    iterations: 'infinite',
    disableSelect: false
  }
}

function CodeBlock({ mode, options }) {
  /* useEffect(() => {
    Prism.highlightAll()
  }, []) */

  const code =
    `import { SmartTicker${options.draggable ? 'Draggable' : ''} } from 'react-smart-ticker'

<SmartTicker${options.draggable ? 'Draggable' : ''}
    smart={${options.smart}}
    ` +
    (options.isText !== undefined
      ? `isText={${options.isText}}
    `
      : ``) +
    `autoFill={${options.autoFill}}
    ` +
    (options.multiLine !== undefined
      ? `multiLine={${options.multiLine}}
    `
      : ``) +
    (options.playOnHover !== undefined
      ? `playOnHover={${options.playOnHover}}
    `
      : ``) +
    (options.pauseOnHover !== undefined
      ? `pauseOnHover={${options.pauseOnHover}}
    `
      : ``) +
    (options.playOnClick !== undefined
      ? `playOnClick={${options.playOnClick}}
    `
      : ``) +
    (options.pauseOnClick !== undefined
      ? `pauseOnClick={${options.pauseOnClick}}
    `
      : ``) +
    (options.direction !== undefined
      ? `direction={"${options.direction}"}
    `
      : ``) +
    (options.rtl !== undefined
      ? `rtl={${options.rtl}}
    `
      : ``) +
    `infiniteScrollView={${options.infiniteScrollView}}
    speed={${options.speed}}
    delay={${options.delay}}
    delayBack={${options.delayBack}}
    iterations={${Number(options.iterations) || `"infinite"`}}
    disableSelect={${options.disableSelect}}
>
  ${
    mode !== 'html'
      ? options.children
      : `<img src="..." width={"50px"} height={"50px"} />
  <img src="..." width={"50px"} height={"50px"} />
  <img src="..." width={"50px"} height={"50px"} />`
  }
</SmartTicker${options.draggable ? 'Draggable' : ''}>`

  const html = Prism.highlight(code, Prism.languages.jsx, 'jsx')

  return (
    <div className={`${styles['code-block']}`}>
      <pre className={`language-jsx ${styles.code}`} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default CodeBlock
