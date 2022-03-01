const fs = require('fs');
const path = require('path');

module.exports = function(dirName, fileExt, cb) {
    fs.readdir(dirName, (err, list) => {
        if(err) return cb(err);
        return cb(null, list.filter(x => path.extname(x).slice(1) === fileExt))
        })
}
