const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.base.js')
const webpack = require('webpack')
const OptimizeCssAssetsPlugin =  require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = merge(common, {
    devtool: 'souce-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[chunkhash].[name].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 定义环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // 压缩css
        new OptimizeCssAssetsPlugin()
    ],
    mode: "production"
})