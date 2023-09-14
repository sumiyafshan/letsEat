const mongoose=require('mongoose')
const foodschema=mongoose.Schema
({
  
   name:{
    type:String,
    required:true},
   location:{
      type:String,
      required:true},
   address:{
      type:String,
      required:true},
   email:{
      type:String,
      required:true},
   password:{
      type:String,
      required:true}
    
})
const user =mongoose.model("customers",foodschema)
module.exports=user