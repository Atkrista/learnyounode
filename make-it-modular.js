const fls = require('./mymodule.js');

const cb = (err, list) => {
    if(err) {
       console.log(err);
    }
    list.forEach(x => console.log(x));
}

fls(process.argv[2], process.argv[3], cb);
