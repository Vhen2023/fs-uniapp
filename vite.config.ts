/*
 * @Author: vhen
 * @Date: 2024-07-17 20:09:43
 * @LastEditTime: 2024-07-19 22:04:41
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\vite.config.ts
 *
 */
import dayjs from 'dayjs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './build/vite/plugins'
import pkg from './package.json'

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
}
// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const env = loadEnv(mode, resolve(process.cwd(), 'env'))
  const { VITE_APP_PORT, VITE_DELETE_CONSOLE, VITE_APP_BASE_URL, VITE_APP_PROXY_PREFIX, VITE_SHOW_SOURCEMAP } = env
  return defineConfig({
    envDir: './env', // 自定义env目录
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: '',
        },
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    plugins: createVitePlugins(env, command === 'build'),
    server: {
      host: '0.0.0.0',
      hmr: true,
      port: Number.parseInt(VITE_APP_PORT, 10),
      // H5端需要配置代理
      proxy: VITE_APP_BASE_URL
        ? {
            [VITE_APP_PROXY_PREFIX]: {
              target: VITE_APP_BASE_URL,
              changeOrigin: true,
              rewrite: (path) => path.replace(new RegExp(`^${VITE_APP_PROXY_PREFIX}`), ''),
            },
          }
        : undefined,
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    build: {
      sourcemap: VITE_SHOW_SOURCEMAP === 'true', // 默认是false
      target: 'es6',
      // 开发环境不用压缩
      minify: mode === 'development' ? false : 'terser',
      terserOptions: {
        compress: {
          drop_console: VITE_DELETE_CONSOLE === 'true',
          drop_debugger: true,
        },
      },
    },
  })
}
