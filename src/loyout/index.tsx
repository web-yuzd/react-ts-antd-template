import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes, RouteConfigComponentProps, RouteConfig } from 'react-router-config'


const Root: FC<RouteConfigComponentProps> = ({ route }: RouteConfig) => {
  console.log(route)


  return (
    <div>
      <h1>根组件</h1>
      <ul>
        <li><Link to="/login">denglu</Link></li>
        <li><Link to="/dashboard">shouye</Link></li>
      </ul>
      {
        route && route.routes && renderRoutes(route.routes)
      }
    </div>
  )
}
export default Root