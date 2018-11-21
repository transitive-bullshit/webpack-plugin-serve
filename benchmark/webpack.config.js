const { resolve } = require('path');

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

const smp = new SpeedMeasurePlugin();

const config = {
  context: __dirname,
  entry: ['./src/index.js'],
  mode: 'development',
  output: {
    filename: './output.js',
    path: resolve(__dirname, './output'),
    publicPath: 'output/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
};

if (process.env.SERVER_NAME === 'wps') {
  config.plugins = [new Serve()];
  config.watch = true;
}

module.exports = smp.wrap(config);
