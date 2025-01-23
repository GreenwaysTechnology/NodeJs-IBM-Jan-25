const express = require('express')
const customerService = require('./services/customer.service')

const PORT = 3000
const app = express()

app.get('/api/customers', async (req, res) => {
    try {
        const result = await customerService.findAll()
        res.end(result)
    }
    catch (err) {
        console.log(err)
        res.status(404).end("something went wrong")
    }
})
app.post('/api/customers',  (req, res) => {
    try {

        let data = ''
        req.on('data', (chunk) => {
            data += chunk
        })
        req.on('end', async () => {
            const result = await customerService.save(data)
            res.status(201).location("/api/customers/save").end(result)
        })

    }
    catch (err) {
        res.status(404).end("something went wrong")
    }
})
app.put('/api/customers', async (req, res) => {
    try {
        const result = await customerService.update()
        res.status(200).end(result)
    }
    catch (err) {
        res.status(404).end("something went wrong")
    }
})
app.delete('/api/customers', async (req, res) => {
    try {
        const result = await customerService.remove()
        res.status(200).end(result)
    }
    catch (err) {
        res.status(404).end("something went wrong")
    }
})
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express server is running @ ${server.address().port}`)
});