var path = require('path');
module.exports = {
    entry: './js/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    },
    devServer: {
        contentBase: './',
        hot: true,
        inline: true,
        port: 8080,
        open: true,
    }
}