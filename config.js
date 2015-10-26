module.exports = {
  js: {
    src: './src/js/**',
    dest: './build/js',  },

  webpack: {
    entry: './src/js/app.js',
    output: {
      filename: 'bundle.js'
    },

    resolve: {
      extensions: ['', '.js', '.es6', '.jade']
    },

    devtool: 'inline-source-map',

    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader' },
      ]
    }
  }
}