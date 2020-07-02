/**
 * 开发时的配置
 */

const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base');
const _dirname = path.resolve();

const devConfig = {
    entry: './demo/index.js',
    mode: 'development',
    output: {
        filename: 'demo.bundle.js',
        path: path.resolve(_dirname, './demo')  //输出文件目录
    },
    devServer: {
        contentBase: path.join(_dirname, "./demo"),
        compress: true,
        port: 9000,  //端口
        open: true //自动打开浏览器

    },
    module: {
        rules: [
            {
                test: /\.less$/,   //编译less
                exclude: '/node_modules/',
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            }
        ]

    }

}

module.exports = merge(devConfig, baseConfig);