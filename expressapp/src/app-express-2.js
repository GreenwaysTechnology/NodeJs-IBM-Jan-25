const express = require('express')

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
app.listen(3000, () => {
    console.log('Express Server is Running!')
});