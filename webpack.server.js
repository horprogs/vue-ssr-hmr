const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  entry: './app/entry-server.js',

  target: 'node',

  devtool: 'source-map',

  output: {
    libraryTarget: 'commonjs2',
  },

  externals: nodeExternals({
    whitelist: /\.css$/,
  }),

  plugins: [new VueSSRServerPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]_[hash:base64:8]',
          },
        },
      },
    ],
  },
});
