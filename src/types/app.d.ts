/*
 * @Author: vhen
 * @Date: 2024-07-20 15:46:29
 * @LastEditTime: 2024-07-20 16:00:17
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\types\app.d.ts
 *
 */

export type LocaleType = 'zh' | 'en'

export interface Result {
  code: number
  message: string
  success?: boolean
}
export interface ResultData<T = any> extends Result {
  data: T
}
