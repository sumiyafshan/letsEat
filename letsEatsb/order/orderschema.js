const mongoose=require('mongoose')
const orderschema=mongoose.Schema
({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customers'},
    fooditem:String,
    address:String,
    quantity:Number,
    price:Number,
    date:Date,
    payment:Number,
    paymentstatus:{
        type:String,
        default:"pending"}
   
})
const order=mongoose.model("orderitems",orderschema)
module.exports=order