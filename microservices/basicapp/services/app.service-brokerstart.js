const { ServiceBroker } = require('moleculer')
//create instance of ServiceBroker 

const broker = new ServiceBroker()


async function main() {
    //start the broker which is eq to webserver
    // broker.start().then(() => {
    //     console.log('Broker started')
    // }).catch(err => console.log(err))
    try {
        await broker.start()
        console.log('Broker Started')
    }
    catch (err) {
        console.log(err)
    }
}
main()