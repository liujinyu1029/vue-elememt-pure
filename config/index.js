/*
* 核心配置文件，只是开发使用的话不用理解这部分，
* 开发的host域名与api接口地址在dev.env.js里配置
* */
var path = require('path')
var dev_env = require('./dev.env');

module.exports = {
  // 下面是build也就是生产编译环境下的一些配置
  build: {
    // 导入prod.env.js配置文件，只要用来指定当前环境，详细见(1)
    env: require('./prod.env'),
    //打包后，入口文件的 输出位置
    // 下面是相对路径的拼接，假如当前跟目录是config，那么下面配置的index属性的属性值就是dist/index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    //指定打包后静态资源的根目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    //打包的静态资源存放地，在指定的根目录dist下
    assetsSubDirectory: 'static',
    //静态资源的公开路径，也就是在index.html中引用static的相对路径，<script src="./static"></script>
    assetsPublicPath: './',
    //是否生成生产环境的sourcmap，sourcmap是用来debug编译后文件的，通过映射到编译前文件来实现
    productionSourceMap: true,
    //是否在生产环境中使用gzip压缩代码（压缩效果还是不错的），默认关闭，注意gzip有浏览器兼容性，需要服务端配合做区别配置
    //如果要开启压缩必须安装compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    //用来开启编译完成后的报告，可以通过设置值为true和false来开启或关闭
    // npm_config_report 为undefined，所以这里默认关闭 ，想要开启可以到congfig/prod.env.js中添加
    //使用方法 `npm run build --report`
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    //导入配置文件dev.env，指明开发环境
    env: dev_env,
    //本地服务的域名 注意:一定要先在host中配好，否则会报错
    host:dev_env.host,
    //本地服务的端口
    port: 8080,
    //是否在启动后自动打开浏览器
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
    proxyTable: {
      '/': {
        target: dev_env.BASE_API,// 请求的代理服务接口域名，在config/dev.env.js中配置
        changeOrigin: true// 如果接口跨域，需要进行这个参数配置
      }
    },
    //是否生成css，map文件，上面这段英文就是说使用这个cssmap可能存在问题，但是按照经验，问题不大，可以使用
    //实用意义不大，不用理会这个
    cssSourceMap: false
  }
}
