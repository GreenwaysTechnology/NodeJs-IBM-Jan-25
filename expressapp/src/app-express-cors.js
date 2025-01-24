const express = require('express');
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 3000
const app = express()

const corsOptions = {
    origin: 'http://www.abce.com'
}
// Enable for all
app.use(cors())

//enable for only http://www.abce.com
app.get('/api/customers/:id', cors(corsOptions), (req, res) => {
    res.json({ msg: 'customers' })
})

app.get('/api/products/:id', cors({origin:'http://127.0.0.1:5500'}), (req, res) => {
    res.json({ msg: 'products' })
})
app.get('/api/greet', (req, res, next) => {
    res.json({ msg: 'greet' })
})

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express server is running @ ${server.address().port}`)
});