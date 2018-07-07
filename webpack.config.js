/*
    Webpack is a module bundler. It will create a bundle of our app for the web
    the code below will instruct webpack of how to compile our app
    Note that 
*/
module.exports = {
    entry: './src/app.ts', /* Point to our app.ts */
    output: {
        filename: 'app.js',
        path: __dirname + './dist' /* Global variable suply by node - Create a virtual folder */
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [ /* Define our loader to compile our files */
            { test: /\.ts$/, use: 'awesome-typescript-loader'} /* It will use awesome-typescri-tloader for .ts file */
        ]
    },
    devServer: {
        port: 3000 /* Define the port of our server (autocompile our code) */
    }
}
