import React, { ReactNode } from 'react'
import Loadable from 'react-loadable'
import { Redirect } from 'react-router-dom'
import Root from '../loyout'

import Login from '../pages/login'
// import Dashboard from '../pages/dashboard'

export default [
  {
    path: '/',
    exact: true,
    render: (): ReactNode => <Redirect to="/dashboard" />
  },
  {
    component: Root,
    routes: [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/dashboard',
        component: Loadable({
          loader: () => import('../pages/dashboard'),
          loading() {
            return <div>loading...</div>
          }
        })
      },
    ]
  }
]