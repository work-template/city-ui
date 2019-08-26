# webpack 配置与优化总结
* 版本：webpack-4.39.2
* 1:定义webpack环境-process.env.NODE_ENV做一些特别的配置，开发时候更好的体验，生产环境更小的体积。使用
```
new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
})
```
* 2：使用tree-shaking去掉无效的es6模块化代码,当我们用到了一个库，但是我们只用了其中的一个方法。我们打包时候就不必把全部代码都打包。
```
1:保证引用的代码采用es6模块化方法，如果是第三方库可以采用resolve.mainFields来指定
2:在package.json中加入sideEffects:[]字段指定哪些文件不可以使用treeshaking。
3:使用UglifyJSPlugin
new UglifyJSPlugin({
            compress: {
                warnings: false,  //删除无用代码时不输出警告
                drop_console: true,  //删除所有console语句，可以兼容IE
                collapse_vars: true,  //内嵌已定义但只使用一次的变量
                reduce_vars: true,  //提取使用多次但没定义的静态值到变量
            },
            output: {
                beautify: false, //最紧凑的输出，不保留空格和制表符
                comments: false, //删除所有注释
            }
        })
```
* 3: 提取公共代码：
```
 optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendors"
                }
            }
        }
    }
```
* 4: 分割代码以按需加载
```
import().then()
例如vue中的异步组件就是这样的用法
```
* 5: 压缩js与css
```
// js
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
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
// css
const OptimizeCssAssetsPlugin =  require('optimize-css-assets-webpack-plugin')
        new OptimizeCssAssetsPlugin()

```

