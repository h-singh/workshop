const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './src');

const config = {
    context: sourcePath,
    entry: [
        'babel-polyfill',
        './main.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: [
                        ['es2015', { 'modules': false }],
                        'stage-2',
                        'react'
                    ],
                    plugins: [
                        ['import', { 'libraryName': 'antd', 'style': true }],
                        'babel-plugin-transform-runtime',
                        'react-hot-loader/babel'
                    ]
                }
            }],
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    limit: 10240
                }
            }]
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'url-loader',
            options: { limit: 8192 }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            hash: true
        }),
         new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        host: '0.0.0.0',
        port: 6099,
        compress: false
    }
};

module.exports = [config];
