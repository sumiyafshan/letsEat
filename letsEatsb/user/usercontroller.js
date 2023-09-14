const usermodel=require('./userschema')
const addcustomer=(req,res)=>{
    let newcustomer=new usermodel({
        name:req.body.name,
        location:req.body.location,
        address:req.body.address,
        email:req.body.email,
        password:req.body.password
        })
    newcustomer.save().then(data=>
        {
            console.log("add customers");
                res.json({
                          status:200,
                          data:data
            })
        }).catch(err=>{
            console.log("please check");
            res.json({
                      status:500,
                      error:err
            })
})
      }
console.log("can't view foods");



const userlogin=(req,res)=>{
    console.log(req.body.email);
    console.log(req.body.password);
    usermodel.findOne({email:req.body.email}).exec().then(data=>
       {
      if( data.password==req.body.password)
       {
       console.log("login success");
       res.json({
                         status:200,
                         data:data
           })
       }
       else{
           console.log("invalid password");
       
           res.json({
                   status:500,
                    msg:"check your password"
                    })

}
     }).catch(err=>{
       console.log("check your mail");
       res.json({status:500,
                 msg:"user not defined",
                 error:err})
     })
   }
   
      module.exports={addcustomer,userlogin}