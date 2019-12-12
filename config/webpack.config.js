const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
    mode: 'development',
    entry: {
        main: path.join(__dirname,'../src/main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname,'../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'../index.html'),
            inject: true,
            minify: {
                removeComments: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /.ejs$/,
                use: ['ejs-loader']
            },
            {
                test: /.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    }
}

module.exports = config
