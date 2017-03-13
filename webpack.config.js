'use strict';

var webpack = require('webpack'),
    path = require('path');

var babelOptions =
    {
        "presets": [
            ["es2015", { modules: false }]
        ]
    };

module.exports =
    {
        cache: true,
        entry: {
            main: './src/ts/Picky.ts'
        },
        output: {
            library: "Picky",
            libraryTarget: "umd",
            umdNamedDefine: true,
            filename: './build/picky.js'
        },

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: babelOptions
                        },
                        {
                            loader: 'ts-loader'
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: babelOptions
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        }
    };