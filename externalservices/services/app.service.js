const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP"
})

broker.createService({
    name: 'post',
    actions: {
        list: {
            async handler(ctx) {
                return this.list()
            }
        }
    },
    methods: {
        //private methods
        async list() {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            try {
                const posts = await fetch(url)
                return await posts.json()
            }
            catch (err) {
                console.log(err)
            }
        },
        // Todo fetch posts by id

    }
})
async function main() {
    try {
        //start the broker 
        await broker.start()
        //use repl prompt
        broker.repl()

    } catch (err) {
        console.log(err)
    }
}
main()