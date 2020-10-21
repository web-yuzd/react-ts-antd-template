import React, { FC, useState } from 'react'
// import { Link } from 'react-router-dom'
import { renderRoutes, RouteConfigComponentProps, RouteConfig } from 'react-router-config'
import './index.less'
import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'

import Sidebar from './sidebar'

const { Header, Sider, Content } = Layout

const Root: FC<RouteConfigComponentProps> = (props: RouteConfig) => {
  console.log(props)

  const { route } = props
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="layout">
      {/* <Sider trigger={ null } collapsible collapsed={ collapsed }>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] }>
          <Menu.Item key="1" icon={ <UserOutlined /> }>
            nav 1
            </Menu.Item>
          <Menu.Item key="2" icon={ <VideoCameraOutlined /> }>
            nav 2
            </Menu.Item>
          <Menu.Item key="3" icon={ <UploadOutlined /> }>
            nav 3
            </Menu.Item>
        </Menu>
      </Sider> */}
      <Sidebar collapsed={ collapsed } />
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
            route && route.routes && renderRoutes(route.routes)
          }
        </Content>
      </Layout>
    </Layout>

  )
}
export default Root