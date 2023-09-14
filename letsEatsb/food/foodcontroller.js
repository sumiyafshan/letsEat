const fudmodel=require('./foodschema')
const mongoose=require('mongoose')
const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
 })

 const upload=multer({storage:storage}).single('img')

const addFood=(req,res)=>{

    console.log(req.file);
    let newfood=new fudmodel({
        fooditem:req.body.fooditem,
        category:req.body.category,
        quantity:req.body.quantity,
        price:req.body.price,
    //    img:req.file.filename
        })
    newfood.save().then(data=>
        {
            console.log("food save");
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
      



    const viewfud=(req,res)=>{
        fudmodel.find({}).exec().then(data=>{
             console.log("admin view all foods");
             res.json({
                 status:200,
                 data:data
             })
         }).catch(err=>{
             console.log("can't view foods");
             res.json({
                       status:500,
                       error:err
                      })
                    
     })
       }
      const delfud=(req,res)=>{
        fudmodel.findOneAndDelete({food:req.body.food}).exec().then(data=>{
             console.log("deleted");
             res.json({
                 status:200,
                 msg:"deleted",
                 data:data
             })
         }).catch(err=>{
             console.log("can't delete");
             res.json({
                       status:500,
                       error:err
                      })
                      console.log(err);
     })
       }
       const edtfud=(req,res)=>{
console.log("in back"+req.body._id);
        fudmodel.findByIdAndUpdate({_id:(req.params._id)},
            {fooditem:req.body.fooditem,
             category:req.body.category,
             quantity:req.body.quantity,
             price:req.body.price}).exec().then(data=>{
            console.log("we edited");
            res.json({
                status:200,
                msg:"edited",
                data:data
            })
            }).catch(err=>{
                console.log("can't edit");
                res.json({
                    status:500,
                    error:err,
                  })
                console.log(err);
            })
       }
       const idviewfd=(req,res)=>{
        fudmodel.findById({_id:req.params.id}).exec().then(data=>{
            console.log(data);
            res.json({
                status:200,
                data:data
            })
        }).catch(err=>{
            console.log("we can't see");
            res.json({
                status:500,
                error:err
            })
        })
       }

       const uservwfd=(req,res)=>{
        fudmodel.find({}).exec().then(data=>{
             console.log("customer view all foods");
             res.json({
                 status:200,
                 data:data
             })
         }).catch(err=>{
             console.log("can't view foods");
             res.json({
                       status:500,
                       error:err
                      })
                    
     })
       }
       const orderfd=(req,res)=>{
        fudmodel.findOne({fooditem:req.params.fooditem}).exec().then(data=>{
             console.log("order food item");
             res.json({
                 status:200,
                 data:data
             })
         }).catch(err=>{
             console.log("pls try again");
             res.json({
                       status:500,
                       error:err
                      })
                    
     })
       }
      module.exports={addFood,viewfud,delfud,edtfud,idviewfd,uservwfd,orderfd,upload}