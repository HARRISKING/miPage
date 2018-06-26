const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /(\.js|\.jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          use: [
            {
            loader: 'style-loader'
            },{
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          loaders: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
          })
        },
      ],
    },

    plugins: [
      new ExtractTextPlugin('index.css')
    ],

    devServer: {
      contentBase:'./public',
      historyApiFallback: true,
      inline: true
    }
  }