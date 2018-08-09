module.exports = {
    entry: __dirname + '/app/main.js', //唯一入口文件
    output:{
        path: __dirname + '/public', //打包后文件存放的目录
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: "./public", //本地服务器所加载的页面所在目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    // 新增部分
    module:{
        rules:[
            //babel配置
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    mode: 'development'
};