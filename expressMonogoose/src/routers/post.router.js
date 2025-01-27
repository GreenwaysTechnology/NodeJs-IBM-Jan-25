const express = require('express')
const postRouter = express.Router()
const postService = require('../services/post.service')

postRouter.get('/', async (req, res) => {
    //return posts from datbase
    const posts = await postService.findAll()
    res.json(posts)
})
postRouter.post('/', async (req, res) => {
    const post = req.body
    try {
        const savedPost = await postService.save(post)
        res.status(201).json(savedPost)
    }
    catch (err) {
        res.status(400).json({ err })
    }

})
postRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const post = await postService.findById(id)
        res.json(post)
    }
    catch (err) {
        res.status(404).json({ err: "Post does exits" })
    }

})
postRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const postInput = req.body
    try {
        const post = await postService.update(id, postInput)
        res.json(post)
    }
    catch (err) {
        res.status(404).json({ err: "Post does exits" })
    }

})
postRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await postService.remove(id)
        res.status(204).send()
    }
    catch (err) {
        res.status(404).json({ err: "Post does exits" })
    }

})

module.exports = postRouter