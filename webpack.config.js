const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: __dirname + '/public/assets',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            /** Loading CSS */
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader"
                ]
            },
            /** Loading Images */
            {
                test: /\.(png|svg|jpg|gif)$/,
                loaders: [
                    'file-loader'
                ]
            },
            /** Loading Fonts */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loaders: [
                    'file-loader'
                ]
            },
            /** Loading Data */
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            /** Loading Data */
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};
