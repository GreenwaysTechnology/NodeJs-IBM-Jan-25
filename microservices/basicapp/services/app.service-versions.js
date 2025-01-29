const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    serializer: "JSON"
})

broker.createService({
    name: 'math',
    version: 1,
    actions: {
        add(ctx) {
            const { a, b } = ctx.params
            return a + b
        }
    }
})
broker.createService({
    name: 'math',
    version: 2,
    actions: {
        add(ctx) {
            const { a, b } = ctx.params
            return a + b
        },
        multiply(ctx) {
            const { a, b } = ctx.params
            return a + b
        }
    }
})

async function main() {
    try {
        await broker.start()
        console.log('Broker Started')
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()