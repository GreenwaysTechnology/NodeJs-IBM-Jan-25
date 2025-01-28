const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        sum: {
                  params: {
                //validation logic for incoming parameters(a,b)
                a: {
                    type: 'number', positive: true, integer: true
                },
                b: {
                    type: 'number', positive: true, integer: true
                },
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a + b
            }
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