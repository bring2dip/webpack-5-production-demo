const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',  
    entry: { 
      app: path.resolve('src', 'index.js'),      
    },
    output: {
      filename: '[name].js',
    },
    module: {
      rules: [        
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',              
          }
        }        
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src', 'index.html')
      }),
    ]
};