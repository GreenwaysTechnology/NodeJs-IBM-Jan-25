const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//tcp based api(Service)
// broker.createService({
//     name: 'math',
//     actions: {
//         //apis for service :biz methods 
//         sum(ctx) {
//             const { a, b } = ctx.params
//             return a + b
//         }
//     }
// })
broker.createService({
    name: 'math',
    actions: {
        sum: {
            //meta data for this method
            // params: {
            //     //validation logic for incoming parameters(a,b)
            //     a: "number",
            //     b: "number"
            // },
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
        //invoke service
        // const sum = await broker.call('math.sum', { a: 10, b: 30 })
        // const sum = await broker.call('math.sum', { a: '10', b: '30' })
        const sum = await broker.call('math.sum', { a: -10, b: 30 })

        console.log(sum)
    }
    catch (err) {
        console.log(err)
    }
}
main()