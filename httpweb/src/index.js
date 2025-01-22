const http = require('node:http')

//create server object
const server = http.createServer((req, res) => {

    //read data : attach req object listener
    let data = ''
    req.on('data', (chunk) => {
        //chunk
        console.log(chunk + " ")
        data+=chunk
    })
    //send the chunk/response 
    req.on('end', () => {
        res.end(data)
    })

})
//start the server
server.listen(3000, () => {
    console.log('server is ready')
})
//attach server event
server.on('request', (req, res) => {
    console.log('Request Recived on', new Date(), "URL is", req.url, "method ", req.method)
})