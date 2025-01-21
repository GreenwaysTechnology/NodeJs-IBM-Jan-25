const todoService = require('./services/todo.service')
function main() {
    console.log(todoService.findAll())
}
main()