const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const all = require('./webpack.all')

module.exports = {
    target: 'web',
    entry  : {
        'static/js/index' : all.SRCROOT + '/client/index.js'
    },
    resolve : {
        root: [ all.SRCROOT ],
        alias: {
            phoenix: path.resolve('./deps/phoenix/web/static/js/phoenix.js'),
            phoenix_html: path.resolve('./deps/phoenix_html/web/static/js/phoenix_html.js')
        }
    },
    output : {
        path     : all.RELROOT,
        filename : '[name].js',
        pathinfo: true
    },
    module : {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: [ 'react', 'es2015' ],
                plugins: [ 'transform-export-extensions' ]
            }
        }]
    },
    plugins: [
        all.definePlugin,
        new CopyPlugin([
            { from: 'web/app/assets', to: 'static' }
        ])
    ]
};
