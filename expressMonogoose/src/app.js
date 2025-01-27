const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
//test mongodb is connected or not
async function connectDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/myDb")
        console.log("Mongodb is connected")
        app.listen(PORT, () => {
            console.log('Express Mongo is running')
        })
    }
    catch (err) {
        console.log(err)
    }
}
connectDb()

app.use('/api/posts',require('./routers/post.router'))

app.get('/', (req, res) => {
    res.end('Home page')
})

