const http = require('node:http')

//create server object
const server = http.createServer((req, res) => {
    //write request and response handling
    res.write("Hello")
    res.end()
})
//start the server
server.listen(3000, () => {
    console.log('server is ready')
})