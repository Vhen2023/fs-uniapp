/*
 * @Author: vhen
 * @Date: 2024-07-18 19:39:18
 * @LastEditTime: 2024-07-19 14:26:32
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\uno.config.ts
 *
 */
import type { Preset, SourceCodeTransformer } from 'unocss'
import { defineConfig, presetAttributify, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

import { presetApplet, presetRemRpx, transformerAttributify as fsTransformerAttributify } from 'unocss-applet' // unocss-preset-weapp
// uni-app，mp-开头的平台为小程序
const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false

const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

if (isApplet) {
  presets.push(presetApplet())
  presets.push(presetRemRpx())
  transformers.push(fsTransformerAttributify({ ignoreAttributes: ['block'] }))
} else {
  presets.push(presetApplet())
  presets.push(presetAttributify())
  // h5模式，将rpx转换为rem
  presets.push(presetRemRpx({ mode: 'rpx2rem' }))
}

export default defineConfig({
  presets: [
    ...presets,
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  // 预设样式
  shortcuts: [
    { 'fs-wh-full': 'w-full h-full' },
    { 'fs-flex-center': 'flex justify-center items-center' },
    { 'fs-flex-between': 'flex items-center justify-between' },
  ],
  transformers: [
    // 启用 @apply 功能
    transformerDirectives(),
    // 启用 () 分组功能
    // 支持css class组合，eg: `<div class="hover:(bg-gray-400 font-medium) font-(light mono)">测试 unocss</div>`
    transformerVariantGroup(),
  ],
})
