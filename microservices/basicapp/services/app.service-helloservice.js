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


async function main() {
    try {
        await broker.start()
        console.log('Broker Started')
        //invoke service
        const response = await broker.call('hello.sayHello')
        console.log(response)
    }
    catch (err) {
        console.log(err)
    }
}
main()