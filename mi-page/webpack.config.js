const path = require('path');

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
              loader: 's-loader'
            }
          ]
        }
      ],
    },

    devServer: {
      contentBase:'./public',
      historyApiFallback: true,
      inline: true
    }
  }