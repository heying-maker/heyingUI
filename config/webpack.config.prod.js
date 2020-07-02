/**
 * 打包发布时的配置
 */
const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'heyingui', //库名称
        libraryExport: 'default'
    },
    externals: {  //定义外部依赖，可以避免把react和react-dom打包进去
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: 'react',
            amd: 'react',
        },
        "react-dom": {
            root: 'ReactDom',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        }
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            }
        ]

    },
    plugins: [
        new MiniCssExtractPlugin({filename:'main.min.css'})

    ]


}

module.exports = merge(devConfig, baseConfig);