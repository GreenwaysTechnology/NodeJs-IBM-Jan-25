const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//tcp based api(Service)
broker.createService({
    name: 'hello',
    actions: {
        //apis for service :biz methods 
        sayHello() {
            return "Hello"
        }
    }
})
broker.createService({
    name: 'hai',
    actions: {
        sayHai() {
            return "Hai"
        }
    }
})


async function main() {
    try {
        await broker.start()
        console.log('Broker Started')
        //invoke service
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')
        console.log(hello, hai)
    }
    catch (err) {
        console.log(err)
    }
}
main()