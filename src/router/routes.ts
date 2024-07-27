/*
 * @Author: vhen
 * @Date: 2024-07-27 06:26:06
 * @LastEditTime: 2024-07-27 22:23:42
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\router\routes.ts
 */

import { pages, subPackages } from '@/pages.json'

/**
 * 获取/pages.json数据
 * @param key 标识
 * @returns
 */
export const getAllPages = (key = 'needLogin') => {
  // 处理主包
  const mainPages = pages
    .filter((page: any) => !key || page[key])
    .map((page) => ({
      ...page,
      path: `/${page.path}`,
    }))

  // 分包处理
  let subPages: any[] = []
  if (subPackages.length) {
    // 处理分包
    subPages = subPackages
      .map((subPackage: any) => {
        return subPackage.pages.map((page: any) => ({
          ...page,
          path: `/${subPackage.root}/${page.path}`,
        }))
      })
      .flat()
      .filter((page: any) => !key || page[key])
  }

  return [...mainPages, ...subPages]
}
