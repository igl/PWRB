const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const ExtractPlugin = require("extract-text-webpack-plugin")
const all = require('./webpack.all')

const extractStyles = new ExtractPlugin('[name].css')

module.exports = {
    target: 'web',
    entry  : {
        'static/client/index' : path.join(all.SRC_DIR, 'client/index.js')
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
        pathinfo: true
    },
    module : {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [ 'react', 'es2015' ],
                    plugins: [ 'transform-export-extensions' ]
                }
            },
            {
                test: /\.styl$/i,
                loader: all.DEV
                    ? 'style!css!stylus?path=./node_modules'
                    : extractStyles.extract('css!stylus?path=./node_modules')
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__    : JSON.stringify(all.DEV),
            __GITREV__ : JSON.stringify(all.GIT_REV),
            process    : { env: { NODE_ENV: JSON.stringify(all.NODE_ENV) } }
        }),
        extractStyles
    ]
};
