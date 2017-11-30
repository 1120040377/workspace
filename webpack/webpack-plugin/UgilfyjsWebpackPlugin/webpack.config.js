const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
    entry: {
        app: './src/app.js'
    },
    output:{
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                mangle: {reserved: ['webpack', 'require']}
            }
        })
    ]
}

module.exports = config;