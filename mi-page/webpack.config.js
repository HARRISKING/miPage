const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',

    output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin(),
    ],

    resolve: {
        extensions: ['.js','.jsx']
    },

}