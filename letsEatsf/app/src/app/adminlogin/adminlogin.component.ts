import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(public route:Router,public test:TestService){}
  username:any
  password:any
  
  check(username:any,password:any){
   
    if(username=="admin")
  {
    if(password=="admin123"){
      console.log("login successfully");
      alert("login successfully")
      this.route.navigate(['admindashboard'])
    }
  }else{
    console.log("invalid password");
    
   }  
  }
  
  
}
