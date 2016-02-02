const path = require('path')
const webpack = require('webpack')
const all = require('./webpack.all')

module.exports = {
    target: 'node',
    externals: all.nodeModules,
    entry  : {
        'server/index' : path.join(all.SRC_DIR, '/server/index.js')
    },
    resolve : {
        root: [ all.SRC_DIR ],
        alias: {
            phoenix: path.resolve('./deps/phoenix/web/static/js/phoenix.js'),
            phoenix_html: path.resolve('./deps/phoenix_html/web/static/js/phoenix_html.js')
        }
    },
    output : {
        path     : all.REL_DIR,
        filename : '[name].js',
        libraryTarget: "commonjs2",
        pathinfo: true
    },
    module : {
        loaders: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [ 'react', 'node5' ],
                    plugins: [ 'transform-export-extensions' ]
                }
            },
            {
                test: /\.(styl|css)$/i,
                loader: 'null'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __PWD__    : JSON.stringify(__dirname),
            __DEV__    : JSON.stringify(all.DEV),
            __GITREV__ : JSON.stringify(all.GIT_REV)
        })
    ]
};
