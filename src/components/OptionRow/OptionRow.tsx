import React, { ReactNode } from 'react'
import { Tooltip } from 'antd'
import { InfoCircleFilled } from '@ant-design/icons'

import styles from './OptionRow.module.scss'

export type OptiorRowLayout = 'horizontal' | 'vertical'

export const OptionRow: React.FC<{
  label: ReactNode
  layout: OptiorRowLayout
  tooltip?: ReactNode
  children: ReactNode
}> = ({ label, layout = 'horizontal', tooltip, children }) => {
  return (
    <div className={`${styles['option-row']} ${styles[layout]}`}>
      {layout === 'vertical' && label && (
        <div className={`${styles.label} ${styles[layout]}`}>
          {label}
          {tooltip && (
            <Tooltip title={tooltip} className={styles.tooltip}>
              <InfoCircleFilled />
            </Tooltip>
          )}
        </div>
      )}

      {children}

      {layout === 'horizontal' && (
        <div className={`${styles.label} ${styles[layout]}`}>
          {label}
          {tooltip && (
            <Tooltip title={tooltip} className={styles.tooltip}>
              <InfoCircleFilled />
            </Tooltip>
          )}
        </div>
      )}
    </div>
  )
}

export default OptionRow
