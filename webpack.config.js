module.exports = {
    entry: ['./client.js'],
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/static'
    }
}
