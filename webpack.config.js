const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    bundle: './bundle.js'
  },
  output: {
    filename: 'la-web-components.bundle.js',
    path: path.resolve(__dirname, 'dist/la-web-components'),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
};
