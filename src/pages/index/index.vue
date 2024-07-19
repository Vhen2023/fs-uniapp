<script setup lang="ts">
import { useUserStore } from '@/store/user'
const { setUserInfo, userInfo } = useUserStore()
setUserInfo({
  nickname: 'vhen',
  avatar: ' https://avatars.githubusercontent.com/u/26346807?v=4',
})
console.log(userInfo)
const title = ref('Hello')
</script>

<template>
  <view class="content flex flex-col items-center justify-center">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>

    <view class="unocss fs-flex-center">unocss</view>
  </view>
</template>

<style>
.logo {
  width: 200rpx;
  height: 200rpx;
  margin-top: 200rpx;
  margin-right: auto;
  margin-bottom: 50rpx;
  margin-left: auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
