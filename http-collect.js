const http = require('http')

http.get(process.argv[2], res => {
    res.setEncoding('utf8');
    acc = [];
    res.on('data', data => acc.push(data));
    res.on('end', data => {
        str = acc.join('')
        console.log(str.length);
        console.log(str);
    })
})
