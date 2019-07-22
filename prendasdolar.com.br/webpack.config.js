module.exports = {
    entry: {
        teste: "./script/main.js",
        //carousel: "./script/carousel/V0002.js"
    },
    output: {
      path: __dirname,
      //path: "./script",
      publicPath: "/script/",
      filename: "bundle.js"
    },
    module: {
        rules: [
            {
                //test: /.js$/,
                //exclude: /node_modules/,
                use:  {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}