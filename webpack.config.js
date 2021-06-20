const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const paths = require('./config/paths');
const publicPath = '/';

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: ['@babel/polyfill', paths.appIndexTsx],
    output: {
        path: paths.appBuild,
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: publicPath,
        crossOriginLoading: 'anonymous'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
        alias: {
            Src: paths.appSrc,
            Assets: paths.appSrc + '/assets/',
            Components: paths.appSrc + '/components/',
            Modules: paths.appSrc + '/modules/'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.worker\.js$/,
                use: {loader: 'worker-loader'}
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                exclude: /\.module.(scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.module.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]-[hash:base64:5]',
                            camelCase: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                type: 'javascript/auto',
                test: /\.json$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './json/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                defaultVendors: false,
                // Vendor chunk
                vendor: {
                    // Name of the chunk
                    name: 'vendor',
                    // Async + async chunks
                    chunks: 'all',
                    // Import file path containing node_modules
                    test: /node_modules/,
                    priority: 20
                },
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false)
        }),
        new HTMLWebpackPlugin({
            template: paths.appPublic + '/index.html',
            filename: './index.html',
            chunksSortMode: 'none'
        })
    ]
};
