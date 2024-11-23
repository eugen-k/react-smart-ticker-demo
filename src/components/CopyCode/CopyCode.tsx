import React from 'react'
import { Typography } from 'antd'
import { CopyOutlined } from '@ant-design/icons'

import styles from './CopyCode.module.scss'

const { Text } = Typography

export const CopyCode: React.FC<{ children: string; className: string }> = ({
  children,
  className
}) => {
  return (
    <div className={styles['copy-code'] + ' ' + className}>
      {children}
      <Text
        style={{ marginTop: '5px' }}
        copyable={{
          text: children,
          icon: <CopyOutlined />
        }}
      />
    </div>
  )
}
