const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(`${__dirname}/../`, 'dist'),
    libraryTarget: 'umd',
    filename: `nss-console.umd${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`,
    library: 'NSSConsole',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
    ],
  },
};
