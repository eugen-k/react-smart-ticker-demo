import React from 'react'
import { Typography } from 'antd'
import { CopyOutlined } from '@ant-design/icons'

import styles from './CopyCode.module.scss'

const { Paragraph, Text } = Typography

function CopyCode({ children, className }) {
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

export default CopyCode
