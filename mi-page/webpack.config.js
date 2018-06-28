const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',

    output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'

        }),
    ],

    resolve: {
        extensions: ['.js','.jsx']
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/

            },
            {
<<<<<<< HEAD
            loader: 'style-loader'
            },{
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.sass$/,
          use: [
            {
              loader: 'style-loader'
            },{
              loader: 'css-loader'
            },{
              loader: 'sass-loader'
=======
                test: /(\.css|\.scss)$/,
                use: [
                    {
                        loader:"style-loader"
                    },{
                        loader:"css-loader"
                    },{
                        loader:"sass-loader"
                    }
                ]
>>>>>>> 74f5175b96668c8d9eb6826d3512b9c2055a9b54
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
    }
}