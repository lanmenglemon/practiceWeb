const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const glob = require('glob');
// const PurifyCssPlugin = require('purifycss-webpack');


module.exports = {
    entry: {
      index: './client/src/index.js'
    },
    output: {
        path: __dirname + '/client/dist',
        filename: 'js/bundle.js',
        hotUpdateChunkFilename: 'hot-update.js',
        hotUpdateMainFilename: 'hot-update.json'
    },
    devtool: 'inline-source-map',
    devServer: {
	    contentBase: "./client/dist",//本地服务器所加载的页面所在的目录
	    colors: true,//终端中输出结果为彩色
	    // historyApiFallback: true,//不跳转
	    inline: true//实时刷新
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),//热加载插件
      // new ExtractTextPlugin('client/dist/css/index.css'),
      // new PurifyCssPlugin({
      //   paths:glob.sync(path.join(__dirname,'client/dist/*.html'))
      // })
    ],
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: "babel-loader"
            },
            /** Loading CSS & SASS */
            {
              test:/\.css$/,
              loader: 'style-loader!css-loader!postcss-loader'
            },
            /** Loading CSS & SASS */
            // {
            //   test:/\.less$/,
            //   use:ExtractTextPlugin.extract({
            //     fallback:"style-loader",
            //     use:[{
            //         loader:"css-loader"
            //     },{
            //         loader:"less-loader"
            //     }]
            // })
            // },
            /** Loading Images */
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader'
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
    },
    node: {
        fs: "empty"
    }
};
