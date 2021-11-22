/*
 * @Descripttion: 
 * @version: 
 * @Author: xinguangding
 * @Date: 2021-11-22 16:26:16
 * @LastEditors: xinguangding
 * @LastEditTime: 2021-11-22 17:45:34
 */
const presetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    presetEnv({
      stage: 4,
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}