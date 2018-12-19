const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    https: false,
    hotOnly: false,
    proxy: 'http://localhost:3000'
  }
}
