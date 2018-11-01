'use strict'
//开发环境的的配置文件
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"', //环境名，这里不要动

  //本地服务的假域名 注意:1、一定要先在host中配好，否则会报错，跑不起来。2、不可以带 http https
  host:"pomp.dev.yunshanmeicai.com",

  //接口地址域名，已经做了跨域代理
  BASE_API: 'http://rap2api.taobao.org/app/mock/76852'
})
