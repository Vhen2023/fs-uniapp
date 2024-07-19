/*
 * @Author: vhen
 * @Date: 2024-07-17 20:09:43
 * @LastEditTime: 2024-07-19 16:13:26
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\main.ts
 *
 */
import 'uno.css'
import { createSSRApp } from 'vue'
import App from './App.vue'
import store from './store'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app,
  }
}
