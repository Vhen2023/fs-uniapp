<script lang="ts" setup>
import { useLocaleStore } from '@/store/locales'
import type { LocaleType } from '@/types/app'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const useLocale = useLocaleStore()
const curLocale = ref(useLocale.locale)

const toggleLocale = (lang: LocaleType) => {
  useLocale.setLocale(lang)
  curLocale.value = lang
}
</script>
<template>
  <up-button type="primary" text="英文" v-if="curLocale === 'zh'" @click="toggleLocale('en')"></up-button>
  <up-button type="primary" text="中文" v-else @click="toggleLocale('zh')"></up-button>
  {{ t('app.header.title') }}
</template>
<style lang="scss" scoped></style>
