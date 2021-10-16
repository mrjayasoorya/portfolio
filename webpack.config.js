const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
require('dotenv').config()
// const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    // publicPath: '/'
  },
  plugins: [
    
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV' : JSON.stringify('development')
  // }),
  //   new Dotenv(),
  new webpack.DefinePlugin({
    "process.env": JSON.stringify(process.env)
  }),
  ],
  // resolve: {
  //   modules: [__dirname, "src", "node_modules"],
  //   extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  // },
  mode:"development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|jpg|gif$/,
        use: ["file-loader"],
      }, 
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
    ],
  },
  devServer: {
    // contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    compress: true,
    port:3000
  },
};