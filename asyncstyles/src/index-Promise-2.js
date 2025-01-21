
function blockMe(message) {
    console.log(message)
}
function getError() {
    //factory method to return promise with 0ms
    return Promise.reject('something went wrong')
}

function main() {
    blockMe('start')
    getError().catch(err => console.log(err))
    blockMe('end')
}
main()