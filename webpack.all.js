const fs        = require('fs')
const path      = require('path')
const execSync  = require('child_process').execSync

// translate short MIX_ENV to verbose NODE_ENV
const NODE_ENV = (function (MIX_ENV) {
    if (MIX_ENV === 'dev')  return 'development'
    if (MIX_ENV === 'prod') return 'production'
    if (MIX_ENV === 'test') return 'test'
    return 'development'
}(process.env.MIX_ENV))

module.exports = {
    SRC_DIR     : path.resolve('./web/app'),
    REL_DIR     : path.resolve('./priv/assets'),
    GIT_REV     : execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim(),
    DEV         : (NODE_ENV !== 'production'),
    NODE_ENV    : NODE_ENV,
    nodeModules : fs.readdirSync('./node_modules')
}
