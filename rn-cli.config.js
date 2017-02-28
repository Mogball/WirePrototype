let blacklist = require('react-native/packager/blacklist');

let config = {
    getBlacklistRE(platform) {
        return blacklist([
            /.idea\/.*/
        ]);
    }
};

module.exports = config;