import React, { memo } from 'react'
import { LoadingComponentProps } from 'react-loadable'
import { Button, Result, Spin } from 'antd'

const PageLoading: React.FC<LoadingComponentProps> = (props) => {
  console.log(props)

  const { error, isLoading, timedOut, pastDelay } = props

  if (isLoading && pastDelay) {
    return <Spin className="spin-center" tip="Loading" />
  }

  if (error || timedOut) {
    return (
      <Result
        status="error"
        title="组件加载失败"
        subTitle="有可能当前正在发布新版本，或者您的网络出现了问题，请重试，如果多次重试失败，请联系管理员!!!"
        extra={ (
          <Button
            onClick={ () => window.location.reload() }
            type="primary"
          >
            重试
          </Button>
        ) }
      />
    )
  }

  return null
}

export default memo(PageLoading)
