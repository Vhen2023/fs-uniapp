/*
 * @Author: vhen
 * @Date: 2024-07-19 01:14:57
 * @LastEditTime: 2024-07-28 14:12:20
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\types\global.d.ts
 *
 */
// eslint-disable-next-line prettier/prettier
export {}
declare global {
  declare type Recordable<T = any> = Record<string, T>
  declare type Indexable<T = any> = {
    [key: string]: T
  }
  declare interface ViteEnv {
    VITE_UNI_APPID: string
    VITE_WX_APPID: string
    VITE_APP_PORT: number
  }
}
