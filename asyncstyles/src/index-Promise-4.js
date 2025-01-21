
function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        //timer with promise
        return new Promise((resolve, reject) => {
            //any async apis
            setTimeout(resolve, 1000, 'login success')
        })
    } else {
        return new Promise((resolve, reject) => {
            //any async apis
            setTimeout(reject, 1000, 'login failed')
        })
    }
}

function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))

    login('ddd', 'adfa')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    blockMe('end')
}
main()