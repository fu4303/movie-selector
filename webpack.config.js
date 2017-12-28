'use strict';

const extractText = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const config = {
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
          loader: extractText.extract({
            fallbackLoader: 'style-loader',
            loader: [
              {
                loader: 'css-loader',
                query: {
                  autoprefixer: {
                    add: true,
                    browsers: ['> 0.05%'],
                  },
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
      new extractText('../css/bundle.css'),
    ],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.common.js',
      },
    },
  };

  if (env && env.production) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      })
    );
  } else {
    config.performance = {
      hints: false,
    };
    config.watch = true;
  }

  return config;
}
