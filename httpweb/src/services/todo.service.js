const { resolve } = require("path")

const TODOS = [
    { id: 1, text: 'learn Node', status: true },
    { id: 2, text: 'learn AI', status: false }
]
class TodoService {
    constructor() {

    }
    //sync api
    // findAll() {
    //     return [{ id: 1, text: 'learn Node', status: true }, { id: 2, text: 'learn AI', status: false }]
    // }
    //async api -callback style
    // findAll(callback) {
    //     setTimeout(callback, 1000, TODOS)
    // }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, TODOS)
        })
    }
}
module.exports = new TodoService()