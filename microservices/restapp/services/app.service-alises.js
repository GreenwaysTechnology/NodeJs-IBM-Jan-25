const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({ transporter: 'TCP' })


//back end service

broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello!';
        },
        sayHai() {
            return 'Hai!';
        },
        sayGreet() {
            return 'Greet!';
        }
    }

})

//create service,convert that as api gateway


broker.createService({
    name: 'apiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "hello": "greeter.sayHello",
                "hai": "greeter.sayHai"
            }
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