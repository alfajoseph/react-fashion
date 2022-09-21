const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
        publicPath: '/'
        // filename: 'bundle.js',
        // path: path.resolve('dist'),
        // publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new miniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset"
            },
            {
                test: /\.(svg)$/i,
                type: "asset"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}