const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'assets/info.txt')

const options = {
    encoding: 'UTF-8'
}
const inputStream = fs.createReadStream(filePath, options)

//attach events
let data = ''
inputStream.on('data', (chunk) => {
    //console.log(chunk)
    data += chunk
})
inputStream.on('end', () => {
    console.log('end event is called')
    console.log(data)
})
inputStream.on('close', () => {
    console.log('close event is called')
})
inputStream.on('error', (err) => {
    console.log('error event', err)
})