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