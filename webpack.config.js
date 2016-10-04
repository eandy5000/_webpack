module.exports={

    entry: './app.js',

    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                excludes: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};