var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
module.exports = {
    // where to start parsing javascript
    // this will also parse dependencies of app.js
    entry: './index.js',
    target: 'node',
    externals: [nodeExternals()],
    // where to store newly built javascript
    output: {
        // it's path on where to put the new files
        path: path.resolve(__dirname),
        // the new file's name
        filename: 'index.bundle.js'
    },
    // how to parse the files
    module: {
        rules: [
            // using babel on js files:
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    // use babel to parse es6
                    presets: ['env']
                }
            }
        ]
    },
    // show colors with the outputs
    stats: {
        colors: true
    },
    // use a source-map to help in development
    devtool: 'source-map'
}