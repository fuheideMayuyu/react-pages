/*
 * @Descripttion: 
 * @version: 
 * @Author: xinguangding
 * @Date: 2021-11-22 17:18:26
 * @LastEditors: xinguangding
 * @LastEditTime: 2021-11-22 17:18:26
 */
const inquirer = require('inquirer')
const execa = require('execa')
const { log, separator } = require('./constant')
const { entry } = require('./helper')

const packagesList = [...Object.keys(entry)]

async function build(buildLists) {
  const stringLists = buildLists.join(separator)
  await execa('webpack', ['--config', './scripts/webpack.prod.js'], {
    stdio: 'inherit',
    env: {
      packages: stringLists,
    },
  })
}

build(packagesList)