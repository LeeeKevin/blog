var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './js/App.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader'],exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader'],exclude:/node_modules/},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot:true,
        inline: true,
        port: 8080,
        open: true,
    }
}