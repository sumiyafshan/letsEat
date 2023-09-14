import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService} from '../services/test.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  data:any
  constructor(private route:Router,private test:TestService){}
 pay(){
  console.log(this.test.orderid);
  
   this.test.payapi(this.test.orderid).subscribe(paid=>{
   console.log(paid);
  
   
   this.data=paid
   alert("successfully paid")
   this.route.navigate(['/userdashboard'])
  })
}
 
}
