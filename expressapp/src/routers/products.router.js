const express = require('express')
const productService = require('../services/product.service')

const productRouter = express.Router()

//apis
productRouter.get('/', async (req, res) => {
    try {
        const result = await productService.findAll()
        res.json(result)
    }
    catch (err) {
        console.log(err)
        res.status(404).end("something went wrong")
    }
})

module.exports = productRouter