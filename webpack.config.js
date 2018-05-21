var path = require('path')

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: '[name].bundle.js',
    path: __dirname
  },
  mode: 'development'
}
