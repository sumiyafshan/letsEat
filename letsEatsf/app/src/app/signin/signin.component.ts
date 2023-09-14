import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(public route:Router,public test:TestService){}
  data:any
call(data:any){
  console.log("signincomponent",data);
  
   this.test.callapi(data).subscribe(data=>{
    
    console.log(data);
    console.log(this.data);
    
   this.data=data
if(this.data.status==200){
  this.test.userid=this.data.data._id
                                               console.log(this.test.userid);
  
                                             //  this.test.userid=this.data._id
alert("login successfully")
  this.route.navigate(['/userdashboard'])
  
}
else{
  console.log("status 500");
  alert(this.data.msg)
  
}
    console.log(data);
    
  })

  
}

}


