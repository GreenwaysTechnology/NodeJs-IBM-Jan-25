const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//tcp based api(Service)
broker.createService({
    name: 'hello',
    actions: {
        //apis for service :biz methods 
        sayHello(ctx) {
            // const params = ctx.params
            // console.log(params)
            const { message, toWhom } = ctx.params
            return `${message} ${toWhom}`
        }
    }
})


async function main() {
    try {
        await broker.start()
        console.log('Broker Started')
        //invoke service
        const hello = await broker.call('hello.sayHello', { message: 'Hello', toWhom: 'Subramanian' })
        console.log(hello)
    }
    catch (err) {
        console.log(err)
    }
}
main()