const path = require('path');

module.exports = {
    mode: 'production',
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
    }  
};