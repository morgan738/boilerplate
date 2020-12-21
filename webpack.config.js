

const path = require('path');

module.exports = {
    entry: {
        client: './client/main.js'
    },
    output: {
        filename: './public/bundle.js',
        path: path.resolve(__dirname)
    },

    module: {
        rules: [
            {
                test: /\.js$/, // include .js files

                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [{
                    loader: "babel-loader",
                    // more options in the optional jshint object

                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
};