const express = require('express')

const PORT = 3000
const app = express()

app.get('/api/customers',(req,res)=>{
    res.end('GET-Customers')
})
app.post('/api/customers',(req,res)=>{
    res.end('POST-Customers')
})
app.put('/api/customers',(req,res)=>{
    res.end('PUT-Customers')
})
app.delete('/api/customers',(req,res)=>{
    res.end('DELETE-Customers')
})
// app.listen(PORT, () => {
//     console.log(`Express server is running @ ${PORT}`)
// });
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express server is running @ ${server.address().port}`)
});