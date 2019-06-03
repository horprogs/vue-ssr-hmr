const VueLoaderPlugin = require('vue-loader/lib/plugin');


const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // enable CSS extraction
                    extractCSS: isProduction
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name].[ext]',
                    }
                }
            },

        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};
