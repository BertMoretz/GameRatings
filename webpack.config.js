var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const webpack = require("webpack");

const port = process.env.PORT || 9000

const buildStubServer = require('./stub/server')

const port = process.env.PORT || 9000

const buildStubServer = require('./stub/server')

module.exports = {
  //mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: port,
    before: buildStubServer
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" ,
            options: {
              modules: true,
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
	            BACKEND_URL: `"${process.env.BACKEND_URL}"`
	        }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};
