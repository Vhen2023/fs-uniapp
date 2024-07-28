/*
 * @Author: vhen
 * @Date: 2024-07-28 13:56:45
 * @LastEditTime: 2024-07-28 15:46:12
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\locales\index.ts
 *
 */
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh'

export const i18n = createI18n({
  locale: 'zh',
  legacy: false, // 修复组件引入i18n时vite脚手架报错的问题
  // globalInjection: true, // 全局注册 $t
  messages: {
    en,
    zh,
  },
})

export function setupI18n(app: App) {
  app.use(i18n)
}
