const fs = require('fs')
const path = require('path')
const webpack  = require('webpack')
const execSync = require('child_process').execSync


/*
 * Set root paths
 */
exports.SRCROOT = path.resolve('./web/app')
exports.RELROOT = path.resolve('./priv')


/*
 * Get environment variables
 */
const GIT_REV = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()

// translate short MIX_ENV to verbose NODE_ENV
const NODE_ENV = (function (MIX_ENV) {
    console.log('Webpack received MIX_ENV:', MIX_ENV)
    if (MIX_ENV === 'dev')  return 'development'
    if (MIX_ENV === 'prod') return 'production'
    if (MIX_ENV === 'test') return 'test'
    return 'development'
}(process.env.MIX_ENV))


/*
 * Create definePlugin for all builds
 */
exports.definePlugin = new webpack.DefinePlugin({
    __DEV__     : JSON.stringify(NODE_ENV === 'development'),
    __GITREV__  : JSON.stringify(GIT_REV),
    process     : { env: { NODE_ENV: JSON.stringify(NODE_ENV) } }
})


/*
 * Get external node-modules to be excluded from server bundle
 */
exports.nodeModules = fs
    .readdirSync('./node_modules')
    .map(function(module) {
        return 'commonjs ' + module
    })
