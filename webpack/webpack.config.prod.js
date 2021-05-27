const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const path = require('path');

module.exports = {
    mode: 'production',
    entry: { 
      app: path.resolve('src', 'index.js'),
      analytics: path.resolve('src', 'analytics.js')
    },
    output: {
      publicPath: '/',
      path: path.resolve('dist'),
      filename: '[name].[contenthash].js',
      chunkFilename: `[name].[contenthash].css`,
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
      new CleanWebpackPlugin(), 
      new WebpackManifestPlugin({}),
    ],
    optimization: {      
      minimize: false,      
    },
};