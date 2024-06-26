const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        admin: './src/admistrator.js',
        index: './src/index.js',
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
        filename: '[name].bundle.js' 
    },
    watch: true
};
