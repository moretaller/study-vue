const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
          'vue': 'vue/dist/vue.js'
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8080
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'vue project',
            filename: 'index.html',
            template: './index.html'
        })
    ]
}
