const ordermodel=require('./orderschema')
const addorders=(req,res)=>{
    let date=new Date()
    console.log(req.body.fooditem);
    let neworder=new ordermodel({
        userid:req.params.userid,
        fooditem:req.body.fooditem,
        address:req.body.address,
        quantity:req.body.quantity,
        price:req.body.price,
        date:date,
        payment:req.body.payment
       
    })
    neworder.save().then(data=>
        {
            console.log("order save");
                res.json({
                          status:200,
                          data:data
            })
        }).catch(err=>{
            console.log("not save");
            res.json({
                      status:500,
                      error:err
            })
})
      }

      const payorders=(req,res)=>{
      ordermodel.findByIdAndUpdate({_id:req.params._id},{paymentstatus:"paid"}).exec().then(data=>{
            console.log("successfully paid");
           
            res.json({
                status:200,
                data:data
            })
        }).catch(err=>{
            console.log("please check ypur number");
            console.log(err);
            res.json({
                      status:500,
                      error:err
                     })
                   
    })
      }


      const admnvieworder=(req,res)=>{
        ordermodel.find({}).populate('userid').exec().then(data=>{
             console.log("admin view all orders");
             res.json({
                 status:200,
                 data:data
             })
         }).catch(err=>{
             console.log("can't view orders");
             res.json({
                       status:500,
                       error:err
                      })
                    
     })
       }
    

       const myorders=(req,res)=>{
        ordermodel.find({userid:req.params.userid}).exec().then(data=>{
             console.log("user view my orders");
             res.json({
                 status:200,
                 data:data
             })
         }).catch(err=>{
             console.log("can't view orders");
             res.json({
                       status:500,
                       error:err
                      })
                    
     })
       }
    
      module.exports={addorders,payorders,admnvieworder,myorders}