/**
 * 路由鉴权组件
 */
import React from 'react'
import { Redirect } from 'react-router-dom'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

type IProps = RouteConfigComponentProps

const Auth: React.FC<IProps> = (props) => {
  console.log('auth render')

  const { route, location } = props

  const isLogin = true

  if (!isLogin && location.pathname !== '/login') {
    return <Redirect to='/login' />
  }

  if (isLogin && location.pathname === '/login') {
    return <Redirect to='/' />
  }

  return (
    <>
      { route?.routes && renderRoutes(route.routes) }
    </>
  )
}

export default Auth
