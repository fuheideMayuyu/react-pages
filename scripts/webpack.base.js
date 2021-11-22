/*
 * @Descripttion: 
 * @version: 
 * @Author: xinguangding
 * @Date: 2021-11-22 13:43:17
 * @LastEditors: xinguangding
 * @LastEditTime: 2021-11-22 17:15:54
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { separator } = require('./utils/constant')
const { getEntryTemplate } = require('./utils/helper')

// 将packages拆分成为数组 ['editor','home']
const packages = process.env.packages.split(separator)

// 调用getEntryTemplate 获得对应的entry和htmlPlugins
const { entry, htmlPlugins } = getEntryTemplate(packages)

module.exports = {
  // 入口文件，这里之后会着重强调
  entry,
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@packages': path.resolve(__dirname, '../src/packages'),
      '@containers': path.resolve(__dirname, '../src/containers'),
    },
    mainFiles: ['index', 'main'],
    extensions: ['.ts', '.tsx', '.scss', 'json', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(t|js)x?$/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type:'asset/inline'
      },
      {
        test: /\.svg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'resolve-url-loader',
            options: {
              keepQuery: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    // 生成使用的模板为public/index.html
    ...htmlPlugins,
  ]
};