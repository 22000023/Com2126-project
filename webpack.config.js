const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        login: './src/login.js',
        main: './src/main.js',
        f1:'./src/F1.js',
        f2:'./src/F2.js',
        f3:'./src/F3.js',
        f4:'./src/F4.js',
        f5:'./src/F5.js',
        dbsamale:'./src/DBSAMale.js',
        dbsafemale:'./src/DBSAFemale.js',
        newmale:'./src/NewMale.js',
        newfemale:'./src/NewFemale.js'

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' // Output bundle name will match the entry key (index.bundle.js, login.bundle.js)
    },
    watch: true
};
