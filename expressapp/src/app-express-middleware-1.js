const express = require('express');

const PORT = 3000
const app = express()

//middlewars

//global middleware which is called for all url,all methods
app.use((req, res, next) => {
    //middleware logic
    console.log('Middleware logic')
    //we have to call next 
    next()
})

app.get('/api/customers', (req, res) => {
    res.end('customers')
})
app.get('/api/products', (req, res, next) => {
    console.log('this is middleare gets called for products')
    //setting headers at middleware level
    res.set({
        'message': 'products'
    })
    next()
})
//request and response handling 
app.get('/api/products', (req, res) => {
    res.end('products')
})

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express server is running @ ${server.address().port}`)
});