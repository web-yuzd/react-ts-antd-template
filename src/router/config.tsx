import React from 'react'
import Loadable from 'react-loadable'
import { Redirect } from 'react-router-dom'
import PageLoading from '../components/PageLoading'
import Root from '../loyout'

import Auth from './Auth'
// import Login from '../pages/login'
// import Dashboard from '../pages/dashboard'

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
        routes: [
          {
            path: '/dashboard',
            name: '首页',
            component: Loadable({
              loader: () => import('../pages/dashboard'),
              loading: PageLoading,
              delay: 5000
            })
          },
          {
            path: '/list',
            name: '列表',
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
            component: Loadable({
              loader: () => import('../pages/users'),
              loading() {
                return <div>loading...</div>
              }
            })
          },
        ]
      }
    ]
  },
]