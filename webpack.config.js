const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        login: './src/login.js',
        main: './src/main.js',
        f1:'./src/F1.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' // Output bundle name will match the entry key (index.bundle.js, login.bundle.js)
    },
    watch: true
};
