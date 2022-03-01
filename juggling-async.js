const urls = process.argv.slice(2);
const http = require('http');

responses = {}
count = 0

urls.forEach(url => {
    responses[url] = []
    http.get(url, res => {
        res.setEncoding('utf8')
        res.on('data', data => responses[url].push(data))
        res.on('end', data => {
            count += 1
            if(count === urls.length) {
                for (let [url, arr] of Object.entries(responses)) {
                    console.log(arr.join(''))
                }                
            }
        })
    })
})
