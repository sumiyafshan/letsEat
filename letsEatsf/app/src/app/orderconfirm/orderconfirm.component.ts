import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TestService} from '../services/test.service';
@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrls: ['./orderconfirm.component.css']
})
export class OrderconfirmComponent {
  food:any
  x:any
  data:any
  orderid:any
 
  data2={
   count:0,
   price:5,
   totalprice:0
 }
 
  constructor(public route:Router,private route2: ActivatedRoute,public test:TestService){
   const prodId = this.route2.snapshot.paramMap.get('fooditem');
      console.log(prodId);
    
       this.test.orderapi(prodId).subscribe(data=>{
        console.log(data);
         this.x=data
         this.data2.price=this.x.price
         
       })
    
  } 
 
      
 
   calcPrice(count:any){
     this.data2.totalprice=count*(this.x.data.price)
     console.log(this.data2.totalprice);
     
   }
  
confirm(user:any){
     console.log("user",user);
     console.log(this.test.userid);
     
     this.test.confirmapi(user,this.test.userid).subscribe(ordersaved=>{
       console.log(ordersaved);
  
     this.data=ordersaved
     this.test.orderid=this.data.data._id
     console.log("test",this.test.orderid);
     
         this.route.navigate(['payment'])
     
       })
     
     
     }
}
