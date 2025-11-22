//@ts-ignore
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

import styles from './CodeBlock.module.scss'
import '../../assets/css/prism.css'
import { TickerMode, ExtendedTickerOptions } from '../Content/Content'

export const CodeBlock: React.FC<{ mode: TickerMode; options: ExtendedTickerOptions }> = ({
  mode,
  options
}) => {
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
    speedBack={${options.speedBack}}
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
