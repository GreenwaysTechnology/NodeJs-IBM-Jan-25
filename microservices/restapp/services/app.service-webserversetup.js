const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({ transporter: 'TCP' })

//create service,convert that as api gateway

broker.createService({
    name: 'apiGateWay',
    mixins: [ApiGateWay]
})


async function main() {
    try {
        await broker.start()
    }
    catch (err) {

    }
}
main()