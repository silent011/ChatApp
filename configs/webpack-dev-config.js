const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry:[
        'webpack-hot-middleware/client',
        './src/main.js'
    ],
    output:{
        path: path.resolve(__dirname, "../static"),
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    module: {
        rules:[
            {
                test:/favicon.ico$/,
                use:[
                    {
                        loader:'file-loader',
                        options: {
                            name:'[name].[ext]'
                            
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options: {
                            name:'[name]-[hash].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.styl$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: './src/index.pug',
            inject: true
        })
    ],
    mode: 'development'
}