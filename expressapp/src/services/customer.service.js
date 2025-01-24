const CUSTOMERS = require('../mock-data/customers')

class CustomerService {
    constructor() {

    }
    //api
    findAll() {
        return Promise.resolve(CUSTOMERS)
    }
    findById(id) {
        return Promise.resolve(id)
    }
    save(data) {
        console.log(data)
        return Promise.resolve('save')
    }
    remove() {
        return Promise.resolve('Remove')
    }
    update() {
        return Promise.resolve('update')
    }
}

module.exports = new CustomerService()