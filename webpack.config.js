var webpack = require('webpack');

module.exports =
{
    resolve:
    {
        extensions:
            [
                '', '.js', '.ts',
                '.webpack.js', '.web.js'
            ]
    },

    devtool: 'source-map',

    module:
    {
        loaders:
            [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader'
                }
            ]
    },

    plugins:
        [
            // new webpack.optimize.UglifyJsPlugin({
            // 	minimize: true,
            // 	sourceMap: false,
            // 	mangle: true
            // })
        ],

    output:
    {
        library: "Picky",
        libraryTarget: "umd",
        umdNamedDefine: true,
        filename: 'picky.js'
    }
};