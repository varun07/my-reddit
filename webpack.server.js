const merge = require('webpack-merge');
const path = require('path');
const commonConfigFactory = require('./config/webpack.common');

module.exports = function(env) {
  const commonConfig = commonConfigFactory(env);
  return merge(commonConfig, {
    mode: env,
    target: 'node',
    entry: path.resolve(__dirname, 'src', 'server.js'),
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'server-build')
    },
    module: {
      rules: [
        {
          test: /\.(css|png|svg|scss)$/,
          use: 'ignore-loader'
        }
      ]
    }
  })
}