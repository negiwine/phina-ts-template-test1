import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config: Configuration = {
    target: 'web',

    entry: path.resolve(__dirname, 'src/app.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'www'),
        assetModuleFilename: 'assets/[hash][ext][query]',
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'ts',
                    target: 'es2015',
                },
            },
            {
                test: /\.(png|jpg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(wav|mp3|ogg)$/,
                type: 'asset/resource',
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.js', '.png', '.jpg', 'gif', '.wav', 'mp3', 'ogg'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src'),
        ],
        alias: {
            '@meta': path.resolve(__dirname, 'src/meta'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@classes': path.resolve(__dirname, 'src/classes'),
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '*',
                    to: path.resolve(__dirname, 'www/'),
                    context: path.resolve(__dirname, 'public/'),
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],
}

export default config
