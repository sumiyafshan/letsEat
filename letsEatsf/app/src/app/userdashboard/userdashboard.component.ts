import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  data:any
  fooditem:any
 constructor(private route:Router,private test:TestService){
  test.userviewfd().subscribe(result=>{
           console.log(result);
       this.data=result
           
         })
       }
       order(fooditem:any){
         this.route.navigate([`orderconfirm/${fooditem}`])    
       }
}
