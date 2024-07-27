/*
 * @Author: vhen
 * @Date: 2024-07-19 01:10:53
 * @LastEditTime: 2024-07-28 00:48:49
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\build\vite\plugins\index.ts
 *
 */

import uni from '@dcloudio/vite-plugin-uni'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
// import UniPages from '@uni-helper/vite-plugin-uni-pages'
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
    // UniPages({
    //   exclude: ['**/components/**/**.*'],
    //   routeBlockLang: 'json5', // 虽然设了默认值，但是vue文件还是要加上 lang="json5", 这样才能很好地格式化
    //   // homePage 通过 vue 文件的 route-block 的type="home"来设定
    //   // pages 目录为 src/pages，分包目录不能配置在pages目录下
    //   // subPackages: ['src/pages-sub'], // 是个数组，可以配置多个，但是不能为pages里面的目录
    //   dts: 'src/types/uni-pages.d.ts',
    // }),
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
