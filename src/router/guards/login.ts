/*
 * @Author: vhen
 * @Date: 2024-07-27 20:14:29
 * @LastEditTime: 2024-07-28 00:13:45
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\router\guards\login.ts
 *
 */

import { getAllPages } from '../routes'

export const needLoginPages: string[] = getAllPages('needLogin').map((page: any) => page.path)
/**
 * 创建登录守卫
 * @param url 登录后跳转的url
 * @returns
 */
export const CreateLoginGuard = (url: string) => {
  // const loginRoute = '/pages/login/index'
  const path = url.split('?')[0]
  if (needLoginPages.includes(path)) {
    // 登录校验
    return true
  }

  // const redirectRoute = `${loginRoute}?redirect=${encodeURIComponent(url)}`
  // uni.navigateTo({ url: redirectRoute })

  return true
}
