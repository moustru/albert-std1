const path = require('path')
const optimization = require('./webpack/optimization')
const plugins = require('./webpack/plugins')
const jsLoaders = require('./webpack/js-loaders')
const { filename } = require('./webpack/utils')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: [ '@babel/polyfill', './index.js' ],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: optimization(),
  devtool: isDev ? 'source-map': '',
  devServer: {
    port: 9000,
    hot: isDev
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}