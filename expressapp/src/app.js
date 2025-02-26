const express = require('express');
require('dotenv').config()
const morgan = require('morgan')
const fs = require('node:fs')
const path = require('node:path')
const PORT = process.env.PORT || 3000
const app = express()


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
//register logger
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(morgan('combined', { stream: accessLogStream }))

app.use('/api/customers', require('./routers/customer.router'))
app.use('/api/products', require('./routers/products.router'))

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express server is running @ ${server.address().port}`)
});