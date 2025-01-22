const fs = require('fs')
const path = require('path')

//const filePath = './src/assets/info.txt'
const filePath = path.join(__dirname, "assets/info.txt")

const options = {
    encoding: 'UTF-8'
}
function blockMe(message) {
    console.log(message)
}
//async api to read file
blockMe('start')
const data = fs.readFileSync(filePath, options)
console.log(data)
blockMe('end')