'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:  './src/js/app.js',
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'src/js'),
        loader: 'babel-loader',
        options: {
          compact: true,
          presets: ['es2015'],
        },
        test: /\.js$/,
      },
      {
        include: path.resolve(__dirname, 'src/scss'),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                minimize: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
        test: /\.scss$/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  plugins: [
    new ExtractTextPlugin('../css/bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  watch: true,
};
