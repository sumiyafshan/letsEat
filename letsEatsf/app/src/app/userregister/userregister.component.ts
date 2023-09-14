import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  datas:any
  stat:any
  constructor(public route:Router,public test:TestService){}
  reg(datas:any){
    console.log("clicked");
    console.log(datas);
    this.test.regapi(datas).subscribe(data1=>{
      console.log(data1);
      this.stat=data1
      console.log(this.stat);
      
      if(this.stat.status==200)
      {
        console.log("status 200");
        alert("success")
        this.route.navigate(['/userdashboard']) 
        } 
        else{
          alert("enter all the mandatory fields")
        }
      }) 
 
}
 
}
