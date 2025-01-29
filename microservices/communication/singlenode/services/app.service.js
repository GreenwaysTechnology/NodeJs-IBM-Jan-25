const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//caller
broker.createService({
    name: 'math',
    actions: {
        add: {
            params: {
                a: 'number',
                b: 'number'
            },
            handler(ctx) {
                const { a, b } = ctx.params
                //local service call
                return ctx.call('adder.add', { a: a, b: b })
            }
        }
    }
})

broker.createService({
    name: 'adder',
    actions: {
        add(ctx) {
            const { a, b } = ctx.params
            return a + b
        }
    }
})

async function main() {
    try {
        //start the broker 
        await broker.start()
        //use repl prompt
        broker.repl()

    } catch (err) {
        console.log(err)
    }
}
main()