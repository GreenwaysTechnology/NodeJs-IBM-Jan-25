const express = require('express')
const customerService = require('../services/customer.service')

const customerRouter = express.Router()


//router Middleware
customerRouter.use(function (req, res, next) {
    console.log('Middleware for all Customer api and url')
    next()
})

customerRouter.get('/', async (req, res, next) => {
    console.log('customer get middleware')
    next()
})

//apis
customerRouter.get('/', async (req, res) => {
    try {
        const result = await customerService.findAll()
        res.json(result)
    }
    catch (err) {
        console.log(err)
        res.status(404).end("something went wrong")
    }
})

customerRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const customerId = await customerService.findById(id)
        res.end(customerId)
    }
    catch (err) {
        console.log(err)
        res.status(404).end("something went wrong")
    }
})
customerRouter.post('/', async (req, res) => {
    try {

        const payload = req.body
        const response = await customerService.save(payload)
        res.status(201).json({ message: response })

    }
    catch (err) {
        res.status(404).end("something went wrong")
    }
})
customerRouter.put('/', async (req, res) => {
    try {
        const result = await customerService.update()
        res.status(200).end(result)
    }
    catch (err) {
        res.status(404).end("something went wrong")
    }
})
customerRouter.delete('/', async (req, res) => {
    try {
        const result = await customerService.remove()
        res.status(200).end(result)
    }
    catch (err) {
        res.status(404).end("something went wrong")
    }
})

module.exports = customerRouter