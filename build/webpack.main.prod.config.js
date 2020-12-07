//生产环境webpack.product.js
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const cleanPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
});

module.exports = merge.smart(common, {
  mode: 'production',
});

// module.exports = merge(common, {
//     module: {
//         rules: [{
//             test: /\.css$/,
//             use: extractSass.extract({
//                 use: [{
//                     loader: "css-loader"
//                 }, ],
//                 fallback: "style-loader"
//             })
//         }]

//     },
//     devtool: 'source-map',
//     plugins: [
//         new cleanPlugin(["dist"]),
//         new UglifyJSPlugin(),
//         extractSass,
//     ]
// });
