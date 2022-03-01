const { readdir } = require('fs');
const { extname } = require('path');

module.exports = function(dirName, fileExt, cb) {
    readdir(dirName, (err, list) => {
        if(err) return cb(err);
        return cb(null, list.filter(x => extname(x).slice(1) === fileExt))
        })
}
