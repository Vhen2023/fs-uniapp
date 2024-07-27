/*
 * @Author: vhen
 * @Date: 2024-07-20 15:35:22
 * @LastEditTime: 2024-07-20 16:09:13
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\http\requestCanceler.ts
 *
 */

import qs from 'qs'

export class RequestCanceler {
  // 存储每个请求的标志和取消函数
  pendingRequest: Map<string, any>
  constructor() {
    this.pendingRequest = new Map<string, any>()
  }
  /**
   *
   * @param config
   * @returns
   */

  generateReqKey(config: any): string {
    const { method, url } = config
    // eslint-disable-next-line import/no-named-as-default-member
    return [url || '', method || '', qs.stringify(config.params), qs.stringify(config.data)].join('&')
  }
}
