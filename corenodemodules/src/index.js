//events module
const EventEmitter = require('node:events')

class Sales extends EventEmitter {
    constructor() {
        super()
        //register listener
        this.on('sold', (evt) => {
            console.log(evt)
        })
    }
    //biz method
    sale(product) {
        //emit event
        this.emit('sold', product)
    }

}
let sales = new Sales()
sales.sale({ id: 1, name: 'p1', qty: 100, cost: 300 })