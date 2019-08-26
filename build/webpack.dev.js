let common = require('./webpack.base')
const  BundleAnalyzerPlugin  =  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const merge = require('webpack-merge')
const webpack = require('webpack')
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        compress: true,
        port: 9002,
        hot: true
    },
    plugins: [
        // 解决构建时候chunkhash会随着顺序改变的问题
        new webpack.NamedModulesPlugin(),
        // 关于构建性能
        new BundleAnalyzerPlugin(),
        new webpack.HashedModuleIdsPlugin()
    ],
    module: {
        noParse: function(content) {
            return /jquery\.min\.js/.test(content)
        }
    },
    resolve: {
        mainFields: ['main'],
        extensions: ['.js', '.json']
    }
})