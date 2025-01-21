const getUser = () => {
    console.log('getUser is called')
    return new Promise((resovle, reject) => {
        let user = {
            name: 'admin'
        }
        // user=null
        if (user) {
            setTimeout(resovle, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User is not found')
        }
    })
}

const login = user => {
    console.log('login is called')
    return new Promise((resovle, reject) => {
        if (user.name === 'admin') {
            setTimeout(resovle, 1000, 'login is success')
        } else {
            setTimeout(reject, 1000, 'login is failed')
        }
    })
}
const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resovle, reject) => {
        if (status === 'login is success') {
            setTimeout(resovle, 1000, 'welcome to dashboard')
        } else {
            setTimeout(reject, 1000, 'welcome to guest')
        }
    })
}

async function main() {

    // getUser()
    //     .then(user => login(user))
    //     .then(status => showDashboard(status) )
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))
    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashboard(status)
        console.log(page)
    }
    catch (err) {
        console.log(err)
    }

}
main()