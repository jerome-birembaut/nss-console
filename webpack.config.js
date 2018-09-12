const path = require('path');

const getBaseConfig = () => ({
  mode: process.env.NODE_ENV || 'development',
  entry: [],
  output: {
    path: path.resolve(__dirname, 'dist'),
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
});

const suffixFile = `${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`;

const commonConfig = getBaseConfig();
commonConfig.entry.push('./src/index.js');
commonConfig.output.filename = `nss-console.common${suffixFile}`;

const umdConfig = getBaseConfig();
umdConfig.entry.push('./src/nss-console.js');
umdConfig.output.libraryTarget = 'umd';
umdConfig.output.filename = `nss-console.umd${suffixFile}`;

module.exports = [umdConfig, commonConfig];
