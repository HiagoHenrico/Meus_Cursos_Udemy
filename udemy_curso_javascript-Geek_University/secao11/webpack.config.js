module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServeere: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /nodu_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};