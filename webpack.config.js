'use strict';

var webpack = require('webpack'),
    path = require('path');

var babelOptions =
    {
        "presets": [
            [
                "es2015",
                {
                    "modules": false
                }
            ]
        ]
    };

module.exports =
    {
        cache: true,
        entry: {
            main: './src/ts/Kulr.ts'
        },
        output: {
            library: "Kulr",
            libraryTarget: "umd",
            umdNamedDefine: true,
            filename: './bin/kulr.js'
        },

        module: {
            rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    }
                ]
            }]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        }
    };