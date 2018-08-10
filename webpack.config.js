module.exports = {
  entry: './src/app.js',

  output: {
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.scss/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader'
        }
      }
    ]
  }

};