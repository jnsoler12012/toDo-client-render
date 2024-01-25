const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.cjs");

module.exports = merge(common, {
    mode: "development",
    output: {
        publicPath: '/',
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        port: 4000,
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                            name: `[contenthash].[ext]`,
                        },
                    }
                ]
            }
        ]
    }
});
