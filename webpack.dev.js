const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const definePlugin = new DefinePlugin({
  BASE_URL: JSON.stringify('http://localhost:1111'),
});

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [definePlugin],
});
