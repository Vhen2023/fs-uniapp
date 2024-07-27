/*
 * @Author: vhen
 * @Date: 2024-07-17 20:09:43
 * @LastEditTime: 2024-07-28 01:28:52
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\main.ts
 *
 */
import 'uno.css'
import uviewPlus from 'uview-plus'
import 'uview-plus/index.scss'
import { createSSRApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(store)
  app.use(router)
  return {
    app,
  }
}
