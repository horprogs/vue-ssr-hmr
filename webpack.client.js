const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

let config = merge(baseConfig, {
  entry: ['./app/entry-client.js'],
  plugins: [new VueSSRClientPlugin()],
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].[hash:8].js',
    publicPath: 'http://localhost:9999/dist/',
  },
});

if (!isProduction) {
  config = merge(config, {
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      contentBase: './dist',
      publicPath: 'http://localhost:9999/dist/',
      hot: true,
      inline: true,
      historyApiFallback: true,
      port: 9999,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  });
}

module.exports = config;
