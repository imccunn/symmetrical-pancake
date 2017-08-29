const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname + '/src/client/',
  entry: './index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'js/**' },
      { from: 'styles/**' },
      { from : 'index.html'}
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080
  }
};
