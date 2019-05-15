const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
  BASE_URL: JSON.stringify(process.env.BASE_URL),
});

module.exports = {
  entry: ['babel-polyfill', 'jquery', './src/index'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin, definePlugin],
};
