const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({ transporter: 'TCP' })


//back end service
broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return "Hello Rest!"
        }
    }
})

//create service,convert that as api gateway

broker.createService({
    name: 'apiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [{
            path: '/api'
        }]
    }
})


async function main() {
    try {
        await broker.start()
    }
    catch (err) {

    }
}
main()