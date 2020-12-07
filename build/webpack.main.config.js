
//开发环境webpack.dev.js
const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');

module.exports = merge.smart(common, {
  target: 'electron-main',
  entry: {
    main: './src/main/main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    }),
  ],
  mode: 'development',
});

// module.exports = merge(common, {
//   module:{
//      rules:[
//        {
//            test: /\.css$/,
//            use:["style-loader","css-loader"]
//        }
//    ]
//  },
//   devtool: 'inline-source-map',
//   devServer:{
//        open:true,
//        hot: true,
//        proxy: {
//           '/api/': {
//               target: 'http://baidu.com',
//               secure: false,
//               changeOrigin: true
//           }
//       }
//     },
// })
