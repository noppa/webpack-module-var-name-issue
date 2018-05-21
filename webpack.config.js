var path = require('path')

module.exports = function(env) {
  var config = {
    devtool: 'source-map',
    target: 'web',
    entry: path.join(__dirname, 'index.js'),
    output: {
      filename: '[name].bundle.js',
      path: __dirname
    },
    mode: 'development'
  }
  
  // A flag to switch between transpiled / not transpiled output
  if (env && env.useBabel) {
    config.module = {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    }
  }

  return config
}
