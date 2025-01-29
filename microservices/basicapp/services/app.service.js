const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    serializer: "JSON" // not necessary to set, because it is the default
})

broker.createService({
    name: "products",
    actions: {
        //here we write biz logic
        async findAll(ctx) {
            return await ctx.call('inventory.findAll')
        }
    }
})
broker.createService({
    name: "inventory",
    actions: {
        findAll() {
            const products = [{
                id: 1,
                name: 'Iphone',
                qty: 100,
                price: 1000
            }]
            return new this.Promise((resolve, reject) => {
                setTimeout(resolve, 1000, products)
            })
        }
    }
})


async function main() {
    try {
        //start service broker: start webserver
        await broker.start()
        broker.repl()

    }
    catch (err) {
        console.log(err)
    }
}
main()
