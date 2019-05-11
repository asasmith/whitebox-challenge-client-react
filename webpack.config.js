const HtmlWebPackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

// this isn't working how I hoped it would
// const copyPlugin = new CopyPlugin([
//   {
//     from: './src/vendor',
//     to: 'vendor/',
//   },
//   {
//     from: './src/css',
//     to: 'css/',
//   },
// ]);

module.exports = {
  entry: ['babel-polyfill', './src/index'],
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
    ],
  },
  plugins: [htmlPlugin],
};
