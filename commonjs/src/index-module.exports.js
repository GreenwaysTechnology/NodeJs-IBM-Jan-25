const TodoService = require('./services/todo.service')
function main(){
    console.log(TodoService)
    //create Object
    const todoService = new TodoService()
    console.log(todoService.findAll())
}
main()