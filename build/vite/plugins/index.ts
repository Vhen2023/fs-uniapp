/*
 * @Author: vhen
 * @Date: 2024-07-19 01:10:53
 * @LastEditTime: 2024-07-19 12:48:35
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\build\vite\plugins\index.ts
 *
 */

import uni from '@dcloudio/vite-plugin-uni'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import eslint from 'vite-plugin-eslint'
// import { visualizer } from 'rollup-plugin-visualizer'
export default function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins = [
    UniManifest(),
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: 'src/types/auto-import.d.ts',
      dirs: ['src/hooks'], // 自动导入 hooks
      eslintrc: { enabled: true },
      vueTemplate: true,
    }),
    {
      // do not fail on serve (i.e. local development)
      ...eslint({
        failOnWarning: false,
        failOnError: false,
      }),
      apply: 'serve',
      enforce: 'post',
    },
    UnoCSS(),
    uni(),
    // visualizer({
    //   filename: '../../../node_modules/.cache/visualizer/stats.html',
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    // })
  ]
  return vitePlugins
}
