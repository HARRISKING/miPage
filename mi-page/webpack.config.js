const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log('-------', __dirname)


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
      new ExtractTextPlugin('index.css'),
      new CopyWebpackPlugin([
        { from:'', to:'/index.css' }
      ])
    ],

    devServer: {
      contentBase:'./dist',
      historyApiFallback: true,
      inline: true,
      publicPath: '/'
    }
  }