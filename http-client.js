const http = require('http') 

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8')
    res.on('err', err => console.log(err))
    res.on('data', data => console.log(data))
})
