const express=require('express')
const router=express.Router()

const user=require('./user/usercontroller')
router.post('/addcustomer',user.addcustomer)
router.post('/userlogin',user.userlogin)

const food=require('./food/foodcontroller')
router.post('/addfood',food.upload,food.addFood)
router.post('/adminviewfud',food.viewfud)
router.post('/admindelete',food.delfud)
router.post('/adminedit/:_id',food.edtfud)
router.post('/viewbyidfud/:id',food.idviewfd)


router.post('/userviewfud',food.uservwfd)
router.post('/showFoodByName/:fooditem',food.orderfd)


const order=require('./order/ordercontroller')
router.post('/addorderitems/:userid',order.addorders)
router.post('/paymentitems/:_id',order.payorders)
router.post('/adminvieworders',order.admnvieworder)
router.post('/myorders/:userid',order.myorders)

module.exports=router