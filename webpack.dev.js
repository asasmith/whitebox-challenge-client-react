const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const definePlugin = new DefinePlugin({
  _TEST_: JSON.stringify('dev'),
});

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [definePlugin],
});
