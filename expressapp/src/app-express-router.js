const express = require('express');
// const customerRouter = require('./routers/customer.router');
// const productRouter = require('./routers/products.router');
const PORT = 3000
const app = express()

//connect customerRouter with app
// app.use('/api/customers', customerRouter)
// app.use('/api/products', productRouter)
app.use('/api/customers', require('./routers/customer.router'))
app.use('/api/products', require('./routers/products.router'))

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express server is running @ ${server.address().port}`)
});