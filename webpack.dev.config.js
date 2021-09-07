
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'dev-bundle.js',
        path: path.resolve(__dirname, "./dist")
    },
    mode: "development",
    devServer: {
        open:true,
        static: {
            directory: path.join(__dirname, './dev-bundle.js'),
        },
        port:3343,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    },
                },
                exclude: /node_modules/,
            }
        ]
    }
}
