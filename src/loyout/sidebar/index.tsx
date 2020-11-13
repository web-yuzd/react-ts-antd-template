import React, { FC, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { RouteConfigComponentProps } from 'react-router-config'

import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import logo from '../../assets/logo.svg'

const { Sider } = Layout

interface IRouteConfig {
  history: RouteConfigComponentProps['history'],
  location: RouteConfigComponentProps['location']
}
interface IProps extends IRouteConfig {
  collapsed: boolean
}
const Siderbar: FC<IProps> = (props) => {

  const [keys, setKeys] = useState({
    currentSideMenu: '',
    currentOpenSubs: []
  })

  const { collapsed, location, history } = props

  const handleMenuItemClick = useCallback(({ key }: any) => {
    console.log(key)
    setKeys({
      ...keys,
      currentSideMenu: key
    })
    history.push(key)

  }, [history, keys])

  return (
    <Sider trigger={ null } collapsible collapsed={ collapsed }>
      <div className="sider-logo">
        <Link to="/">
          <img alt="logo" src={ logo } />
          { !collapsed && <span>Ant Design Pro</span> }
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={ [keys.currentSideMenu] }
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