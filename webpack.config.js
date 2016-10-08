'use strict';

const extractText = require('extract-text-webpack-plugin'),
      webpack = require('webpack');

module.exports = {
  entry:  './src/js/app.js',
  output: {
    filename: 'src/js/output/bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel',
        query: {
          compact: true,
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: extractText.extract('style', 'css!sass')
      }
    ]
  },
  plugins: [
    new extractText('src/scss/output/bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ],
};
