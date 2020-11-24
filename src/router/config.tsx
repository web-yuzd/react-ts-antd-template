import React from 'react'
import Loadable from 'react-loadable'
import { Redirect } from 'react-router-dom'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import PageLoading from '../components/PageLoading'
import Root from '../loyout'

import Auth from './Auth'
// import Login from '../pages/login'
// import Dashboard from '../pages/dashboard'
export const asyncRoutes = [
  {
    path: '/dashboard',
    name: '首页',
    icon: <UserOutlined />,
    component: Loadable({
      loader: () => import('../pages/dashboard'),
      loading: PageLoading,
      delay: 5000
    })
  },
  {
    path: '/list',
    name: '列表',
    icon: <VideoCameraOutlined />,
    component: Loadable({
      loader: () => import('../pages/list'),
      loading() {
        return <div>loading...</div>
      }
    })
  },
  {
    path: '/users',
    name: '用户管理',
    icon: <UploadOutlined />,
    component: Loadable({
      loader: () => import('../pages/users'),
      loading() {
        return <div>loading...</div>
      }
    })
  },
]

export default [
  {
    component: Auth,
    routes: [
      {
        path: '/login',
        component: Loadable({
          loader: () => import('../pages/login'),
          loading: PageLoading,
          timeout: 1000,
          delay: 200
        })
      },
      {
        path: '/404',
        component: Loadable({
          loader: () => import('../components/NotFound'),
          loading: PageLoading
        })
      },
      {
        component: Root,
        routes: asyncRoutes
      }
    ]
  },
]