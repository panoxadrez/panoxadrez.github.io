module.exports = {
    entry: {
        teste: './script/teste.js'
    },
    output: {
      path: "./script/",
      filename: 'bundle.js'  
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use:  {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}