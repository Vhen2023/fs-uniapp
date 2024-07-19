/*
 * @Author: vhen
 * @Date: 2024-07-19 23:01:49
 * @LastEditTime: 2024-07-19 23:02:17
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\http\checkStatus.ts
 *
 */
/**
 * 处理http网络错误
 * @param errStatus
 */
export function handleNetworkError(errStatus: number) {
  let errMessage = '无法连接到服务器!'
  switch (errStatus) {
    case 400:
      errMessage = '错误的请求'
      break
    case 401:
      errMessage = '未授权，请重新登录'
      break
    case 403:
      errMessage = '拒绝访问'
      break
    case 404:
      errMessage = '请求错误,未找到该资源'
      break
    case 405:
      errMessage = '请求方法未允许'
      break
    case 408:
      errMessage = '请求超时'
      break
    case 500:
      errMessage = '服务器端出错'
      break
    case 501:
      errMessage = '网络未实现'
      break
    case 502:
      errMessage = '网络错误'
      break
    case 503:
      errMessage = '服务不可用'
      break
    case 504:
      errMessage = '网络超时'
      break
    case 505:
      errMessage = 'http版本不支持该请求'
      break
    default:
      errMessage = `其他连接错误 --${errStatus}`
  }

  return errMessage
}

/**
 *  处理业务错误
 * @param status
 * @returns
 */
export function handleAuthError(status: number) {
  const authErrMap: any = {
    10010: '登录失效，需要重新登录', // token 失效
    10011: '您太久没登录，请重新登录~', // token 过期
    10012: '账户未绑定角色，请联系管理员绑定角色',
    10013: '该用户未注册，请联系管理员注册用户',
  }
  if (Reflect.has(authErrMap, status)) {
    // 业务错误逻辑
    return authErrMap[status]
  }
}
