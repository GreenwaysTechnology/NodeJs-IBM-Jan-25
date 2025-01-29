const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//parent service objects
const hello = {
    name: 'hello',
    actions: {
        hello() {
            return "Hello"
        }
    }
}
const hai = {
    name: 'hai',
    actions: {
        hai() {
            return "Hai"
        }
    }
}
broker.createService({
    name: 'greeter',
    mixins: [hello, hai],
    actions: {
        //greeter specific methods 
        greet(){
            return "greet"
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