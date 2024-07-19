/*
 * @Author: vhen
 * @Date: 2024-07-19 12:31:41
 * @LastEditTime: 2024-07-19 12:31:52
 * @Description: 现在的努力是为了小时候吹过的牛逼！
 * @FilePath: \fs-uniapp\.prettierrc.cjs
 *
 */
module.exports = {
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  trailingComma: 'all',
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '*.json',
      options: {
        trailingComma: 'none',
      },
    },
  ],
}
