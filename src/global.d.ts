declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.svg?component' {
  import React from 'react'
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export { ReactComponent }
  export default src
}

declare module '*.png' {
  import React from 'react'
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}
