const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {
        main: path.resolve(__dirname,'../src/index.js'),
        vender: path.resolve(__dirname, '../src/js/feature.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[hash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
                exclude: [/node_modules/]
            }
        ]      
    },
    plugins: [
        // 清空dist文件夹
        new CleanWebpackPlugin(),
        // 生成index.html文件
        new HtmlWebpackPlugin({
            title: 'demo',
            template: path.resolve(__dirname,'../src/index.html')
        }),
        // 设置全局变量
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
        // new ExtractTextPlugin('style.css')
    ],
    optimization: {
        // 配置公共模块
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendor"
                }
            }
        },
        // 压缩js配置
        minimizer: [
            new UglifyJSPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                uglifyOptions: {
                    warnings: false,
                }
            })
        ]
    }
}