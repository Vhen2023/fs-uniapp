/*
 * @Author: vhen
 * @Date: 2024-07-28 15:32:18
 * @LastEditTime: 2024-07-28 15:35:52
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\store\locales.ts
 *
 */
import { i18n } from '@/locales'
import { defineStore } from 'pinia'
import type { LocaleType } from '../../../#/app'
export const useLocaleStore = defineStore(
  'locale',
  () => {
    const locale = ref(i18n.global.locale.value)
    // 设置locale
    const setLocale = (lang: LocaleType) => {
      locale.value = lang
      i18n.global.locale.value = lang
    }

    return { locale, setLocale }
  },
  {
    persist: true,
  },
)
