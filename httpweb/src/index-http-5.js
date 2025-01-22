const http = require('node:http')
const todoService = require('./services/todo.service')

//create server object
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.write(JSON.stringify(todoService.findAll()))
    res.end()
})
//start the server
server.listen(3000, () => {
    console.log('server is ready')
})
//attach server event
server.on('request', (req, res) => {
    console.log('Request Recived on', new Date(), "URL is", req.url, "method ", req.method)
})