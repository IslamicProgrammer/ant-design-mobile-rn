const getWebpackConfig = require('@ant-design/tools/lib/getWebpackConfig.js')
const webpackConfig = getWebpackConfig(false)
const path = require('path')

//expo entryPoint
webpackConfig[0].entry = path.resolve(__dirname) + '/expo/App.js'
// flow presets
webpackConfig[0].module.rules.push({
  test: /\.js$|jsx/,
  loader: path.resolve(__dirname) + '/node_modules/babel-loader/lib/index.js',
  options: {
    presets: [
      path.resolve(__dirname) + '/node_modules/@babel/preset-flow/lib/index.js',
    ],
  },
})
// platform-specific-file extensions
webpackConfig[0].resolve.extensions.push('.ios.js')
webpackConfig[0].resolve.extensions.push('.android.js')

module.exports = webpackConfig
