const express = require('express')
//console.log(express)

//create application object
const app = express()

//console.log(app)

//expose api
app.get('/api/hello',(req,res)=>{
    res.end('hello')
})

//start server
app.listen(3000, () => {
    console.log('Express Server is Running!')
});