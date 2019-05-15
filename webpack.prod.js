const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const definePlugin = new DefinePlugin({
  BASE_URL: JSON.stringify('https://stormy-lowlands-15129'),
});

module.exports = merge(base, {
  mode: 'production',
  plugins: [definePlugin],
});
