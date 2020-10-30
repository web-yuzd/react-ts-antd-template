import React, { FC, useState, useCallback } from 'react'
// import { renderRoutes, RouteConfigComponentProps, RouteConfig } from 'react-router-config'

import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

interface IProps {
  collapsed: boolean
}
const Siderbar: FC<IProps> = (props) => {
  console.log(props)

  const { collapsed } = props

  const handleMenuItemClick = (prop: any) => {
    console.log(prop)

  }

  return (
    <Sider trigger={ null } collapsible collapsed={ collapsed }>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={ ['1'] }
        onClick={ handleMenuItemClick }
      >
        <Menu.Item key="1" icon={ <UserOutlined /> }>
          nav 1
        </Menu.Item>
        <Menu.Item key="/login" icon={ <VideoCameraOutlined /> }>
          nav 2
            </Menu.Item>
        <Menu.Item key="/dashboard" icon={ <UploadOutlined /> }>
          nav 3
            </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Siderbar