var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app.js',
  output: { path: __dirname+'/dist/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};