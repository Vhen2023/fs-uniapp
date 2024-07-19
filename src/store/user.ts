/*
 * @Author: vhen
 * @Date: 2024-07-18 19:49:45
 * @LastEditTime: 2024-07-19 15:57:19
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\store\user.ts
 *
 */
import { defineStore } from 'pinia'

interface IUser {
  nickname?: string
  avatar?: string
}

const UserState = { nickname: '', avatar: '' }
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<IUser>({ ...UserState })

    const setUserInfo = (val: IUser) => {
      userInfo.value = val
    }

    return {
      userInfo,
      setUserInfo,
    }
  },
  {
    persist: true,
  },
)
