const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const definePlugin = new DefinePlugin({
  _TEST_: JSON.stringify('production'),
});

module.exports = merge(base, {
  mode: 'production',
  plugins: [definePlugin],
});
