const { readdir } = require('fs');
const { extname } = require('path');

const extension = `.${process.argv[3]}`;

readdir(process.argv[2], (err, list) => {
    if(err) {
        console.log(err);
    }
    list.filter(x => extname(x) === extension)
        .forEach(x=>console.log(x));
})
