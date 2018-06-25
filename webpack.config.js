const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const babelTransformRuntime = require('babel-plugin-transform-runtime');

const pathsToClean = [
  'dist',
];

module.exports = {
  entry: {
    'app.bundle': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',

      minify: {
        collapseWhitespace: true,
      },
      hash: true,
    }),
    // clearn dist
    new CleanWebpackPlugin(pathsToClean),
    // 热加载
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ],
      },
      {
        test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/images/',
            },
          },
        ],
      },
      // 下面几行才是 html-loader 的配置内容
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        }],
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ['transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
      },
    ],
  },
  devServer: {
    port: 9009,
    open: true,
    hot: true,
  },
  devtool: 'source-map',

};
