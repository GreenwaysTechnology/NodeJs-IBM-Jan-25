
//resolve = success; reject=failure
const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'Loginsuccess')
    } else {
        setTimeout(reject, 1000, 'Login is failed')
    }
}
function main() {
    login('admin', 'admin', (status) => {
        console.log(status)
    }, (err) => {
        console.log(err)
    })
    login('foo', 'bar', (status) => {
        console.log(status)
    }, (err) => {
        console.log(err)
    })
}
main()


