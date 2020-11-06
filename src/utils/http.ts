/**
 * axios请求封装
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios'

const baseURL = '/'
const Service: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
})

Service.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

Service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // config.headers['Authorization'] = ''
    return config
  },
  (error: Error) => {
    // console.log(error)
    return Promise.reject(error)
  },
)

Service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: Error) => {
    // console.log(error)
    return Promise.reject(error)
  },
)

interface ResponseData {
  code: number
  data: Record<string, unknown> | string | unknown[]
  msg: string
}

const Http = function (config: AxiosRequestConfig, silent = false) {
  return Service(config)
    .then((response) => {
      return response.data
    })
    .then((o: ResponseData) => {
      // o.code = parseInt(o.code, 10)
      // o.data = o.data || ''
      if (o.code !== 0) {
        // 页面错误提示
        if (!silent) {
          console.log(`[${o.code}] ${o.msg}`)
        }
      }

      return o
    })
}

Http.get = function (url: string, params: any, silent = false) {
  const cfg = { url, method: 'get' as Method, params }
  return Http(cfg, silent)
}

Http.post = function (url: string, data: Record<string, unknown> = {}, silent = false) {
  const cfg = { url, method: 'post' as Method, data }
  return Http(cfg, silent)
}

export default Http
