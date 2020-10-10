import React from 'react'
import Loadable from 'react-loadable'
import Root from '../loyout'

import Login from '../pages/login'
// import Dashboard from '../pages/dashboard'

export default [
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