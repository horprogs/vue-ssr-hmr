const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

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
});
