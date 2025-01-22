const fs = require('node:fs')
const fsPromise = require('node:fs/promises')


const blockMe = message => console.log(message)

function readMyFile(callback) {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    fs.readFile(filePath, options, callback)
}
function readFileAsPromise() {
    return new Promise((resolve, reject) => {
        const filePath = './src/assets/info.txt'
        const options = {
            encoding: 'UTF-8'
        }
        fs.readFile(filePath, options, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

async function logFile() {
    try {
        const filePath = './src/assets/info.txt'
        const contents = await fsPromise.readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        console.error(err.message);
    }
}

async function main() {
    blockMe('start')
    readMyFile((err, data) => {
        if (err) throw err
        console.log(data)
    })
    blockMe('end')
    // readFileAsPromise().then(data=>console.log(data)).catch(err=>console.log(err))
    try {
        const data = await readFileAsPromise()
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
    logFile();

}
main()