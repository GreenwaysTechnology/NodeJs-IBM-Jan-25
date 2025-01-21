
function blockMe(message) {
    console.log(message)
}
function getSuccess() {
    //factory method to return promise with 0ms
    return Promise.resolve('success')
}

function main() {
    blockMe('start')
    getSuccess().then(status => console.log(status))
    blockMe('end')
}
main()