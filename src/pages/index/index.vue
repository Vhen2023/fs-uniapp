<script setup lang="ts">
import { userPosts } from '@/apis/posts'
const posts = ref([])
const getUserPosts = async () => {
  const res: any = await userPosts(1)
  posts.value = res
}
getUserPosts()

const to = () => {
  uni.navigateTo({
    url: '/pagesA/test/index',
  })
}
</script>

<template>
  <view class="content flex flex-col items-center justify-center">
    <image class="logo" src="/static/logo.png" />
    <button @click="to">test</button>
    <view class="title" v-for="(item, index) of posts" :key="index">{{ item.title }}</view>
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
  width: 100%;
  padding: 20rpx;
  font-size: 36rpx;
  color: #8f8f94;
  text-align: left;
}
</style>
