/*
 * @Author: vhen
 * @Date: 2024-07-28 14:01:21
 * @LastEditTime: 2024-07-28 14:01:34
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\src\locales\lang\en.ts
 *
 */
import { genMessage } from '../helper'
const modules = import.meta.glob('./en/**/*.{json,ts,js}', { eager: true })
export default genMessage(modules as Recordable<Recordable>, 'en')
