import React, { FC } from 'react'

// 引入路由
import routes from './router/index'

// console.log(JSON.stringify(routes))


const App: FC = () => {
  return (
    <>
      { routes }
    </>
  )
}

export default App
