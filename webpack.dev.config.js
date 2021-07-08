const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './designMode/index.js',
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        open: true,
        port: 9000
    }
}