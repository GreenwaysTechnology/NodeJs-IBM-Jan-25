const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//tcp based api(Service)
broker.createService({
    name: 'greeter',
    actions: {
        //apis for service :biz methods 
        sayHello() {
            return "Hello"
        },
        sayHai(){
            return "Hai"
        }
    }
})


async function main() {
    try {
        await broker.start()
        console.log('Broker Started')
        //invoke service
        const hello = await broker.call('greeter.sayHello')
        const hai = await broker.call('greeter.sayHai')
        console.log(hello,hai)
    }
    catch (err) {
        console.log(err)
    }
}
main()