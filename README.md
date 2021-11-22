<!--
 * @Descripttion: 
 * @version: 
 * @Author: xinguangding
 * @Date: 2021-11-22 17:55:33
 * @LastEditors: xinguangding
 * @LastEditTime: 2021-11-22 18:24:01
-->
因为npm7.x对某些事情比npm6.x更严格。
通常，最简单的解决方法是将--legacy-peer-deps标志传递给 npm ( npm install --legacy-peer-deps ），或者使用npm@6。

npm install --legacy-peer-deps