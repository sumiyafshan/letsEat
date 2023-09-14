import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
userid:any
orderid:any
  constructor(private http:HttpClient) { }
  //food
  addapi(data:any){
    return this.http.post("http://localhost:3000/addfood",data)
  }
  viewapi(){
    return this.http.post("http://localhost:3000/adminviewfud","")
  }
  delapi(food:any){
    return this.http.post("http://localhost:3000/admindelete",food) 
  }
  
  idfudapi(fudid:any){
    return this.http.post(`http://localhost:3000/viewbyidfud/${fudid}`,"") 
  }
 updtapi(id:any,_id:any){
  
    return this.http.post(`http://localhost:3000/adminedit/${_id}`,id) 
  }
  adminvworder(){
    return this.http.post("http://localhost:3000/adminvieworders","")
  }

  
  // users
callapi(data:any){
  return this.http.post("http://localhost:3000/userlogin",data )
}
regapi(datas:any){
  return this.http.post("http://localhost:3000/addcustomer",datas )
}
userviewfd(){
  return this.http.post("http://localhost:3000/userviewfud","" )
}
orderapi(fooditem:any){
  return this.http.post(`http://localhost:3000/showFoodByName/${fooditem}`,fooditem)  
}
confirmapi(user:any,userid:any){
  console.log(userid);
  return this.http.post(`http://localhost:3000/addorderitems/${userid}`,user)
}
payapi(_id:any){
  console.log(_id);
  return this.http.post(`http://localhost:3000/paymentitems/${_id}`,'')
}
myorderapi(userid:any){
  return this.http.post(`http://localhost:3000/myorders/${userid}`,"")
}
}
