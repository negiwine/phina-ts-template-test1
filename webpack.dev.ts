import path from 'path'
import merge from 'webpack-merge'
import common from './webpack.common'
import 'webpack-dev-server'

const config = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    performance: {
        hints: false,
    },
    devServer: {
        open: true,
        watchFiles: path.resolve(__dirname, 'www'),
        devMiddleware: {
            writeToDisk: true,
        },
    },
})

export default config
