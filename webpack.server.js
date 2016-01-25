const path = require('path')
const all = require('./webpack.all')

module.exports = {
    target: 'node',
    externals: all.nodeModules,
    entry  : {
        'server/index' : all.SRCROOT + '/server/index.js'
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
        libraryTarget: "commonjs2",
        pathinfo: true
    },
    module : {
        loaders: [{
            test: /\.(jsx?)$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: [ 'react', 'node5' ],
                plugins: [ 'transform-export-extensions' ]
            }
        }]
    },
    plugins: [
        all.definePlugin
    ]
};
