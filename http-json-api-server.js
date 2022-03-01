const http = require('http')
// const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `https://localhost:${port}`)
    res.writeHead(200, {'Content-Type': 'application/json'})
    if(url.pathname === '/api/parsetime') {
        const date = new Date(url.searchParams.get('iso'))
        res.write(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }))
        res.end()
    }
    if(url.pathname === '/api/unixtime') {
        const date = Date.parse(url.searchParams.get('iso'))
        res.write(JSON.stringify({
            unixtime: date
        }))
        res.end()
    }
})

server.listen(port)
