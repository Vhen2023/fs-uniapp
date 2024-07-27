/*
 * @Author: vhen
 * @Date: 2024-07-25 21:00:49
 * @LastEditTime: 2024-07-28 00:23:00
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\router\index.ts
 *
 */

import { CreateLoginGuard } from './guards/login'
/**
 * 路由拦截器
 */
const routeInterceptor = {
  invoke({ url }: { url: string }) {
    // 登录守卫
    CreateLoginGuard(url)
  },
}

export default {
  install() {
    uni.addInterceptor('navigateTo', routeInterceptor)
    uni.addInterceptor('reLaunch', routeInterceptor)
    uni.addInterceptor('redirectTo', routeInterceptor)
  },
}
