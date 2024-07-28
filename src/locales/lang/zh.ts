/*
 * @Author: vhen
 * @Date: 2024-07-28 14:01:55
 * @LastEditTime: 2024-07-28 14:18:37
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\locales\lang\zh.ts
 *
 */
import { genMessage } from '../helper'
const modules = import.meta.glob('./zh/**/*.{json,ts,js}', { eager: true })
export default genMessage(modules as Recordable<Recordable>, 'zh')
