const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV=='development' ? '/' : '/2020jqcjd',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080, // 端口
    open: false, // 启动后打开浏览器
    proxy: {
      //配置跨域
      '/api': {
        target: "http://apiappop.cbi360.net",
        changOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }

}