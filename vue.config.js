const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('~', resolve('./public'))
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 75
      })
  },
  devServer: {
    host:'0.0.0.0',
    port: 8000, // 端口
    open: false, // 启动后打开浏览器
    proxy: {
      //配置跨域
      '/api': {
        target: "https://www.easy-mock.com",
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: (config) => {
    // 取消console打印    
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
  },

}