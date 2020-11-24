import React, { FC, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { RouteConfigComponentProps } from 'react-router-config'

import { Layout, Menu } from 'antd'
import logo from '../../assets/logo.svg'
import { asyncRoutes } from '../../router/config'

const { Sider } = Layout
const { Item, SubMenu } = Menu

interface IRouteConfig {
  history: RouteConfigComponentProps['history'],
  location: RouteConfigComponentProps['location']
}
interface IProps extends IRouteConfig {
  collapsed: boolean
}

interface IMenuItem {
  path: string;
  name: string;
  icon: React.ReactNode
}
interface ISiderbarItem {
  path: string;
  name: string;
  icon: React.ReactNode;
  routes?: IMenuItem[]
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
        {
          asyncRoutes.map((menu: ISiderbarItem) => {
            if (menu.routes) {
              return (
                <SubMenu
                  key={ menu.path }
                  title={ menu.name }
                  icon={ menu.icon }
                >
                  {
                    menu.routes.map((menuItem: IMenuItem) => {
                      return (
                        <Item
                          key={ menuItem.path }
                          icon={ menuItem.icon }
                        >
                          { menuItem.name }
                        </Item>
                      )
                    })
                  }
                </SubMenu>
              )
            }
            return (
              <Item
                key={ menu.path }
                icon={ menu.icon }
              >
                { menu.name }
              </Item>
            )
          })
        }
      </Menu>
    </Sider>
  )
}

export default Siderbar