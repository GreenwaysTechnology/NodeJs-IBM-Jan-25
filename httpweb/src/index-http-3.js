const http = require('node:http')

//create server object
const server = http.createServer((req, res) => {
    //write request and response handling
    res.writeHead(200, {
        'Content-Type': 'plain/text',
    });
    res.write("Hello")
    res.end()
})
//start the server
server.listen(3000, () => {
    console.log('server is ready')
})
//attach server event
server.on('request',(req,res)=>{
    console.log('Request Recived on', new Date(), "URL is", req.url, "method ", req.method)
})