    class TodoService {

        findAll() {
            return [{ id: 1, status: true, text: 'learn AI' }]
        }
    }
    //share the class
    // module.exports = TodoService

    //share object of the class
    module.exports = new TodoService()