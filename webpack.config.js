// let webpack = require('webpack');

const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
  filename: "./css/style.min.css",
  disable: process.env.NODE_ENV === "development"
})

const extractTodoSass = new ExtractTextPlugin({
  filename: "./css/todo.min.css",
  disable: process.env.NODE_ENV === "development"
})

module.exports = [{
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass
  ],
  devtool: 'source-map'
},{
  entry: './src/todo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/todo.app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.scss$/,
        use: extractTodoSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractTodoSass
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  devtool: 'source-map'
}];
