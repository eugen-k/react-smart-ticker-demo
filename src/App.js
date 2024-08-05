import { SmartTickerDraggable, SmartTicker } from 'react-smart-ticker'

import styles from './App.module.scss'
import Sider from './components/Sider/Sider'
import Layout from './components/Layout/Layout'
import Content from './components/Content/Content'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4d4d4d'
        },
        components: {
          Input: {
            activeBorderColor: '#4d4d4d',
            hoverBorderColor: '#bcbcbc'
          },
          Segmented: {
            trackBg: '#d9d9d9'
          }
        }
      }}
    >
      <Layout>
        <Sider />
        <Content />
      </Layout>
    </ConfigProvider>
  )
}

export default App
