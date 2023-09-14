const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1/swiggy")
const db=mongoose.connection
db.on("error",console.error.bind("error"))
db.once("open",function(req,res){
    console.log("connected");
})
module.exports.db