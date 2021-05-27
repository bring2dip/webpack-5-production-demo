const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: { 
      app: path.resolve('src', 'index.js'),
      analytics: path.resolve('src', 'analytics.js')
    },
    output: {
      publicPath: '/',
      path: path.resolve('dist'),
      filename: '[name].[contenthash].js',
    },
    devServer: {
      host: '0.0.0.0'
    },
    resolve: {
      modules: [
          'src',
          'node_modules',
      ],
    },
    module: {
      rules: [        
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',              
          }
        },          
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src', 'index.html')
      }),
    ]
};