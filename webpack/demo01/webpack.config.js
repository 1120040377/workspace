const path = require('path')
const webpack = require('webpack')

const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    },
    output:{
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    plugins:[
        // CommonsChunkPlugin 提取共用代码的插件
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // (the commons chunk name)
          
            filename: "commons.js",
        })
    ]
}

module.exports = config;