module.exports = {
  entry: './src/scroll-link.js',
  output: {
    path: './dist',
    filename: 'scroll-link.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
}
