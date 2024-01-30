//webpack config

const path = require('path');

module.exports = {
    //webpack config
    webpack:{
        //alternative name of 'src'
        alias:{
            // use @ represent src
            '@': path.resolve(__dirname,'src')
        }
    }
}