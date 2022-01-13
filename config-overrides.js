const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const webpack = require('webpack')

module.exports = function override(config, env) {
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => !(plugin instanceof ModuleScopePlugin),
  )

  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(env.mode !== 'production'),
    }),
  )

  config.module.rules.push({
    test: /\.(js|jsx|tsx)$/,
    loader: 'babel-loader',
    options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
  })

  return config
}
