const net = require('net')
const strftime = require('strftime')

const port = process.argv[2]

const server = net.createServer(socket => {
    socket.write(strftime('%F %R', new Date()))
    socket.end('\n')
})

server.listen(port)
