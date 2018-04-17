var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, 'public/dist');

module.exports = {
  entry: {
    bundle: `${SRC_DIR}/index.js`
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',      
        include: SRC_DIR,
        test: /\.jsx?/,
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  }
};