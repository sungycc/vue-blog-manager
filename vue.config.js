/**
 * vue.config.js
 */
'use strict'

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/static/' : './',
  // outputDir: process.env.outputDir,
  // assetDir: 'static',
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: {
    name: 'Egg Blog Manager',
    resolve: {
      alias: {
        '@': resolve('src'),
        // 'api': '@/api',
        // 'components': '@/components',
        // 'utils': '@/utils',
        // 'views': '@/views',
      }
    }
  },
}
