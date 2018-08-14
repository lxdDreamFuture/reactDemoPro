module.exports = {
    entry: __dirname+'/app/main.js',
    output: {
        path: __dirname+'/public',
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                loader: 'style-loader!css-loader?modules'//打开css module功能
            }
        ]
    },
    devServer:{
        contentBase: './public',
        inline: true,
        historyApiFallback: true
    },
    mode: 'development'
}