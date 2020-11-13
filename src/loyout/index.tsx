import React, { FC, useState } from 'react'
// import { Link } from 'react-router-dom'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import './index.less'
import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'

import Sidebar from './sidebar'

const { Header, Content } = Layout

const Root: FC<RouteConfigComponentProps> = (props) => {
  const { route, history, location } = props
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="layout">
      <Sidebar
        collapsed={ collapsed }
        history={ history }
        location={ location }
      />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={ { padding: 0 } }>
          { React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          }) }
        </Header>
        <Content
          className="site-layout-background"
          style={ {
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          } }
        >
          {
            route?.routes && renderRoutes(route.routes)
          }
        </Content>
      </Layout>
    </Layout>

  )
}
export default Root