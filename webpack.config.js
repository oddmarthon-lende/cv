const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: [
    './src/script.js'
  ],
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: []
  }
}
