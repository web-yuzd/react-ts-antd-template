import React, { FC } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'


const Root: FC<RouteConfigComponentProps> = ({ route }) => {
  return (
    <div>
      <h1>根组件</h1>
      {
        route && route.routes && renderRoutes(route.routes)
      }
    </div>
  )
}
export default Root