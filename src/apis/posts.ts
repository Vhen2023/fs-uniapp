/*
 * @Author: vhen
 * @Date: 2024-07-19 23:58:50
 * @LastEditTime: 2024-07-20 16:17:00
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\apis\posts.ts
 *
 */

import http from '@/http'

// 获取某个用户所有的帖子
export const userPosts = (userId: number) => {
  return http.get(`/posts?userId=${userId}`)
}
