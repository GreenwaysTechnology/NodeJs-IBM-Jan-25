const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const app = express()
//register middlewares
app.use(bodyParser.json())

app.use('/api/customers', require('./routers/customer.router'))
app.use('/api/products', require('./routers/products.router'))

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express server is running @ ${server.address().port}`)
});