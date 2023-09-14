const mongoose=require('mongoose')
const foodschema=mongoose.Schema
({
 
    fooditem:String,
    // category:RadioNodeList,
    quantity:Number,
    price:Number,
    img:String
   
    
})
const fud =mongoose.model("fooditems",foodschema)
module.exports=fud

