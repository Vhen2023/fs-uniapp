/*
 * @Author: vhen
 * @Date: 2024-07-19 20:56:20
 * @LastEditTime: 2024-07-20 00:24:41
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\http\index.ts
 *
 */
import { handleAuthError, handleNetworkError } from '@/http/checkStatus'
import Request from 'luch-request'

const createRequest = (options = {}) => {
  return new Request({
    ...options,
  })
}

// 创建http实例对象
const http = createRequest({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
  timeout: 60000,
  // #endif
})
// 网络请求
http.interceptors.request.use(
  (config) => {
    config.header = {
      'content-type': 'application/json',
      token: uni.getStorageSync('token') || '',
    }
    // 业务逻辑
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
// 请求拦截
http.interceptors.response.use(
  (response: any) => {
    if (response.statusCode === 200) {
      // 业务逻辑
      return response.data
    } else {
      // 业务逻辑
      handleAuthError(response.data.code)
    }
  },
  (error) => {
    handleNetworkError(error.data.statusCode)
    return Promise.reject(error)
  },
)

export default http
