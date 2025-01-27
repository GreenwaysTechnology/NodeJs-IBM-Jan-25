const mongoose = require('mongoose')

//create schema
const schema = mongoose.Schema({
    title:String,
    content:String
})
//create model out of schema
module.exports=mongoose.model("Post",schema)