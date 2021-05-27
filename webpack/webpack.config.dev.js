const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { getFiles } = require('./common');

const entryFiles = getFiles(path.resolve('src'));

const dynamicEntryMapObject = entryFiles.reduce((entryMaps, item) => {
  return {
    ...entryMaps,
    [item.name]: item.filePath,
  }
}, {});

const dynamicHtmlPlugins = entryFiles.map((item) => {
  return new HtmlWebpackPlugin({        
    chunks: [item.name],
    filename: `${item.name}.html`,
    template: path.resolve(`src/views/${item.name}.html`),
  });
});

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: dynamicEntryMapObject,
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
        {
          test: /\.css$/i,
          use: [  
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ],
          include: /\.module\.css$/
        },  
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: /global\.css$/
        },
          // IMAGES
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: 'file-loader',
            options: {
                name: 'images/[name].[contenthash].[ext]'
            }
          }
        }, 
        // SVG
        {
            test: /\.svg$/,
            use: [
                'raw-loader'
            ]
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {}
        }   
      ],
    },
    plugins: [
      // new HtmlWebpackPlugin({        
      //   chunks: ['index'],
      //   filename: 'index.html',
      //   template: path.resolve('src/views/index.html'),       
      // }),
      // new HtmlWebpackPlugin({        
      //   chunks: ['analytics'],
      //   filename: 'analytics.html',
      //   template: path.resolve('src/views/analytics.html')      
      // })
      ...dynamicHtmlPlugins,
    ]
};