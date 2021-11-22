/*
 * @Descripttion: 
 * @version: 
 * @Author: xinguangding
 * @Date: 2021-11-22 16:38:39
 * @LastEditors: xinguangding
 * @LastEditTime: 2021-11-22 17:19:40
 */
const MAIN_FILE = 'index.tsx'
const chalk = require('chalk')
const BASE_PROT = 9000
const error = chalk.bold.red
const warning = chalk.hex('#FFA500')
const success = chalk.green

const maps = {
  success,
  warning,
  error,
}

// 因为环境变量的注入是通过字符串方式进行注入的
// 所以当 打包多个文件时 我们通过*进行连接 比如 home和editor 注入的环境变量为home*editor
// 注入多个包环境变量时的分隔符
const separator = '*'

const log = (message, types) => {
  console.log(maps[types](message))
}

module.exports = {
  MAIN_FILE,
  log,
  separator,
  BASE_PROT,
}
